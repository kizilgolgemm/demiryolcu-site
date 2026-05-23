function buildNavigationUrl(query){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

window.buildNavigationUrl = buildNavigationUrl;

const TCDD_TARIFF_SOURCE = 'https://static.tcdd.gov.tr/webfiles/userfiles/files/duyuru/2024/2024misafir.pdf';
const TCDD_DIRECTORY_SOURCE = 'https://kamutesisleri.com/kurum/tcdd';
const DEMIRYOLIS_SOURCE = 'https://demiryolis.org.tr/tesislerimiz/';
const DEMIRYOLIS_BRANCH_SOURCE = 'https://demiryolis.org.tr/subelerimiz/';

window.fallbackContacts = {
  tcdd_support: {
    id: 'tcdd_support',
    operator: 'TCDD',
    name: 'TCDD Destek Hizmetleri / Sosyal Tesisler',
    phone1: '0312 520 49 26',
    phone2: '0312 520 49 36',
    address: 'Hacı Bayram Mahallesi, Hipodrom Caddesi No: 3, Altındağ / Ankara',
    navigationQuery: 'Hacı Bayram Mahallesi Hipodrom Caddesi No 3 Altındağ Ankara',
    navigationUrl: buildNavigationUrl('Hacı Bayram Mahallesi Hipodrom Caddesi No 3 Altındağ Ankara'),
    sourceType: 'official'
  },
  demiryolis_genel_merkez: {
    id: 'demiryolis_genel_merkez',
    operator: 'DEMİRYOL-İŞ',
    name: 'DEMİRYOL-İŞ Sendikası Genel Merkez',
    phone1: '0312 231 80 29',
    phone2: '0312 231 80 32',
    address: 'Necatibey Caddesi, Sezenler Sokak No:5, Sıhhiye / Ankara',
    navigationQuery: 'Necatibey Caddesi Sezenler Sokak No 5 Sıhhiye Ankara',
    navigationUrl: buildNavigationUrl('Necatibey Caddesi Sezenler Sokak No 5 Sıhhiye Ankara'),
    sourceType: 'official'
  }
};

window.railwayFacilities = [
  {
    id: 'tcdd-fenerbahce',
    operator: 'TCDD',
    category: 'misafirhane_egitim_dinlenme',
    name: 'Fenerbahçe Eğitim ve Dinlenme Tesisi',
    city: 'İstanbul',
    district: 'Kadıköy',
    status: 'active_listed_in_2026_tariff',
    note: 'TCDD misafirhane ücret duyurusunda adı geçen eğitim/dinlenme tesisidir. Eğitim programları önceliklidir; uygunluk için TCDD tesis iletişimi teyit edilmelidir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-haydarpasa',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Haydarpaşa Misafirhanesi',
    city: 'İstanbul',
    district: 'Haydarpaşa',
    status: 'active_listed_in_2026_tariff',
    note: 'TCDD ücret duyurusunda Haydarpaşa başlığı altında listelenir. Rezervasyon ve güncel durum telefonla teyit edilmelidir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-adana',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Adana Misafirhanesi',
    city: 'Adana',
    district: 'Seyhan',
    status: 'active_listed_in_2026_tariff',
    note: 'TCDD ücret duyurusunda Adana grubu içinde listelenir. Güncel müsaitlik için destek hattından teyit alınmalıdır.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-afyon',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Afyon Misafirhanesi',
    city: 'Afyonkarahisar',
    district: 'Merkez',
    status: 'active_listed_in_2026_tariff',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-sivas',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Sivas Misafirhanesi',
    city: 'Sivas',
    district: 'Merkez',
    status: 'active_listed_in_2026_tariff',
    note: 'TCDD ücret duyurusunda standart olmayan oda notuyla birlikte listelenir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-konya',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Konya Misafirhanesi',
    city: 'Konya',
    district: 'Merkez',
    status: 'temporarily_closed',
    note: 'TCDD duyurusundaki nota göre tadilat/açılış işlemleri tamamlanıncaya kadar hizmet durumu teyit edilmelidir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-izmir-basmane',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'İzmir / Basmane Misafirhanesi',
    city: 'İzmir',
    district: 'Basmane',
    status: 'temporarily_closed',
    note: 'TCDD duyurusundaki nota göre tadilat/açılış işlemleri tamamlanıncaya kadar hizmet durumu teyit edilmelidir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-malatya',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Malatya Misafirhanesi',
    city: 'Malatya',
    district: 'Merkez',
    status: 'closed_after_2023_earthquake',
    note: 'TCDD duyurusunda 06.02.2023 depremleri sonrası hizmet veremediği belirtilir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'TCDD ücret duyurusu',
    sourceUrl: TCDD_TARIFF_SOURCE
  },
  {
    id: 'tcdd-ankara',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'TCDD Ankara Misafirhanesi',
    city: 'Ankara',
    district: 'Altındağ',
    status: 'public_directory',
    note: 'Kamu tesisleri rehberinde TCDD misafirhanesi olarak listelenir; resmi rezervasyon için TCDD hattından teyit alınmalıdır.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'tcdd-kayseri',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'TCDD Kayseri Misafirhanesi',
    city: 'Kayseri',
    district: 'Kocasinan',
    status: 'public_directory',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'tcdd-alasehir',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'TCDD Alaşehir Misafirhanesi',
    city: 'Manisa',
    district: 'Alaşehir',
    status: 'public_directory',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'tcdd-kahramanmaras',
    operator: 'TCDD',
    category: 'misafirhane',
    name: 'Kahramanmaraş TCDD Misafirhanesi',
    city: 'Kahramanmaraş',
    district: 'Onikişubat',
    status: 'public_directory',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'tcdd-urla',
    operator: 'TCDD',
    category: 'kamp_tatil',
    name: 'TCDD Urla Eğitim ve Dinlenme Tesisleri',
    city: 'İzmir',
    district: 'Urla',
    status: 'public_directory',
    note: 'Tatil/kamp tesisi olarak rehberde yer alır; dönemsel başvuru ve kontenjan bilgisi ayrıca teyit edilmelidir.',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'tcdd-antalya',
    operator: 'TCDD',
    category: 'sosyal_tesis',
    name: 'TCDD Sosyal Tesisleri',
    city: 'Antalya',
    district: 'Konyaaltı',
    status: 'public_directory',
    fallbackContactId: 'tcdd_support',
    sourceLabel: 'Kamu Tesisleri Rehberi',
    sourceUrl: TCDD_DIRECTORY_SOURCE
  },
  {
    id: 'demiryolis-didim',
    operator: 'DEMİRYOL-İŞ',
    category: 'kamp_tatil',
    name: 'Didim Eğitim ve Dinlenme Tesisi',
    city: 'Aydın',
    district: 'Didim',
    status: 'listed_on_official_site',
    note: 'Demiryol-İş resmi tesisler sayfasında listelenir. Rezervasyon ve dönem bilgileri sendika üzerinden teyit edilmelidir.',
    fallbackContactId: 'demiryolis_genel_merkez',
    sourceLabel: 'Demiryol-İş resmi tesisler',
    sourceUrl: DEMIRYOLIS_SOURCE
  },
  {
    id: 'demiryolis-sakran',
    operator: 'DEMİRYOL-İŞ',
    category: 'kamp_tatil',
    name: 'Grand Demiryol-İş Şakran Tesisi',
    city: 'İzmir',
    district: 'Şakran',
    status: 'listed_on_official_site',
    note: 'Demiryol-İş resmi tesisler sayfasında listelenir. Konaklama koşulları sendika tarafından teyit edilmelidir.',
    fallbackContactId: 'demiryolis_genel_merkez',
    sourceLabel: 'Demiryol-İş resmi tesisler',
    sourceUrl: DEMIRYOLIS_SOURCE
  },
  {
    id: 'demiryolis-ankara',
    operator: 'DEMİRYOL-İŞ',
    category: 'misafirhane',
    name: 'Demiryol-İş Ankara Misafirhanesi',
    city: 'Ankara',
    district: 'Sıhhiye',
    status: 'listed_on_official_site',
    note: 'Demiryol-İş resmi tesisler sayfasında Ankara Misafirhanesi olarak listelenir.',
    fallbackContactId: 'demiryolis_genel_merkez',
    sourceLabel: 'Demiryol-İş resmi tesisler',
    sourceUrl: DEMIRYOLIS_SOURCE
  },
  {
    id: 'demiryolis-haydarpasa',
    operator: 'DEMİRYOL-İŞ',
    category: 'misafirhane',
    name: 'Demiryol-İş Haydarpaşa Misafirhanesi',
    city: 'İstanbul',
    district: 'Kadıköy / Haydarpaşa',
    status: 'listed_on_official_site',
    phone: '0216 336 41 46',
    address: 'Çayırbaşı Caddesi, Prof. Macit Erbudak Sokak No:4, Kadıköy / İstanbul',
    navigationQuery: 'Prof. Macit Erbudak Sokak No 4 Kadıköy İstanbul',
    navigationUrl: buildNavigationUrl('Prof. Macit Erbudak Sokak No 4 Kadıköy İstanbul'),
    note: 'Telefon ve adres bilgisi Demiryol-İş şubeler sayfasındaki Haydarpaşa kaydıyla eşleştirilmiştir.',
    fallbackContactId: 'demiryolis_genel_merkez',
    sourceLabel: 'Demiryol-İş resmi kaynak',
    sourceUrl: DEMIRYOLIS_BRANCH_SOURCE
  }
];
