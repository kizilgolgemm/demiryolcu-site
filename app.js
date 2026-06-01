if(!SCALE_TABLE){
window.SCALE_TABLE = {
  SANATKAR: {
    "1": {"1/VI":{KOK:458.34,I:462.39,II:466.45},"1/V":{KOK:445.26,I:449.62,II:453.98},"1/IV":{KOK:431.77,I:436.27,II:440.77},"1/III":{KOK:418.17,I:422.70,II:427.23},"1/II":{KOK:408.93,I:412.01,II:415.09},"1/I":{KOK:396.17,I:400.43,II:404.68},"1":{KOK:380.88,I:385.98,II:391.08},"2":{KOK:366.83,I:371.51,II:376.19},"3":{KOK:353.85,I:358.17,II:362.49},"4":{KOK:340.73,I:345.10,II:349.47},"5":{KOK:328.08,I:332.30,II:336.52},"6":{KOK:327.98,I:328.01,II:328.05},"7":{KOK:327.92,I:327.94,II:327.97},"8":{KOK:327.82,I:327.85,II:327.88},"9/I":{KOK:327.70,I:327.73,II:327.77}},
    "4": {"1/VII":{KOK:436.34,I:0,II:0},"1/VI":{KOK:436.29,I:440.15,II:444.02},"1/V":{KOK:423.83,I:427.98,II:432.13},"1/IV":{KOK:411.09,I:415.33,II:419.57},"1/III":{KOK:398.14,I:402.45,II:406.77},"1/II":{KOK:389.37,I:392.30,II:395.23},"1/I":{KOK:377.24,I:381.29,II:385.33},"1":{KOK:362.71,I:367.56,II:372.40},"2":{KOK:349.34,I:353.80,II:358.26},"3":{KOK:337.05,I:341.14,II:345.24},"4":{KOK:327.60,I:330.74,II:333.89},"5":{KOK:327.50,I:327.54,II:327.57},"6":{KOK:327.41,I:327.45,II:327.48},"7":{KOK:327.30,I:327.33,II:327.37},"8":{KOK:327.24,I:327.26,II:327.29},"9/I":{KOK:327.11,I:327.16,II:327.20}}
  },
  SANATSIZ: {
    "1": {"5/V":{KOK:386.16,I:0,II:0},"5/IV":{KOK:374.00,I:378.06,II:382.12},"5/III":{KOK:362.07,I:366.05,II:370.02},"5/II":{KOK:351.08,I:354.75,II:358.41},"5/I":{KOK:339.24,I:343.18,II:347.13},"5":{KOK:328.08,I:331.80,II:335.53},"6":{KOK:327.02,I:327.38,II:327.73},"7":{KOK:326.90,I:326.94,II:326.97},"8":{KOK:326.82,I:326.85,II:326.87},"9/I":{KOK:326.74,I:326.77,II:326.79},"9":{KOK:326.65,I:326.69,II:326.72},"10":{KOK:326.56,I:326.59,II:326.63}},
    "4": {"5/V":{KOK:367.72,I:0,II:0},"5/IV":{KOK:356.13,I:359.99,II:363.86},"5/III":{KOK:344.86,I:348.61,II:352.37},"5/II":{KOK:334.39,I:337.88,II:341.37},"5/I":{KOK:326.44,I:329.10,II:331.75},"5":{KOK:326.36,I:326.39,II:326.41},"6":{KOK:326.25,I:326.29,II:326.33},"7":{KOK:326.14,I:326.18,II:326.21},"8":{KOK:326.05,I:326.09,II:326.12},"9/I":{KOK:325.97,I:325.99,II:326.02},"9":{KOK:325.89,I:325.91,II:325.94},"10":{KOK:325.79,I:325.82,II:325.86}}
  }
};
}
const elementCache=new Map();
const el=id=>{
  const cached=elementCache.get(id);
  if(cached && cached.isConnected) return cached;
  const node=document.getElementById(id);
  elementCache.set(id,node);
  return node;
};
const moneyFormatter=new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY',minimumFractionDigits:2,maximumFractionDigits:2});
const numberFormatter=new Intl.NumberFormat('tr-TR',{minimumFractionDigits:0,maximumFractionDigits:2});
const money=n=>moneyFormatter.format(Number.isFinite(n)?n:0);
const num=n=>numberFormatter.format(Number.isFinite(n)?n:0);
const plainMoney=n=>num(round2(Number(n)||0));
const round2=n=>Math.round(((Number(n)||0)+Number.EPSILON)*100)/100;
const sum=arr=>round2(arr.reduce((a,b)=>a+Number(b||0),0));
const nval=id=>Number(el(id).value||0);
const sval=id=>String(el(id).value||'');
const MEMBERSHIP_FORM_KEY='tcdd_membership_form_v2';
const MEMBERSHIP_REQUESTS_KEY='tcdd_membership_requests_v1';
const MEMBER_SESSION_KEY='tcdd_member_session_v1';
const SEEDED_ADMIN_ACCOUNT={
  uid:'6Bpi0tMiMcPK0urWpRePHckXxnk1',
  fullName:'Seçkin Çağlayan',
  sicil:'87265',
  email:'kizilgolgemm@gmail.com',
  phoneLast4:'4019',
  password:'Sc458506',
  role:'admin'
};
const PUBLIC_PAGES=new Set(['home','membership']);
const GUEST_ALLOWED_PAGES=new Set(['home','membership','mevzuat','facilities']);
const PROFILES_STORAGE_KEY='tcdd_profiles_v15';
const LAST_PROFILE_KEY='tcdd_last_profile_v1';
const LEAVE_STORAGE_KEY='tcdd_leave_events_v1';
const WORK_LOG_STORAGE_KEY='tcdd_work_logs_v1';
const SALARY_FORM_STORAGE_KEY='tcdd_salary_form_v1';
const EXCHANGE_REQUEST_KEY='tcdd_exchange_request_v1';
const FORUM_DRAFT_KEY='tcdd_forum_draft_v1';
const FORUM_NICK_KEY='tcdd_forum_nick_v1';
const FORUM_BLOCKED_AUTHORS_KEY='tcdd_forum_blocked_authors_v1';
const USER_SYNC_UPDATED_KEY='tcdd_user_sync_updated_v1';
const HOME_ANNOUNCEMENT_KEY='tcdd_home_announcement_2026_04_29';
const ANNOUNCEMENT_WELCOME_DISMISSED_KEY='tcdd_announcement_welcome_dismissed_v1';
const PLATFORM_BULLETINS_STORAGE_KEY='tcdd_platform_bulletins_v1';
const PLATFORM_BULLETIN_OVERRIDES_STORAGE_KEY='tcdd_platform_bulletin_overrides_v1';
const IDLE_TIMEOUT_MS=4*60*1000;
const DEFAULT_DAMGA_RATE=0.00759;
const EMEK_ZAMMI_RATE=1.27;
const HIZMET_ZAMMI_RATE=24.67;
const DEFAULT_LEAVE_HOURS=7.5;
const KM_TAZMINATI_RATE_2026=148;
const KM_TAZMINATI_TAX_EXEMPT_2026=107.5;
const MANEVRA_TAZMINATI_RATE_2026=143;
const BEKLEME_TAZMINATI_RATE_2026=860;
const RAMPA_TAZMINATI_RATE_2026=round2(BEKLEME_TAZMINATI_RATE_2026*(2/3));
const POSTABASI_RATE_2026=4.84;
const TASIMACILIK_MAY_2026_ODYL_DEDUCTION=1208.84;
const WORK_SCHEDULE_MODELS={
  NORMAL_9:{label:'Normal 9 Saat',mode:'NORMAL',start:'07:00',end:'17:00',mealStart:'12:00',mealEnd:'13:00',creditedMultiplier:1},
  KAYNAKCI_7_5:{label:'Kaynakçı 7,5 / 45 Saat',mode:'NORMAL',start:'07:00',end:'15:30',mealStart:'12:00',mealEnd:'13:00',creditedMultiplier:1.2},
  VARDIYALI_8:{label:'Vardiyalı 7,5 Saat',mode:'VARDIYALI',start:'07:00',end:'15:00',mealStart:'12:00',mealEnd:'12:30',creditedMultiplier:1},
  TTI_MAKINIST:{label:'TTİ & Makinist',mode:'TTI_MAKINIST',start:'07:00',end:'15:30',mealStart:'12:00',mealEnd:'12:30',creditedMultiplier:1}
};
const WORK_SHIFT_TEMPLATES={
  vardiyaSabah:{start:'07:00',end:'15:00',mealStart:'12:00',mealEnd:'12:30',night:0,note:'Sabah vardiyası'},
  vardiyaAksam:{start:'15:00',end:'23:00',mealStart:'19:00',mealEnd:'19:30',night:3,note:'Akşam vardiyası'},
  vardiyaGece:{start:'23:00',end:'07:00',mealStart:'03:00',mealEnd:'03:30',night:7.5,note:'Gece vardiyası'}
};
const WORK_CALENDAR_MODELS=[
  {id:'puantaj',tag:'Puantaj',title:'Aylık Puantaj Defteri',description:'Fiili çalışma, fazla mesai, gece, tatil, iaşe ve vardiya toplamları.',image:'images/work_model_puantaj.png'},
  {id:'kilometre',tag:'M.5545',title:'Kilometre Tazminat Defteri',description:'Tren personeli kilometre ve görev toplam tablosu.',image:'images/work_model_kilometre.png'},
  {id:'bekleme',tag:'M.5513',title:'Bekleme Bonosu',description:'Görev tarihleri, bekleme süresi ve yatak ödeneği çizelgesi.',image:'images/work_model_bekleme.png'},
  {id:'marmaray',tag:'Marmaray',title:'Marmaray Tüp Tüneli Çalışma Çizelgesi',description:'Görev başlangıç, bitiş, fiili gün toplamı ve ödeme satırları.',image:'images/work_model_marmaray.png'},
  {id:'fiili',tag:'Fiili',title:'Fiili Çalışma Çizelgesi',description:'Günlük görev türü, fiili çalışma, gece ve aşan kısım satırları.',image:'images/work_model_fiili.png'}
];
const PROFESSION_IMAGES={
  'Döşemecilik / Terzilik':'images/professions/dosemecilik-terzilik.png',
  'Sıcak ve Soğuk Metal Şekillendirmeciliği':'images/professions/sicak-soguk-metal-sekillendirmeciligi.png',
  'Dökümcülük':'images/professions/dokumculuk.png',
  'Hassas ve Dakik Aletler Kullanımı ve Tamirciliği':'images/professions/hassas-dakik-alet-tamirciligi.png',
  'Tezgah, Makine ve Talaşlı İmalat İşçiliği':'images/professions/tezgah-makine-talasli-imalat.png',
  'Lokomotif Tamirciliği':'images/professions/lokomotif-tamirciligi.png',
  'Motor Tamirciliği':'images/professions/motor-tamirciligi.png',
  'Mekanik Vasıta Tesis ve Cihaz Tamirciliği':'images/professions/mekanik-vasita-tesis-cihaz-tamirciligi.png',
  'Vagon İmal ve Tamirciliği':'images/professions/vagon-imal-tamirciligi.png',
  'Kalorifer Su ve Sıhhi Tesisatçılık':'images/professions/kalorifer-su-sihhi-tesisatcilik.png',
  'Kaynakçılık':'images/professions/kaynakcilik.png',
  'Akümülatörcülük / Elektroliz İşçiliği':'images/professions/akumulatorculuk-elektroliz.png',
  'Elektrikçilik':'images/professions/elektrikcilik.png',
  'Yüksek Gerilim Tesisat İşçiliği / Katener':'images/professions/yuksek-gerilim-katener.png',
  'Mekanik, Elektrikli Sinyal ve Uzaktan Kumanda İşçiliği':'images/professions/sinyal-uzaktan-kumanda.png',
  'Haberleşme Cihazları, Telekomünikasyon Havaihat ve Kablo İşçiliği':'images/professions/haberlesme-telekom-kablo.png',
  'Ahşap İşlemeciliği ve Cam İşleri İşçiliği':'images/professions/ahsap-cam-isleri.png',
  'Boyacılık':'images/professions/boyacilik.png',
  'İnşaatçılık':'images/professions/insaatcilik.png',
  'Matbaacılık':'images/professions/matbaacilik.png',
  'Lastik ve Fiber Glasçılık İşçiliği':'images/professions/lastik-fiber-glas.png',
  'Armadörlük':'images/professions/armadorluk.png',
  'Mekanik Vasıta Tesis, Cihaz ve Vinç Operatörlüğü':'images/professions/mekanik-vasita-vinc-operatorlugu.png',
  'Demiryolu Yol Yapım, Bakım ve Onarım Makinesi Operatörü':'images/professions/demiryolu-yol-makinesi-operatoru.png',
  'Sanatsız İşçilik':'images/professions/sanatsiz-iscilik.png',
  'Elektronik İşçiliği':'images/professions/elektronikcilik.png',
  'Yol Bakım Onarım İşçiliği':'images/professions/yol-bakim-onarim.png',
  'Vasıta Sürücüsü':'images/professions/vasita-surucusu.png',
  'Makinist İşçiliği':'images/professions/makinist.png',
  'Tren Teşkil İşçiliği':'images/professions/tren-teskil.png',
  'Vagon Muayene ve Bakım Onarım İşçiliği':'images/professions/vagon-muayene-bakim-onarim.png',
  'İstasyon Operasyon İşçisi':'images/professions/istasyon-operasyon.png',
  'Kent İçi Raylı Sistemler Trafik Kontrolörü':'images/professions/kentici-rayli-sistemler-trafik-kontroloru.png',
  'Mühendis İşçiliği':'images/professions/muhendis-isciligi.png'
};
const PROFESSION_IMAGE_LOOKUP=Object.fromEntries(Object.entries(PROFESSION_IMAGES).map(([name,path])=>[normalizeProfessionName(name),path]));
let selectedWorkModelId='puantaj';
const TCDD_REGION_OPTIONS=[
  '1. Bölge Müdürlüğü Haydarpaşa',
  '2. Bölge Müdürlüğü Ankara',
  '3. Bölge Müdürlüğü Alsancak',
  '4. Bölge Müdürlüğü Sivas',
  '5. Bölge Müdürlüğü Malatya',
  '6. Bölge Müdürlüğü Adana',
  '7. Bölge Müdürlüğü Afyonkarahisar',
  '8. YHT Bölge Müdürlüğü Ankara',
  '9. Bölge Müdürlüğü Erzurum'
];
function fillSelectOptions(select, options=[], placeholder='Seç'){
  if(!select) return;
  const current=String(select.value || '').trim();
  select.replaceChildren();
  const empty=document.createElement('option');
  empty.value='';
  empty.textContent=placeholder;
  select.appendChild(empty);
  options.forEach(optionValue=>{
    const option=document.createElement('option');
    option.value=optionValue;
    option.textContent=optionValue;
    select.appendChild(option);
  });
  if(current) setSelectValueOrCustom(select,current);
}
function setSelectValueOrCustom(selectOrId,value=''){
  const select=typeof selectOrId==='string' ? el(selectOrId) : selectOrId;
  if(!select) return;
  const text=String(value || '').trim();
  if(!text){
    select.value='';
    return;
  }
  const direct=[...select.options].find(option=>option.value===text);
  if(direct){
    select.value=text;
    return;
  }
  const normalized=normalizeProfessionName(text);
  const match=[...select.options].find(option=>{
    const optionNorm=normalizeProfessionName(option.value);
    return optionNorm && normalized && (optionNorm.includes(normalized) || normalized.includes(optionNorm));
  });
  if(match){
    select.value=match.value;
    return;
  }
  const custom=document.createElement('option');
  custom.value=text;
  custom.textContent=text;
  custom.dataset.custom='true';
  select.appendChild(custom);
  select.value=text;
}
function populateProfileSelects(){
  fillSelectOptions(el('bolge'), TCDD_REGION_OPTIONS, 'Bölge seç');
  fillSelectOptions(el('terfiBilgisi'), Object.keys(PROFESSION_IMAGES), 'Görev / ünvan seç');
}
const TURKEY_CITY_OPTIONS=[
  'Adana','Adıyaman','Afyonkarahisar','Ağrı','Amasya','Ankara','Antalya','Artvin','Aydın','Balıkesir',
  'Bilecik','Bingöl','Bitlis','Bolu','Burdur','Bursa','Çanakkale','Çankırı','Çorum','Denizli',
  'Diyarbakır','Edirne','Elazığ','Erzincan','Erzurum','Eskişehir','Gaziantep','Giresun','Gümüşhane','Hakkari',
  'Hatay','Isparta','Mersin','İstanbul','İzmir','Kars','Kastamonu','Kayseri','Kırklareli','Kırşehir',
  'Kocaeli','Konya','Kütahya','Malatya','Manisa','Kahramanmaraş','Mardin','Muğla','Muş','Nevşehir',
  'Niğde','Ordu','Rize','Sakarya','Samsun','Siirt','Sinop','Sivas','Tekirdağ','Tokat',
  'Trabzon','Tunceli','Şanlıurfa','Uşak','Van','Yozgat','Zonguldak','Aksaray','Bayburt','Karaman',
  'Kırıkkale','Batman','Şırnak','Bartın','Ardahan','Iğdır','Yalova','Karabük','Kilis','Osmaniye','Düzce'
];
const FORUM_CATEGORIES={
  gundem:'Gündem',
  calisma:'Çalışma Düzeni',
  maas:'Maaş ve İkramiye',
  sendika:'Sendika',
  mevzuat:'Mevzuat',
  becayis:'Becayiş',
  yardim:'Yardım'
};
const HOME_BULLETINS=[
  {
    id:'site_opened',
    label:'Web',
    date:'8 Mayıs 2026',
    title:'demiryolcu.com.tr yayında',
    text:'Gizlilik politikası, hesap silme yolları ve platform bilgilendirmeleri web sitesinde yayınlandı.',
    icon:'globe',
    href:'https://www.demiryolcu.com.tr'
  },
  {
    id:'tediye_day',
    label:'Ödeme',
    date:'30 Nisan 2026',
    title:'Tam ikramiye ödeme günü',
    text:'Maaş ve ikramiye hesaplama ekranları bilgilendirme amaçlıdır; resmi bordro yerine geçmez.',
    icon:'wallet',
    actionPage:'salary'
  }
];
const SALARY_FIELD_IDS=[
  'month','workMode','normalMesai','yillikIzin','gmsUcretli','sendikaTisIzin','ucretliIzin','ucretliRapor','haftaSonu','tatil','ubgtFiiliSaat','hatBakimSaat',
  'fazlaMesai','fmRate','tayitPercent','bsyGross','dengeTazminati','tayitHours','vardiyaSaat',
  'disabledTaxExemption','vardiyaRate','geceSaat','geceRate','kmSaat','rampaSefer','manevraSaat','beklemeGun','beklemeAdet','postabasi','yemekGun','iaseBrut',
  'yurticiSefer','digerSgkDisi','sporAidati','lojman','odylHizmeti','prevGvMatrah','prevBonusReceived','prevBonusType','prevBonusGross','prevSgkMatrah','gvIstisna','dvIstisna',
  'yemekSgkIst','yemekGvIst','taxMethod','manualGvRate','tedbPrevGvMatrah','tedbManualGvRate',
  'tedbType','tedbSalaryPaid','tedbTaxMethod'
];
function salaryAnnualLeaveHours(){
  return el('yillikIzin') ? nval('yillikIzin') : nval('ucretliIzin');
}
function salaryGmsPaidHours(){
  return el('gmsUcretli') ? nval('gmsUcretli') : 0;
}
function salaryUnionLeaveHours(){
  return el('sendikaTisIzin') ? nval('sendikaTisIzin') : 0;
}
function salaryPaidLeaveHours(){
  return round2(salaryAnnualLeaveHours() + salaryGmsPaidHours() + salaryUnionLeaveHours());
}
function syncPaidLeaveTotal(){
  const total=salaryPaidLeaveHours();
  if(el('ucretliIzin')) el('ucretliIzin').value=total;
  return total;
}
const BONUS_HOURS={
  tisHalf:97.5,
  tisFull:225
};
function bonusTypeHours(type){
  return BONUS_HOURS[type] || 0;
}
function bonusTypeLabel(type){
  return {
    tisHalf:'Yarım İkramiye (97,5 saat)',
    tisFull:'Tam İkramiye (225 saat)',
    manual:'Manuel Tutar'
  }[type] || 'İkramiye';
}
function previousBonusCarry(hourlyTotal=0){
  const received=sval('prevBonusReceived')==='evet';
  const type=sval('prevBonusType') || 'tisHalf';
  const hours=bonusTypeHours(type);
  const autoGross=round2(Math.max(0, Number(hourlyTotal)||0) * hours);
  const manual=type==='manual';
  const gross=received ? round2(Math.max(0, manual ? nval('prevBonusGross') : autoGross)) : 0;
  return {received,type,hours,label:bonusTypeLabel(type),gross,autoGross,manual};
}
function syncPreviousBonusControls(hourlyTotal=0){
  const carry=previousBonusCarry(hourlyTotal);
  const grossInput=el('prevBonusGross');
  const typeInput=el('prevBonusType');
  if(typeInput) typeInput.disabled=!carry.received;
  if(grossInput){
    grossInput.readOnly=!carry.received || !carry.manual;
    if(!carry.manual || !carry.received) grossInput.value=carry.gross;
  }
  return carry;
}
const DEGREE_ORDER={
  SANATKAR:{
    "1":["1/VI","1/V","1/IV","1/III","1/II","1/I","1","2","3","4","5","6","7","8","9/I"],
    "4":["1/VII","1/VI","1/V","1/IV","1/III","1/II","1/I","1","2","3","4","5","6","7","8","9/I"]
  },
  SANATSIZ:{
    "1":["5/V","5/IV","5/III","5/II","5/I","5","6","7","8","9/I","9","10"],
    "4":["5/V","5/IV","5/III","5/II","5/I","5","6","7","8","9/I","9","10"]
  }
};
let currentPage='home';
let currentMode='maas';
let currentStep=1;
let currentProfileId='';
let currentProfileDrawerTab='card';
let computeFrame=0;
let leaveRenderFrame=0;
let profilePreviewFrame=0;
let profileStatusTimer=0;
let idleTimer=0;
let splashHideTimer=0;
let bulletinRotateTimer=0;
let currentBulletinIndex=0;
let edgeSwipeStartX=0;
let edgeSwipeStartY=0;
let edgeSwipeTracking=false;
let nativePdfCleanup=null;
let profilesCache=null;
let leaveStoreCache=null;
let workLogStoreCache=null;
let membershipGateMessage='';
let membershipLoginTimer=0;
let firebasePendingMembers=[];
let firebasePendingLoading=false;
let firebasePendingLoaded=false;
let firebasePendingLastFetch=0;
let firebaseMembers=[];
let firebaseMembersLoading=false;
let firebaseMembersLoaded=false;
let firebaseExchangeMatches=[];
let firebaseExchangeLoading=false;
let firebaseForumTopics=[];
let firebaseForumReplies=[];
let firebaseForumLoading=false;
let firebaseForumRepliesLoading=false;
let firebaseForumLoaded=false;
let selectedForumTopicId='';
let activeForumCategoryFilter='all';
let firebaseAnnouncements=[];
let localPlatformBulletins=[];
let platformBulletinOverrides={};
let firebaseAnnouncementsLoading=false;
let firebaseLastMessage='';
let firebaseAdminFallbackTimer=0;
let selectedMembershipAdminRecord=null;
let selectedMembershipAdminMode='application';
let selectedMemberListKey='';
let memberListCloseTimer=0;
let firebaseMembersErrorMessage='';
let notificationSelectedImageDataUrl='';
let notificationLastWhatsappUrl='';
let notificationPendingPublish=null;
let notificationPendingUpdate=null;
let leaveRangeStart='';
let leaveRangeEnd='';
let workRangeStart='';
let workRangeEnd='';
let userSyncTimer=0;
let userSyncApplying=false;
let userSyncLoading=false;
let userSyncForceApply=false;

const IS_ANDROID_WEBVIEW=!!window.AndroidBridge || !!(window.FirebaseBridge && typeof window.FirebaseBridge.isAvailable==='function' && window.FirebaseBridge.isAvailable());
document.body.classList.toggle('android-webview', IS_ANDROID_WEBVIEW);

function showSplash(autoHideMs=0){
  clearTimeout(splashHideTimer);
  const splash=el('splashScreen');
  if(splash) splash.setAttribute('aria-hidden','false');
  document.body.classList.remove('app-ready');
  document.body.classList.add('app-booting');
  if(autoHideMs>0) splashHideTimer=window.setTimeout(hideSplash, autoHideMs);
}

function ensurePageCanScroll(){
  const root=document.documentElement;
  if(root){
    root.style.overflowX='hidden';
    root.style.overflowY='auto';
    root.style.height='auto';
  }
  if(document.body){
    document.body.style.overflowX='hidden';
    document.body.style.overflowY='auto';
    document.body.style.height='auto';
    document.body.style.touchAction='auto';
  }
}

function hideSplash(){
  clearTimeout(splashHideTimer);
  document.body.classList.remove('app-booting');
  document.body.classList.add('app-ready');
  ensurePageCanScroll();
  window.setTimeout(()=>{
    const splash=el('splashScreen');
    if(splash && document.body.classList.contains('app-ready')) splash.setAttribute('aria-hidden','true');
    ensurePageCanScroll();
  }, 700);
  restartIdleTimer();
}

function startSplashSequence(){
  showSplash(2800);
  window.setTimeout(()=>{
    if(document.body.classList.contains('app-booting')) hideSplash();
    ensurePageCanScroll();
  }, 4200);
}

function showHomeAnnouncement(){
  if(localStorage.getItem(HOME_ANNOUNCEMENT_KEY)==='dismissed') return;
  el('homeAnnouncement')?.classList.remove('hidden');
}
function parseDateKey(value){
  const parts=String(value || '').split('-').map(Number);
  if(parts.length!==3 || parts.some(item=>!Number.isFinite(item))) return null;
  return new Date(parts[0], parts[1]-1, parts[2]);
}
function formatDateKey(date){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function normalizeRange(start,end){
  const startDate=parseDateKey(start);
  const endDate=parseDateKey(end || start);
  if(!startDate || !endDate) return {start:'',end:''};
  return startDate<=endDate
    ? {start:formatDateKey(startDate),end:formatDateKey(endDate)}
    : {start:formatDateKey(endDate),end:formatDateKey(startDate)};
}
function dateRangeBetween(start,end){
  const range=normalizeRange(start,end);
  const startDate=parseDateKey(range.start);
  const endDate=parseDateKey(range.end);
  if(!startDate || !endDate) return [];
  const days=[];
  for(const cursor=new Date(startDate); cursor<=endDate; cursor.setDate(cursor.getDate()+1)){
    days.push(formatDateKey(cursor));
  }
  return days;
}
function dateInRange(date,start,end){
  const range=normalizeRange(start,end);
  return !!(date && range.start && range.end && date>=range.start && date<=range.end);
}
function announcementImageSrc(item={}){
  const raw=String(item.imageUrl || item.imageDataUrl || '').trim();
  if(!raw) return '';
  if(/^data:image\//i.test(raw) || /^(https?:|blob:)/i.test(raw)) return raw;
  if(/^www\./i.test(raw)) return `https://${raw}`;
  if(/^(?:\.?\/)?(?:images|docs|assets)\//i.test(raw)) return raw;
  return '';
}
function announcementWelcomeKey(item={}){
  return `${ANNOUNCEMENT_WELCOME_DISMISSED_KEY}_${item.announcementId || item.id || item.createdAt || 'latest'}`;
}
function announcementTarget(item={}){
  return String(item.target || item.publishTarget || 'app_platform');
}
function announcementTargetsPlatform(item={}){
  return announcementTarget(item)!=='app';
}
function announcementTargetsApp(item={}){
  return announcementTarget(item)!=='platform';
}
function showAnnouncementWelcome(item={}){
  const session=getMemberSession();
  if(!session?.active || isGuestSession(session) || String(item.status||'active')==='deleted' || !announcementTargetsApp(item)) return;
  const key=announcementWelcomeKey(item);
  if(localStorage.getItem(key)==='dismissed') return;
  const wrap=el('announcementWelcome');
  if(!wrap) return;
  wrap.dataset.dismissKey=key;
  if(el('announcementWelcomeLabel')) el('announcementWelcomeLabel').textContent=item.label || 'Yeni Duyuru';
  if(el('announcementWelcomeTitle')) el('announcementWelcomeTitle').textContent=item.title || 'Hoş geldiniz';
  if(el('announcementWelcomeBody')) el('announcementWelcomeBody').textContent=item.body || item.text || 'Yeni duyuru yayınlandı.';
  const imageSrc=announcementImageSrc(item);
  const image=el('announcementWelcomeImage');
  if(image){
    image.classList.toggle('hidden', !imageSrc);
    image.onerror=()=>{
      image.classList.add('hidden');
      image.removeAttribute('src');
    };
    if(imageSrc){
      image.onload=()=>image.classList.remove('hidden');
      image.src=imageSrc;
    }
  }
  const link=el('announcementWelcomeLink');
  if(link){
    link.classList.toggle('hidden', !item.href);
    if(item.href) link.href=item.href;
  }
  wrap.classList.remove('hidden');
}
function closeAnnouncementWelcome(){
  const wrap=el('announcementWelcome');
  const key=wrap?.dataset.dismissKey || '';
  if(key) localStorage.setItem(key,'dismissed');
  wrap?.classList.add('hidden');
}
function bulletinIconSvg(name){
  switch(name){
    case 'wallet':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h9.5a2.5 2.5 0 0 1 2.3 1.5H19a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 19 17.5H6A2.5 2.5 0 0 1 3.5 15V7.5Zm2 0V15a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.5h-3a2.5 2.5 0 0 1 0-5h3V9a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5Zm14 3h-3a.5.5 0 0 0 0 1h3v-1Z"/></svg>';
    case 'rail':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a3 3 0 0 1 3 3v7.5a4.5 4.5 0 0 1-2.18 3.85L19.5 21h-2.2l-1.46-2.5h-7.7L6.7 21H4.5l1.68-3.65A4.5 4.5 0 0 1 4 13.5V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v6h12V6a1 1 0 0 0-1-1H7Zm1.5 8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm7 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>';
    case 'bell':
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a4 4 0 0 1 4 4v1.03a6 6 0 0 0 1.2 3.6l1.03 1.38A1.5 1.5 0 0 1 17.03 15H6.97a1.5 1.5 0 0 1-1.2-2.39l1.03-1.38A6 6 0 0 0 8 8.03V7a4 4 0 0 1 4-4Zm0 18a3 3 0 0 1-2.82-2h5.64A3 3 0 0 1 12 21Z"/></svg>';
    case 'globe':
    default:
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm5.87 8h-2.16a14.7 14.7 0 0 0-1.05-4.06A7.03 7.03 0 0 1 17.87 11Zm-5.87 8c.86 0 1.94-1.48 2.54-4H9.46c.6 2.52 1.68 4 2.54 4Zm-3-6h6a12.8 12.8 0 0 0 0-2H9a12.8 12.8 0 0 0 0 2Zm-4.87-2h2.16c.2-1.46.56-2.83 1.05-4.06A7.03 7.03 0 0 0 4.13 11Zm2.16 2H4.13a7.03 7.03 0 0 0 3.21 4.06A14.7 14.7 0 0 1 6.29 13Zm9.42 0c-.2 1.46-.56 2.83-1.05 4.06A7.03 7.03 0 0 0 17.87 13h-2.16ZM12 5c-.86 0-1.94 1.48-2.54 4h5.08C13.94 6.48 12.86 5 12 5Z"/></svg>';
  }
}
function bulletinFootMarkup(){
  return `
    <span class="home-bulletin-foot-chip">${bulletinIconSvg('globe')}</span>
    <span class="home-bulletin-foot-chip">${bulletinIconSvg('bell')}</span>
    <span class="home-bulletin-foot-chip">${bulletinIconSvg('rail')}</span>
  `;
}
function bulletinFeatureMarkup(item){
  const icon=bulletinIconSvg(item.icon || item.id);
  const imageSrc=announcementImageSrc(item);
  const action=item.href
    ? `<a class="home-bulletin-link" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer"><span class="home-bulletin-link-icon">${bulletinIconSvg('globe')}</span><span>Siteye Git</span></a>`
    : item.actionPage
      ? `<button class="btn small primary home-bulletin-action" type="button" data-bulletin-page="${esc(item.actionPage)}"><span class="home-bulletin-link-icon">${bulletinIconSvg('wallet')}</span><span>Alana Git</span></button>`
      : '';
  return `
    <div class="home-bulletin-meta">
      <div class="home-bulletin-pill live"><span class="home-bulletin-icon">${icon}</span><span>${esc(item.label)}</span></div>
      <div class="home-bulletin-date">${esc(item.date)}</div>
    </div>
    ${imageSrc ? `<a class="home-bulletin-image-link" href="${esc(imageSrc)}" data-zoom-image data-preview-title="${esc(item.title || 'Duyuru görseli')}" aria-label="Duyuru görselini tam ekran aç"><img class="home-bulletin-image" src="${esc(imageSrc)}" alt="" loading="lazy" onerror="this.closest('.home-bulletin-image-link')?.remove()"></a>` : ''}
    <div class="home-bulletin-title">${esc(item.title)}</div>
    ${item.text ? `<div class="home-bulletin-text">${esc(item.text)}</div>` : ''}
    ${action}
  `;
}
function bulletinItemMarkup(item,index,active){
  return `<button class="home-bulletin-item ${active?'active':''}" type="button" data-bulletin-index="${index}">
    <div class="home-bulletin-item-top">
      <span class="home-bulletin-item-label"><span class="home-bulletin-item-icon">${bulletinIconSvg(item.icon || item.id)}</span><span>${esc(item.label)}</span></span>
      <span class="home-bulletin-item-date">${esc(item.date)}</span>
    </div>
    <div class="home-bulletin-item-title">${esc(item.title)}</div>
  </button>`;
}
function staticPlatformBulletins(){
  return HOME_BULLETINS.map(item=>{
    const remoteOverride=firebaseAnnouncements.find(remote=>String(remote.announcementId || remote.id || '')===item.id);
    if(remoteOverride) return null;
    const override=platformBulletinOverrides[item.id] || {};
    if(String(override.status || '').toLowerCase()==='deleted') return null;
    const merged={...item, ...override};
    return {
      ...merged,
      id:item.id,
      announcementId:item.id,
      label:merged.label || 'Platform',
      body:merged.body || merged.text || '',
      text:merged.text || merged.body || '',
      target:merged.target || 'platform',
      audience:merged.audience || 'approved_members',
      channel:merged.channel || 'platform',
      status:merged.status || 'active',
      source:'Sabit Platform Bildirisi',
      sourceType:'static'
    };
  }).filter(Boolean);
}
function homeBulletinItems(){
  const remote=firebaseAnnouncements
    .filter(item=>String(item.status||'active')!=='deleted' && announcementTargetsPlatform(item))
    .map(item=>({
      id:item.id || item.announcementId || `announcement_${item.createdAt || ''}`,
      label:item.label || 'Duyuru',
      date:item.date || (item.createdAt ? new Date(Number(item.createdAt)).toLocaleDateString('tr-TR') : 'Güncel'),
      title:item.title || 'Duyuru',
      text:item.body || item.text || '',
      icon:item.icon || 'bell',
      href:item.href || '',
      imageUrl:item.imageUrl || '',
      imageDataUrl:item.imageDataUrl || ''
    }));
  const local=localPlatformBulletins
    .filter(item=>String(item.status||'active')!=='deleted' && announcementTargetsPlatform(item))
    .map(item=>({
      id:item.id || item.announcementId || `platform_${item.createdAt || ''}`,
      label:item.label || 'Platform',
      date:item.date || (item.createdAt ? new Date(Number(item.createdAt)).toLocaleDateString('tr-TR') : 'Güncel'),
      title:item.title || 'Duyuru',
      text:item.body || item.text || '',
      icon:item.icon || 'bell',
      href:item.href || '',
      imageUrl:item.imageUrl || '',
      imageDataUrl:item.imageDataUrl || ''
    }));
  const fixed=staticPlatformBulletins()
    .filter(item=>announcementTargetsPlatform(item))
    .map(item=>({
      id:item.id,
      label:item.label || 'Platform',
      date:item.date || 'Güncel',
      title:item.title || 'Duyuru',
      text:item.body || item.text || '',
      icon:item.icon || 'bell',
      href:item.href || '',
      actionPage:item.actionPage || '',
      imageUrl:item.imageUrl || '',
      imageDataUrl:item.imageDataUrl || ''
    }));
  return [...remote, ...local, ...fixed];
}
function activateHomeBulletin(index){
  const items=homeBulletinItems();
  if(!el('homeBulletinFeature') || !el('homeBulletinList') || !items.length) return;
  currentBulletinIndex=((Number(index)||0) + items.length) % items.length;
  const activeItem=items[currentBulletinIndex];
  el('homeBulletinFeature').innerHTML=bulletinFeatureMarkup(activeItem);
  el('homeBulletinList').innerHTML=items.map((item,itemIndex)=>bulletinItemMarkup(item,itemIndex,itemIndex===currentBulletinIndex)).join('');
}
function renderHomeBulletins(){
  if(!el('homeBulletinFeature') || !el('homeBulletinList')) return;
  activateHomeBulletin(currentBulletinIndex);
  if(el('homeBulletinFoot')) el('homeBulletinFoot').innerHTML=bulletinFootMarkup();
  renderNotificationMetrics();
  clearInterval(bulletinRotateTimer);
  if(homeBulletinItems().length>1){
    bulletinRotateTimer=window.setInterval(()=>{
      activateHomeBulletin(currentBulletinIndex+1);
    }, 5200);
  }
}

function dismissHomeAnnouncement(){
  el('homeAnnouncement')?.classList.add('hidden');
  localStorage.setItem(HOME_ANNOUNCEMENT_KEY,'dismissed');
}

function showIdleSplash(){
  showSplash(0);
}

function restartIdleTimer(){
  clearTimeout(idleTimer);
  if(!document.body.classList.contains('app-ready')) return;
  idleTimer=window.setTimeout(showIdleSplash, IDLE_TIMEOUT_MS);
}

function handleActivity(){
  if(document.body.classList.contains('app-booting')){
    hideSplash();
    return;
  }
  restartIdleTimer();
}

function monthValueToPeriod(monthValue){
  const safe=String(monthValue||'');
  const [yearPart,monthPart]=safe.split('-');
  const year=Number(yearPart)||new Date().getFullYear();
  const month=Math.min(12, Math.max(1, Number(monthPart)||1));
  return {year,month};
}
function periodToMonthValue(period){
  if(!period) return '';
  return `${period.year}-${String(period.month).padStart(2,'0')}`;
}
function addMonthsToPeriod(period,delta){
  const baseYear=Number(period?.year)||new Date().getFullYear();
  const baseMonth=(Number(period?.month)||1)-1;
  const date=new Date(baseYear, baseMonth + Number(delta||0), 1);
  return {year:date.getFullYear(),month:date.getMonth()+1};
}
function formatPeriodLabel(period){
  const key=periodToMonthValue(period);
  return MONTH_LABELS[key] || key || '-';
}
function rawHirePeriod(profile=formProfile()){
  const year=Number(profile?.girisYili||0);
  if(!year) return null;
  const month=Math.min(12, Math.max(1, Number(profile?.girisAy||1)));
  return {year,month};
}
function profileProbationMonths(profile=formProfile()){
  const raw=Number(profile?.probationMonths);
  return Number.isFinite(raw) && raw>=0 ? raw : 4;
}
function normalizedMilitaryStatus(profile=formProfile()){
  const status=String(profile?.militaryAfterStart||'yok');
  return status==='var' ? 'after' : status;
}
function profileMilitaryDelayMonths(profile=formProfile()){
  const raw=Number(profile?.militaryDelayMonths);
  if(Number.isFinite(raw) && raw>=0) return raw;
  return String(profile?.militaryAfterStart||'')==='var' ? 12 : 0;
}
function syncMilitaryDelayControls(){
  if(!el('militaryAfterStart') || !el('militaryDelayMonths')) return;
  if(sval('militaryAfterStart')==='yok') el('militaryDelayMonths').value='0';
}
function startProfilePeriod(profile=formProfile()){
  const hire=rawHirePeriod(profile);
  if(!hire) return null;
  const delay=normalizedMilitaryStatus(profile)==='yok' ? 0 : profileMilitaryDelayMonths(profile);
  return addMonthsToPeriod(hire, profileProbationMonths(profile) + delay);
}
function selectedSalaryPeriod(){
  return monthValueToPeriod(sval('month'));
}
function serviceYearsForMonth(monthValue, profile=formProfile()){
  const hire=rawHirePeriod(profile);
  if(!hire) return 0;
  const period=monthValueToPeriod(monthValue);
  let years=period.year-hire.year;
  if(period.month>=hire.month) years += 1;
  return Math.max(0, years);
}
function nextPromotionPeriod(monthValue=sval('month'), profile=formProfile()){
  const base=startProfilePeriod(profile);
  if(!base) return null;
  const period=monthValueToPeriod(monthValue);
  const sameYear={year:period.year,month:base.month};
  return period.month < base.month ? sameYear : {year:period.year+1,month:base.month};
}
function salaryMonthInfo(profile=formProfile()){
  const start=startProfilePeriod(profile);
  const resolvedStep=resolveProfileStep(sval('month'), profile);
  const militaryStatus=normalizedMilitaryStatus(profile);
  const militaryDelay=militaryStatus==='yok' ? 0 : profileMilitaryDelayMonths(profile);
  return {
    start,
    startLabel:start ? formatPeriodLabel(start) : '-',
    nextPromotion:nextPromotionPeriod(sval('month'), profile),
    nextPromotionLabel:formatPeriodLabel(nextPromotionPeriod(sval('month'), profile)),
    serviceYears:serviceYearsForMonth(sval('month'), profile),
    probationMonths:profileProbationMonths(profile),
    militaryStatus,
    militaryDelayMonths:militaryDelay,
    resolvedStep,
    resolvedStepLabel:resolvedStep ? `${resolvedStep.degree} / ${resolvedStep.kademe}` : '-'
  };
}
function resolveProfileStep(monthValue=sval('month'), profile=formProfile()){
  const workerType=profile?.workerType || sval('workerType');
  const skala=profile?.skala || sval('skala');
  const degree=profile?.degree || sval('degree') || '-';
  const kademe=profile?.kademe || sval('kademe') || '-';
  const rate=Number((((window.SCALE_TABLE||SCALE_TABLE)[workerType]||{})[skala]||{})[degree]?.[kademe]||0);
  return {degree,kademe,rate};
}

function scheduleComputeAll(){
  if(computeFrame) return;
  computeFrame=window.requestAnimationFrame(()=>{
    computeFrame=0;
    computeAll();
  });
}
function scheduleLeaveRefresh(){
  if(leaveRenderFrame) return;
  leaveRenderFrame=window.requestAnimationFrame(()=>{
    leaveRenderFrame=0;
    renderLeaveModule();
  });
}
function refreshProfileIndicators(){
  const info=salaryMonthInfo();
  const yrs=info.serviceYears;
  const base=Number(info.resolvedStep?.rate||0);
  const emekGross=round2(EMEK_ZAMMI_RATE * yrs);
  const hourlyTotal=round2(base + emekGross);
  const hizmetYears=hizmetYearsFromServiceYears(yrs);
  const hizmetGross=round2(hizmetUnit() * hizmetYears);
  if(el('kpiBase')) el('kpiBase').textContent=money(base);
  if(el('kpiEmek')) el('kpiEmek').textContent=money(emekGross);
  if(el('kpiHourly')) el('kpiHourly').textContent=money(hourlyTotal);
  if(el('kpiServiceYears')) el('kpiServiceYears').textContent=String(yrs);
  if(el('profileEmekGross')) el('profileEmekGross').textContent=money(emekGross);
  if(el('profileHizmetGross')) el('profileHizmetGross').textContent=money(hizmetGross);
  if(el('profileServiceYears')) el('profileServiceYears').textContent=String(hizmetYears);
  if(el('profileHourlyTotal')) el('profileHourlyTotal').textContent=money(hourlyTotal);
  if(el('profileEffectiveStart')) el('profileEffectiveStart').textContent=info.startLabel;
  if(el('profileCurrentStep')) el('profileCurrentStep').textContent=info.resolvedStepLabel;
  if(el('profileNextPromotion')) el('profileNextPromotion').textContent=info.nextPromotionLabel;
  renderActiveProfileSummary();
}
function scheduleProfilePreviewRefresh(includeLeave=false){
  if(includeLeave) scheduleLeaveRefresh();
  if(profilePreviewFrame) return;
  profilePreviewFrame=window.requestAnimationFrame(()=>{
    profilePreviewFrame=0;
    refreshProfileIndicators();
  });
}
function salaryFormData(){
  syncPaidLeaveTotal();
  const data={};
  SALARY_FIELD_IDS.forEach(id=>{
    const node=el(id);
    if(!node) return;
    data[id]=node.type==='checkbox' ? !!node.checked : node.value;
  });
  return data;
}
function saveSalaryForm(){
  try{
    localStorage.setItem(SALARY_FORM_STORAGE_KEY, JSON.stringify(salaryFormData()));
    scheduleUserDataSync('salary');
  }catch(error){}
}
function migrateSalaryMay2026ReferenceDefaults(data={}){
  const setIfOldDefault=(id,oldValue,nextValue)=>{
    const node=el(id);
    if(!node) return false;
    const saved=Object.prototype.hasOwnProperty.call(data,id) ? Number(data[id]) : Number(node.value);
    if(Math.abs(saved-Number(oldValue))>.001) return false;
    node.value=String(nextValue);
    return true;
  };
  let changed=false;
  changed=setIfOldDefault('vardiyaRate',15,10) || changed;
  changed=setIfOldDefault('iaseBrut',300.76,301.24) || changed;
  changed=setIfOldDefault('yemekSgkIst',158,300) || changed;
  return changed;
}
function restoreSalaryForm(){
  let data=null;
  try{
    data=JSON.parse(localStorage.getItem(SALARY_FORM_STORAGE_KEY)||'null');
  }catch(error){
    localStorage.removeItem(SALARY_FORM_STORAGE_KEY);
  }
  if(!data || typeof data!=='object') return false;
  SALARY_FIELD_IDS.forEach(id=>{
    const node=el(id);
    if(!node || !Object.prototype.hasOwnProperty.call(data,id)) return;
    if(node.type==='checkbox') node.checked=!!data[id];
    else node.value=data[id];
  });
  if(Object.prototype.hasOwnProperty.call(data,'ucretliIzin') && !Object.prototype.hasOwnProperty.call(data,'yillikIzin') && !Object.prototype.hasOwnProperty.call(data,'sendikaTisIzin') && el('yillikIzin')){
    el('yillikIzin').value=data.ucretliIzin || 0;
  }
  const migrated=migrateSalaryMay2026ReferenceDefaults(data);
  syncPaidLeaveTotal();
  syncTedbTaxMethod();
  syncPreviousBonusControls();
  syncWorkModeFields();
  if(migrated) saveSalaryForm();
  return true;
}
function scheduleSalaryChange(){
  saveSalaryForm();
  scheduleComputeAll();
}
function dengeTazminatiForMonth(monthValue=sval('month')){
  const month=Number(String(monthValue || '').split('-')[1] || 0);
  return month===5 || month===10 ? 11713 : 0;
}
function syncDengeTazminati(){
  const node=el('dengeTazminati');
  if(node) node.value=dengeTazminatiForMonth();
}
function handleCalendarChange(){
  if(el('workMonth')) el('workMonth').value=sval('month');
  fillCalendarInputs(true);
  syncDengeTazminati();
  syncWorkModeFields();
  saveSalaryForm();
  renderWorkModule();
  renderProfiles();
  refreshProfileIndicators();
  scheduleLeaveRefresh();
  scheduleComputeAll();
}
function showProfileStatus(message){
  const node=el('profileSaveStatus');
  if(!node) return;
  clearTimeout(profileStatusTimer);
  node.textContent=message || '';
  node.classList.toggle('show', !!message);
  if(message){
    profileStatusTimer=window.setTimeout(()=>{
      node.textContent='';
      node.classList.remove('show');
    }, 2200);
  }
}
function updateTopbarSlogan(){
  const node=el('topbarSlogan');
  if(!node) return;
  const session=getMemberSession();
  const show=!!session?.active && currentPage!=='membership';
  node.classList.toggle('show', show);
}

function scrollCurrentPageToTop(behavior='auto'){
  window.requestAnimationFrame(()=>{
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
    window.scrollTo({top:0,left:0,behavior});
  });
}

function setPage(page, options={}){
  if(!canAccessPage(page)){
    showMembershipGateNotice(page==='notifications'
      ? 'Bildirim paneli sadece admin/yönetici oturumunda açılır.'
      : page==='mevzuat' || page==='facilities'
      ? 'Bu alana üye girişiyle veya misafir girişiyle erişebilirsin.'
      : 'Bu alana giriş için onaylı üyelik gerekir. Lütfen üye girişi yap veya başvuru gönder.');
    page='membership';
  }
  const previousPage=currentPage;
  const samePage=previousPage===page;
  const forceScrollTop=options.forceScrollTop===true || options.scrollTop===true;
  const shouldScrollTop=options.scrollTop!==false && (!samePage || forceScrollTop);
  const shouldClosePanels=options.closePanels!==false && (!samePage || forceScrollTop || options.closePanels===true);
  currentPage=page;
  if(shouldClosePanels){
    closeInfoPanels();
    closeNavDrawer();
    closeProfileDrawer();
  }
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  el(page)?.classList.add('active');
  document.querySelectorAll(`.nav-btn[data-page="${page}"]`).forEach(b=>b.classList.add('active'));
  if(page==='leave') renderLeaveModule();
  if(page==='work'){ renderWorkModule(); renderWorkModels(); }
  if(page==='form') initForum();
  if(page==='membership') renderMembershipPreview();
  if(page==='exchange') loadExchangeRequest();
  if(page==='notifications') loadFirebaseAnnouncements();
  updateTopbarSlogan();
  if(shouldScrollTop) scrollCurrentPageToTop(options.behavior || 'auto');
}
function syncInfoButtons(){
  document.querySelectorAll('[data-info-toggle]').forEach(btn=>{
    const panel=el(btn.dataset.infoToggle);
    btn.setAttribute('aria-expanded', panel && !panel.classList.contains('hidden') ? 'true' : 'false');
  });
}
function closeInfoPanels(){
  document.querySelectorAll('.info-panel').forEach(panel=>panel.classList.add('hidden'));
  syncInfoButtons();
}
function toggleInfoPanel(id){
  const panel=el(id);
  if(!panel) return;
  const shouldOpen=panel.classList.contains('hidden');
  closeInfoPanels();
  if(shouldOpen) panel.classList.remove('hidden');
  syncInfoButtons();
}
function lockViewportZoom(){
  document.addEventListener('gesturestart', event=>event.preventDefault(), {passive:false});
  document.addEventListener('gesturechange', event=>event.preventDefault(), {passive:false});
  document.addEventListener('wheel', event=>{
    if(event.ctrlKey) event.preventDefault();
  }, {passive:false});
}
function openNavDrawer(){
  closeInfoPanels();
  closeProfileDrawer();
  document.body.classList.add('nav-open');
  el('navDrawerShell')?.setAttribute('aria-hidden','false');
  restartIdleTimer();
  return true;
}
function closeNavDrawer(){
  document.body.classList.remove('nav-open');
  el('navDrawerShell')?.setAttribute('aria-hidden','true');
}
function setMode(mode){
  currentMode=mode;
  el('modeMaas').classList.toggle('active',mode==='maas');
  el('modeTedb').classList.toggle('active',mode==='tedb');
  el('salaryWizard').classList.toggle('hidden',mode!=='maas');
  el('tedbPane').classList.toggle('hidden',mode!=='tedb');
}
function setStep(step){
  currentStep=Math.min(4,Math.max(1,step));
  if(currentStep>1) closeProfileDrawer();
  [1,2,3,4].forEach(i=>{
    el('step'+i).classList.toggle('hidden', i!==currentStep);
  });
  document.querySelectorAll('.step').forEach(node=>{
    const s=Number(node.dataset.step);
    node.classList.toggle('active',s===currentStep);
    node.classList.toggle('done',s<currentStep);
  });
  el('prevBtn').disabled=currentStep===1;
  el('nextBtn').textContent=currentStep===4?'Tamam':'İleri';
}
function setProfileDrawerTab(tab){
  currentProfileDrawerTab=tab==='saved'?'saved':'card';
  document.querySelectorAll('[data-profile-tab]').forEach(node=>{
    node.classList.toggle('active', node.dataset.profileTab===currentProfileDrawerTab);
  });
  el('profileDrawerCardPane').classList.toggle('active', currentProfileDrawerTab==='card');
  el('profileDrawerSavedPane').classList.toggle('active', currentProfileDrawerTab==='saved');
  const scrollWrap=el('profileDrawerScroll');
  if(scrollWrap) scrollWrap.scrollTop=0;
}
function openProfileDrawer(tab='card'){
  closeNavDrawer();
  closeInfoPanels();
  setProfileDrawerTab(tab);
  document.body.classList.add('drawer-open');
  el('profileDrawerShell')?.setAttribute('aria-hidden','false');
  const scrollWrap=el('profileDrawerScroll');
  if(scrollWrap) scrollWrap.scrollTop=0;
  restartIdleTimer();
}
function closeProfileDrawer(){
  document.body.classList.remove('drawer-open');
  el('profileDrawerShell')?.setAttribute('aria-hidden','true');
}
function profileInitials(fullName, sicil){
  const parts=String(fullName||'').trim().split(/\s+/).filter(Boolean);
  if(parts.length >= 2) return `${parts[0][0]||''}${parts[parts.length-1][0]||''}`.toLocaleUpperCase('tr-TR');
  if(parts.length === 1) return parts[0].slice(0,2).toLocaleUpperCase('tr-TR');
  return String(sicil||'TC').slice(-2).toLocaleUpperCase('tr-TR');
}
function normalizeProfessionName(value=''){
  return String(value || '')
    .toLocaleLowerCase('tr-TR')
    .replace(/[ıİ]/g,'i')
    .replace(/[ğĞ]/g,'g')
    .replace(/[üÜ]/g,'u')
    .replace(/[şŞ]/g,'s')
    .replace(/[öÖ]/g,'o')
    .replace(/[çÇ]/g,'c')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}
function professionImageForRole(role=''){
  const normalized=normalizeProfessionName(role);
  if(!normalized) return '';
  if(PROFESSION_IMAGE_LOOKUP[normalized]) return PROFESSION_IMAGE_LOOKUP[normalized];
  const match=Object.keys(PROFESSION_IMAGE_LOOKUP).find(key=>normalized.includes(key) || key.includes(normalized));
  return match ? PROFESSION_IMAGE_LOOKUP[match] : '';
}
function setProfileAvatar(node, role, initials='TC'){
  if(!node) return;
  const image=professionImageForRole(role);
  node.classList.toggle('has-profession-image', !!image);
  node.closest('.personnel-summary-avatar-wrap,.profile-modern-hero,.membership-review-profile')?.classList.toggle('has-profession-avatar', !!image);
  if(image){
    node.innerHTML=`<img src="${esc(image)}" alt="${esc(role || 'Meslek görseli')}">`;
    node.setAttribute('title', role || 'Meslek görseli');
    return;
  }
  node.textContent=initials || 'TC';
  node.removeAttribute('title');
}
function profileAvatarMarkup(role, initials='TC', className='profile-avatar'){
  const image=professionImageForRole(role);
  if(image) return `<div class="${esc(className)} has-profession-image"><img src="${esc(image)}" alt="${esc(role || 'Meslek görseli')}"></div>`;
  return `<div class="${esc(className)}">${esc(initials || 'TC')}</div>`;
}
function renderActiveProfileSummary(){
  const fullName=sval('fullName').trim();
  const sicil=sval('sicil').trim();
  const bolge=sval('bolge').trim();
  const professionRole=sval('terfiBilgisi').trim();
  const resolvedStep=resolveProfileStep();
  const schedule=workScheduleLabel();
  const degree=String(resolvedStep?.degree||'-').trim();
  const kademe=String(resolvedStep?.kademe||'-').trim();
  const title = fullName || (sicil ? `Sicil ${sicil}` : 'Henüz personel seçilmedi');
  const meta = fullName || sicil
    ? `${companyLabel()}${bolge ? ' • '+bolge : ''}`
    : '';
  const sicilText=sicil || '-';
  const roleText=professionRole || 'Meslek seçilmedi';
  const degreeText=[degree,kademe].filter(value=>value && value!=='-').join('/') || '-';
  const scheduleText=schedule || '-';
  const initials=profileInitials(fullName, sicil);
  const setText=(id,value)=>{ const node=el(id); if(node) node.textContent=value; };
  setText('activeProfileTitle', title);
  setText('activeProfileMeta', meta);
  setText('activeProfileSicil', sicilText);
  setText('activeProfileRole', roleText);
  setText('activeProfileDegree', degreeText);
  setText('activeProfileSchedule', scheduleText);
  setProfileAvatar(el('activeProfileAvatar'), professionRole, initials);
  setProfileAvatar(el('profileDrawerAvatar'), professionRole, initials);
  if(el('profileDrawerName')) el('profileDrawerName').textContent=fullName || 'Henüz personel seçilmedi';
  if(el('profileDrawerMeta')) el('profileDrawerMeta').textContent=meta || 'Kart bilgileri kaydedildiğinde maaş, izin ve çalışma takvimi aynı veriyle çalışır.';
  if(el('profileDrawerCompany')) el('profileDrawerCompany').textContent=fullName || sicil ? companyLabel() : 'Hazır';
  setText('leaveActiveProfileTitle', title);
  setText('leaveActiveProfileMeta', meta);
  setText('leaveActiveProfileSicil', sicilText);
  setText('leaveActiveProfileRole', roleText);
  setText('leaveActiveProfileDegree', degreeText);
  setText('leaveActiveProfileSchedule', scheduleText);
  setProfileAvatar(el('leaveActiveProfileAvatar'), professionRole, initials);
  setText('workActiveProfileTitle', title);
  setText('workActiveProfileMeta', meta);
  setText('workActiveProfileSicil', sicilText);
  setText('workActiveProfileRole', roleText);
  setText('workActiveProfileDegree', degreeText);
  setText('workActiveProfileSchedule', scheduleText);
  setProfileAvatar(el('workActiveProfileAvatar'), professionRole, initials);
}
function profiles(){
  if(Array.isArray(profilesCache)) return profilesCache;
  try{
    const parsed=JSON.parse(localStorage.getItem(PROFILES_STORAGE_KEY)||'[]');
    profilesCache=Array.isArray(parsed) ? parsed : [];
  }catch(error){
    profilesCache=[];
  }
  return profilesCache;
}
function saveProfiles(list){
  profilesCache=Array.isArray(list) ? list : [];
  localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profilesCache));
  scheduleUserDataSync('profiles');
}
function setLastProfile(id){
  if(id) localStorage.setItem(LAST_PROFILE_KEY, id);
  else localStorage.removeItem(LAST_PROFILE_KEY);
  scheduleUserDataSync('last-profile');
}
function getLastProfileId(){
  return localStorage.getItem(LAST_PROFILE_KEY) || '';
}
function leaveStore(){
  if(leaveStoreCache && typeof leaveStoreCache==='object') return leaveStoreCache;
  try{
    const parsed=JSON.parse(localStorage.getItem(LEAVE_STORAGE_KEY)||'{}');
    leaveStoreCache=parsed && typeof parsed==='object' ? parsed : {};
  }catch(error){
    leaveStoreCache={};
  }
  return leaveStoreCache;
}
function saveLeaveStore(store){
  leaveStoreCache=store && typeof store==='object' ? store : {};
  localStorage.setItem(LEAVE_STORAGE_KEY, JSON.stringify(leaveStoreCache));
  scheduleUserDataSync('leave');
}
function workLogStore(){
  if(workLogStoreCache && typeof workLogStoreCache==='object') return workLogStoreCache;
  try{
    const parsed=JSON.parse(localStorage.getItem(WORK_LOG_STORAGE_KEY)||'{}');
    workLogStoreCache=parsed && typeof parsed==='object' ? parsed : {};
  }catch(error){
    workLogStoreCache={};
  }
  return workLogStoreCache;
}
function saveWorkLogStore(store){
  workLogStoreCache=store && typeof store==='object' ? store : {};
  localStorage.setItem(WORK_LOG_STORAGE_KEY, JSON.stringify(workLogStoreCache));
  scheduleUserDataSync('work');
}
function currentSyncUid(session=getMemberSession()){
  return String(session?.firebaseUid || session?.uid || '').trim();
}
function canSyncUserData(){
  const session=getMemberSession();
  return !!(session?.active && !isGuestSession(session) && currentSyncUid(session));
}
function safeJsonParse(value,fallback){
  try{
    return value ? JSON.parse(value) : fallback;
  }catch(error){
    return fallback;
  }
}
function userSyncPayload(reason='manual'){
  return {
    version:2,
    reason,
    updatedAt:Date.now(),
    lastProfileId:getLastProfileId(),
    profiles:profiles(),
    salaryForm:safeJsonParse(localStorage.getItem(SALARY_FORM_STORAGE_KEY), {}),
    leaveStore:leaveStore(),
    workLogStore:workLogStore(),
    forumNick:localStorage.getItem(FORUM_NICK_KEY) || '',
    forumDraft:safeJsonParse(localStorage.getItem(FORUM_DRAFT_KEY), {}),
    membership:{sicil:String(getMembershipRecord().sicil || ''), email:String(getMembershipRecord().email || '')}
  };
}
function scheduleUserDataSync(reason='update'){
  if(userSyncApplying || !canSyncUserData()) return false;
  localStorage.setItem(USER_SYNC_UPDATED_KEY, String(Date.now()));
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.updateUserSyncData!=='function') return false;
  clearTimeout(userSyncTimer);
  userSyncTimer=window.setTimeout(()=>{
    if(userSyncApplying || !canSyncUserData()) return;
    try{
      bridge.updateUserSyncData(JSON.stringify(userSyncPayload(reason)));
    }catch(error){}
  },850);
  return true;
}
function loadUserDataSync(force=false){
  if(userSyncLoading || !canSyncUserData()) return false;
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.loadUserSyncData!=='function') return false;
  userSyncLoading=true;
  userSyncForceApply=!!force;
  try{
    bridge.loadUserSyncData(force ? '1' : '');
    return true;
  }catch(error){
    userSyncLoading=false;
    userSyncForceApply=false;
    return false;
  }
}
function applyUserSyncData(payload={}, force=false){
  const remoteUpdated=Number(payload.updatedAt || 0);
  const localUpdated=Number(localStorage.getItem(USER_SYNC_UPDATED_KEY) || 0);
  if(!remoteUpdated || (!force && remoteUpdated<localUpdated)) return;
  userSyncApplying=true;
  try{
    if(Array.isArray(payload.profiles)){
      profilesCache=payload.profiles;
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profilesCache));
    }
    if(payload.lastProfileId){
      localStorage.setItem(LAST_PROFILE_KEY, String(payload.lastProfileId));
    }
    if(payload.salaryForm && typeof payload.salaryForm==='object'){
      localStorage.setItem(SALARY_FORM_STORAGE_KEY, JSON.stringify(payload.salaryForm));
    }
    if(payload.leaveStore && typeof payload.leaveStore==='object'){
      leaveStoreCache=payload.leaveStore;
      localStorage.setItem(LEAVE_STORAGE_KEY, JSON.stringify(leaveStoreCache));
    }
    if(payload.workLogStore && typeof payload.workLogStore==='object'){
      workLogStoreCache=payload.workLogStore;
      localStorage.setItem(WORK_LOG_STORAGE_KEY, JSON.stringify(workLogStoreCache));
    }
    if(typeof payload.forumNick==='string' && payload.forumNick.trim()){
      localStorage.setItem(FORUM_NICK_KEY, cleanForumNick(payload.forumNick));
    }
    if(payload.forumDraft && typeof payload.forumDraft==='object'){
      localStorage.setItem(FORUM_DRAFT_KEY, JSON.stringify(payload.forumDraft));
    }
    localStorage.setItem(USER_SYNC_UPDATED_KEY, String(remoteUpdated));
  }finally{
    userSyncApplying=false;
  }
  restoreLastProfile();
  restoreSalaryForm();
  restoreForumDraft();
  renderProfiles();
  renderActiveProfileSummary();
  renderLeaveModule();
  renderWorkModule();
  renderWorkModels();
  fillCalendarInputs();
  updateCalendarCards();
  scheduleSalaryChange();
  renderForum();
}
function currentProfileKey(){
  return currentProfileId || sval('sicil').trim() || '';
}
function leaveSelectedMonth(){
  const node=el('izinMonth');
  return (node?.value || new Date().toISOString().slice(0,7));
}
function leaveSelectedYear(){
  return Number(leaveSelectedMonth().slice(0,4)) || new Date().getFullYear();
}
function annualLeaveEntitlementForPeriod(monthValue=leaveSelectedMonth()){
  const years=serviceYearsForMonth(monthValue);
  if(years >= 15) return 30;
  if(years > 5) return 24;
  if(years >= 1) return 18;
  return 0;
}
function leaveTypeLabel(type){
  return type==='tis' ? 'Sendika TİS İzni' : 'Yıllık İzin';
}
function leaveDurationLabel(duration){
  return Number(duration)===0.5 ? 'Yarım Gün' : 'Tam Gün';
}
function formatLeaveDate(dateStr){
  if(!dateStr) return '-';
  return new Intl.DateTimeFormat('tr-TR',{day:'numeric',month:'long'}).format(new Date(`${dateStr}T12:00:00`));
}
function normalizeLeaveDuration(type,duration){
  return type==='tis' && Number(duration)===0.5 ? 0.5 : 1;
}
function profileLeaveEvents(profileId=currentProfileKey()){
  if(!profileId) return [];
  const store=leaveStore();
  return Array.isArray(store[profileId]) ? [...store[profileId]].sort((a,b)=>String(a.date).localeCompare(String(b.date))) : [];
}
function saveProfileLeaveEvents(events,profileId=currentProfileKey()){
  if(!profileId) return;
  const store=leaveStore();
  store[profileId]=[...events].sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  saveLeaveStore(store);
}
function workSelectedMonth(){
  return el('workMonth')?.value || sval('month') || new Date().toISOString().slice(0,7);
}
function parseClockToMinutes(value){
  const [hour,minute]=String(value||'').split(':').map(Number);
  if(!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  return hour*60 + minute;
}
function computeNetWorkHours(entry){
  const start=parseClockToMinutes(entry.startTime);
  const endRaw=parseClockToMinutes(entry.endTime);
  if(start===null || endRaw===null) return 0;
  let end=endRaw;
  if(end<=start) end += 24*60;
  let total=Math.max(0, end-start);
  const mealStart=parseClockToMinutes(entry.mealStart);
  const mealEndRaw=parseClockToMinutes(entry.mealEnd);
  if(mealStart!==null && mealEndRaw!==null){
    let mealEnd=mealEndRaw;
    if(mealEnd<=mealStart) mealEnd += 24*60;
    let adjustedMealStart=mealStart;
    if(adjustedMealStart<start) adjustedMealStart += 24*60;
    if(adjustedMealStart<end){
      const mealDuration=Math.max(0, Math.min(end, mealEnd) - adjustedMealStart);
      total -= mealDuration;
    }
  }
  return round2(Math.max(0, total / 60));
}
function workTypeLabel(type){
  return {
    normal:'Normal Çalışma',
    vardiya:'Vardiya - Manuel',
    vardiyaSabah:'Vardiyalı Çalışma - Sabah',
    vardiyaAksam:'Vardiyalı Çalışma - Akşam',
    vardiyaGece:'Vardiyalı Çalışma - Gece',
    haftaSonu:'Hafta Sonu / P.B.',
    tatil:'Tatil',
    ubgt:'UBGT / Ulusal Bayram Genel Tatil',
    ucretliIzin:'Yıllık İzin',
    yillikIzin:'Yıllık İzin',
    gmsUcretli:'GMŞ Ücretli',
    sendikaTisIzin:'Sendika TİS İzni',
    ucretliRapor:'Ücretli Rapor'
  }[type] || 'Çalışma';
}
function workTypeShortLabel(type){
  return {
    normal:'N',
    vardiya:'V',
    vardiyaSabah:'S',
    vardiyaAksam:'A',
    vardiyaGece:'G',
    haftaSonu:'PB',
    tatil:'T',
    ubgt:'UBGT',
    ucretliIzin:'Yİ',
    yillikIzin:'Yİ',
    gmsUcretli:'GMŞ',
    sendikaTisIzin:'TİS',
    ucretliRapor:'R'
  }[type] || 'Ç';
}
function isVardiyaWorkType(type){
  return ['vardiya','vardiyaSabah','vardiyaAksam','vardiyaGece'].includes(String(type||''));
}
function profileWorkEvents(profileId=currentProfileKey()){
  if(!profileId) return [];
  const store=workLogStore();
  return Array.isArray(store[profileId]) ? [...store[profileId]].sort((a,b)=>String(a.date).localeCompare(String(b.date))) : [];
}
function saveProfileWorkEvents(events, profileId=currentProfileKey()){
  if(!profileId) return;
  const store=workLogStore();
  store[profileId]=[...events].sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  saveWorkLogStore(store);
}
function normalizeWorkEvent(payload){
  const entry={
    id:payload.id || `work_${Date.now()}`,
    date:String(payload.date||''),
    type:String(payload.type||'normal'),
    startTime:String(payload.startTime||'08:00'),
    endTime:String(payload.endTime||'17:00'),
    mealStart:String(payload.mealStart||'12:00'),
    mealEnd:String(payload.mealEnd||'12:30'),
    extraOvertime:round2(Number(payload.extraOvertime)||0),
    extraNight:round2(Number(payload.extraNight)||0),
    extraTrack:round2(Number(payload.extraTrack)||0),
    extraUbgt:round2(Number(payload.extraUbgt)||0),
    extraKm:round2(Number(payload.extraKm)||0),
    extraRampa:round2(Number(payload.extraRampa)||0),
    beklemeGun:round2(Number(payload.beklemeGun)||0),
    beklemeAdet:Math.max(0, Math.floor(Number(payload.beklemeAdet)||0)),
    note:String(payload.note||'').trim()
  };
  entry.netHours=computeNetWorkHours(entry);
  return entry;
}
function workTypeTemplate(type=sval('workType')){
  const schedule=workScheduleModel();
  if(WORK_SHIFT_TEMPLATES[type]) return {...WORK_SHIFT_TEMPLATES[type]};
  if(type==='ucretliIzin' || type==='yillikIzin' || type==='gmsUcretli' || type==='sendikaTisIzin' || type==='ucretliRapor') return {start:schedule.start,end:schedule.end,mealStart:schedule.mealStart,mealEnd:schedule.mealEnd};
  if(type==='haftaSonu' || type==='tatil' || type==='ubgt' || type==='vardiya' || type==='normal') return {start:schedule.start,end:schedule.end,mealStart:schedule.mealStart,mealEnd:schedule.mealEnd};
  return {start:schedule.start,end:schedule.end,mealStart:schedule.mealStart,mealEnd:schedule.mealEnd};
}
function applyWorkTypeTemplate(type=sval('workType')){
  const template=workTypeTemplate(type);
  if(el('workStartTime')) el('workStartTime').value=template.start;
  if(el('workEndTime')) el('workEndTime').value=template.end;
  if(el('workMealStart')) el('workMealStart').value=template.mealStart;
  if(el('workMealEnd')) el('workMealEnd').value=template.mealEnd;
  if(el('workNightHours') && Object.prototype.hasOwnProperty.call(template,'night')) el('workNightHours').value=template.night || 0;
  if(el('workNote') && template.note && !sval('workNote')) el('workNote').value=template.note;
  renderWorkNetPreview();
}
function workFormPreviewEntry(){
  return normalizeWorkEvent({
    date:sval('workDate'),
    type:sval('workType'),
    startTime:sval('workStartTime'),
    endTime:sval('workEndTime'),
    mealStart:sval('workMealStart'),
    mealEnd:sval('workMealEnd'),
    extraOvertime:nval('workOvertimeHours'),
    extraNight:nval('workNightHours'),
    extraTrack:nval('workTrackHours'),
    extraUbgt:nval('workUbgtHours'),
    extraKm:nval('workKmHours'),
    extraRampa:nval('workRampaSefer'),
    beklemeGun:nval('workBeklemeGun'),
    beklemeAdet:nval('workBeklemeAdet'),
    note:sval('workNote')
  });
}
function syncWorkRangeFromInputs(){
  const range=normalizeRange(sval('workDate'), sval('workEndDate') || sval('workDate'));
  workRangeStart=range.start;
  workRangeEnd=range.end || range.start;
  if(el('workDate') && range.start) el('workDate').value=range.start;
  if(el('workEndDate') && (range.end || range.start)) el('workEndDate').value=range.end || range.start;
  updateWorkRangeHint();
}
function updateWorkRangeHint(){
  const hint=el('workRangeHint');
  if(!hint) return;
  const dates=dateRangeBetween(sval('workDate'), sval('workEndDate') || sval('workDate'));
  const count=dates.length;
  if(!count){
    hint.textContent='Başlangıç ve bitiş tarihi seç.';
    return;
  }
  const first=dates[0];
  const last=dates[dates.length-1];
  hint.textContent=count===1
    ? `${formatLeaveDate(first)} seçili. Kaydettiğinde bu güne işlenir.`
    : `${formatLeaveDate(first)} - ${formatLeaveDate(last)} arası ${count} gün seçili. Kaydettiğinde aynı çalışma kaydı tüm seçili günlere işlenir.`;
}
function selectWorkRangeDate(dateValue){
  if(!workRangeStart || (workRangeEnd && workRangeStart!==workRangeEnd)){
    workRangeStart=dateValue;
    workRangeEnd=dateValue;
  }else{
    const range=normalizeRange(workRangeStart,dateValue);
    workRangeStart=range.start;
    workRangeEnd=range.end || range.start;
  }
  const selectedStart=workRangeStart;
  const selectedEnd=workRangeEnd || workRangeStart;
  if(el('workDate')) el('workDate').value=selectedStart;
  if(el('workEndDate')) el('workEndDate').value=selectedEnd;
  loadWorkEventForDate(selectedStart);
  workRangeStart=selectedStart;
  workRangeEnd=selectedEnd;
  if(el('workDate')) el('workDate').value=selectedStart;
  if(el('workEndDate')) el('workEndDate').value=selectedEnd;
  updateWorkRangeHint();
  renderWorkModule();
}
function renderWorkNetPreview(){
  if(!el('workNetPreview')) return;
  updateWorkRangeHint();
  const preview=workFormPreviewEntry();
  const credited=creditedHoursForEntry(preview);
  el('workNetPreview').textContent=credited!==preview.netHours
    ? `Net çalışma: ${num(preview.netHours)} saat • Ücrete esas: ${num(credited)} saat`
    : `Net çalışma: ${num(preview.netHours)} saat`;
}
function leaveDurationToHours(duration, profile=formProfile()){
  return round2(Number(duration||0) * paidLeaveHoursPerDay(profile));
}
function clearWorkForm(resetDate=false){
  if(!el('workType')) return;
  el('workType').value='normal';
  applyWorkTypeTemplate('normal');
  el('workOvertimeHours').value='0';
  el('workNightHours').value='0';
  el('workTrackHours').value='0';
  if(el('workUbgtHours')) el('workUbgtHours').value='0';
  if(el('workKmHours')) el('workKmHours').value='0';
  if(el('workRampaSefer')) el('workRampaSefer').value='0';
  if(el('workBeklemeGun')) el('workBeklemeGun').value='0';
  if(el('workBeklemeAdet')) el('workBeklemeAdet').value='0';
  el('workNote').value='';
  if(resetDate && el('workDate')) el('workDate').value=`${workSelectedMonth()}-01`;
  if(resetDate && el('workEndDate')) el('workEndDate').value=sval('workDate');
  syncWorkRangeFromInputs();
  renderWorkNetPreview();
}
function workMonthEntries(profileId=currentProfileKey(), month=workSelectedMonth()){
  const monthPrefix=`${month}-`;
  return profileWorkEvents(profileId).filter(event=>String(event.date||'').startsWith(monthPrefix));
}
function workMonthSummary(profileId=currentProfileKey(), month=workSelectedMonth()){
  const entries=workMonthEntries(profileId, month);
  const profile=profiles().find(item=>item.id===profileId || item.sicil===profileId) || formProfile();
  const leaveEvents=profileLeaveEvents(profileId).filter(event=>String(event.date||'').startsWith(`${month}-`));
  const summary={
    profileId,
    month,
    entries,
    normal:0,
    pb:0,
    tatil:0,
    annualLeave:0,
    gmsPaid:0,
    unionLeave:0,
    ucretliIzin:0,
    ucretliRapor:0,
    ubgtFiili:0,
    vardiya:0,
    overtime:0,
    night:0,
    track:0,
    kmSaat:0,
    rampaSefer:0,
    beklemeTotal:0,
    beklemeAdet:0,
    total:0
  };
  entries.forEach(event=>{
    const hours=creditedHoursForEntry(event, profile);
    if(event.type==='normal'){
      summary.normal += hours;
      summary.total += hours;
    }else if(isVardiyaWorkType(event.type)){
      summary.normal += hours;
      summary.vardiya += hours;
      summary.total += hours;
    }else if(event.type==='haftaSonu'){
      summary.pb += hours;
      summary.total += hours;
    }else if(event.type==='tatil' || event.type==='ubgt'){
      summary.tatil += hours;
      summary.total += hours;
    }else if(event.type==='ucretliIzin' || event.type==='yillikIzin'){
      summary.annualLeave += hours;
      summary.ucretliIzin += hours;
    }else if(event.type==='gmsUcretli'){
      summary.gmsPaid += hours;
      summary.ucretliIzin += hours;
    }else if(event.type==='sendikaTisIzin'){
      summary.unionLeave += hours;
      summary.ucretliIzin += hours;
    }else if(event.type==='ucretliRapor'){
      summary.ucretliRapor += hours;
    }
    summary.overtime += round2(Number(event.extraOvertime)||0);
    summary.night += round2(Number(event.extraNight)||0);
    summary.track += round2(Number(event.extraTrack)||0);
    summary.ubgtFiili += round2(Number(event.extraUbgt)||0);
    summary.kmSaat += round2(Number(event.extraKm)||0);
    summary.rampaSefer += round2(Number(event.extraRampa)||0);
    summary.beklemeTotal += round2((Number(event.beklemeGun)||0) * (Number(event.beklemeAdet)||0));
    summary.beklemeAdet += Math.max(0, Math.floor(Number(event.beklemeAdet)||0));
  });
  leaveEvents.forEach(event=>{
    const sameDayEntry=entries.find(entry=>entry.date===event.date);
    if(sameDayEntry) return;
    if(event.type==='annual'){
      const hours=leaveDurationToHours(event.duration, profile);
      summary.annualLeave += hours;
      summary.ucretliIzin += hours;
    }else if(event.type==='tis'){
      const hours=leaveDurationToHours(event.duration, profile);
      summary.unionLeave += hours;
      summary.ucretliIzin += hours;
    }
  });
  Object.keys(summary).forEach(key=>{
    if(typeof summary[key]==='number') summary[key]=round2(summary[key]);
  });
  return summary;
}
function saveWorkEvent(){
  const profileId=currentProfileKey();
  if(!profileId){
    showProfileStatus('Önce personel seç.');
    return;
  }
  syncWorkRangeFromInputs();
  const dateValue=sval('workDate');
  if(!dateValue){
    alert('Çalışma tarihi gerekli.');
    return;
  }
  const dates=dateRangeBetween(dateValue, sval('workEndDate') || dateValue);
  if(!dates.length){
    alert('Çalışma tarihi gerekli.');
    return;
  }
  const events=profileWorkEvents(profileId);
  dates.forEach((itemDate,index)=>{
    const sameDayIndex=events.findIndex(event=>event.date===itemDate);
    const payload=normalizeWorkEvent({
      id:sameDayIndex>-1 ? events[sameDayIndex].id : `work_${Date.now()}_${index}`,
      date:itemDate,
      type:sval('workType'),
      startTime:sval('workStartTime'),
      endTime:sval('workEndTime'),
      mealStart:sval('workMealStart'),
      mealEnd:sval('workMealEnd'),
      extraOvertime:nval('workOvertimeHours'),
      extraNight:nval('workNightHours'),
      extraTrack:nval('workTrackHours'),
      extraUbgt:nval('workUbgtHours'),
      extraKm:nval('workKmHours'),
      extraRampa:nval('workRampaSefer'),
      beklemeGun:nval('workBeklemeGun'),
      beklemeAdet:nval('workBeklemeAdet'),
      note:sval('workNote')
    });
    if(sameDayIndex>-1) events[sameDayIndex]=payload;
    else events.push(payload);
  });
  saveProfileWorkEvents(events, profileId);
  clearWorkForm();
  renderWorkModule();
  renderWorkModels();
  if(workSelectedMonth()===sval('month')){
    fillCalendarInputs();
    updateCalendarCards();
    scheduleSalaryChange();
  }
}
function loadWorkEventForDate(dateValue, profileId=currentProfileKey()){
  if(!dateValue || !profileId) return false;
  const event=profileWorkEvents(profileId).find(item=>item.date===dateValue);
  if(!event){
    if(el('workDate')) el('workDate').value=dateValue;
    if(el('workEndDate')) el('workEndDate').value=dateValue;
    syncWorkRangeFromInputs();
    renderWorkNetPreview();
    return false;
  }
  if(el('workDate')) el('workDate').value=event.date;
  if(el('workEndDate')) el('workEndDate').value=event.date;
  syncWorkRangeFromInputs();
  if(el('workType')) el('workType').value=event.type==='ucretliIzin' ? 'yillikIzin' : (event.type || 'normal');
  if(el('workStartTime')) el('workStartTime').value=event.startTime || '08:00';
  if(el('workEndTime')) el('workEndTime').value=event.endTime || '17:00';
  if(el('workMealStart')) el('workMealStart').value=event.mealStart || '12:00';
  if(el('workMealEnd')) el('workMealEnd').value=event.mealEnd || '12:30';
  if(el('workOvertimeHours')) el('workOvertimeHours').value=event.extraOvertime || 0;
  if(el('workNightHours')) el('workNightHours').value=event.extraNight || 0;
  if(el('workTrackHours')) el('workTrackHours').value=event.extraTrack || 0;
  if(el('workUbgtHours')) el('workUbgtHours').value=event.extraUbgt || 0;
  if(el('workKmHours')) el('workKmHours').value=event.extraKm || 0;
  if(el('workRampaSefer')) el('workRampaSefer').value=event.extraRampa || 0;
  if(el('workBeklemeGun')) el('workBeklemeGun').value=event.beklemeGun || 0;
  if(el('workBeklemeAdet')) el('workBeklemeAdet').value=event.beklemeAdet || 0;
  if(el('workNote')) el('workNote').value=event.note || '';
  renderWorkNetPreview();
  return true;
}
function renderWorkSummaryList(summary){
  const wrap=el('workMonthSummaryList');
  if(!wrap) return;
  wrap.innerHTML=[
    ['Normal Mesai', `${num(summary.normal)} saat`],
    ['Hafta Sonu / P.B.', `${num(summary.pb)} saat`],
    ['Tatil', `${num(summary.tatil)} saat`],
    ['Yıllık İzin', `${num(summary.annualLeave)} saat`],
    ['GMŞ Ücretli', `${num(summary.gmsPaid)} saat`],
    ['Sendika TİS İzni', `${num(summary.unionLeave)} saat`],
    ['Ücretli Rapor', `${num(summary.ucretliRapor)} saat`],
    ['UBGT Fiili', `${num(summary.ubgtFiili)} saat`],
    ['Vardiya Saati', `${num(summary.vardiya)} saat`],
    ['Gece Primi', `${num(summary.night)} saat`],
    ['Hat Bakım', `${num(summary.track)} saat`],
    ['Km Tazminatı', `${num(summary.kmSaat)} saat`],
    ['Rampa Tazminatı', `${num(summary.rampaSefer)} sefer`],
    ['Bono / Bekleme', summary.beklemeTotal ? `${num(summary.beklemeTotal)} bono (${num(summary.beklemeAdet)} adet)` : 'Yok'],
    ['Fazla Mesai', `${num(summary.overtime)} saat`]
  ].map(item=>`<div class="line"><div class="l">${item[0]}</div><div class="r">${item[1]}</div></div>`).join('');
}
function renderWorkEventList(summary){
  const wrap=el('workEventList');
  if(!wrap) return;
  if(!summary.profileId){
    wrap.innerHTML='<div class="leave-empty">Önce personel kartından çalışan seç.</div>';
    return;
  }
  if(!summary.entries.length){
    wrap.innerHTML=summary.ucretliIzin || summary.ucretliRapor
      ? '<div class="leave-empty">Bu ay için çalışma kaydı yok; izin alanındaki yıllık, GMŞ ücretli ve Sendika TİS kayıtları maaş ekranında ayrı saatlere aktarıldı.</div>'
      : '<div class="leave-empty">Seçili ay için çalışma kaydı yok. Bu durumda maaş ekranı varsayılan takvim saatlerini kullanır.</div>';
    return;
  }
  const profile=profiles().find(item=>item.id===summary.profileId || item.sicil===summary.profileId) || formProfile();
  wrap.innerHTML=summary.entries.map(event=>{
    const credited=creditedHoursForEntry(event, profile);
    const extras=[
      event.extraOvertime ? `FM ${num(event.extraOvertime)}s` : '',
      event.extraNight ? `Gece ${num(event.extraNight)}s` : '',
      event.extraTrack ? `Hat ${num(event.extraTrack)}s` : '',
      event.extraUbgt ? `UBGT ${num(event.extraUbgt)}s` : '',
      event.extraKm ? `Km ${num(event.extraKm)}s` : '',
      event.extraRampa ? `Rampa ${num(event.extraRampa)}` : '',
      event.beklemeGun && event.beklemeAdet ? `${num(event.beklemeAdet)} x ${beklemeFractionLabel(event.beklemeGun)} Bono` : ''
    ].filter(Boolean).join(' • ');
    const noteParts=[
      `${event.startTime} - ${event.endTime}`,
      credited!==Number(event.netHours) ? `Net ${num(event.netHours)} saat • Ücrete esas ${num(credited)} saat` : `Net ${num(event.netHours)} saat`,
      extras,
      event.note
    ].filter(Boolean).join(' • ');
    return `<div class="leave-record-item"><div><div class="name">${formatLeaveDate(event.date)} • ${workTypeLabel(event.type)}</div><div class="meta">${noteParts}</div></div><button class="btn small danger" type="button" onclick="deleteWorkEvent('${event.id}')">Sil</button></div>`;
  }).join('');
}
function renderWorkCalendar(summary){
  const wrap=el('workCalendarGrid');
  if(!wrap) return;
  const [yearStr,monthStr]=workSelectedMonth().split('-');
  const year=Number(yearStr), month=Number(monthStr);
  const firstDay=new Date(year, month-1, 1);
  const lastDay=new Date(year, month, 0);
  const leading=(firstDay.getDay()+6)%7;
  const totalCells=42;
  const todayKey=new Date().toISOString().slice(0,10);
  const eventMap=new Map();
  summary.entries.forEach(event=>{
    const key=String(event.date||'');
    if(!eventMap.has(key)) eventMap.set(key, []);
    eventMap.get(key).push(event);
  });
  const leaveMap=new Map();
  profileLeaveEvents(summary.profileId).filter(event=>String(event.date||'').startsWith(`${workSelectedMonth()}-`)).forEach(event=>{
    const key=String(event.date||'');
    if(!leaveMap.has(key)) leaveMap.set(key, []);
    leaveMap.get(key).push(event);
  });
  let html='';
  for(let i=0;i<totalCells;i++){
    const dayNumber=i-leading+1;
    const currentDate=new Date(year, month-1, dayNumber);
    const inMonth=dayNumber>=1 && dayNumber<=lastDay.getDate();
    const dateKey=`${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,'0')}-${String(currentDate.getDate()).padStart(2,'0')}`;
    const items=inMonth ? (eventMap.get(dateKey)||[]) : [];
    const leaveItems=inMonth ? (leaveMap.get(dateKey)||[]) : [];
    const classes=['leave-calendar-cell'];
    const dayIndex=(currentDate.getDay()+6)%7;
    if(!inMonth) classes.push('muted');
    if(dayIndex>=5) classes.push('weekend');
    if(dateKey===todayKey) classes.push('today');
    if(items.length || leaveItems.length) classes.push('has-event');
    if(inMonth && dateInRange(dateKey, sval('workDate'), sval('workEndDate') || sval('workDate'))) classes.push('range-selected');
    const workChips=items.slice(0,2).map(event=>`<span class="leave-event-chip work ${isVardiyaWorkType(event.type)?'vardiya':'annual'}">${workTypeShortLabel(event.type)} • ${num(event.netHours)}s</span>`).join('');
    const leaveChips=leaveItems.slice(0,1).map(event=>`<span class="leave-event-chip ${event.type==='tis'?'tis':'annual'}">${event.type==='tis'?'TİS':'İzin'}</span>`).join('');
    html += `<button type="button" class="${classes.join(' ')}" data-work-date="${dateKey}" ${inMonth?'':'tabindex="-1"'}><div class="leave-day-number">${currentDate.getDate()}</div><div class="leave-day-events">${workChips}${leaveChips}</div></button>`;
  }
  wrap.innerHTML=html;
}
function renderWorkModule(){
  if(!el('workCalendarGrid')) return;
  const title=el('workActiveProfileTitle');
  const meta=el('workActiveProfileMeta');
  if(title) title.textContent=el('activeProfileTitle')?.textContent || 'Henüz personel seçilmedi';
  if(meta) meta.textContent=el('activeProfileMeta')?.textContent || '';
  ['Sicil','Role','Degree','Schedule'].forEach(key=>{
    const source=el(`activeProfile${key}`);
    const target=el(`workActiveProfile${key}`);
    if(source && target) target.textContent=source.textContent || '-';
  });
  const summary=workMonthSummary();
  if(el('workNormalHours')) el('workNormalHours').textContent=`${num(summary.normal)} saat`;
  if(el('workPbHours')) el('workPbHours').textContent=`${num(round2(summary.pb + summary.tatil + summary.ubgtFiili))} saat`;
  if(el('workTotalHours')) el('workTotalHours').textContent=`${num(summary.total)} saat`;
  if(el('workOvertimeTotal')) el('workOvertimeTotal').textContent=`${num(summary.overtime)} saat`;
  if(el('workCalendarHint')) el('workCalendarHint').textContent=summary.entries.length || summary.ucretliIzin ? 'Bu ayın çalışma takviminden fazla mesai, UBGT, bono, km, rampa ve izin kayıtları maaş ekranına otomatik taşınır.' : 'Bu ay için kayıt yoksa fazla mesai ve izin alanları otomatik doldurulmaz.';
  renderWorkSummaryList(summary);
  renderWorkEventList(summary);
  renderWorkCalendar(summary);
  renderWorkNetPreview();
}
window.deleteWorkEvent=function(id){
  const profileId=currentProfileKey();
  if(!profileId) return;
  saveProfileWorkEvents(profileWorkEvents(profileId).filter(event=>event.id!==id), profileId);
  renderWorkModule();
  renderWorkModels();
  if(workSelectedMonth()===sval('month')){
    fillCalendarInputs();
    updateCalendarCards();
    scheduleSalaryChange();
  }
};
function setWorkView(view='calendar'){
  const models=view==='models';
  el('workCalendarPanel')?.classList.toggle('hidden', models);
  el('workModelsPanel')?.classList.toggle('hidden', !models);
  el('workCalendarTabBtn')?.classList.toggle('active', !models);
  el('workModelsTabBtn')?.classList.toggle('active', models);
  if(models) renderWorkModels();
}
function selectedWorkModel(){
  return WORK_CALENDAR_MODELS.find(item=>item.id===selectedWorkModelId) || WORK_CALENDAR_MODELS[0];
}
function workModelEntries(model=selectedWorkModel(), summary=workMonthSummary()){
  const entries=[...summary.entries];
  if(model.id==='puantaj') return entries.filter(item=>item.extraOvertime || item.extraNight || item.extraTrack || item.extraUbgt || isVardiyaWorkType(item.type) || ['haftaSonu','tatil','ubgt'].includes(item.type));
  if(model.id==='kilometre') return entries.filter(item=>item.extraKm || item.extraTrack || item.extraOvertime || item.note || isVardiyaWorkType(item.type));
  if(model.id==='bekleme') return entries.filter(item=>item.beklemeAdet || /bekleme|bono|yatak/i.test(String(item.note||'')) || item.extraTrack || item.extraOvertime);
  if(model.id==='marmaray') return entries.filter(item=>item.type || item.extraOvertime || item.extraNight);
  if(model.id==='fiili') return entries;
  return entries;
}
function workModelKpis(summary=workMonthSummary()){
  return [
    ['Fiili', `${num(summary.total)} saat`],
    ['F. Mesai', `${num(summary.overtime)} saat`],
    ['Gece', `${num(summary.night)} saat`],
    ['Vardiya', `${num(summary.vardiya)} saat`]
  ];
}
function integerToTurkishWords(value){
  const ones=['','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];
  const tens=['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
  let number=Math.max(0, Math.floor(Number(value)||0));
  if(number===0) return 'sıfır';
  const parts=[];
  const scales=[['milyon',1000000],['bin',1000],['',1]];
  scales.forEach(([label,scale])=>{
    const chunk=Math.floor(number/scale);
    if(!chunk) return;
    number -= chunk*scale;
    const hundreds=Math.floor(chunk/100);
    const remainder=chunk%100;
    const words=[];
    if(hundreds) words.push(hundreds===1 ? 'yüz' : `${ones[hundreds]} yüz`);
    if(Math.floor(remainder/10)) words.push(tens[Math.floor(remainder/10)]);
    if(remainder%10) words.push(ones[remainder%10]);
    const text=words.join(' ');
    parts.push(label==='bin' && chunk===1 ? 'bin' : `${text}${label ? ' '+label : ''}`.trim());
  });
  return parts.join(' ');
}
function hoursToTurkishWords(value){
  const safe=round2(Number(value)||0);
  const whole=Math.floor(safe);
  const fraction=Math.round((safe-whole)*100);
  return `${integerToTurkishWords(whole)}${fraction ? ' virgül '+integerToTurkishWords(fraction) : ''} saat`;
}
function workNightExcess(summary=workMonthSummary()){
  return round2(summary.entries.reduce((total,item)=>total+Math.max(0,(Number(item.extraNight)||0)-7.5),0));
}
function workMealDayCount(summary=workMonthSummary()){
  return new Set(summary.entries.filter(item=>creditedHoursForEntry(item)>0).map(item=>item.date)).size;
}
function modelHours(value){
  const safe=round2(Number(value)||0);
  return safe ? num(safe) : '';
}
function modelHoursText(value){
  const safe=round2(Number(value)||0);
  return safe ? hoursToTurkishWords(safe) : '';
}
function modelFieldInput(name,value='',extraClass=''){
  return `<input class="work-doc-input ${extraClass}" data-model-field="${esc(name)}" value="${esc(value || '')}">`;
}
function modelTotalInput(name,value='',extraClass=''){
  return `<input class="work-doc-input ${extraClass}" data-model-total="${esc(name)}" value="${esc(value || '')}">`;
}
function workModelEditedValues(){
  const values={fields:{},totals:{}};
  const root=el('workModelPreview');
  if(!root) return values;
  root.querySelectorAll('[data-model-field]').forEach(input=>{
    values.fields[input.dataset.modelField]=input.value;
  });
  root.querySelectorAll('[data-model-total]').forEach(input=>{
    values.totals[input.dataset.modelTotal]=input.value;
  });
  return values;
}
function workModelBaseData(model=selectedWorkModel(), summary=workMonthSummary(), profile=formProfile()){
  const monthText=MONTH_LABELS[summary.month] || summary.month;
  const name=profile.fullName || sval('fullName') || '';
  const sicil=profile.sicil || sval('sicil') || '';
  const workplace=profile.bolge || sval('bolge') || '';
  const duty=profile.terfiBilgisi || workScheduleLabel(profile);
  const totals={
    overtime:summary.overtime,
    night:summary.night,
    nightExcess:workNightExcess(summary),
    holiday:summary.tatil,
    ubgtFiili:summary.ubgtFiili,
    weekend:summary.pb,
    meal:workMealDayCount(summary),
    shift:summary.vardiya,
    total:summary.total,
    normal:summary.normal,
    track:summary.track,
    km:summary.kmSaat,
    rampa:summary.rampaSefer,
    bekleme:summary.beklemeTotal,
    leave:round2(summary.ucretliIzin + summary.ucretliRapor)
  };
  const entries=workModelEntries(model, summary);
  return {model,summary,profile,entries,monthText,name,sicil,workplace,duty,totals};
}
function workModelEntryRows(data,limit=18){
  return data.entries.slice(0,limit).map(item=>{
    const start=String(item.startTime || '00:00');
    const end=String(item.endTime || '00:00');
    const credited=creditedHoursForEntry(item,data.profile);
    return {
      date:formatLeaveDate(item.date),
      rawDate:item.date,
      type:workTypeLabel(item.type),
      start,
      startHour:start.slice(0,2),
      startMinute:start.slice(3,5),
      end,
      endHour:end.slice(0,2),
      endMinute:end.slice(3,5),
      hours:modelHours(credited),
      night:modelHours(item.extraNight),
      nightExcess:modelHours(Math.max(0,(Number(item.extraNight)||0)-7.5)),
      overtime:modelHours(item.extraOvertime),
      ubgt:modelHours(item.extraUbgt),
      km:modelHours(item.extraKm),
      rampa:item.extraRampa ? num(item.extraRampa) : '',
      bekleme:item.beklemeGun && item.beklemeAdet ? `${num(item.beklemeAdet)} x ${beklemeFractionLabel(item.beklemeGun)}` : '',
      note:item.note || ''
    };
  });
}
function renderPuantajModel(data){
  const rows=[
    ['FAZLA ÇALIŞMA SAATİ','overtime',data.totals.overtime],
    ['GECE ÇALIŞMA SAATİ','night',data.totals.night],
    ['GECE ÇALIŞMA SAATİ AŞAN KISIM','nightExcess',data.totals.nightExcess],
    ['ULUSAL BAYRAM-GENEL TATİL ÇALIŞMA SAATİ','holiday',data.totals.holiday],
    ['UBGT FİİLİ ÇALIŞMA SAATİ','ubgtFiili',data.totals.ubgtFiili],
    ['HAFTA TATİLİ (7 GÜN) ÇALIŞMA SAATİ','weekend',data.totals.weekend],
    ['İAŞE GÜN SAYISI','meal',data.totals.meal],
    ['VARDİYALI ÇALIŞMA','shift',data.totals.shift]
  ];
  return `<div class="work-doc-sheet">
    <div class="work-doc-head"><div class="work-doc-logo">TCDD<small>TAŞIMACILIK</small></div><h3>İşçilerin Fiili Çalışma Saatlerine Ait<br>Aylık Puantaj Defteri</h3><div></div></div>
    <div class="work-doc-fields">
      <div class="work-doc-field"><label>Ay / Yıl</label>${modelFieldInput('monthText',data.monthText)}</div>
      <div class="work-doc-field"><label>Servisi</label>${modelFieldInput('workplace',data.workplace)}</div>
      <div class="work-doc-field"><label>Sicil No / Pers. No</label>${modelFieldInput('sicil',data.sicil)}</div>
      <div class="work-doc-field"><label>Adı Soyadı</label>${modelFieldInput('name',data.name)}</div>
      <div class="work-doc-field"><label>Vazifesi</label>${modelFieldInput('duty',data.duty)}</div>
      <div class="work-doc-field"><label>İşyeri</label>${modelFieldInput('workplace2',data.workplace)}</div>
    </div>
    <table class="work-doc-table"><thead><tr><th class="left">TOPLAM</th><th>Rakamla</th><th>Yazıyla</th></tr></thead><tbody>
      ${rows.map(([label,key,value])=>`<tr><td class="left">${esc(label)}</td><td>${modelTotalInput(key,modelHours(value))}</td><td>${modelTotalInput(`${key}Text`,modelHoursText(value))}</td></tr>`).join('')}
    </tbody></table>
    <div class="work-doc-foot"><div></div><div class="work-doc-sign">Defter Sahibinin İmzası</div></div>
  </div>`;
}
function renderKilometreModel(data){
  const rows=[
    ['Makinist','Görevli','11'],
    ['Makinist','Görevsiz','12'],
    ['Tren Şefi','Görevli','21'],
    ['Tren Şefi','Görevsiz','22'],
    ['TOPLAM','','99']
  ];
  return `<div class="work-doc-sheet">
    <div class="work-doc-head"><div class="work-doc-logo">TCDD<small>TAŞIMACILIK</small></div><h3>Tren Personeline Mahsus<br>Kilometre Tazminat Defteri</h3><div class="work-doc-code">(M.5545)</div></div>
    <div class="work-doc-fields">
      <div class="work-doc-field"><label>Ay / Yıl</label>${modelFieldInput('monthText',data.monthText)}</div>
      <div class="work-doc-field"><label>Sicil No</label>${modelFieldInput('sicil',data.sicil)}</div>
      <div class="work-doc-field"><label>Adı Soyadı</label>${modelFieldInput('name',data.name)}</div>
      <div class="work-doc-field"><label>İş Yeri Kodu</label>${modelFieldInput('workplace',data.workplace)}</div>
    </div>
    <table class="work-doc-table"><thead><tr><th>Ünvanı</th><th>Görev Durumu</th><th>Ünvan Kodu</th><th>Kendi Merkezi Yolcu</th><th>Kendi Merkezi Yük</th><th>Başka Merkez Yolcu</th><th>Başka Merkez Yük</th><th>Toplam</th><th>İş Treni</th><th>Bekleme</th><th>Sefer</th></tr></thead><tbody>
      ${rows.map((row,index)=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}<td>${modelTotalInput(`km${index}`, index===rows.length-1?modelHours(data.totals.km):'')}</td><td>${modelTotalInput(`istreni${index}`, '')}</td><td>${modelTotalInput(`bekleme${index}`, index===rows.length-1?modelHours(data.totals.bekleme):'')}</td><td>${modelTotalInput(`sefer${index}`, index===rows.length-1?num(data.totals.rampa):'')}</td></tr>`).join('')}
    </tbody></table>
    <div class="work-doc-note">Bu model trafik cetveline uygun olarak tarafımdan yazılmıştır.</div>
    <div class="work-doc-foot"><div class="work-doc-sign">Sicil / Personel No: ${modelFieldInput('bottomSicil',data.sicil)}</div><div class="work-doc-sign">İmzası</div></div>
  </div>`;
}
function renderBeklemeModel(data){
  const rows=workModelEntryRows(data,14);
  while(rows.length<14) rows.push({date:'',startHour:'',startMinute:'',endHour:'',endMinute:'',hours:''});
  return `<div class="work-doc-sheet">
    <div class="work-doc-head"><div class="work-doc-logo">TCDD<small>TAŞIMACILIK</small></div><h3>Faal Personel İçin Ödenek Tanzim Bonosu<br>(Bekleme Bonosu)</h3><div class="work-doc-code">(M.5513)</div></div>
    <table class="work-doc-table"><thead><tr><th colspan="4">Görev Tarihleri</th><th colspan="2">Varış</th><th colspan="2">Dönüş</th><th colspan="2">Bekleme Süresi</th><th>Onay</th></tr><tr><th>Gidiş Tarihi</th><th>Tren No</th><th>Dönüş Tarihi</th><th>Tren No</th><th>Sa</th><th>Dk</th><th>Sa</th><th>Dk</th><th>Sa</th><th>Dk</th><th>Kaşe / İmza</th></tr></thead><tbody>
      ${rows.map((row,index)=>`<tr><td>${modelTotalInput(`beklemeDate${index}`,row.date)}</td><td>${modelTotalInput(`beklemeTrainA${index}`,'')}</td><td>${modelTotalInput(`beklemeReturn${index}`,row.date)}</td><td>${modelTotalInput(`beklemeTrainB${index}`,'')}</td><td>${modelTotalInput(`beklemeStartH${index}`,row.startHour)}</td><td>${modelTotalInput(`beklemeStartM${index}`,row.startMinute)}</td><td>${modelTotalInput(`beklemeEndH${index}`,row.endHour)}</td><td>${modelTotalInput(`beklemeEndM${index}`,row.endMinute)}</td><td>${modelTotalInput(`beklemeHour${index}`,row.hours)}</td><td>${modelTotalInput(`beklemeMin${index}`,'')}</td><td>${modelTotalInput(`beklemeOnay${index}`,'')}</td></tr>`).join('')}
    </tbody></table>
    <div class="work-doc-fields">
      <div class="work-doc-field"><label>Adı Soyadı</label>${modelFieldInput('name',data.name)}</div>
      <div class="work-doc-field"><label>Sicil No</label>${modelFieldInput('sicil',data.sicil)}</div>
      <div class="work-doc-field"><label>İşyeri</label>${modelFieldInput('workplace',data.workplace)}</div>
      <div class="work-doc-field"><label>Ünvanı</label>${modelFieldInput('duty',data.duty)}</div>
    </div>
  </div>`;
}
function renderMarmarayModel(data){
  const rows=workModelEntryRows(data,22);
  while(rows.length<22) rows.push({date:'',startHour:'',startMinute:'',endHour:'',endMinute:'',hours:''});
  return `<div class="work-doc-sheet">
    <div class="work-doc-head"><div class="work-doc-logo">TCDD<small>TAŞIMACILIK</small></div><h3>Marmaray Tüp Tüneli Çalışma Çizelgesi</h3><div></div></div>
    <div class="work-doc-fields">
      <div class="work-doc-field"><label>Adı Soyadı</label>${modelFieldInput('name',data.name)}</div>
      <div class="work-doc-field"><label>İş yeri</label>${modelFieldInput('workplace',data.workplace)}</div>
      <div class="work-doc-field"><label>Ünvanı</label>${modelFieldInput('duty',data.duty)}</div>
      <div class="work-doc-field"><label>Sicil No</label>${modelFieldInput('sicil',data.sicil)}</div>
      <div class="work-doc-field"><label>Ait Olduğu Ay</label>${modelFieldInput('monthText',data.monthText)}</div>
    </div>
    <table class="work-doc-table"><thead><tr><th rowspan="2">Tarih</th><th colspan="2">Görev Başladığı</th><th colspan="2">Sonlandığı</th><th rowspan="2">Tutar</th><th rowspan="2">İşyeri Amirinin İmzası</th></tr><tr><th>Saat</th><th>Dakika</th><th>Saat</th><th>Dakika</th></tr></thead><tbody>
      ${rows.map((row,index)=>`<tr><td>${modelTotalInput(`marmarayDate${index}`,row.date)}</td><td>${modelTotalInput(`marmarayStartH${index}`,row.startHour)}</td><td>${modelTotalInput(`marmarayStartM${index}`,row.startMinute)}</td><td>${modelTotalInput(`marmarayEndH${index}`,row.endHour)}</td><td>${modelTotalInput(`marmarayEndM${index}`,row.endMinute)}</td><td>${modelTotalInput(`marmarayAmount${index}`,'')}</td><td>${modelTotalInput(`marmaraySign${index}`,'')}</td></tr>`).join('')}
    </tbody></table>
    <div class="work-doc-foot"><div>Fiili çalışma gün toplamı: ${modelTotalInput('marmarayTotal',modelHours(data.totals.total))}<br>Ödenecek ilave ödeme tutarı: ${modelTotalInput('marmarayPay','')}</div><div class="work-doc-sign">Tasdik olunur / İş yeri amiri</div></div>
  </div>`;
}
function renderFiiliModel(data){
  const rows=workModelEntryRows(data,22);
  while(rows.length<22) rows.push({date:'',type:'',startHour:'',startMinute:'',endHour:'',endMinute:'',hours:'',night:'',nightExcess:''});
  return `<div class="work-doc-sheet landscape">
    <div class="work-doc-head"><div class="work-doc-logo">TCDD<small>TAŞIMACILIK</small></div><h3>Fiili Çalışma Çizelgesi</h3><div></div></div>
    <div class="work-doc-fields">
      <div class="work-doc-field"><label>Adı Soyadı</label>${modelFieldInput('name',data.name)}</div>
      <div class="work-doc-field"><label>İşyeri</label>${modelFieldInput('workplace',data.workplace)}</div>
      <div class="work-doc-field"><label>Sicil No / Pers. No</label>${modelFieldInput('sicil',data.sicil)}</div>
      <div class="work-doc-field"><label>Ay / Yıl</label>${modelFieldInput('monthText',data.monthText)}</div>
    </div>
    <table class="work-doc-table"><thead><tr><th rowspan="2">Tarih</th><th rowspan="2">Yapılan Görevin Türü</th><th colspan="2">Görevin Başladığı</th><th colspan="2">Görevin Bittiği</th><th>Fiili Çalışma</th><th>Gece Çalışması</th><th>7,5 Saati Aşan Kısım</th></tr><tr><th>Saat</th><th>Dk.</th><th>Saat</th><th>Dk.</th><th>Saat</th><th>Saat</th><th>Saat</th></tr></thead><tbody>
      ${rows.map((row,index)=>`<tr><td>${modelTotalInput(`fiiliDate${index}`,row.date)}</td><td>${modelTotalInput(`fiiliType${index}`,row.type)}</td><td>${modelTotalInput(`fiiliStartH${index}`,row.startHour)}</td><td>${modelTotalInput(`fiiliStartM${index}`,row.startMinute)}</td><td>${modelTotalInput(`fiiliEndH${index}`,row.endHour)}</td><td>${modelTotalInput(`fiiliEndM${index}`,row.endMinute)}</td><td>${modelTotalInput(`fiiliHours${index}`,row.hours)}</td><td>${modelTotalInput(`fiiliNight${index}`,row.night)}</td><td>${modelTotalInput(`fiiliNightExcess${index}`,row.nightExcess)}</td></tr>`).join('')}
      <tr><td><strong>TOPLAM</strong></td><td colspan="5"></td><td>${modelTotalInput('fiiliTotal',modelHours(data.totals.total))}</td><td>${modelTotalInput('fiiliNightTotal',modelHours(data.totals.night))}</td><td>${modelTotalInput('fiiliNightExcessTotal',modelHours(data.totals.nightExcess))}</td></tr>
    </tbody></table>
  </div>`;
}
function renderWorkModels(){
  const cards=el('workModelCards');
  if(cards){
    cards.innerHTML=WORK_CALENDAR_MODELS.map(model=>`<button class="work-model-card ${model.id===selectedWorkModelId?'active':''}" type="button" data-work-model="${model.id}">
      <span>${esc(model.tag)}</span>
      <strong>${esc(model.title)}</strong>
    </button>`).join('');
  }
  renderWorkModelPreview();
}
function renderWorkModelPreview(){
  const node=el('workModelPreview');
  const model=selectedWorkModel();
  const summary=workMonthSummary();
  if(el('workModelPreviewTitle')) el('workModelPreviewTitle').textContent=model.title;
  if(el('workModelPreviewBadge')) el('workModelPreviewBadge').textContent=MONTH_LABELS[summary.month] || summary.month;
  if(node) node.innerHTML='';
  if(el('workModelStatus')) el('workModelStatus').textContent='Seçili model takvim kayıtlarından hazırlanır; PDF veya PNG olarak indirebilirsin.';
}
function drawWorkModelCanvasTable(ctx,rows,x,y,w,rowH,headers=['Tarih','Tip','Saat','Ekler','Not'],cols=null){
  const columnRatios=cols || headers.map(()=>1/headers.length);
  ctx.fillStyle='#0f3761';
  canvasRoundRect(ctx,x,y,w,rowH,14);
  ctx.fill();
  ctx.fillStyle='#fff';
  ctx.font='800 18px Arial';
  let cx=x;
  headers.forEach((header,index)=>{
    const colW=w*columnRatios[index];
    ctx.fillText(header,cx+12,y+28);
    cx += colW;
  });
  y += rowH;
  rows.forEach((row,index)=>{
    ctx.fillStyle=index%2?'#eef6ff':'#ffffff';
    ctx.fillRect(x,y,w,rowH);
    ctx.strokeStyle='#c9d7e5';
    ctx.strokeRect(x,y,w,rowH);
    const values=Array.isArray(row) ? row : [row.date,row.type,row.hours,row.extras,row.note];
    ctx.fillStyle='#1f2937';
    ctx.font='600 15px Arial';
    cx=x;
    values.forEach((value,colIndex)=>{
      const colW=w*columnRatios[colIndex];
      drawWrappedCanvasText(ctx,String(value || ''),cx+10,y+24,colW-18,17);
      cx += colW;
    });
    y += rowH;
  });
  return y;
}
function workModelExportTable(data,edits={fields:{},totals:{}}){
  const totalValue=(key,fallback)=>Object.prototype.hasOwnProperty.call(edits.totals || {},key) ? edits.totals[key] : fallback;
  if(data.model.id==='puantaj'){
    return {
      headers:['Toplam','Rakamla','Yazıyla'],
      cols:[.48,.18,.34],
      rows:[
        ['Fazla Çalışma Saati',totalValue('overtime',modelHours(data.totals.overtime)),totalValue('overtimeText',modelHoursText(data.totals.overtime))],
        ['Gece Çalışma Saati',totalValue('night',modelHours(data.totals.night)),totalValue('nightText',modelHoursText(data.totals.night))],
        ['Gece Çalışması Aşan Kısım',totalValue('nightExcess',modelHours(data.totals.nightExcess)),totalValue('nightExcessText',modelHoursText(data.totals.nightExcess))],
        ['Ulusal Bayram Genel Tatil',totalValue('holiday',modelHours(data.totals.holiday)),totalValue('holidayText',modelHoursText(data.totals.holiday))],
        ['UBGT Fiili Çalışma',totalValue('ubgtFiili',modelHours(data.totals.ubgtFiili)),totalValue('ubgtFiiliText',modelHoursText(data.totals.ubgtFiili))],
        ['Hafta Tatili Çalışma Saati',totalValue('weekend',modelHours(data.totals.weekend)),totalValue('weekendText',modelHoursText(data.totals.weekend))],
        ['İaşe Gün Sayısı',totalValue('meal',String(data.totals.meal || '')),totalValue('mealText',data.totals.meal ? integerToTurkishWords(data.totals.meal) : '')],
        ['Vardiyalı Çalışma',totalValue('shift',modelHours(data.totals.shift)),totalValue('shiftText',modelHoursText(data.totals.shift))]
      ]
    };
  }
  const rows=workModelEntryRows(data,31).map(item=>[item.date,item.type,item.start,item.end,item.hours,item.night || item.overtime || item.note || '']);
  return {headers:['Tarih','Tip','Başlangıç','Bitiş','Fiili','Ek'],cols:[.16,.24,.14,.14,.14,.18],rows:rows.length?rows:[['Kayıt yok','','','','','']]};
}
function buildWorkModelCanvas(modelId=selectedWorkModelId){
  const previous=selectedWorkModelId;
  selectedWorkModelId=modelId || selectedWorkModelId;
  const model=selectedWorkModel();
  const summary=workMonthSummary();
  const profile=profiles().find(item=>item.id===summary.profileId || item.sicil===summary.profileId) || formProfile();
  const data=workModelBaseData(model, summary, profile);
  const edits=workModelEditedValues();
  data.name=edits.fields.name || data.name;
  data.sicil=edits.fields.sicil || data.sicil;
  data.workplace=edits.fields.workplace || data.workplace;
  data.duty=edits.fields.duty || data.duty;
  data.monthText=edits.fields.monthText || data.monthText;
  selectedWorkModelId=previous;
  const canvas=document.createElement('canvas');
  canvas.width=1240;
  canvas.height=1754;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#f8fbff';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#0b1f33';
  ctx.font='900 38px Arial';
  ctx.fillText('TCDD İŞÇİ PLATFORMU',64,74);
  ctx.font='900 30px Arial';
  ctx.fillStyle='#1d4ed8';
  ctx.fillText(model.title,64,122);
  ctx.fillStyle='#475569';
  ctx.font='700 18px Arial';
  ctx.fillText(`${data.monthText} • ${data.sicil || '-'} • ${data.name || 'Personel'}`,64,156);
  canvasRoundRect(ctx,64,184,1112,120,22);
  ctx.fillStyle='#ffffff';
  ctx.fill();
  ctx.strokeStyle='#bfdbfe';
  ctx.stroke();
  const kpis=workModelKpis(summary);
  kpis.forEach((item,index)=>{
    const x=92 + index*270;
    ctx.fillStyle='#64748b';
    ctx.font='800 15px Arial';
    ctx.fillText(item[0].toUpperCase(),x,226);
    ctx.fillStyle='#0f172a';
    ctx.font='900 26px Arial';
    ctx.fillText(item[1],x,266);
  });
  const table=workModelExportTable(data,edits);
  drawWorkModelCanvasTable(ctx,table.rows,64,340,1112,40,table.headers,table.cols);
  ctx.fillStyle='#9a3412';
  ctx.font='800 18px Arial';
  ctx.fillText('Bu çıktı bilgilendirme amaçlıdır; resmi puantaj veya kurum evrakı yerine geçmez.',64,1696);
  return canvas;
}
function downloadPdfBinary(fileName,binary){
  const base64=btoa(binary);
  if(window.AndroidBridge && typeof window.AndroidBridge.savePdfBase64==='function'){
    try{
      window.AndroidBridge.savePdfBase64(fileName, base64);
      return;
    }catch(error){
      console.warn('Android PDF kaydi baslatilamadi.', error);
    }
  }
  const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  const blob=new Blob([bytes],{type:'application/pdf'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1200);
}
function canvasToPdfBinary(canvas){
  const jpeg=atob(canvas.toDataURL('image/jpeg',0.9).split(',')[1] || '');
  const pageW=595.28;
  const pageH=841.89;
  const content=`q ${pageW.toFixed(2)} 0 0 ${pageH.toFixed(2)} 0 0 cm /Im0 Do Q`;
  const objects=[
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(2)} ${pageH.toFixed(2)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj`,
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n${jpeg}\nendstream\nendobj`,
    `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj`
  ];
  let pdf='%PDF-1.3\n';
  const offsets=[0];
  objects.forEach(object=>{
    offsets.push(pdf.length);
    pdf += object + '\n';
  });
  const xrefOffset=pdf.length;
  pdf += `xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;
  for(let i=1;i<offsets.length;i++) pdf += `${String(offsets[i]).padStart(10,'0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}
function exportWorkModelPdf(){
  const canvas=buildWorkModelCanvas(selectedWorkModelId);
  const fileName=`TCDD_Calisma_Takvimi_${excelFilePart(selectedWorkModelId)}_${excelFilePart(workSelectedMonth(),'donem')}.pdf`;
  downloadPdfBinary(fileName, canvasToPdfBinary(canvas));
  if(el('workModelStatus')) el('workModelStatus').textContent='Model PDF çıktısı hazırlandı.';
}
function exportWorkModelPng(){
  const canvas=buildWorkModelCanvas(selectedWorkModelId);
  const fileName=`TCDD_Calisma_Takvimi_${excelFilePart(selectedWorkModelId)}_${excelFilePart(workSelectedMonth(),'donem')}.png`;
  downloadCanvasPng(canvas,fileName);
  if(el('workModelStatus')) el('workModelStatus').textContent='Model PNG çıktısı hazırlandı.';
}
function syncLeaveDurationOptions(){
  if(!el('leaveType') || !el('leaveDuration')) return;
  const annual=sval('leaveType')==='annual';
  const halfOption=el('leaveDuration').querySelector('option[value="0.5"]');
  if(halfOption) halfOption.disabled=annual;
  if(annual && el('leaveDuration').value==='0.5') el('leaveDuration').value='1';
}
function syncLeaveRangeFromInputs(){
  const range=normalizeRange(sval('leaveDate'), sval('leaveEndDate') || sval('leaveDate'));
  leaveRangeStart=range.start;
  leaveRangeEnd=range.end || range.start;
  if(el('leaveDate') && range.start) el('leaveDate').value=range.start;
  if(el('leaveEndDate') && (range.end || range.start)) el('leaveEndDate').value=range.end || range.start;
}
function selectLeaveRangeDate(dateValue){
  if(!leaveRangeStart || (leaveRangeEnd && leaveRangeStart!==leaveRangeEnd)){
    leaveRangeStart=dateValue;
    leaveRangeEnd=dateValue;
  }else{
    const range=normalizeRange(leaveRangeStart,dateValue);
    leaveRangeStart=range.start;
    leaveRangeEnd=range.end || range.start;
  }
  if(el('leaveDate')) el('leaveDate').value=leaveRangeStart;
  if(el('leaveEndDate')) el('leaveEndDate').value=leaveRangeEnd;
  renderLeaveModule();
}
function clearLeaveForm(resetDate=false){
  if(!el('leaveType')) return;
  el('leaveType').value='annual';
  el('leaveDuration').value='1';
  el('leaveNote').value='';
  if(resetDate) el('leaveDate').value=`${leaveSelectedMonth()}-01`;
  if(resetDate && el('leaveEndDate')) el('leaveEndDate').value=sval('leaveDate');
  syncLeaveRangeFromInputs();
  syncLeaveDurationOptions();
}
function leaveStats(){
  const profileId=currentProfileKey();
  const year=leaveSelectedYear();
  const month=leaveSelectedMonth();
  const carryOver=Math.max(0, Number(sval('carryAnnualLeave')||0));
  const serviceYearsValue=serviceYearsForMonth(month);
  const annualEntitlement=annualLeaveEntitlementForPeriod(month);
  const tisEntitlement=6;
  const allEvents=profileLeaveEvents(profileId);
  const yearPrefix=`${year}-`;
  const monthPrefix=`${month}-`;
  const yearEvents=allEvents.filter(event=>String(event.date||'').startsWith(yearPrefix));
  const monthEvents=allEvents.filter(event=>String(event.date||'').startsWith(monthPrefix));
  const annualUsed=round2(sum(yearEvents.filter(event=>event.type==='annual').map(event=>Number(event.duration)||0)));
  const tisUsed=round2(sum(yearEvents.filter(event=>event.type==='tis').map(event=>Number(event.duration)||0)));
  return {
    profileId,
    year,
    month,
    carryOver,
    serviceYears:serviceYearsValue,
    annualEntitlement,
    tisEntitlement,
    annualUsed,
    tisUsed,
    annualRemaining:round2(Math.max(0, annualEntitlement + carryOver - annualUsed)),
    tisRemaining:round2(Math.max(0, tisEntitlement - tisUsed)),
    monthEvents,
    yearEvents
  };
}
function renderLeaveSpentList(stats){
  if(!el('leaveSpentList')) return;
  el('leaveSpentList').innerHTML=[
    ['Yıllık İzin Harcanan', `${num(stats.annualUsed)} gün`],
    ['Sendika TİS Harcanan', `${num(stats.tisUsed)} gün`],
    ['Toplam Harcanan', `${num(round2(stats.annualUsed + stats.tisUsed))} gün`]
  ].map((item,index)=>`<div class="line"><div class="l">${item[0]}</div><div class="r">${item[1]}</div></div>`).join('');
}
function renderLeaveEventList(stats){
  const wrap=el('leaveEventList');
  if(!wrap) return;
  if(el('leaveRecordsTitle')) el('leaveRecordsTitle').textContent=`${stats.year} yılı kullanılan izinler`;
  if(!stats.profileId){
    wrap.innerHTML='<div class="leave-empty">Önce personel kartından çalışan seç.</div>';
    return;
  }
  const events=[...stats.yearEvents].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  if(!events.length){
    wrap.innerHTML='<div class="leave-empty">Seçili yıl için kayıt yok. Takvimden gün seçip izin ekleyebilirsin.</div>';
    return;
  }
  wrap.innerHTML=events.map(event=>`<div class="leave-record-item"><div><div class="name">${formatLeaveDate(event.date)}</div><div class="meta">${leaveTypeLabel(event.type)} • ${leaveDurationLabel(event.duration)}${event.note ? ' • '+event.note : ''}</div></div><button class="btn small" type="button" onclick="deleteLeaveEvent('${event.id}')">Sil</button></div>`).join('');
}
function renderLeaveCalendar(stats){
  const wrap=el('leaveCalendarGrid');
  if(!wrap) return;
  const [yearStr,monthStr]=leaveSelectedMonth().split('-');
  const year=Number(yearStr), month=Number(monthStr);
  const firstDay=new Date(year, month-1, 1);
  const lastDay=new Date(year, month, 0);
  const leading=(firstDay.getDay()+6)%7;
  const totalCells=42;
  const todayKey=new Date().toISOString().slice(0,10);
  const eventMap=new Map();
  stats.monthEvents.forEach(event=>{
    const key=String(event.date||'');
    if(!eventMap.has(key)) eventMap.set(key, []);
    eventMap.get(key).push(event);
  });
  let html='';
  for(let i=0;i<totalCells;i++){
    const dayNumber=i-leading+1;
    const currentDate=new Date(year, month-1, dayNumber);
    const inMonth=dayNumber>=1 && dayNumber<=lastDay.getDate();
    const dateKey=`${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,'0')}-${String(currentDate.getDate()).padStart(2,'0')}`;
    const items=inMonth ? (eventMap.get(dateKey)||[]) : [];
    const classes=['leave-calendar-cell'];
    const dayIndex=(currentDate.getDay()+6)%7;
    if(!inMonth) classes.push('muted');
    if(dayIndex>=5) classes.push('weekend');
    if(dateKey===todayKey) classes.push('today');
    if(items.length) classes.push('has-event');
    if(inMonth && dateInRange(dateKey, sval('leaveDate'), sval('leaveEndDate') || sval('leaveDate'))) classes.push('range-selected');
    const chips=items.slice(0,2).map(event=>`<span class="leave-event-chip ${event.type==='tis'?'tis':'annual'}">${event.type==='tis'?'TİS':'Yıllık'} • ${num(event.duration)}g</span>`).join('') + (items.length>2?`<span class="leave-event-chip annual">+${items.length-2}</span>`:'');
    html += `<button type="button" class="${classes.join(' ')}" data-leave-date="${dateKey}" ${inMonth?'':'tabindex="-1"'}><div class="leave-day-number">${currentDate.getDate()}</div><div class="leave-day-events">${chips}</div></button>`;
  }
  wrap.innerHTML=html;
}
function renderLeaveModule(){
  if(!el('leaveCalendarGrid')) return;
  const stats=leaveStats();
  el('leaveServiceYears').textContent=`${stats.serviceYears} yıl`;
  el('leaveAnnualEntitlement').textContent=`${num(stats.annualEntitlement)} gün`;
  el('leaveCarryLabel').textContent=`${stats.year-1}'ten Devir`;
  el('leaveCarryOver').textContent=`${num(stats.carryOver)} gün`;
  el('leaveAnnualUsed').textContent=`${num(stats.annualUsed)} gün`;
  el('leaveAnnualRemaining').textContent=`${num(stats.annualRemaining)} gün`;
  el('leaveTisRemaining').textContent=`${num(stats.tisRemaining)} gün`;
  renderLeaveSpentList(stats);
  renderLeaveEventList(stats);
  renderLeaveCalendar(stats);
}
window.deleteLeaveEvent=function(id){
  const profileId=currentProfileKey();
  if(!profileId) return;
  saveProfileLeaveEvents(profileLeaveEvents(profileId).filter(event=>event.id!==id), profileId);
  renderLeaveModule();
  renderWorkModule();
  if(leaveSelectedMonth()===sval('month')){
    fillCalendarInputs();
    updateCalendarCards();
    scheduleSalaryChange();
  }
};
function saveLeaveEvent(){
  const profileId=currentProfileKey();
  if(!profileId){
    alert('Önce personel kartından çalışan seç.');
    return;
  }
  syncLeaveRangeFromInputs();
  const dateValue=sval('leaveDate');
  if(!dateValue){
    alert('İzin tarihi seç.');
    return;
  }
  const dates=dateRangeBetween(dateValue, sval('leaveEndDate') || dateValue);
  if(!dates.length){
    alert('İzin tarihi seç.');
    return;
  }
  const type=sval('leaveType');
  const duration=normalizeLeaveDuration(type, nval('leaveDuration'));
  const events=profileLeaveEvents(profileId);
  dates.forEach((itemDate,index)=>{
    const sameDayIndex=events.findIndex(event=>event.date===itemDate && event.type===type);
    const payload={
      id:sameDayIndex>-1 ? events[sameDayIndex].id : `leave_${Date.now()}_${index}`,
      date:itemDate,
      type,
      duration,
      note:String(el('leaveNote')?.value || '').trim()
    };
    if(sameDayIndex>-1) events[sameDayIndex]=payload;
    else events.push(payload);
  });
  saveProfileLeaveEvents(events, profileId);
  clearLeaveForm();
  renderLeaveModule();
  renderWorkModule();
  if(leaveSelectedMonth()===sval('month')){
    fillCalendarInputs();
    updateCalendarCards();
    scheduleSalaryChange();
  }
}
function populateMonths(){
  el('month').innerHTML=Object.entries(MONTH_LABELS).map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
  el('month').value='2026-05';
  if(el('izinMonth')) el('izinMonth').value='2026-05';
  if(el('workMonth')) el('workMonth').value='2026-05';
}
function populateDegrees(){
  const wt=sval('workerType'), sk=sval('skala'), degreeEl=el('degree');
  const table=(window.SCALE_TABLE||SCALE_TABLE)[wt][sk];
  const order=(DEGREE_ORDER[wt] && DEGREE_ORDER[wt][sk]) ? DEGREE_ORDER[wt][sk] : Object.keys(table);
  const opts=order.filter(key=>Object.prototype.hasOwnProperty.call(table,key));
  const cur=opts.includes(degreeEl.value)?degreeEl.value:opts[0];
  degreeEl.innerHTML=opts.map(v=>`<option value="${v}" ${v===cur?'selected':''}>${v}</option>`).join('');
}
function getBaseRate(){
  return Number(resolveProfileStep().rate||0);
}
function serviceYears(){
  return serviceYearsForMonth(sval('month'));
}
function serviceYearsForYear(year){
  return serviceYearsForMonth(`${Number(year)||new Date().getFullYear()}-12`);
}
function hizmetUnit(){ return HIZMET_ZAMMI_RATE; }
function hatBakimRate(month=sval('month')){
  if(!month) return 5.53;
  return month >= '2025-09' ? 5.53 : 4.98;
}
function companyLabel(v=sval('company')){
  return v==='TCDD'?'TCDD':v==='TCDD_TASIMACILIK'?'TCDD Taşımacılık':'TÜRASAŞ';
}
function workScheduleModel(profile=formProfile()){
  const key=profile?.calismaModeli || sval('calismaModeli') || 'NORMAL_9';
  return WORK_SCHEDULE_MODELS[key] || WORK_SCHEDULE_MODELS.NORMAL_9;
}
function workScheduleLabel(profile=formProfile()){
  return workScheduleModel(profile).label;
}
function creditedHoursForEntry(entry, profile=formProfile()){
  const schedule=workScheduleModel(profile);
  return round2((Number(entry?.netHours)||0) * Number(schedule.creditedMultiplier||1));
}
function paidLeaveHoursPerDay(profile=formProfile()){
  const schedule=workScheduleModel(profile);
  const sample=computeNetWorkHours({
    startTime:schedule.start,
    endTime:schedule.end,
    mealStart:schedule.mealStart,
    mealEnd:schedule.mealEnd
  });
  return round2(sample * Number(schedule.creditedMultiplier||1));
}
function syncProfileWorkMode(profile=formProfile()){
  if(!el('workMode')) return;
  const target=workScheduleModel(profile).mode;
  if(target) el('workMode').value=target;
}
function workModeLabel(v=sval('workMode')){
  return v==='NORMAL'?'Normal':v==='VARDIYALI'?'Vardiya':'TTİ & Makinist';
}
function isWorkModeAllowed(id, mode=sval('workMode')){
  const vardiyaOnly=['vardiyaSaat','vardiyaRate'];
  const shiftRelated=['geceSaat','geceRate','hatBakimSaat'];
  const ttiOnly=['kmSaat','rampaSefer','manevraSaat','beklemeGun','beklemeAdet'];
  if(vardiyaOnly.includes(id)) return mode==='VARDIYALI';
  if(shiftRelated.includes(id)) return mode==='VARDIYALI' || mode==='TTI_MAKINIST';
  if(ttiOnly.includes(id)) return mode==='TTI_MAKINIST';
  return true;
}
function syncWorkModeFields(){
  ['vardiyaSaat','vardiyaRate','geceSaat','geceRate','hatBakimSaat','kmSaat','rampaSefer','manevraSaat','beklemeGun','beklemeAdet'].forEach(id=>{
    const field=el(id)?.closest('.field');
    if(field) field.classList.toggle('work-mode-hidden', !isWorkModeAllowed(id));
  });
}
function facilityCategoryLabel(category){
  return {
    egitim_ve_dinlenme_tesisi:'Eğitim ve Dinlenme Tesisi',
    misafirhane_egitim_dinlenme:'Eğitim / Dinlenme / Misafirhane',
    misafirhane:'Misafirhane',
    sosyal_tesis:'Sosyal Tesis',
    kamp_tatil:'Kamp / Tatil Köyü',
    konukevi:'Konukevi'
  }[category] || 'Tesis';
}
function facilityStatusLabel(status){
  return {
    active:'Aktif',
    active_listed_in_2026_tariff:'Ücret duyurusunda aktif',
    listed_on_official_site:'Resmi sitede listeleniyor',
    public_directory:'Rehber kaydı',
    temporarily_closed:'Geçici kapalı',
    closed_rebuild_pending:'Yeniden yapım bekleniyor',
    closed_after_2023_earthquake:'Deprem sonrası kapalı'
  }[status] || 'Durum bilgisi yok';
}
function facilityTone(status){
  if(['temporarily_closed','closed_rebuild_pending','closed_after_2023_earthquake'].includes(status)) return 'closed';
  if(['active_listed_in_2026_tariff','listed_on_official_site'].includes(status)) return 'restricted';
  return 'active';
}
function facilityPhoneHref(phone){
  const cleaned=String(phone||'').replace(/[^\d+]/g,'');
  return cleaned ? `tel:${cleaned}` : '#';
}
function facilityLocationLabel(facility){
  return [facility.city, facility.district].filter(Boolean).join(' • ') || 'Şehir bilgisi paylaşılmadı';
}
function renderFacilityCard(facility){
  const tone=facilityTone(facility.status);
  const contact=(window.fallbackContacts||{})[facility.fallbackContactId] || null;
  const note=facility.note ? `<div class="facility-note">${facility.note}</div>` : '';
  const contactLines=[];
  if(facility.phone) contactLines.push(`<div class="facility-contact-line"><strong>Telefon:</strong> ${facility.phone}</div>`);
  if(facility.address) contactLines.push(`<div class="facility-contact-line"><strong>Adres:</strong> ${facility.address}</div>`);
  if(!facility.phone && !facility.address && contact){
    contactLines.push(`<div class="facility-contact-line"><strong>Destek:</strong> ${contact.name}</div>`);
  }
  const sourceLine=facility.sourceLabel ? `<div class="facility-source-line">${esc(facility.sourceLabel)}</div>` : '';
  const actions=[];
  if(facility.phone) actions.push(`<a class="pdf-link" href="${facilityPhoneHref(facility.phone)}">Ara</a>`);
  if(facility.navigationUrl) actions.push(`<a class="pdf-link" href="${facility.navigationUrl}" rel="noopener noreferrer">Harita</a>`);
  if(facility.sourceUrl) actions.push(`<a class="pdf-link" href="${esc(facility.sourceUrl)}" target="_blank" rel="noopener noreferrer">Kaynak</a>`);
  if(contact?.phone1) actions.push(`<a class="pdf-link" href="${facilityPhoneHref(contact.phone1)}">Destek Ara</a>`);
  if(!facility.navigationUrl && contact?.navigationUrl) actions.push(`<a class="pdf-link" href="${contact.navigationUrl}" rel="noopener noreferrer">Destek Konumu</a>`);
  return `<article class="facility-card ${tone}"><div class="facility-card-header"><div><h4>${esc(facility.name)}</h4>${sourceLine}</div><span class="facility-pill ${facility.operator==='TCDD'?'tcdd':'demiryolis'}">${esc(facility.operator)}</span></div><div class="facility-meta"><span>${facilityCategoryLabel(facility.category)}</span><span>${facilityLocationLabel(facility)}</span></div><div class="facility-status-line">${facilityStatusLabel(facility.status)}</div>${note}<div class="facility-contact">${contactLines.join('')}</div><div class="facility-actions">${actions.join('')}</div></article>`;
}
function renderSupportCard(contact){
  const lines=[contact.phone1,contact.phone2].filter(Boolean).map(phone=>`<div class="facility-contact-line"><strong>Telefon:</strong> ${phone}</div>`).join('');
  const actions=[
    contact.phone1 ? `<a class="pdf-link" href="${facilityPhoneHref(contact.phone1)}">Ara</a>` : '',
    contact.navigationUrl ? `<a class="pdf-link" href="${contact.navigationUrl}" rel="noopener noreferrer">Harita</a>` : ''
  ].join('');
  return `<div class="simple-card facility-support-card"><h4>${contact.name}</h4><div class="support-lines">${lines}${contact.address?`<div class="facility-contact-line"><strong>Adres:</strong> ${contact.address}</div>`:''}</div><div class="facility-actions">${actions}</div></div>`;
}
function renderFacilities(){
  const facilities=Array.isArray(window.railwayFacilities)?window.railwayFacilities:[];
  const contacts=window.fallbackContacts||{};
  if(!facilities.length) return;
  const activeFacilities=facilities.filter(item=>facilityTone(item.status)!=='closed');
  const closedFacilities=facilities.filter(item=>facilityTone(item.status)==='closed');
  const cityCount=new Set(facilities.map(item=>item.city).filter(Boolean)).size;
  if(el('homeFacilityCount')) el('homeFacilityCount').textContent=`${facilities.length} tesis`;
  if(el('homeFacilityActive')) el('homeFacilityActive').textContent=`${activeFacilities.length} aktif`;
  if(el('facilityTotalCount')) el('facilityTotalCount').textContent=String(facilities.length);
  if(el('facilityActiveCount')) el('facilityActiveCount').textContent=String(activeFacilities.length);
  if(el('facilityClosedCount')) el('facilityClosedCount').textContent=String(closedFacilities.length);
  if(el('facilityCityCount')) el('facilityCityCount').textContent=String(cityCount);
  if(el('facilityActiveList')) el('facilityActiveList').innerHTML=activeFacilities.map(renderFacilityCard).join('') || '<div class="facility-empty">Aktif kayıt bulunamadı.</div>';
  if(el('facilityClosedList')) el('facilityClosedList').innerHTML=closedFacilities.map(renderFacilityCard).join('') || '<div class="facility-empty">Kapalı veya kısıtlı kayıt bulunmuyor.</div>';
  if(el('facilitySupportList')) el('facilitySupportList').innerHTML=Object.values(contacts).map(renderSupportCard).join('');
}
function updateCalendarCards(){
  const paidLeaveTotal=syncPaidLeaveTotal();
  el('miniNormal').textContent = num(nval('normalMesai'))+' saat';
  el('miniPB').textContent = num(round2(nval('haftaSonu') + nval('tatil') + nval('ubgtFiiliSaat')))+' saat';
  el('miniToplam').textContent = num(round2(nval('normalMesai') + nval('haftaSonu') + nval('tatil') + nval('ubgtFiiliSaat') + paidLeaveTotal + nval('ucretliRapor'))) + ' saat';
}
function fillCalendarInputs(resetBase=false){
  const workSummary=workMonthSummary(currentProfileKey(), sval('month'));
  const hasSummary=!!(workSummary.entries.length || workSummary.overtime);
  el('fazlaMesai').value = hasSummary ? workSummary.overtime : 0;
  if(el('vardiyaSaat')) el('vardiyaSaat').value=workSummary.vardiya || 0;
  if(el('geceSaat')) el('geceSaat').value=workSummary.night || 0;
  if(el('hatBakimSaat')) el('hatBakimSaat').value=workSummary.track || 0;
  if(el('tatil')) el('tatil').value=workSummary.tatil || 0;
  if(el('ubgtFiiliSaat')) el('ubgtFiiliSaat').value=workSummary.ubgtFiili || 0;
  if(el('kmSaat')) el('kmSaat').value=workSummary.kmSaat || 0;
  if(el('rampaSefer')) el('rampaSefer').value=workSummary.rampaSefer || 0;
  applyBeklemeSummaryToSalary(workSummary.beklemeTotal);
  if(el('yillikIzin')) el('yillikIzin').value=workSummary.annualLeave || 0;
  if(el('gmsUcretli')) el('gmsUcretli').value=workSummary.gmsPaid || 0;
  if(el('sendikaTisIzin')) el('sendikaTisIzin').value=workSummary.unionLeave || 0;
  if(el('ucretliRapor')) el('ucretliRapor').value=workSummary.ucretliRapor || 0;
  syncPaidLeaveTotal();
  if(!resetBase) return;
  const modeCalendar=WORK_CALENDARS[sval('workMode')] || WORK_CALENDARS.NORMAL;
  const ref=modeCalendar[sval('month')] || WORK_CALENDARS.NORMAL[sval('month')] || Object.values(WORK_CALENDARS.NORMAL)[0];
  if(!ref) return;
  el('normalMesai').value = ref.normal;
  el('haftaSonu').value = ref.pb;
  ['yillikIzin','gmsUcretli','sendikaTisIzin','ucretliIzin','ucretliRapor','tatil','ubgtFiiliSaat','hatBakimSaat','vardiyaSaat','geceSaat','kmSaat','rampaSefer','manevraSaat','beklemeGun','beklemeAdet'].forEach(id=>{ if(el(id)) el(id).value=0; });
  if(el('vardiyaSaat')) el('vardiyaSaat').value=workSummary.vardiya || 0;
  if(el('geceSaat')) el('geceSaat').value=workSummary.night || 0;
  if(el('hatBakimSaat')) el('hatBakimSaat').value=workSummary.track || 0;
  if(el('tatil')) el('tatil').value=workSummary.tatil || 0;
  if(el('ubgtFiiliSaat')) el('ubgtFiiliSaat').value=workSummary.ubgtFiili || 0;
  if(el('kmSaat')) el('kmSaat').value=workSummary.kmSaat || 0;
  if(el('rampaSefer')) el('rampaSefer').value=workSummary.rampaSefer || 0;
  applyBeklemeSummaryToSalary(workSummary.beklemeTotal);
  if(el('yillikIzin')) el('yillikIzin').value=workSummary.annualLeave || 0;
  if(el('gmsUcretli')) el('gmsUcretli').value=workSummary.gmsPaid || 0;
  if(el('sendikaTisIzin')) el('sendikaTisIzin').value=workSummary.unionLeave || 0;
  if(el('ucretliRapor')) el('ucretliRapor').value=workSummary.ucretliRapor || 0;
  syncPaidLeaveTotal();
  if(el('postabasi')) el('postabasi').value=el('profilePostabasi')?.checked ? '1' : '0';
  syncDengeTazminati();
}
function applyBeklemeSummaryToSalary(total){
  if(!el('beklemeGun') || !el('beklemeAdet')) return;
  const safe=round2(Number(total)||0);
  if(!safe){
    el('beklemeGun').value=0;
    el('beklemeAdet').value=0;
    return;
  }
  const quarterCount=Math.max(1, Math.round(safe / 0.25));
  el('beklemeGun').value=0.25;
  el('beklemeAdet').value=quarterCount;
}
function roundManevraHours(hours){
  const safe=Math.max(0, Number(hours)||0);
  const whole=Math.floor(safe);
  return (safe - whole) > 0.5 ? whole + 1 : whole;
}
function beklemeFractionLabel(value){
  const safe=round2(Math.max(0, Number(value)||0));
  if(safe===1) return 'Tam';
  if(safe===0.75) return '3/4';
  if(safe===0.5) return '1/2';
  if(safe===0.25) return '1/4';
  return num(safe);
}
function beklemeSelection(){
  const fraction=Math.max(0, nval('beklemeGun'));
  const adet=Math.max(0, Math.floor(nval('beklemeAdet')));
  const total=round2(fraction * adet);
  const label=fraction>0 && adet>0 ? `${adet} x ${beklemeFractionLabel(fraction)} Bono` : 'Yok';
  const amount=round2(total * BEKLEME_TAZMINATI_RATE_2026);
  return {fraction,adet,total,label,amount};
}
function salaryManualGvRate(){
  const rate=Number(el('manualGvRate')?.value || 20);
  return [15,20,27,35].includes(rate) ? rate : 20;
}
function hizmetYearsFromServiceYears(years){
  return Math.max(0, Math.floor(Number(years)||0) - 1);
}
function salarySpecialDeduction(){
  const manual=round2(Math.max(0,nval('odylHizmeti')));
  if(manual>0){
    return {amount:manual,label:"KDV'li Hizmet / ODYL / Diger Ozel Kesinti",automatic:false};
  }
  const referenceApplies=sval('company')==='TCDD_TASIMACILIK' && sval('month')==='2026-05';
  if(referenceApplies){
    return {amount:TASIMACILIK_MAY_2026_ODYL_DEDUCTION,label:"KDV'li Hizmet / ODYL (05/2026 referans)",automatic:true};
  }
  return {amount:0,label:"KDV'li Hizmet / ODYL / Diger Ozel Kesinti",automatic:false};
}
function progressiveTax(base, prev){
  const taxable=Math.max(0, base);
  if(sval('taxMethod')==='manuel') return round2(taxable * (salaryManualGvRate()/100));
  const brackets=[
    {upTo:190000, rate:0.15},
    {upTo:400000, rate:0.20},
    {upTo:1500000, rate:0.27},
    {upTo:5300000, rate:0.35},
    {upTo:Infinity, rate:0.40}
  ];
  let remaining=taxable, current=Math.max(0, prev), tax=0;
  while(remaining>0){
    let previousLimit=0;
    for(const br of brackets){
      const segmentStart=Math.max(current, previousLimit);
      const segmentEnd=br.upTo;
      const room=segmentEnd===Infinity?remaining:Math.max(0, segmentEnd - segmentStart);
      if(room>0){
        const portion=Math.min(remaining, room);
        tax += portion * br.rate;
        remaining -= portion;
        current += portion;
        break;
      }
      previousLimit=br.upTo;
    }
    if(remaining>0 && current>1e12) break;
  }
  return round2(tax);
}
function gatherResult(){
  syncPaidLeaveTotal();
  const yrs=serviceYears();
  const resolvedStep=resolveProfileStep();
  const base=Number(resolvedStep.rate||0);
  const emekGross=round2(EMEK_ZAMMI_RATE*yrs);
  const hourlyTotal=round2(base + emekGross);
  const prevBonus=syncPreviousBonusControls(hourlyTotal);
  const hzUnit=hizmetUnit();
  const hizmetYears=hizmetYearsFromServiceYears(yrs);
  const hizmetGross=round2(hzUnit * hizmetYears);
  const gmsRate=nval('tayitPercent')/100;
  const sendika=round2(5 * (hourlyTotal + (hourlyTotal * gmsRate)));
  const annualLeaveHours=salaryAnnualLeaveHours();
  const gmsPaidHours=salaryGmsPaidHours();
  const unionLeaveHours=salaryUnionLeaveHours();
  const paidLeaveTotal=round2(annualLeaveHours + gmsPaidHours + unionLeaveHours);
  // TIS Madde 51 / Ek Madde 2 ve 05/2026 bordro referansi:
  // yillik izin ve GMS ucretli TAYIT alir; Sendika TIS izni, rapor ve UBGT fiili calisma almaz.
  const tayitHours=round2(nval('normalMesai') + annualLeaveHours + gmsPaidHours + nval('haftaSonu') + nval('tatil'));
  const mode=sval('workMode');
  const vardiyaSaat=isWorkModeAllowed('vardiyaSaat', mode) ? nval('vardiyaSaat') : 0;
  const geceSaat=isWorkModeAllowed('geceSaat', mode) ? nval('geceSaat') : 0;
  const hatBakimSaat=isWorkModeAllowed('hatBakimSaat', mode) ? nval('hatBakimSaat') : 0;
  const kmSaat=isWorkModeAllowed('kmSaat', mode) ? nval('kmSaat') : 0;
  const rampaSefer=isWorkModeAllowed('rampaSefer', mode) ? nval('rampaSefer') : 0;
  const manevraSaat=isWorkModeAllowed('manevraSaat', mode) ? nval('manevraSaat') : 0;
  const manevraPayableHours=roundManevraHours(manevraSaat);
  const bekleme=isWorkModeAllowed('beklemeGun', mode) ? beklemeSelection() : {fraction:0,adet:0,total:0,label:'Yok',amount:0};
  const beklemeGun=bekleme.total;
  const beklemeTutar=bekleme.amount;
  const kmGross=round2(kmSaat * KM_TAZMINATI_RATE_2026);
  const rampaTutar=round2(rampaSefer * RAMPA_TAZMINATI_RATE_2026);
  const kmTaxExempt=round2(kmSaat * KM_TAZMINATI_TAX_EXEMPT_2026);
  const postabasiActive=sval('postabasi')==='1' || !!el('profilePostabasi')?.checked;
  const postabasiTutar=postabasiActive ? round2(nval('normalMesai') * POSTABASI_RATE_2026) : 0;
  el('tayitHours').value = tayitHours;

  const gelirler=[];
  const push=(label,val)=>{ val=round2(val); if(val>0) gelirler.push([label,val]); };
  push('Normal Mesai', nval('normalMesai')*hourlyTotal);
  push('Yıllık İzin', annualLeaveHours*hourlyTotal);
  push('GMŞ Ücretli', gmsPaidHours*hourlyTotal);
  push('Sendika TİS İzni', unionLeaveHours*hourlyTotal);
  push('Ücretli Rapor', nval('ucretliRapor')*hourlyTotal);
  push('Hafta Sonu', nval('haftaSonu')*hourlyTotal);
  push('Ulusal Bayram Genel Tatil', nval('tatil')*hourlyTotal);
  push('UBGT Fiili Çalışma', nval('ubgtFiiliSaat')*hourlyTotal);
  push(`Hat Bakım Onarım Tazminatı (${num(hatBakimRate())} TL)`, hatBakimSaat*hatBakimRate());
  push('Fazla Mesai', nval('fazlaMesai')*hourlyTotal*(nval('fmRate')/100));
  push('Vardiya Primi', vardiyaSaat*hourlyTotal*(nval('vardiyaRate')/100));
  push('Gece Primi', geceSaat*hourlyTotal*(nval('geceRate')/100));
  push(`Km Tazminatı (${num(KM_TAZMINATI_RATE_2026)} TL/saat)`, kmGross);
  push(`Rampa Tazminatı (${num(RAMPA_TAZMINATI_RATE_2026)} TL/sefer)`, rampaTutar);
  push(`Manevra Tazminatı (${num(MANEVRA_TAZMINATI_RATE_2026)} TL/saat)`, manevraPayableHours*MANEVRA_TAZMINATI_RATE_2026);
  push(`Bekleme Tazminatı (${bekleme.label})`, beklemeTutar);
  push(`Postabaşı Ek Ödemesi (${num(POSTABASI_RATE_2026)} TL/saat)`, postabasiTutar);
  push('Birleştirilmiş Sosyal Yardım', nval('bsyGross'));
  push('Denge Tazminatı', nval('dengeTazminati'));
  push('Hizmet Zammı', hizmetGross);
  push(`Yemek Bedeli (${nval('yemekGun')})`, nval('yemekGun')*nval('iaseBrut'));
  push(`GMŞ / Tayit %${num(nval('tayitPercent'))}`, hourlyTotal*tayitHours*(nval('tayitPercent')/100));
  push('Yurtiçi Seyahat / GV-SGK Dışı', nval('yurticiSefer'));
  push('Diğer SGK-GV-DV Dışı', nval('digerSgkDisi'));

  const gross = sum(gelirler.map(x=>x[1]));
  const sgkBase = round2(Math.max(0, gross - (nval('yemekGun')*nval('yemekSgkIst')) - nval('yurticiSefer') - nval('digerSgkDisi')));
  const manualSgkCarryBase=round2(Math.max(0,nval('prevSgkMatrah')));
  const prevBonusCarryBase=prevBonus.gross;
  const sgkCarryBase=round2(manualSgkCarryBase + prevBonusCarryBase);
  const sgkContributionBase=round2(sgkBase + sgkCarryBase);
  const sgk=round2(sgkContributionBase*0.14);
  const issizlik=round2(sgkContributionBase*0.01);
  const disabledTaxExemption=round2(nval('disabledTaxExemption'));
  const gvBase = round2(Math.max(0, gross - sgk - issizlik - sendika - disabledTaxExemption - (nval('yemekGun')*nval('yemekGvIst')) - kmTaxExempt - nval('yurticiSefer') - nval('digerSgkDisi')));
  const gvBrut = progressiveTax(gvBase, nval('prevGvMatrah'));
  const gvNet = round2(Math.max(0, gvBrut - nval('gvIstisna')));
  const dvBase = round2(Math.max(0, gross - (nval('yemekGun')*nval('yemekGvIst')) - kmTaxExempt - nval('yurticiSefer') - nval('digerSgkDisi')));
  const dvGross = round2(dvBase*DEFAULT_DAMGA_RATE);
  const dvNet = round2(Math.max(0, dvGross - nval('dvIstisna')));
  const specialDeduction=salarySpecialDeduction();
  const kesintiler=[
    ['SGK İşçi Payı', sgk],
    ['İşsizlik Primi', issizlik],
    [sval('taxMethod')==='manuel'?'Gelir Vergisi (Manuel)':'Gelir Vergisi (Kümülatif 2026)', gvNet],
    ['Damga Vergisi', dvNet],
    ['Sendika Kesintisi', sendika],
  ];
  if(nval('sporAidati')>0) kesintiler.push(['Spor Aidatı', round2(nval('sporAidati'))]);
  if(nval('lojman')>0) kesintiler.push(['Lojman', round2(nval('lojman'))]);
  if(specialDeduction.amount>0) kesintiler.push([specialDeduction.label, specialDeduction.amount]);
  const totalDeductions = sum(kesintiler.map(x=>x[1]));
  const net = round2(gross - totalDeductions);

  return {yrs,hizmetYears,base,emekGross,hzUnit,hizmetGross,hourlyTotal,sendika,tayitHours,annualLeaveHours,gmsPaidHours,unionLeaveHours,paidLeaveTotal,prevBonus,prevBonusCarryBase,manualSgkCarryBase,specialDeduction,gelirler,kesintiler,gross,sgkBase,sgkCarryBase,sgkContributionBase,gvBase,dvBase,sgk,issizlik,gvBrut,gvNet,dvGross,dvNet,totalDeductions,net,kmTaxExempt,rampaSefer,rampaTutar,bekleme,postabasiTutar,disabledTaxExemption,resolvedStep};
}
function tedbProgressiveTax(base, prev, method, manualRate){
  const taxable=Math.max(0, base);
  if(method==='manuel') return round2(taxable * ((Number(manualRate)||0)/100));
  const brackets=[
    {upTo:190000, rate:0.15},
    {upTo:400000, rate:0.20},
    {upTo:1500000, rate:0.27},
    {upTo:5300000, rate:0.35},
    {upTo:Infinity, rate:0.40}
  ];
  let remaining=taxable, current=Math.max(0, Number(prev)||0), tax=0;
  while(remaining>0){
    let previousLimit=0;
    for(const br of brackets){
      const segmentStart=Math.max(current, previousLimit);
      const segmentEnd=br.upTo;
      const room=segmentEnd===Infinity?remaining:Math.max(0, segmentEnd - segmentStart);
      if(room>0){
        const portion=Math.min(remaining, room);
        tax += portion * br.rate;
        remaining -= portion;
        current += portion;
        break;
      }
      previousLimit=br.upTo;
    }
    if(remaining>0 && current>1e12) break;
  }
  return round2(tax);
}
function tedbLineMarkup(items, totalLabel, totalValue, negative=false){
  const tone=negative?' neg':'';
  return items.map(([label, value])=>`<div class="line"><div class="l">${label}</div><div class="r${tone}">${money(value)}</div></div>`).join('') + `<div class="line"><div class="l"><strong>${totalLabel}</strong></div><div class="r${tone}"><strong>${money(totalValue)}</strong></div></div>`;
}
function tedbTableMarkup(rows){
  return `<thead><tr><th>Kalem</th><th>Tutar</th></tr></thead><tbody>${rows.map(row=>{
    if(row.kind==='section') return `<tr class="section"><td>${row.label}</td><td></td></tr>`;
    return `<tr><td>${row.label}</td><td>${row.value}</td></tr>`;
  }).join('')}</tbody>`;
}
function syncTedbTaxMethod(){
  const method = (el('tedbTaxMethod')?.value || 'kumulatif');
  const manualField = el('tedbManualRateField');
  if(manualField) manualField.style.display = method === 'manuel' ? '' : 'none';
  return method;
}
function computeTedb(r){
  const options={
    tisHalf:{label:'TİS İkramiyesi · Yarım', gross:round2(r.hourlyTotal * BONUS_HOURS.tisHalf), hours:BONUS_HOURS.tisHalf},
    tisFull:{label:'TİS İkramiyesi · Tam', gross:round2(r.hourlyTotal * BONUS_HOURS.tisFull), hours:BONUS_HOURS.tisFull}
  };
  const type = (el('tedbType')?.value || 'tisHalf');
  const selected = options[type] || options.tisHalf;
  const gross = selected.gross;
  const salaryPaid = (el('tedbSalaryPaid')?.value || 'evet') === 'evet';
  const prev = Math.max(0, Number(el('tedbPrevGvMatrah')?.value || 0));
  const method = syncTedbTaxMethod();
  const manualRate = Math.max(0, Number(el('tedbManualGvRate')?.value || 0));
  const damgaRate = DEFAULT_DAMGA_RATE;
  const sgk = salaryPaid ? 0 : round2(gross * 0.14);
  const issizlik = salaryPaid ? 0 : round2(gross * 0.01);
  const sgkCarryForward = salaryPaid ? gross : 0;
  const gvBase = round2(Math.max(0, gross - sgk - issizlik));
  const gvBrut = tedbProgressiveTax(gvBase, prev, method, manualRate);
  const gvNet = gvBrut;
  const dvGross = round2(gross * damgaRate);
  const dvNet = dvGross;
  const totalDeductions = round2(sgk + issizlik + gvNet + dvNet);
  const net = round2(gross - totalDeductions);
  const gvLabel = method === 'manuel' ? 'Gelir Vergisi (Manuel)' : 'Gelir Vergisi (Kümülatif 2026)';
  const deductions = [
    ['SGK İşçi Payı', sgk],
    ['İşsizlik Primi', issizlik],
    [gvLabel, gvNet],
    ['Damga Vergisi', dvNet]
  ];
  const tableRows = [
    {kind:'section', label:'Gelirler'},
    {label:selected.label, value:money(gross)},
    {kind:'section', label:'Kesintiler'},
    {label:'SGK İşçi Payı', value:money(sgk ? -sgk : 0)},
    {label:'İşsizlik Primi', value:money(issizlik ? -issizlik : 0)},
    {label:gvLabel, value:money(gvNet ? -gvNet : 0)},
    {label:'Damga Vergisi', value:money(dvNet ? -dvNet : 0)},
    {label:'Sonraki Aya SGK Matrah Devri', value:money(sgkCarryForward)},
    {label:'Net Ödenen', value:money(net)}
  ];
  const tableMarkup = tedbTableMarkup(tableRows);

  el('tedbCompany').textContent = companyLabel();
  el('tedbPerson').textContent = `${sval('sicil') || '-'} ${sval('fullName') || ''}`.trim();
  el('tedbHourly').textContent = money(r.hourlyTotal);
  el('tisHalf').textContent = money(options.tisHalf.gross);
  el('tisFull').textContent = money(options.tisFull.gross);
  el('tedbSelectedTitle').textContent = 'İkramiye / TEDİYE';
  el('tedbSelectedGross').textContent = money(net);
  el('tedbSelectedSub').textContent = 'Net Ödenen';
  el('tedbGvBase').textContent = money(gvBase);
  el('tedbTotalDeduction').textContent = money(totalDeductions);
  el('tedbNet').textContent = money(net);

  el('tedbGelirler').innerHTML = tedbLineMarkup([[selected.label, gross]], 'Toplam Brüt', gross);
  el('tedbKesintiler').innerHTML = tedbLineMarkup(deductions, 'Toplam Kesinti', totalDeductions, true);
  el('tedbSimpleTable').innerHTML = tableMarkup;
  el('tedbNote').textContent = salaryPaid
    ? `${selected.label} için bu ödeme döneminde SGK ve işsizlik kesilmez; ${money(sgkCarryForward)} sonraki maaş ayına SGK matrah devri olarak aktarılır.`
    : 'Maaş aynı ayda alınmadığı için ikramiye üzerinde SGK ve işsizlik kesintisi bu hesapta uygulanır.';
  const companyLogo = COMPANY_LOGOS[sval('company')] || 'images/summary_logo_default.png';
  el('tedbPrintLogo').src = companyLogo;
  el('tedbPrintLogo').alt = `${companyLabel()} logosu`;
  el('tedbPrintCompany').textContent = companyLabel();
  el('tedbPrintMeta').textContent = `${MONTH_LABELS[sval('month')]} • ${selected.label} • ${sval('sicil') || '-'} • ${sval('fullName') || '-'}`;
  el('tedbPrintNet').textContent = money(net);
  el('tedbPrintTable').innerHTML = tableMarkup;
  el('tedbPrintNote').textContent = el('tedbNote').textContent;
  return {type, selectedLabel:selected.label, gross, hours:selected.hours, salaryPaid, sgkCarryForward, prev, method, manualRate, sgk, issizlik, gvBase, gvBrut, gvNet, dvGross, dvNet, totalDeductions, net, deductions, tableRows};
}
function esc(value){
  return String(value ?? '').replace(/[&<>"']/g, char=>({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
}
function payrollHoursRow(label, gun, saat, tutar){
  return `<tr><td>${esc(label)}</td><td class="num">${gun ? num(gun) : ''}</td><td class="num">${saat ? num(saat) : ''}</td><td class="num">${tutar ? plainMoney(tutar) : ''}</td></tr>`;
}
function payrollAmountRow(label, net, brut){
  return `<tr><td>${esc(label)}</td><td class="num">${net ? plainMoney(net) : ''}</td><td class="num">${brut ? plainMoney(brut) : ''}</td></tr>`;
}
function payrollDeductionRow(label, amount){
  return `<tr><td>${esc(label)}</td><td class="num">${amount ? plainMoney(amount) : ''}</td></tr>`;
}
function padPayrollRows(rows, target, cells){
  const blank=`<tr>${Array.from({length:cells}).map(()=>'<td>&nbsp;</td>').join('')}</tr>`;
  while(rows.length<target) rows.push(blank);
  return rows;
}
function payrollTaxBreakdown(r){
  const method=sval('taxMethod');
  if(method==='manuel'){
    return [{label:'Manuel GV', rate:salaryManualGvRate(), base:r.gvBase, tax:r.gvBrut}];
  }
  const brackets=[
    {label:'1. Dilim', upTo:190000, rate:15},
    {label:'2. Dilim', upTo:400000, rate:20},
    {label:'3. Dilim', upTo:1500000, rate:27},
    {label:'4. Dilim', upTo:5300000, rate:35},
    {label:'5. Dilim', upTo:Infinity, rate:40}
  ];
  let remaining=Math.max(0, r.gvBase);
  let current=Math.max(0, nval('prevGvMatrah'));
  let previousLimit=0;
  return brackets.map(br=>{
    const segmentStart=Math.max(current, previousLimit);
    const room=br.upTo===Infinity ? remaining : Math.max(0, br.upTo-segmentStart);
    const base=round2(Math.min(remaining, room));
    const tax=round2(base*(br.rate/100));
    remaining=round2(Math.max(0, remaining-base));
    current=round2(current+base);
    previousLimit=br.upTo;
    return {label:br.label, rate:br.rate, base, tax};
  });
}
function renderOfficialPayroll(r){
  const wrap=el('officialPayrollContent');
  if(!wrap) return;
  const infoNotice='Bu bordro değildir; sadece bilgilendirme ve öğrenme amaçlıdır. Kurum bordrosu yerine geçmez.';
  const resolvedStep=r.resolvedStep || resolveProfileStep();
  const startPeriod=startProfilePeriod();
  const hoursToDays=hours=>round2((Number(hours)||0)/7.5);
  const normalAmount=nval('normalMesai')*r.hourlyTotal;
  const annualLeaveHours=r.annualLeaveHours ?? salaryAnnualLeaveHours();
  const gmsPaidHours=r.gmsPaidHours ?? salaryGmsPaidHours();
  const unionLeaveHours=r.unionLeaveHours ?? salaryUnionLeaveHours();
  const paidLeaveTotal=round2(annualLeaveHours + gmsPaidHours + unionLeaveHours);
  const annualLeaveAmount=annualLeaveHours*r.hourlyTotal;
  const gmsPaidAmount=gmsPaidHours*r.hourlyTotal;
  const unionLeaveAmount=unionLeaveHours*r.hourlyTotal;
  const raporAmount=nval('ucretliRapor')*r.hourlyTotal;
  const haftaSonuAmount=nval('haftaSonu')*r.hourlyTotal;
  const tatilAmount=nval('tatil')*r.hourlyTotal;
  const ubgtFiiliAmount=nval('ubgtFiiliSaat')*r.hourlyTotal;
  const normalTotal=round2(normalAmount+annualLeaveAmount+gmsPaidAmount+unionLeaveAmount+raporAmount+haftaSonuAmount+tatilAmount+ubgtFiiliAmount);
  const mode=sval('workMode');
  const vardiyaSaat=isWorkModeAllowed('vardiyaSaat', mode) ? nval('vardiyaSaat') : 0;
  const geceSaat=isWorkModeAllowed('geceSaat', mode) ? nval('geceSaat') : 0;
  const hatBakimSaat=isWorkModeAllowed('hatBakimSaat', mode) ? nval('hatBakimSaat') : 0;
  const kmSaat=isWorkModeAllowed('kmSaat', mode) ? nval('kmSaat') : 0;
  const rampaSefer=isWorkModeAllowed('rampaSefer', mode) ? nval('rampaSefer') : 0;
  const manevraSaat=isWorkModeAllowed('manevraSaat', mode) ? nval('manevraSaat') : 0;
  const manevraPayableHours=roundManevraHours(manevraSaat);
  const bekleme=isWorkModeAllowed('beklemeGun', mode) ? beklemeSelection() : {fraction:0,adet:0,total:0,label:'Yok',amount:0};
  const beklemeGun=bekleme.total;
  const beklemeTutar=bekleme.amount;
  const rampaTutar=round2(rampaSefer*RAMPA_TAZMINATI_RATE_2026);
  const fazlaRows=[
    payrollHoursRow('Fazla Mesai', '', nval('fazlaMesai'), nval('fazlaMesai')*r.hourlyTotal*(nval('fmRate')/100)),
    payrollHoursRow('Vardiya Primi', '', vardiyaSaat, vardiyaSaat*r.hourlyTotal*(nval('vardiyaRate')/100)),
    payrollHoursRow('Gece Primi', '', geceSaat, geceSaat*r.hourlyTotal*(nval('geceRate')/100)),
    payrollHoursRow('Hat Bakım Onarım', '', hatBakimSaat, hatBakimSaat*hatBakimRate()),
    payrollHoursRow('Km Tazminatı', '', kmSaat, kmSaat*KM_TAZMINATI_RATE_2026),
    rampaSefer>0 ? `<tr><td>Rampa Tazminatı</td><td class="num">${num(rampaSefer)} sefer</td><td class="num">${plainMoney(RAMPA_TAZMINATI_RATE_2026)}</td><td class="num">${plainMoney(rampaTutar)}</td></tr>` : '',
    payrollHoursRow('Manevra Tazminatı', '', manevraPayableHours, manevraPayableHours*MANEVRA_TAZMINATI_RATE_2026),
    beklemeGun>0 ? `<tr><td>Bekleme Tazminatı (${bekleme.label})</td><td class="num">${esc(bekleme.label)}</td><td class="num">${plainMoney(BEKLEME_TAZMINATI_RATE_2026)}</td><td class="num">${plainMoney(beklemeTutar)}</td></tr>` : ''
  ].filter(row=>!/>\s*<\/td><td class="num"><\/td><td class="num"><\/td><td class="num"><\/td>/.test(row));
  const fazlaTotal=sum([
    nval('fazlaMesai')*r.hourlyTotal*(nval('fmRate')/100),
    vardiyaSaat*r.hourlyTotal*(nval('vardiyaRate')/100),
    geceSaat*r.hourlyTotal*(nval('geceRate')/100),
    hatBakimSaat*hatBakimRate(),
    kmSaat*KM_TAZMINATI_RATE_2026,
    rampaTutar,
    manevraPayableHours*MANEVRA_TAZMINATI_RATE_2026,
    beklemeTutar
  ]);
  const tayitAmount=round2(r.hourlyTotal*r.tayitHours*(nval('tayitPercent')/100));
  const yemekAmount=round2(nval('yemekGun')*nval('iaseBrut'));
  const grossToNet=brut=>r.gross>0 ? round2((Number(brut)||0) * (Math.max(0,r.net)/r.gross)) : 0;
  const extraRows=[
    payrollAmountRow('Birleştirilmiş Sosyal Yardım',grossToNet(nval('bsyGross')),nval('bsyGross')),
    payrollAmountRow('Denge Tazminatı',grossToNet(nval('dengeTazminati')),nval('dengeTazminati')),
    payrollAmountRow('Hizmet Zammı',grossToNet(r.hizmetGross),r.hizmetGross),
    payrollAmountRow(`Yemek Bedeli (${nval('yemekGun')})`,grossToNet(yemekAmount),yemekAmount),
    payrollAmountRow(`GMŞ / Tayit %${num(nval('tayitPercent'))} (${num(r.tayitHours)})`,grossToNet(tayitAmount),tayitAmount),
    payrollAmountRow('Postabaşı Ek Ödemesi',grossToNet(r.postabasiTutar),r.postabasiTutar),
    payrollAmountRow('Yurtiçi Seyahat / GV-SGK Dışı',nval('yurticiSefer'),nval('yurticiSefer')),
    payrollAmountRow('Diğer SGK-GV-DV Dışı',nval('digerSgkDisi'),nval('digerSgkDisi'))
  ];
  const extraTotal=round2(r.gross-normalTotal-fazlaTotal);
  const employerSgk=round2(r.sgkContributionBase*0.2175);
  const employerIssizlik=round2(r.sgkContributionBase*0.02);
  const taxRows=payrollTaxBreakdown(r).map(item=>`<tr><td>${esc(item.label)}</td><td class="num">%${num(item.rate)}</td><td class="num">${item.base ? plainMoney(item.base) : ''}</td><td class="num">${item.tax ? plainMoney(item.tax) : ''}</td></tr>`).join('');
  const sgkCarryDetailRows=[
    r.prevBonusCarryBase>0 ? `<tr><td>Önceki Ay İkramiye Matrahı</td><td></td><td class="num">${plainMoney(r.prevBonusCarryBase)}</td></tr>` : '',
    r.manualSgkCarryBase>0 ? `<tr><td>Diğer SGK Matrah Devri</td><td></td><td class="num">${plainMoney(r.manualSgkCarryBase)}</td></tr>` : ''
  ].join('');
  const personMeta=[
    ['Adı Soyadı', `${sval('sicil') || '-'}-${sval('fullName') || '-'}`],
    ['SSK/TC Kimlik No', ''],
    ['Giriş/Kıdem Tarihi', sval('girisYili') ? `01.${sval('girisAy') || '01'}.${sval('girisYili')} • Terfi Esası ${formatPeriodLabel(startPeriod)}` : ''],
    ['Bölümü', sval('bolge') || '-'],
    ['Ünvanı', `Derece: ${resolvedStep.degree || '-'}   Kademe: ${resolvedStep.kademe || '-'}`],
    ['Ücreti', `${plainMoney(r.base)} TL   S.Ü: ${plainMoney(r.base)}   E.Ü: ${plainMoney(r.emekGross)}`],
    ['Bordro', `${workModeLabel()} - ${MONTH_LABELS[sval('month')] || sval('month')}`]
  ].map(([k,v])=>`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const companyMeta=[
    ['Firma', companyLabel()],
    ['Tesis', sval('bolge') || '-'],
    ['Adres', 'TCDD İşçi Platformu bilgilendirme bordrosu'],
    ['Ticari Sicil No', ''],
    ['Mersis No', ''],
    ['İşyeri SGK No', '']
  ].map(([k,v])=>`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const normalRows=[
    payrollHoursRow('Normal Mesai', hoursToDays(nval('normalMesai')), nval('normalMesai'), normalAmount),
    payrollHoursRow('Yıllık İzin', hoursToDays(annualLeaveHours), annualLeaveHours, annualLeaveAmount),
    payrollHoursRow('GMŞ Ücretli', hoursToDays(gmsPaidHours), gmsPaidHours, gmsPaidAmount),
    payrollHoursRow('Sendika TİS İzni', hoursToDays(unionLeaveHours), unionLeaveHours, unionLeaveAmount),
    payrollHoursRow('Ücretli Rapor', hoursToDays(nval('ucretliRapor')), nval('ucretliRapor'), raporAmount),
    payrollHoursRow('Hafta Sonu', hoursToDays(nval('haftaSonu')), nval('haftaSonu'), haftaSonuAmount),
    payrollHoursRow('Ulusal Bayram Genel Tatil', hoursToDays(nval('tatil')), nval('tatil'), tatilAmount),
    payrollHoursRow('UBGT Fiili Çalışma', hoursToDays(nval('ubgtFiiliSaat')), nval('ubgtFiiliSaat'), ubgtFiiliAmount)
  ];
  padPayrollRows(normalRows, 8, 4);
  padPayrollRows(fazlaRows, 7, 4);
  const specialRows=[
    payrollDeductionRow('Sendika Kesintisi', r.sendika),
    payrollDeductionRow('Spor Aidatı', nval('sporAidati')),
    payrollDeductionRow('Lojman', nval('lojman')),
    payrollDeductionRow(r.specialDeduction?.label || 'KDVli Hizmet / ÖDYL / Diğer Özel Kesinti', r.specialDeduction?.amount || 0)
  ];
  padPayrollRows(extraRows, 7, 3);
  padPayrollRows(specialRows, 7, 2);
  wrap.innerHTML=`
    <img class="payroll-watermark" src="images/platform_logo.png" alt="">
    <h2>TCDD İŞÇİ PLATFORMU MAAŞ HESAPLAMA ROBOTU</h2>
    <div class="payroll-warning top">${esc(infoNotice)}</div>
    <div class="payroll-grid">
      <table class="payroll-table payroll-meta"><tbody>${companyMeta}</tbody></table>
      <table class="payroll-table payroll-meta"><tbody>${personMeta}</tbody></table>
    </div>
    <div class="payroll-grid">
      <table class="payroll-table"><thead><tr><th>NORMAL ÇALIŞMA</th><th>GÜN</th><th>SAAT</th><th>TUTAR</th></tr></thead><tbody>${normalRows.join('')}<tr class="total"><td>Normal Çalışma Toplamı</td><td></td><td class="num">${num(round2(nval('normalMesai')+paidLeaveTotal+nval('ucretliRapor')+nval('haftaSonu')+nval('tatil')+nval('ubgtFiiliSaat')))}</td><td class="num">${plainMoney(normalTotal)}</td></tr></tbody></table>
      <table class="payroll-table"><thead><tr><th>FAZLA ÇALIŞMA</th><th>GÜN</th><th>SAAT</th><th>TUTAR</th></tr></thead><tbody>${fazlaRows.join('')}<tr class="total"><td>Fazla Çalışma Toplamı</td><td></td><td></td><td class="num">${plainMoney(fazlaTotal)}</td></tr></tbody></table>
    </div>
    <div class="payroll-grid">
      <table class="payroll-table"><thead><tr><th>EK KAZANÇLAR</th><th>NET</th><th>BRÜT</th></tr></thead><tbody>${extraRows.join('')}<tr class="total"><td>Ek Kazançlar Toplamı</td><td></td><td class="num">${plainMoney(extraTotal)}</td></tr></tbody></table>
      <table class="payroll-table"><thead><tr><th>ÖZEL KESİNTİLER</th><th>TUTAR</th></tr></thead><tbody>${specialRows.join('')}<tr class="total"><td>Özel Kesintiler Toplamı</td><td class="num">${plainMoney(round2(r.sendika+nval('sporAidati')+nval('lojman')+(r.specialDeduction?.amount || 0)))}</td></tr></tbody></table>
    </div>
    <div class="payroll-grid">
      <div class="payroll-stack">
        <table class="payroll-table"><thead><tr><th>SOSYAL SİGORTALAR</th><th></th><th></th></tr></thead><tbody><tr><td>Prime Tabi Brüt Kazanç</td><td></td><td class="num">${plainMoney(r.sgkBase)}</td></tr>${sgkCarryDetailRows}<tr><td>Önceki Dönemden Gelen Brüt Kazanç</td><td></td><td class="num">${plainMoney(r.sgkCarryBase)}</td></tr><tr><td>Bir Sonraki Döneme Aktarılan Brüt Kazanç</td><td></td><td></td></tr><tr class="total"><td>Sigorta Günü ve Matrahı</td><td class="num">30</td><td class="num">${plainMoney(r.sgkContributionBase)}</td></tr></tbody></table>
        <table class="payroll-table"><thead><tr><th>SİGORTA PRİMLERİ</th><th>%</th><th>İŞÇİ</th><th>%</th><th>İŞVEREN</th></tr></thead><tbody><tr><td>SGK Primi</td><td class="num">14,00</td><td class="num">${plainMoney(r.sgk)}</td><td class="num">21,75</td><td class="num">${plainMoney(employerSgk)}</td></tr><tr><td>İşsizlik Sig. Primi</td><td class="num">1,00</td><td class="num">${plainMoney(r.issizlik)}</td><td class="num">2,00</td><td class="num">${plainMoney(employerIssizlik)}</td></tr><tr class="total"><td>Sigorta Primleri Toplamı</td><td></td><td class="num">${plainMoney(round2(r.sgk+r.issizlik))}</td><td></td><td class="num">${plainMoney(round2(employerSgk+employerIssizlik))}</td></tr></tbody></table>
        <table class="payroll-table"><thead><tr><th>GELİR VERGİSİ İNDİRİMLERİ</th><th>TUTAR</th></tr></thead><tbody><tr><td>Sendika İndirimi</td><td class="num">${plainMoney(r.sendika)}</td></tr><tr><td>Engelli Vergi İndirimi</td><td class="num">${plainMoney(r.disabledTaxExemption)}</td></tr><tr class="total"><td>Gelir Vergisi İndirimleri Toplamı</td><td class="num">${plainMoney(round2(r.sendika+r.disabledTaxExemption))}</td></tr></tbody></table>
      </div>
      <div class="payroll-stack">
        <table class="payroll-table"><thead><tr><th>VERGİLER</th><th>ORAN</th><th>MATRAH</th><th>VERGİ</th></tr></thead><tbody>${taxRows}<tr><td>Gelir Vergisi</td><td></td><td class="num">${plainMoney(r.gvBase)}</td><td class="num">${plainMoney(r.gvBrut)}</td></tr><tr><td>Asgari Ücret İstisna Tutarı</td><td></td><td></td><td class="num">${plainMoney(nval('gvIstisna'))}</td></tr><tr><td>İstisna Sonrası Gelir Vergisi</td><td></td><td></td><td class="num">${plainMoney(r.gvNet)}</td></tr><tr><td>Damga Vergisi</td><td class="num">%0,759</td><td class="num">${plainMoney(r.dvBase)}</td><td class="num">${plainMoney(r.dvNet)}</td></tr><tr class="total"><td>Vergiler Toplamı</td><td></td><td></td><td class="num">${plainMoney(round2(r.gvNet+r.dvNet))}</td></tr><tr class="total"><td>Sigorta Primleri Toplamı</td><td></td><td></td><td class="num">${plainMoney(round2(r.sgk+r.issizlik))}</td></tr><tr class="total"><td>Yasal Kesintiler Toplamı</td><td></td><td></td><td class="num">${plainMoney(r.totalDeductions)}</td></tr></tbody></table>
        <table class="payroll-table"><thead><tr><th>TOPLAM GELİR VERGİSİ</th><th>MATRAH</th><th>GV İstisna</th></tr></thead><tbody><tr><td>Önceki Toplam Gelir Vergisi</td><td class="num">${plainMoney(nval('prevGvMatrah'))}</td><td class="num">${plainMoney(nval('gvIstisna'))}</td></tr><tr><td>Bordro Gelir Vergisi</td><td class="num">${plainMoney(r.gvBase)}</td><td>DV İstisna</td></tr><tr><td>Toplam Gelir Vergisi</td><td class="num">${plainMoney(round2(nval('prevGvMatrah')+r.gvBase))}</td><td class="num">${plainMoney(nval('dvIstisna'))}</td></tr></tbody></table>
        <table class="payroll-table payroll-final"><tbody><tr class="total"><td>TÜM KAZANÇLAR</td><td class="num">${plainMoney(r.gross)}</td></tr><tr class="total"><td>GENEL TOPLAM</td><td class="num">${plainMoney(r.gross)}</td></tr><tr class="total"><td>TÜM KESİNTİLER</td><td class="num">${plainMoney(r.totalDeductions)}</td></tr><tr class="net-blue"><td>NET ÜCRET</td><td class="num">${plainMoney(r.net)}</td></tr><tr><td>YUVARLAMA</td><td></td></tr><tr class="net-red"><td>NET ÖDENEN</td><td class="num">${plainMoney(r.net)}</td></tr></tbody></table>
      </div>
    </div>
    <div class="payroll-receipt">${esc(infoNotice)}</div>
  `;
}

function computeAll(){
  populateDegrees();
  syncWorkModeFields();
  updateCalendarCards();
  const r=gatherResult();
  el('kpiBase').textContent=money(r.base);
  el('kpiEmek').textContent=money(r.emekGross);
  el('kpiHourly').textContent=money(r.hourlyTotal);
  el('kpiServiceYears').textContent=String(r.yrs);
  el('profileEmekGross').textContent=money(r.emekGross);
  el('profileHizmetGross').textContent=money(r.hizmetGross);
  el('profileServiceYears').textContent=String(r.hizmetYears);

  const summaryCompanyLogo = COMPANY_LOGOS[sval('company')] || 'images/summary_logo_default.png';
  el('summaryLogo').src = summaryCompanyLogo;
  el('summaryLogo').alt = `${companyLabel()} logosu`;
  el('summaryCompany').textContent = companyLabel();
  el('summaryMeta').textContent = `${MONTH_LABELS[sval('month')]} • ${workModeLabel()} • ${sval('sicil')}`;
  el('summaryName').textContent = sval('fullName');
  el('netView').textContent=money(r.net);
  el('netView2').textContent=money(r.net);
  el('primeBaseView').textContent=money(r.sgkContributionBase);
  el('gvBaseView').textContent=money(r.gvBase);
  el('dvBaseView').textContent=money(r.dvBase);
  if(el('gvIstisnaView')) el('gvIstisnaView').textContent=money(nval('gvIstisna'));
  if(el('dvIstisnaView')) el('dvIstisnaView').textContent=money(nval('dvIstisna'));
  if(el('kmTaxExemptView')) el('kmTaxExemptView').textContent=money(r.kmTaxExempt);
  el('gelirlerList').innerHTML = r.gelirler.map(x=>`<div class="line"><div class="l">${x[0]}</div><div class="r">${money(x[1])}</div></div>`).join('') + `<div class="line"><div class="l"><strong>Toplam Brüt</strong></div><div class="r"><strong>${money(r.gross)}</strong></div></div>`;
  el('kesintilerList').innerHTML = r.kesintiler.map(x=>`<div class="line"><div class="l">${x[0]}</div><div class="r neg">${money(x[1])}</div></div>`).join('') + `<div class="line"><div class="l"><strong>Toplam Kesinti</strong></div><div class="r neg"><strong>${money(r.totalDeductions)}</strong></div></div>`;
  const bonusCarryNote=r.prevBonusCarryBase>0 ? ` Önceki ay ikramiye SGK matrah devri (${money(r.prevBonusCarryBase)}) bu ayın SGK ve işsizlik kesintisine eklendi.` : '';
  const specialDeductionNote=r.specialDeduction?.automatic ? ` 05/2026 TCDD Taşımacılık referans bordrosundaki ${r.specialDeduction.label} özel kesintisi (${money(r.specialDeduction.amount)}) otomatik eklendi.` : '';
  el('calcNote').textContent = `Bu hesaplama bilgilendirme ve öğrenme amaçlıdır. Resmi bordro, resmi yazı veya kurum işlemi yerine geçmez; nihai bordro ve kurum kayıtları esas alınmalıdır.${bonusCarryNote}${specialDeductionNote}`;
  renderOfficialPayroll(r);
  computeTedb(r);
  renderLeaveModule();
}
function formProfile(){
  return {
    id: sval('sicil') || 'p_'+Date.now(),
    sicil:sval('sicil'), fullName:sval('fullName'), bolge:sval('bolge'), company:sval('company'), workerType:sval('workerType'), skala:sval('skala'), calismaModeli:sval('calismaModeli'), degree:sval('degree'), kademe:sval('kademe'), girisYili:sval('girisYili'), girisAy:sval('girisAy'), probationMonths:sval('probationMonths'), militaryAfterStart:sval('militaryAfterStart'), militaryDelayMonths:sval('militaryDelayMonths'), carryAnnualLeave:sval('carryAnnualLeave'), terfiBilgisi:sval('terfiBilgisi'), postabasi:el('profilePostabasi')?.checked ? '1' : '0'
  };
}
function cleanProfileText(value){
  return String(value ?? '').trim();
}
function pickProfileText(...values){
  for(const value of values){
    const text=cleanProfileText(value);
    if(text) return text;
  }
  return '';
}
function workModeFromMemberRole(role=''){
  const text=cleanProfileText(role).toLocaleLowerCase('tr-TR');
  if(text.includes('tti') || text.includes('makinist')) return 'TTI_MAKINIST';
  if(text.includes('vardiya')) return 'VARDIYALI_8';
  if(text.includes('kaynak')) return 'KAYNAKCI_7_5';
  return 'NORMAL_9';
}
function profileFlatFields(profile={}){
  return {
    profileId:cleanProfileText(profile.id),
    profileSicil:cleanProfileText(profile.sicil),
    profileFullName:cleanProfileText(profile.fullName),
    profileBolge:cleanProfileText(profile.bolge),
    profileCompany:cleanProfileText(profile.company),
    profileWorkerType:cleanProfileText(profile.workerType),
    profileSkala:cleanProfileText(profile.skala),
    profileCalismaModeli:cleanProfileText(profile.calismaModeli),
    profileDegree:cleanProfileText(profile.degree),
    profileKademe:cleanProfileText(profile.kademe),
    profileGirisYili:cleanProfileText(profile.girisYili),
    profileGirisAy:cleanProfileText(profile.girisAy),
    profileProbationMonths:cleanProfileText(profile.probationMonths),
    profileMilitaryAfterStart:cleanProfileText(profile.militaryAfterStart),
    profileMilitaryDelayMonths:cleanProfileText(profile.militaryDelayMonths),
    profileCarryAnnualLeave:cleanProfileText(profile.carryAnnualLeave),
    profileTerfiBilgisi:cleanProfileText(profile.terfiBilgisi),
    profilePostabasi:cleanProfileText(profile.postabasi)
  };
}
function activeProfileForMembership(record={}){
  const profile=formProfile();
  const recordSicil=cleanProfileText(record.sicil);
  const recordName=cleanProfileText(record.fullName).toLocaleLowerCase('tr-TR');
  const sameSicil=recordSicil && cleanProfileText(profile.sicil)===recordSicil;
  const sameName=recordName && cleanProfileText(profile.fullName).toLocaleLowerCase('tr-TR')===recordName;
  if(!profile.sicil && !profile.fullName) return null;
  if(!recordSicil && !recordName) return profile;
  return sameSicil || sameName ? profile : null;
}
function attachProfileToMembershipRecord(record={}){
  const profile=activeProfileForMembership(record);
  if(!profile) return record;
  return {...record, ...profileFlatFields(profile)};
}
function profileFromMembershipRecord(record={}, existing={}){
  const roleText=pickProfileText(record.profileTerfiBilgisi, record.role, existing.terfiBilgisi);
  return {
    ...existing,
    id:pickProfileText(record.profileId, existing.id, record.sicil, record.uid, record.firebaseUid, 'member_'+Date.now()),
    sicil:pickProfileText(record.profileSicil, record.sicil, existing.sicil),
    fullName:pickProfileText(record.profileFullName, record.fullName, existing.fullName),
    bolge:pickProfileText(record.profileBolge, existing.bolge, record.unit, record.city),
    company:pickProfileText(record.profileCompany, record.company, existing.company, 'TCDD'),
    workerType:pickProfileText(record.profileWorkerType, record.workerType, existing.workerType, 'SANATKAR'),
    skala:pickProfileText(record.profileSkala, record.skala, existing.skala, '1'),
    calismaModeli:pickProfileText(record.profileCalismaModeli, record.calismaModeli, existing.calismaModeli, workModeFromMemberRole(roleText)),
    degree:pickProfileText(record.profileDegree, record.degree, existing.degree),
    kademe:pickProfileText(record.profileKademe, record.kademe, existing.kademe, 'I'),
    girisYili:pickProfileText(record.profileGirisYili, record.girisYili, existing.girisYili),
    girisAy:pickProfileText(record.profileGirisAy, record.girisAy, existing.girisAy, '01'),
    probationMonths:pickProfileText(record.profileProbationMonths, record.probationMonths, existing.probationMonths, '4'),
    militaryAfterStart:pickProfileText(record.profileMilitaryAfterStart, record.militaryAfterStart, existing.militaryAfterStart, 'yok'),
    militaryDelayMonths:pickProfileText(record.profileMilitaryDelayMonths, record.militaryDelayMonths, existing.militaryDelayMonths, String(pickProfileText(record.profileMilitaryAfterStart, record.militaryAfterStart, existing.militaryAfterStart)==='var' ? 12 : 0)),
    carryAnnualLeave:pickProfileText(record.profileCarryAnnualLeave, record.carryAnnualLeave, existing.carryAnnualLeave, '0'),
    terfiBilgisi:roleText,
    postabasi:pickProfileText(record.profilePostabasi, record.postabasi, existing.postabasi, '0')
  };
}
function syncMembershipRecordToProfile(record={}, options={}){
  if(!cleanProfileText(record.sicil) && !cleanProfileText(record.fullName)) return false;
  const list=profiles();
  const profileId=cleanProfileText(record.profileId);
  const sicil=cleanProfileText(record.sicil || record.profileSicil);
  const idx=list.findIndex(item=>(profileId && item.id===profileId) || (sicil && item.sicil===sicil));
  const profile=profileFromMembershipRecord(record, idx>-1 ? list[idx] : {});
  if(!profile.sicil && !profile.fullName) return false;
  if(idx>-1) list[idx]={...list[idx], ...profile};
  else list.unshift(profile);
  saveProfiles(list);
  currentProfileId=profile.id;
  setLastProfile(profile.id);
  if(options.activate!==false) applyProfile(profile);
  else renderProfiles();
  if(options.feedback) showProfileStatus('Üyelik bilgileri Personel Kartı ile eşitlendi.');
  return true;
}
function firebaseProfilePayload(profile=formProfile()){
  const session=getMemberSession();
  const record=getMembershipRecord();
  const payload={
    ...profileFlatFields(profile),
    sicil:cleanProfileText(profile.sicil),
    fullName:cleanProfileText(profile.fullName),
    company:cleanProfileText(profile.company),
    unit:cleanProfileText(profile.bolge),
    city:exchangeCityFromProfileRegion(profile.bolge),
    role:cleanProfileText(profile.terfiBilgisi) || workScheduleLabel(profile),
    email:session.email || record.email || '',
    phone:session.phone || record.phone || ''
  };
  return payload;
}
function syncActiveProfileToFirebase(profile=formProfile()){
  const session=getMemberSession();
  const bridge=firebaseBridge();
  if(!session?.active || isGuestSession(session) || !bridge || typeof bridge.updateMemberProfile!=='function') return false;
  try{
    bridge.updateMemberProfile(JSON.stringify(firebaseProfilePayload(profile)));
    return true;
  }catch(error){
    return false;
  }
}
function applyProfile(p){
  currentProfileId=p.id;
  setLastProfile(currentProfileId);
  el('sicil').value=p.sicil||'';
  el('fullName').value=p.fullName||'';
  setSelectValueOrCustom('bolge', p.bolge || '');
  el('company').value=p.company||'TURASAS';
  el('workerType').value=p.workerType||'SANATKAR';
  el('skala').value=p.skala||'1';
  if(el('calismaModeli')) el('calismaModeli').value=p.calismaModeli||'NORMAL_9';
  populateDegrees();
  el('degree').value=p.degree||el('degree').value;
  el('kademe').value=p.kademe||'I';
  el('girisYili').value=p.girisYili||'';
  el('girisAy').value=p.girisAy||'01';
  if(el('probationMonths')) el('probationMonths').value=p.probationMonths||'4';
  const militaryStatus=String(p.militaryAfterStart||'yok')==='var' ? 'after' : (p.militaryAfterStart||'yok');
  if(el('militaryAfterStart')) el('militaryAfterStart').value=militaryStatus;
  if(el('militaryDelayMonths')) el('militaryDelayMonths').value=p.militaryDelayMonths || (String(p.militaryAfterStart||'')==='var' ? '12' : '0');
  el('carryAnnualLeave').value=p.carryAnnualLeave||0;
  setSelectValueOrCustom('terfiBilgisi', p.terfiBilgisi || '');
  if(el('profilePostabasi')) el('profilePostabasi').checked=String(p.postabasi||'0')==='1';
  if(el('postabasi')) el('postabasi').value=String(p.postabasi||'0')==='1'?'1':'0';
  syncProfileWorkMode(p);
  applyWorkTypeTemplate(sval('workType') || 'normal');
  fillCalendarInputs(true);
  renderProfiles();
  renderActiveProfileSummary();
  renderWorkModule();
  computeAll();
}
function openProfileEditor(id){
  const p=profiles().find(x=>x.id===id);
  if(!p) return;
  applyProfile(p);
  openProfileDrawer('card');
  const scrollWrap=el('profileDrawerScroll');
  if(scrollWrap) scrollWrap.scrollTop=0;
}
function startSalaryWithProfile(id){
  const p=profiles().find(x=>x.id===id);
  if(!p) return;
  applyProfile(p);
  closeProfileDrawer();
  setPage('salary');
  setMode('maas');
  setStep(2);
  computeAll();
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderQuickProfiles(){
  const wrap=el('quickProfileList');
  if(!wrap) return;
  const list=profiles().slice(0,4);
  if(!list.length){
    wrap.innerHTML='<div class="quick-profile-empty">Kayıtlı personel oluşturduğunda burada hızlı seçim olarak görünür.</div>';
    return;
  }
  wrap.innerHTML=list.map((p,index)=>`<button type="button" class="quick-profile-chip tone-${index % 2 === 0 ? 'a' : 'b'} ${currentProfileId===p.id?'active':''}" data-quick-profile="${p.id}"><span class="quick-profile-badge">${p.sicil || 'Sicil Yok'}</span><strong>${p.fullName || 'İsimsiz Personel'}</strong><span>${companyLabel(p.company)}${p.bolge ? ' • ' + p.bolge : ''}</span><em>${currentProfileId===p.id?'Aktif kart':'Kartı düzenle'}</em></button>`).join('');
}
function renderProfiles(){
  const list = profiles();
  const wrap=el('savedProfiles');
  renderQuickProfiles();
  if(!list.length){ wrap.innerHTML='<div class="info-box">Kayıtlı personel yok.</div>'; return; }
  wrap.innerHTML=list.map((p,index)=>{
    const start=startProfilePeriod(p);
    const delay=profileMilitaryDelayMonths(p);
    return `<div class="saved-card tone-${index % 2 === 0 ? 'a' : 'b'} ${currentProfileId===p.id?'active':''}"><div class="top"><div><div class="name-row"><div class="name">${p.sicil||'-'} • ${p.fullName||'İsimsiz Personel'}</div>${currentProfileId===p.id?'<span class="saved-state-pill">Aktif</span>':''}</div><div class="meta">${companyLabel(p.company)} • ${p.bolge||'-'}<br>${workScheduleLabel(p)} • Skala ${p.skala||'-'} • Derece ${p.degree||'-'} / ${p.kademe||'-'} • Giriş ${p.girisYili||'-'}/${p.girisAy||'01'}${start ? ` • Terfi ${formatPeriodLabel(start)}` : ''}${delay ? ` • Askerlik öteleme ${delay} ay` : ''}${String(p.postabasi||'0')==='1' ? ' • Postabaşı' : ''}</div></div></div><div class="saved-actions"><button class="btn small soft" type="button" onclick="editProfile('${p.id}')">Düzenle</button><button class="btn small primary" type="button" onclick="startSalaryWithProfile('${p.id}')">Maaş Hesapla</button><button class="btn small" type="button" onclick="selectTedbProfile('${p.id}')">İkramiye Hesapla</button><button class="btn small danger" type="button" onclick="deleteProfile('${p.id}')">Sil</button></div></div>`;
  }).join('');
}
window.startSalaryWithProfile=startSalaryWithProfile;
window.editProfile=openProfileEditor;
window.selectProfile=function(id){ const p=profiles().find(x=>x.id===id); if(p){ applyProfile(p); setProfileDrawerTab('card'); closeProfileDrawer(); } }
window.selectTedbProfile=function(id){
  const p=profiles().find(x=>x.id===id);
  if(!p) return;
  applyProfile(p);
  closeProfileDrawer();
  setMode('tedb');
  setPage('salary');
  computeAll();
}
window.deleteProfile=function(id){
  const removedWasLast=getLastProfileId()===id;
  saveProfiles(profiles().filter(x=>x.id!==id));
  if(currentProfileId===id){
    setLastProfile('');
    clearProfileForm('Kişi silindi. Yeni personel kartı hazır.');
    return;
  }
  if(removedWasLast) setLastProfile('');
  renderProfiles();
  renderActiveProfileSummary();
  showProfileStatus('Kişi silindi.');
}
function saveCurrentProfile(options={}){
  const p=formProfile();
  if(!p.sicil || !p.fullName){ alert('Sicil ve ad soyad gerekli.'); return false; }
  const list=profiles();
  const idx=list.findIndex(x=>x.id===p.id || (x.sicil && x.sicil===p.sicil));
  const wasUpdate=idx>-1;
  if(idx>-1) list[idx]={...list[idx], ...p}; else list.unshift(p);
  currentProfileId=(idx>-1?list[idx]:p).id;
  syncProfileWorkMode(p);
  applyWorkTypeTemplate(sval('workType') || 'normal');
  saveProfiles(list); setLastProfile(currentProfileId); syncActiveProfileToFirebase(idx>-1?list[idx]:p); renderProfiles(); refreshProfileIndicators(); scheduleLeaveRefresh(); renderWorkModule();
  if(options.feedback){
    showProfileStatus(wasUpdate ? 'Personel kartı güncellendi.' : 'Kişi kaydedildi.');
    setProfileDrawerTab('saved');
    const scrollWrap=el('profileDrawerScroll');
    if(scrollWrap) scrollWrap.scrollTop=0;
  }
  return true;
}
function saveProfileAndShow(){
  return saveCurrentProfile({feedback:true});
}
function clearProfileForm(message=''){
  currentProfileId='';
  ['sicil','fullName','bolge','girisYili','terfiBilgisi'].forEach(id=>{ if(el(id)) el(id).value=''; });
  if(el('girisAy')) el('girisAy').value='01';
  if(el('probationMonths')) el('probationMonths').value='4';
  if(el('militaryAfterStart')) el('militaryAfterStart').value='yok';
  if(el('militaryDelayMonths')) el('militaryDelayMonths').value='0';
  if(el('carryAnnualLeave')) el('carryAnnualLeave').value=0;
  if(el('profilePostabasi')) el('profilePostabasi').checked=false;
  if(el('postabasi')) el('postabasi').value='0';
  if(el('company')) el('company').value='TURASAS';
  if(el('workerType')) el('workerType').value='SANATKAR';
  if(el('skala')) el('skala').value='1';
  if(el('calismaModeli')) el('calismaModeli').value='NORMAL_9';
  populateDegrees();
  if(el('degree') && el('degree').options.length) el('degree').selectedIndex=0;
  if(el('kademe')) el('kademe').value='I';
  syncProfileWorkMode();
  applyWorkTypeTemplate(sval('workType') || 'normal');
  fillCalendarInputs(true);
  setProfileDrawerTab('card');
  renderProfiles();
  renderActiveProfileSummary();
  renderWorkModule();
  showProfileStatus(message);
  const scrollWrap=el('profileDrawerScroll');
  if(scrollWrap) scrollWrap.scrollTop=0;
  scheduleProfilePreviewRefresh(true);
}
function restoreLastProfile(){
  const lastId=getLastProfileId();
  if(!lastId) return false;
  const p=profiles().find(x=>x.id===lastId || x.sicil===lastId);
  if(!p){
    setLastProfile('');
    return false;
  }
  applyProfile(p);
  window.scrollTo(0,0);
  return true;
}
function initSocial(){}
function initFacilities(){ renderFacilities(); }
function firebaseBridge(){
  return window.FirebaseBridge && typeof window.FirebaseBridge.isAvailable==='function' && window.FirebaseBridge.isAvailable()
    ? window.FirebaseBridge
    : null;
}
function isFirebaseAuthSetupMessage(message=''){
  const text=String(message||'').toLowerCase();
  return text.includes('configuration_not_found')
    || text.includes('authentication kurulumu eksik')
    || text.includes('email/password secenegini aktif')
    || text.includes('identity toolkit');
}
function firebaseRecordFromPayload(payload={}){
  return {
    ...defaultMembershipRecord(),
    ...payload,
    firebaseUid:payload.firebaseUid || payload.uid || '',
    uid:payload.uid || payload.firebaseUid || '',
    applicationStatus:payload.applicationStatus || 'draft'
  };
}
function submitFirebaseMembership(record){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.submitMemberApplication!=='function') return false;
  firebaseLastMessage='Başvuru Firebase onay kuyruğuna gönderiliyor...';
  try{
    bridge.submitMemberApplication(JSON.stringify(record));
    return true;
  }catch(error){
    firebaseLastMessage='Firebase başvurusu gönderilemedi. Yerel taslak saklandı.';
    return false;
  }
}
function loadFirebasePendingMembers(force=false){
  const bridge=firebaseBridge();
  const recentlyFetched=Date.now()-firebasePendingLastFetch<8000;
  if(!bridge || !isAdminSession() || firebasePendingLoading || (!force && firebasePendingLoaded && recentlyFetched)) return false;
  firebasePendingLoading=true;
  try{
    bridge.loadPendingMembers();
    return true;
  }catch(error){
    firebasePendingLoading=false;
    return false;
  }
}
function refreshMembershipQueue(){
  firebasePendingLoaded=false;
  firebasePendingLastFetch=0;
  if(!loadFirebasePendingMembers(true)) renderMembershipPreview();
}
function loadFirebaseMembers(force=false){
  const bridge=firebaseBridge();
  if(!bridge || !isAdminSession() || firebaseMembersLoading || (firebaseMembersLoaded && !force)) return false;
  firebaseMembersLoading=true;
  firebaseMembersErrorMessage='';
  try{
    bridge.loadMembers();
    return true;
  }catch(error){
    firebaseMembersLoading=false;
    firebaseMembersErrorMessage='Üye listesi alınamadı. Firebase bağlantısını kontrol edip tekrar deneyin.';
    return false;
  }
}
function membershipAdminRecordKey(record){
  return String(record?.uid || record?.firebaseUid || membershipRequestKey(record));
}
function isBlockedMembershipStatus(status=''){
  return ['removed','rejected'].includes(String(status||'').toLowerCase());
}
function isActiveMemberRecord(record={}){
  const status=String(record.applicationStatus||'').toLowerCase();
  const role=String(record.memberRole || record.type || '').toLowerCase();
  return !isBlockedMembershipStatus(status)
    && (status==='approved' || role==='admin' || role==='manager' || role==='yonetici' || !!record.isAdmin);
}
function membershipRecordMatchesSession(record,session=getMemberSession()){
  if(!record || !session?.active) return false;
  const recordIds=[record.uid,record.firebaseUid].filter(Boolean).map(String);
  const sessionIds=[session.uid,session.firebaseUid].filter(Boolean).map(String);
  if(recordIds.some(id=>sessionIds.includes(id))) return true;
  if(record.sicil && session.sicil && String(record.sicil)===String(session.sicil)) return true;
  const recordEmail=normalizeEmail(record.email || record.authEmail || record.ownerEmail);
  const sessionEmail=normalizeEmail(session.email || session.authEmail);
  return !!recordEmail && !!sessionEmail && recordEmail===sessionEmail;
}
function isProtectedAdminMembershipRecord(record={}){
  const email=normalizeEmail(record.email || record.authEmail || record.ownerEmail);
  const role=normalizeEmail(record.memberRole || record.type || record.role);
  return !!record.isAdmin
    || email===SEEDED_ADMIN_ACCOUNT.email
    || String(record.sicil || '')===SEEDED_ADMIN_ACCOUNT.sicil
    || role==='admin'
    || role==='yonetici'
    || role==='yönetici';
}
function adminSelectedMemberRecord(){
  return selectedMembershipAdminMode==='member' && selectedMembershipAdminRecord
    ? selectedMembershipAdminRecord
    : null;
}
function adminSelectedApplicationRecord(){
  if(selectedMembershipAdminMode==='application' && selectedMembershipAdminRecord) return selectedMembershipAdminRecord;
  return latestFirebasePendingMember() || latestPendingMembership() || getMembershipRecord();
}
function setMembershipAdminSelection(record,mode='application'){
  selectedMembershipAdminRecord=record ? {...defaultMembershipRecord(), ...record} : null;
  selectedMembershipAdminMode=mode;
  selectedMemberListKey=mode==='member' && record ? membershipAdminRecordKey(record) : '';
}
function selectMemberListRecord(key){
  const record=uniqueMembershipList().find(item=>membershipAdminRecordKey(item)===key);
  if(!record) return;
  setMembershipAdminSelection(record,'member');
  renderMembershipPreview();
  closeMemberList();
}
function uniqueMembershipList(){
  const map=new Map();
  [...firebaseMembers, ...getMembershipRequests(), getMembershipRecord()]
    .filter(isActiveMemberRecord)
    .forEach(item=>{
    if(!item || (!item.fullName && !item.sicil)) return;
    const key=item.uid || item.firebaseUid || membershipRequestKey(item);
    map.set(key,{...defaultMembershipRecord(), ...item});
  });
  return [...map.values()].sort((a,b)=>String(a.fullName||'').localeCompare(String(b.fullName||''),'tr'));
}
function renderMemberList(){
  const panel=el('memberListPanel');
  const listNode=el('memberListResults');
  if(!panel || !listNode) return;
  const query=normalizeEmail(el('memberListSearch')?.value || '');
  const list=uniqueMembershipList().filter(item=>{
    const haystack=normalizeEmail([item.fullName,item.sicil,item.unit,item.city,item.role,item.company,item.phone,item.email,item.memberRole,item.type].filter(Boolean).join(' '));
    return !query || haystack.includes(query);
  });
  if(el('memberListCount')) el('memberListCount').textContent=`${list.length} kayıt`;
  if(firebaseMembersLoading){
    listNode.innerHTML='<div class="member-list-empty">Üye listesi Firebase üzerinden alınıyor...</div>';
    return;
  }
  if(!list.length){
    const emptyMessage=firebaseMembersErrorMessage || (query
      ? 'Arama kriterine uygun üye bulunamadı.'
      : 'Aktif üye kaydı bulunamadı. Firebase üye listesi boşsa Kuyruğu Yenile ile başvuruları kontrol edin.');
    listNode.innerHTML=`<div class="member-list-empty">${esc(emptyMessage)}</div>`;
    return;
  }
  listNode.innerHTML=list.map((item,index)=>{
    const region=item.unit || item.city || '-';
    const role=item.role || '-';
    const authority=item.isAdmin || ['admin','manager','yonetici'].includes(String(item.memberRole || item.type || '').toLowerCase()) ? 'Yönetici' : 'Standart üye';
    const contact=[item.phone,item.email].filter(Boolean).join(' • ') || '-';
    const key=membershipAdminRecordKey(item);
    const active=selectedMembershipAdminMode==='member' && selectedMemberListKey===key ? ' active' : '';
    return `<button type="button" class="member-list-row tone-${index%3}${active}" data-member-key="${esc(key)}">
      <div class="member-list-main">
        <div class="name">${esc(item.fullName || 'İsimsiz Üye')}</div>
        <div class="meta">${esc(item.sicil || 'Sicil yok')} • ${esc(companyLabel(item.company))}</div>
      </div>
      <div class="member-list-detail"><span>Bölge</span><strong>${esc(region)}</strong></div>
      <div class="member-list-detail"><span>Görev</span><strong>${esc(role)}</strong></div>
      <div class="member-list-detail"><span>Durum / Yetki</span><strong>${esc(membershipStatusView(item,{ready:true}).text)} • ${esc(authority)}</strong></div>
      <div class="member-list-detail wide"><span>İletişim</span><strong>${esc(contact)}</strong></div>
    </button>`;
  }).join('');
}
function closeMemberList(){
  const panel=el('memberListPanel');
  if(!panel || panel.classList.contains('hidden')) return;
  clearTimeout(memberListCloseTimer);
  document.body.classList.remove('member-list-open');
  panel.setAttribute('aria-hidden','true');
  memberListCloseTimer=window.setTimeout(()=>{
    if(!document.body.classList.contains('member-list-open')) panel.classList.add('hidden');
  }, 260);
}
function toggleMemberList(){
  const panel=el('memberListPanel');
  if(!panel) return;
  if(panel.parentElement!==document.body) document.body.appendChild(panel);
  const willShow=panel.classList.contains('hidden');
  clearTimeout(memberListCloseTimer);
  if(willShow){
    panel.classList.remove('hidden');
    panel.setAttribute('aria-hidden','false');
    window.requestAnimationFrame(()=>document.body.classList.add('member-list-open'));
    loadFirebaseMembers(true);
    renderMemberList();
    if(el('memberListResults')) el('memberListResults').scrollTop=0;
  }else{
    closeMemberList();
  }
}
function registerNotificationToken(){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.registerNotificationToken!=='function') return false;
  try{
    bridge.registerNotificationToken();
    return true;
  }catch(error){
    return false;
  }
}
function refreshCurrentMemberFromFirebase(){
  const bridge=firebaseBridge();
  const session=getMemberSession();
  if(!session?.active || isGuestSession(session) || !bridge || typeof bridge.loadCurrentMember!=='function') return false;
  try{
    bridge.loadCurrentMember();
    return true;
  }catch(error){
    return false;
  }
}
function ensureFirebaseAdminSession(password){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.ensureSeededAdminSession!=='function') return false;
  clearTimeout(firebaseAdminFallbackTimer);
  firebaseLastMessage='Firebase admin oturumu açılıyor...';
  try{
    bridge.ensureSeededAdminSession(String(password || ''));
    firebaseAdminFallbackTimer=window.setTimeout(()=>{
      openAdminSessionLocally();
      firebasePendingLoaded=false;
      firebaseLastMessage='Firebase yanıtı gecikti. Test için admin oturumu bu cihazda açıldı; kalıcı onay sistemi için Firebase Authentication > Email/Password aktif edilmeli.';
      if(el('memberLoginStatus')) el('memberLoginStatus').textContent=firebaseLastMessage;
      renderMembershipPreview();
      if(currentPage==='membership') setPage('home');
      else updateTopbarSlogan();
    }, 4500);
    return true;
  }catch(error){
    clearTimeout(firebaseAdminFallbackTimer);
    firebaseLastMessage='Firebase admin oturumu başlatılamadı.';
    return false;
  }
}
function latestFirebasePendingMember(){
  return firebasePendingMembers[0] || null;
}
function updateFirebaseMemberStatus(record,nextStatus,reviewNote){
  const bridge=firebaseBridge();
  const uid=record?.uid || record?.firebaseUid;
  if(!bridge || !uid || typeof bridge.updateMemberStatus!=='function') return false;
  firebaseLastMessage='Firebase üyelik durumu güncelleniyor...';
  try{
    bridge.updateMemberStatus(String(uid),nextStatus,reviewNote || '');
    return true;
  }catch(error){
    firebaseLastMessage='Firebase üyelik durumu güncellenemedi.';
    return false;
  }
}
function submitFirebaseExchangeRequest(record){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.submitExchangeRequest!=='function') return false;
  try{
    bridge.submitExchangeRequest(JSON.stringify(record));
    return true;
  }catch(error){
    return false;
  }
}
function loadFirebaseExchangeMatches(record){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.loadExchangeMatches!=='function') return false;
  firebaseExchangeLoading=true;
  try{
    bridge.loadExchangeMatches(JSON.stringify(record));
    return true;
  }catch(error){
    firebaseExchangeLoading=false;
    return false;
  }
}
function forumCategoryLabel(value){
  return FORUM_CATEGORIES[value] || 'Gündem';
}
function forumCategoryIcon(value){
  const icons={
    all:'TÜ',
    gundem:'GN',
    calisma:'ÇL',
    maas:'₺',
    sendika:'SN',
    mevzuat:'MV',
    becayis:'BC',
    yardim:'?'
  };
  return icons[value] || 'GN';
}
function forumCategoryTone(value){
  const tones={
    all:'sky',
    gundem:'blue',
    calisma:'teal',
    maas:'green',
    sendika:'amber',
    mevzuat:'indigo',
    becayis:'orange',
    yardim:'rose'
  };
  return tones[value] || 'blue';
}
function forumDateLabel(value){
  const time=Number(value) || Date.parse(value || '');
  if(!time) return '-';
  return new Date(time).toLocaleString('tr-TR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
}
function forumExcerpt(text='',limit=140){
  const cleanText=String(text||'').replace(/\s+/g,' ').trim();
  return cleanText.length>limit ? `${cleanText.slice(0,limit-1)}...` : cleanText;
}
function forumAuthorInitial(value='Ü'){
  const words=String(value || 'Üye').replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ0-9\s]/g,' ').trim().split(/\s+/).filter(Boolean);
  const initials=(words.length>1 ? `${words[0][0] || ''}${words[1][0] || ''}` : `${words[0]?.slice(0,2) || 'Ü'}`).toUpperCase();
  return initials.slice(0,2);
}
function forumReplyLabel(count=0){
  const value=Number(count) || 0;
  return `${value} cevap`;
}
function forumFilteredTopics(topics=activeForumTopics()){
  if(!activeForumCategoryFilter || activeForumCategoryFilter==='all') return topics;
  return topics.filter(item=>item.category===activeForumCategoryFilter);
}
function updateForumCategoryRail(topics=activeForumTopics()){
  const rail=el('forumCategoryRail');
  const allCount=topics.length;
  const replyCount=topics.reduce((total,item)=>total+(Number(item.replyCount)||0),0);
  if(el('forumHeroTopicCount')) el('forumHeroTopicCount').textContent=String(allCount);
  if(el('forumHeroReplyCount')) el('forumHeroReplyCount').textContent=String(replyCount);
  if(el('forumHeroCategory')) el('forumHeroCategory').textContent=activeForumCategoryFilter==='all' ? 'Tümü' : forumCategoryLabel(activeForumCategoryFilter);
  if(!rail) return;
  rail.querySelectorAll('[data-forum-category-filter]').forEach(button=>{
    const value=button.dataset.forumCategoryFilter || 'all';
    const count=value==='all' ? allCount : topics.filter(item=>item.category===value).length;
    button.classList.toggle('active', value===activeForumCategoryFilter);
    button.dataset.count=String(count);
  });
}
function cleanForumNick(value=''){
  return String(value||'')
    .replace(/[<>]/g,'')
    .replace(/\s+/g,' ')
    .trim()
    .slice(0,32);
}
function generatedForumNick(){
  const saved=cleanForumNick(localStorage.getItem(FORUM_NICK_KEY) || '');
  if(saved) return saved;
  const created=`Demiryolcu${Math.floor(100 + Math.random()*900)}`;
  localStorage.setItem(FORUM_NICK_KEY, created);
  scheduleUserDataSync('forum-nick');
  return created;
}
function currentForumNick(){
  const fromInput=cleanForumNick(el('forumNick')?.value || '');
  const nick=fromInput || generatedForumNick();
  localStorage.setItem(FORUM_NICK_KEY, nick);
  scheduleUserDataSync('forum-nick');
  if(el('forumNick') && el('forumNick').value!==nick) el('forumNick').value=nick;
  return nick;
}
function forumAuthorPayload(){
  const session=getMemberSession() || {};
  const nick=currentForumNick();
  return {
    authorName:nick,
    authorNick:nick,
    authorSicil:'',
    authorRole:isAdminSession(session) ? 'Yönetici' : 'Üye'
  };
}
function forumFriendlyStatusMessage(message=''){
  const text=String(message || '');
  if(/index\s+not\s+defined|indexOn|lastActivityAt/i.test(text)){
    return '';
  }
  if(/permission|denied|PERMISSION_DENIED/i.test(text)){
    return 'Forum için onaylı üye girişi veya yönetici yetkisi gerekiyor.';
  }
  return text;
}
function setForumStatus(message,type='info'){
  const node=el('forumStatus');
  if(!node) return;
  const safeMessage=forumFriendlyStatusMessage(message);
  node.textContent=safeMessage || '';
  node.classList.toggle('hidden', !safeMessage);
  node.classList.toggle('warn', type==='warn');
}
function normalizeForumTopic(raw={}){
  return {
    id:String(raw.id || raw.topicId || raw.uid || ''),
    topicId:String(raw.topicId || raw.id || raw.uid || ''),
    category:raw.category || 'gundem',
    title:String(raw.title || ''),
    body:String(raw.body || ''),
    authorUid:String(raw.authorUid || raw.createdByUid || ''),
    authorName:String(raw.authorNick || raw.authorName || 'Üye'),
    authorNick:String(raw.authorNick || raw.authorName || 'Üye'),
    authorSicil:'',
    authorRole:String(raw.authorRole || 'Üye'),
    replyCount:Number(raw.replyCount || 0),
    createdAt:Number(raw.createdAt || 0),
    updatedAt:Number(raw.updatedAt || raw.createdAt || 0),
    lastActivityAt:Number(raw.lastActivityAt || raw.lastReplyAt || raw.updatedAt || raw.createdAt || 0),
    status:String(raw.status || 'active')
  };
}
function normalizeForumReply(raw={}){
  return {
    id:String(raw.id || raw.replyId || ''),
    replyId:String(raw.replyId || raw.id || ''),
    topicId:String(raw.topicId || ''),
    body:String(raw.body || ''),
    authorUid:String(raw.authorUid || raw.createdByUid || ''),
    authorName:String(raw.authorNick || raw.authorName || 'Üye'),
    authorNick:String(raw.authorNick || raw.authorName || 'Üye'),
    authorSicil:'',
    authorRole:String(raw.authorRole || 'Üye'),
    createdAt:Number(raw.createdAt || 0),
    status:String(raw.status || 'active')
  };
}
function activeForumTopics(){
  return firebaseForumTopics
    .map(normalizeForumTopic)
    .filter(item=>item.status!=='deleted' && !isForumAuthorBlocked(item))
    .sort((a,b)=>(b.lastActivityAt || b.createdAt)-(a.lastActivityAt || a.createdAt));
}
function activeForumReplies(){
  return firebaseForumReplies
    .map(normalizeForumReply)
    .filter(item=>item.status!=='deleted' && !isForumAuthorBlocked(item))
    .sort((a,b)=>a.createdAt-b.createdAt);
}
function selectedForumTopic(){
  return activeForumTopics().find(item=>item.topicId===selectedForumTopicId || item.id===selectedForumTopicId) || null;
}
function canModerateForumItem(item){
  const session=getMemberSession();
  if(!session?.active || isGuestSession(session)) return false;
  if(isAdminSession(session)) return true;
  return !!item && String(item.authorUid || '') && String(item.authorUid)===String(session.uid || session.firebaseUid || '');
}
function forumAuthorBlockKey(item){
  return String(item?.authorUid || item?.authorNick || item?.authorName || '').trim();
}
function forumBlockedAuthors(){
  try{
    const parsed=JSON.parse(localStorage.getItem(FORUM_BLOCKED_AUTHORS_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  }catch(error){
    localStorage.removeItem(FORUM_BLOCKED_AUTHORS_KEY);
    return [];
  }
}
function saveForumBlockedAuthors(list=[]){
  const unique=[...new Set(list.map(String).filter(Boolean))];
  localStorage.setItem(FORUM_BLOCKED_AUTHORS_KEY, JSON.stringify(unique));
  scheduleUserDataSync('forum-blocked-authors');
}
function isForumAuthorBlocked(item){
  const key=forumAuthorBlockKey(item);
  return !!key && forumBlockedAuthors().includes(key);
}
function canUseForumSafetyAction(item){
  const session=getMemberSession();
  if(!session?.active || isGuestSession(session) || !item) return false;
  const ownId=String(session.uid || session.firebaseUid || '');
  return !ownId || String(item.authorUid || '')!==ownId;
}
function forumSafetyButtons(item,kind){
  if(!canUseForumSafetyAction(item)) return '';
  const blockKey=forumAuthorBlockKey(item);
  const name=item.authorName || 'Kullanıcı';
  if(kind==='reply'){
    return `<button type="button" class="forum-soft-btn" data-forum-report-reply="${esc(item.replyId)}">Şikayet Et</button>${blockKey ? `<button type="button" class="forum-soft-btn" data-forum-block-author="${esc(blockKey)}" data-forum-block-name="${esc(name)}">Kullanıcıyı Engelle</button>` : ''}`;
  }
  return `<button type="button" class="forum-soft-btn" data-forum-report-topic="${esc(item.topicId)}">Şikayet Et</button>${blockKey ? `<button type="button" class="forum-soft-btn" data-forum-block-author="${esc(blockKey)}" data-forum-block-name="${esc(name)}">Kullanıcıyı Engelle</button>` : ''}`;
}
function saveForumDraft(){
  const draft={
    category:el('forumCategory')?.value || 'gundem',
    nick:cleanForumNick(el('forumNick')?.value || localStorage.getItem(FORUM_NICK_KEY) || ''),
    title:el('forumTitle')?.value || '',
    body:el('forumBody')?.value || '',
    reply:el('forumReplyBody')?.value || ''
  };
  localStorage.setItem(FORUM_DRAFT_KEY, JSON.stringify(draft));
  scheduleUserDataSync('forum-draft');
}
function restoreForumDraft(){
  const raw=localStorage.getItem(FORUM_DRAFT_KEY);
  if(!raw) return;
  try{
    const draft=JSON.parse(raw);
    if(el('forumCategory')) el('forumCategory').value=draft.category || 'gundem';
    if(el('forumNick')) el('forumNick').value=cleanForumNick(draft.nick || localStorage.getItem(FORUM_NICK_KEY) || '') || generatedForumNick();
    if(el('forumTitle')) el('forumTitle').value=draft.title || '';
    if(el('forumBody')) el('forumBody').value=draft.body || '';
    if(el('forumReplyBody')) el('forumReplyBody').value=draft.reply || '';
  }catch(error){
    localStorage.removeItem(FORUM_DRAFT_KEY);
  }
}
function clearForumTopicDraft(){
  const reply=el('forumReplyBody')?.value || '';
  const nick=currentForumNick();
  localStorage.setItem(FORUM_DRAFT_KEY, JSON.stringify({category:'gundem',nick,title:'',body:'',reply}));
  scheduleUserDataSync('forum-draft');
  if(el('forumTitle')) el('forumTitle').value='';
  if(el('forumBody')) el('forumBody').value='';
}
function clearForumReplyDraft(){
  if(el('forumReplyBody')) el('forumReplyBody').value='';
  saveForumDraft();
}
function loadFirebaseForumTopics(force=false){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.loadForumTopics!=='function'){
    setForumStatus('Forum bağlantısı şu anda hazır değil. Sayfayı yenileyip tekrar deneyebilirsin.', 'warn');
    return false;
  }
  if(firebaseForumLoading || (firebaseForumLoaded && !force)) return true;
  firebaseForumLoading=true;
  setForumStatus('Forum başlıkları alınıyor...');
  try{
    bridge.loadForumTopics();
    return true;
  }catch(error){
    firebaseForumLoading=false;
    setForumStatus('Forum konuları alınamadı.', 'warn');
    return false;
  }
}
function loadFirebaseForumReplies(topicId){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.loadForumReplies!=='function' || !topicId) return false;
  firebaseForumRepliesLoading=true;
  try{
    bridge.loadForumReplies(String(topicId));
    return true;
  }catch(error){
    firebaseForumRepliesLoading=false;
    return false;
  }
}
function submitFirebaseForumTopic(){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.createForumTopic!=='function'){
    setForumStatus('Forum bağlantısı hazır değil. Sayfayı yenileyip tekrar deneyebilirsin.', 'warn');
    return false;
  }
  const title=String(el('forumTitle')?.value || '').trim();
  const body=String(el('forumBody')?.value || '').trim();
  if(title.length<4){
    setForumStatus('Konu başlığı en az 4 karakter olmalı.', 'warn');
    el('forumTitle')?.focus();
    return false;
  }
  if(body.length<10){
    setForumStatus('Konu metni en az 10 karakter olmalı.', 'warn');
    el('forumBody')?.focus();
    return false;
  }
  const payload={
    category:el('forumCategory')?.value || 'gundem',
    title,
    body,
    ...forumAuthorPayload()
  };
  try{
    bridge.createForumTopic(JSON.stringify(payload));
    setForumStatus('Konu yayınlanıyor...');
    return true;
  }catch(error){
    setForumStatus('Konu gönderilemedi.', 'warn');
    return false;
  }
}
function submitFirebaseForumReply(){
  const topic=selectedForumTopic();
  const bridge=firebaseBridge();
  if(!topic || !topic.topicId){
    setForumStatus('Cevap yazmak için önce bir konu seç.', 'warn');
    return false;
  }
  if(!bridge || typeof bridge.createForumReply!=='function'){
    setForumStatus('Cevap bağlantısı hazır değil. Sayfayı yenileyip tekrar deneyebilirsin.', 'warn');
    return false;
  }
  const body=String(el('forumReplyBody')?.value || '').trim();
  if(body.length<3){
    setForumStatus('Cevap metni en az 3 karakter olmalı.', 'warn');
    el('forumReplyBody')?.focus();
    return false;
  }
  try{
    bridge.createForumReply(JSON.stringify({topicId:topic.topicId,body,...forumAuthorPayload()}));
    setForumStatus('Cevap gönderiliyor...');
    return true;
  }catch(error){
    setForumStatus('Cevap gönderilemedi.', 'warn');
    return false;
  }
}
function deleteFirebaseForumTopic(topicId){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.deleteForumTopic!=='function' || !topicId) return false;
  if(!confirm('Bu forum konusunu kaldırmak istiyor musun?')) return false;
  try{
    bridge.deleteForumTopic(String(topicId));
    setForumStatus('Konu kaldırılıyor...');
    return true;
  }catch(error){
    setForumStatus('Konu kaldırılamadı.', 'warn');
    return false;
  }
}
function deleteFirebaseForumReply(topicId,replyId){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.deleteForumReply!=='function' || !topicId || !replyId) return false;
  if(!confirm('Bu cevabı kaldırmak istiyor musun?')) return false;
  try{
    bridge.deleteForumReply(String(topicId),String(replyId));
    setForumStatus('Cevap kaldırılıyor...');
    return true;
  }catch(error){
    setForumStatus('Cevap kaldırılamadı.', 'warn');
    return false;
  }
}
function reportFirebaseForumContent(payload){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.reportForumContent!=='function'){
    setForumStatus('Şikayet kaydı için Firebase forum köprüsünün güncel sürümü gerekli.', 'warn');
    return false;
  }
  const reason=prompt('Şikayet nedenini kısaca yazabilirsin:', 'Uygunsuz içerik');
  if(reason===null) return false;
  try{
    bridge.reportForumContent(JSON.stringify({...payload,reason:String(reason || '').trim() || 'Uygunsuz içerik'}));
    setForumStatus('Şikayet moderasyona gönderiliyor...');
    return true;
  }catch(error){
    setForumStatus('Şikayet gönderilemedi.', 'warn');
    return false;
  }
}
function reportForumTopic(topicId){
  const topic=activeForumTopics().find(item=>item.topicId===topicId || item.id===topicId);
  if(!topic) return false;
  return reportFirebaseForumContent({
    targetType:'topic',
    topicId:topic.topicId,
    targetAuthorUid:topic.authorUid,
    targetAuthorName:topic.authorName,
    title:topic.title
  });
}
function reportForumReply(replyId){
  const reply=activeForumReplies().find(item=>item.replyId===replyId || item.id===replyId);
  if(!reply) return false;
  return reportFirebaseForumContent({
    targetType:'reply',
    topicId:reply.topicId || selectedForumTopicId,
    replyId:reply.replyId,
    targetAuthorUid:reply.authorUid,
    targetAuthorName:reply.authorName
  });
}
function blockForumAuthor(authorKey,authorName='Kullanıcı'){
  const key=String(authorKey || '').trim();
  if(!key) return;
  if(!confirm(`${authorName} adlı kullanıcının forum içeriklerini bu cihazda gizlemek istiyor musun?`)) return;
  saveForumBlockedAuthors([...forumBlockedAuthors(), key]);
  setForumStatus(`${authorName} için içerikler gizlendi.`);
  if(selectedForumTopic() && isForumAuthorBlocked(selectedForumTopic())){
    selectedForumTopicId='';
    firebaseForumReplies=[];
  }
  renderForum();
}
function selectForumTopic(topicId,loadReplies=true){
  selectedForumTopicId=String(topicId || '');
  firebaseForumReplies=[];
  renderForum();
  if(loadReplies && selectedForumTopicId) loadFirebaseForumReplies(selectedForumTopicId);
}
function renderForum(){
  if(!el('forumTopicList')) return;
  const session=getMemberSession();
  if(!session?.active || isGuestSession(session)){
    setForumStatus('Forum alanı için onaylı üye girişi gerekir.', 'warn');
  }else if(firebaseForumLoading){
    setForumStatus('Forum başlıkları alınıyor...');
  }else if(firebaseLastMessage && currentPage==='form'){
    setForumStatus(firebaseLastMessage);
  }else{
    setForumStatus('');
  }
  renderForumTopicList();
  renderForumTopicDetail();
}
function renderForumTopicList(){
  const node=el('forumTopicList');
  if(!node) return;
  const allTopics=activeForumTopics();
  updateForumCategoryRail(allTopics);
  const topics=forumFilteredTopics(allTopics);
  if(el('forumTopicCount')){
    el('forumTopicCount').textContent=activeForumCategoryFilter==='all'
      ? `${topics.length} konu`
      : `${forumCategoryLabel(activeForumCategoryFilter)} · ${topics.length} konu`;
  }
  if(firebaseForumLoading){
    node.innerHTML='<div class="forum-empty">Konular yükleniyor...</div>';
    return;
  }
  if(!topics.length){
    node.innerHTML='<div class="forum-empty">Henüz konu yok.</div>';
    selectedForumTopicId='';
    firebaseForumReplies=[];
    return;
  }
  if(!selectedForumTopicId || !topics.some(item=>item.topicId===selectedForumTopicId)){
    selectedForumTopicId=topics[0].topicId;
    if(!firebaseForumRepliesLoading) loadFirebaseForumReplies(selectedForumTopicId);
  }
  node.innerHTML=topics.map(item=>{
    const active=item.topicId===selectedForumTopicId ? ' active' : '';
    const tone=forumCategoryTone(item.category);
    return `<button type="button" class="forum-topic-row${active}" data-forum-topic="${esc(item.topicId)}" data-tone="${esc(tone)}">
      <span class="forum-topic-avatar" data-tone="${esc(tone)}">
        <span class="forum-topic-avatar-initial">${esc(forumAuthorInitial(item.authorName))}</span>
        <span class="forum-topic-badge">${esc(forumCategoryIcon(item.category))}</span>
      </span>
      <span class="forum-topic-content">
        <span class="forum-topic-meta"><span class="forum-chip" data-tone="${esc(tone)}"><b>${esc(forumCategoryIcon(item.category))}</b>${esc(forumCategoryLabel(item.category))}</span><span>${esc(forumDateLabel(item.lastActivityAt || item.createdAt))}</span></span>
        <strong>${esc(item.title)}</strong>
        <span class="forum-topic-excerpt">${esc(forumExcerpt(item.body))}</span>
        <span class="forum-topic-author">${esc(item.authorName)}</span>
      </span>
      <span class="forum-topic-stat"><strong>${Number(item.replyCount)||0}</strong><small>Cevap</small></span>
    </button>`;
  }).join('');
}
function renderForumTopicDetail(){
  const node=el('forumTopicDetail');
  if(!node) return;
  const topic=selectedForumTopic();
  if(!topic){
    node.innerHTML='<div class="forum-empty">Konu seçilmedi.</div>';
    return;
  }
  const replies=activeForumReplies();
  const topicModeration=canModerateForumItem(topic)
    ? `<button type="button" class="forum-danger-btn" data-forum-delete-topic="${esc(topic.topicId)}">Konuyu Kaldır</button>`
    : '';
  const topicSafety=forumSafetyButtons(topic,'topic');
  const topicActions=(topicModeration || topicSafety)
    ? `<div class="forum-detail-actions">${topicModeration}${topicSafety}</div>`
    : '';
  const replyMarkup=firebaseForumRepliesLoading
    ? '<div class="forum-empty">Cevaplar yükleniyor...</div>'
    : replies.length
      ? `<div class="forum-reply-list">${replies.map(reply=>{
          const replyModeration=canModerateForumItem(reply)
            ? `<button type="button" class="forum-danger-btn" data-forum-delete-reply="${esc(reply.replyId)}">Cevabı Kaldır</button>`
            : '';
          const replySafety=forumSafetyButtons(reply,'reply');
          const replyActions=(replyModeration || replySafety)
            ? `<div class="forum-reply-actions">${replyModeration}${replySafety}</div>`
            : '';
          return `<div class="forum-reply-card">
            <span class="forum-reply-avatar">${esc(forumAuthorInitial(reply.authorName))}</span>
            <div class="forum-reply-content">
              <div class="forum-reply-meta"><span>${esc(reply.authorName)}</span><span>${esc(forumDateLabel(reply.createdAt))}</span></div>
              <p>${esc(reply.body)}</p>
            </div>
            ${replyActions}
          </div>`;
        }).join('')}</div>`
      : '<div class="forum-empty">Henüz cevap yok.</div>';
  const tone=forumCategoryTone(topic.category);
  node.innerHTML=`<div class="forum-detail-title">
    <div class="forum-detail-meta"><span class="forum-chip" data-tone="${esc(tone)}"><b>${esc(forumCategoryIcon(topic.category))}</b>${esc(forumCategoryLabel(topic.category))}</span><span>${esc(forumDateLabel(topic.createdAt))}</span><span>${esc(forumReplyLabel(topic.replyCount))}</span></div>
    <div class="forum-detail-main">
      <span class="forum-topic-avatar large" data-tone="${esc(tone)}">
        <span class="forum-topic-avatar-initial">${esc(forumAuthorInitial(topic.authorName))}</span>
        <span class="forum-topic-badge">${esc(forumCategoryIcon(topic.category))}</span>
      </span>
      <h3>${esc(topic.title)}</h3>
    </div>
    <div class="forum-detail-meta"><span>${esc(topic.authorName)}</span><span>${esc(topic.authorRole || 'Üye')}</span></div>
  </div>
  <p class="forum-detail-body">${esc(topic.body)}</p>
  ${topicActions}
  ${replyMarkup}`;
}
function initForum(){
  restoreForumDraft();
  if(el('forumNick') && !cleanForumNick(el('forumNick').value)) el('forumNick').value=generatedForumNick();
  renderForum();
  loadFirebaseForumTopics();
  if(selectedForumTopicId && !firebaseForumRepliesLoading) loadFirebaseForumReplies(selectedForumTopicId);
}
function normalizeAnnouncement(raw={}){
  return {
    id:String(raw.id || raw.announcementId || ''),
    announcementId:String(raw.announcementId || raw.id || ''),
    title:String(raw.title || ''),
    body:String(raw.body || raw.text || ''),
    label:String(raw.label || 'Duyuru'),
    href:String(raw.href || ''),
    target:String(raw.target || raw.publishTarget || 'app_platform'),
    audience:String(raw.audience || 'installed_members'),
    channel:String(raw.channel || 'app'),
    whatsappText:String(raw.whatsappText || ''),
    imageUrl:String(raw.imageUrl || ''),
    imageDataUrl:String(raw.imageDataUrl || ''),
    status:String(raw.status || 'active'),
    createdAt:Number(raw.createdAt || 0),
    authorUid:String(raw.authorUid || ''),
    installTokenCount:Number(raw.installTokenCount || raw.tokenCount || 0),
    broadcastStatus:String(raw.broadcastStatus || ''),
    pushSuccessCount:Number(raw.pushSuccessCount || raw.successCount || 0),
    pushFailureCount:Number(raw.pushFailureCount || raw.failureCount || 0)
  };
}
function loadLocalPlatformBulletins(){
  try{
    const parsed=JSON.parse(localStorage.getItem(PLATFORM_BULLETINS_STORAGE_KEY) || '[]');
    localPlatformBulletins=Array.isArray(parsed)
      ? parsed.map(normalizeAnnouncement).filter(item=>item.title && item.status!=='deleted').sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0)).slice(0,20)
      : [];
  }catch(error){
    localPlatformBulletins=[];
  }
}
function loadPlatformBulletinOverrides(){
  try{
    const parsed=JSON.parse(localStorage.getItem(PLATFORM_BULLETIN_OVERRIDES_STORAGE_KEY) || '{}');
    platformBulletinOverrides=parsed && typeof parsed==='object' && !Array.isArray(parsed) ? parsed : {};
  }catch(error){
    platformBulletinOverrides={};
  }
}
function savePlatformBulletinOverrides(){
  localStorage.setItem(PLATFORM_BULLETIN_OVERRIDES_STORAGE_KEY, JSON.stringify(platformBulletinOverrides));
}
function saveLocalPlatformBulletins(list=[]){
  localPlatformBulletins=Array.isArray(list)
    ? list.map(normalizeAnnouncement).filter(item=>item.title && item.status!=='deleted').sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0)).slice(0,20)
    : [];
  localStorage.setItem(PLATFORM_BULLETINS_STORAGE_KEY, JSON.stringify(localPlatformBulletins));
}
function addLocalPlatformBulletin(payload={}){
  const createdAt=Date.now();
  const item=normalizeAnnouncement({
    ...payload,
    id:payload.id || payload.announcementId || `platform_${createdAt}`,
    announcementId:payload.announcementId || payload.id || `platform_${createdAt}`,
    body:payload.body || payload.text || '',
    label:payload.label || 'Platform',
    target:payload.target || 'platform',
    channel:payload.channel || 'platform',
    status:'active',
    createdAt,
    authorUid:'local-admin'
  });
  saveLocalPlatformBulletins([item, ...localPlatformBulletins]);
  renderHomeBulletins();
  renderNotificationHistory();
  return item;
}
function updateLocalPlatformBulletin(id,payload={}){
  const targetId=String(id || '');
  let updated=null;
  localPlatformBulletins=localPlatformBulletins.map(item=>{
    const normalized=normalizeAnnouncement(item);
    const itemId=normalized.announcementId || normalized.id;
    if(itemId!==targetId) return item;
    updated=normalizeAnnouncement({
      ...normalized,
      ...payload,
      id:normalized.id || targetId,
      announcementId:targetId,
      body:payload.body || payload.text || normalized.body,
      status:'active',
      updatedAt:Date.now()
    });
    return updated;
  });
  saveLocalPlatformBulletins(localPlatformBulletins);
  renderHomeBulletins();
  renderNotificationHistory();
  return updated;
}
function removeLocalPlatformBulletin(id){
  const targetId=String(id || '');
  saveLocalPlatformBulletins(localPlatformBulletins.filter(item=>{
    const normalized=normalizeAnnouncement(item);
    return (normalized.announcementId || normalized.id)!==targetId;
  }));
  renderHomeBulletins();
  renderNotificationHistory();
}
function updateStaticPlatformBulletin(id,payload={}){
  const targetId=String(id || '');
  if(!HOME_BULLETINS.some(item=>item.id===targetId)) return null;
  const existing=staticPlatformBulletins().find(item=>item.id===targetId) || {};
  const updated={
    ...platformBulletinOverrides[targetId],
    ...payload,
    id:targetId,
    announcementId:targetId,
    text:payload.body || payload.text || existing.body || existing.text || '',
    body:payload.body || payload.text || existing.body || existing.text || '',
    label:payload.label || existing.label || 'Platform',
    target:payload.target || existing.target || 'platform',
    audience:payload.audience || existing.audience || 'approved_members',
    channel:payload.channel || existing.channel || 'platform',
    status:'active',
    updatedAt:Date.now()
  };
  platformBulletinOverrides[targetId]=updated;
  savePlatformBulletinOverrides();
  renderHomeBulletins();
  renderNotificationHistory();
  return updated;
}
function removeStaticPlatformBulletin(id){
  const targetId=String(id || '');
  if(!HOME_BULLETINS.some(item=>item.id===targetId)) return;
  platformBulletinOverrides[targetId]={
    ...(platformBulletinOverrides[targetId] || {}),
    status:'deleted',
    deletedAt:Date.now()
  };
  savePlatformBulletinOverrides();
  renderHomeBulletins();
  renderNotificationHistory();
}
function notificationHistoryItems(){
  return [
    ...staticPlatformBulletins().map(item=>({...normalizeAnnouncement(item), ...item, source:'Platform Bildirileri', sourceType:'static'})),
    ...localPlatformBulletins.map(item=>({...normalizeAnnouncement(item), source:'Platform Bildirileri', sourceType:'local'})),
    ...firebaseAnnouncements.map(item=>({...normalizeAnnouncement(item), source:'Firebase', sourceType:'firebase'}))
  ].filter(item=>item.status!=='deleted').sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));
}
function notificationItemId(item={}){
  return String(item.announcementId || item.id || '');
}
function notificationBroadcastStatusLabel(status=''){
  return {
    queued:'Push kuyruğa alındı',
    pending:'Push bekliyor',
    sent:'Push gönderildi',
    partial_failed:'Kısmi gönderildi',
    failed:'Push başarısız',
    no_tokens:'Yüklü cihaz yok',
    skipped:'Push atlanmış',
    updated:'Güncellendi',
    deleted:'Silindi'
  }[String(status || '')] || '';
}
function notificationDeliverySummary(item={}){
  const parts=[];
  const tokenCount=Number(item.installTokenCount || item.tokenCount || 0);
  if(tokenCount>0) parts.push(`${tokenCount} cihaz`);
  const status=notificationBroadcastStatusLabel(item.broadcastStatus);
  if(status) parts.push(status);
  if(item.pushSuccessCount) parts.push(`${item.pushSuccessCount} başarılı`);
  if(item.pushFailureCount) parts.push(`${item.pushFailureCount} hatalı`);
  return parts.join(' • ');
}
function notificationTargetLabel(target='app_platform'){
  return {
    app_platform:'Uygulama + Platform',
    platform:'Platform',
    app:'Uygulama'
  }[String(target || 'app_platform')] || 'Uygulama + Platform';
}
function notificationChannelLabel(channel='app'){
  return {
    both:'Push + WhatsApp',
    app:'Push',
    whatsapp:'WhatsApp',
    platform:'Platform'
  }[String(channel || 'app')] || 'Push';
}
function notificationAudienceLabel(audience='installed_members'){
  return {
    installed_members:'Yüklü Üyeler',
    approved_members:'Onaylı Üyeler',
    admins:'Yönetici'
  }[String(audience || 'installed_members')] || 'Yüklü Üyeler';
}
function renderNotificationMetrics(){
  const platformCount=homeBulletinItems().length;
  const pushItems=notificationHistoryItems()
    .filter(item=>announcementTargetsApp(item) && String(item.channel || 'app')!=='whatsapp')
    .sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));
  const latestPush=pushItems.find(item=>Number(item.installTokenCount || item.tokenCount || 0)>0 || item.broadcastStatus) || null;
  const tokenCount=pushItems.reduce((max,item)=>Math.max(max, Number(item.installTokenCount || item.tokenCount || 0)), 0);
  const statusLabel=notificationBroadcastStatusLabel(latestPush?.broadcastStatus || '') || 'Hazır';
  if(el('notificationMetricPlatform')) el('notificationMetricPlatform').textContent=String(platformCount);
  if(el('notificationMetricTokens')) el('notificationMetricTokens').textContent=String(tokenCount);
  if(el('notificationMetricPush')) el('notificationMetricPush').textContent=statusLabel;
}
function notificationItemById(id,sourceType=''){
  const targetId=String(id || '');
  return notificationHistoryItems().find(item=>notificationItemId(item)===targetId && (!sourceType || item.sourceType===sourceType));
}
function setNotificationEditMode(item={}){
  const normalized=normalizeAnnouncement(item);
  if(el('notificationEditingId')){
    el('notificationEditingId').value=notificationItemId(item);
    el('notificationEditingId').dataset.sourceType=item.sourceType || 'firebase';
  }
  if(el('notificationTitle')) el('notificationTitle').value=normalized.title || item.title || '';
  if(el('notificationBody')) el('notificationBody').value=normalized.body || item.text || '';
  if(el('notificationHref')) el('notificationHref').value=normalized.href || '';
  if(el('notificationLabel')) el('notificationLabel').value=normalized.label || 'Duyuru';
  if(el('notificationTarget')) el('notificationTarget').value=normalized.target || 'app_platform';
  if(el('notificationAudience')) el('notificationAudience').value=normalized.audience || 'installed_members';
  if(el('notificationChannel')) el('notificationChannel').value=normalized.channel || 'app';
  if(el('notificationImageUrl')) el('notificationImageUrl').value=normalized.imageUrl || '';
  notificationSelectedImageDataUrl=normalized.imageDataUrl || '';
  if(el('notificationWhatsappText')) el('notificationWhatsappText').value=normalized.whatsappText || '';
  if(el('sendNotificationBtn')) el('sendNotificationBtn').textContent='Duyuruyu Güncelle';
  el('cancelNotificationEditBtn')?.classList.remove('hidden');
  renderNotificationImagePreview();
  if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru düzenleme modunda. Değişiklikleri kaydetmek için Duyuruyu Güncelle butonunu kullan.';
}
function resetNotificationEditMode(){
  if(el('notificationEditingId')){
    el('notificationEditingId').value='';
    delete el('notificationEditingId').dataset.sourceType;
  }
  if(el('sendNotificationBtn')) el('sendNotificationBtn').textContent='Yayınla ve Paylaş';
  el('cancelNotificationEditBtn')?.classList.add('hidden');
}
function clearNotificationInputs(){
  if(el('notificationTitle')) el('notificationTitle').value='';
  if(el('notificationBody')) el('notificationBody').value='';
  if(el('notificationHref')) el('notificationHref').value='';
  if(el('notificationImageUrl')) el('notificationImageUrl').value='';
  if(el('notificationImageFile')) el('notificationImageFile').value='';
  if(el('notificationWhatsappText')) el('notificationWhatsappText').value='';
  notificationSelectedImageDataUrl='';
  resetNotificationEditMode();
  renderNotificationImagePreview();
}
function renderNotificationHistory(){
  const node=el('notificationHistory');
  if(!node){
    renderNotificationMetrics();
    return;
  }
  const list=notificationHistoryItems();
  node.innerHTML=list.length
    ? list.slice(0,20).map(item=>{
      const id=notificationItemId(item);
      const delivery=notificationDeliverySummary(item);
      return `<div class="preview-item notification-history-item">
        <div class="notification-history-main">
          <div class="notification-history-badges">
            <span>${esc(item.source || 'Duyuru')}</span>
            <span>${esc(item.label || 'Duyuru')}</span>
            <span>${esc(notificationTargetLabel(item.target))}</span>
            <span>${esc(notificationChannelLabel(item.channel))}</span>
            <span>${esc(notificationAudienceLabel(item.audience))}</span>
          </div>
          <div class="notification-history-title">${esc(item.title)}</div>
          ${item.body ? `<div class="notification-history-body">${esc(item.body)}</div>` : ''}
          <div class="notification-history-meta">${esc(item.createdAt ? new Date(item.createdAt).toLocaleString('tr-TR') : item.date || '-')}${delivery ? ' • '+esc(delivery) : ''}</div>
        </div>
        <div class="notification-history-actions">
          <button class="btn soft small" type="button" data-notification-edit="${esc(id)}" data-notification-source="${esc(item.sourceType || '')}">Düzenle</button>
          <button class="btn danger small" type="button" data-notification-delete="${esc(id)}" data-notification-source="${esc(item.sourceType || '')}">Sil</button>
        </div>
      </div>`;
    }).join('')
    : '<div class="preview-item"><div class="label">Duyuru</div><div class="value">Henüz yayınlanmış duyuru yok.</div></div>';
  renderNotificationMetrics();
}
function loadFirebaseAnnouncements(){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.loadAnnouncements!=='function'){
    renderHomeBulletins();
    renderNotificationHistory();
    return false;
  }
  firebaseAnnouncementsLoading=true;
  try{
    bridge.loadAnnouncements();
    return true;
  }catch(error){
    firebaseAnnouncementsLoading=false;
    renderHomeBulletins();
    renderNotificationHistory();
    return false;
  }
}
function notificationWhatsappText(payload={}){
  const manual=String(el('notificationWhatsappText')?.value || '').trim();
  const text=manual || `${payload.title || ''}\n\n${payload.body || ''}${payload.href ? `\n\n${payload.href}` : ''}`;
  return text.trim();
}
function notificationShareUrl(text){
  return `https://wa.me/?text=${encodeURIComponent(text || '')}`;
}
function openWhatsappShare(url=notificationLastWhatsappUrl){
  if(!url) return false;
  try{
    const opened=window.open(url,'_blank','noopener,noreferrer');
    if(!opened) window.location.href=url;
    return true;
  }catch(error){
    window.location.href=url;
    return true;
  }
}
function renderNotificationImagePreview(){
  const node=el('notificationImagePreview');
  if(!node) return;
  const src=notificationSelectedImageDataUrl || String(el('notificationImageUrl')?.value || '').trim();
  node.classList.toggle('hidden', !src);
  node.innerHTML=src
    ? `<img src="${esc(src)}" alt="" onerror="this.remove()"><div><strong>Seçili görsel</strong><span>Bu görsel Güncel Duyurular ve uygulama karşılama kartında kullanılır.</span></div>`
    : '';
}
function estimateDataUrlBytes(dataUrl=''){
  const value=String(dataUrl || '');
  const base64=value.includes(',') ? value.split(',').pop() : value;
  return Math.ceil((base64.length * 3) / 4);
}
function readFileAsDataUrl(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(String(reader.result || ''));
    reader.onerror=()=>reject(reader.error || new Error('Görsel okunamadı.'));
    reader.readAsDataURL(file);
  });
}
function loadImageForCompression(src){
  return new Promise((resolve,reject)=>{
    const image=new Image();
    image.onload=()=>resolve(image);
    image.onerror=()=>reject(new Error('Görsel sıkıştırma için açılamadı.'));
    image.src=src;
  });
}
async function compressNotificationImage(dataUrl){
  const image=await loadImageForCompression(dataUrl);
  const naturalWidth=image.naturalWidth || image.width || 1;
  const naturalHeight=image.naturalHeight || image.height || 1;
  const maxSide=1280;
  const ratio=Math.min(1, maxSide / Math.max(naturalWidth,naturalHeight));
  const width=Math.max(1, Math.round(naturalWidth * ratio));
  const height=Math.max(1, Math.round(naturalHeight * ratio));
  const canvas=document.createElement('canvas');
  canvas.width=width;
  canvas.height=height;
  const ctx=canvas.getContext('2d');
  if(!ctx) return dataUrl;
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,width,height);
  ctx.drawImage(image,0,0,width,height);
  let best=dataUrl;
  for(const quality of [0.82,0.74,0.66,0.58,0.5,0.42]){
    const compressed=canvas.toDataURL('image/jpeg',quality);
    if(estimateDataUrlBytes(compressed)<estimateDataUrlBytes(best)) best=compressed;
    if(estimateDataUrlBytes(compressed)<=700*1024) return compressed;
  }
  return best;
}
function handleNotificationImageFile(){
  const input=el('notificationImageFile');
  const file=input?.files?.[0];
  notificationSelectedImageDataUrl='';
  if(!file){
    renderNotificationImagePreview();
    return;
  }
  if(!/^image\/(png|jpe?g|webp|gif)$/i.test(file.type || '')){
    if(el('notificationStatus')) el('notificationStatus').textContent='Lütfen PNG, JPG, WEBP veya GIF formatında görsel seçin.';
    input.value='';
    renderNotificationImagePreview();
    return;
  }
  if(file.type==='image/gif' && file.size>700*1024){
    if(el('notificationStatus')) el('notificationStatus').textContent='GIF görseli çok büyük. Daha küçük bir GIF seç veya Görsel URL kullan.';
    input.value='';
    renderNotificationImagePreview();
    return;
  }
  if(el('notificationStatus')) el('notificationStatus').textContent=file.size>700*1024 ? 'Görsel büyük; uygulama için otomatik küçültülüyor...' : '';
  readFileAsDataUrl(file).then(async dataUrl=>{
    let nextDataUrl=dataUrl;
    if(file.size>700*1024 || estimateDataUrlBytes(nextDataUrl)>700*1024){
      nextDataUrl=await compressNotificationImage(dataUrl);
    }
    if(estimateDataUrlBytes(nextDataUrl)>700*1024){
      notificationSelectedImageDataUrl='';
      if(el('notificationStatus')) el('notificationStatus').textContent='Görsel otomatik küçültüldü ama hâlâ büyük. Daha düşük çözünürlüklü bir görsel seç veya Görsel URL kullan.';
      input.value='';
      renderNotificationImagePreview();
      return;
    }
    notificationSelectedImageDataUrl=nextDataUrl;
    if(el('notificationImageUrl')) el('notificationImageUrl').value='';
    if(el('notificationStatus')) el('notificationStatus').textContent='Görsel hazır. Duyuru yayınlandığında ana sayfa ve karşılama kartında kullanılacak.';
    renderNotificationImagePreview();
  }).catch(()=>{
    notificationSelectedImageDataUrl='';
    if(el('notificationStatus')) el('notificationStatus').textContent='Görsel okunamadı.';
    renderNotificationImagePreview();
  });
}
function finishNotificationMutation(message='Duyuru güncellendi.'){
  clearNotificationInputs();
  if(el('notificationStatus')) el('notificationStatus').textContent=message;
  const whatsappButton=el('openWhatsappShareBtn');
  if(whatsappButton) whatsappButton.classList.toggle('hidden', !notificationLastWhatsappUrl);
  if(notificationLastWhatsappUrl) openWhatsappShare(notificationLastWhatsappUrl);
  renderHomeBulletins();
  renderNotificationHistory();
}
function finishNotificationFallback(payload={},message='Duyuru Platform Bildirileri alanına eklendi.'){
  addLocalPlatformBulletin(payload);
  clearNotificationInputs();
  if(el('notificationStatus')) el('notificationStatus').textContent=message;
  const whatsappButton=el('openWhatsappShareBtn');
  if(whatsappButton) whatsappButton.classList.toggle('hidden', !notificationLastWhatsappUrl);
  if(notificationLastWhatsappUrl) openWhatsappShare(notificationLastWhatsappUrl);
}
function fallbackNotificationUpdate(){
  const pending=notificationPendingUpdate;
  if(!pending?.payload || !announcementTargetsPlatform(pending.payload)) return false;
  if(pending.sourceType==='static'){
    updateStaticPlatformBulletin(pending.id,pending.payload);
    finishNotificationMutation('Sabit Platform Bildirisi bu cihazda güncellendi. Firebase yazımı tamamlanamadı.');
  }else if(pending.sourceType==='local'){
    updateLocalPlatformBulletin(pending.id,pending.payload);
    finishNotificationMutation('Yerel Platform Bildirisi güncellendi.');
  }else{
    finishNotificationFallback(pending.payload,'Firebase güncellemesi tamamlanamadı; duyuru Platform Bildirileri alanına bu cihazda eklendi.');
  }
  return true;
}
function updateNotificationAnnouncement(id,sourceType,payload={}){
  const targetId=String(id || '');
  if(!targetId){
    if(el('notificationStatus')) el('notificationStatus').textContent='Düzenlenecek duyuru seçilemedi.';
    return;
  }
  if(sourceType==='static'){
    const bridge=firebaseBridge();
    if(bridge && typeof bridge.updateAnnouncement==='function'){
      try{
        notificationPendingUpdate={id:targetId,sourceType,payload};
        bridge.updateAnnouncement(JSON.stringify({...payload,id:targetId,announcementId:targetId}));
        updateStaticPlatformBulletin(targetId,payload);
        if(el('notificationStatus')) el('notificationStatus').textContent='Sabit Platform Bildirisi Firebase üzerinde güncelleniyor...';
        return;
      }catch(error){
        if(el('notificationStatus')) el('notificationStatus').textContent='Sabit duyuru Firebase üzerinde güncellenemedi; bu cihazda güncellendi.';
      }
    }
    updateStaticPlatformBulletin(targetId,payload);
    finishNotificationMutation('Sabit Platform Bildirisi bu cihazda güncellendi.');
    return;
  }
  if(sourceType==='local'){
    updateLocalPlatformBulletin(targetId,payload);
    finishNotificationMutation('Yerel Platform Bildirisi güncellendi.');
    return;
  }
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.updateAnnouncement!=='function'){
    if(el('notificationStatus')) el('notificationStatus').textContent='Bu duyuruyu güncellemek için Firebase duyuru köprüsünün güncel sürümü gerekli.';
    return;
  }
  try{
    notificationPendingUpdate={id:targetId,sourceType,payload};
    bridge.updateAnnouncement(JSON.stringify({...payload,id:targetId,announcementId:targetId}));
    if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru Firebase üzerinde güncelleniyor...';
  }catch(error){
    if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru güncellenemedi.';
  }
}
function deleteNotificationAnnouncement(id,sourceType){
  const targetId=String(id || '');
  if(!targetId) return;
  if(!confirm('Bu duyuruyu silmek istediğinize emin misiniz?')) return;
  if(sourceType==='static'){
    const bridge=firebaseBridge();
    if(bridge && typeof bridge.deleteAnnouncement==='function'){
      try{
        bridge.deleteAnnouncement(targetId);
        removeStaticPlatformBulletin(targetId);
        if(el('notificationStatus')) el('notificationStatus').textContent='Sabit Platform Bildirisi Firebase üzerinde siliniyor...';
        return;
      }catch(error){
        if(el('notificationStatus')) el('notificationStatus').textContent='Sabit duyuru Firebase üzerinde silinemedi; bu cihazda kaldırıldı.';
      }
    }
    removeStaticPlatformBulletin(targetId);
    if(el('notificationStatus')) el('notificationStatus').textContent='Sabit Platform Bildirisi bu cihazda kaldırıldı.';
    return;
  }
  if(sourceType==='local'){
    removeLocalPlatformBulletin(targetId);
    if(el('notificationStatus')) el('notificationStatus').textContent='Yerel Platform Bildirisi silindi.';
    return;
  }
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.deleteAnnouncement!=='function'){
    if(el('notificationStatus')) el('notificationStatus').textContent='Bu duyuruyu silmek için Firebase duyuru köprüsünün güncel sürümü gerekli.';
    return;
  }
  try{
    bridge.deleteAnnouncement(targetId);
    if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru Firebase üzerinde siliniyor...';
  }catch(error){
    if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru silinemedi.';
  }
}
function sendFirebaseAnnouncement(){
  const bridge=firebaseBridge();
  const title=String(el('notificationTitle')?.value || '').trim();
  const body=String(el('notificationBody')?.value || '').trim();
  if(!title || !body){
    if(el('notificationStatus')) el('notificationStatus').textContent='Başlık ve açıklama zorunlu.';
    return;
  }
  const target=String(el('notificationTarget')?.value || 'app_platform');
  const wantsApp=target==='app' || target==='app_platform';
  const wantsPlatform=target==='platform' || target==='app_platform';
  const canSendFirebase=!!(bridge && typeof bridge.createAnnouncement==='function');
  const channel=String(el('notificationChannel')?.value || 'both');
  const audience=String(el('notificationAudience')?.value || 'installed_members');
  const payload={
    title,
    body,
    href:String(el('notificationHref')?.value || '').trim(),
    label:String(el('notificationLabel')?.value || 'Duyuru').trim() || 'Duyuru',
    target,
    audience,
    channel,
    imageUrl:String(el('notificationImageUrl')?.value || '').trim(),
    imageDataUrl:notificationSelectedImageDataUrl,
    whatsappText:''
  };
  payload.whatsappText=notificationWhatsappText(payload);
  notificationLastWhatsappUrl=(channel==='both' || channel==='whatsapp') ? notificationShareUrl(payload.whatsappText) : '';
  const editingId=String(el('notificationEditingId')?.value || '').trim();
  const editingSource=String(el('notificationEditingId')?.dataset.sourceType || '');
  if(editingId){
    updateNotificationAnnouncement(editingId,editingSource,payload);
    return;
  }
  if(!canSendFirebase){
    if(wantsPlatform){
      addLocalPlatformBulletin(payload);
      clearNotificationInputs();
      if(el('notificationStatus')){
        el('notificationStatus').textContent=wantsApp
          ? 'Platform Bildirileri alanına bu cihazda eklendi. Uygulama bildirimi için Firebase duyuru köprüsü hazır değil.'
          : 'Platform Bildirileri alanına bu cihazda eklendi.';
      }
      const whatsappButton=el('openWhatsappShareBtn');
      if(whatsappButton) whatsappButton.classList.toggle('hidden', !notificationLastWhatsappUrl);
      if(notificationLastWhatsappUrl) openWhatsappShare(notificationLastWhatsappUrl);
      return;
    }
    if(el('notificationStatus')) el('notificationStatus').textContent='Uygulama bildirimi için Firebase duyuru köprüsü hazır değil.';
    return;
  }
  try{
    notificationPendingPublish={payload,wantsPlatform,wantsApp};
    bridge.createAnnouncement(JSON.stringify(payload));
    if(el('notificationStatus')) el('notificationStatus').textContent=wantsPlatform
      ? 'Duyuru uygulama bildirimi ve Platform Bildirileri için Firebase tarafına gönderiliyor...'
      : 'Uygulama bildirimi Firebase tarafına gönderiliyor...';
  }catch(error){
    notificationPendingPublish=null;
    if(wantsPlatform){
      finishNotificationFallback(payload,'Firebase duyuru yazımı başlatılamadı; Platform Bildirileri alanına bu cihazda eklendi.');
      return;
    }
    if(el('notificationStatus')) el('notificationStatus').textContent='Duyuru gönderilemedi.';
  }
}
window.onFirebaseBridgeResult=function(action,success,payloadJson,message){
  let payload={};
  try{ payload=payloadJson ? JSON.parse(payloadJson) : {}; }catch(error){ payload={}; }
  firebaseLastMessage=message || '';
  if(action==='submitMemberApplication'){
    if(success){
      const record=firebaseRecordFromPayload(payload);
      const mergedRecord={...getMembershipRecord(), ...record, applicationStatus:'pending_review'};
      saveMembershipRecord(mergedRecord);
      upsertMembershipRequest({...record, applicationStatus:'pending_review'});
      syncMembershipRecordToProfile(mergedRecord,{activate:true,feedback:true});
    }else{
      const current=getMembershipRecord();
      const queued={...current, applicationStatus:'pending_review', reviewNote:message || 'Firebase başvurusu bu cihazda beklemeye alındı; Firebase bağlantısı kontrol edilmeli.'};
      saveMembershipRecord(queued);
      upsertMembershipRequest(queued);
    }
    renderMembershipPreview(new Date().toLocaleString('tr-TR'));
    return;
  }
  if(action==='loadPendingMembers'){
    firebasePendingLoading=false;
    firebasePendingLoaded=true;
    firebasePendingLastFetch=Date.now();
    firebasePendingMembers=success && Array.isArray(payload)
      ? payload.map(firebaseRecordFromPayload)
      : [];
    renderMembershipPreview();
    return;
  }
  if(action==='loadMembers'){
    firebaseMembersLoading=false;
    firebaseMembersLoaded=true;
    firebaseMembersErrorMessage=success ? '' : (message || 'Firebase üye listesi alınamadı.');
    firebaseMembers=success && Array.isArray(payload)
      ? payload.map(item=>firebaseRecordFromPayload({...item, applicationStatus:item.applicationStatus || 'approved'}))
      : [];
    renderMemberList();
    return;
  }
  if(action==='updateMemberStatus'){
    if(success){
      const uid=payload.uid || payload.firebaseUid;
      firebasePendingMembers=firebasePendingMembers.filter(item=>(item.uid || item.firebaseUid)!==uid);
      if(payload.removedFromMembers || isBlockedMembershipStatus(payload.applicationStatus)){
        firebaseMembers=firebaseMembers.filter(item=>(item.uid || item.firebaseUid)!==uid);
        const session=getMemberSession();
        if(!isAdminSession(session) && (session?.uid===uid || session?.firebaseUid===uid)){
          clearMemberSession();
          setMembershipAuthMode('login');
        }else if(isAdminSession(session) && (session?.uid===uid || session?.firebaseUid===uid) && el('membershipAdminNotice')){
          el('membershipAdminNotice').textContent='Yönetici oturumu korunuyor. Aktif yönetici kaydı üyelikten çıkarılamaz.';
        }
      }
      if(selectedMembershipAdminRecord && membershipAdminRecordKey(selectedMembershipAdminRecord)===String(uid||'')){
        if(selectedMembershipAdminMode==='member' && !payload.removedFromMembers && !isBlockedMembershipStatus(payload.applicationStatus)){
          selectedMembershipAdminRecord={...selectedMembershipAdminRecord, ...payload};
        }else{
          setMembershipAdminSelection(null,'application');
        }
      }
      firebasePendingLoaded=false;
      loadFirebasePendingMembers(true);
      loadFirebaseMembers(true);
      if(el('membershipAdminNotice')) el('membershipAdminNotice').textContent=message || 'Üyelik işlemi Firebase üzerinde tamamlandı.';
    }else if(el('membershipAdminNotice')){
      el('membershipAdminNotice').textContent=message || 'Firebase üyelik işlemi tamamlanamadı. Admin oturumu korunuyor.';
    }
    renderMembershipPreview();
    return;
  }
  if(action==='deleteMyData'){
    if(success){
      clearAllUserDataLocal();
      setMembershipAuthMode('choice');
      renderMembershipPreview();
      setPage('membership');
    }
    if(el('memberLoginStatus')) el('memberLoginStatus').textContent=message || (success ? 'Uygulama verilerin silindi.' : 'Veri silme işlemi tamamlanamadı.');
    return;
  }
  if(action==='updateMemberProfile'){
    if(success && payload && typeof payload==='object'){
      const mergedRecord={...getMembershipRecord(), ...payload};
      saveMembershipRecord(mergedRecord);
    }
    return;
  }
  if(action==='loadUserSyncData'){
    userSyncLoading=false;
    if(success && payload && typeof payload==='object'){
      applyUserSyncData(payload,userSyncForceApply);
      if(el('memberLoginStatus')) el('memberLoginStatus').textContent='Oturum açık. Telefon, web ve Android verileri Firebase üzerinden eşitlendi.';
    }
    userSyncForceApply=false;
    return;
  }
  if(action==='updateUserSyncData'){
    if(success && payload?.updatedAt) localStorage.setItem(USER_SYNC_UPDATED_KEY, String(payload.updatedAt));
    return;
  }
  if(action==='submitExchangeRequest'){
    if(success) loadFirebaseExchangeMatches(exchangeFormData());
    renderExchangeRequest();
    if(el('exchangeStatus')) el('exchangeStatus').textContent=message || (success ? 'Becayiş talebi Firebase eşleşme havuzuna kaydedildi.' : 'Becayiş talebi Firebase havuzuna kaydedilemedi.');
    return;
  }
  if(action==='deleteExchangeRequest'){
    if(success){
      firebaseExchangeMatches=[];
      applyExchangeRequest(defaultExchangeRequest());
      renderExchangeRequest(defaultExchangeRequest());
    }
    if(el('exchangeStatus')) el('exchangeStatus').textContent=message || (success ? 'Becayiş talebi silindi.' : 'Becayiş talebi silinemedi.');
    return;
  }
  if(action==='loadExchangeMatches'){
    firebaseExchangeLoading=false;
    firebaseExchangeMatches=success && Array.isArray(payload)
      ? payload.map(item=>({...defaultExchangeRequest(), ...item}))
      : [];
    renderExchangeRequest();
    if(el('exchangeStatus') && success && firebaseExchangeMatches.length){
      el('exchangeStatus').textContent=`${firebaseExchangeMatches.length} uygun becayiş eşleşmesi bulundu. Karttaki WhatsApp, Ara, SMS veya E-posta butonuyla iletişime geçebilirsin.`;
    }
    return;
  }
  if(action==='loadForumTopics'){
    firebaseForumLoading=false;
    firebaseForumLoaded=success || firebaseForumLoaded;
    if(success && Array.isArray(payload)){
      firebaseForumTopics=payload.map(normalizeForumTopic);
    }else{
      setForumStatus(message || 'Forum konuları şu anda yenilenemedi. Mevcut liste korunuyor.', 'warn');
    }
    if(!selectedForumTopicId && firebaseForumTopics.length){
      selectedForumTopicId=activeForumTopics()[0]?.topicId || '';
      if(selectedForumTopicId) loadFirebaseForumReplies(selectedForumTopicId);
    }
    renderForum();
    return;
  }
  if(action==='createForumTopic'){
    if(success){
      const topic=normalizeForumTopic(payload);
      firebaseForumTopics=[topic, ...firebaseForumTopics.filter(item=>normalizeForumTopic(item).topicId!==topic.topicId)];
      selectedForumTopicId=topic.topicId;
      firebaseForumReplies=[];
      clearForumTopicDraft();
      if(topic.topicId) loadFirebaseForumReplies(topic.topicId);
    }else{
      setForumStatus(message || 'Konu gönderilemedi.', 'warn');
    }
    renderForum();
    return;
  }
  if(action==='loadForumReplies'){
    firebaseForumRepliesLoading=false;
    if(success && Array.isArray(payload)){
      firebaseForumReplies=payload.map(normalizeForumReply);
    }
    renderForum();
    return;
  }
  if(action==='createForumReply'){
    if(success){
      const reply=normalizeForumReply(payload);
      firebaseForumReplies=[...firebaseForumReplies.filter(item=>normalizeForumReply(item).replyId!==reply.replyId), reply];
      clearForumReplyDraft();
      loadFirebaseForumTopics(true);
      if(reply.topicId || selectedForumTopicId) loadFirebaseForumReplies(reply.topicId || selectedForumTopicId);
    }
    renderForum();
    return;
  }
  if(action==='deleteForumTopic'){
    if(success){
      const topicId=String(payload.topicId || payload.id || selectedForumTopicId || '');
      firebaseForumTopics=firebaseForumTopics.filter(item=>normalizeForumTopic(item).topicId!==topicId);
      if(selectedForumTopicId===topicId) selectedForumTopicId='';
      firebaseForumReplies=[];
      loadFirebaseForumTopics(true);
    }
    renderForum();
    return;
  }
  if(action==='deleteForumReply'){
    if(success){
      const replyId=String(payload.replyId || payload.id || '');
      firebaseForumReplies=firebaseForumReplies.filter(item=>normalizeForumReply(item).replyId!==replyId);
      loadFirebaseForumTopics(true);
    }
    renderForum();
    return;
  }
  if(action==='reportForumContent'){
    setForumStatus(message || (success ? 'Şikayet moderasyon kuyruğuna gönderildi.' : 'Şikayet gönderilemedi.'), success ? 'info' : 'warn');
    return;
  }
  if(action==='loadAnnouncements'){
    firebaseAnnouncementsLoading=false;
    if(success && Array.isArray(payload)){
      firebaseAnnouncements=payload.map(normalizeAnnouncement).sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));
    }else if(el('notificationStatus') && currentPage==='notifications'){
      el('notificationStatus').textContent=message || 'Duyurular şu anda yenilenemedi; mevcut liste korunuyor.';
    }
    renderHomeBulletins();
    renderNotificationHistory();
    const latest=firebaseAnnouncements.find(item=>String(item.status||'active')==='active' && announcementTargetsApp(item));
    if(latest) showAnnouncementWelcome(latest);
    return;
  }
  if(action==='createAnnouncement'){
    if(success){
      notificationPendingPublish=null;
      const item=normalizeAnnouncement(payload);
      firebaseAnnouncements=[item, ...firebaseAnnouncements.filter(existing=>normalizeAnnouncement(existing).announcementId!==item.announcementId)];
      clearNotificationInputs();
      if(el('notificationStatus')){
        const delivery=notificationDeliverySummary(item);
        el('notificationStatus').textContent=message || (delivery ? `Duyuru yayınlandı. ${delivery}.` : 'Duyuru yayınlandı.');
      }
      const whatsappButton=el('openWhatsappShareBtn');
      if(whatsappButton) whatsappButton.classList.toggle('hidden', !notificationLastWhatsappUrl);
      if(notificationLastWhatsappUrl) openWhatsappShare(notificationLastWhatsappUrl);
      loadFirebaseAnnouncements();
    }else{
      const pending=notificationPendingPublish;
      notificationPendingPublish=null;
      if(pending?.wantsPlatform && pending.payload){
        finishNotificationFallback(pending.payload,'Firebase duyuru yazımı tamamlanamadı; Platform Bildirileri alanına bu cihazda eklendi.');
      }else if(el('notificationStatus')){
        el('notificationStatus').textContent=message || 'Duyuru yayınlanamadı.';
      }
    }
    renderHomeBulletins();
    renderNotificationHistory();
    return;
  }
  if(action==='updateAnnouncement'){
    if(success){
      notificationPendingUpdate=null;
      const item=normalizeAnnouncement(payload);
      firebaseAnnouncements=[item, ...firebaseAnnouncements.filter(existing=>normalizeAnnouncement(existing).announcementId!==item.announcementId)];
      finishNotificationMutation(message || 'Duyuru güncellendi.');
      loadFirebaseAnnouncements();
    }else{
      const handled=fallbackNotificationUpdate();
      notificationPendingUpdate=null;
      if(!handled && el('notificationStatus')) el('notificationStatus').textContent=message || 'Duyuru güncellenemedi.';
    }
    renderHomeBulletins();
    renderNotificationHistory();
    return;
  }
  if(action==='deleteAnnouncement'){
    if(success){
      const deletedId=String(payload.announcementId || payload.id || '');
      firebaseAnnouncements=firebaseAnnouncements.filter(existing=>normalizeAnnouncement(existing).announcementId!==deletedId);
      resetNotificationEditMode();
      if(el('notificationStatus')) el('notificationStatus').textContent=message || 'Duyuru silindi.';
      loadFirebaseAnnouncements();
    }else if(el('notificationStatus')){
      el('notificationStatus').textContent=message || 'Duyuru silinemedi.';
    }
    renderHomeBulletins();
    renderNotificationHistory();
    return;
  }
  if(action==='registerNotificationToken'){
    if(currentPage==='notifications' && el('notificationStatus')){
      el('notificationStatus').textContent=success
        ? 'Bu cihaz uygulama bildirimleri için kayıtlı.'
        : (message || 'Bu cihazın bildirim kaydı tamamlanamadı.');
    }
    renderNotificationHistory();
    return;
  }
  if(action==='ensureSeededAdminSession'){
    clearTimeout(firebaseAdminFallbackTimer);
    if(success){
      const record=firebaseRecordFromPayload(payload);
      saveMembershipRecord(record);
        openAdminSessionLocally();
        registerNotificationToken();
        window.setTimeout(()=>loadUserDataSync(true),250);
        firebasePendingLoaded=false;
        loadFirebasePendingMembers(true);
      loadFirebaseMembers(true);
      if(currentPage==='membership') setPage('home');
      else updateTopbarSlogan();
    }else{
      openAdminSessionLocally();
      firebasePendingLoaded=false;
      const fallbackMessage=isFirebaseAuthSetupMessage(message)
        ? 'Firebase Authentication henüz aktif değil. Test için admin oturumu bu cihazda açıldı; farklı telefondan onay için Firebase Console > Authentication > Email/Password aktif edilmeli.'
        : `${message || 'Firebase admin senkronu tamamlanamadı.'} Yerel admin oturumu açık kalacak.`;
      if(el('memberLoginStatus')) el('memberLoginStatus').textContent=fallbackMessage;
      if(currentPage==='membership') setPage('home');
      else updateTopbarSlogan();
      renderMembershipPreview();
      return;
    }
    renderMembershipPreview();
    return;
  }
  if(action==='loginMember' || action==='loadCurrentMember'){
    if(success){
      const record=firebaseRecordFromPayload(payload);
      saveMembershipRecord(record);
      const memberRole=record.memberRole==='admin' || record.isAdmin ? 'admin' : 'member';
      const isApproved=memberRole==='admin' || record.applicationStatus==='approved';
      if(!isApproved){
        clearMemberSession();
        renderMembershipPreview();
        setMembershipAuthMode('login');
        if(el('memberLoginStatus')){
          const statusText=record.applicationStatus==='pending_review'
            ? 'Giriş bilgileri doğru, ancak üyelik yönetim onayı bekliyor. Admin onayından sonra içerikler açılır.'
            : record.applicationStatus==='rejected'
              ? 'Giriş bilgileri doğru, fakat üyelik başvurusu reddedilmiş görünüyor.'
              : record.applicationStatus==='removed'
                ? 'Giriş bilgileri doğru, fakat üyelik yönetici tarafından çıkarılmış.'
                : 'Giriş bilgileri doğru, ancak üyelik henüz onaylı değil.';
          el('memberLoginStatus').textContent=statusText;
        }
        return;
      }
      saveMemberSession({
        active:true,
        uid:record.uid || record.firebaseUid || '',
        firebaseUid:record.firebaseUid || record.uid || '',
        role:memberRole,
        sicil:String(record.sicil||''),
        email:record.email || record.authEmail || '',
        phone:record.phone || '',
        fullName:record.fullName || '',
        loginAt:new Date().toLocaleString('tr-TR')
      });
      registerNotificationToken();
      syncMembershipRecordToProfile(record,{activate:true,feedback:true});
      window.setTimeout(()=>loadUserDataSync(true),250);
      renderMembershipPreview();
      if(action==='loginMember') setPage('home');
      else updateTopbarSlogan();
    }else{
      if(action==='loginMember') clearMemberSession();
      renderMembershipPreview();
      if(el('memberLoginStatus')) el('memberLoginStatus').textContent=message || 'Üye girişi tamamlanamadı. Sicil/e-posta ve parolayı kontrol et.';
    }
  }
};
function defaultMembershipRecord(){
  return {
    fullName:'',
    sicil:'',
    company:'TCDD',
    role:'',
    unit:'',
    city:'',
    phone:'',
    email:'',
    password:'',
    type:'standart',
    notifyChannel:'push',
    note:'',
    kvkkInfoRead:false,
    kvkkConsent:false,
    notifyConsent:false,
    contactConsent:false,
    conductConsent:false,
    applicationStatus:'draft',
    savedAt:'',
    submittedAt:'',
    reviewedAt:'',
    reviewNote:''
  };
}
function getMembershipRecord(){
  const raw=localStorage.getItem(MEMBERSHIP_FORM_KEY);
  if(!raw) return defaultMembershipRecord();
  try{
    return {...defaultMembershipRecord(), ...JSON.parse(raw)};
  }catch(error){
    localStorage.removeItem(MEMBERSHIP_FORM_KEY);
    return defaultMembershipRecord();
  }
}
function saveMembershipRecord(record){
  localStorage.setItem(MEMBERSHIP_FORM_KEY, JSON.stringify({...defaultMembershipRecord(), ...record}));
}
function membershipRequestKey(record){
  const sicil=String(record?.sicil || '').trim();
  const email=normalizeEmail(record?.email);
  return sicil || email || String(record?.requestId || Date.now());
}
function getMembershipRequests(){
  const raw=localStorage.getItem(MEMBERSHIP_REQUESTS_KEY);
  if(!raw) return [];
  try{
    const list=JSON.parse(raw);
    return Array.isArray(list) ? list.map(item=>({...defaultMembershipRecord(), ...item})) : [];
  }catch(error){
    localStorage.removeItem(MEMBERSHIP_REQUESTS_KEY);
    return [];
  }
}
function saveMembershipRequests(list){
  localStorage.setItem(MEMBERSHIP_REQUESTS_KEY, JSON.stringify(list));
}
function upsertMembershipRequest(record){
  const key=membershipRequestKey(record);
  const next={...defaultMembershipRecord(), ...record, requestId:key};
  const list=getMembershipRequests();
  const index=list.findIndex(item=>membershipRequestKey(item)===key);
  if(index>=0) list[index]=next;
  else list.unshift(next);
  saveMembershipRequests(list);
  return next;
}
function pendingMembershipRequests(){
  return getMembershipRequests().filter(item=>item.applicationStatus==='pending_review');
}
function latestPendingMembership(){
  return pendingMembershipRequests()[0] || null;
}
function updateMembershipRequestStatus(record,nextStatus,reviewNote){
  const key=membershipRequestKey(record);
  const reviewedAt=new Date().toLocaleString('tr-TR');
  const list=getMembershipRequests();
  const index=list.findIndex(item=>membershipRequestKey(item)===key);
  const current=index>=0 ? list[index] : record;
  const makeAdmin=nextStatus==='make_admin' || nextStatus==='admin';
  const removeAdmin=nextStatus==='remove_admin';
  const next={...defaultMembershipRecord(), ...current, applicationStatus:(makeAdmin || removeAdmin) ? 'approved' : nextStatus, reviewedAt, reviewNote:reviewNote || ''};
  if(makeAdmin){
    next.memberRole='admin';
    next.isAdmin=true;
    next.type='admin';
    next.role='Yönetici';
  }else if(removeAdmin){
    next.memberRole='member';
    next.isAdmin=false;
    next.type='standart';
    if(next.role==='Yönetici') next.role='';
  }else if(nextStatus==='removed' || nextStatus==='rejected'){
    next.memberRole='member';
    next.isAdmin=false;
  }
  if(index>=0) list[index]=next;
  else list.unshift(next);
  saveMembershipRequests(list);
  return next;
}
function getMemberSession(){
  const raw=localStorage.getItem(MEMBER_SESSION_KEY);
  if(!raw) return null;
  try{
    return JSON.parse(raw);
  }catch(error){
    localStorage.removeItem(MEMBER_SESSION_KEY);
    return null;
  }
}
function saveMemberSession(session){
  localStorage.setItem(MEMBER_SESSION_KEY, JSON.stringify(session));
  window.setTimeout(()=>loadFirebaseAnnouncements(),0);
}
function clearMemberSession(){
  localStorage.removeItem(MEMBER_SESSION_KEY);
}
function normalizeEmail(value){
  return String(value||'').trim().toLowerCase();
}
function isAdminSession(session=getMemberSession()){
  return !!(session?.active && ['admin','manager','yonetici'].includes(String(session.role||'').toLowerCase()));
}
function isGuestSession(session=getMemberSession()){
  return !!(session?.active && session.role==='guest');
}
function isApprovedMemberSession(session=getMemberSession(), record=getMembershipRecord()){
  if(!session?.active) return false;
  if(isAdminSession(session)) return true;
  return session.role==='member' && record.applicationStatus==='approved' && String(session.sicil||'')===String(record.sicil||'');
}
function canAccessPage(page){
  const session=getMemberSession();
  if(page==='notifications') return isAdminSession(session);
  if(PUBLIC_PAGES.has(page)) return true;
  if(isGuestSession(session)) return GUEST_ALLOWED_PAGES.has(page);
  return isApprovedMemberSession(session);
}
function isSeededAdminLogin(identifier,password){
  const login=normalizeEmail(identifier);
  return (login===SEEDED_ADMIN_ACCOUNT.sicil || login===SEEDED_ADMIN_ACCOUNT.email)
    && String(password||'')===SEEDED_ADMIN_ACCOUNT.password;
}
function membershipShell(){
  return el('membership')?.querySelector('.membership-shell') || null;
}
function setMembershipAuthMode(mode='choice'){
  const shell=membershipShell();
  if(!shell) return;
  shell.classList.remove('auth-choice','auth-login','auth-signup','auth-admin');
  shell.classList.add(`auth-${mode}`);
}
function showMembershipGateNotice(message){
  membershipGateMessage=message || '';
}
function pendingMembershipCount(record=getMembershipRecord()){
  if(firebasePendingMembers.length) return firebasePendingMembers.length;
  const queued=pendingMembershipRequests().length;
  return queued || (record.applicationStatus==='pending_review' ? 1 : 0);
}
function updateMembershipNavBadge(record=getMembershipRecord()){
  document.querySelectorAll('.nav-btn[data-page="membership"]').forEach(button=>{
    const pending=pendingMembershipCount(record);
    button.textContent=isAdminSession() && pending ? `Üyelik • ${pending}` : 'Üyelik';
  });
}
function renderMembershipGateHome(record=getMembershipRecord()){
  const node=el('membershipGateHome');
  if(!node) return;
  const session=getMemberSession();
  const ready=isApprovedMemberSession(session,record);
  const adminReady=isAdminSession(session);
  const guest=isGuestSession(session);
  const copy=node.querySelector('.membership-gate-copy');
  const button=node.querySelector('button');
  if(adminReady){
    node.classList.add('hidden');
    return;
  }
  if(session?.active && !guest && !adminReady){
    node.classList.add('hidden');
    return;
  }
  if(ready && !adminReady){
    node.classList.add('hidden');
    return;
  }
  node.classList.remove('hidden');
  node.classList.toggle('member-ready', ready || guest);
  if(copy){
    copy.innerHTML=ready
      ? `<strong>${adminReady?'Admin oturumu açık.':'Üye oturumu açık.'}</strong><span>Platform başlıklarına erişim aktif. İstersen üyelik ekranından oturumu yönetebilirsin.</span>`
      : guest
        ? '<strong>Misafir girişi açık.</strong><span>Şimdilik sadece Mevzuat ve Misafirhaneler alanlarına erişebilirsin.</span>'
      : '<strong>İçeriklere giriş için üyelik gerekir.</strong><span>Üyelik, hesap yönetimi, personel kartı, takvim ve becayiş özellikleri yönetim onaylı üye girişiyle kullanılır.</span>';
  }
  if(button) button.textContent=(ready || guest) ? 'Üyelik Paneli' : 'Üye Girişi';
}
function renderMembershipUserNotice(record,status){
  const node=el('membershipUserNotice');
  if(!node) return;
  node.className='work-sync-note membership-user-notice';
  if(membershipGateMessage){
    node.textContent=membershipGateMessage;
    node.classList.add('blocked');
    membershipGateMessage='';
    return;
  }
  const session=getMemberSession();
  if(isAdminSession(session)){
    node.textContent='Admin oturumu açık. Başvuru durumu ve yönetim onayı alanları sadece admin/yöneticilere gösteriliyor.';
    node.classList.add('ready');
    return;
  }
  if(isGuestSession(session)){
    node.textContent='Misafir girişi açık. Sadece Mevzuat ve Misafirhaneler alanlarına erişebilirsin.';
    node.classList.add('waiting');
    return;
  }
  if(isApprovedMemberSession(session,record)){
    node.textContent='Üye oturumu açık. Artık platform başlıklarına giriş yapabilirsin.';
    node.classList.add('ready');
    return;
  }
  if(record.applicationStatus==='approved'){
    node.textContent='Başvurun onaylandı. İçeriklere girmek için sicil/e-posta ve parolanla üye girişi yap.';
    node.classList.add('ready');
    return;
  }
  if(record.applicationStatus==='pending_review'){
    node.textContent=firebaseLastMessage && firebaseLastMessage.includes('Firebase')
      ? firebaseLastMessage
      : 'Başvurun yönetime gönderildi. Onay ekranı ve başvuru durumu sadece admin/yöneticilerde görünür.';
    node.classList.add('waiting');
    return;
  }
  if(record.applicationStatus==='revision_requested'){
    node.textContent='Başvuru için revize istendi. Eksik bilgileri tamamlayıp yeniden onaya gönderebilirsin.';
    node.classList.add('waiting');
    return;
  }
  if(record.applicationStatus==='rejected'){
    node.textContent='Başvuru reddedildi. Gerekirse bilgileri güncelleyip yeniden başvuru oluşturabilirsin.';
    node.classList.add('blocked');
    return;
  }
  if(record.applicationStatus==='removed'){
    node.textContent='Üyelik yönetici tarafından çıkarıldı. Erişim kapalıdır.';
    node.classList.add('blocked');
    return;
  }
  node.textContent=status.ready
    ? 'Başvuru hazır. Onaya Gönder butonuyla yönetici onayına gönderebilirsin.'
    : 'İçeriklere giriş için üyelik başvurusu ve yönetim onayı gerekir.';
}
function updateMembershipAccessUi(record=getMembershipRecord(),status=membershipFormStatus(record)){
  const session=getMemberSession();
  const admin=isAdminSession();
  if(admin) setMembershipAuthMode('admin');
  const canLogout=!!(session?.active && !isGuestSession(session));
  el('topbarLogoutBtn')?.classList.add('hidden');
  el('navDrawerSession')?.classList.toggle('hidden', !canLogout);
  el('navDrawerLogoutBtn')?.classList.toggle('hidden', !canLogout);
  el('homeManagementPanel')?.classList.toggle('hidden', !admin);
  el('membershipStatusPanel')?.classList.toggle('hidden', !admin);
  el('membershipAdminArea')?.classList.toggle('hidden', !admin);
  const notice=el('membershipAdminNotice');
  if(notice){
    if(admin) loadFirebasePendingMembers();
    const pending=pendingMembershipCount(record);
    notice.textContent=pending
      ? `${pending} yeni üyelik başvurusu onay bekliyor.`
      : firebasePendingLoading
        ? 'Firebase onay kuyruğu kontrol ediliyor...'
        : firebaseBridge()
          ? (firebaseLastMessage || 'Firebase onay kuyruğunda yeni başvuru bulunmuyor.')
          : 'Bu cihazda yeni üyelik başvurusu bulunmuyor. Firebase bağlantısı yoksa sadece yerel başvurular görünür.';
    notice.classList.toggle('show', admin);
  }
  renderMembershipUserNotice(record,status);
  renderMembershipGateHome(record);
  updateMembershipNavBadge(record);
}
function normalizeMemberRegion(value=''){
  const raw=String(value || '').trim();
  if(!raw) return '';
  if(TCDD_REGION_OPTIONS.includes(raw)) return raw;
  const key=normalizeEmail(raw);
  const direct=TCDD_REGION_OPTIONS.find(option=>{
    const optionKey=normalizeEmail(option);
    return optionKey.includes(key) || key.includes(optionKey);
  });
  if(direct) return direct;
  return exchangeRegionForCity(raw) || raw;
}
function membershipFormData(){
  if(!el('memberFullName')) return null;
  return {
    fullName:sval('memberFullName'),
    sicil:sval('memberSicil'),
    company:sval('memberCompany'),
    role:sval('memberRole'),
    unit:normalizeMemberRegion(sval('memberUnit')),
    city:sval('memberCity'),
    phone:sval('memberPhone'),
    email:sval('memberEmail'),
    password:sval('memberPassword'),
    passwordConfirm:sval('memberPasswordConfirm'),
    type:sval('memberType'),
    notifyChannel:sval('memberNotifyChannel'),
    note:String(el('memberNote')?.value || '').trim(),
    kvkkInfoRead:!!el('kvkkInfoRead')?.checked,
    kvkkConsent:!!el('kvkkConsent')?.checked,
    notifyConsent:!!el('notifyConsent')?.checked,
    contactConsent:!!el('contactConsent')?.checked,
    conductConsent:!!el('conductConsent')?.checked,
    reviewNote:String(el('membershipReviewNote')?.value || '').trim()
  };
}
function setFieldValue(id,value=''){
  const node=el(id);
  if(!node) return;
  const safe=String(value || '');
  if(node.tagName==='SELECT' && safe && !Array.from(node.options).some(option=>option.value===safe)){
    const option=document.createElement('option');
    option.value=safe;
    option.textContent=safe;
    node.appendChild(option);
  }
  node.value=safe;
}
function applyMembershipForm(data){
  if(!el('memberFullName')) return;
  el('memberFullName').value=data.fullName||'';
  el('memberSicil').value=data.sicil||'';
  el('memberCompany').value=data.company||'TCDD';
  setFieldValue('memberRole', data.role || '');
  el('memberUnit').value=normalizeMemberRegion(data.unit || data.city || '');
  el('memberCity').value=data.city||'';
  el('memberPhone').value=data.phone||'';
  el('memberEmail').value=data.email||'';
  if(el('memberPassword')) el('memberPassword').value=data.password||'';
  if(el('memberPasswordConfirm')) el('memberPasswordConfirm').value=data.password||'';
  el('memberType').value=data.type||'standart';
  el('memberNotifyChannel').value=data.notifyChannel||'push';
  el('memberNote').value=data.note||'';
  el('kvkkInfoRead').checked=!!data.kvkkInfoRead;
  el('kvkkConsent').checked=!!data.kvkkConsent;
  el('notifyConsent').checked=!!data.notifyConsent;
  el('contactConsent').checked=!!data.contactConsent;
  if(el('conductConsent')) el('conductConsent').checked=!!data.conductConsent;
  if(el('membershipReviewNote')) el('membershipReviewNote').value=data.reviewNote||'';
}
function membershipFormStatus(data){
  if(!data) return {ready:false, missing:[]};
  const missing=[];
  if(!data.fullName) missing.push('Ad Soyad');
  if(!data.sicil) missing.push('Sicil');
  if(!data.unit) missing.push('Bölge');
  if(!data.company) missing.push('Kurum');
  if(!data.phone && !data.email) missing.push('Telefon veya E-posta');
  if(!data.password) missing.push('Parola');
  if(data.password && String(data.password).length<6) missing.push('Parola en az 6 karakter');
  if(data.password && data.passwordConfirm!==undefined && data.passwordConfirm!==data.password) missing.push('Parola tekrar');
  if(!data.kvkkInfoRead) missing.push('KVKK Metni');
  if(!data.kvkkConsent) missing.push('KVKK Onayı');
  if(!data.contactConsent) missing.push('İletişim Onayı');
  if(!data.conductConsent) missing.push('Sorumluluk Onayı');
  return {ready:missing.length===0, missing};
}
function membershipStatusView(record,status){
  switch(record.applicationStatus){
    case 'pending_review': return {text:'Yönetim Onayı Bekliyor', tone:'pending'};
    case 'approved': return {text:'Onaylandı', tone:'ready'};
    case 'revision_requested': return {text:'Revize Gerekli', tone:'warning'};
    case 'rejected': return {text:'Reddedildi', tone:'danger'};
    case 'removed': return {text:'Üyelikten Çıkarıldı', tone:'danger'};
    default: return {text:status.ready?'Başvuru Hazır':'Taslak', tone:status.ready?'ready':'pending'};
  }
}
function membershipTimelineLabel(record){
  if(record.reviewedAt) return `${record.applicationStatus==='approved'?'Onay':record.applicationStatus==='rejected'?'Ret':record.applicationStatus==='removed'?'Çıkarma':'Revize'} • ${record.reviewedAt}`;
  if(record.submittedAt) return `Başvuru • ${record.submittedAt}`;
  return record.savedAt ? `Taslak • ${record.savedAt}` : 'Henüz kaydedilmedi';
}
function renderMembershipAdmin(record,status){
  const selectedMember=adminSelectedMemberRecord();
  const queued=adminSelectedApplicationRecord();
  const reviewRecord=isAdminSession() && (selectedMember || queued) ? (selectedMember || queued) : record;
  const reviewStatus=membershipFormStatus(reviewRecord);
  if(el('membershipReviewMeta')){
    el('membershipReviewMeta').textContent=reviewRecord.applicationStatus==='approved'
      ? 'Başvuru yönetim tarafından onaylandı. Üye artık sicil/e-posta ve parolasıyla uygulamaya giriş yapabilir.'
      : reviewRecord.applicationStatus==='pending_review'
        ? 'Başvuru Firebase onay kuyruğunda yönetim onayı bekliyor. Onay veya ret kararı üye kontrol panelinden verilir.'
      : 'Üyelik başvurusu KVKK onaylarıyla kaydedilir. Gizlilik politikası ve hesap silme yolları demiryolcu.com.tr üzerinde yayınlanmıştır.';
  }
  if(!el('membershipAdminPreview')) return;
  const isMemberSelection=!!selectedMember;
  const statusView=membershipStatusView(reviewRecord,reviewStatus);
  const pendingCount=pendingMembershipCount(record);
  const activeCount=uniqueMembershipList().length;
  el('membershipDecisionActions')?.classList.toggle('hidden', isMemberSelection);
  el('memberManagementActions')?.classList.remove('hidden');
  if(el('membershipAdminSummary')){
    el('membershipAdminSummary').innerHTML=[
      ['Bekleyen', pendingCount || 0, pendingCount ? 'warn' : 'good'],
      ['Aktif Üye', activeCount || 0, 'good']
    ].map(([label,value,tone])=>`<div class="membership-admin-stat ${tone || ''}"><div class="k">${esc(label)}</div><div class="v">${esc(value)}</div></div>`).join('');
  }
  const reviewNoteValue=String(el('membershipReviewNote')?.value || reviewRecord.reviewNote || '').trim();
  const profileCompany=reviewRecord.profileCompany || reviewRecord.company;
  const profilePostabasi=String(reviewRecord.profilePostabasi || reviewRecord.postabasi || '')==='1' || reviewRecord.profilePostabasi===true;
  const identityName=reviewRecord.fullName || reviewRecord.profileFullName || 'İsimsiz başvuru';
  const identityRegion=reviewRecord.unit || reviewRecord.profileBolge || reviewRecord.city || '-';
  const identityRole=reviewRecord.role || reviewRecord.profileTerfiBilgisi || '-';
  const identityProfession=reviewRecord.profileTerfiBilgisi || reviewRecord.role || '';
  const statusText=statusView.text;
  const identityInitials=identityName.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part.charAt(0)).join('').toLocaleUpperCase('tr-TR') || 'Ü';
  const infoRow=([label,value,missing])=>`<div class="membership-review-row ${missing ? 'missing' : ''}">
    <span class="membership-review-row-icon">${esc(String(label || 'Ü').charAt(0).toLocaleUpperCase('tr-TR'))}</span>
    <span class="membership-review-row-copy"><em>${esc(label)}</em><strong>${esc(value || '-')}</strong></span>
    <span class="membership-review-chevron" aria-hidden="true">›</span>
  </div>`;
  const groupMarkup=(title,items,letter,tone='blue')=>`<div class="membership-review-group tone-${esc(tone)}">
    <h5><span>${esc(letter)}</span>${esc(title)}</h5>
    <div class="membership-review-rows">${items.map(infoRow).join('')}</div>
  </div>`;
  const summaryItems=[
    ['Ad Soyad', reviewRecord.fullName || reviewRecord.profileFullName || '-'],
    ['Çalışma Bölgesi', reviewRecord.unit || reviewRecord.profileBolge || reviewRecord.city || '-'],
    ['Görev', reviewRecord.role || reviewRecord.profileTerfiBilgisi || '-']
  ];
  const contactItems=[
    ['Sicil', reviewRecord.sicil || reviewRecord.profileSicil || '-'],
    ['Kurum', companyLabel(profileCompany)],
    ['Şehir', reviewRecord.city || '-'],
    ['Telefon', reviewRecord.phone || '-'],
    ['E-posta', reviewRecord.email || reviewRecord.authEmail || '-'],
    ['Üyelik Tipi', reviewRecord.type || 'standart'],
    ['Yetki', reviewRecord.memberRole==='admin' || reviewRecord.isAdmin ? 'Yönetici' : 'Standart Üye'],
    ['Bildirim Kanalı', reviewRecord.notifyChannel || '-']
  ];
  const approvalItems=[
    ['KVKK Metni', reviewRecord.kvkkInfoRead ? 'Okundu' : 'Eksik', !reviewRecord.kvkkInfoRead],
    ['KVKK Onayı', reviewRecord.kvkkConsent ? 'Var' : 'Eksik', !reviewRecord.kvkkConsent],
    ['İletişim Onayı', reviewRecord.contactConsent ? 'Var' : 'Eksik', !reviewRecord.contactConsent],
    ['Sorumluluk Onayı', reviewRecord.conductConsent ? 'Kabul edildi' : 'Eksik', !reviewRecord.conductConsent],
    ['Bildirim İzni', reviewRecord.notifyConsent ? 'Açık' : 'Kapalı'],
    ['Eksik Alanlar', reviewStatus.missing.length ? reviewStatus.missing.join(', ') : 'Yok', !!reviewStatus.missing.length]
  ];
  const profileItems=[
    ['Çalışma Düzeni', workScheduleLabel({calismaModeli:reviewRecord.profileCalismaModeli || reviewRecord.calismaModeli || 'NORMAL_9'})],
    ['Meslek / Skala', `${reviewRecord.profileWorkerType || reviewRecord.workerType || '-'} • ${reviewRecord.profileSkala || reviewRecord.skala || '-'} Skala`],
    ['Derece / Kademe', `${reviewRecord.profileDegree || reviewRecord.degree || '-'} / ${reviewRecord.profileKademe || reviewRecord.kademe || '-'}`],
    ['Giriş', `${reviewRecord.profileGirisYili || reviewRecord.girisYili || '-'} / ${reviewRecord.profileGirisAy || reviewRecord.girisAy || '-'}`],
    ['Askerlik', reviewRecord.profileMilitaryAfterStart || reviewRecord.militaryAfterStart || '-'],
    ['Devreden İzin', reviewRecord.profileCarryAnnualLeave || reviewRecord.carryAnnualLeave || '0'],
    ['Postabaşı', profilePostabasi ? 'Aktif' : 'Pasif'],
    ['Terfi Bilgisi', reviewRecord.profileTerfiBilgisi || reviewRecord.terfiBilgisi || reviewRecord.role || '-'],
    ['Zaman Çizgisi', membershipTimelineLabel(reviewRecord)],
    ['Yönetim Notu', reviewRecord.reviewNote || 'Yok']
  ];
  el('membershipAdminPreview').innerHTML=`<div class="membership-admin-detail">
      <div class="membership-admin-section membership-review-card">
      <div class="membership-review-profile">
        <span class="membership-review-kicker">${isMemberSelection ? 'Üye Kartı' : 'Başvuru Kartı'}</span>
        ${profileAvatarMarkup(identityProfession, identityInitials, 'membership-review-avatar')}
        <h4>${esc(identityName)}</h4>
        <p>${esc(identityRegion)} • ${esc(identityRole)}</p>
        <span class="status-pill ${esc(statusView.tone)}">${esc(statusText)}</span>
      </div>
      <div class="membership-review-main">
        ${groupMarkup('Başvuru Özeti', summaryItems, 'B', 'blue')}
        <div class="field membership-review-note"><label>Kontrol Notu</label><input id="membershipReviewNote" type="text" value="${esc(reviewNoteValue)}" placeholder="Örn: Telefon teyidi yapıldı, evrak kontrol edildi"></div>
        ${isMemberSelection ? groupMarkup('İletişim ve Üyelik', contactItems, 'İ', 'pink') : ''}
      </div>
    </div>
  </div>`;
}
function renderMembershipLoginState(record){
  if(!el('memberLoginStatus')) return;
  const session=getMemberSession();
  el('accountDeleteCard')?.classList.toggle('hidden', !(session?.active && !isGuestSession(session)));
  if(isAdminSession(session)){
    el('memberLoginStatus').textContent=`Admin oturumu açık • ${session.loginAt || '-'}`;
    return;
  }
  if(isGuestSession(session)){
    el('memberLoginStatus').textContent=`Misafir oturumu açık • Mevzuat ve Misafirhaneler erişimi aktif`;
    return;
  }
  if(isApprovedMemberSession(session,record)){
    el('memberLoginStatus').textContent=`Üye oturumu açık • ${session.loginAt || '-'}`;
    return;
  }
  if(record.applicationStatus==='approved'){
    el('memberLoginStatus').textContent='Başvuru onaylı. Sicil/e-posta ve parola ile giriş yapılabilir.';
    return;
  }
  if(record.applicationStatus==='pending_review'){
    el('memberLoginStatus').textContent='Başvuru beklemede. Yönetim onayı olmadan üye girişi açılmaz.';
    return;
  }
  if(record.applicationStatus==='removed'){
    el('memberLoginStatus').textContent='Bu üyelik yönetici tarafından çıkarıldı. Erişim kapalı.';
    return;
  }
  el('memberLoginStatus').textContent='Üye girişi için onaylı başvuru ve parola gerekir. Admin girişi için kayıtlı sicil/e-posta ve admin parolası kullanılır.';
}
function renderMembershipPreview(savedAt='Henüz kaydedilmedi'){
  if(!el('membershipStatus') || !el('membershipPreview')) return;
  const data={...getMembershipRecord(), ...(membershipFormData() || {})};
  const status=membershipFormStatus(data);
  const statusView=membershipStatusView(data,status);
  const statusNode=el('membershipStatus');
  statusNode.className=`status-pill ${statusView.tone}`;
  statusNode.textContent=statusView.text;
  const kvkkState=data.kvkkInfoRead && data.kvkkConsent && data.contactConsent && data.conductConsent ? 'Hazır' : 'Eksik';
  const previewItems=[
    ['Ad Soyad', data.fullName || '-'],
    ['Sicil', data.sicil || '-'],
    ['Kurum / Görev', `${companyLabel(data.company)}${data.role ? ' • '+data.role : ''}`],
    ['İletişim', `${data.phone || '-'}${data.email ? ' • '+data.email : ''}`],
    ['Bildirim', `${data.notifyChannel || '-'}${data.notifyConsent ? ' • Açık' : ' • Kapalı'}`],
    ['KVKK', kvkkState],
    ['Başvuru Durumu', statusView.text],
    ['Eksik Alanlar', status.missing.length ? status.missing.join(', ') : 'Yok'],
    ['Son Kayıt', data.savedAt || savedAt]
  ];
  el('membershipPreview').innerHTML=previewItems.map(([label,value])=>`<div class="preview-item ${label==='Eksik Alanlar' && value!=='Yok'?'missing':''}"><div class="label">${label}</div><div class="value">${value}</div></div>`).join('');
  renderMembershipAdmin(data,status);
  renderMembershipLoginState(data);
  updateMembershipAccessUi(data,status);
  if(!el('memberListPanel')?.classList.contains('hidden')) renderMemberList();
}
function saveMembershipForm(){
  if(!el('memberFullName')) return;
  const current=getMembershipRecord();
  const data={...current, ...membershipFormData()};
  delete data.passwordConfirm;
  const savedAt=new Date().toLocaleString('tr-TR');
  saveMembershipRecord({...data,savedAt});
  renderMembershipPreview(savedAt);
}
function clearMembershipForm(){
  if(!el('memberFullName')) return;
  applyMembershipForm(defaultMembershipRecord());
  localStorage.removeItem(MEMBERSHIP_FORM_KEY);
  if(!isAdminSession()) clearMemberSession();
  renderMembershipPreview();
}
function submitMembershipForm(){
  if(!el('memberFullName')) return;
  const current=getMembershipRecord();
  const data={...current, ...membershipFormData()};
  const status=membershipFormStatus(data);
  if(!status.ready){
    alert(`Başvuru eksik. Tamamlanması gereken alanlar: ${status.missing.join(', ')}`);
    return;
  }
  delete data.passwordConfirm;
  const now=new Date().toLocaleString('tr-TR');
  const pendingRecord=attachProfileToMembershipRecord({...data, applicationStatus:'pending_review', savedAt:current.savedAt || now, submittedAt:now, reviewedAt:'', reviewNote:String(el('membershipReviewNote')?.value || '').trim()});
  saveMembershipRecord(pendingRecord);
  upsertMembershipRequest(pendingRecord);
  syncMembershipRecordToProfile(pendingRecord,{activate:true,feedback:true});
  if(!submitFirebaseMembership(pendingRecord)){
    const queued={...pendingRecord, reviewNote:'Firebase bağlantısı kurulamadı. Başvuru bu cihazda beklemede; farklı cihazdan görülebilmesi için Firebase bağlantısı gereklidir.'};
    saveMembershipRecord(queued);
    upsertMembershipRequest(queued);
  }
  renderMembershipPreview(now);
  setMembershipAuthMode('login');
  if(el('memberLoginStatus')) el('memberLoginStatus').textContent='Başvurun onaya gönderildi. Onay sonrası sicil/e-posta ve parolanla buradan giriş yapabilirsin.';
  el('memberLoginSicil')?.focus();
}
function openAdminSessionLocally(){
  saveMemberSession({
    active:true,
    uid:SEEDED_ADMIN_ACCOUNT.uid,
    firebaseUid:SEEDED_ADMIN_ACCOUNT.uid,
    role:SEEDED_ADMIN_ACCOUNT.role,
    sicil:SEEDED_ADMIN_ACCOUNT.sicil,
    email:SEEDED_ADMIN_ACCOUNT.email,
    phone:'05322774019',
    fullName:SEEDED_ADMIN_ACCOUNT.fullName,
    loginAt:new Date().toLocaleString('tr-TR')
  });
  firebasePendingLoaded=false;
}
function updateMembershipDecision(nextStatus){
  if(!isAdminSession()){
    alert('Bu işlem sadece admin veya yönetici oturumunda yapılabilir.');
    return;
  }
  const selectedMember=adminSelectedMemberRecord();
  const selectedApplication=adminSelectedApplicationRecord();
  const current=selectedMember || selectedApplication;
  const selectionMode=selectedMember ? 'member' : 'application';
  const isMemberAction=['removed','make_admin','admin','remove_admin'].includes(nextStatus);
  if(isMemberAction && !selectedMember){
    alert('Bu işlem için önce Üye Listesi içinden aktif üyeyi seç. Onay kuyruğundaki başvurular için Onayla veya Reddet kullan.');
    return;
  }
  const hasExplicitTarget=!!selectedMember || !!(selectedMembershipAdminMode==='application' && selectedMembershipAdminRecord) || !!latestFirebasePendingMember() || !!latestPendingMembership();
  if(!current.fullName || !current.sicil){
    alert(isMemberAction ? 'Bu işlem için önce Üye Listesi veya Onay Kuyruğu içinden kişiyi seç.' : 'Önce üyelik başvurusu kaydedilmeli.');
    return;
  }
  if(!hasExplicitTarget && membershipRecordMatchesSession(current)){
    alert('İşlem yapılacak başvuru veya üye seçilemedi. Önce Onay Kuyruğu ya da Üye Listesi içinden kişiyi seç.');
    return;
  }
  if(nextStatus==='removed' && (membershipRecordMatchesSession(current) || isProtectedAdminMembershipRecord(current))){
    alert('Güvenlik nedeniyle aktif yönetici hesabı veya yönetici kaydı üyelikten çıkarılamaz. Önce farklı bir standart üyeyi seç.');
    return;
  }
  const reviewNote=String(el('membershipReviewNote')?.value || '').trim();
  if((current.uid || current.firebaseUid) && updateFirebaseMemberStatus(current,nextStatus,reviewNote)){
    return;
  }
  const updated=updateMembershipRequestStatus(current,nextStatus,reviewNote);
  const touchesCurrentSession=membershipRecordMatchesSession(updated);
  if(touchesCurrentSession){
    saveMembershipRecord(updated);
    applyMembershipForm(updated);
  }
  if(isMemberAction) setMembershipAdminSelection(updated,selectionMode);
  else setMembershipAdminSelection(null,'application');
  const notice=el('membershipAdminNotice');
  if(notice){
    const name=updated.fullName || updated.sicil || 'Seçili kayıt';
    notice.textContent=`${name} için üyelik işlemi tamamlandı. Admin oturumu korunuyor.`;
  }
  renderMembershipPreview(updated.savedAt || updated.reviewedAt);
}
function fillMembershipFromProfile(){
  const profile=formProfile();
  if(!profile.fullName && !profile.sicil){
    alert('Önce personel kartında aktif bir kişi seç.');
    return;
  }
  if(el('memberFullName')) el('memberFullName').value=profile.fullName || '';
  if(el('memberSicil')) el('memberSicil').value=profile.sicil || '';
  if(el('memberCompany')) el('memberCompany').value=profile.company || 'TCDD';
  setFieldValue('memberRole', profile.terfiBilgisi || workScheduleLabel(profile));
  if(el('memberUnit')) el('memberUnit').value=normalizeMemberRegion(profile.bolge || '');
  if(el('memberCity') && !el('memberCity').value) el('memberCity').value=profile.bolge || '';
  renderMembershipPreview();
}
function memberPhoneLast4(value){
  const digits=String(value||'').replace(/\D/g,'');
  return digits.slice(-4);
}
function attemptMembershipLogin(silent=false){
  const record=getMembershipRecord();
  const identifier=sval('memberLoginSicil').trim();
  const login=normalizeEmail(identifier);
  const password=String(el('memberLoginPassword')?.value || '');
  if(!identifier || !password){
    if(!silent && el('memberLoginStatus')) el('memberLoginStatus').textContent='Sicil/e-posta ve parola zorunlu.';
    return;
  }
  if(isSeededAdminLogin(identifier,password)){
    const bridge=firebaseBridge();
    openAdminSessionLocally();
    firebaseLastMessage='Admin oturumu açıldı. Firebase onay kuyruğu arka planda kontrol ediliyor...';
    renderMembershipPreview();
    setPage('home');
    loadFirebasePendingMembers(true);
    loadFirebaseMembers(true);
    if(bridge && typeof bridge.ensureSeededAdminSession==='function'){
      ensureFirebaseAdminSession(password);
    }
    return;
  }
  const bridge=firebaseBridge();
  if(bridge && typeof bridge.loginMember==='function'){
    firebaseLastMessage='Firebase üye girişi kontrol ediliyor...';
    try{
      bridge.loginMember(identifier,password);
    }catch(error){
      firebaseLastMessage='Firebase üye girişi başlatılamadı.';
    }
    return;
  }
  if(record.applicationStatus!=='approved'){
    if(silent) return;
    renderMembershipLoginState(record);
    return;
  }
  const recordEmail=normalizeEmail(record.email);
  if(login!==String(record.sicil||'') && login!==recordEmail){
    if(!silent && el('memberLoginStatus')) el('memberLoginStatus').textContent='Sicil/e-posta eşleşmedi. Onaylı başvuru bilgilerini kontrol et.';
    return;
  }
  if(password!==String(record.password||'')){
    if(!silent && el('memberLoginStatus')) el('memberLoginStatus').textContent='Parola eşleşmedi.';
    return;
  }
  saveMemberSession({active:true,role:'member',sicil:String(record.sicil||''),email:record.email||'',fullName:record.fullName||'',loginAt:new Date().toLocaleString('tr-TR')});
  syncMembershipRecordToProfile(record,{activate:true,feedback:true});
  renderMembershipPreview();
  setPage('home');
}
function logoutMembershipSession(){
  clearTimeout(userSyncTimer);
  userSyncLoading=false;
  const bridge=firebaseBridge();
  if(bridge && typeof bridge.signOut==='function'){
    try{ bridge.signOut(); }catch(error){}
  }
  clearMemberSession();
  setMembershipAuthMode('choice');
  renderMembershipPreview();
  setPage('membership');
}
function clearAllUserDataLocal(){
  [
    MEMBERSHIP_FORM_KEY,
    MEMBERSHIP_REQUESTS_KEY,
    MEMBER_SESSION_KEY,
    PROFILES_STORAGE_KEY,
    LAST_PROFILE_KEY,
    LEAVE_STORAGE_KEY,
    WORK_LOG_STORAGE_KEY,
    SALARY_FORM_STORAGE_KEY,
    EXCHANGE_REQUEST_KEY
  ].forEach(key=>localStorage.removeItem(key));
  profilesCache=null;
  leaveStoreCache=null;
  workLogStoreCache=null;
  firebaseMembers=[];
  firebasePendingMembers=[];
  firebaseExchangeMatches=[];
  selectedMembershipAdminRecord=null;
  selectedMembershipAdminMode='application';
  selectedMemberListKey='';
}
function requestDeleteMyData(){
  const message='Tüm üyelik, personel kartı, maaş formu, izin, çalışma takvimi ve becayiş verilerin bu cihazdan silinecek. Firebase hesabınla ilişkili uygulama üyelik/becayiş kayıtları da silinmeye çalışılacak. Devam edilsin mi?';
  if(!confirm(message)) return;
  const bridge=firebaseBridge();
  if(bridge && typeof bridge.deleteMyData==='function'){
    try{
      bridge.deleteMyData();
      if(el('memberLoginStatus')) el('memberLoginStatus').textContent='Veri silme isteği Firebase’e gönderiliyor...';
      return;
    }catch(error){}
  }
  clearAllUserDataLocal();
  setMembershipAuthMode('choice');
  renderMembershipPreview();
  setPage('membership');
  if(el('memberLoginStatus')) el('memberLoginStatus').textContent='Bu cihazdaki uygulama verilerin silindi. Firebase hesabı için hesap silme bağlantısını kullanabilirsin.';
}
function guestMembershipLogin(){
  saveMemberSession({active:true,role:'guest',loginAt:new Date().toLocaleString('tr-TR')});
  renderMembershipPreview();
  setPage('home');
}
function scheduleAutoMembershipLogin(){
  clearTimeout(membershipLoginTimer);
  membershipLoginTimer=window.setTimeout(()=>{
    const identifier=sval('memberLoginSicil').trim();
    const password=String(el('memberLoginPassword')?.value || '');
    if(identifier && password) attemptMembershipLogin(true);
  }, 650);
}
function focusMembershipLogin(){
  const session=getMemberSession();
  if(session?.active && !isGuestSession(session)){
    setPage('membership');
    setMembershipAuthMode(isAdminSession(session) ? 'admin' : 'login');
    renderMembershipPreview();
    el('membership')?.scrollIntoView({behavior:'smooth',block:'start'});
    return;
  }
  setMembershipAuthMode('login');
  el('authLoginCard')?.scrollIntoView({behavior:'smooth',block:'center'});
  window.setTimeout(()=>el('memberLoginSicil')?.focus(), 320);
}
function focusMembershipSignup(){
  setMembershipAuthMode('signup');
  el('membershipSignupHero')?.scrollIntoView({behavior:'smooth',block:'start'});
  window.setTimeout(()=>el('memberFullName')?.focus(), 320);
}
function loadMembershipForm(){
  if(!el('memberFullName')) return;
  const data=getMembershipRecord();
  applyMembershipForm(data);
  renderMembershipPreview(data.savedAt || 'Henüz kaydedilmedi');
}

function defaultExchangeRequest(){
  return {
    currentRegion:'',
    currentCity:'',
    currentDistrict:'',
    targetRegion:'',
    targetCity:'',
    targetDistrict:'',
    company:'TCDD',
    role:'',
    workType:'normal',
    notify:'push',
    phone:'',
    email:'',
    note:'',
    savedAt:''
  };
}
function getExchangeRequest(){
  const raw=localStorage.getItem(EXCHANGE_REQUEST_KEY);
  if(!raw) return defaultExchangeRequest();
  try{
    return {...defaultExchangeRequest(), ...JSON.parse(raw)};
  }catch(error){
    localStorage.removeItem(EXCHANGE_REQUEST_KEY);
    return defaultExchangeRequest();
  }
}
function exchangeFormData(){
  if(!el('exchangeCurrentCity')) return defaultExchangeRequest();
  const session=getMemberSession() || {};
  const record=getMembershipRecord();
  const phone=sval('exchangePhone').trim() || session.phone || record.phone || '';
  const email=sval('exchangeEmail').trim() || session.email || record.email || record.authEmail || '';
  return {
    currentRegion:sval('exchangeCurrentRegion').trim(),
    currentCity:sval('exchangeCurrentCity').trim(),
    currentDistrict:sval('exchangeCurrentDistrict').trim(),
    targetRegion:sval('exchangeTargetRegion').trim(),
    targetCity:sval('exchangeTargetCity').trim(),
    targetDistrict:sval('exchangeTargetDistrict').trim(),
    company:sval('exchangeCompany'),
    role:sval('exchangeRole').trim(),
    workType:sval('exchangeWorkType'),
    notify:sval('exchangeNotify'),
    phone,
    email,
    note:sval('exchangeNote').trim(),
    ownerName:session.fullName || '',
    ownerSicil:session.sicil || '',
    ownerEmail:email,
    ownerPhone:phone,
    savedAt:getExchangeRequest().savedAt || ''
  };
}
function applyExchangeRequest(data){
  if(!el('exchangeCurrentCity')) return;
  populateExchangeSelects();
  setExchangeSelectValue('exchangeCurrentRegion', data.currentRegion||'');
  setExchangeSelectValue('exchangeCurrentCity', data.currentCity||'');
  el('exchangeCurrentDistrict').value=data.currentDistrict||'';
  setExchangeSelectValue('exchangeTargetRegion', data.targetRegion||'');
  setExchangeSelectValue('exchangeTargetCity', data.targetCity||'');
  el('exchangeTargetDistrict').value=data.targetDistrict||'';
  el('exchangeCompany').value=data.company||'TCDD';
  el('exchangeRole').value=data.role||'';
  el('exchangeWorkType').value=data.workType||'normal';
  el('exchangeNotify').value=data.notify||'push';
  if(el('exchangePhone')) el('exchangePhone').value=data.phone || data.ownerPhone || '';
  if(el('exchangeEmail')) el('exchangeEmail').value=data.email || data.ownerEmail || '';
  el('exchangeNote').value=data.note||'';
}
function normalizeExchangeCity(value){
  return String(value||'')
    .trim()
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}
function exchangePlace(region,city,district){
  return [region,city,district].filter(Boolean).join(' • ') || '-';
}
function populateSelectOptions(id, options, placeholder){
  const node=el(id);
  if(!node) return;
  const current=node.value;
  node.innerHTML=[`<option value="">${esc(placeholder)}</option>`, ...options.map(option=>`<option value="${esc(option)}">${esc(option)}</option>`)].join('');
  setExchangeSelectValue(id,current);
}
function setExchangeSelectValue(id,value){
  const node=el(id);
  if(!node) return;
  const raw=String(value || '').trim();
  if(!raw){
    node.value='';
    return;
  }
  const normalized=normalizeExchangeCity(raw);
  const options=Array.from(node.options);
  const exact=options.find(option=>normalizeExchangeCity(option.value)===normalized);
  const partial=options.find(option=>{
    const candidate=normalizeExchangeCity(option.value);
    return candidate && (candidate.includes(normalized) || normalized.includes(candidate));
  });
  node.value=(exact || partial || {}).value || '';
}
function populateExchangeSelects(){
  populateSelectOptions('exchangeCurrentRegion', TCDD_REGION_OPTIONS, 'Bölge seç');
  populateSelectOptions('exchangeTargetRegion', TCDD_REGION_OPTIONS, 'Bölge seç');
  populateSelectOptions('exchangeCurrentCity', TURKEY_CITY_OPTIONS, 'İl seç');
  populateSelectOptions('exchangeTargetCity', TURKEY_CITY_OPTIONS, 'İl seç');
}
function exchangeRegionForCity(value){
  const key=normalizeExchangeCity(value);
  if(key.includes('istanbul') || key.includes('haydarpasa')) return TCDD_REGION_OPTIONS[0];
  if(key.includes('yht')) return TCDD_REGION_OPTIONS[7];
  if(key.includes('ankara')) return TCDD_REGION_OPTIONS[1];
  if(key.includes('izmir') || key.includes('alsancak')) return TCDD_REGION_OPTIONS[2];
  if(key.includes('sivas')) return TCDD_REGION_OPTIONS[3];
  if(key.includes('malatya')) return TCDD_REGION_OPTIONS[4];
  if(key.includes('adana') || key.includes('osmaniye') || key.includes('hatay') || key.includes('mersin')) return TCDD_REGION_OPTIONS[5];
  if(key.includes('afyon')) return TCDD_REGION_OPTIONS[6];
  if(key.includes('erzurum') || key.includes('erzincan') || key.includes('kars')) return TCDD_REGION_OPTIONS[8];
  return '';
}
function exchangeCityFromProfileRegion(value){
  const cleaned=String(value||'')
    .replace(/\b\d+\.?\s*(bölge|bolge)?\b/ig,'')
    .replace(/\b(bölge|bolge)\b/ig,'')
    .replace(/[-•]/g,' ')
    .trim();
  return cleaned.split(/\s+/).filter(Boolean)[0] || '';
}
function exchangeMatchTone(data){
  const current=normalizeExchangeCity(data.currentCity);
  const target=normalizeExchangeCity(data.targetCity);
  if(!current || !target) return {ready:false,text:'Eşleşme için mevcut il ve hedef il girilmeli.'};
  if(current===target) return {ready:false,text:'Mevcut il ile hedef il aynı görünüyor. Farklı bir il seçersen eşleşme aranır.'};
  return {ready:true,text:`İl bazlı eşleşme anahtarı hazır: ${data.currentCity} ↔ ${data.targetCity}. İlçe/birim sadece detay olarak gösterilir.`};
}
function exchangePhoneDigits(value){
  const digits=String(value || '').replace(/\D/g,'');
  if(!digits) return '';
  if(digits.startsWith('90')) return digits;
  if(digits.startsWith('0') && digits.length===11) return `90${digits.slice(1)}`;
  if(digits.length===10) return `90${digits}`;
  return digits;
}
function exchangeContactActions(item){
  const phone=item.phone || item.ownerPhone || '';
  const email=String(item.email || item.ownerEmail || '').trim();
  const digits=exchangePhoneDigits(phone);
  const message=encodeURIComponent(`Merhaba, TCDD İşçi Platformu becayiş eşleşmesi için yazıyorum. Ben ${item.targetCity || ''} yönüne talep oluşturmuştum.`);
  const buttons=[];
  if(digits){
    buttons.push(`<a href="https://wa.me/${digits}?text=${message}">WhatsApp</a>`);
    buttons.push(`<a href="tel:+${digits}">Ara</a>`);
    buttons.push(`<a href="sms:+${digits}?body=${message}">SMS</a>`);
  }
  if(email){
    buttons.push(`<a href="mailto:${esc(email)}?subject=${encodeURIComponent('TCDD İşçi Platformu Becayiş Eşleşmesi')}&body=${message}">E-posta</a>`);
  }
  return buttons.length
    ? `<div class="exchange-contact-actions">${buttons.join('')}</div>`
    : '<small>İletişim bilgisi görünmüyor. Üye listesinden kayıt kontrol edilebilir.</small>';
}
function renderExchangeRequest(data=exchangeFormData()){
  if(!el('exchangePreview')) return;
  const missing=[];
  if(!data.currentCity) missing.push('Mevcut il');
  if(!data.targetCity) missing.push('Hedef il');
  if(!data.role) missing.push('Görev');
  if(!data.phone && !data.email) missing.push('İletişim');
  const matchReady=missing.length===0;
  const matchTone=exchangeMatchTone(data);
  const workTypeLabel=data.workType==='vardiya'?'Vardiyalı':data.workType==='tti'?'TTİ & Makinist':'Normal';
  const currentPlace=exchangePlace(data.currentRegion,data.currentCity,data.currentDistrict);
  const targetPlace=exchangePlace(data.targetRegion,data.targetCity,data.targetDistrict);
  const routeStatus=matchReady && matchTone.ready ? 'Hazır' : 'Eksik';
  const routeCard=`<div class="exchange-route-card">
    <div class="exchange-route-head">
      <strong>Becayiş Güzergahı</strong>
      <span class="exchange-route-status ${matchReady && matchTone.ready ? '' : 'missing'}">${esc(routeStatus)}</span>
    </div>
    <div class="exchange-route-body">
      <div class="exchange-route-point"><span>Mevcut</span><strong>${esc(currentPlace)}</strong></div>
      <div class="exchange-route-line" aria-hidden="true"></div>
      <div class="exchange-route-point"><span>Hedef</span><strong>${esc(targetPlace)}</strong></div>
    </div>
  </div>`;
  const items=[
    ['Mevcut Yer', currentPlace],
    ['Hedef Yer', targetPlace],
    ['Kurum / Görev', `${companyLabel(data.company)}${data.role ? ' • '+data.role : ''}`],
    ['Çalışma Tipi', workTypeLabel],
    ['İletişim', [data.phone,data.email].filter(Boolean).join(' • ') || '-'],
    ['Bildirim', data.notify==='whatsapp'?'WhatsApp':data.notify==='email'?'E-posta':'Uygulama bildirimi'],
    ['Eşleşme Kuralı', matchTone.text],
    ['Durum', matchReady && matchTone.ready ? 'Eşleşme havuzu hazır' : `Eksik: ${missing.join(', ') || 'geçerli il eşleşmesi'}`],
    ['Son Kayıt', data.savedAt || 'Henüz kaydedilmedi']
  ];
  const matchCards=firebaseExchangeLoading
    ? '<div class="exchange-match-card loading">Firebase eşleşme havuzu kontrol ediliyor...</div>'
    : firebaseExchangeMatches.length
      ? firebaseExchangeMatches.map(item=>`<div class="exchange-match-card match"><div class="match-badge">İl bazlı eşleşme</div><strong>${esc(item.ownerName || item.fullName || 'Uygun aday')}</strong><span>${esc(exchangePlace(item.currentRegion,item.currentCity,item.currentDistrict))} → ${esc(exchangePlace(item.targetRegion,item.targetCity,item.targetDistrict))}</span><small>${esc(companyLabel(item.company))}${item.role ? ' • '+esc(item.role) : ''}${item.workType ? ' • '+esc(item.workType) : ''}</small>${exchangeContactActions(item)}</div>`).join('')
      : '<div class="exchange-match-card">Henüz karşılıklı il eşleşmesi bulunmadı. Talep kaydedilince havuzdan tekrar kontrol edilir.</div>';
  el('exchangePreview').innerHTML=routeCard + items.map(([label,value])=>`<div class="preview-item ${label==='Durum' && (!matchReady || !matchTone.ready)?'missing':''}"><div class="label">${esc(label)}</div><div class="value">${esc(value)}</div></div>`).join('') + `<div class="exchange-match-list">${matchCards}</div>`;
  if(el('exchangeStatus')){
    el('exchangeStatus').textContent=matchReady && matchTone.ready
      ? 'Talep hazır. Eşleşme il bazlı aranır; ilçe/birim bildirim detayında gösterilir.'
      : 'Becayiş talebi için mevcut il, hedef il ve görev bilgisi girilmeli.';
  }
}
function saveExchangeRequest(){
  const data=exchangeFormData();
  const missing=[];
  if(!data.currentCity) missing.push('Mevcut il');
  if(!data.targetCity) missing.push('Hedef il');
  if(!data.role) missing.push('Görev');
  if(!data.phone && !data.email) missing.push('İletişim');
  if(missing.length){
    alert(`Becayiş talebi eksik: ${missing.join(', ')}`);
    return;
  }
  const savedAt=new Date().toLocaleString('tr-TR');
  const saved={...data,savedAt};
  localStorage.setItem(EXCHANGE_REQUEST_KEY, JSON.stringify(saved));
  if(!submitFirebaseExchangeRequest(saved)) firebaseExchangeMatches=[];
  renderExchangeRequest(saved);
}
function clearExchangeRequest(){
  localStorage.removeItem(EXCHANGE_REQUEST_KEY);
  applyExchangeRequest(defaultExchangeRequest());
  renderExchangeRequest(defaultExchangeRequest());
}
function deleteFirebaseExchangeRequest(){
  const bridge=firebaseBridge();
  if(!bridge || typeof bridge.deleteExchangeRequest!=='function') return false;
  try{
    bridge.deleteExchangeRequest();
    return true;
  }catch(error){
    return false;
  }
}
function deleteExchangeRequest(){
  if(!confirm('Bu talebi silmek istediğinize emin misiniz?')) return;
  localStorage.removeItem(EXCHANGE_REQUEST_KEY);
  firebaseExchangeMatches=[];
  const sent=deleteFirebaseExchangeRequest();
  applyExchangeRequest(defaultExchangeRequest());
  renderExchangeRequest(defaultExchangeRequest());
  if(el('exchangeStatus')){
    el('exchangeStatus').textContent=sent
      ? 'Becayiş talebi silme isteği Firebase tarafına gönderildi.'
      : 'Bu cihazdaki becayiş talebi silindi. Firebase bağlantısı yoksa kayıt konsoldan kontrol edilmeli.';
  }
}
function fillExchangeFromProfile(){
  const profile=formProfile();
  if(el('exchangeCurrentRegion')) el('exchangeCurrentRegion').value=profile.bolge || '';
  const currentCity=profile.il || profile.sehir || exchangeCityFromProfileRegion(profile.bolge);
  setExchangeSelectValue('exchangeCurrentCity', currentCity);
  setExchangeSelectValue('exchangeCurrentRegion', profile.bolge || exchangeRegionForCity(currentCity));
  if(el('exchangeCompany')) el('exchangeCompany').value=profile.company || 'TCDD';
  if(el('exchangeRole')) el('exchangeRole').value=profile.terfiBilgisi || '';
  if(el('exchangeWorkType')) el('exchangeWorkType').value=profile.calismaModeli==='VARDIYALI_8'?'vardiya':profile.calismaModeli==='TTI_MAKINIST'?'tti':'normal';
  const record=getMembershipRecord();
  if(el('exchangePhone')) el('exchangePhone').value=record.phone || getMemberSession().phone || '';
  if(el('exchangeEmail')) el('exchangeEmail').value=record.email || getMemberSession().email || '';
  renderExchangeRequest();
}
function loadExchangeRequest(){
  const data=getExchangeRequest();
  applyExchangeRequest(data);
  if(data.currentCity && data.targetCity) loadFirebaseExchangeMatches(data);
  renderExchangeRequest(data);
}

function excelRow(cells, className=''){
  return `<tr class="${className}">${cells.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`;
}
function excelTable(title, headers, rows, className=''){
  const head = headers?.length ? `<thead>${excelRow(headers, 'head-row')}</thead>` : '';
  const body = rows.map((row,index)=>excelRow(row, index%2 ? 'alt-row' : '')).join('');
  return `<section class="excel-section ${className}"><h2>${esc(title)}</h2><table>${head}<tbody>${body}</tbody></table></section>`;
}
function excelFilePart(value, fallback='personel'){
  const cleaned=String(value||fallback).trim().replace(/[^\w-]+/g,'_').replace(/^_+|_+$/g,'');
  return (cleaned || fallback).slice(0,64);
}
function excelDocument(title, bodyHtml){
  const notice='Bu bordro değildir; sadece bilgilendirme ve öğrenme amaçlıdır. Kurum bordrosu yerine geçmez.';
  return `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body{font-family:Aptos,Calibri,Arial,sans-serif;color:#172033;background:#fff;margin:18px}
  h1{font-size:22px;letter-spacing:.08em;text-align:center;color:#0f3761;margin:0 0 10px;text-transform:uppercase}
  h2{font-size:15px;color:#0f3761;margin:16px 0 6px;text-transform:uppercase}
  table{border-collapse:collapse;width:100%;margin-bottom:10px}
  td,th{border:1px solid #b7c7d6;padding:8px 10px;font-size:12px;vertical-align:middle}
  th,.head-row td{background:#0f3761;color:#fff;font-weight:700;text-align:left}
  .alt-row td{background:#eef6ff}
  .meta td:first-child,.total td:first-child{font-weight:700;color:#334155}
  .total td{background:#dbeafe;font-weight:800}
  .net td{background:#dcfce7;font-weight:900;font-size:14px}
  .deduction .alt-row td{background:#fff1f2}
  .warning{border:2px solid #f97316;background:#fff7ed;color:#9a3412;padding:9px 12px;text-align:center;font-weight:800;margin:8px 0 14px}
</style>
</head>
<body>
<h1>${esc(title)}</h1>
<div class="warning">${esc(notice)}</div>
${bodyHtml}
<div class="warning">${esc(notice)}</div>
</body>
</html>`;
}
function base64Utf8(source){
  return btoa(unescape(encodeURIComponent(source)));
}
function downloadExcelFile(fileName, html){
  const payload='\ufeff'+html;
  if(window.AndroidBridge && typeof window.AndroidBridge.saveExcelBase64==='function'){
    try{
      window.AndroidBridge.saveExcelBase64(fileName, base64Utf8(payload));
      return;
    }catch(error){
      console.warn('Android Excel kaydi baslatilamadi.', error);
    }
  }
  const blob=new Blob([payload], {type:'application/vnd.ms-excel;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1200);
}
function canvasRoundRect(ctx,x,y,w,h,r){
  const radius=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+radius,y);
  ctx.arcTo(x+w,y,x+w,y+h,radius);
  ctx.arcTo(x+w,y+h,x,y+h,radius);
  ctx.arcTo(x,y+h,x,y,radius);
  ctx.arcTo(x,y,x+w,y,radius);
  ctx.closePath();
}
function drawWrappedCanvasText(ctx,text,x,y,maxWidth,lineHeight){
  const words=String(text ?? '').split(/\s+/).filter(Boolean);
  if(!words.length){
    ctx.fillText('',x,y);
    return y+lineHeight;
  }
  let line='';
  for(const word of words){
    const test=line ? `${line} ${word}` : word;
    if(ctx.measureText(test).width>maxWidth && line){
      ctx.fillText(line,x,y);
      y += lineHeight;
      line=word;
    }else{
      line=test;
    }
  }
  ctx.fillText(line,x,y);
  return y+lineHeight;
}
function drawImageTable(ctx,title,headers,rows,y,theme='blue',options={}){
  const x=options.x ?? 64;
  const w=options.w ?? 1072;
  const rowH=options.rowH ?? 54;
  const leftW=Math.round(w*(options.leftRatio ?? .66)),rightW=w-leftW;
  const headColor=theme==='red'?'#991b1b':'#0f3761';
  ctx.fillStyle=headColor;
  ctx.font=options.compact ? '800 24px Arial' : '800 28px Arial';
  ctx.fillText(title,x,y);
  y += 18;
  canvasRoundRect(ctx,x,y,w,rowH,18);
  ctx.fillStyle=headColor;
  ctx.fill();
  ctx.fillStyle='#ffffff';
  ctx.font=options.compact ? '800 17px Arial' : '800 20px Arial';
  ctx.fillText(headers[0],x+22,y+34);
  ctx.textAlign='right';
  ctx.fillText(headers[1],x+w-22,y+34);
  ctx.textAlign='left';
  y += rowH;
  rows.forEach((row,index)=>{
    ctx.fillStyle=index%2 ? (theme==='red'?'#fff1f2':'#eef6ff') : '#ffffff';
    ctx.fillRect(x,y,w,rowH);
    ctx.strokeStyle='#c9d7e5';
    ctx.lineWidth=1.5;
    ctx.strokeRect(x,y,w,rowH);
    ctx.beginPath();
    ctx.moveTo(x+leftW,y);
    ctx.lineTo(x+leftW,y+rowH);
    ctx.stroke();
    ctx.fillStyle='#1f2937';
    ctx.font=index===rows.length-1 ? (options.compact ? '800 18px Arial' : '800 21px Arial') : (options.compact ? '600 16px Arial' : '600 19px Arial');
    drawWrappedCanvasText(ctx,row[0],x+18,y+31,leftW-34,options.compact ? 19 : 21);
    ctx.textAlign='right';
    ctx.fillStyle=theme==='red'?'#9f1239':'#0f3761';
    ctx.font=index===rows.length-1 ? (options.compact ? '800 17px Arial' : '800 21px Arial') : (options.compact ? '700 16px Arial' : '600 19px Arial');
    ctx.fillText(row[1],x+leftW+rightW-18,y+33);
    ctx.textAlign='left';
    y += rowH;
  });
  return y+28;
}
function buildImageCanvas(title,sections,netText){
  const canvas=document.createElement('canvas');
  canvas.width=1200;
  canvas.height=3200;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#f8fbff';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#0b1f33';
  ctx.font='900 34px Arial';
  ctx.textAlign='center';
  ctx.fillText(title,600,76);
  ctx.textAlign='left';
  const notice='Bu bordro değildir; sadece bilgilendirme ve öğrenme amaçlıdır. Kurum bordrosu yerine geçmez.';
  canvasRoundRect(ctx,64,120,1072,78,18);
  ctx.fillStyle='#fff7ed';
  ctx.fill();
  ctx.strokeStyle='#f97316';
  ctx.lineWidth=3;
  ctx.stroke();
  ctx.fillStyle='#9a3412';
  ctx.font='800 22px Arial';
  ctx.textAlign='center';
  ctx.fillText(notice,600,168);
  ctx.textAlign='left';
  let y=232;
  if(netText){
    canvasRoundRect(ctx,64,y,1072,96,22);
    ctx.fillStyle='#dcfce7';
    ctx.fill();
    ctx.strokeStyle='#86efac';
    ctx.stroke();
    ctx.fillStyle='#166534';
    ctx.font='800 20px Arial';
    ctx.fillText('NET SONUÇ',88,y+34);
    ctx.font='900 42px Arial';
    ctx.fillText(netText,88,y+76);
    y += 126;
  }
  sections.forEach(section=>{
    if(section.layout==='columns'){
      const gap=24;
      const colW=Math.floor((1072-gap)/2);
      const left=section.sections?.[0];
      const right=section.sections?.[1];
      const leftY=left ? drawImageTable(ctx,left.title,left.headers,left.rows,y,left.theme,{x:64,w:colW,compact:true,leftRatio:left.leftRatio ?? .58,rowH:58}) : y;
      const rightY=right ? drawImageTable(ctx,right.title,right.headers,right.rows,y,right.theme,{x:64+colW+gap,w:colW,compact:true,leftRatio:right.leftRatio ?? .58,rowH:58}) : y;
      y=Math.max(leftY,rightY)+6;
      return;
    }
    y=drawImageTable(ctx,section.title,section.headers,section.rows,y,section.theme);
  });
  canvasRoundRect(ctx,64,y,1072,78,18);
  ctx.fillStyle='#fff7ed';
  ctx.fill();
  ctx.strokeStyle='#f97316';
  ctx.lineWidth=3;
  ctx.stroke();
  ctx.fillStyle='#9a3412';
  ctx.font='800 22px Arial';
  ctx.textAlign='center';
  ctx.fillText(notice,600,y+49);
  ctx.textAlign='left';
  const finalHeight=Math.min(Math.max(y+120,900),canvas.height);
  const finalCanvas=document.createElement('canvas');
  finalCanvas.width=canvas.width;
  finalCanvas.height=finalHeight;
  finalCanvas.getContext('2d').drawImage(canvas,0,0);
  return finalCanvas;
}
const imagePreviewTransform={scale:1,x:0,y:0};
let imagePreviewPointers=new Map();
let imagePreviewGesture=null;
let imagePreviewGesturesReady=false;
function clampImagePreviewScale(value){
  return Math.min(5, Math.max(1, Number(value)||1));
}
function applyImagePreviewTransform(){
  const img=el('imagePreviewImg');
  if(!img) return;
  img.style.transform=`translate3d(${imagePreviewTransform.x}px, ${imagePreviewTransform.y}px, 0) scale(${imagePreviewTransform.scale})`;
}
function resetImagePreviewTransform(){
  imagePreviewTransform.scale=1;
  imagePreviewTransform.x=0;
  imagePreviewTransform.y=0;
  imagePreviewGesture=null;
  imagePreviewPointers.clear();
  applyImagePreviewTransform();
}
function pointerDistance(points){
  if(points.length<2) return 0;
  const dx=points[0].x-points[1].x;
  const dy=points[0].y-points[1].y;
  return Math.hypot(dx,dy);
}
function pointerCenter(points){
  if(!points.length) return {x:0,y:0};
  return {
    x:points.reduce((total,item)=>total+item.x,0)/points.length,
    y:points.reduce((total,item)=>total+item.y,0)/points.length
  };
}
function setupImagePreviewGestures(){
  if(imagePreviewGesturesReady) return;
  const stage=el('imagePreviewStage');
  if(!stage) return;
  imagePreviewGesturesReady=true;
  stage.addEventListener('pointerdown',event=>{
    const img=el('imagePreviewImg');
    if(!img || !img.src) return;
    stage.setPointerCapture?.(event.pointerId);
    imagePreviewPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    const points=[...imagePreviewPointers.values()];
    imagePreviewGesture={
      startX:imagePreviewTransform.x,
      startY:imagePreviewTransform.y,
      startScale:imagePreviewTransform.scale,
      startCenter:pointerCenter(points),
      startDistance:pointerDistance(points)
    };
  });
  stage.addEventListener('pointermove',event=>{
    if(!imagePreviewPointers.has(event.pointerId) || !imagePreviewGesture) return;
    imagePreviewPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    const points=[...imagePreviewPointers.values()];
    const center=pointerCenter(points);
    if(points.length>=2){
      const distance=pointerDistance(points) || imagePreviewGesture.startDistance || 1;
      imagePreviewTransform.scale=clampImagePreviewScale(imagePreviewGesture.startScale * (distance / Math.max(1,imagePreviewGesture.startDistance || distance)));
    }
    if(imagePreviewTransform.scale>1){
      imagePreviewTransform.x=imagePreviewGesture.startX + (center.x - imagePreviewGesture.startCenter.x);
      imagePreviewTransform.y=imagePreviewGesture.startY + (center.y - imagePreviewGesture.startCenter.y);
    }else{
      imagePreviewTransform.x=0;
      imagePreviewTransform.y=0;
    }
    applyImagePreviewTransform();
  });
  ['pointerup','pointercancel','pointerleave'].forEach(type=>{
    stage.addEventListener(type,event=>{
      imagePreviewPointers.delete(event.pointerId);
      imagePreviewGesture=null;
    });
  });
  stage.addEventListener('wheel',event=>{
    if(el('imagePreviewModal')?.classList.contains('hidden')) return;
    event.preventDefault();
    imagePreviewTransform.scale=clampImagePreviewScale(imagePreviewTransform.scale + (event.deltaY<0 ? .18 : -.18));
    if(imagePreviewTransform.scale===1){
      imagePreviewTransform.x=0;
      imagePreviewTransform.y=0;
    }
    applyImagePreviewTransform();
  },{passive:false});
  stage.addEventListener('dblclick',resetImagePreviewTransform);
}
function openImagePreview(src,caption='Görsel'){
  const modal=el('imagePreviewModal');
  const img=el('imagePreviewImg');
  if(!modal || !img || !src) return;
  setupImagePreviewGestures();
  resetImagePreviewTransform();
  img.src=src;
  if(el('imagePreviewCaption')) el('imagePreviewCaption').textContent=caption || 'Görsel';
  if(el('imagePreviewOpenLink')) el('imagePreviewOpenLink').href=src;
  modal.classList.remove('hidden');
  document.body.classList.add('image-preview-open');
}
function closeImagePreview(){
  el('imagePreviewModal')?.classList.add('hidden');
  document.body.classList.remove('image-preview-open');
  resetImagePreviewTransform();
}
function downloadCanvasPng(canvas,fileName){
  const dataUrl=canvas.toDataURL('image/png');
  const base64=dataUrl.split(',')[1] || '';
  openImagePreview(dataUrl, fileName || 'PNG önizleme');
  if(window.AndroidBridge && typeof window.AndroidBridge.saveImageBase64==='function'){
    try{
      window.AndroidBridge.saveImageBase64(fileName, 'image/png', base64);
      return;
    }catch(error){
      console.warn('Android gorsel kaydi baslatilamadi.', error);
    }
  }
  const link=document.createElement('a');
  link.href=dataUrl;
  link.download=fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
function buildSalaryPngCanvas(r){
  const resolvedStep=r.resolvedStep || resolveProfileStep();
  const startPeriod=startProfilePeriod();
  const metaRows=[
    ['Personel', `${sval('sicil') || '-'} - ${sval('fullName') || '-'}`],
    ['Kurum / Bölge', `${companyLabel()} - ${sval('bolge') || '-'}`],
    ['Dönem / Çalışma', `${MONTH_LABELS[sval('month')] || sval('month')} - ${workModeLabel()}`],
    ['Derece / Kademe', `${sval('workerType')} - ${sval('skala')}. Skala - ${resolvedStep.degree || '-'} / ${resolvedStep.kademe || '-'}`],
    ['Terfi Esası', sval('girisYili') ? `01.${sval('girisAy') || '01'}.${sval('girisYili')} • ${formatPeriodLabel(startPeriod)}` : '-'],
    ['Saatlik Ücret', money(r.hourlyTotal)]
  ];
  const incomeRows=r.gelirler.map(([label,value])=>[label,money(value)]);
  incomeRows.push(['Toplam Brüt', money(r.gross)]);
  const deductionRows=r.kesintiler.map(([label,value])=>[label,money(value)]);
  deductionRows.push(['Toplam Kesinti', money(r.totalDeductions)]);
  const taxRows=[
    ['Aylık SSK Matrahı', money(r.sgkBase)],
    ['Önceki Ay İkramiye Matrahı', money(r.prevBonusCarryBase)],
    ['Diğer SGK Matrah Devri', money(r.manualSgkCarryBase)],
    ['SSK Matrah Devri', money(r.sgkCarryBase)],
    ['SSK Matrahı', money(r.sgkContributionBase)],
    ['Toplam GV Matrahı', money(r.gvBase)],
    ['Damga Vergisi Matrahı', money(r.dvBase)],
    ['Asgari Ücret GV İstisnası', money(nval('gvIstisna'))],
    ['Asgari Ücret DV İstisnası', money(nval('dvIstisna'))],
    ['KM Vergi Muaf Tutar', money(r.kmTaxExempt)],
    ['Engelli Vergi İndirimi', money(r.disabledTaxExemption)]
  ];
  return buildImageCanvas('TCDD İŞÇİ PLATFORMU MAAŞ HESAPLAMA ROBOTU', [
    {layout:'columns',sections:[
      {title:'Personel ve Dönem', headers:['Alan','Bilgi'], rows:metaRows, theme:'blue', leftRatio:.50},
      {title:'Matrah ve İstisnalar', headers:['Alan','Tutar'], rows:taxRows, theme:'blue', leftRatio:.58}
    ]},
    {layout:'columns',sections:[
      {title:'Gelirler', headers:['Kalem','Brüt Tutar'], rows:incomeRows, theme:'blue', leftRatio:.56},
      {title:'Kesintiler', headers:['Kalem','Tutar'], rows:deductionRows, theme:'red', leftRatio:.56}
    ]}
  ], money(r.net));
}
function buildTedbPngCanvas(tedb){
  const metaRows=[
    ['Personel', `${sval('sicil') || '-'} - ${sval('fullName') || '-'}`],
    ['Kurum', companyLabel()],
    ['Dönem', MONTH_LABELS[sval('month')] || sval('month')],
    ['İkramiye Tipi', tedb.selectedLabel],
    ['Aynı Ay Maaş Alındı mı?', tedb.salaryPaid ? 'Evet' : 'Hayır'],
    ['Sonraki Ay SGK Devri', money(tedb.sgkCarryForward)]
  ];
  const incomeRows=[[tedb.selectedLabel,money(tedb.gross)],['Toplam Brüt',money(tedb.gross)]];
  const deductionRows=[
    ['SGK İşçi Payı', money(tedb.sgk)],
    ['İşsizlik Primi', money(tedb.issizlik)],
    [tedb.method === 'manuel' ? 'Gelir Vergisi (Manuel)' : 'Gelir Vergisi (Kümülatif 2026)', money(tedb.gvNet)],
    ['Damga Vergisi', money(tedb.dvNet)],
    ['Toplam Kesinti', money(tedb.totalDeductions)]
  ];
  const taxRows=[
    ['Toplam GV Matrahı', money(tedb.gvBase)],
    ['Önceki GV Matrahı', money(tedb.prev)],
    ['Sonraki Ay SGK Devri', money(tedb.sgkCarryForward)],
    ['Gelir Vergisi Brüt', money(tedb.gvBrut)],
    ['Damga Vergisi Brüt', money(tedb.dvGross)],
    ['Damga Vergisi Oranı', `%${num(DEFAULT_DAMGA_RATE*100)}`]
  ];
  return buildImageCanvas('TCDD İŞÇİ PLATFORMU İKRAMİYE / TEDİYE HESAPLAMA ROBOTU', [
    {title:'Personel ve İşlem', headers:['Alan','Bilgi'], rows:metaRows, theme:'blue'},
    {title:'Gelirler', headers:['Kalem','Brüt Tutar'], rows:incomeRows, theme:'blue'},
    {title:'Kesintiler', headers:['Kalem','Tutar'], rows:deductionRows, theme:'red'},
    {title:'Matrah Bilgileri', headers:['Alan','Tutar'], rows:taxRows, theme:'blue'}
  ], money(tedb.net));
}
function buildSalaryExcel(r){
  const monthLabel=MONTH_LABELS[sval('month')] || sval('month');
  const resolvedStep=r.resolvedStep || resolveProfileStep();
  const startPeriod=startProfilePeriod();
  const metaRows=[
    ['Personel', `${sval('sicil') || '-'} - ${sval('fullName') || '-'}`],
    ['Kurum', companyLabel()],
    ['Bölge', sval('bolge') || '-'],
    ['Dönem', monthLabel],
    ['Çalışma Tipi', workModeLabel()],
    ['Derece / Kademe', `${sval('workerType')} - ${sval('skala')}. Skala - ${resolvedStep.degree || '-'} / ${resolvedStep.kademe || '-'}`],
    ['Terfi Esası', sval('girisYili') ? `01.${sval('girisAy') || '01'}.${sval('girisYili')} • ${formatPeriodLabel(startPeriod)}` : '-'],
    ['Hizmet Yılı', `${r.yrs} yıl`],
    ['Saatlik Ücret', money(r.hourlyTotal)]
  ];
  const incomeRows=r.gelirler.map(([label,value])=>[label, money(value)]);
  incomeRows.push(['Toplam Brüt', money(r.gross)]);
  const deductionRows=r.kesintiler.map(([label,value])=>[label, money(value)]);
  deductionRows.push(['Toplam Kesinti', money(r.totalDeductions)]);
  const taxRows=[
    ['Aylık SSK Matrahı', money(r.sgkBase)],
    ['Önceki Ay İkramiye Matrahı', money(r.prevBonusCarryBase)],
    ['Diğer SGK Matrah Devri', money(r.manualSgkCarryBase)],
    ['SSK Matrah Devri', money(r.sgkCarryBase)],
    ['SSK Matrahı', money(r.sgkContributionBase)],
    ['SGK İşçi Payı', money(r.sgk)],
    ['İşsizlik Primi', money(r.issizlik)],
    ['Toplam GV Matrahı', money(r.gvBase)],
    ['Gelir Vergisi Brüt', money(r.gvBrut)],
    ['Asgari Ücret GV İstisnası', money(nval('gvIstisna'))],
    ['Kesilen Gelir Vergisi', money(r.gvNet)],
    ['Damga Vergisi Matrahı', money(r.dvBase)],
    ['Damga Vergisi Brüt', money(r.dvGross)],
    ['Asgari Ücret DV İstisnası', money(nval('dvIstisna'))],
    ['Kesilen Damga Vergisi', money(r.dvNet)],
    ['KM Vergi Muaf Tutar', money(r.kmTaxExempt)],
    ['Engelli Vergi İndirimi', money(r.disabledTaxExemption)]
  ];
  const netRows=[
    ['Toplam Brüt', money(r.gross)],
    ['Toplam Kesinti', money(r.totalDeductions)],
    ['Net Ödenecek', money(r.net)]
  ];
  return excelDocument('TCDD İŞÇİ PLATFORMU MAAŞ HESAPLAMA ROBOTU',
    excelTable('Personel ve Dönem', ['Alan','Bilgi'], metaRows, 'meta') +
    excelTable('Gelirler', ['Kalem','Brüt Tutar'], incomeRows) +
    excelTable('Kesintiler', ['Kalem','Tutar'], deductionRows, 'deduction') +
    excelTable('Matrah ve İstisnalar', ['Alan','Tutar'], taxRows) +
    excelTable('Net Sonuç', ['Alan','Tutar'], netRows, 'total net')
  );
}
function buildTedbExcel(r, tedb){
  const monthLabel=MONTH_LABELS[sval('month')] || sval('month');
  const metaRows=[
    ['Personel', `${sval('sicil') || '-'} - ${sval('fullName') || '-'}`],
    ['Kurum', companyLabel()],
    ['Dönem', monthLabel],
    ['İkramiye Tipi', tedb.selectedLabel],
    ['Aynı Ay Maaş Alındı mı?', tedb.salaryPaid ? 'Evet' : 'Hayır'],
    ['Sonraki Ay SGK Devri', money(tedb.sgkCarryForward)],
    ['GV Yöntemi', tedb.method === 'manuel' ? `Manuel %${num(tedb.manualRate)}` : 'Kümülatif 2026']
  ];
  const incomeRows=[
    [tedb.selectedLabel, money(tedb.gross)],
    ['Toplam Brüt', money(tedb.gross)]
  ];
  const deductionRows=[
    ['SGK İşçi Payı', money(tedb.sgk)],
    ['İşsizlik Primi', money(tedb.issizlik)],
    [tedb.method === 'manuel' ? 'Gelir Vergisi (Manuel)' : 'Gelir Vergisi (Kümülatif 2026)', money(tedb.gvNet)],
    ['Damga Vergisi', money(tedb.dvNet)],
    ['Toplam Kesinti', money(tedb.totalDeductions)]
  ];
  const taxRows=[
    ['Toplam GV Matrahı', money(tedb.gvBase)],
    ['Önceki GV Matrahı', money(tedb.prev)],
    ['Sonraki Ay SGK Devri', money(tedb.sgkCarryForward)],
    ['Gelir Vergisi Brüt', money(tedb.gvBrut)],
    ['Damga Vergisi Brüt', money(tedb.dvGross)],
    ['Damga Vergisi Oranı', `%${num(DEFAULT_DAMGA_RATE*100)}`]
  ];
  const netRows=[
    ['Brüt', money(tedb.gross)],
    ['Kesinti', money(tedb.totalDeductions)],
    ['Net Ödenen', money(tedb.net)]
  ];
  return excelDocument('TCDD İŞÇİ PLATFORMU İKRAMİYE / TEDİYE HESAPLAMA ROBOTU',
    excelTable('Personel ve İşlem', ['Alan','Bilgi'], metaRows, 'meta') +
    excelTable('Gelirler', ['Kalem','Brüt Tutar'], incomeRows) +
    excelTable('Kesintiler', ['Kalem','Tutar'], deductionRows, 'deduction') +
    excelTable('Matrah Bilgileri', ['Alan','Tutar'], taxRows) +
    excelTable('Net Sonuç', ['Alan','Tutar'], netRows, 'total net')
  );
}
function exportSalaryExcel(){
  setPage('salary');
  setMode('maas');
  setStep(4);
  computeAll();
  const r=gatherResult();
  const fileName=`TCDD_Isci_Platformu_Maas_${excelFilePart(sval('sicil'))}_${excelFilePart(sval('month'),'donem')}.xls`;
  downloadExcelFile(fileName, buildSalaryExcel(r));
}
function exportTedbExcel(){
  setPage('salary');
  setMode('tedb');
  computeAll();
  const r=gatherResult();
  const tedb=computeTedb(r);
  const fileName=`TCDD_Isci_Platformu_Ikramiye_${excelFilePart(sval('sicil'))}_${excelFilePart(sval('month'),'donem')}.xls`;
  downloadExcelFile(fileName, buildTedbExcel(r, tedb));
}
function exportSalaryPng(){
  setPage('salary');
  setMode('maas');
  setStep(4);
  computeAll();
  const r=gatherResult();
  const fileName=`TCDD_Isci_Platformu_Maas_${excelFilePart(sval('sicil'))}_${excelFilePart(sval('month'),'donem')}.png`;
  downloadCanvasPng(buildSalaryPngCanvas(r), fileName);
}
function exportTedbPng(){
  setPage('salary');
  setMode('tedb');
  computeAll();
  const r=gatherResult();
  const tedb=computeTedb(r);
  const fileName=`TCDD_Isci_Platformu_Ikramiye_${excelFilePart(sval('sicil'))}_${excelFilePart(sval('month'),'donem')}.png`;
  downloadCanvasPng(buildTedbPngCanvas(tedb), fileName);
}
window.onNativePdfSaved=function(){
  const cleanup=nativePdfCleanup;
  nativePdfCleanup=null;
  if(typeof cleanup==='function') cleanup();
};
window.onNativeExcelSaved=function(success,message){
  if(!success && message) console.warn(message);
};
window.onNativeImageSaved=function(success,message){
  if(!success && message) console.warn(message);
};
function handleEdgeSwipeStart(event){
  const touch=event.touches?.[0];
  if(!touch) return;
  edgeSwipeStartX=touch.clientX;
  edgeSwipeStartY=touch.clientY;
  edgeSwipeTracking=!document.body.classList.contains('drawer-open') && !document.body.classList.contains('app-booting') && (document.body.classList.contains('nav-open') || edgeSwipeStartX<=28);
}
function handleEdgeSwipeMove(event){
  if(!edgeSwipeTracking) return;
  const touch=event.touches?.[0];
  if(!touch) return;
  const dx=touch.clientX-edgeSwipeStartX;
  const dy=touch.clientY-edgeSwipeStartY;
  if(Math.abs(dy)>44){
    edgeSwipeTracking=false;
    return;
  }
  if(!document.body.classList.contains('nav-open') && dx>72){
    openNavDrawer();
    edgeSwipeTracking=false;
    return;
  }
  if(document.body.classList.contains('nav-open') && dx<-72){
    closeNavDrawer();
    edgeSwipeTracking=false;
  }
}
function handleEdgeSwipeEnd(){
  edgeSwipeTracking=false;
}
function handleAndroidBack(){
  if(document.body.classList.contains('app-booting')){
    hideSplash();
    return true;
  }
  if(document.body.classList.contains('drawer-open')){
    closeProfileDrawer();
    return true;
  }
  if(document.body.classList.contains('nav-open')){
    closeNavDrawer();
    return true;
  }
  const openInfo=document.querySelector('.info-panel:not(.hidden)');
  if(openInfo){
    closeInfoPanels();
    return true;
  }
  if(currentPage==='salary'){
    if(currentMode==='tedb'){
      setMode('maas');
      setStep(2);
      window.scrollTo({top:0,behavior:'smooth'});
      return true;
    }
    if(currentStep>1){
      setStep(currentStep-1);
      window.scrollTo({top:0,behavior:'smooth'});
      return true;
    }
    setPage('home');
    setMode('maas');
    setStep(1);
    window.scrollTo({top:0,behavior:'smooth'});
    return true;
  }
  if(currentPage!=='home'){
    setPage('home');
    setMode('maas');
    setStep(1);
    window.scrollTo({top:0,behavior:'smooth'});
    return true;
  }
  return false;
}
window.handleAndroidBack=handleAndroidBack;

// events
Array.from(document.querySelectorAll('.nav-btn')).forEach(btn=>btn.addEventListener('click',()=>{
  setPage(btn.dataset.page);
  closeNavDrawer();
}));
Array.from(document.querySelectorAll('.goto')).forEach(btn=>btn.addEventListener('click',()=>setPage(btn.dataset.page)));
Array.from(document.querySelectorAll('[data-info-toggle]')).forEach(btn=>btn.addEventListener('click',event=>{
  event.stopPropagation();
  toggleInfoPanel(btn.dataset.infoToggle);
}));
el('goHomeBrand').addEventListener('click',()=>{
  setPage('home');
  setMode('maas');
  setStep(1);
  window.scrollTo({top:0,behavior:'smooth'});
});
el('closeNavDrawerBtn').addEventListener('click',closeNavDrawer);
el('navDrawerBackdrop').addEventListener('click',closeNavDrawer);
el('modeMaas').addEventListener('click',()=>setMode('maas'));
el('modeTedb').addEventListener('click',()=>setMode('tedb'));
document.querySelectorAll('.step[data-step]').forEach(stepButton=>{
  stepButton.addEventListener('click',()=>setStep(Number(stepButton.dataset.step || 1)));
});
el('openProfileDrawerBtn').addEventListener('click',()=>openProfileDrawer('card'));
el('openProfileDrawerStepBtn').addEventListener('click',()=>openProfileDrawer('card'));
if(el('openProfileDrawerLeaveBtn')) el('openProfileDrawerLeaveBtn').addEventListener('click',()=>openProfileDrawer('card'));
if(el('openProfileDrawerWorkBtn')) el('openProfileDrawerWorkBtn').addEventListener('click',()=>openProfileDrawer('card'));
el('closeProfileDrawerBtn').addEventListener('click',closeProfileDrawer);
el('profileDrawerBackdrop').addEventListener('click',closeProfileDrawer);
Array.from(document.querySelectorAll('[data-profile-tab]')).forEach(btn=>btn.addEventListener('click',()=>setProfileDrawerTab(btn.dataset.profileTab)));
el('backToProfileCardBtn').addEventListener('click',()=>setProfileDrawerTab('card'));
el('openSavedProfilesFromQuickBtn').addEventListener('click',()=>setProfileDrawerTab('saved'));
el('gotoTedbBtn').addEventListener('click',()=>{ if(!saveCurrentProfile()) return; closeProfileDrawer(); setMode('tedb'); computeAll(); });
el('gotoMaasFromTedb').addEventListener('click',()=>{ setMode('maas'); setStep(2); computeAll(); });
el('newProfileBtn').addEventListener('click',event=>{ event.preventDefault(); clearProfileForm('Yeni personel kartı hazır.'); });
el('saveProfileBtn').addEventListener('click',saveProfileAndShow);
el('startSalaryBtn').addEventListener('click',()=>{ if(!saveCurrentProfile()) return; closeProfileDrawer(); setStep(2); setMode('maas'); computeAll(); });
el('step1ContinueBtn').addEventListener('click',()=>{ setStep(2); setMode('maas'); computeAll(); });
el('prevBtn').addEventListener('click',()=>setStep(currentStep-1));
el('nextBtn').addEventListener('click',()=>{ if(currentStep<4){ setStep(currentStep+1); } else { setPage('home'); setMode('maas'); setStep(1); window.scrollTo({top:0,behavior:'smooth'}); } });
el('pdfBtn').addEventListener('click',exportSalaryExcel);
el('tedbPdfBtn').addEventListener('click',exportTedbExcel);
el('pngBtn').addEventListener('click',exportSalaryPng);
el('tedbPngBtn').addEventListener('click',exportTedbPng);
['month','workMode'].forEach(id=>{
  const node=el(id);
  if(!node) return;
  node.addEventListener('input',handleCalendarChange);
  node.addEventListener('change',handleCalendarChange);
});
SALARY_FIELD_IDS.filter(id=>!['month','workMode'].includes(id)).forEach(id=>{
  const node=el(id);
  if(!node) return;
  node.addEventListener('input',scheduleSalaryChange);
  node.addEventListener('change',scheduleSalaryChange);
});
if(el('postabasi')) el('postabasi').addEventListener('change',()=>{
  if(el('profilePostabasi')) el('profilePostabasi').checked=sval('postabasi')==='1';
});
['company'].forEach(id=>el(id).addEventListener('input',()=>scheduleProfilePreviewRefresh(false)));
['girisYili','girisAy','probationMonths','militaryDelayMonths','carryAnnualLeave'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('input',()=>scheduleProfilePreviewRefresh(true));
});
['workerType','skala'].forEach(id=>el(id).addEventListener('change',()=>{ populateDegrees(); scheduleProfilePreviewRefresh(false); }));
['degree','kademe','company'].forEach(id=>el(id).addEventListener('change',()=>scheduleProfilePreviewRefresh(false)));
['girisAy','probationMonths','militaryDelayMonths','carryAnnualLeave'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('change',()=>scheduleProfilePreviewRefresh(true));
});
if(el('militaryAfterStart')) el('militaryAfterStart').addEventListener('change',()=>{
  syncMilitaryDelayControls();
  scheduleProfilePreviewRefresh(true);
});
if(el('profilePostabasi')) el('profilePostabasi').addEventListener('change',()=>{
  if(el('postabasi')) el('postabasi').value=el('profilePostabasi').checked ? '1' : '0';
  scheduleProfilePreviewRefresh(false);
  scheduleSalaryChange();
});
if(el('calismaModeli')) el('calismaModeli').addEventListener('change',()=>{
  syncProfileWorkMode();
  applyWorkTypeTemplate(sval('workType') || 'normal');
  scheduleProfilePreviewRefresh(false);
  fillCalendarInputs(true);
  updateCalendarCards();
  scheduleSalaryChange();
});
if(el('quickProfileList')) el('quickProfileList').addEventListener('click',event=>{
  const chip=event.target.closest('[data-quick-profile]');
  if(!chip) return;
  openProfileEditor(chip.dataset.quickProfile);
});


['sicil','fullName','bolge','terfiBilgisi'].forEach(id=>{ const node=el(id); if(node) node.addEventListener('input',renderActiveProfileSummary); if(node) node.addEventListener('change',renderActiveProfileSummary); });
if(el('izinMonth')) el('izinMonth').addEventListener('change',()=>{
  if(el('leaveDate') && !sval('leaveDate').startsWith(sval('izinMonth'))) el('leaveDate').value=`${sval('izinMonth')}-01`;
  if(el('leaveEndDate') && !sval('leaveEndDate').startsWith(sval('izinMonth'))) el('leaveEndDate').value=sval('leaveDate');
  syncLeaveRangeFromInputs();
  renderLeaveModule();
});
if(el('workMonth')) el('workMonth').addEventListener('change',()=>{
  if(el('workDate') && !sval('workDate').startsWith(sval('workMonth'))) el('workDate').value=`${sval('workMonth')}-01`;
  if(el('workEndDate') && !sval('workEndDate').startsWith(sval('workMonth'))) el('workEndDate').value=sval('workDate');
  syncWorkRangeFromInputs();
  renderWorkModule();
  renderWorkModels();
});
if(el('workType')) el('workType').addEventListener('change',()=>applyWorkTypeTemplate(sval('workType')));
['workStartTime','workEndTime','workMealStart','workMealEnd','workOvertimeHours','workNightHours','workTrackHours','workUbgtHours','workKmHours','workRampaSefer','workBeklemeGun','workBeklemeAdet','workDate','workEndDate','workNote'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('input',renderWorkNetPreview);
  if(node) node.addEventListener('change',renderWorkNetPreview);
});
['workDate','workEndDate'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('change',()=>{ syncWorkRangeFromInputs(); renderWorkModule(); });
});
['leaveDate','leaveEndDate'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('change',()=>{ syncLeaveRangeFromInputs(); renderLeaveModule(); });
});
if(el('leaveType')) el('leaveType').addEventListener('change',syncLeaveDurationOptions);
if(el('saveLeaveBtn')) el('saveLeaveBtn').addEventListener('click',saveLeaveEvent);
if(el('clearLeaveFormBtn')) el('clearLeaveFormBtn').addEventListener('click',()=>clearLeaveForm(true));
if(el('saveWorkLogBtn')) el('saveWorkLogBtn').addEventListener('click',saveWorkEvent);
if(el('clearWorkLogBtn')) el('clearWorkLogBtn').addEventListener('click',()=>clearWorkForm(true));
if(el('workCalendarTabBtn')) el('workCalendarTabBtn').addEventListener('click',()=>setWorkView('calendar'));
if(el('workModelsTabBtn')) el('workModelsTabBtn').addEventListener('click',()=>setWorkView('models'));
if(el('workModelCards')) el('workModelCards').addEventListener('click',event=>{
  const card=event.target.closest('[data-work-model]');
  if(!card) return;
  selectedWorkModelId=card.dataset.workModel || 'monthly';
  renderWorkModels();
});
if(el('downloadWorkModelPdfBtn')) el('downloadWorkModelPdfBtn').addEventListener('click',exportWorkModelPdf);
if(el('downloadWorkModelPngBtn')) el('downloadWorkModelPngBtn').addEventListener('click',exportWorkModelPng);
if(el('leaveCalendarGrid')) el('leaveCalendarGrid').addEventListener('click',event=>{
  const cell=event.target.closest('[data-leave-date]');
  if(!cell || !el('leaveDate')) return;
  selectLeaveRangeDate(cell.dataset.leaveDate);
});
if(el('workCalendarGrid')) el('workCalendarGrid').addEventListener('click',event=>{
  const cell=event.target.closest('[data-work-date]');
  if(!cell || !el('workDate')) return;
  selectWorkRangeDate(cell.dataset.workDate);
});
['memberFullName','memberSicil','memberCompany','memberRole','memberUnit','memberCity','memberPhone','memberEmail','memberPassword','memberPasswordConfirm','memberType','memberNotifyChannel','memberNote','membershipReviewNote'].forEach(id=>{
  const node=el(id);
  if(node){
    node.addEventListener('input',()=>renderMembershipPreview());
    node.addEventListener('change',()=>renderMembershipPreview());
  }
});
['memberCompany','memberType','memberNotifyChannel','kvkkInfoRead','kvkkConsent','notifyConsent','contactConsent','conductConsent'].forEach(id=>{ const node=el(id); if(node) node.addEventListener('change',()=>renderMembershipPreview()); });
if(el('saveMembershipFormBtn')) el('saveMembershipFormBtn').addEventListener('click',saveMembershipForm);
if(el('submitMembershipFormBtn')) el('submitMembershipFormBtn').addEventListener('click',submitMembershipForm);
if(el('clearMembershipFormBtn')) el('clearMembershipFormBtn').addEventListener('click',clearMembershipForm);
if(el('fillMembershipFromProfileBtn')) el('fillMembershipFromProfileBtn').addEventListener('click',fillMembershipFromProfile);
if(el('membershipApproveBtn')) el('membershipApproveBtn').addEventListener('click',()=>updateMembershipDecision('approved'));
if(el('membershipRejectBtn')) el('membershipRejectBtn').addEventListener('click',()=>updateMembershipDecision('rejected'));
if(el('membershipRemoveBtn')) el('membershipRemoveBtn').addEventListener('click',()=>updateMembershipDecision('removed'));
if(el('membershipMakeAdminBtn')) el('membershipMakeAdminBtn').addEventListener('click',()=>updateMembershipDecision('make_admin'));
if(el('membershipRemoveAdminBtn')) el('membershipRemoveAdminBtn').addEventListener('click',()=>updateMembershipDecision('remove_admin'));
if(el('refreshMembershipQueueBtn')) el('refreshMembershipQueueBtn').addEventListener('click',refreshMembershipQueue);
if(el('showMemberListBtn')) el('showMemberListBtn').addEventListener('click',toggleMemberList);
if(el('closeMemberListBtn')) el('closeMemberListBtn').addEventListener('click',closeMemberList);
if(el('memberListSearch')) el('memberListSearch').addEventListener('input',renderMemberList);
if(el('memberListResults')) el('memberListResults').addEventListener('click',event=>{
  const row=event.target.closest('[data-member-key]');
  if(!row) return;
  selectMemberListRecord(row.dataset.memberKey || '');
});
if(el('imagePreviewCloseBtn')) el('imagePreviewCloseBtn').addEventListener('click',closeImagePreview);
if(el('imagePreviewModal')) el('imagePreviewModal').addEventListener('click',event=>{
  if(event.target===el('imagePreviewModal')) closeImagePreview();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeImagePreview();
    closeMemberList();
    closeAnnouncementWelcome();
  }
});
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-zoom-image]');
  if(!link) return;
  event.preventDefault();
  openImagePreview(link.href, link.dataset.previewTitle || link.textContent || 'Görsel');
});
if(el('memberLoginBtn')) el('memberLoginBtn').addEventListener('click',attemptMembershipLogin);
if(el('memberLogoutBtn')) el('memberLogoutBtn').addEventListener('click',logoutMembershipSession);
if(el('topbarLogoutBtn')) el('topbarLogoutBtn').addEventListener('click',logoutMembershipSession);
if(el('navDrawerLogoutBtn')) el('navDrawerLogoutBtn').addEventListener('click',()=>{
  closeNavDrawer();
  logoutMembershipSession();
});
if(el('deleteMyDataBtn')) el('deleteMyDataBtn').addEventListener('click',requestDeleteMyData);
if(el('guestLoginBtn')) el('guestLoginBtn').addEventListener('click',guestMembershipLogin);
if(el('showLoginBtn')) el('showLoginBtn').addEventListener('click',focusMembershipLogin);
if(el('showSignupBtn')) el('showSignupBtn').addEventListener('click',focusMembershipSignup);
if(el('webMenuToggle')) el('webMenuToggle').addEventListener('click',openNavDrawer);
['memberLoginSicil','memberLoginEmail','memberLoginPhoneLast4','memberLoginPassword'].forEach(id=>{ const node=el(id); if(node) node.addEventListener('input',scheduleAutoMembershipLogin); });
function keepMembershipInputVisible(node){
  const target=node?.closest?.('.auth-login-card') || node;
  [120,360,720].forEach(delay=>window.setTimeout(()=>target?.scrollIntoView({behavior:'smooth',block:'center'}), delay));
}
['memberLoginSicil','memberLoginPassword'].forEach(id=>{
  const node=el(id);
  if(node) node.addEventListener('focus',()=>keepMembershipInputVisible(node));
});
['exchangeCurrentRegion','exchangeCurrentCity','exchangeCurrentDistrict','exchangeTargetRegion','exchangeTargetCity','exchangeTargetDistrict','exchangeCompany','exchangeRole','exchangeWorkType','exchangeNotify','exchangePhone','exchangeEmail','exchangeNote'].forEach(id=>{ const node=el(id); if(node){ node.addEventListener('input',()=>renderExchangeRequest()); node.addEventListener('change',()=>renderExchangeRequest()); } });
if(el('saveExchangeBtn')) el('saveExchangeBtn').addEventListener('click',saveExchangeRequest);
if(el('deleteExchangeBtn')) el('deleteExchangeBtn').addEventListener('click',deleteExchangeRequest);
if(el('clearExchangeBtn')) el('clearExchangeBtn').addEventListener('click',clearExchangeRequest);
if(el('fillExchangeFromProfileBtn')) el('fillExchangeFromProfileBtn').addEventListener('click',fillExchangeFromProfile);
['forumCategory','forumNick','forumTitle','forumBody','forumReplyBody'].forEach(id=>{ const node=el(id); if(node){ node.addEventListener('input',saveForumDraft); node.addEventListener('change',saveForumDraft); } });
if(el('forumPublishBtn')) el('forumPublishBtn').addEventListener('click',submitFirebaseForumTopic);
if(el('forumRefreshBtn')) el('forumRefreshBtn').addEventListener('click',()=>loadFirebaseForumTopics(true));
if(el('forumReplyBtn')) el('forumReplyBtn').addEventListener('click',submitFirebaseForumReply);
if(el('forumCategoryRail')) el('forumCategoryRail').addEventListener('click',event=>{
  const button=event.target.closest('[data-forum-category-filter]');
  if(!button) return;
  activeForumCategoryFilter=button.dataset.forumCategoryFilter || 'all';
  if(activeForumCategoryFilter!=='all' && el('forumCategory')) el('forumCategory').value=activeForumCategoryFilter;
  selectedForumTopicId='';
  firebaseForumReplies=[];
  renderForum();
});
if(el('sendNotificationBtn')) el('sendNotificationBtn').addEventListener('click',sendFirebaseAnnouncement);
if(el('refreshAnnouncementsBtn')) el('refreshAnnouncementsBtn').addEventListener('click',loadFirebaseAnnouncements);
if(el('cancelNotificationEditBtn')) el('cancelNotificationEditBtn').addEventListener('click',()=>{
  clearNotificationInputs();
  if(el('notificationStatus')) el('notificationStatus').textContent='Düzenleme iptal edildi.';
});
if(el('notificationImageFile')) el('notificationImageFile').addEventListener('change',handleNotificationImageFile);
if(el('notificationImageUrl')) el('notificationImageUrl').addEventListener('input',renderNotificationImagePreview);
if(el('openWhatsappShareBtn')) el('openWhatsappShareBtn').addEventListener('click',()=>openWhatsappShare());
if(el('announcementWelcomeCloseBtn')) el('announcementWelcomeCloseBtn').addEventListener('click',closeAnnouncementWelcome);
if(el('notificationHistory')) el('notificationHistory').addEventListener('click',event=>{
  const editButton=event.target.closest('[data-notification-edit]');
  if(editButton){
    const item=notificationItemById(editButton.dataset.notificationEdit, editButton.dataset.notificationSource || '');
    if(item) setNotificationEditMode(item);
    return;
  }
  const deleteButton=event.target.closest('[data-notification-delete]');
  if(deleteButton){
    deleteNotificationAnnouncement(deleteButton.dataset.notificationDelete, deleteButton.dataset.notificationSource || '');
  }
});
if(el('forumTopicList')) el('forumTopicList').addEventListener('click',event=>{
  const button=event.target.closest('[data-forum-topic]');
  if(button) selectForumTopic(button.dataset.forumTopic);
});
if(el('forumTopicDetail')) el('forumTopicDetail').addEventListener('click',event=>{
  const deleteTopic=event.target.closest('[data-forum-delete-topic]');
  if(deleteTopic){
    deleteFirebaseForumTopic(deleteTopic.dataset.forumDeleteTopic);
    return;
  }
  const deleteReply=event.target.closest('[data-forum-delete-reply]');
  if(deleteReply){
    deleteFirebaseForumReply(selectedForumTopicId,deleteReply.dataset.forumDeleteReply);
    return;
  }
  const reportTopic=event.target.closest('[data-forum-report-topic]');
  if(reportTopic){
    reportForumTopic(reportTopic.dataset.forumReportTopic);
    return;
  }
  const reportReply=event.target.closest('[data-forum-report-reply]');
  if(reportReply){
    reportForumReply(reportReply.dataset.forumReportReply);
    return;
  }
  const blockAuthor=event.target.closest('[data-forum-block-author]');
  if(blockAuthor){
    blockForumAuthor(blockAuthor.dataset.forumBlockAuthor, blockAuthor.dataset.forumBlockName || 'Kullanıcı');
  }
});
['pointerdown','touchstart','keydown','scroll'].forEach(evt=>window.addEventListener(evt, handleActivity, {passive:true}));
window.addEventListener('touchstart', handleEdgeSwipeStart, {passive:true});
window.addEventListener('touchmove', handleEdgeSwipeMove, {passive:true});
window.addEventListener('touchend', handleEdgeSwipeEnd, {passive:true});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    clearTimeout(idleTimer);
  }else{
    restartIdleTimer();
  }
});
document.addEventListener('click',event=>{
  if(!event.target.closest('[data-info-toggle], .info-panel')) closeInfoPanels();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeInfoPanels();
    closeNavDrawer();
    closeProfileDrawer();
  }
});
el('splashScreen').addEventListener('click',hideSplash);
if(el('dismissHomeAnnouncementBtn')) el('dismissHomeAnnouncementBtn').addEventListener('click',dismissHomeAnnouncement);
if(el('homeBulletinList')) el('homeBulletinList').addEventListener('click',event=>{
  const item=event.target.closest('[data-bulletin-index]');
  if(!item) return;
  activateHomeBulletin(Number(item.dataset.bulletinIndex||0));
});
if(el('homeBulletinFeature')) el('homeBulletinFeature').addEventListener('click',event=>{
  const button=event.target.closest('[data-bulletin-page]');
  if(!button) return;
  setPage(button.dataset.bulletinPage);
  if(button.dataset.bulletinPage==='salary'){
    setMode('maas');
    setStep(2);
  }
  window.scrollTo({top:0,behavior:'smooth'});
});

// init
lockViewportZoom();
populateMonths();
populateProfileSelects();
populateDegrees();
fillCalendarInputs(true);
syncTedbTaxMethod();
if(el('izinMonth')) el('izinMonth').value=new Date().toISOString().slice(0,7);
if(el('leaveDate')) el('leaveDate').value=new Date().toISOString().slice(0,10);
if(el('leaveEndDate')) el('leaveEndDate').value=sval('leaveDate');
if(el('workMonth')) el('workMonth').value=new Date().toISOString().slice(0,7);
if(el('workDate')) el('workDate').value=new Date().toISOString().slice(0,10);
if(el('workEndDate')) el('workEndDate').value=sval('workDate');
clearLeaveForm();
clearWorkForm();
setProfileDrawerTab('card');
closeInfoPanels();
renderProfiles();
const restoredLastProfile=restoreLastProfile();
restoreSalaryForm();
syncDengeTazminati();
if(el('workMonth')) el('workMonth').value=sval('month') || el('workMonth').value;
if(el('workDate') && !sval('workDate').startsWith(sval('workMonth'))) el('workDate').value=`${sval('workMonth')}-01`;
if(el('workEndDate') && !sval('workEndDate').startsWith(sval('workMonth'))) el('workEndDate').value=sval('workDate');
syncLeaveRangeFromInputs();
syncWorkRangeFromInputs();
if(!restoredLastProfile) renderActiveProfileSummary();
const bootSession=getMemberSession();
setPage(bootSession?.active || isGuestSession(bootSession) ? (canAccessPage('home') ? 'home' : 'membership') : 'membership');
if(!bootSession?.active) setMembershipAuthMode('choice');
setMode('maas');
setStep(1);
initSocial();
initFacilities();
loadLocalPlatformBulletins();
loadPlatformBulletinOverrides();
renderHomeBulletins();
loadFirebaseAnnouncements();
loadMembershipForm();
refreshCurrentMemberFromFirebase();
registerNotificationToken();
window.setTimeout(()=>loadUserDataSync(true),700);
populateExchangeSelects();
loadExchangeRequest();
syncWorkModeFields();
updateCalendarCards();
renderWorkModule();
renderWorkModels();
computeAll();
if(document.readyState === 'complete'){
  startSplashSequence();
} else {
  window.addEventListener('load', startSplashSequence, {once:true});
}
window.setTimeout(showHomeAnnouncement, 1800);
