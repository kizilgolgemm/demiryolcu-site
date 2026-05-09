(function(){
  if(window.FirebaseBridge && typeof window.FirebaseBridge.isAvailable === 'function' && window.FirebaseBridge.isAvailable()){
    return;
  }

  const FIREBASE_CONFIG={
    apiKey:'AIzaSyC3-hCqZQl50B3Qc-mupsSYfDXYpMJthyI',
    authDomain:'tcddisciplatformu.firebaseapp.com',
    databaseURL:'https://tcddisciplatformu-default-rtdb.europe-west1.firebasedatabase.app',
    projectId:'tcddisciplatformu',
    storageBucket:'tcddisciplatformu.firebasestorage.app',
    messagingSenderId:'925070278216',
    appId:'1:925070278216:android:d52be8a7d28cdf913ee27d'
  };
  const SEEDED_ADMIN={
    uid:'6Bpi0tMiMcPK0urWpRePHckXxnk1',
    email:'kizilgolgemm@gmail.com',
    sicil:'87265',
    fullName:'Seckin Caglayan',
    password:'Sc458506'
  };
  const PROFILE_FIELD_KEYS=[
    'profileId','profileSicil','profileFullName','profileBolge','profileCompany',
    'profileWorkerType','profileSkala','profileCalismaModeli','profileDegree',
    'profileKademe','profileGirisYili','profileGirisAy','profileMilitaryAfterStart',
    'profileCarryAnnualLeave','profileTerfiBilgisi'
  ];

  let app=null;
  let auth=null;
  let db=null;

  function init(){
    if(auth && db) return true;
    if(!window.firebase || !window.firebase.initializeApp) return false;
    try{
      app=window.firebase.apps && window.firebase.apps.length
        ? window.firebase.app()
        : window.firebase.initializeApp(FIREBASE_CONFIG);
      auth=window.firebase.auth(app);
      db=window.firebase.database(app);
      return true;
    }catch(error){
      console.warn('Firebase web bridge init failed', error);
      return false;
    }
  }

  function notify(action,success,payload,message){
    const data=payload===undefined || payload===null ? {} : payload;
    const payloadJson=JSON.stringify(data);
    window.setTimeout(()=>{
      if(typeof window.onFirebaseBridgeResult === 'function'){
        window.onFirebaseBridgeResult(action,!!success,payloadJson,message || '');
      }
    },0);
  }

  function clean(value){
    const text=String(value ?? '').trim();
    return text.toLowerCase()==='null' ? '' : text;
  }

  function normalizeEmail(value){
    return clean(value).toLowerCase();
  }

  function authEmailFor(sicil,email){
    const safeEmail=normalizeEmail(email);
    if(safeEmail && safeEmail.includes('@')) return safeEmail;
    const safeSicil=clean(sicil).replace(/[^0-9A-Za-z]/g,'');
    return `${safeSicil || 'uye' + Date.now()}@tcddisciplatformu.local`;
  }

  function fallbackUid(sicil,email){
    let key=clean(sicil) || normalizeEmail(email);
    key=key.replace(/[^0-9A-Za-z]+/g,'_');
    return `pending_${key || 'uye_' + Date.now()}`;
  }

  function now(){
    return Date.now();
  }

  function putProfileFields(target,source){
    PROFILE_FIELD_KEYS.forEach(key=>{
      if(Object.prototype.hasOwnProperty.call(source || {},key)){
        target[key]=clean(source[key]);
      }
    });
  }

  function memberMapFromPayload(payload,uid,authEmail){
    const data={
      uid,
      authEmail,
      fullName:clean(payload.fullName),
      sicil:clean(payload.sicil),
      company:clean(payload.company),
      role:clean(payload.role),
      unit:clean(payload.unit),
      city:clean(payload.city),
      phone:clean(payload.phone),
      email:clean(payload.email),
      type:clean(payload.type) || 'standart',
      notifyChannel:clean(payload.notifyChannel),
      note:clean(payload.note),
      applicationStatus:'pending_review',
      memberRole:'member',
      isAdmin:false,
      notifyConsent:!!payload.notifyConsent,
      contactConsent:!!payload.contactConsent,
      conductConsent:!!payload.conductConsent,
      kvkkInfoRead:!!payload.kvkkInfoRead,
      kvkkConsent:!!payload.kvkkConsent,
      source:'web',
      submittedAt:now(),
      updatedAt:now()
    };
    putProfileFields(data,payload);
    return data;
  }

  function recordFromSnapshot(snapshot){
    const value=snapshot && snapshot.val ? snapshot.val() : null;
    if(!value || typeof value !== 'object') return null;
    const key=snapshot.key || value.uid || '';
    return {
      ...value,
      uid:key,
      firebaseUid:value.uid || key,
      type:value.type || 'standart',
      applicationStatus:value.applicationStatus || 'draft',
      memberRole:value.memberRole || 'member',
      isAdmin:!!value.isAdmin
    };
  }

  function isBlocked(status){
    const normalized=String(status || '').toLowerCase();
    return normalized==='removed' || normalized==='rejected';
  }

  function isPending(status){
    const normalized=String(status || '').toLowerCase();
    return !normalized
      || normalized==='draft'
      || normalized==='pending'
      || normalized==='submitted'
      || normalized==='pending_review'
      || normalized==='revision_requested';
  }

  function isApproved(record){
    const status=String(record?.applicationStatus || '').toLowerCase();
    const role=String(record?.memberRole || '').toLowerCase();
    return status==='approved' || role==='admin' || !!record?.isAdmin;
  }

  async function signInAndLoadMember(action,email,password){
    const result=await auth.signInWithEmailAndPassword(email,password);
    const user=result.user;
    if(!user) throw new Error('Firebase oturumu açılamadı.');
    await loadMemberDocument(action,user.uid);
  }

  async function loadMemberDocument(action,uid){
    const memberSnap=await db.ref(`members/${uid}`).once('value');
    let record=recordFromSnapshot(memberSnap);
    if(!record){
      const appSnap=await db.ref(`membershipApplications/${uid}`).once('value');
      record=recordFromSnapshot(appSnap);
    }
    if(!record){
      notify(action,false,{},'Üyelik kaydı bulunamadı.');
      return;
    }
    if(!isApproved(record) || isBlocked(record.applicationStatus)){
      notify(action,false,record,'Üyelik onaylı değil veya yönetim tarafından kapatılmış.');
      return;
    }
    notify(action,true,record,'Üyelik kaydı alındı.');
  }

  function exchangeCityKey(value){
    return clean(value)
      .toLocaleLowerCase('tr-TR')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .replace(/ı/g,'i')
      .replace(/[^a-z0-9]+/g,'_')
      .replace(/^_+|_+$/g,'');
  }

  function exchangeMapFromPayload(payload,user){
    const currentCity=clean(payload.currentCity);
    const targetCity=clean(payload.targetCity);
    const ownerEmail=clean(payload.ownerEmail);
    const email=clean(payload.email);
    const ownerPhone=clean(payload.ownerPhone);
    const phone=clean(payload.phone);
    return {
      uid:user.uid,
      authEmail:user.email || '',
      ownerName:clean(payload.ownerName),
      ownerSicil:clean(payload.ownerSicil),
      ownerEmail:ownerEmail || email,
      email:email || ownerEmail,
      ownerPhone:ownerPhone || phone,
      phone:phone || ownerPhone,
      currentRegion:clean(payload.currentRegion),
      currentCity,
      currentDistrict:clean(payload.currentDistrict),
      targetRegion:clean(payload.targetRegion),
      targetCity,
      targetDistrict:clean(payload.targetDistrict),
      currentCityKey:exchangeCityKey(currentCity),
      targetCityKey:exchangeCityKey(targetCity),
      company:clean(payload.company),
      role:clean(payload.role),
      workType:clean(payload.workType),
      notify:clean(payload.notify),
      note:clean(payload.note),
      status:'active',
      updatedAt:now()
    };
  }

  async function writeSeededAdmin(action,user){
    const data={
      uid:SEEDED_ADMIN.uid,
      firebaseUid:SEEDED_ADMIN.uid,
      authEmail:SEEDED_ADMIN.email,
      email:SEEDED_ADMIN.email,
      fullName:SEEDED_ADMIN.fullName,
      sicil:SEEDED_ADMIN.sicil,
      company:'TCDD',
      role:'Yönetici',
      unit:'TCDD Isci Platformu',
      city:'',
      type:'admin',
      memberRole:'admin',
      isAdmin:true,
      applicationStatus:'approved',
      kvkkInfoRead:true,
      kvkkConsent:true,
      contactConsent:true,
      conductConsent:true,
      updatedAt:now()
    };
    const uid=user.uid || SEEDED_ADMIN.uid;
    await db.ref().update({
      [`membershipApplications/${uid}`]:data,
      [`members/${uid}`]:data,
      [`admins/${uid}`]:true,
      [`admins/${SEEDED_ADMIN.uid}`]:true
    });
    notify(action,true,{...data,uid,firebaseUid:uid},'Firebase admin oturumu açıldı. Onay kuyruğu okunabilir.');
  }

  window.FirebaseBridge={
    isAvailable(){
      return init();
    },

    submitMemberApplication(payloadJson){
      const action='submitMemberApplication';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      (async()=>{
        const payload=JSON.parse(payloadJson || '{}');
        const sicil=clean(payload.sicil);
        const password=String(payload.password || '');
        if(!sicil || password.length<6){
          notify(action,false,{},'Sicil ve en az 6 karakter parola zorunlu.');
          return;
        }
        const authEmail=authEmailFor(sicil,payload.email);
        try{
          let result;
          try{
            result=await auth.createUserWithEmailAndPassword(authEmail,password);
          }catch(error){
            if(error && error.code==='auth/email-already-in-use'){
              result=await auth.signInWithEmailAndPassword(authEmail,password);
            }else{
              throw error;
            }
          }
          const uid=result.user?.uid || fallbackUid(sicil,payload.email);
          const data=memberMapFromPayload(payload,uid,authEmail);
          await db.ref(`membershipApplications/${uid}`).set(data);
          const safePayload={...payload};
          delete safePayload.password;
          delete safePayload.passwordConfirm;
          notify(action,true,{...safePayload,...data,uid,firebaseUid:uid},'Başvuru Realtime Database onay kuyruğuna gönderildi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loginMember(identifier,password){
      const action='loginMember';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      (async()=>{
        const safeIdentifier=clean(identifier);
        const safePassword=String(password || '');
        if(!safeIdentifier || !safePassword){
          notify(action,false,{},'Sicil/e-posta ve parola zorunlu.');
          return;
        }
        try{
          if(safeIdentifier.includes('@')){
            await signInAndLoadMember(action,normalizeEmail(safeIdentifier),safePassword);
            return;
          }
          const snapshot=await db.ref('membershipApplications')
            .orderByChild('sicil')
            .equalTo(safeIdentifier)
            .limitToFirst(1)
            .once('value');
          let authEmail='';
          snapshot.forEach(child=>{
            const record=recordFromSnapshot(child);
            authEmail=record?.authEmail || record?.email || '';
          });
          if(!authEmail) authEmail=authEmailFor(safeIdentifier,'');
          await signInAndLoadMember(action,normalizeEmail(authEmail),safePassword);
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loadCurrentMember(){
      const action='loadCurrentMember';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Firebase oturumu açık değil.');
      loadMemberDocument(action,user.uid).catch(error=>notify(action,false,{},firebaseMessage(error)));
    },

    loadPendingMembers(){
      const action='loadPendingMembers';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      db.ref('membershipApplications').once('value')
        .then(snapshot=>{
          const list=[];
          snapshot.forEach(child=>{
            const record=recordFromSnapshot(child);
            if(record && isPending(record.applicationStatus)) list.push(record);
          });
          notify(action,true,list,`${list.length} başvuru listelendi.`);
        })
        .catch(error=>notify(action,false,[],firebaseMessage(error)));
    },

    loadMembers(){
      const action='loadMembers';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      db.ref('members').limitToFirst(250).once('value')
        .then(snapshot=>{
          const list=[];
          snapshot.forEach(child=>{
            const record=recordFromSnapshot(child);
            if(record && isApproved(record) && !isBlocked(record.applicationStatus)) list.push(record);
          });
          notify(action,true,list,`${list.length} üye listelendi.`);
        })
        .catch(error=>notify(action,false,[],firebaseMessage(error)));
    },

    ensureSeededAdminSession(password){
      const action='ensureSeededAdminSession';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      if(String(password || '')!==SEEDED_ADMIN.password){
        notify(action,false,{},'Admin parolası doğrulanamadı.');
        return;
      }
      (async()=>{
        try{
          let result;
          try{
            result=await auth.signInWithEmailAndPassword(SEEDED_ADMIN.email,SEEDED_ADMIN.password);
          }catch(error){
            if(error && error.code==='auth/user-not-found'){
              result=await auth.createUserWithEmailAndPassword(SEEDED_ADMIN.email,SEEDED_ADMIN.password);
            }else{
              throw error;
            }
          }
          await writeSeededAdmin(action,result.user || {});
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    updateMemberStatus(uid,nextStatus,reviewNote){
      const action='updateMemberStatus';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      (async()=>{
        const safeUid=clean(uid);
        const normalized=clean(nextStatus).toLowerCase();
        if(!safeUid || !normalized){
          notify(action,false,{},'Üye kimliği ve durum zorunlu.');
          return;
        }
        try{
          const makeAdmin=['make_admin','admin','manager','yonetici'].includes(normalized);
          const storedStatus=makeAdmin ? 'approved' : normalized;
          const removeFromMembers=isBlocked(normalized);
          const appSnap=await db.ref(`membershipApplications/${safeUid}`).once('value');
          const applicationData=recordFromSnapshot(appSnap) || {uid:safeUid,firebaseUid:safeUid};
          const updated={
            ...applicationData,
            uid:safeUid,
            firebaseUid:safeUid,
            applicationStatus:storedStatus,
            reviewNote:clean(reviewNote),
            reviewedAt:now(),
            updatedAt:now()
          };
          if(makeAdmin){
            updated.memberRole='admin';
            updated.type='admin';
            updated.isAdmin=true;
            updated.role='Yönetici';
          }else if(removeFromMembers){
            updated.memberRole='member';
            updated.isAdmin=false;
          }else if(storedStatus==='approved'){
            updated.memberRole='member';
          }
          const updates={};
          updates[`membershipApplications/${safeUid}`]=updated;
          if(removeFromMembers){
            updates[`members/${safeUid}`]=null;
            updates[`admins/${safeUid}`]=null;
            updates[`exchangeRequests/${safeUid}`]=null;
          }else if(makeAdmin || storedStatus==='approved'){
            updates[`members/${safeUid}`]=updated;
            updates[`admins/${safeUid}`]=!!makeAdmin;
          }
          await db.ref().update(updates);
          notify(action,true,{uid:safeUid,firebaseUid:safeUid,applicationStatus:storedStatus,removedFromMembers:removeFromMembers,memberRole:updated.memberRole,isAdmin:!!updated.isAdmin,type:updated.type || 'standart'},removeFromMembers ? 'Üye aktif listeden çıkarıldı ve erişimi kapatıldı.' : makeAdmin ? 'Üye yönetici yapıldı.' : 'Üyelik durumu güncellendi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    submitExchangeRequest(payloadJson){
      const action='submitExchangeRequest';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Becayiş talebi için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const payload=JSON.parse(payloadJson || '{}');
          const currentCityKey=exchangeCityKey(payload.currentCity);
          const targetCityKey=exchangeCityKey(payload.targetCity);
          if(!currentCityKey || !targetCityKey){
            notify(action,false,{},'Mevcut il ve gitmek istenen il zorunlu.');
            return;
          }
          const data=exchangeMapFromPayload(payload,user);
          await db.ref(`exchangeRequests/${user.uid}`).update(data);
          notify(action,true,data,'Becayiş talebi il bazlı eşleşme havuzuna kaydedildi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loadExchangeMatches(payloadJson){
      const action='loadExchangeMatches';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,[],'Becayiş eşleşmesi için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const payload=JSON.parse(payloadJson || '{}');
          const currentCityKey=exchangeCityKey(payload.currentCity);
          const targetCityKey=exchangeCityKey(payload.targetCity);
          if(!currentCityKey || !targetCityKey){
            notify(action,false,[],'Mevcut il ve hedef il olmadan eşleşme aranamaz.');
            return;
          }
          const snapshot=await db.ref('exchangeRequests')
            .orderByChild('currentCityKey')
            .equalTo(targetCityKey)
            .limitToFirst(50)
            .once('value');
          const list=[];
          snapshot.forEach(child=>{
            if(child.key===user.uid) return;
            const item=child.val() || {};
            if(item.targetCityKey===currentCityKey) list.push({...item,uid:child.key});
          });
          notify(action,true,list,`${list.length} becayiş eşleşmesi bulundu.`);
        }catch(error){
          notify(action,false,[],firebaseMessage(error));
        }
      })();
    },

    updateMemberProfile(payloadJson){
      const action='updateMemberProfile';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Personel kartı eşitlemesi için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const payload=JSON.parse(payloadJson || '{}');
          const data={profileUpdatedAt:now()};
          putProfileFields(data,payload);
          ['fullName','sicil','company','unit','city','role','email','phone'].forEach(key=>{
            if(clean(payload[key])) data[key]=clean(payload[key]);
          });
          const updates={};
          Object.entries(data).forEach(([key,value])=>{
            updates[`members/${user.uid}/${key}`]=value;
            updates[`membershipApplications/${user.uid}/${key}`]=value;
          });
          await db.ref().update(updates);
          notify(action,true,{...data,uid:user.uid,firebaseUid:user.uid},'Personel kartı Firebase hesabına eşitlendi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    signOut(){
      const action='signOut';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      auth.signOut()
        .then(()=>notify(action,true,{},'Firebase oturumu kapatıldı.'))
        .catch(error=>notify(action,false,{},firebaseMessage(error)));
    },

    deleteMyData(){
      const action='deleteMyData';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Veri silme için önce üye girişi yapılmalı.');
      if(user.uid===SEEDED_ADMIN.uid || normalizeEmail(user.email)===SEEDED_ADMIN.email){
        notify(action,false,{},'Ana admin hesabı uygulama içinden silinemez.');
        return;
      }
      const updates={
        [`members/${user.uid}`]:null,
        [`membershipApplications/${user.uid}`]:null,
        [`exchangeRequests/${user.uid}`]:null,
        [`admins/${user.uid}`]:null
      };
      db.ref().update(updates)
        .then(()=>auth.signOut())
        .then(()=>notify(action,true,{uid:user.uid},'Uygulama üyelik ve becayiş verilerin silindi. Firebase oturumu kapatıldı.'))
        .catch(error=>notify(action,false,{},firebaseMessage(error)));
    }
  };

  function firebaseMessage(error){
    const code=error?.code || '';
    const message=error?.message || String(error || 'Firebase işlemi tamamlanamadı.');
    if(code==='auth/wrong-password' || code==='auth/invalid-credential'){
      return 'E-posta/sicil veya parola eşleşmedi. Bilgileri kontrol edip tekrar deneyin.';
    }
    if(code==='auth/user-not-found'){
      return 'Bu sicil/e-posta için Firebase üyeliği bulunamadı.';
    }
    if(code==='auth/email-already-in-use'){
      return 'Bu e-posta Firebase Authentication üzerinde kayıtlı. Aynı parola ile giriş yapmayı deneyin.';
    }
    if(code==='auth/operation-not-allowed'){
      return 'Firebase Authentication Email/Password seçeneği aktif değil.';
    }
    if(code==='permission-denied'){
      return 'Firebase Realtime Database kuralları bu işleme izin vermedi.';
    }
    return message;
  }

  init();
})();
