export interface ThoughtBubble {
  id: string;
  timeOfDay: string;
  dailyScene: string;
  sceneIcon: string;
  dervishThought: string;
  innerWhisper: string;
  digestedWisdomTitle: string;
  digestedWisdomBody: string;
  sourceMaster: string;
  sacredReference: string;
  selfInquiryQuestion: string;
  contemplationPrompts: string[];
}

export interface NefsStation {
  step: number;
  name: string;
  subtitle: string;
  description: string;
  dailyLifeSign: string;
  dervishAdvice: string;
}

export interface DivinePresence {
  level: string;
  realm: string;
  description: string;
  dailyReflection: string;
}

export interface TreatiseChapter {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  dervishNote: string;
  keyQuote: string;
}

export interface SufiMasterSource {
  master: string;
  era: string;
  works: string[];
  coreTeaching: string;
}

export const DERVISH_THOUGHT_BUBBLES: ThoughtBubble[] = [
  {
    id: 'seher-ayna',
    timeOfDay: 'Seher Vakti · Pencere Önü',
    dailyScene: 'Sabah dinginliğinde buğulu cama vuran ilk güneş ışığına ve aynadaki yüzüne bakarken...',
    sceneIcon: '🌅',
    dervishThought:
      'Aynaya baktığımda gördüğüm şu yüz gerçekten bana mı ait, yoksa bir Gizli Hazine’nin bilinmek ve sevilmek için kendine tuttuğu bir ayna mıyım?',
    innerWhisper:
      'Sahilde durup dalgaları sayan akıl yoruldu; artık o ummana dalıp suyun kendisinde kaybolma vaktidir.',
    digestedWisdomTitle: 'Kenz-i Mahfî (Gizli Hazine) ve Vech-i Bâkî',
    digestedWisdomBody:
      'Tasavvuf; aklın sınırlı hendesesinden gönlün sonsuz fezasına kanat açışın, kâl (söz) ilminden hâl (yaşantı) ilmine intikalin mukaddes yolculuğudur. Kutsi rivayette buyrulduğu üzere: "Ben gizli bir hazine idim; bilinmek istedim (sevdim) ve mahlukatı yarattım." Kâinat, O’nun sonsuz cemâl ve celâl sıfatlarının tecelli ettiği bir aynadır; bu aynanın en berrak noktası ise insandır.',
    sourceMaster: 'Hakikat Girişi · Kenz-i Mahfî Sırrı',
    sacredReference: '"Ben gizli bir hazine idim; bilinmek istedim (sevdim) ve mahlukatı yarattım."',
    selfInquiryQuestion:
      'Bugün hayatı sadece sahilden izleyen ve ölçüp biçen bir gözlemci gibi mi yaşayacaksın, yoksa baktığın her yüzde ve kendi kalbinde O’nun Vech-i Bâkî’sini (Bâki olan Yüzünü) görmeye niyet eden bir dalgıç gibi mi?',
    contemplationPrompts: [
      'Sözde (kâl) değil, yaşantıda (hâl) O’nu arıyorum.',
      'Gördüğüm her güzellik O’nun cemâlinin aynasıdır.',
      'Kalbimdeki tozları silip Vech-i Bâkî’ye dönüyorum.'
    ]
  },
  {
    id: 'kusluk-golge',
    timeOfDay: 'Kuşluk Vakti · Sokakta Yürürken',
    dailyScene: 'Güneş yükselirken kaldırıma düşen kendi gölgesini ve binaların gölgelerini seyrederken...',
    sceneIcon: '☀️',
    dervishThought:
      'Şu kaldırıma düşen gölgem, güneş olmasa bir saniye bile var olabilir mi? Bizler de kendi başımıza var olduğumuzu sanan gölgeleriz; O’nun ışığı çekilse geriye ne kalır?',
    innerWhisper:
      'Aldığım her nefeste âlem bir kez yok oluyor, verdiğim her nefeste yeniden yaratılıyor; ben ise bunu kesintisiz bir film sanıyorum.',
    digestedWisdomTitle: 'Vahdet-i Vücûd, Gölge Varlık ve Halk-ı Cedîd',
    digestedWisdomBody:
      'Şeyhü’l-Ekber Muhyiddin İbnü’l-Arabî’ye göre varlık tektir ve o da Cenâb-ı Hakk’ın Zât’ıdır. Yaratılmışlar âlemi, güneşin ışığı karşısında beliren gölgeler gibidir. Eşya kendi zâtında ademdir (yokluktur), Hakk’ın tecellisiyle vücûd bulur. "Tecellî-i Dâim" ve "Halk-ı Cedîd" (yeni yaratılış) ile bir nefes alırken âlem fenâ bulur, nefes verirken yeniden inşâ olunur.',
    sourceMaster: 'Muhyiddin İbnü’l-Arabî · Füsûsu’l-Hikem & el-Fütûhâtü’l-Mekkiyye',
    sacredReference: '"O’nun zâtından başka her şey helak olucudur / yokluktadır." (el-Kasas, 28/88)',
    selfInquiryQuestion:
      'Kendi başına müstakil bir gücü ve varlığı olmayan "gölge" şeylere (endişelere, dünyevî hırslara, fânilere) neden asıl Güneş’ten daha fazla hakikat atfediyorsun?',
    contemplationPrompts: [
      'Gölgeye değil, gölgeyi var eden Işığa bakıyorum.',
      'Şu an aldığım nefes, Halk-ı Cedîd ile yeni bir başlangıçtır.',
      'Masivâ yokluktadır; gerçek varlık yalnızca O’na aittir.'
    ]
  },
  {
    id: 'ogle-carsi',
    timeOfDay: 'Öğle Vakti · Çarşı ve İnsanlar Arasında',
    dailyScene: 'Rızık telaşıyla koşturan kalabalığın içinde, insanların paraya, makama ve sebeplere bağlanışını izlerken...',
    sceneIcon: '⚖️',
    dervishThought:
      'Herkes kapıyı çalıyor ama kapıyı açanı kapının tokmağı sanıyor... Sebebi yerine getirelim, çalışalım; lakin kalp sarayımıza sebebin kendisini sultan etmeyelim.',
    innerWhisper:
      'Gassâlin elindeki ölü, suyun sıcaklığından ya da soğukluğundan şikâyet eder mi? İtirazı bıraktığım an yüküm omuzlarımdan kalktı.',
    digestedWisdomTitle: 'Sebepler Perdesi, Şirk-i Hafî ve Küllî İradeye Teslimiyet',
    digestedWisdomBody:
      'Gavsü’l-A’zam Abdülkâdir Geylânî, Fütûhu’l-Gayb’da buyurur: "Hakk’ın huzurunda, gassâlin (ölü yıkayıcısının) elindeki ölü gibi ol!" İnsanoğlunun en büyük yanılgısı sebeplere tapınmasıdır. Paraya, makama, hekime, güce güvenip kalbi o sebebe bağlamak gizli şirktir (şirk-i hafî). Hakiki muvahhid sebebi yerine getirir fakat kalbini yalnızca Müsebbib’e (Allah’a) rapteder.',
    sourceMaster: 'Seyyid Abdülkâdir Geylânî · Fütûhu’l-Gayb & Cilâü’l-Hâtır',
    sacredReference: '"Sebebi yerine getir, fakat kalbini sebebe değil onu var eden Müsebbib’e bağla."',
    selfInquiryQuestion:
      'Bugün güvendiğin veya kaybetmekten korktuğun hangi dünyevî sebep (para, statü, insanların onayı) kalp sarayında O’na duyduğun tevekkülün önüne geçiyor?',
    contemplationPrompts: [
      'Elim işimde, gönlüm ise sebepleri yaratan Rabbimde.',
      'Kalp sarayıma O’ndan başka korku ve beklenti sokmuyorum.',
      'Kaderin cilveleri karşısında içsel itirazımı teslimiyete dönüştürüyorum.'
    ]
  },
  {
    id: 'ikindi-hali',
    timeOfDay: 'İkindi Vakti · Eski Bir Halı Tezgâhı Önünde',
    dailyScene: 'Bir dokuma tezgâhında halının arka yüzündeki karmaşık düğümlere, sonra ön yüzündeki kusursuz nakışa bakarken...',
    sceneIcon: '🧶',
    dervishThought:
      'Başıma gelen zorluklara baktığımda hep halının tersindeki kopuk iplikleri ve düğümleri görüyordum. Meğer Nakkaş, halının ön yüzünde benim göremediğim bir rahmet deseni dokuyormuş.',
    innerWhisper:
      'Sağlam gemiyi delen Hızır’a aklım itiraz etti; oysa o delik, gemiyi korsan kralın gaspından kurtaran merhametin ta kendisiydi.',
    digestedWisdomTitle: 'Halının Ters Yüzü, Hayır-Şer İllüzyonu ve Hızır Sırrı',
    digestedWisdomBody:
      'İnsan idraki zaman ve mekân kayıtlarıyla sınırlıdır. Halının tersine bakan sadece karmaşık düğümler görür; yüzüne bakan ise kusursuz bir nizam müşahede eder. Hz. Mûsâ ile Hızır (a.s.) kıssasında geminin delinmesi zahiren şer görünürken hakikatte gemiyi kurtaran bir rahmettir. Hakiki tefekkür insanı acziyetini itirafa ve "Kahrın da hoş, lütfun da hoş" sırrına ulaştırır.',
    sourceMaster: 'Mevlânâ Celâleddîn-i Rûmî & Kehf Sûresi Tefekkürü',
    sacredReference: '"Olur ki hoşlanmadığınız bir şey sizin için hayırlıdır... Allah bilir, siz bilmezsiniz." (el-Bakara, 2/216)',
    selfInquiryQuestion:
      'Hayatında şu an "neden böyle oldu?" diye yakındığın o düğüm, seni daha büyük bir tufandan koruyan ilahî bir nakışın parçası olabilir mi?',
    contemplationPrompts: [
      'Halının tersindeki düğümlere değil, Nakkaş’ın hikmetine güveniyorum.',
      'Aklımın ermediği yerde "O bilir, ben bilmem" diyerek sükûn buluyorum.',
      'Kahrın da hoş, lütfun da hoş.'
    ]
  },
  {
    id: 'aksam-sohbet',
    timeOfDay: 'Akşam Vakti · Bir Dost Meclisi ve Ney Sesi',
    dailyScene: 'Uzaktan gelen hüzünlü bir ney taksimini dinlerken ve karşısındaki dostun gözlerinde hakikati ararken...',
    sceneIcon: '🪈',
    dervishThought:
      'Kamışlıktan koparılmış şu ney neden ağlıyor? Çünkü içi benlikten boşaltılmış; kendi nefesini değil, Nâyî’nin nefesini üflüyor. Benim içim ise hâlâ kendi arzularımla dolu...',
    innerWhisper:
      'Şems bana bir ayna tuttu; orada kendimi değil, O’nun cemâlini gördüm. İlim dediğim kâl, aşkın hâl ateşinde eridi.',
    digestedWisdomTitle: 'Aynalık Sırrı ve Ney’in Gurbet Feryadı',
    digestedWisdomBody:
      'Mevlânâ ile Şems-i Tebrîzî’nin buluşması iki deryanın kavuşmasıdır (Meracu’l-Bahreyn). Şems, Makâlât’ında "aynalık" sırrını anlatır: Gönüller birbirinde Hakk’ın cemâlini temâşâ eder. Mesnevî’nin ilk kelimesi "Bişnev" (Dinle) hitabıdır: Ney aslî vatanından (Bezm-i Elest’ten) koparılmış, bağrı kızgın demirle dağlanıp içi benlikten boşaltılmış, Nâyî’nin (ilahî nefesin) üflemesiyle ses veren kâmil insanın sembolüdür.',
    sourceMaster: 'Mevlânâ Celâleddîn-i Rûmî & Şems-i Tebrîzî · Mesnevî & Makâlât',
    sacredReference: '"Dinle neyden, nasıl hikâyet etmede; ayrılıklardan şikâyet etmede... Hamdım, piştim, yandım."',
    selfInquiryQuestion:
      'İç dünyandaki gürültü ve huzursuzluk, aslında ruhunun aslî vatanına (Bezm-i Elest’e) duyduğu o derin vuslat özleminin sesi olabilir mi?',
    contemplationPrompts: [
      'İçimi nefsanî fazlalıklardan boşaltıp O’nun nefesine açıyorum.',
      'Karşılaştığım her gönüle kusur arayan değil, cemâl yansıtan bir ayna oluyorum.',
      'Gurbet acımı akıl yürütmelerle değil, ilahî muhabbetle dindiriyorum.'
    ]
  },
  {
    id: 'yatsi-pervane',
    timeOfDay: 'Gece Vakti · Mum Işığı ve Pervane',
    dailyScene: 'Karanlık odada yanan bir mumun etrafında dönen pervaneyi ve kendi içindeki "ben" iddiasını sorgularken...',
    sceneIcon: '🕯️',
    dervishThought:
      'Pervane mumu uzaktan anlatırken henüz iki ayrı şey vardı: pervane ve mum. Ama ateşe atılıp kül olduğunda artık ortada pervane mi kaldı ki "ben" diyebilsin?',
    innerWhisper:
      'Yılanın kabuğunu değiştirdiği gibi benliğimden sıyrıldım; bir de baktım ki seven de O, sevilen de O, arayan da O, aranan da O imiş!',
    digestedWisdomTitle: 'Pervane ve Mum Temsili, Benlik Zindanını Yıkmak',
    digestedWisdomBody:
      'Hallâc-ı Mansûr’un Kitâbü’t-Tavâsîn’de anlattığı Pervane ve Mum temsilinde, pervane alevde yanıp kül olduğunda konuşan artık pervane değil bizzat ateştir ("Ben aradan çıktım, O var"). Bâyezîd-i Bistâmî ise otuz yıllık mücahedesinin sırrını şöyle özetler: "İnsanın en büyük zindanı, kendi \'ben\' fikridir. O benlik putu kırılmadıkça, tevhidin hakiki tadı alınamaz." Niyâzî-i Mısrî’nin deyişiyle: "Kendini çıkar aradan, geriye kalsın Yaradan."',
    sourceMaster: 'Hallâc-ı Mansûr & Bâyezîd-i Bistâmî & Niyâzî-i Mısrî',
    sacredReference: '"Nefsimi bir deri gibi soydum... Bir de baktım ki, seven de O, sevilen de O; arayan da O, aranan da O imiş!"',
    selfInquiryQuestion:
      'Hayatında seni en çok yoran kırgınlıkların, öfkelerin ve alınganlıkların tamamı, koruduğun o "ben" zindanının duvarlarına çarpmandan kaynaklanıyor olabilir mi?',
    contemplationPrompts: [
      '"Ben" iddiasının ağırlığını bırakıp hiçliğin hafifliğine sığınıyorum.',
      'Güneş ile ayna arasındaki benlik tozunu siliyorum.',
      'Seven de O, sevilen de O; arayan da O, aranan da O.'
    ]
  },
  {
    id: 'gece-kozmos',
    timeOfDay: 'Gece Yarısı · Yıldızlı Gökyüzü ve Dergâh Eşiği',
    dailyScene: 'Başını kaldırıp samanyoluna bakarken, parmak uçlarındaki atomların zikrini ve Yunus’un taşıdığı doğru odunları düşünürken...',
    sceneIcon: '🌌',
    dervishThought:
      'Gökte dönen milyarlarca galaksi ile şu parmağımın ucundaki atomun çekirdeği etrafında dönen elektronlar aynı semâyı icra ediyor. Nereye dönersem döneyim, O’nun vechi orada!',
    innerWhisper:
      'Bu dergâha eğri odun bile giremez... Kâinatın zikrine katılmak istiyorsam önce kalbimin ve amelimin eğriliğini doğrultmalıyım.',
    digestedWisdomTitle: 'Kuantum Zerrelerinden Kozmik Sonsuzluğa Tesbih ve Edep Yâ Hû',
    digestedWisdomBody:
      'Atom altı parçacıklardan (kuantum titreşimlerinden) ışık hızıyla genişleyen galaksilere kadar her zerre sürekli bir devran, bir semâ ve "Hû" zikri halindedir. Hz. Ali (k.v.) buyurur: "Sen kendini küçük bir cisim sanırsın; oysa en büyük âlem (âlem-i ekber) sende dürülmüştür." Bu muazzam nizama uyum sağlamanın kapısı ise "Edep Yâ Hû" şiarıdır: Yaratılmış her varlığa Yaratıcı’nın bir emâneti nazarıyla hürmet etmek ve Yunus Emre gibi gönül dergâhına eğri odun sokmamaktır.',
    sourceMaster: 'Hz. Ali (k.v.) & Yunus Emre & İbnü’l-Arabî (Nefes-i Rahmânî)',
    sacredReference: '"O’nu hamd ile tesbih etmeyen hiçbir şey yoktur..." (el-İsrâ, 17/44) · "Nereye dönerseniz dönünüz, Allah’ın vechi oradadır." (el-Bakara, 2/115)',
    selfInquiryQuestion:
      'Atomlarından yıldızlara kadar bütün kâinat kusursuz bir edep ve tesbih ile dönerken, sen bugün karşılaştığın her insana ve her varlığa "Yaratıcı’nın emaneti" edebiyle bakabildin mi?',
    contemplationPrompts: [
      'İçimdeki zerrelerin ve dışarıdaki kâinatın "Hû" zikrine kalbimle katılıyorum.',
      'Edep Yâ Hû: Her varlığa Yaratıcı’nın emaneti nazarıyla hürmet ediyorum.',
      'Gönül dergâhıma eğri düşünce ve kibir sokmuyorum.'
    ]
  }
];

export const NEFS_STATIONS: NefsStation[] = [
  {
    step: 1,
    name: 'Nefs-i Emmâre',
    subtitle: 'Ham Nefis Durağı',
    description: 'Kötülüğü emreden, şehvet, hırs ve gazabın esiri olan, suçu daima dışarıda arayan ham nefis mertebesi.',
    dailyLifeSign: 'Eleştirildiğinde hemen savunmaya geçmek, öfkeye kapılmak ve kendi kusurunu görmemek.',
    dervishAdvice: 'Derviş bu durakta ilk olarak nefsinin kendisine kurduğu tuzakları fark eder ve "Lâ ilâhe illallâh" ile içindeki heva putlarını kırmaya başlar.'
  },
  {
    step: 2,
    name: 'Nefs-i Levvâme',
    subtitle: 'Kendini Kınayan ve Uyanan Nefis',
    description: 'Hata ve gafletten sonra pişmanlık duyan, vicdanı uyanmış ve kendini hesaba çekmeye başlayan nefis.',
    dailyLifeSign: 'Bir kalp kırdıktan veya gaflete düştükten sonra içte duyulan o sızı ve "Ben bunu nasıl yaptım?" muhasebesi.',
    dervishAdvice: 'Pişmanlık sızısı rahmettir; halının tersinden yüzüne dönmek için ilk uyanış kıvılcımıdır.'
  },
  {
    step: 3,
    name: 'Nefs-i Mülhime',
    subtitle: 'İlhama Mazhar Olan Nefis',
    description: 'İyilik ve kötülüğü hikmetle ayırt eden, kalbine ilahî ilhamlar ve tefekkür pencereleri açılmaya başlayan nefis.',
    dailyLifeSign: 'Günlük olayların arkasındaki ince mesajları okumaya başlamak, yalnızlıktan ve tefekkürden lezzet almak.',
    dervishAdvice: 'Kâl ilminden hâl ilmine geçiş burada hızlanır; kul artık her olayda kendine söylenen ilahî sözü dinler.'
  },
  {
    step: 4,
    name: 'Nefs-i Mutmainne',
    subtitle: 'Huzur ve Sükûna Ermiş Nefis',
    description: 'Şüphe ve kaygılardan arınmış, zikirle ve hakikat idrakiyle doyuma, emniyete ve içsel sükûna ermiş nefis.',
    dailyLifeSign: 'Dünyanın fırtınaları ortasında bile kalbin merkezinde sarsılmaz bir güven ve "Allah bize yeter" huzuru taşımak.',
    dervishAdvice: '"Ey mutmain olan nefis! Dön Rabbine..." (Fecr, 89/27) hitabının duyulduğu gerçek vuslat eşiğidir.'
  },
  {
    step: 5,
    name: 'Nefs-i Râdiye',
    subtitle: 'Her Tecelliden Razı Olan Nefis',
    description: 'Başına gelen her tecelliden, kahırdan da lütuftan da gönül hoşnutluğu ile razı olan, itirazı terk etmiş nefis.',
    dailyLifeSign: 'Kaybı da kazancı da aynı tebessümle karşılamak; gassâlin elindeki ölü gibi Küllî İrade’ye teslim olmak.',
    dervishAdvice: '"Kahrın da hoş, lütfun da hoş" sırrı artık dilde bir söz değil, kalbin doğal nefesidir.'
  },
  {
    step: 6,
    name: 'Nefs-i Mardiyye',
    subtitle: 'Hakk’ın Kendisinden Razı Olduğu Nefis',
    description: 'Cenâb-ı Hakk’ın kendisinden razı olduğu, ahlâk-ı hamîdeye (güzel ahlâka) ve sonsuz şefkate bürünmüş nefis.',
    dailyLifeSign: 'Yaratılmış her varlığa Yaratıcı’dan ötürü katıksız merhamet duymak, incitmemek ve incinmemek.',
    dervishAdvice: 'Kulun iradesi Hakk’ın rızasıyla birleşmiştir; baktığı her yerde O’nun emanetini görür.'
  },
  {
    step: 7,
    name: 'Nefs-i Kâmile (Safiye)',
    subtitle: 'Arınmış ve Ayna Olmuş Zirve Makam',
    description: 'Bütün masivâdan arınmış, fenâ ve bekâ sırrına ermiş, içi boşaltılmış bir ney gibi ilahî nefese tercüman olan saf nefis.',
    dailyLifeSign: 'Benlik perdesinin tamamen kalktığı, varlığın birliğini (Vahdet-i Vücûd) her nefeste şuhûd eden İnsan-ı Kâmil ufku.',
    dervishAdvice: 'Güneş ile ayna arasında hiçbir toz kalmamıştır; ayna parladığını kendinden bilmez.'
  }
];

export const DIVINE_PRESENCES: DivinePresence[] = [
  {
    level: '1. Mertebe',
    realm: 'Gayb-ı Mutlak / Lâhût Âlemi (Amâ)',
    description: 'Zât mertebesidir; hiçbir vasıf, isim ve taayyünle kayıtlanamaz. Akılların ve idraklerin tamamen lâl olduğu "Amâ" (koyu bulut) makamıdır.',
    dailyReflection: 'Bilemeyeceğini bilmek ve Zât’ın sonsuzluğu karşısında hayret ve sükût içinde kalmak.'
  },
  {
    level: '2. Mertebe',
    realm: 'Ceberût Âlemi',
    description: 'İlahî isim ve sıfatların (Esmâ ve Sıfât) taayyün ettiği, küllî ruh ve akıllar mertebesidir.',
    dailyReflection: 'Hayattaki her rahmette Rahmân’ı, her hikmette Hakîm’i, her rızıkta Rezzâk ismini okumak.'
  },
  {
    level: '3. Mertebe',
    realm: 'Melekût Âlemi',
    description: 'Misal, hayal ve melekler âlemidir; mânâların latif suretlere büründüğü berzahtır.',
    dailyReflection: 'Sadık rüyalar, kalbe doğan ilhamlar ve eşyanın ardındaki mânâ diliyle konuşmak.'
  },
  {
    level: '4. Mertebe',
    realm: 'Nâsût Âlemi (Şehadet Âlemi)',
    description: 'Hissedilen, maddî ve cismanî âlemdir; kesretin (çokluğun) en kesif biçimde tezahür ettiği mertebedir.',
    dailyReflection: 'Çokluğun (kesretin) içinde boğulmadan her suretin arkasındaki Tek’i (Vahdet’i) görmek.'
  },
  {
    level: '5. Mertebe',
    realm: 'İnsan-ı Kâmil',
    description: 'Bütün bu mertebeleri kendi bünyesinde toplayan, cem eden ve ilahî isimlerin tamamına ayna olan zirve makamdır.',
    dailyReflection: 'Âlem-i ekberin kendi kalbinde dürüldüğünü idrak ederek emanetin hakkını vermek.'
  }
];

export const TREATISE_CHAPTERS: TreatiseChapter[] = [
  {
    number: 'I',
    title: 'Mânâ Âlemine Açılan Kapı ve Tasavvufun Gayesi',
    subtitle: 'Kâl İlminden Hâl İlmine İntikal & Kenz-i Mahfî',
    summary:
      'Akıl sahilde durup denizin dalgalarını seyreden ve tasnif eden bir gözlemciye benzer; tasavvuf ise o ummana dalıp dalganın ve suyun kendisinde yok olmayı göze alan dalgıçların yoludur. Varoluşun ilk kıvılcımı "Ben gizli bir hazine idim; bilinmek istedim (sevdim) ve mahlukatı yarattım" sırrındaki ilahî muhabbettir.',
    dervishNote: 'Derviş, hakikati yalnızca kitaplardan okuyup tartışmaz; onu bizzat yaşayarak ("zevk" ve "şuhûd" ile) tadar.',
    keyQuote: 'Kâinat, O’nun sonsuz cemâl ve celâl sıfatlarının tecelli ettiği bir aynadan başka bir şey değildir.'
  },
  {
    number: 'II',
    title: 'Vahdet-i Vücûd ve İbnü’l-Arabî: Varlığın Birliği',
    subtitle: 'Hakiki Varlık, Gölge Varlık ve Halk-ı Cedîd',
    summary:
      'Vahdet-i Vücûd panteist bir "evren Tanrı’dır" indirgemeciliği değil; mutlak anlamda varlığın (Vücûd-ı Mutlak) yalnızca Allah’a ait olduğu, masivânın ise güneş karşısındaki gölge gibi kendi başına müstakil varlığı bulunmadığı hakikatidir. "Tecellî-i Dâim" ve "Halk-ı Cedîd" ile kâinat her nefes alıp verişte yeniden var edilir.',
    dervishNote: 'Eşyaya baktığında eşyanın kendisini değil, eşyayı her salise yoktan var eden Tecellî-i Dâim’i gör.',
    keyQuote: '"O’nun zâtından başka her şey helak olucudur / yokluktadır." (el-Kasas, 28/88)'
  },
  {
    number: 'III',
    title: '"Ene’l-Hak" Sırrı ve Hallâc-ı Mansûr',
    subtitle: 'Kitâbü’t-Tavâsîn ve Aşkın Pervanesi',
    summary:
      'Hallâc’ın sözü firavunane bir benlik iddiası değil, beşerî benliğin Hakk’ın varlığında bütünüyle eriyip kül olmasının ("Ben aradan çıktım, O var") ifadesidir. Pervane muma atılıp alevde kül olduğunda artık ortada pervane kalmamıştır, yalnızca ateş vardır.',
    dervishNote: 'Dervişlik, kendisine zulmedenlere dahi tebessümle dua edebilecek kadar benlikten geçmektir.',
    keyQuote: 'Pervane "Ben ateşim" dediğinde, konuşan pervane değil bizzat ateşin kendisidir.'
  },
  {
    number: 'IV',
    title: 'Bâyezîd-i Bistâmî ve Benlik Zindanını Yıkmak',
    subtitle: 'Sekr ve Sahv Arasındaki Denge',
    summary:
      'Aynaya bakan kişi güneşi gördüğünde "Güneş ne kadar parlak!" der; ayna parladığını kendinden bilmez. Bâyezîd otuz yıl mücahede sonunda insanın en büyük zindanının kendi "ben" fikri olduğunu idrak etmiştir.',
    dervishNote: 'En büyük hicâb (perde) dağlar veya denizler değil, insanın "ben" fikridir.',
    keyQuote: '"Nefsimi bir deri gibi soydum... Bir de baktım ki, seven de O, sevilen de O; arayan da O, aranan da O imiş!"'
  },
  {
    number: 'V',
    title: 'Şems-i Tebrîzî ve Mevlânâ: Aşk, Sohbet ve Fenâ Aynası',
    subtitle: 'Meracu’l-Bahreyn ve Ney’in Dört Sırrı',
    summary:
      'Şems ile Mevlânâ’nın buluşması iki deryanın kavuşmasıdır. Mesnevî’deki Ney; aslî vatandan (Bezm-i Elest) koparılmış, bağrı dağlanıp içi benlikten boşaltılmış, yedi delik açılmış ve ancak Nâyî’nin (ilahî nefesin) üflemesiyle ses çıkarabilen kâmil insanın sembolüdür.',
    dervishNote: 'İnsan bu kesret âleminde gurbettedir; gurbet acısını dindirecek tek ilaç ilahî aşktır.',
    keyQuote: '"Hamdım, piştim, yandım."'
  },
  {
    number: 'VI',
    title: 'Gavsü’l-A’zam Abdülkâdir Geylânî: Zühd ve Tevekkül',
    subtitle: 'İradeyi İlahi İradeye Terk Etmek & Sebepler Perdesi',
    summary:
      'Geylânî şeriat ile hakikati kusursuz bir ahenkle birleştirir. Paraya, makama, hekime veya güce kalben bağlanmak gizli şirktir (şirk-i hafî). Hakiki muvahhid sebebi yerine getirir ama kalbini yalnızca Müsebbib’e bağlar.',
    dervishNote: 'Sebeplerin içinde yaşa ama kalp sarayına O’ndan başkasının muhabbet ve korkusunu sokma.',
    keyQuote: '"Hakk’ın huzurunda, gassâlin (ölü yıkayıcısının) elindeki ölü gibi ol!"'
  },
  {
    number: 'VII',
    title: 'Mikro Âlemden Makro Evrene: Kuantumdan Kozmosa Tesbih',
    subtitle: 'Atom Altı Semâ, Nefes-i Rahmânî ve Âlem-i Ekber',
    summary:
      'Çekirdek etrafında dönen elektronlardan ışık hızından hızlı genişleyen galaksilere kadar her zerre "Hû" zikri ve semâ halindedir. Makro kozmosta ne varsa mikro kozmos olan insanda onun fihristi dürülmüştür.',
    dervishNote: 'Dışarıdaki evrenin zikrini duymak isteyen sâlik, önce kendi içindeki zerrelerin ve kalbinin zikrine kulak vermelidir.',
    keyQuote: '"Sen kendini küçük bir cisim sanırsın; oysa en büyük âlem (âlem-i ekber) sende dürülmüştür." — Hz. Ali (k.v.)'
  },
  {
    number: 'VIII',
    title: 'Tefekkürden Tevekküle: Acziyet İdraki ve Hayır-Şer Yanılgısı',
    subtitle: 'Halının Yüzü ve Hz. Mûsâ ile Hızır (a.s.) Kıssası',
    summary:
      'Halının tersine bakan sadece düğümleri görür; yüzüne bakan kusursuz nakşı müşahede eder. Hz. Mûsâ ile Hızır kıssasında zahiren şer görünen hadiselerin ardındaki ilahî rahmet ortaya çıktığında aklın acziyeti anlaşılır.',
    dervishNote: 'Acziyetini anlayan kul çırpınmayı bırakır; mutlak teslimiyetle tevekkül kucağına atılır.',
    keyQuote: '"Olur ki hoşlanmadığınız bir şey sizin için hayırlıdır... Allah bilir, siz bilmezsiniz." (el-Bakara, 2/216)'
  },
  {
    number: 'IX',
    title: '"Kendini Bilen Rabbini Bilir" ve Benlik Perdesinin Yırtılması',
    subtitle: 'Marifetullahın Anahtarı ve Etvâr-ı Seb’a',
    summary:
      'Nefsinin fakirliğini, faniliğini ve aczini bilen insan; Rabbinin zenginliğini (Ganiyy), bâkiliğini ve kudretini bilir. Ruhun kemâlât yolculuğu Emmâre’den Kâmile’ye uzanan yedi nefis durağından geçer.',
    dervishNote: 'Güneş ile ayna arasındaki benlik tozu temizlenmedikçe güneş aynada görünmez.',
    keyQuote: '"Zât-ı Hakk’a yol bulayım dersen ey gafil heman / Kendini çıkar aradan, geriye kalsın Yaradan." — Niyâzî-i Mısrî'
  },
  {
    number: 'X',
    title: 'Dergâh Âdâbı, Terbiye ve Seyr ü Sülûk Yolu',
    subtitle: 'Edep Yâ Hû, Hizmet, Çile ve Sohbet Meclisleri',
    summary:
      'Tasavvuf baştan başa edeptir. İlimden önce hizmet gelir; Yunus Emre’nin kırk yıl Taptuk Emre dergâhına doğru odun taşıması nefsin nasıl istikamet kazandığının timsalidir. Sohbet ve "Lâ ilâhe illallâh" zikriyle kalpteki putlar yıkılır.',
    dervishNote: 'Edep; Hakk’ın huzurunda olduğunu bir an bile unutmamak ve her varlığa emanet nazarıyla hürmet etmektir.',
    keyQuote: '"Bu dergâha eğri odun bile giremez." — Yunus Emre'
  }
];

export const SUFI_MASTERS_SOURCES: SufiMasterSource[] = [
  {
    master: 'Şeyhü’l-Ekber Muhyiddin İbnü’l-Arabî',
    era: 'ö. 1240',
    works: ['Füsûsu’l-Hikem', 'el-Fütûhâtü’l-Mekkiyye', 'Risâletü’l-Vücûd'],
    coreTeaching: 'Vahdet-i Vücûd, Merâtibü’l-Vücûd (Beş İlahî Hazret), A’yân-ı Sâbite ve Halk-ı Cedîd (Her an yeni yaratılış).'
  },
  {
    master: 'Ebû’l-Mugîs el-Hallâc Mansûr',
    era: 'ö. 922',
    works: ['Kitâbü’t-Tavâsîn', 'Dîvân-ı Hallâc'],
    coreTeaching: 'Fenâ mertebesinde benliğin yanıp kül oluşu, Pervane ve Mum temsili, mutlak teslimiyet.'
  },
  {
    master: 'Mevlânâ Celâleddîn-i Rûmî',
    era: 'ö. 1273',
    works: ['Mesnevî-i Mânevî', 'Dîvân-ı Kebîr', 'Fîhi Mâ Fîh', 'Mecâlis-i Seb’a'],
    coreTeaching: 'Bişnev (Dinle) çağrısı, Ney metaforu, zıtlar âlemi ve vuslat arayışı olarak ilahî aşk.'
  },
  {
    master: 'Şems-i Tebrîzî',
    era: '13. Yüzyıl',
    works: ['Makâlât'],
    coreTeaching: 'Gönüllerin birbirinde Hakk’ın cemâlini ve celâlini seyrettiği "Aynalık" sırrı, kâlden hâle geçiş.'
  },
  {
    master: 'Gavsü’l-A’zam Seyyid Abdülkâdir Geylânî',
    era: 'ö. 1166',
    works: ['Fütûhu’l-Gayb', 'el-Gunye li-Tâlibî Tarîki’l-Hakk', 'Cilâü’l-Hâtır'],
    coreTeaching: 'Şeriat ve hakikat dengesi, sebepler perdesini aşmak, Küllî İrade’ye tam tevekkül.'
  },
  {
    master: 'Sultanü’l-Ârifîn Bâyezîd-i Bistâmî',
    era: 'ö. 874',
    works: ['Tabakâtü’s-Sûfiyye (Sülemî)', 'er-Risâle (Kuşeyrî)', 'Tezkiretü’l-Evliyâ (Attâr)'],
    coreTeaching: 'Benlik zindanını yıkmak, nefsi yılanın kabuğu gibi soymak, sekr ve sahv dengesi.'
  },
  {
    master: 'Klasik Tasavvuf Şaheserleri',
    era: 'Klasik Dönem',
    works: [
      'Kûtü’l-Kulûb (Ebû Tâlib el-Mekkî)',
      'İhyâu Ulûmi’d-Dîn & Mişkâtü’l-Envâr (İmâm Gazâlî)',
      'Mantıku’t-Tayr (Ferîdüddîn Attâr)',
      'Risâle-i Kuşeyriyye (Kuşeyrî)'
    ],
    coreTeaching: 'Kalp tasfiyesi, nefis terbiyesi, edep ve marifetullah yolculuğunun temel kaynakları.'
  }
];
