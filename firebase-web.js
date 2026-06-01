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
    'profileCarryAnnualLeave','profileTerfiBilgisi','profilePostabasi'
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
      if(auth.setPersistence && window.firebase.auth.Auth?.Persistence?.LOCAL){
        auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL).catch(error=>{
          console.warn('Firebase auth persistence could not be set', error);
        });
      }
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

  function isRealEmail(value){
    const email=normalizeEmail(value);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !email.endsWith('.local');
  }

  function approvalEmailPayload(record,uid){
    const to=normalizeEmail(record.email || record.ownerEmail || record.contactEmail || record.authEmail);
    if(!isRealEmail(to)) return null;
    const fullName=clean(record.fullName || record.name || record.ownerName) || 'Değerli üyemiz';
    const sicil=clean(record.sicil || record.personnelNo);
    const sentAt=now();
    const htmlName=fullName
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;');
    return {
      uid:clean(uid),
      to,
      type:'membership_approved',
      template:'membershipApproved',
      status:'pending',
      subject:'Üyeliğiniz Onaylanmıştır',
      createdAt:sentAt,
      data:{fullName,sicil},
      message:{
        subject:'Üyeliğiniz Onaylanmıştır',
        text:`Merhaba ${fullName},\n\nTCDD İşçi Platformu üyelik başvurunuz onaylanmıştır. Artık üye girişi yaparak platform alanlarını kullanabilirsiniz.\n\nTCDD İşçi Platformu`,
        html:`<p>Merhaba <strong>${htmlName}</strong>,</p><p>TCDD İşçi Platformu üyelik başvurunuz onaylanmıştır. Artık üye girişi yaparak platform alanlarını kullanabilirsiniz.</p><p><strong>TCDD İşçi Platformu</strong></p>`
      }
    };
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

  function recordFromSnapshot(snapshot,fallbackStatus='draft'){
    const value=snapshot && snapshot.val ? snapshot.val() : null;
    if(!value || typeof value !== 'object') return null;
    const key=snapshot.key || value.uid || '';
    return {
      ...value,
      uid:key,
      firebaseUid:value.uid || key,
      type:value.type || 'standart',
      applicationStatus:value.applicationStatus || fallbackStatus,
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

  function forumClean(value,maxLength){
    const text=clean(value).replace(/\s+\n/g,'\n').replace(/\n{3,}/g,'\n\n');
    return maxLength ? text.slice(0,maxLength) : text;
  }

  function forumAuthorNick(payload){
    const nick=forumClean(payload.authorNick || payload.authorName || '',32);
    return nick || 'Demiryolcu';
  }

  async function approvedForumMember(user){
    if(!user) throw new Error('Forum için önce üye girişi yapılmalı.');
    const memberSnap=await db.ref(`members/${user.uid}`).once('value');
    const member=recordFromSnapshot(memberSnap);
    if(!member || (!isApproved(member) && normalizeEmail(user.email)!==SEEDED_ADMIN.email)){
      throw new Error('Forum için onaylı üyelik gerekir.');
    }
    return member;
  }

  async function currentUserIsAdmin(user){
    if(!user) return false;
    if(normalizeEmail(user.email)===SEEDED_ADMIN.email) return true;
    const adminSnap=await db.ref(`members/${user.uid}/isAdmin`).once('value');
    return adminSnap.val()===true;
  }

  function isProtectedAdminRecord(record={}){
    const email=normalizeEmail(record.email || record.authEmail || record.ownerEmail);
    const role=clean(record.memberRole || record.type || record.role).toLowerCase();
    return !!record.isAdmin
      || email===SEEDED_ADMIN.email
      || clean(record.sicil)===SEEDED_ADMIN.sicil
      || role==='admin'
      || role==='yonetici'
      || role==='yönetici';
  }

  function forumTopicFromSnapshot(child){
    const value=child && child.val ? child.val() : null;
    if(!value || typeof value!=='object') return null;
    const topicId=child.key || value.topicId || value.id || '';
    return {...value,id:topicId,topicId};
  }

  function forumReplyFromSnapshot(child,topicId){
    const value=child && child.val ? child.val() : null;
    if(!value || typeof value!=='object') return null;
    const replyId=child.key || value.replyId || value.id || '';
    return {...value,id:replyId,replyId,topicId:value.topicId || topicId};
  }

  function forumTopicMapFromPayload(payload,user,member,topicId){
    const title=forumClean(payload.title,120);
    const body=forumClean(payload.body,1800);
    if(title.length<4) throw new Error('Konu başlığı en az 4 karakter olmalı.');
    if(body.length<10) throw new Error('Konu metni en az 10 karakter olmalı.');
    return {
      id:topicId,
      topicId,
      category:clean(payload.category) || 'gundem',
      title,
      body,
      authorUid:user.uid,
      authorName:forumAuthorNick(payload),
      authorNick:forumAuthorNick(payload),
      authorSicil:'',
      authorRole:forumClean(payload.authorRole || (member.isAdmin ? 'Yönetici' : 'Üye'),40),
      status:'active',
      replyCount:0,
      createdAt:now(),
      updatedAt:now(),
      lastActivityAt:now()
    };
  }

  function forumReplyMapFromPayload(payload,user,member,replyId){
    const body=forumClean(payload.body,1200);
    if(body.length<3) throw new Error('Cevap metni en az 3 karakter olmalı.');
    return {
      id:replyId,
      replyId,
      topicId:clean(payload.topicId),
      body,
      authorUid:user.uid,
      authorName:forumAuthorNick(payload),
      authorNick:forumAuthorNick(payload),
      authorSicil:'',
      authorRole:forumClean(payload.authorRole || (member.isAdmin ? 'Yönetici' : 'Üye'),40),
      status:'active',
      createdAt:now()
    };
  }

  async function canModifyForumItem(user,item){
    if(!user || !item) return false;
    if(await currentUserIsAdmin(user)) return true;
    return clean(item.authorUid)===user.uid;
  }

  function announcementFromSnapshot(child){
    const value=child && child.val ? child.val() : null;
    if(!value || typeof value!=='object') return null;
    const announcementId=child.key || value.announcementId || value.id || '';
    return {
      ...value,
      id:announcementId,
      announcementId,
      title:clean(value.title),
      body:clean(value.body || value.text),
      label:clean(value.label) || 'Duyuru',
      href:clean(value.href),
      target:clean(value.target || value.publishTarget) || 'app_platform',
      audience:clean(value.audience) || 'installed_members',
      channel:clean(value.channel) || 'app',
      whatsappText:clean(value.whatsappText),
      imageUrl:clean(value.imageUrl),
      imageDataUrl:clean(value.imageDataUrl),
      status:clean(value.status) || 'active',
      createdAt:Number(value.createdAt || 0),
      installTokenCount:Number(value.installTokenCount || value.tokenCount || 0),
      broadcastStatus:clean(value.broadcastStatus),
      pushSuccessCount:Number(value.pushSuccessCount || value.successCount || 0),
      pushFailureCount:Number(value.pushFailureCount || value.failureCount || 0)
    };
  }

  function enabledNotificationTokenCount(snapshot){
    let count=0;
    if(!snapshot || !snapshot.forEach) return 0;
    snapshot.forEach(userSnap=>{
      userSnap.forEach(tokenSnap=>{
        const value=tokenSnap.val && tokenSnap.val();
        if(value && value.enabled===true && clean(value.token)) count+=1;
      });
    });
    return count;
  }

  function announcementMapFromPayload(payload,user,announcementId){
    const title=clean(payload.title).slice(0,90);
    const body=clean(payload.body || payload.text).slice(0,240);
    if(title.length<3) throw new Error('Duyuru başlığı en az 3 karakter olmalı.');
    if(body.length<6) throw new Error('Duyuru açıklaması en az 6 karakter olmalı.');
    return {
      id:announcementId,
      announcementId,
      title,
      body,
      href:clean(payload.href).slice(0,420),
      label:clean(payload.label).slice(0,24) || 'Duyuru',
      icon:clean(payload.icon) || 'bell',
      target:clean(payload.target || payload.publishTarget).slice(0,24) || 'app_platform',
      audience:clean(payload.audience).slice(0,32) || 'installed_members',
      channel:clean(payload.channel).slice(0,20) || 'app',
      whatsappText:clean(payload.whatsappText).slice(0,600),
      imageUrl:clean(payload.imageUrl).slice(0,700),
      imageDataUrl:clean(payload.imageDataUrl).slice(0,1200000),
      status:'active',
      source:'admin',
      authorUid:user.uid,
      createdAt:now(),
      updatedAt:now()
    };
  }
  function announcementUpdateMapFromPayload(payload,user,announcementId,existing={}){
    const data=announcementMapFromPayload(payload,user,announcementId);
    data.createdAt=Number(existing.createdAt || data.createdAt || now());
    data.authorUid=clean(existing.authorUid) || data.authorUid;
    data.updatedAt=now();
    return data;
  }

  async function forumDeletionUpdatesForUser(uid){
    const updates={};
    const indexSnap=await db.ref(`forumUserIndex/${uid}`).once('value');
    const index=indexSnap.val() || {};
    Object.keys(index.topics || {}).forEach(topicId=>{
      updates[`forumTopics/${topicId}/status`]='deleted';
      updates[`forumTopics/${topicId}/deletedAt`]=now();
      updates[`forumTopics/${topicId}/deletedByUid`]=uid;
    });
    Object.entries(index.replies || {}).forEach(([topicId,replies])=>{
      Object.keys(replies || {}).forEach(replyId=>{
        updates[`forumReplies/${topicId}/${replyId}/status`]='deleted';
        updates[`forumReplies/${topicId}/${replyId}/deletedAt`]=now();
        updates[`forumReplies/${topicId}/${replyId}/deletedByUid`]=uid;
      });
    });
    updates[`forumUserIndex/${uid}`]=null;
    return updates;
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

  async function restoreSeededAdminAfterApplication(){
    const result=await auth.signInWithEmailAndPassword(SEEDED_ADMIN.email,SEEDED_ADMIN.password);
    const uid=result.user?.uid || SEEDED_ADMIN.uid;
    await db.ref().update({
      [`admins/${uid}`]:true,
      [`admins/${SEEDED_ADMIN.uid}`]:true,
      [`members/${uid}/isAdmin`]:true,
      [`members/${uid}/memberRole`]:'admin',
      [`members/${uid}/type`]:'admin',
      [`membershipApplications/${uid}/isAdmin`]:true,
      [`membershipApplications/${uid}/memberRole`]:'admin',
      [`membershipApplications/${uid}/type`]:'admin'
    });
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
        const previousUser=auth.currentUser;
        const shouldRestoreSeededAdmin=normalizeEmail(previousUser?.email)===SEEDED_ADMIN.email;
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
          if(shouldRestoreSeededAdmin){
            try{
              await restoreSeededAdminAfterApplication();
            }catch(restoreError){
              console.warn('Seeded admin session restore failed after membership application', restoreError);
            }
          }
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
      db.ref('members').once('value')
        .then(snapshot=>{
          const list=[];
          snapshot.forEach(child=>{
            const record=recordFromSnapshot(child,'approved');
            if(record && !isBlocked(record.applicationStatus)) list.push(record);
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
          const removeAdmin=['remove_admin','standard_member','standart','uyeye_cevir','yoneticilikten_cikart'].includes(normalized);
          const storedStatus=(makeAdmin || removeAdmin) ? 'approved' : normalized;
          const removeFromMembers=isBlocked(normalized);
          const appSnap=await db.ref(`membershipApplications/${safeUid}`).once('value');
          const applicationData=recordFromSnapshot(appSnap) || {uid:safeUid,firebaseUid:safeUid};
          const actingUser=auth.currentUser;
          if(removeFromMembers && (safeUid===actingUser?.uid || safeUid===SEEDED_ADMIN.uid || isProtectedAdminRecord(applicationData))){
            throw new Error('Aktif yönetici hesabı veya yönetici kaydı üyelikten çıkarılamaz. Önce farklı bir standart üyeyi seçin.');
          }
          const wasApproved=clean(applicationData.applicationStatus).toLowerCase()==='approved';
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
          }else if(removeAdmin){
            updated.memberRole='member';
            updated.type='standart';
            updated.isAdmin=false;
            updated.role='';
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
          }else if(makeAdmin || removeAdmin || storedStatus==='approved'){
            updates[`members/${safeUid}`]=updated;
            updates[`admins/${safeUid}`]=makeAdmin ? true : null;
          }
          if(storedStatus==='approved' && !removeFromMembers && !wasApproved){
            const approvalMail=approvalEmailPayload(updated,safeUid);
            if(approvalMail){
              const mailRef=db.ref('approvalEmails').push();
              const mailKey=mailRef.key;
              updates[`approvalEmails/${mailKey}`]=approvalMail;
              updates[`membershipApplications/${safeUid}/approvalEmailQueuedAt`]=approvalMail.createdAt;
              updates[`membershipApplications/${safeUid}/approvalEmailQueueId`]=mailKey;
              updates[`members/${safeUid}/approvalEmailQueuedAt`]=approvalMail.createdAt;
              updates[`members/${safeUid}/approvalEmailQueueId`]=mailKey;
            }
          }
          await db.ref().update(updates);
          notify(action,true,{uid:safeUid,firebaseUid:safeUid,applicationStatus:storedStatus,removedFromMembers:removeFromMembers,memberRole:updated.memberRole,isAdmin:!!updated.isAdmin,type:updated.type || 'standart'},removeFromMembers ? 'Üye aktif listeden çıkarıldı ve erişimi kapatıldı.' : makeAdmin ? 'Üye yönetici yapıldı.' : removeAdmin ? 'Yönetici yetkisi kaldırıldı, üye standart üye olarak devam ediyor.' : 'Üyelik durumu güncellendi.');
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

    deleteExchangeRequest(){
      const action='deleteExchangeRequest';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Becayiş talebini silmek için önce üye girişi yapılmalı.');
      db.ref(`exchangeRequests/${user.uid}`).remove()
        .then(()=>notify(action,true,{uid:user.uid},'Becayiş talebin Firebase havuzundan silindi.'))
        .catch(error=>notify(action,false,{},firebaseMessage(error)));
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

    loadForumTopics(){
      const action='loadForumTopics';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,[],'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          await approvedForumMember(user);
          const snapshot=await db.ref('forumTopics')
            .limitToLast(80)
            .once('value');
          const list=[];
          snapshot.forEach(child=>{
            const item=forumTopicFromSnapshot(child);
            if(item && item.status!=='deleted') list.push(item);
          });
          list.sort((a,b)=>(Number(b.lastActivityAt)||0)-(Number(a.lastActivityAt)||0));
          notify(action,true,list,`${list.length} forum konusu listelendi.`);
        }catch(error){
          notify(action,false,[],firebaseMessage(error));
        }
      })();
    },

    createForumTopic(payloadJson){
      const action='createForumTopic';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const member=await approvedForumMember(user);
          const payload=JSON.parse(payloadJson || '{}');
          const topicRef=db.ref('forumTopics').push();
          const data=forumTopicMapFromPayload(payload,user,member,topicRef.key);
          const updates={
            [`forumTopics/${topicRef.key}`]:data,
            [`forumUserIndex/${user.uid}/topics/${topicRef.key}`]:true
          };
          await db.ref().update(updates);
          notify(action,true,data,'Forum konusu yayınlandı.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loadForumReplies(topicId){
      const action='loadForumReplies';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,[],'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          await approvedForumMember(user);
          const safeTopicId=clean(topicId);
          if(!safeTopicId) return notify(action,false,[],'Konu kimliği eksik.');
          const snapshot=await db.ref(`forumReplies/${safeTopicId}`)
            .limitToLast(120)
            .once('value');
          const list=[];
          snapshot.forEach(child=>{
            const item=forumReplyFromSnapshot(child,safeTopicId);
            if(item && item.status!=='deleted') list.push(item);
          });
          notify(action,true,list,`${list.length} forum cevabı listelendi.`);
        }catch(error){
          notify(action,false,[],firebaseMessage(error));
        }
      })();
    },

    createForumReply(payloadJson){
      const action='createForumReply';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const member=await approvedForumMember(user);
          const payload=JSON.parse(payloadJson || '{}');
          const safeTopicId=clean(payload.topicId);
          if(!safeTopicId) return notify(action,false,{},'Konu kimliği eksik.');
          const topicSnap=await db.ref(`forumTopics/${safeTopicId}`).once('value');
          const topic=forumTopicFromSnapshot(topicSnap);
          if(!topic || topic.status==='deleted') return notify(action,false,{},'Konu bulunamadı veya kaldırılmış.');
          const replyRef=db.ref(`forumReplies/${safeTopicId}`).push();
          const data=forumReplyMapFromPayload({...payload,topicId:safeTopicId},user,member,replyRef.key);
          const activityAt=now();
          const updates={
            [`forumReplies/${safeTopicId}/${replyRef.key}`]:data,
            [`forumTopics/${safeTopicId}/replyCount`]:(Number(topic.replyCount)||0)+1,
            [`forumTopics/${safeTopicId}/lastActivityAt`]:activityAt,
            [`forumTopics/${safeTopicId}/updatedAt`]:activityAt,
            [`forumTopics/${safeTopicId}/lastReplyByUid`]:user.uid,
            [`forumTopics/${safeTopicId}/lastReplyByName`]:data.authorName,
            [`forumUserIndex/${user.uid}/replies/${safeTopicId}/${replyRef.key}`]:true
          };
          await db.ref().update(updates);
          notify(action,true,data,'Forum cevabı yayınlandı.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    deleteForumTopic(topicId){
      const action='deleteForumTopic';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const safeTopicId=clean(topicId);
          const topicSnap=await db.ref(`forumTopics/${safeTopicId}`).once('value');
          const topic=forumTopicFromSnapshot(topicSnap);
          if(!topic) return notify(action,false,{},'Konu bulunamadı.');
          if(!(await canModifyForumItem(user,topic))) return notify(action,false,{},'Bu konuyu kaldırma yetkin yok.');
          const updates={
            [`forumTopics/${safeTopicId}/status`]:'deleted',
            [`forumTopics/${safeTopicId}/deletedAt`]:now(),
            [`forumTopics/${safeTopicId}/deletedByUid`]:user.uid
          };
          await db.ref().update(updates);
          notify(action,true,{topicId:safeTopicId},'Forum konusu kaldırıldı.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    deleteForumReply(topicId,replyId){
      const action='deleteForumReply';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Forum için önce üye girişi yapılmalı.');
      (async()=>{
        try{
          const safeTopicId=clean(topicId);
          const safeReplyId=clean(replyId);
          const replySnap=await db.ref(`forumReplies/${safeTopicId}/${safeReplyId}`).once('value');
          const reply=forumReplyFromSnapshot(replySnap,safeTopicId);
          if(!reply) return notify(action,false,{},'Cevap bulunamadı.');
          if(!(await canModifyForumItem(user,reply))) return notify(action,false,{},'Bu cevabı kaldırma yetkin yok.');
          const updates={
            [`forumReplies/${safeTopicId}/${safeReplyId}/status`]:'deleted',
            [`forumReplies/${safeTopicId}/${safeReplyId}/deletedAt`]:now(),
            [`forumReplies/${safeTopicId}/${safeReplyId}/deletedByUid`]:user.uid
          };
          await db.ref().update(updates);
          notify(action,true,{topicId:safeTopicId,replyId:safeReplyId},'Forum cevabı kaldırıldı.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    reportForumContent(payloadJson){
      const action='reportForumContent';
      if(!init()) return notify(action,false,{},'Firebase web baglantisi hazir degil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Forum sikayeti icin once uye girisi yapilmali.');
      (async()=>{
        try{
          await approvedForumMember(user);
          const payload=JSON.parse(payloadJson || '{}');
          const targetType=clean(payload.targetType)==='reply' ? 'reply' : 'topic';
          const topicId=clean(payload.topicId);
          const replyId=clean(payload.replyId);
          if(!topicId) return notify(action,false,{},'Sikayet icin konu kimligi eksik.');
          if(targetType==='reply' && !replyId) return notify(action,false,{},'Sikayet icin cevap kimligi eksik.');
          const ref=db.ref('forumReports').push();
          const data={
            id:ref.key,
            reportId:ref.key,
            reporterUid:user.uid,
            reporterEmail:user.email || '',
            targetType,
            topicId,
            replyId:targetType==='reply' ? replyId : '',
            targetAuthorUid:clean(payload.targetAuthorUid),
            targetAuthorName:forumClean(payload.targetAuthorName || '',80),
            title:forumClean(payload.title || '',160),
            reason:forumClean(payload.reason || 'Uygunsuz icerik',400),
            status:'open',
            createdAt:now()
          };
          await ref.set(data);
          notify(action,true,data,'Sikayet moderasyon kuyruguna gonderildi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loadAnnouncements(){
      const action='loadAnnouncements';
      if(!init()) return notify(action,false,[],'Firebase web bağlantısı hazır değil.');
      db.ref('announcements')
        .limitToLast(30)
        .once('value')
        .then(snapshot=>{
          const list=[];
          snapshot.forEach(child=>{
            const item=announcementFromSnapshot(child);
            if(item) list.push(item);
          });
          list.sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));
          notify(action,true,list,`${list.length} duyuru listelendi.`);
        })
        .catch(error=>notify(action,false,[],firebaseMessage(error)));
    },

    createAnnouncement(payloadJson){
      const action='createAnnouncement';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Duyuru yayınlamak için yönetici girişi gerekli.');
      (async()=>{
        try{
          if(!(await currentUserIsAdmin(user))) return notify(action,false,{},'Duyuru yayınlama yetkisi sadece yöneticilerde.');
          const payload=JSON.parse(payloadJson || '{}');
          const ref=db.ref('announcements').push();
          const data=announcementMapFromPayload(payload,user,ref.key);
          const tokenSnap=await db.ref('notificationTokens').once('value');
          const tokenCount=enabledNotificationTokenCount(tokenSnap);
          data.installTokenCount=tokenCount;
          data.broadcastStatus=tokenCount>0 ? 'queued' : 'no_tokens';
          const sentAt=now();
          await ref.set(data);
          await db.ref(`notifications/${ref.key}`).set({...data,channel:data.channel || 'app',sentAt});
          await db.ref(`notificationBroadcasts/${ref.key}`).set({
            announcementId:ref.key,
            title:data.title,
            body:data.body,
            href:data.href || '',
            label:data.label || 'Duyuru',
            imageUrl:data.imageUrl || '',
            imageDataUrl:data.imageDataUrl || '',
            whatsappText:data.whatsappText || '',
            audience:data.audience || 'installed_members',
            channel:data.channel || 'app',
            target:data.target || 'app_platform',
            tokenCount,
            status:tokenCount>0 ? 'pending' : 'no_tokens',
            createdAt:sentAt,
            authorUid:user.uid
          });
          notify(action,true,data,'Duyuru yayınlandı ve bildirim geçmişine eklendi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    updateAnnouncement(payloadJson){
      const action='updateAnnouncement';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Duyuru güncellemek için yönetici girişi gerekli.');
      (async()=>{
        try{
          if(!(await currentUserIsAdmin(user))) return notify(action,false,{},'Duyuru güncelleme yetkisi sadece yöneticilerde.');
          const payload=JSON.parse(payloadJson || '{}');
          const announcementId=clean(payload.announcementId || payload.id);
          if(!announcementId) return notify(action,false,{},'Güncellenecek duyuru kimliği bulunamadı.');
          const snap=await db.ref(`announcements/${announcementId}`).once('value');
          const existing=snap.val() || {};
          const data=announcementUpdateMapFromPayload(payload,user,announcementId,existing);
          data.installTokenCount=Number(existing.installTokenCount || 0);
          data.broadcastStatus=clean(existing.broadcastStatus) || 'updated';
          const updates={
            [`announcements/${announcementId}`]:data,
            [`notifications/${announcementId}`]:{...data,channel:data.channel || 'app',updatedAt:now()},
            [`notificationBroadcasts/${announcementId}/title`]:data.title,
            [`notificationBroadcasts/${announcementId}/body`]:data.body,
            [`notificationBroadcasts/${announcementId}/target`]:data.target || 'app_platform',
            [`notificationBroadcasts/${announcementId}/audience`]:data.audience || 'installed_members',
            [`notificationBroadcasts/${announcementId}/channel`]:data.channel || 'app',
            [`notificationBroadcasts/${announcementId}/status`]:'updated',
            [`notificationBroadcasts/${announcementId}/updatedAt`]:now(),
            [`notificationBroadcasts/${announcementId}/updatedByUid`]:user.uid
          };
          await db.ref().update(updates);
          notify(action,true,data,'Duyuru güncellendi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    deleteAnnouncement(announcementId){
      const action='deleteAnnouncement';
      if(!init()) return notify(action,false,{},'Firebase web bağlantısı hazır değil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Duyuru silmek için yönetici girişi gerekli.');
      (async()=>{
        try{
          if(!(await currentUserIsAdmin(user))) return notify(action,false,{},'Duyuru silme yetkisi sadece yöneticilerde.');
          const safeId=clean(announcementId);
          if(!safeId) return notify(action,false,{},'Silinecek duyuru kimliği bulunamadı.');
          const deletedAt=now();
          await db.ref().update({
            [`announcements/${safeId}/status`]:'deleted',
            [`announcements/${safeId}/deletedAt`]:deletedAt,
            [`announcements/${safeId}/deletedByUid`]:user.uid,
            [`notifications/${safeId}/status`]:'deleted',
            [`notifications/${safeId}/deletedAt`]:deletedAt,
            [`notifications/${safeId}/deletedByUid`]:user.uid,
            [`notificationBroadcasts/${safeId}/status`]:'deleted',
            [`notificationBroadcasts/${safeId}/deletedAt`]:deletedAt,
            [`notificationBroadcasts/${safeId}/deletedByUid`]:user.uid
          });
          notify(action,true,{announcementId:safeId,status:'deleted'},'Duyuru silindi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
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

    updateUserSyncData(payloadJson){
      const action='updateUserSyncData';
      if(!init()) return notify(action,false,{},'Firebase web baglantisi hazir degil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Veri senkronu icin once uye girisi yapilmali.');
      (async()=>{
        try{
          const payload=JSON.parse(payloadJson || '{}');
          const data={
            ...payload,
            uid:user.uid,
            updatedAt:Number(payload.updatedAt || now()),
            source:'web'
          };
          await db.ref(`userSync/${user.uid}`).set(data);
          notify(action,true,{uid:user.uid,updatedAt:data.updatedAt},'Kullanici verileri senkronize edildi.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
    },

    loadUserSyncData(){
      const action='loadUserSyncData';
      if(!init()) return notify(action,false,{},'Firebase web baglantisi hazir degil.');
      const user=auth.currentUser;
      if(!user) return notify(action,false,{},'Veri senkronu icin once uye girisi yapilmali.');
      db.ref(`userSync/${user.uid}`).once('value')
        .then(snapshot=>{
          const data=snapshot.val() || {};
          notify(action,true,{...data,uid:user.uid},'Kullanici verileri yuklendi.');
        })
        .catch(error=>notify(action,false,{},firebaseMessage(error)));
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
      (async()=>{
        try{
          const updates={
            [`members/${user.uid}`]:null,
            [`membershipApplications/${user.uid}`]:null,
            [`exchangeRequests/${user.uid}`]:null,
            [`admins/${user.uid}`]:null,
            ...(await forumDeletionUpdatesForUser(user.uid))
          };
          await db.ref().update(updates);
          await auth.signOut();
          notify(action,true,{uid:user.uid},'Uygulama üyelik, becayiş ve forum verilerin silindi. Firebase oturumu kapatıldı.');
        }catch(error){
          notify(action,false,{},firebaseMessage(error));
        }
      })();
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
