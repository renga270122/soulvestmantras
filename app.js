const mantras = [
  {
    name: "Ganesha",
    type: "god",
    wikiQuery: "Ganesha",
    purpose: "For removing obstacles and beginning any work with clarity.",
    brief:
      "Ganesha is worshipped as Vighnaharta, the remover of obstacles, and as the lord of wisdom and auspicious beginnings.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    famousIast: "vakratuṇḍa mahākāya sūryakoṭi samaprabha | nirvighnaṃ kuru me deva sarvakāryeṣu sarvadā ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्तिः प्रचोदयात्॥",
    gayatriIast: "oṃ ekadantāya vidmahe vakratuṇḍāya dhīmahi tanno dantiḥ pracodayāt ||"
  },
  {
    name: "Shiva",
    type: "god",
    wikiQuery: "Shiva",
    purpose: "For inner transformation, detachment, and spiritual depth.",
    brief:
      "Shiva is revered as Mahadeva, representing dissolution of ego, meditation, and cosmic consciousness.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ नमः शिवाय॥",
    famousIast: "oṃ namaḥ śivāya ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्॥",
    gayatriIast: "oṃ tatpuruṣāya vidmahe mahādevāya dhīmahi tanno rudraḥ pracodayāt ||"
  },
  {
    name: "Vishnu",
    type: "god",
    wikiQuery: "Vishnu",
    purpose: "For preservation, balance, and protection in life.",
    brief:
      "Vishnu is the sustainer in the Hindu trinity, associated with preserving dharma through various avatars.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ नमो नारायणाय॥",
    famousIast: "Shantakaram Bhujagashayanam Padmanabham Suresham Vishvadharam Gaganasadrisham Meghavarnam Shubhangam",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ नारायणाय विद्महे वासुदेवाय धीमहि तन्नो विष्णुः प्रचोदयात्॥",
    gayatriIast: "oṃ nārāyaṇāya vidmahe vāsudevāya dhīmahi tanno viṣṇuḥ pracodayāt ||"
  },
  {
    name: "Krishna",
    type: "god",
    wikiQuery: "Krishna",
    purpose: "For devotion, wisdom, and joyful living.",
    brief:
      "Krishna, an avatar of Vishnu, is teacher of the Bhagavad Gita and symbol of divine love and wisdom.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे॥",
    famousIast: "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ देवकीनन्दनाय विद्महे वासुदेवाय धीमहि तन्नः कृष्णः प्रचोदयात्॥",
    gayatriIast: "oṃ devakīnandanāya vidmahe vāsudevāya dhīmahi tannaḥ kṛṣṇaḥ pracodayāt ||"
  },
  {
    name: "Rama",
    type: "god",
    wikiQuery: "Rama",
    purpose: "For righteousness, courage, and ideal conduct.",
    brief:
      "Rama is honored as Maryada Purushottama, the embodiment of dharma, truth, and noble leadership.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "श्री राम जय राम जय जय राम॥",
    famousIast: "Shri Rama Rama Rameti Rame Rame Manorame Sahasranama Tatulyam Ramanama Varanane",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ दाशरथाय विद्महे सीतावल्लभाय धीमहि तन्नो रामः प्रचोदयात्॥",
    gayatriIast: "oṃ dāśarathāya vidmahe sītāvallabhāya dhīmahi tanno rāmaḥ pracodayāt ||"
  },
  {
    name: "Ramar",
    type: "god",
    wikiQuery: "Rama",
    purpose: "For dharma, courage, family harmony, and righteous success.",
    brief:
      "Ramar is widely worshipped in Tamil tradition as the ideal king and embodiment of truth, discipline, and compassion.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "श्री राम जय राम जय जय राम॥",
    famousIast: "Shri Rama Rama Rameti Rame Rame Manorame Sahasranama Tatulyam Ramanama Varanane",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ दाशरथाय विद्महे सीतावल्लभाय धीमहि तन्नो रामः प्रचोदयात्॥",
    gayatriIast: "oṃ dāśarathāya vidmahe sītāvallabhāya dhīmahi tanno rāmaḥ pracodayāt ||"
  },
  {
    name: "Hanuman",
    type: "god",
    wikiQuery: "Hanuman",
    purpose: "For strength, devotion, and overcoming fear.",
    brief:
      "Hanuman represents supreme bhakti, courage, and selfless service, especially in the Ramayana tradition.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ हं हनुमते नमः॥",
    famousIast: "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtham Vatatmajam Vanarayuthamukhyam Shri Ramadutam Sharanam Prapadye",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि तन्नो हनुमान् प्रचोदयात्॥",
    gayatriIast: "oṃ āñjaneyāya vidmahe vāyuputrāya dhīmahi tanno hanumān pracodayāt ||"
  },
  {
    name: "Durga",
    type: "god",
    wikiQuery: "Durga",
    purpose: "For protection, courage, and victory over negativity.",
    brief:
      "Durga is worshipped as the Divine Mother who destroys evil and protects devotees.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ दुं दुर्गायै नमः॥",
    famousIast: "Ya Devi Sarvabhuteshu Shakti Rupena Samsthita Namastasyai Namastasyai Namastasyai Namo Namah",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ कात्यायन्यै विद्महे कन्याकुमार्यै धीमहि तन्नो दुर्गिः प्रचोदयात्॥",
    gayatriIast: "oṃ kātyāyanyai vidmahe kanyakumāryai dhīmahi tanno durgiḥ pracodayāt ||"
  },
  {
    name: "Lakshmi",
    type: "god",
    wikiQuery: "Lakshmi",
    purpose: "For prosperity, harmony, and auspiciousness.",
    brief:
      "Lakshmi is the goddess of wealth and fortune, worshipped for abundance with purity and gratitude.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ श्रीं महालक्ष्म्यै नमः॥",
    famousIast: "Namastestu Mahamaye Shripithe Surapujite Shankha Chakra Gadahaste Mahalakshmi Namostute",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ महालक्ष्म्यै विद्महे विष्णुपत्नी च धीमहि तन्नो लक्ष्मीः प्रचोदयात्॥",
    gayatriIast: "oṃ mahālakṣmyai vidmahe viṣṇupatnī ca dhīmahi tanno lakṣmīḥ pracodayāt ||"
  },
  {
    name: "Saraswati",
    type: "god",
    wikiQuery: "Saraswati",
    purpose: "For learning, speech, arts, and refined intellect.",
    brief:
      "Saraswati is the goddess of knowledge, music, and wisdom, invoked by students and artists.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ ऐं सरस्वत्यै नमः॥",
    famousIast: "Saraswati Namastubhyam Varade Kamarupini Vidyarambham Karishyami Siddhir Bhavatu Me Sada",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ सरस्वत्यै विद्महे ब्रह्मपत्न्यै धीमहि तन्नो देवी प्रचोदयात्॥",
    gayatriIast: "oṃ sarasvatyai vidmahe brahmapatnyai dhīmahi tanno devī pracodayāt ||"
  },
  {
    name: "Dhakshinamoorthy",
    type: "god",
    wikiQuery: "Dakshinamurti",
    purpose: "For wisdom, guru kripa, silence-based meditation, and removal of ignorance.",
    brief:
      "Dhakshinamoorthy is Shiva as the primordial guru, imparting highest knowledge through silence and inner awakening.",
    famousTitle: "Famous Guru Sloka",
    famousDevanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः । गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥",
    famousIast: "gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ | guruḥ sākṣāt paraṃ brahma tasmai śrīgurave namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ दक्षिणामूर्तये विद्महे ज्ञानरूपाय धीमहि तन्नो धीशः प्रचोदयात्॥",
    gayatriIast: "oṃ dakṣiṇāmūrtaye vidmahe jñānarūpāya dhīmahi tanno dhīśaḥ pracodayāt ||"
  },
  {
    name: "Murugan",
    type: "god",
    wikiQuery: "Murugan",
    purpose: "For courage, wisdom, victory, and spiritual strength.",
    brief:
      "Murugan (Kartikeya/Skanda) is deeply revered in Tamil tradition as the youthful lord of knowledge and valor.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ सरवनभवाय नमः॥",
    famousIast: "oṃ saravaṇabhavāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ तत्पुरुषाय विद्महे महासेनाय धीमहि तन्नः स्कन्दः प्रचोदयात्॥",
    gayatriIast: "oṃ tatpuruṣāya vidmahe mahāsenāya dhīmahi tannaḥ skandaḥ pracodayāt ||"
  },
  {
    name: "Varahi Amman",
    type: "god",
    wikiQuery: "Varahi",
    purpose: "For protection, overcoming negativity, and fearless progress.",
    brief:
      "Varahi Amman is worshipped as a powerful mother goddess and guardian force in Shakta tradition.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ ऐं ग्लौं ऐं वराह्यै नमः॥",
    famousIast: "oṃ aiṃ glauṃ aiṃ varāhyai namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ वराहमुख्यै विद्महे दण्डनाथायै धीमहि तन्नो वाराही प्रचोदयात्॥",
    gayatriIast: "oṃ varāhamukhyai vidmahe daṇḍanāthāyai dhīmahi tanno vārāhī pracodayāt ||"
  },
  {
    name: "Lakshmi Narasimhar",
    type: "god",
    wikiQuery: "Lakshmi Narasimha",
    purpose: "For protection, courage, and removal of fear and obstacles.",
    brief:
      "Lakshmi Narasimhar is the compassionate form of Narasimha with Mahalakshmi, worshipped for protection and grace.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥",
    famousIast: "ugraṃ vīraṃ mahāviṣṇuṃ jvalantaṃ sarvatomukham | nṛsiṃhaṃ bhīṣaṇaṃ bhadraṃ mṛtyumṛtyuṃ namāmyaham ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ वज्रनखाय विद्महे तीक्ष्णदंष्ट्राय धीमहि तन्नो नृसिंहः प्रचोदयात्॥",
    gayatriIast: "oṃ vajranakhāya vidmahe tīkṣṇadaṃṣṭrāya dhīmahi tanno nṛsiṃhaḥ pracodayāt ||"
  },
  {
    name: "Surya (Sun)",
    type: "planet",
    wikiQuery: "Sun",
    purpose: "For vitality, confidence, leadership, and health.",
    brief:
      "Surya is the visible source of light and life, honored in Vedic tradition as the energizing cosmic force.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ सूर्याय नमः॥",
    famousIast: "oṃ sūryāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ भास्कराय विद्महे महातेजाय धीमहि तन्नः सूर्यः प्रचोदयात्॥",
    gayatriIast: "oṃ bhāskarāya vidmahe mahātejāya dhīmahi tannaḥ sūryaḥ pracodayāt ||"
  },
  {
    name: "Chandra (Moon)",
    type: "planet",
    wikiQuery: "Moon",
    purpose: "For emotional balance, peace, and mental calm.",
    brief:
      "Chandra governs mind and emotions in Vedic thought, symbolizing softness and reflection.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ सोमाय नमः॥",
    famousIast: "oṃ somāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ सोमाय विद्महे अमृततत्त्वाय धीमहि तन्नः चन्द्रः प्रचोदयात्॥",
    gayatriIast: "oṃ somāya vidmahe amṛtatattvāya dhīmahi tannaḥ candraḥ pracodayāt ||"
  },
  {
    name: "Mangala (Mars)",
    type: "planet",
    wikiQuery: "Mars",
    purpose: "For courage, discipline, and decisive action.",
    brief:
      "Mangala is associated with energy, valor, and assertive strength in Navagraha worship.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ अं अंगारकाय नमः॥",
    famousIast: "oṃ aṃ aṅgārakāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ अंगारकाय विद्महे शक्तिहस्ताय धीमहि तन्नो भौमः प्रचोदयात्॥",
    gayatriIast: "oṃ aṅgārakāya vidmahe śaktihastāya dhīmahi tanno bhaumaḥ pracodayāt ||"
  },
  {
    name: "Budha (Mercury)",
    type: "planet",
    wikiQuery: "Mercury (planet)",
    purpose: "For communication, logic, and learning ability.",
    brief:
      "Budha is linked with intellect, speech, analysis, and adaptability.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ बुं बुधाय नमः॥",
    famousIast: "oṃ buṃ budhāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ बुधाय विद्महे सौम्यरूपाय धीमहि तन्नो बुधः प्रचोदयात्॥",
    gayatriIast: "oṃ budhāya vidmahe saumyārūpāya dhīmahi tanno budhaḥ pracodayāt ||"
  },
  {
    name: "Brihaspati (Jupiter)",
    type: "planet",
    wikiQuery: "Jupiter",
    purpose: "For wisdom, teaching, dharma, and good judgment.",
    brief:
      "Brihaspati is the guru of the devas and represents expansive knowledge and ethics.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ बृं बृहस्पतये नमः॥",
    famousIast: "oṃ bṛṃ bṛhaspataye namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ बृहस्पतये विद्महे दिव्यदेहाय धीमहि तन्नो गुरुः प्रचोदयात्॥",
    gayatriIast: "oṃ bṛhaspataye vidmahe divyadehāya dhīmahi tanno guruḥ pracodayāt ||"
  },
  {
    name: "Shukra (Venus)",
    type: "planet",
    wikiQuery: "Venus",
    purpose: "For relationships, beauty, comforts, and creative refinement.",
    brief:
      "Shukra is associated with aesthetics, enjoyment, and refined worldly wisdom.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ शुं शुक्राय नमः॥",
    famousIast: "oṃ śuṃ śukrāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ शुक्राय विद्महे दैत्याचार्याय धीमहि तन्नः शुक्रः प्रचोदयात्॥",
    gayatriIast: "oṃ śukrāya vidmahe daityācāryāya dhīmahi tannaḥ śukraḥ pracodayāt ||"
  },
  {
    name: "Shani (Saturn)",
    type: "planet",
    wikiQuery: "Shani",
    purpose: "For discipline, patience, karma balancing, and endurance.",
    brief:
      "Shani is respected as a strict karmic teacher who rewards sincerity, effort, and humility.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ शं शनैश्चराय नमः॥",
    famousIast: "oṃ śaṃ śanaiścarāya namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ शनैश्चराय विद्महे छायापुत्राय धीमहि तन्नः मन्दः प्रचोदयात्॥",
    gayatriIast: "oṃ śanaiścarāya vidmahe chāyāputrāya dhīmahi tannaḥ mandaḥ pracodayāt ||"
  },
  {
    name: "Rahu",
    type: "planet",
    wikiQuery: "Rahu",
    purpose: "For transforming confusion, ambition, and sudden changes into growth.",
    brief:
      "Rahu is a shadow graha linked with worldly desire, unconventional paths, and breakthroughs.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ रां राहवे नमः॥",
    famousIast: "oṃ rāṃ rāhave namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ नागमुखाय विद्महे सैंहिकेयाय धीमहि तन्नो राहुः प्रचोदयात्॥",
    gayatriIast: "oṃ nāgamukhāya vidmahe saiṃhikeyāya dhīmahi tanno rāhuḥ pracodayāt ||"
  },
  {
    name: "Ketu",
    type: "planet",
    wikiQuery: "Ketu",
    purpose: "For detachment, intuition, and spiritual insight.",
    brief:
      "Ketu is the moksha-oriented shadow graha, often associated with liberation and deep introspection.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ कें केतवे नमः॥",
    famousIast: "oṃ keṃ ketave namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ धूम्रकेतवे विद्महे चित्रवर्णाय धीमहि तन्नः केतुः प्रचोदयात्॥",
    gayatriIast: "oṃ dhūmraketave vidmahe citravarṇāya dhīmahi tannaḥ ketuḥ pracodayāt ||"
  },
  {
    name: "Navagraha (All Planets)",
    type: "planet",
    wikiQuery: "Navagraha",
    purpose: "For planetary harmony, balance, and overall graha shanti.",
    brief:
      "Navagraha sloka invokes all nine planets together for balance, grace, and aligned karmic movement.",
    famousTitle: "Navagraha Sloka",
    famousDevanagari: "ॐ आदित्याय च सोमाय मंगलाय बुधाय च । गुरु शुक्र शनिभ्यश्च राहवे केतवे नमः॥",
    famousIast: "Om Adityaya Cha Somaya Mangalaya Budhaya Cha Guru Shukra Shanibhyashcha Rahave Ketave Namah",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ नवग्रहदेवताभ्यो नमः॥",
    gayatriIast: "Om Navagraha Devatabhyo Namah"
  },
  {
    name: "Shirdi Sai Baba",
    type: "guru",
    wikiQuery: "Sai Baba of Shirdi",
    purpose: "For faith (Shraddha), patience (Saburi), and compassionate living.",
    brief:
      "Sai Baba of Shirdi is revered as a saint who taught universal love, service, and devotion beyond boundaries.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ साईं राम॥",
    famousIast: "Om Sai Namo Namah Shri Sai Namo Namah Sadguru Sai Namo Namah Om Sai Namo Namah",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ शिर्डीवासाय विद्महे सच्चिदानन्दाय धीमहि तन्नः साईः प्रचोदयात्॥",
    gayatriIast: "Om Sadguru Sai Nathaya Vidmahe Vitheshwaraya Dhimahi Tanno Sai Prachodayat"
  },
  {
    name: "Raghavendra Swamy",
    type: "guru",
    wikiQuery: "Raghavendra Tirtha",
    purpose: "For grace, protection, and success in righteous efforts.",
    brief:
      "Sri Raghavendra Swamy is a celebrated Madhva saint known for scholarship, miracles, and compassionate blessings.",
    famousTitle: "Famous Stotra Line",
    famousDevanagari: "पूज्याय राघवेन्द्राय सत्यधर्मरताय च । भजतां कल्पवृक्षाय नमतां कामधेनवे॥",
    famousIast: "Om Sri Raghavendraya Namah",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ राघवेन्द्राय विद्महे भक्तप्रियाय धीमहि तन्नो गुरुुः प्रचोदयात्॥",
    gayatriIast: "oṃ rāghavendrāya vidmahe bhaktapriyāya dhīmahi tanno guruḥ pracodayāt ||"
  },
  {
    name: "Adi Shankaracharya",
    type: "guru",
    wikiQuery: "Adi Shankara",
    purpose: "For non-dual wisdom, clarity of thought, and scriptural understanding.",
    brief:
      "Adi Shankaracharya revived Advaita Vedanta and composed influential hymns and philosophical commentaries.",
    famousTitle: "Famous Verse",
    famousDevanagari: "भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते॥",
    famousIast: "bhaja govindaṃ bhaja govindaṃ govindaṃ bhaja mūḍhamate ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ शंकराचार्याय विद्महे अद्वैतमतस्थाय धीमहि तन्नो गुरुः प्रचोदयात्॥",
    gayatriIast: "oṃ śaṅkarācāryāya vidmahe advaitamatasthāya dhīmahi tanno guruḥ pracodayāt ||"
  },
  {
    name: "Kanchi Sankaracharyar",
    type: "guru",
    wikiQuery: "Kanchi Paramacharya",
    purpose: "For guru bhakti, scriptural clarity, humility, and disciplined spiritual living.",
    brief:
      "Kanchi Sankaracharyar is revered as the acharya of the Kanchi Kamakoti lineage and a guiding light for Vedic dharma.",
    famousTitle: "Famous Chant",
    famousDevanagari: "जय जय शङ्कर हर हर शङ्कर॥",
    famousIast: "jaya jaya śaṅkara hara hara śaṅkara ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ काञ्चीपीठाधीशाय विद्महे शंकराचार्याय धीमहि तन्नो गुरुः प्रचोदयात्॥",
    gayatriIast: "oṃ kāñcīpīṭhādhīśāya vidmahe śaṅkarācāryāya dhīmahi tanno guruḥ pracodayāt ||"
  },
  {
    name: "Puttaparthi Sai Baba",
    type: "guru",
    wikiQuery: "Sathya Sai Baba",
    purpose: "For service-minded living, devotion, and inner discipline.",
    brief:
      "Sathya Sai Baba of Puttaparthi is revered for teachings on love, service, truth, and devotion.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ श्री साईं राम॥",
    famousIast: "oṃ śrī sāī rāma ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ सत्यसाईश्वराय विद्महे सत्यदेवाय धीमहि तन्नः साईः प्रचोदयात्॥",
    gayatriIast: "oṃ satyasāīśvarāya vidmahe satyadevāya dhīmahi tannaḥ sāīḥ pracodayāt ||"
  },
  {
    name: "Yogi Ram Surat Kumar",
    type: "guru",
    wikiQuery: "Yogi Ramsuratkumar",
    purpose: "For surrender, devotion, and inner remembrance of the divine name.",
    brief:
      "Yogi Ram Surat Kumar of Tiruvannamalai is honored as a saint of deep surrender and constant divine remembrance.",
    famousTitle: "Famous Chant",
    famousDevanagari: "योगि राम सुरत कुमार जय गुरुराया॥",
    famousIast: "Om Sri Yogi Ramsuratkumar Jaya Guru Raya",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ योगिरामसुरत्कुमाराय विद्महे तपस्विरूपाय धीमहि तन्नो गुरुः प्रचोदयात्॥",
    gayatriIast: "oṃ yogirāmasuratkumārāya vidmahe tapasvirūpāya dhīmahi tanno guruḥ pracodayāt ||"
  },
  {
    name: "Gnanananda Giri",
    type: "guru",
    wikiQuery: "Swami Gnanananda Giri",
    purpose: "For peace, self-knowledge, and meditative clarity.",
    brief:
      "Sri Gnanananda Giri is remembered as a realized sage associated with silence, compassion, and inner illumination.",
    famousTitle: "Famous Chant",
    famousDevanagari: "ॐ ज्ञानानन्द गुरवे नमः॥",
    famousIast: "oṃ jñānānanda gurave namaḥ ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ ज्ञानानन्दाय विद्महे ब्रह्मनिष्ठाय धीमहि तन्नो गुरुः प्रचोदयात्॥",
    gayatriIast: "oṃ jñānānandāya vidmahe brahmaniṣṭhāya dhīmahi tanno guruḥ pracodayāt ||"
  }
];

const grid = document.getElementById("mantraGrid");
const searchInput = document.getElementById("searchInput");
const typeSelect = document.getElementById("typeSelect");
const entitySelect = document.getElementById("entitySelect");
const mantraSelect = document.getElementById("mantraSelect");
const scriptSelect = document.getElementById("scriptSelect");
const resultCount = document.getElementById("resultCount");
const slokaLibrarySearch = document.getElementById("slokaLibrarySearch");
const slokaLibraryBody = document.getElementById("slokaLibraryBody");
const slokaLibraryCount = document.getElementById("slokaLibraryCount");
const toast = document.getElementById("toast");
const featured = document.getElementById("featured");
const featuredImage = document.getElementById("featuredImage");
const featuredTitle = document.getElementById("featuredTitle");
const featuredType = document.getElementById("featuredType");
const featuredPurpose = document.getElementById("featuredPurpose");
const featuredHistory = document.getElementById("featuredHistory");
const featuredMeaning = document.getElementById("featuredMeaning");
const mantraInfo = document.getElementById("mantraInfo");
const mantraInfoTitle = document.getElementById("mantraInfoTitle");
const scriptModeLabel = document.getElementById("scriptModeLabel");
const mantraInfoTextDevanagari = document.getElementById("mantraInfoTextDevanagari");
const mantraInfoTextTamil = document.getElementById("mantraInfoTextTamil");
const mantraInfoTextIast = document.getElementById("mantraInfoTextIast");
const mantraInfoMeaning = document.getElementById("mantraInfoMeaning");
const mantraInfoUsage = document.getElementById("mantraInfoUsage");
const chantAssistant = document.getElementById("chantAssistant");
const chantTitle = document.getElementById("chantTitle");
const chantScriptModeLabel = document.getElementById("chantScriptModeLabel");
const chantTextDevanagari = document.getElementById("chantTextDevanagari");
const chantTextTamil = document.getElementById("chantTextTamil");
const chantTextIast = document.getElementById("chantTextIast");
const chantTargetSelect = document.getElementById("chantTargetSelect");
const chantPlusBtn = document.getElementById("chantPlusBtn");
const chantResetBtn = document.getElementById("chantResetBtn");
const chantProgress = document.getElementById("chantProgress");
const sessionSoundToggle = document.getElementById("sessionSoundToggle");
const breathCueDot = document.getElementById("breathCueDot");
const breathCueText = document.getElementById("breathCueText");
const malaRing = document.getElementById("malaRing");
const malaRingCount = document.getElementById("malaRingCount");
const malaProgressText = document.getElementById("malaProgressText");
const youShouldKnow = document.getElementById("youShouldKnow");
const knowList = document.getElementById("knowList");
const templeInfo = document.getElementById("templeInfo");
const templeInfoTitle = document.getElementById("templeInfoTitle");
const templeList = document.getElementById("templeList");
const templeFallback = document.getElementById("templeFallback");
const muruganAruDetails = document.getElementById("muruganAruDetails");
const muruganAruList = document.getElementById("muruganAruList");
const mantraOfDayTitle = document.getElementById("mantraOfDayTitle");
const mantraOfDayText = document.getElementById("mantraOfDayText");
const mantraOfDayOpenBtn = document.getElementById("mantraOfDayOpenBtn");
const favoritesList = document.getElementById("favoritesList");
const favoritesEmpty = document.getElementById("favoritesEmpty");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");
const rotatingMessage = document.getElementById("rotatingMessage");
const didYouKnowMessage = document.getElementById("didYouKnowMessage");
const footerYear = document.getElementById("footerYear");
const sankalpaInput = document.getElementById("sankalpaInput");
const sankalpaTargetSelect = document.getElementById("sankalpaTargetSelect");
const sankalpaSaveBtn = document.getElementById("sankalpaSaveBtn");
const sankalpaCompleteBtn = document.getElementById("sankalpaCompleteBtn");
const sankalpaSummary = document.getElementById("sankalpaSummary");
const sankalpaStreak = document.getElementById("sankalpaStreak");
const reminderEnabled = document.getElementById("reminderEnabled");
const reminderDaySelect = document.getElementById("reminderDaySelect");
const reminderTimeInput = document.getElementById("reminderTimeInput");
const reminderMessageInput = document.getElementById("reminderMessageInput");
const saveReminderBtn = document.getElementById("saveReminderBtn");
const reminderStatus = document.getElementById("reminderStatus");
const homeQuickAccess = document.getElementById("homeQuickAccess");
const experienceModeSelect = document.getElementById("experienceModeSelect");
const meditationMode = document.getElementById("meditationMode");
const meditationTitle = document.getElementById("meditationTitle");
const meditationOverlay = document.getElementById("meditationOverlay");
const meditationDurationSelect = document.getElementById("meditationDurationSelect");
const startMeditationBtn = document.getElementById("startMeditationBtn");
const stopMeditationBtn = document.getElementById("stopMeditationBtn");
const meditationTimerText = document.getElementById("meditationTimerText");
const templeCards = document.getElementById("templeCards");
const aiDeitySelect = document.getElementById("aiDeitySelect");
const aiSuggestBtn = document.getElementById("aiSuggestBtn");
const aiApplySuggestionBtn = document.getElementById("aiApplySuggestionBtn");
const aiSuggestionText = document.getElementById("aiSuggestionText");
const voiceAccentSelect = document.getElementById("voiceAccentSelect");
const voiceLoopToggle = document.getElementById("voiceLoopToggle");
const voicePlayBtn = document.getElementById("voicePlayBtn");
const voiceStopBtn = document.getElementById("voiceStopBtn");
const voiceStatus = document.getElementById("voiceStatus");
const moodSelect = document.getElementById("moodSelect");
const emotionInput = document.getElementById("emotionInput");
const applyMoodBtn = document.getElementById("applyMoodBtn");
const moodStatus = document.getElementById("moodStatus");
const moodIconography = document.getElementById("moodIconography");
const spiritualIntensityRange = document.getElementById("spiritualIntensityRange");
const spiritualIntensityValue = document.getElementById("spiritualIntensityValue");
const visualModeToggle = document.getElementById("visualModeToggle");
const morningThemeBtn = document.getElementById("morningThemeBtn");
const eveningThemeBtn = document.getElementById("eveningThemeBtn");
const nightThemeBtn = document.getElementById("nightThemeBtn");
const autoThemeBtn = document.getElementById("autoThemeBtn");
const ambientPlayBtn = document.getElementById("ambientPlayBtn");
const ambientStopBtn = document.getElementById("ambientStopBtn");
const ambientStatus = document.getElementById("ambientStatus");
const ritualJournalQuote = document.getElementById("ritualJournalQuote");
const ritualJournalEntry = document.getElementById("ritualJournalEntry");
const saveJournalBtn = document.getElementById("saveJournalBtn");
const journalStatus = document.getElementById("journalStatus");

const imageCache = new Map();
let selectedEntity = "";
let selectedMantraKey = "famous";
let latestImageRequestId = 0;
let chantCount = 0;
let chantTarget = 11;
let favorites = new Set();
let chantHistory = {};
let sankalpaState = {
  text: "Chant with devotion and clarity.",
  target: 21,
  dailyCount: 0,
  dailyDate: "",
  lastCompletedDate: "",
  streak: 0,
  maxStreak: 0,
};
let reminderSettings = {
  enabled: false,
  day: "daily",
  time: "06:00",
  message: "Time for your mantra practice.",
  lastTriggeredKey: "",
};
let reminderIntervalId = null;
let soundSettings = {
  enabled: true,
};
let audioContextRef = null;
let breathIntervalId = null;
let experienceMode = "chant";
let meditationTimerId = null;
let meditationRemainingSec = 0;
let aiCurrentSuggestionName = "";
let voiceAccent = "tamil";
let voiceLoop = true;
let shouldKeepSpeaking = false;
let selectedMood = "auto";
let spiritualIntensity = 2;
let visualMinimalMode = false;
let manualTimeTheme = "auto";
let ambientOscillatorRef = null;
let ambientGainRef = null;
let templeRenderRequestId = 0;
const templeMetaCache = new Map();

const PREF_KEY = "chant_helper_prefs_v1";
const FAVORITES_KEY = "chant_helper_favorites_v1";
const CHANT_HISTORY_KEY = "chant_helper_history_v1";
const SANKALPA_KEY = "chant_helper_sankalpa_v1";
const REMINDER_KEY = "chant_helper_reminder_v1";
const SOUND_PREF_KEY = "chant_helper_sound_pref_v1";
const AI_PREF_KEY = "chant_helper_ai_pref_v1";
const JOURNAL_KEY = "chant_helper_ritual_journal_v1";

const mantraOfDayByWeekday = {
  0: "Surya (Sun)",
  1: "Shiva",
  2: "Hanuman",
  3: "Budha (Mercury)",
  4: "Brihaspati (Jupiter)",
  5: "Lakshmi",
  6: "Shani (Saturn)",
};

const voiceProfiles = {
  tamil: { label: "Tamil", langs: ["ta-IN", "ta", "en-IN"] },
  sanskrit: { label: "Sanskrit", langs: ["sa-IN", "hi-IN", "en-IN"] },
  hindi: { label: "Hindi", langs: ["hi-IN", "hi", "en-IN"] },
};

const famousMantraLibraryByName = {
  Ganesha: [
    { title: "Ganapati Beej Invocation", devanagari: "ॐ गं गणपतये नमः॥", iast: "oṃ gaṃ gaṇapataye namaḥ ||" },
    { title: "Ganesha Dhyana", devanagari: "गजाननं भूतगणादि सेवितं कपित्थजम्बूफलचारुभक्षणम् ।", iast: "gajānanaṃ bhūtagaṇādi sevitaṃ kapitthajambūphalacārubhakṣaṇam |" }
  ],
  Shiva: [
    { title: "Mahamrityunjaya Mantra", devanagari: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥", iast: "oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam | urvārukamiva bandhanānmṛtyormukṣīya māmṛtāt ||" },
    { title: "Shiva Panchakshari", devanagari: "नमः शिवाय॥", iast: "namaḥ śivāya ||" }
  ],
  Vishnu: [
    { title: "Ashtakshari", devanagari: "ॐ नमो नारायणाय॥", iast: "oṃ namo nārāyaṇāya ||" },
    { title: "Vishnu Sharanam", devanagari: "श्रीमन नारायण चरणौ शरणं प्रपद्ये॥", iast: "śrīmana nārāyaṇa caraṇau śaraṇaṃ prapadye ||" }
  ],
  Krishna: [
    { title: "Krishna Ashtakshari", devanagari: "ॐ कृष्णाय नमः॥", iast: "oṃ kṛṣṇāya namaḥ ||" },
    { title: "Gopala Mantra", devanagari: "ॐ क्लीं कृष्णाय गोविन्दाय गोपीजनवल्लभाय स्वाहा॥", iast: "oṃ klīṃ kṛṣṇāya govindāya gopījanavallabhāya svāhā ||" }
  ],
  Rama: [
    { title: "Taraka Mantra", devanagari: "राम रामेति रामेति रमे रामे मनोरमे ।", iast: "rāma rāmeti rāmeti rame rāme manorame |" },
    { title: "Rama Nama", devanagari: "ॐ रामाय नमः॥", iast: "oṃ rāmāya namaḥ ||" }
  ],
  Ramar: [
    { title: "Taraka Mantra", devanagari: "राम रामेति रामेति रमे रामे मनोरमे ।", iast: "rāma rāmeti rāmeti rame rāme manorame |" },
    { title: "Rama Nama", devanagari: "ॐ रामाय नमः॥", iast: "oṃ rāmāya namaḥ ||" }
  ],
  Hanuman: [
    { title: "Hanuman Moola", devanagari: "ॐ हनुमते नमः॥", iast: "oṃ hanumate namaḥ ||" },
    { title: "Anjaneya Mantra", devanagari: "ॐ श्री वज्रदेहाय रामभक्ताय वायुपुत्राय नमोऽस्तुते॥", iast: "oṃ śrī vajradehāya rāmabhaktāya vāyuputrāya namo'stute ||" }
  ],
  Durga: [
    { title: "Durga Navarna", devanagari: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥", iast: "oṃ aiṃ hrīṃ klīṃ cāmuṇḍāyai vicce ||" },
    { title: "Durga Sharanam", devanagari: "दुर्गे दुर्गटि नाशिनि नमो नमः॥", iast: "durge durgaṭi nāśini namo namaḥ ||" }
  ],
  Lakshmi: [
    { title: "Lakshmi Beej", devanagari: "ॐ श्रीं नमः॥", iast: "oṃ śrīṃ namaḥ ||" },
    { title: "Mahalakshmi Mantra", devanagari: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद॥", iast: "oṃ śrīṃ hrīṃ śrīṃ kamale kamalālaye prasīda prasīda ||" }
  ],
  Saraswati: [
    { title: "Saraswati Beej", devanagari: "ॐ ऐं नमः॥", iast: "oṃ aiṃ namaḥ ||" },
    { title: "Vani Mantra", devanagari: "या कुन्देन्दु तुषारहार धवला...", iast: "yā kundendu tuṣārahāra dhavalā..." }
  ],
  Dhakshinamoorthy: [
    { title: "Dakshinamurti Mantra", devanagari: "ॐ दक्षिणामूर्तये नमः॥", iast: "oṃ dakṣiṇāmūrtaye namaḥ ||" },
    { title: "Guru Shiva Mantra", devanagari: "ॐ नमः प्रणवार्थाय शुद्धज्ञानैकमूर्तये॥", iast: "oṃ namaḥ praṇavārthāya śuddhajñānaikamūrtaye ||" }
  ],
  Murugan: [
    { title: "Skanda Shadakshari", devanagari: "ॐ सरवनभवाय नमः॥", iast: "oṃ saravaṇabhavāya namaḥ ||" },
    { title: "Subrahmanya Mantra", devanagari: "ॐ सुब्रह्मण्याय नमः॥", iast: "oṃ subrahmaṇyāya namaḥ ||" }
  ],
  "Varahi Amman": [
    { title: "Varahi Moola", devanagari: "ॐ वराह्यै नमः॥", iast: "oṃ varāhyai namaḥ ||" },
    { title: "Varahi Beej", devanagari: "ह्लीं वाराह्यै नमः॥", iast: "hlīṃ vārāhyai namaḥ ||" }
  ],
  "Lakshmi Narasimhar": [
    { title: "Narasimha Beej", devanagari: "क्ष्रौं॥", iast: "kṣrauṃ ||" },
    { title: "Narasimha Protection", devanagari: "ॐ नृसिंहाय नमः॥", iast: "oṃ nṛsiṃhāya namaḥ ||" }
  ],
  "Surya (Sun)": [
    { title: "Aditya Hridayam Seed", devanagari: "ॐ घृणिः सूर्य आदित्यः॥", iast: "oṃ ghṛṇiḥ sūrya ādityaḥ ||" },
    { title: "Surya Nama", devanagari: "ॐ आदित्याय नमः॥", iast: "oṃ ādityāya namaḥ ||" }
  ],
  "Chandra (Moon)": [
    { title: "Chandra Nama", devanagari: "ॐ चन्द्राय नमः॥", iast: "oṃ candrāya namaḥ ||" },
    { title: "Soma Mantra", devanagari: "ॐ सोम सोमाय नमः॥", iast: "oṃ soma somāya namaḥ ||" }
  ],
  "Mangala (Mars)": [
    { title: "Angaraka Nama", devanagari: "ॐ अङ्गारकाय नमः॥", iast: "oṃ aṅgārakāya namaḥ ||" },
    { title: "Kuja Mantra", devanagari: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥", iast: "oṃ krāṃ krīṃ krauṃ saḥ bhaumāya namaḥ ||" }
  ],
  "Budha (Mercury)": [
    { title: "Budha Nama", devanagari: "ॐ बुधाय नमः॥", iast: "oṃ budhāya namaḥ ||" },
    { title: "Budha Beej", devanagari: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥", iast: "oṃ brāṃ brīṃ brauṃ saḥ budhāya namaḥ ||" }
  ],
  "Brihaspati (Jupiter)": [
    { title: "Guru Nama", devanagari: "ॐ गुरवे नमः॥", iast: "oṃ gurave namaḥ ||" },
    { title: "Brihaspati Beej", devanagari: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥", iast: "oṃ grāṃ grīṃ grauṃ saḥ gurave namaḥ ||" }
  ],
  "Shukra (Venus)": [
    { title: "Shukra Nama", devanagari: "ॐ शुक्राय नमः॥", iast: "oṃ śukrāya namaḥ ||" },
    { title: "Shukra Beej", devanagari: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥", iast: "oṃ drāṃ drīṃ drauṃ saḥ śukrāya namaḥ ||" }
  ],
  "Shani (Saturn)": [
    { title: "Shani Nama", devanagari: "ॐ शनैश्चराय नमः॥", iast: "oṃ śanaiścarāya namaḥ ||" },
    { title: "Shani Beej", devanagari: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥", iast: "oṃ prāṃ prīṃ prauṃ saḥ śanaiścarāya namaḥ ||" }
  ],
  Rahu: [
    { title: "Rahu Nama", devanagari: "ॐ राहवे नमः॥", iast: "oṃ rāhave namaḥ ||" },
    { title: "Rahu Beej", devanagari: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः॥", iast: "oṃ bhrāṃ bhrīṃ bhrauṃ saḥ rāhave namaḥ ||" }
  ],
  Ketu: [
    { title: "Ketu Nama", devanagari: "ॐ केतवे नमः॥", iast: "oṃ ketave namaḥ ||" },
    { title: "Ketu Beej", devanagari: "ॐ स्रां स्रीं स्रौं सः केतवे नमः॥", iast: "oṃ srāṃ srīṃ srauṃ saḥ ketave namaḥ ||" }
  ],
  "Shirdi Sai Baba": [
    { title: "Sai Nama", devanagari: "ॐ साईनाथाय नमः॥", iast: "oṃ sāīnathāya namaḥ ||" },
    { title: "Sai Dhyanam", devanagari: "श्री सच्चिदानंद सद्गुरु साईनाथ महाराज की जय॥", iast: "śrī saccidānanda sadguru sāīnatha mahārāja kī jaya ||" }
  ],
  "Raghavendra Swamy": [
    { title: "Raghavendra Nama", devanagari: "ॐ श्री राघवेन्द्राय नमः॥", iast: "oṃ śrī rāghavendrāya namaḥ ||" },
    { title: "Raghavendra Prarthana", devanagari: "पाहि मां राघवेन्द्र गुरो॥", iast: "pāhi māṃ rāghavendra guro ||" }
  ],
  "Adi Shankaracharya": [
    { title: "Shankara Guru Nama", devanagari: "ॐ शंकराचार्याय नमः॥", iast: "oṃ śaṅkarācāryāya namaḥ ||" },
    { title: "Guru Vandana", devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥", iast: "gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ ||" }
  ],
  "Kanchi Sankaracharyar": [
    { title: "Kanchi Acharya Nama", devanagari: "जय जय शङ्कर हर हर शङ्कर॥", iast: "jaya jaya śaṅkara hara hara śaṅkara ||" },
    { title: "Acharya Smaranam", devanagari: "ॐ श्री चन्द्रशेखरेन्द्र सरस्वत्यै नमः॥", iast: "oṃ śrī candraśekharendra sarasvatyai namaḥ ||" }
  ],
  "Puttaparthi Sai Baba": [
    { title: "Sathya Sai Nama", devanagari: "ॐ श्री सत्य साईनाथाय नमः॥", iast: "oṃ śrī satya sāīnathāya namaḥ ||" },
    { title: "Sai Gayana", devanagari: "साई राम साई राम॥", iast: "sāī rāma sāī rāma ||" }
  ],
  "Yogi Ram Surat Kumar": [
    { title: "Yogi Nama", devanagari: "योगी राम सुरत कुमार जय गुरुराया॥", iast: "yogī rāma surata kumāra jaya gururāyā ||" },
    { title: "Yogi Smaranam", devanagari: "ॐ योगिरामसुरत्कुमाराय नमः॥", iast: "oṃ yogirāmasuratkumārāya namaḥ ||" }
  ],
  "Gnanananda Giri": [
    { title: "Gnanananda Nama", devanagari: "ॐ ज्ञानानन्द गुरवे नमः॥", iast: "oṃ jñānānanda gurave namaḥ ||" },
    { title: "Guru Smaranam", devanagari: "ॐ श्री गुरुभ्यो नमः॥", iast: "oṃ śrī gurubhyo namaḥ ||" }
  ]
};

const supplementalFamousSlokasByName = {
  Ganesha: [{ title: "Vakratunda Smaranam", devanagari: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।", iast: "vakratuṇḍa mahākāya sūryakoṭi samaprabha |" }],
  Shiva: [{ title: "Shiva Stuti", devanagari: "नागेन्द्रहाराय त्रिलोचनाय भस्माङ्गरागाय महेश्वराय॥", iast: "nāgendrahārāya trilocanāya bhasmāṅgarāgāya maheśvarāya ||" }],
  Vishnu: [{ title: "Shantakaram", devanagari: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्॥", iast: "śāntākāraṃ bhujagaśayanaṃ padmanābhaṃ sureśam ||" }],
  Krishna: [{ title: "Krishna Smaranam", devanagari: "कृष्णाय वासुदेवाय हरये परमात्मने॥", iast: "kṛṣṇāya vāsudevāya haraye paramātmane ||" }],
  Rama: [{ title: "Rama Jayam", devanagari: "रामो राजमणिः सदा विजयते रामं रमेशं भजे॥", iast: "rāmo rājamaniḥ sadā vijayate rāmaṃ rameśaṃ bhaje ||" }],
  Ramar: [{ title: "Rama Jayam", devanagari: "रामो राजमणिः सदा विजयते रामं रमेशं भजे॥", iast: "rāmo rājamaniḥ sadā vijayate rāmaṃ rameśaṃ bhaje ||" }],
  Hanuman: [{ title: "Manojavam", devanagari: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्॥", iast: "manojavaṃ mārutatulyavegaṃ jitendriyaṃ buddhimatāṃ variṣṭham ||" }],
  Durga: [{ title: "Ya Devi", devanagari: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥", iast: "yā devī sarvabhūteṣu śaktirūpeṇa saṃsthitā namastasyai namastasyai namastasyai namo namaḥ ||" }],
  Lakshmi: [{ title: "Mahalakshmi Stuti", devanagari: "नमस्तेस्तु महामाये श्रीपीठे सुरपूजिते॥", iast: "namastestu mahāmāye śrīpīṭhe surapūjite ||" }],
  Saraswati: [{ title: "Saraswati Vandana", devanagari: "सरस्वति नमस्तुभ्यं वरदे कामरूपिणि॥", iast: "sarasvati namastubhyaṃ varade kāmarūpiṇi ||" }],
  Dhakshinamoorthy: [{ title: "Dakshinamurti Smaranam", devanagari: "ॐ नमो भगवते दक्षिणामूर्तये॥", iast: "oṃ namo bhagavate dakṣiṇāmūrtaye ||" }],
  Murugan: [{ title: "Subrahmanya Smaranam", devanagari: "ॐ सुब्रह्मण्याय नमः॥", iast: "oṃ subrahmaṇyāya namaḥ ||" }],
  "Varahi Amman": [{ title: "Varahi Kavacha Beej", devanagari: "ॐ ह्लीं वाराह्यै नमः॥", iast: "oṃ hlīṃ vārāhyai namaḥ ||" }],
  "Lakshmi Narasimhar": [{ title: "Narasimha Karavalambam Seed", devanagari: "लक्ष्मीनृसिंह मम देहि करावलम्बम्॥", iast: "lakṣmīnṛsiṃha mama dehi karāvalambam ||" }],
  "Surya (Sun)": [{ title: "Navagraha Surya Dhyana", devanagari: "जपाकुसुमसङ्काशं काश्यपेयं महद्युतिम्॥", iast: "japākusumasaṅkāśaṃ kāśyapeyaṃ mahadyutim ||" }],
  "Chandra (Moon)": [{ title: "Navagraha Chandra Dhyana", devanagari: "दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम्॥", iast: "dadhiśaṅkhatuṣārābhaṃ kṣīrodārṇavasambhavam ||" }],
  "Mangala (Mars)": [{ title: "Navagraha Mangala Dhyana", devanagari: "धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम्॥", iast: "dharaṇīgarbhasambhūtaṃ vidyutkāntisamaprabham ||" }],
  "Budha (Mercury)": [{ title: "Navagraha Budha Dhyana", devanagari: "प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम्॥", iast: "priyaṅgukalikāśyāmaṃ rūpeṇāpratimaṃ budham ||" }],
  "Brihaspati (Jupiter)": [{ title: "Navagraha Guru Dhyana", devanagari: "देवानां च ऋषीणां च गुरुं काञ्चनसन्निभम्॥", iast: "devānāṃ ca ṛṣīṇāṃ ca guruṃ kāñcanasannibham ||" }],
  "Shukra (Venus)": [{ title: "Navagraha Shukra Dhyana", devanagari: "हिमकुण्डमृणालाभं दैत्यानां परमं गुरुम्॥", iast: "himakuṇḍamṛṇālābhaṃ daityānāṃ paramaṃ gurum ||" }],
  "Shani (Saturn)": [{ title: "Navagraha Shani Dhyana", devanagari: "नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम्॥", iast: "nīlāñjanasamābhāsaṃ raviputraṃ yamāgrajam ||" }],
  Rahu: [{ title: "Navagraha Rahu Dhyana", devanagari: "अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम्॥", iast: "ardhakāyaṃ mahāvīryaṃ candrādityavimardanam ||" }],
  Ketu: [{ title: "Navagraha Ketu Dhyana", devanagari: "पलाशपुष्पसङ्काशं तारकाग्रहमस्तकम्॥", iast: "palāśapuṣpasaṅkāśaṃ tārakāgrahamastakam ||" }],
  "Shirdi Sai Baba": [{ title: "Sai Smaranam", devanagari: "ॐ साईं श्री साईं जय जय साईं॥", iast: "oṃ sāīṃ śrī sāīṃ jaya jaya sāīṃ ||" }],
  "Raghavendra Swamy": [{ title: "Raghavendra Mangalam", devanagari: "श्री राघवेन्द्राय नमः॥", iast: "śrī rāghavendrāya namaḥ ||" }],
  "Adi Shankaracharya": [{ title: "Guru Stotram", devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥", iast: "gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ ||" }],
  "Kanchi Sankaracharyar": [{ title: "Kanchi Guru Smaranam", devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥", iast: "gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ ||" }],
  "Puttaparthi Sai Baba": [{ title: "Sai Bhajan Line", devanagari: "साई राम साई राम॥", iast: "sāī rāma sāī rāma ||" }],
  "Yogi Ram Surat Kumar": [{ title: "Yogi Nama", devanagari: "योगी रामसुरत्कुमार जय गुरुराया॥", iast: "yogī rāmasuratkumāra jaya gururāyā ||" }],
  "Gnanananda Giri": [{ title: "Guru Smaranam", devanagari: "ॐ श्री गुरुभ्यो नमः॥", iast: "oṃ śrī gurubhyo namaḥ ||" }]
};

const rotatingMessages = [
  "One focused chant is stronger than many distracted chants.",
  "Breathe deeply, chant clearly, and keep your sankalpa steady.",
  "Consistency in 11 chants daily builds inner strength over time.",
  "Start with gratitude; end with silence for deeper absorption.",
  "Pronunciation with devotion matters more than speed."
];

const didYouKnowMessages = [
  "Beej mantra means a seed sound — a compact vibration that represents the core energy of a deity.",
  "Common beej examples: ॐ गं (Gaṃ) for Ganesha, श्रीं (Śrīṃ) for Lakshmi, and ऐं (Aiṃ) for Saraswati.",
  "Beej mantras are usually short, but they are repeated with deep attention, correct pronunciation, and steady breath.",
  "In practice, many devotees start with a famous mantra and then continue with beej japa for focused inner absorption.",
  "Gayatri mantras invoke illumination of intellect, while beej mantras emphasize concentrated divine vibration.",
  "A fixed daily count such as 11, 21, 51, or 108 helps beej mantra practice become stable and disciplined."
];

const dailyRitualQuotes = [
  "Steady repetition purifies thought and strengthens intention.",
  "One mindful round is better than many distracted rounds.",
  "Silence after mantra lets the prayer settle within.",
  "Discipline in small daily steps builds deep spiritual momentum.",
  "Breath, mantra, and awareness together create inner balance.",
  "A humble sankalpa makes every chant meaningful.",
  "Devotion grows when practice is regular, calm, and sincere."
];

const ritualGuidanceByName = {
  Ganesha: [
    "Start after a brief sankalpa and chant 11 or 21 times before new tasks.",
    "Offer a simple flower or akshata and recite with clear pronunciation.",
    "Use Ganesha mantra first before any other deity mantra in your session."
  ],
  Shiva: [
    "Best done in early morning or evening with calm, slow breathing.",
    "Chant Panchakshari or Mahamrityunjaya for 11/21/108 repetitions.",
    "Sit in silence for one minute after chanting to absorb the vibration."
  ],
  Vishnu: [
    "Maintain a steady pace and devotional focus while chanting.",
    "Use tulasi or mental offering with gratitude and consistency.",
    "Prefer fixed daily count over irregular long sessions."
  ],
  Krishna: [
    "Chant with bhakti-bhava and gentle rhythmic breathing.",
    "Use shorter rounds multiple times in a day if needed.",
    "Conclude with a short gratitude prayer."
  ],
  Rama: [
    "Chant in a clean quiet space with upright posture.",
    "Keep pronunciation simple and consistent rather than fast.",
    "Use a fixed count and same time daily for best discipline."
  ],
  Ramar: [
    "Chant in a clean quiet space with upright posture.",
    "Keep pronunciation simple and consistent rather than fast.",
    "Use a fixed count and same time daily for best discipline."
  ],
  Hanuman: [
    "Tuesday/Saturday practice is common for Hanuman discipline.",
    "Recite Hanuman mantra or Chalisa with courage and one-pointed focus.",
    "End with a short silent prayer for strength and protection."
  ],
  Durga: [
    "Chant with intention for protection and inner courage.",
    "Prefer morning/evening recitation with stable breath.",
    "Use shorter consistent counts daily rather than occasional long counts."
  ],
  Lakshmi: [
    "Maintain clean altar/space and chant with gratitude mindset.",
    "Friday is traditionally favored for Lakshmi upasana.",
    "Avoid hurried chanting; keep voice soft and steady."
  ],
  Saraswati: [
    "Chant before study, teaching, or creative work.",
    "Use clear articulation and slower pace for mantra purity.",
    "Offer short silent reflection after each round."
  ],
  Dhakshinamoorthy: [
    "Begin with Guru Brahma sloka and sit in silence briefly.",
    "Chant in a contemplative tone focusing on wisdom and clarity.",
    "Thursday practice is commonly observed for guru tattva."
  ],
  Murugan: [
    "Chant with courage-focused sankalpa and calm breath.",
    "Use Skanda/Subrahmanya mantra in fixed counts.",
    "Tuesday or special Murugan days can be used for extended practice."
  ],
  "Varahi Amman": [
    "Practice with respect and clear protective intention.",
    "Keep recitation disciplined and avoid random count changes.",
    "Conclude with gratitude and grounding silence."
  ],
  "Lakshmi Narasimhar": [
    "Begin with a protection sankalpa and steady breathing.",
    "Chant with focus on courage and removal of fear.",
    "Finish with calming breaths to settle the mind."
  ],
  "Surya (Sun)": [
    "Morning practice around sunrise is traditionally preferred.",
    "Face east when possible and chant with alert posture.",
    "Use consistent weekday routine for visible discipline benefits."
  ],
  "Chandra (Moon)": [
    "Evening/night calm sessions support emotional balance.",
    "Use soft tone and slower pace to stabilize mind.",
    "Keep count modest and consistent."
  ],
  "Mangala (Mars)": [
    "Tuesday discipline is commonly followed.",
    "Chant with firm rhythm and controlled breath.",
    "Pair with a short grounding pause after completion."
  ],
  "Budha (Mercury)": [
    "Wednesday practice is commonly preferred.",
    "Focus on diction and clarity while chanting.",
    "Useful before communication-heavy work or study."
  ],
  "Brihaspati (Jupiter)": [
    "Thursday routine is traditionally followed.",
    "Chant with guru-bhava and ethical intention.",
    "Keep an unbroken daily count for better steadiness."
  ],
  "Shukra (Venus)": [
    "Friday recitation is common in many traditions.",
    "Practice with gratitude and relational harmony intention.",
    "Maintain gentle pace and consistent count."
  ],
  "Shani (Saturn)": [
    "Saturday discipline and humility are emphasized.",
    "Chant slowly with patience and karmic acceptance mindset.",
    "Avoid rushing; prioritize consistency over volume."
  ],
  Rahu: [
    "Use focused short rounds with clear mental intention.",
    "Maintain strict count and calm breathing.",
    "End with grounding silence to settle restlessness."
  ],
  Ketu: [
    "Use introspective chanting with minimal external distraction.",
    "Keep posture upright and breath subtle.",
    "Helpful for detachment and spiritual clarity routines."
  ],
  "Shirdi Sai Baba": [
    "Chant with Shraddha and Saburi mindset.",
    "Simple regular practice is better than irregular intensity.",
    "Include a short prayer for compassion and service."
  ],
  "Raghavendra Swamy": [
    "Begin with respectful guru remembrance.",
    "Chant steadily and conclude with gratitude.",
    "Thursday routine is commonly followed for guru worship."
  ],
  "Adi Shankaracharya": [
    "Recite with reflection on jnana and viveka.",
    "Keep chanting clear and contemplative.",
    "Spend a minute in silence after recitation."
  ],
  "Kanchi Sankaracharyar": [
    "Chant with humility and guru-bhakti focus.",
    "Use fixed count and steady timing each day.",
    "Add brief self-reflection after chanting."
  ],
  "Puttaparthi Sai Baba": [
    "Practice with love-service-truth intention.",
    "Chant softly and consistently at a fixed time.",
    "Close with a brief prayer for all-being welfare."
  ],
  "Yogi Ram Surat Kumar": [
    "Use nama-smarana style repetition with surrender.",
    "Keep awareness on breath and mantra simultaneously.",
    "Maintain simple daily continuity."
  ],
  "Gnanananda Giri": [
    "Begin with guru pranam and mental quietness.",
    "Chant in short disciplined rounds.",
    "Finish with stillness and inward attention."
  ]
};

const famousSlokaLinksByName = {
  Ganesha: [
    { label: "Ganesha Atharvashirsha", url: "https://en.wikipedia.org/wiki/Ganesha_Atharvashirsa" },
    { label: "Ganesha Mantras", url: "https://en.wikipedia.org/wiki/Ganesha#Mantras" }
  ],
  Shiva: [
    { label: "Maha Mrityunjaya Mantra", url: "https://en.wikipedia.org/wiki/Mahamrityunjaya_Mantra" },
    { label: "Shiva Panchakshara", url: "https://en.wikipedia.org/wiki/Om_Namah_Shivaya" }
  ],
  Vishnu: [
    { label: "Om Namo Narayanaya", url: "https://en.wikipedia.org/wiki/Om_Namo_Narayana" },
    { label: "Vishnu Sahasranama", url: "https://en.wikipedia.org/wiki/Vishnu_Sahasranama" }
  ],
  Krishna: [
    { label: "Hare Krishna Maha Mantra", url: "https://en.wikipedia.org/wiki/Hare_Krishna_(mantra)" },
    { label: "Krishna Mantras", url: "https://en.wikipedia.org/wiki/Krishna#Worship" }
  ],
  Rama: [
    { label: "Rama Nama", url: "https://en.wikipedia.org/wiki/Rama#Worship" },
    { label: "Sri Rama Mantra", url: "https://en.wikipedia.org/wiki/Rama" }
  ],
  Ramar: [
    { label: "Rama Nama", url: "https://en.wikipedia.org/wiki/Rama#Worship" },
    { label: "Sri Rama Mantra", url: "https://en.wikipedia.org/wiki/Rama" }
  ],
  Hanuman: [
    { label: "Hanuman Chalisa", url: "https://en.wikipedia.org/wiki/Hanuman_Chalisa" },
    { label: "Hanuman Mantras", url: "https://en.wikipedia.org/wiki/Hanuman#Worship" }
  ],
  Durga: [
    { label: "Durga Saptashati", url: "https://en.wikipedia.org/wiki/Devi_Mahatmyam" },
    { label: "Durga Mantras", url: "https://en.wikipedia.org/wiki/Durga#Worship" }
  ],
  Lakshmi: [
    { label: "Mahalakshmi Ashtakam", url: "https://en.wikipedia.org/wiki/Lakshmi#Worship" },
    { label: "Lakshmi Mantras", url: "https://en.wikipedia.org/wiki/Lakshmi" }
  ],
  Saraswati: [
    { label: "Saraswati Vandana", url: "https://en.wikipedia.org/wiki/Saraswati#Worship" },
    { label: "Saraswati Stotram", url: "https://en.wikipedia.org/wiki/Saraswati" }
  ],
  Dhakshinamoorthy: [
    { label: "Guru Stotram", url: "https://en.wikipedia.org/wiki/Guru#In_Hinduism" },
    { label: "Dakshinamurti Stotram", url: "https://en.wikipedia.org/wiki/Dakshinamurti" }
  ],
  Murugan: [
    { label: "Kanda Sashti Kavasam", url: "https://en.wikipedia.org/wiki/Kanda_Sashti_Kavasam" },
    { label: "Subrahmanya Bhujangam", url: "https://en.wikipedia.org/wiki/Murugan" }
  ],
  "Varahi Amman": [
    { label: "Varahi Mantras", url: "https://en.wikipedia.org/wiki/Varahi" }
  ],
  "Lakshmi Narasimhar": [
    { label: "Narasimha Karavalamba Stotram", url: "https://en.wikipedia.org/wiki/Narasimha" },
    { label: "Lakshmi Narasimha Mantras", url: "https://en.wikipedia.org/wiki/Lakshmi_Narasimha" }
  ],
  "Surya (Sun)": [
    { label: "Aditya Hridayam", url: "https://en.wikipedia.org/wiki/Aditya_Hridayam" },
    { label: "Surya Mantras", url: "https://en.wikipedia.org/wiki/Surya" }
  ],
  "Chandra (Moon)": [
    { label: "Chandra Mantras", url: "https://en.wikipedia.org/wiki/Chandra" }
  ],
  "Mangala (Mars)": [
    { label: "Mangala (Kuja) Mantras", url: "https://en.wikipedia.org/wiki/Mangala_(deity)" }
  ],
  "Budha (Mercury)": [
    { label: "Budha Mantras", url: "https://en.wikipedia.org/wiki/Budha" }
  ],
  "Brihaspati (Jupiter)": [
    { label: "Brihaspati Mantras", url: "https://en.wikipedia.org/wiki/Brihaspati" }
  ],
  "Shukra (Venus)": [
    { label: "Shukra Mantras", url: "https://en.wikipedia.org/wiki/Shukra" }
  ],
  "Shani (Saturn)": [
    { label: "Shani Stotra", url: "https://en.wikipedia.org/wiki/Shani" },
    { label: "Shani Mantras", url: "https://en.wikipedia.org/wiki/Shani" }
  ],
  Rahu: [
    { label: "Rahu Mantras", url: "https://en.wikipedia.org/wiki/Rahu" }
  ],
  Ketu: [
    { label: "Ketu Mantras", url: "https://en.wikipedia.org/wiki/Ketu_(mythology)" }
  ],
  "Shirdi Sai Baba": [
    { label: "Sai Baba Aarti / Chants", url: "https://en.wikipedia.org/wiki/Sai_Baba_of_Shirdi" }
  ],
  "Raghavendra Swamy": [
    { label: "Raghavendra Stotra", url: "https://en.wikipedia.org/wiki/Raghavendra_Tirtha" }
  ],
  "Adi Shankaracharya": [
    { label: "Bhaja Govindam", url: "https://en.wikipedia.org/wiki/Bhaja_Govindam" },
    { label: "Nirvana Shatakam", url: "https://en.wikipedia.org/wiki/Nirvana_Shatakam" }
  ],
  "Kanchi Sankaracharyar": [
    { label: "Kanchi Acharya Chants", url: "https://en.wikipedia.org/wiki/Chandrasekharendra_Saraswati" }
  ],
  "Puttaparthi Sai Baba": [
    { label: "Sathya Sai Bhajans", url: "https://en.wikipedia.org/wiki/Sathya_Sai_Baba" }
  ],
  "Yogi Ram Surat Kumar": [
    { label: "Yogi Ramsuratkumar Chants", url: "https://en.wikipedia.org/wiki/Yogi_Ramsuratkumar" }
  ],
  "Gnanananda Giri": [
    { label: "Gnanananda Giri Hymns", url: "https://en.wikipedia.org/wiki/Swami_Gnanananda_Giri" }
  ]
};

const tnTemplesByDeity = {
  Ganesha: [
    "Pillayarpatti Karpaga Vinayagar Temple (Sivaganga)",
    "Ucchi Pillayar Temple, Rockfort (Tiruchirappalli)",
    "Manakula Vinayagar Temple (Puducherry region)"
  ],
  Shiva: [
    "Brihadeeswarar Temple (Thanjavur)",
    "Nataraja Temple (Chidambaram)",
    "Ekambareswarar Temple (Kanchipuram)",
    "Arunachaleswarar Temple (Tiruvannamalai)",
    "Ramanathaswamy Temple (Rameswaram)"
  ],
  Vishnu: [
    "Sri Ranganathaswamy Temple (Srirangam)",
    "Varadharaja Perumal Temple (Kanchipuram)",
    "Kallazhagar Temple (Madurai)",
    "Sarangapani Temple (Kumbakonam)"
  ],
  Krishna: [
    "Rajagopalaswamy Temple (Mannargudi)",
    "Parthasarathy Temple (Triplicane, Chennai)",
    "Venugopala Swamy Temple (Krishnagiri region)"
  ],
  Rama: [
    "Kodandarama Temple (Vaduvur)",
    "Ramaswamy Temple (Kumbakonam)",
    "Kothandarama Swamy Temple (Rameswaram area)"
  ],
  Dhakshinamoorthy: [
    "Alangudi Apatsahayeswarar Temple Dakshinamurthy Sannidhi (Thiruvarur district)",
    "Patteeswaram Dhenupureeswarar Temple Dakshinamurthy Sannidhi (Kumbakonam)",
    "Tiruvidaimarudur Mahalingeswarar Temple Dakshinamurthy Sannidhi (Thanjavur region)"
  ],
  Hanuman: [
    "Nanganallur Anjaneyar Temple (Chennai)",
    "Namakkal Anjaneyar Temple (Namakkal)",
    "Suchindram Anjaneya Shrine (Kanyakumari district)"
  ],
  Durga: [
    "Samayapuram Mariamman Temple (Tiruchirappalli)",
    "Muppathamman Temple (Chennai)",
    "Bannari Amman Temple (Erode)"
  ],
  Lakshmi: [
    "Ashtalakshmi Temple (Besant Nagar, Chennai)",
    "Mahalakshmi Temple (Mylapore, Chennai)",
    "Lakshmi Narayani Temple (Vellore)"
  ],
  Narasimha: [
    "Namakkal Narasimha Swamy Temple (Namakkal)",
    "Singaperumal Koil Lakshmi Narasimha Temple (Chengalpattu)",
    "Sholingur Yoga Narasimha Swamy Temple (Ranipet)"
  ],
  Saraswati: [
    "Koothanur Saraswathi Temple (Tiruvarur)",
    "Saraswathi shrine at Kuthanur region (Nagapattinam belt)",
    "Gnana Saraswathi worship sites in Kanchipuram area"
  ],
  Murugan: [
    "Arulmigu Dhandayuthapani Swamy Temple (Palani)",
    "Swaminatha Swamy Temple (Swamimalai)",
    "Subramanya Swamy Temple (Tiruchendur)",
    "Thirupparamkunram Murugan Temple (Madurai)",
    "Pazhamudircholai Murugan Temple (Madurai)"
  ],
  Varahi: [
    "Jambukeswarar Temple Varahi Sannidhi (Tiruvanaikaval)",
    "Pratyangira-Varahi worship centers (Ayyavadi region)",
    "Varahi Amman shrines in Kumbakonam region"
  ]
};

const tnTemplesByPlanet = {
  "Surya (Sun)": [
    "Suriyanar Temple (Aduthurai)",
    "Suryanar Koil Navagraha Shrine (Thanjavur region)",
    "Agneeswarar Temple Surya Sannidhi (Kanjanur belt)"
  ],
  "Chandra (Moon)": [
    "Kailasanathar Temple, Thingalur (Chandra Sthalam)",
    "Navagraha Chandra worship shrine (Thingalur region)",
    "Someswarar shrines in Thanjavur belt"
  ],
  "Mangala (Mars)": [
    "Vaitheeswaran Koil (Angaraka Sthalam)",
    "Sub-shrines for Angaraka in Sirkazhi region",
    "Mangal worship centers near Mayiladuthurai"
  ],
  "Budha (Mercury)": [
    "Thiruvenkadu Swetharanyeswarar Temple (Budhan Sthalam)",
    "Budha shrine in Thiruvenkadu complex",
    "Navagraha Budha worship points in Nagapattinam belt"
  ],
  "Brihaspati (Jupiter)": [
    "Alangudi Apatsahayeswarar Temple (Guru Sthalam)",
    "Guru Bhagavan shrine in Alangudi",
    "Dakshinamurthy worship temples in Cauvery delta"
  ],
  "Shukra (Venus)": [
    "Kanjanur Agneeswarar Temple (Shukra Sthalam)",
    "Shukra Bhagavan shrine in Kanjanur",
    "Venus worship centers in Thanjavur region"
  ],
  "Shani (Saturn)": [
    "Thirunallar Dharbaranyeswarar Temple (Shani Sthalam)",
    "Saneeswaran shrine at Thirunallar",
    "Shani worship temples in Karaikal-TN belt"
  ],
  Rahu: [
    "Tirunageswaram Naganathaswamy Temple (Rahu Sthalam)",
    "Rahu Bhagavan milk abhishekam shrine (Tirunageswaram)",
    "Navagraha Rahu worship centers in Kumbakonam belt"
  ],
  Ketu: [
    "Keezhaperumpallam Naganathar Temple (Ketu Sthalam)",
    "Ketu Bhagavan shrine in Keezhaperumpallam",
    "Navagraha Ketu worship centers in Mayiladuthurai belt"
  ]
};

const tnTemplesByGuru = {
  "Shirdi Sai Baba": [
    "Mylapore Sai Baba Temple (Chennai)",
    "Nanganallur Sai Baba Temple (Chennai)",
    "Sai Baba shrines in Coimbatore and Madurai"
  ],
  "Puttaparthi Sai Baba": [
    "Sundaram Sri Sathya Sai Seva Center (Chennai)",
    "Sathya Sai centers in Coimbatore",
    "Sathya Sai centers in Madurai"
  ],
  "Raghavendra Swamy": [
    "Sri Raghavendra Mutt (Triplicane, Chennai)",
    "Raghavendra Mutt (Srirangam)",
    "Raghavendra Brindavana worship centers in TN"
  ],
  "Adi Shankaracharya": [
    "Kanchi Kamakoti Peetham (Kanchipuram)",
    "Advaita mutts and shrines in Kanchipuram",
    "Shankara Jayanti worship centers across TN"
  ],
  "Kanchi Sankaracharyar": [
    "Kanchi Kamakoti Peetham (Kanchipuram)",
    "Sri Chandrasekharendra Saraswathi Mahaswami Adhisthanam (Kanchipuram)",
    "Kanchi Acharya prayer centers in Chennai"
  ],
  "Yogi Ram Surat Kumar": [
    "Yogi Ramsuratkumar Ashram (Tiruvannamalai)",
    "Sannidhi street satsang centers (Tiruvannamalai)",
    "Devotee prayer halls in Chennai"
  ],
  "Gnanananda Giri": [
    "Sri Gnanananda Tapovanam (Thirukoilur)",
    "Gnanananda Ashram prayer hall (Thirukoilur)",
    "Associated meditation centers in TN"
  ]
};

const tnStyleImageQueryByEntity = {
  Ganesha: "Ganesha",
  Shiva: "Shiva",
  Vishnu: "Vishnu",
  Krishna: "Krishna",
  Rama: "Rama",
  Ramar: "Rama",
  Hanuman: "Hanuman",
  Durga: "Durga",
  Lakshmi: "Lakshmi",
  "Lakshmi Narasimhar": "Lakshmi Narasimha",
  Saraswati: "Saraswati",
  Dhakshinamoorthy: "Dakshinamurti",
  Murugan: "Murugan",
  "Varahi Amman": "Varahi",
  "Surya (Sun)": "Surya",
  "Chandra (Moon)": "Chandra",
  "Mangala (Mars)": "Mangala",
  "Budha (Mercury)": "Budha",
  "Brihaspati (Jupiter)": "Brihaspati",
  "Shukra (Venus)": "Shukra",
  "Shani (Saturn)": "Shani",
  Rahu: "Rahu",
  Ketu: "Ketu (mythology)",
  "Shirdi Sai Baba": "Sai Baba of Shirdi",
  "Puttaparthi Sai Baba": "Sathya Sai Baba",
  "Raghavendra Swamy": "Raghavendra Tirtha",
  "Adi Shankaracharya": "Adi Shankara",
  "Kanchi Sankaracharyar": "Chandrasekharendra Saraswati",
  "Yogi Ram Surat Kumar": "Yogi Ramsuratkumar",
  "Gnanananda Giri": "Swami Gnanananda Giri"
};

const imageQueryFallbacksByEntity = {
  Ketu: ["Ketu (mythology)", "Ketu", "Dhumraketu"],
  Rahu: ["Rahu", "Rahu (mythology)"],
  "Shani (Saturn)": ["Shani", "Shani (deity)", "Shani Dev"],
  "Surya (Sun)": ["Surya", "Surya (deity)"],
  "Chandra (Moon)": ["Chandra", "Chandra (deity)"]
};

const beejMantrasByName = {
  Ganesha: { title: "Beej Mantra", devanagari: "ॐ गं गणपतये नमः॥", iast: "oṃ gaṃ gaṇapataye namaḥ ||" },
  Shiva: { title: "Beej Mantra", devanagari: "हौं॥", iast: "hauṃ ||" },
  Vishnu: { title: "Beej Mantra", devanagari: "ॐ नमो नारायणाय॥", iast: "oṃ namo nārāyaṇāya ||" },
  Krishna: { title: "Beej Mantra", devanagari: "क्लीं कृष्णाय नमः॥", iast: "klīṃ kṛṣṇāya namaḥ ||" },
  Rama: { title: "Beej Mantra", devanagari: "रां॥", iast: "rāṃ ||" },
  Ramar: { title: "Beej Mantra", devanagari: "रां॥", iast: "rāṃ ||" },
  Hanuman: { title: "Beej Mantra", devanagari: "हं॥", iast: "haṃ ||" },
  Durga: { title: "Beej Mantra", devanagari: "दुं॥", iast: "duṃ ||" },
  Lakshmi: { title: "Beej Mantra", devanagari: "श्रीं॥", iast: "śrīṃ ||" },
  Saraswati: { title: "Beej Mantra", devanagari: "ऐं॥", iast: "aiṃ ||" },
  Dhakshinamoorthy: { title: "Beej Mantra", devanagari: "हौं॥", iast: "hauṃ ||" },
  Murugan: { title: "Beej Mantra", devanagari: "स्रां॥", iast: "srāṃ ||" },
  "Varahi Amman": { title: "Beej Mantra", devanagari: "ह्लीं॥", iast: "hlīṃ ||" },
  "Lakshmi Narasimhar": { title: "Beej Mantra", devanagari: "क्ष्रौं॥", iast: "kṣrauṃ ||" },
  "Kanchi Sankaracharyar": { title: "Beej Mantra", devanagari: "ह्रीं॥", iast: "hrīṃ ||" }
};

function iastToTamil(text) {
  if (!text) return "";

  const lower = text.toLowerCase();
  const consonants = [
    "kṣ", "jñ", "kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh",
    "ṅ", "ñ", "ṭ", "ḍ", "ṇ", "ś", "ṣ", "ḷ", "ḻ", "ṟ", "k", "g", "c", "j", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "w", "s", "h"
  ];
  const vowels = ["ai", "au", "ā", "ī", "ū", "ē", "ō", "ṛ", "ṝ", "a", "i", "u", "e", "o"];

  const consonantMap = {
    kṣ: "க்ஷ", jñ: "ஜ்ஞ", kh: "க", gh: "க", ch: "ச", jh: "ஜ", ṭh: "ட", ḍh: "ட", th: "த", dh: "த", ph: "ப", bh: "ப",
    ṅ: "ங", ñ: "ஞ", ṭ: "ட", ḍ: "ட", ṇ: "ண", ś: "ஷ", ṣ: "ஷ", ḷ: "ள", ḻ: "ழ", ṟ: "ற",
    k: "க", g: "க", c: "ச", j: "ஜ", t: "த", d: "த", n: "ந", p: "ப", b: "ப", m: "ம", y: "ய", r: "ர", l: "ல", v: "வ", w: "வ", s: "ஸ", h: "ஹ"
  };

  const independentVowel = { a: "அ", ā: "ஆ", i: "இ", ī: "ஈ", u: "உ", ū: "ஊ", e: "எ", ē: "ஏ", o: "ஒ", ō: "ஓ", ai: "ஐ", au: "ஔ", ṛ: "ரு", ṝ: "ரூ" };
  const vowelSign = { a: "", ā: "ா", i: "ி", ī: "ீ", u: "ு", ū: "ூ", e: "ெ", ē: "ே", o: "ொ", ō: "ோ", ai: "ை", au: "ௌ", ṛ: "்ரு", ṝ: "்ரூ" };

  const startsWithAny = (source, index, options) => {
    for (const token of options) {
      if (source.startsWith(token, index)) {
        return token;
      }
    }
    return "";
  };

  let result = "";
  let index = 0;

  while (index < lower.length) {
    const char = lower[index];

    if (/\s/.test(char)) {
      result += char;
      index += 1;
      continue;
    }

    if (lower.startsWith("oṃ", index)) {
      result += "ஓம்";
      index += 2;
      continue;
    }
    if (lower.startsWith("om", index)) {
      result += "ஓம்";
      index += 2;
      continue;
    }

    if (lower.startsWith("||", index)) {
      result += "॥";
      index += 2;
      continue;
    }
    if (lower[index] === "|") {
      result += "।";
      index += 1;
      continue;
    }

    if (lower[index] === "ṃ" || lower[index] === "ṁ") {
      result += "ம்";
      index += 1;
      continue;
    }
    if (lower[index] === "ḥ") {
      result += "ஃ";
      index += 1;
      continue;
    }

    const vowelToken = startsWithAny(lower, index, vowels);
    if (vowelToken) {
      result += independentVowel[vowelToken] || vowelToken;
      index += vowelToken.length;
      continue;
    }

    const consonantToken = startsWithAny(lower, index, consonants);
    if (consonantToken) {
      const base = consonantMap[consonantToken] || consonantToken;
      index += consonantToken.length;

      const nextVowel = startsWithAny(lower, index, vowels);
      if (nextVowel) {
        result += `${base}${vowelSign[nextVowel] || ""}`;
        index += nextVowel.length;
      } else {
        result += `${base}்`;
      }
      continue;
    }

    result += char;
    index += 1;
  }

  return result.replace(/\s+/g, " ").trim();
}

function getTamilMantraText(item, key, iastText) {
  const tamilSet = tamilMantrasByName[item.name] || {};
  const existing = tamilSet[key] || "";
  const iastWordCount = String(iastText || "").trim().split(/\s+/).filter(Boolean).length;
  const tamilWordCount = String(existing || "").trim().split(/\s+/).filter(Boolean).length;

  if (existing && !existing.includes("...") && tamilWordCount >= Math.max(3, Math.floor(iastWordCount * 0.6))) {
    return existing;
  }
  return iastToTamil(iastText);
}

const tamilMantrasByName = {
  Ganesha: { famous: "வக்ரதுண்ட மகாகாய ...", gayatri: "ஓம் ஏகதந்தாய வித்மஹே ...", beej: "ஓம் கம் கணபதயே நம:" },
  Shiva: { famous: "ஓம் நம சிவாய", gayatri: "ஓம் தத்புருஷாய வித்மஹே ...", beej: "ஹௌம்" },
  Vishnu: { famous: "ஓம் நமோ நாராயணாய", gayatri: "ஓம் நாராயணாய வித்மஹே ...", beej: "ஓம் நமோ நாராயணாய" },
  Krishna: {
    famous: "ஹரே கிருஷ்ண ஹரே கிருஷ்ண கிருஷ்ண கிருஷ்ண ஹரே ஹரே । ஹரே ராம ஹரே ராம ராம ராம ஹரே ஹரே ॥",
    gayatri: "ஓம் தேவகீநந்தனாய வித்மஹே வாஸுதேவாய தீமஹி தன்னஃ கிருஷ்ணஃ ப்ரசோதயாத் ॥",
    beej: "க்லீம் கிருஷ்ணாய நம:"
  },
  Rama: { famous: "ஸ்ரீ ராம ஜய ராம ஜய ஜய ராம", gayatri: "ஓம் தாஷரதாய வித்மஹே ...", beej: "ராம்" },
  Hanuman: { famous: "ஓம் ஹம் ஹனுமதே நம:", gayatri: "ஓம் ஆஞ்சநேயாய வித்மஹே ...", beej: "ஹம்" },
  Durga: { famous: "ஓம் தும் துர்காயை நம:", gayatri: "ஓம் காத்த்யாயந்யை வித்மஹே ...", beej: "தும்" },
  Lakshmi: { famous: "ஓம் ஸ்ரீம் மஹாலக்ஷ்ம்யை நம:", gayatri: "ஓம் மஹாலக்ஷ்ம்யை வித்மஹே ...", beej: "ஸ்ரீம்" },
  Saraswati: { famous: "ஓம் ஐம் சரஸ்வத்யை நம:", gayatri: "ஓம் சரஸ்வத்யை வித்மஹே ...", beej: "ஐம்" },
  Murugan: { famous: "ஓம் சரவணபவாய நம:", gayatri: "ஓம் தத்புருஷாய வித்மஹே மஹாசேனாய தீமஹி ...", beej: "ஸ்ராம்" },
  "Varahi Amman": { famous: "ஓம் ஐம் க்ளௌம் ஐம் வாராஹ்யை நம:", gayatri: "ஓம் வராஹமுக்யை வித்மஹே ...", beej: "ஹ்லீம்" },
  "Lakshmi Narasimhar": { famous: "உக்ரம் வீரம் மஹாவிஷ்ணும் ...", gayatri: "ஓம் வஜ்ரநகாய வித்மஹே ...", beej: "க்ஷ்ரௌம்" },
  "Surya (Sun)": { famous: "ஓம் ஸூர்யாய நம:", gayatri: "ஓம் பாஸ்கராய வித்மஹே ..." },
  "Chandra (Moon)": { famous: "ஓம் ஸோமாய நம:", gayatri: "ஓம் ஸோமாய வித்மஹே ..." },
  "Mangala (Mars)": { famous: "ஓம் அம் அங்காரகாய நம:", gayatri: "ஓம் அங்காரகாய வித்மஹே ..." },
  "Budha (Mercury)": { famous: "ஓம் பும் புத்தாய நம:", gayatri: "ஓம் புத்தாய வித்மஹே ..." },
  "Brihaspati (Jupiter)": { famous: "ஓம் ப்ரிம் ப்ருஹஸ்பதயே நம:", gayatri: "ஓம் ப்ருஹஸ்பதயே வித்மஹே ..." },
  "Shukra (Venus)": { famous: "ஓம் சும் சுக்ராய நம:", gayatri: "ஓம் சுக்ராய வித்மஹே ..." },
  "Shani (Saturn)": { famous: "ஓம் ஷம் ஷநைஶ்சராய நம:", gayatri: "ஓம் ஷநைஶ்சராய வித்மஹே ..." },
  Rahu: { famous: "ஓம் ராம் ராகவே நம:", gayatri: "ஓம் நாகமுகாய வித்மஹே ..." },
  Ketu: { famous: "ஓம் கேம் கேதவே நம:", gayatri: "ஓம் தூம்ரகேதவே வித்மஹே ..." },
  "Shirdi Sai Baba": { famous: "ஓம் சாய் ராம்", gayatri: "ஓம் ஷிர்டிவாசாய வித்மஹே ..." },
  "Puttaparthi Sai Baba": { famous: "ஓம் ஸ்ரீ சாய் ராம்", gayatri: "ஓம் ஸத்யசாயீஶ்வராய வித்மஹே ..." },
  "Raghavendra Swamy": { famous: "பூஜ்யாய ராகவேந்த்ராய ...", gayatri: "ஓம் ராகவேந்த்ராய வித்மஹே ..." },
  "Adi Shankaracharya": { famous: "பஜ கோவிந்தம் ...", gayatri: "ஓம் ஷங்கராசார்யாய வித்மஹே ..." },
  "Yogi Ram Surat Kumar": { famous: "யோகி ராம் ஸுரத் குமார் ஜய குருராயா", gayatri: "ஓம் யோகிராமஸுரத்குமாராய வித்மஹே ..." },
  "Gnanananda Giri": { famous: "ஓம் ஞானானந்த குரவே நம:", gayatri: "ஓம் ஞானானந்தாய வித்மஹே ..." }
};

function looksLikeTemplePage(payload) {
  const title = String(payload?.title || "").toLowerCase();
  const description = String(payload?.description || "").toLowerCase();
  const extract = String(payload?.extract || "").toLowerCase();
  return title.includes("temple") || description.includes("temple") || extract.includes(" temple ");
}

function pageText(payload) {
  return `${String(payload?.title || "")} ${String(payload?.description || "")} ${String(payload?.extract || "")}`.toLowerCase();
}

function looksRelevantForItem(item, payload) {
  const text = pageText(payload);
  if (!text.trim()) {
    return true;
  }

  if (item.type === "god") {
    return !looksLikeTemplePage(payload);
  }

  if (item.type === "planet") {
    if (looksLikeTemplePage(payload)) return false;
    return text.includes("deity") || text.includes("god") || text.includes("planet") || text.includes("graha") || text.includes("mytholog");
  }

  if (item.type === "guru") {
    if (looksLikeTemplePage(payload)) return false;
    return text.includes("saint") || text.includes("guru") || text.includes("swami") || text.includes("teacher") || text.includes("philosopher") || text.includes("spiritual");
  }

  return true;
}

const aruPadaiVeedu = [
  "Thiruparankundram",
  "Tiruchendur",
  "Palani",
  "Swamimalai",
  "Thiruthani",
  "Pazhamudircholai"
];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function weekdayLabel(index) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][index] || "Today";
}

function todaySuggestedItem() {
  const dayIndex = new Date().getDay();
  const name = mantraOfDayByWeekday[dayIndex];
  const item = mantras.find((entry) => entry.name === name) || mantras[0] || null;
  return { item, dayIndex };
}

function renderMantraOfDay() {
  const suggestion = todaySuggestedItem();
  if (!suggestion.item) {
    mantraOfDayTitle.textContent = "";
    mantraOfDayText.textContent = "No mantra suggestion available right now.";
    mantraOfDayOpenBtn.disabled = true;
    return;
  }

  mantraOfDayOpenBtn.disabled = false;
  mantraOfDayTitle.textContent = `${weekdayLabel(suggestion.dayIndex)} — ${suggestion.item.name}`;
  mantraOfDayText.textContent = `${suggestion.item.famousTitle}: ${suggestion.item.purpose}`;
}

function activeItem() {
  return mantras.find((entry) => entry.name === selectedEntity) || null;
}

function recommendationForContext() {
  const dayIndex = new Date().getDay();
  const weekdayName = mantraOfDayByWeekday[dayIndex];
  const weekdayItem = mantras.find((entry) => entry.name === weekdayName);
  const preferredItem = mantras.find((entry) => entry.name === (aiDeitySelect?.value || ""));

  if (preferredItem) {
    return {
      name: preferredItem.name,
      reason: `Based on your chosen deity: ${preferredItem.name}.`,
    };
  }

  if (weekdayItem) {
    return {
      name: weekdayItem.name,
      reason: `Weekday alignment: ${weekdayLabel(dayIndex)} traditionally favors ${weekdayItem.name}.`,
    };
  }

  const fallback = activeItem() || mantras[0] || null;
  return {
    name: fallback?.name || "",
    reason: "Using your current selection as the best match.",
  };
}

function renderAiSuggestion() {
  if (!aiSuggestionText) return;
  const suggestion = recommendationForContext();
  aiCurrentSuggestionName = suggestion.name;
  if (!suggestion.name) {
    aiSuggestionText.textContent = "No personalized suggestion available right now.";
    return;
  }
  aiSuggestionText.textContent = `${suggestion.name} — ${suggestion.reason}`;
}

function applyAiSuggestion() {
  if (!aiCurrentSuggestionName) return;
  const item = mantras.find((entry) => entry.name === aiCurrentSuggestionName);
  if (!item) return;

  if (typeSelect.value !== "all" && typeSelect.value !== item.type) {
    typeSelect.value = item.type;
    populateEntityOptions();
  }
  selectedEntity = item.name;
  if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
    entitySelect.value = selectedEntity;
  }
  selectedMantraKey = "famous";
  mantraSelect.value = "famous";
  chantCount = 0;
  render();
  showToast(`Suggested mantra opened: ${item.name}`);
}

function deriveAutoMood() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 10) return "calm";
  if (hour >= 10 && hour < 17) return "devotional";
  if (hour >= 17 && hour < 22) return "festive";
  return "calm";
}

function moodFromEmotionInput(rawText) {
  const text = String(rawText || "").trim().toLowerCase();
  if (!text) return "";
  if (/(stress|anx|fear|tired|overwhelm|sad|heavy)/.test(text)) return "calm";
  if (/(joy|happy|celebrat|excite|festiv|energetic)/.test(text)) return "festive";
  if (/(devot|pray|bhakti|focused|gratitude|grateful)/.test(text)) return "devotional";
  return "";
}

function moodGlyphAndLabel(mood) {
  if (mood === "festive") return { glyph: "🔔", label: "Festive" };
  if (mood === "devotional") return { glyph: "🪔", label: "Devotional" };
  return { glyph: "🕉️", label: "Calm" };
}

function renderMoodIconography(mood) {
  if (!moodIconography) return;
  const { glyph, label } = moodGlyphAndLabel(mood);
  moodIconography.textContent = `${glyph} ${label}`;
}

function deriveTimeThemeFromClock() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 19) return "evening";
  return "night";
}

function applyTimeTheme(theme = "auto") {
  const nextTheme = theme === "auto" ? deriveTimeThemeFromClock() : theme;
  document.body.dataset.timeTheme = nextTheme;
}

function intensityLabel(level) {
  if (level <= 1) return "Light";
  if (level >= 3) return "Deep";
  return "Medium";
}

function renderSpiritualIntensity() {
  if (spiritualIntensityRange) {
    spiritualIntensityRange.value = String(spiritualIntensity);
  }
  if (spiritualIntensityValue) {
    spiritualIntensityValue.textContent = intensityLabel(spiritualIntensity);
  }
}

function speechRateForIntensity() {
  if (spiritualIntensity <= 1) return 0.95;
  if (spiritualIntensity >= 3) return 0.75;
  return 0.85;
}

function speechPitchForIntensity() {
  if (spiritualIntensity <= 1) return 1.02;
  if (spiritualIntensity >= 3) return 0.9;
  return 0.96;
}

function applyMoodTheme(mood, reasonText = "") {
  const nextMood = mood === "auto" ? deriveAutoMood() : mood;
  document.body.dataset.mood = nextMood;
  renderMoodIconography(nextMood);
  applyTimeTheme(manualTimeTheme);
  if (moodStatus) {
    const reason = reasonText ? ` ${reasonText}` : "";
    moodStatus.textContent = `Mood active: ${nextMood}.${reason}`;
  }
}

function setMinimalVisualMode(enabled) {
  visualMinimalMode = Boolean(enabled);
  document.body.classList.toggle("minimal-visual-mode", visualMinimalMode);
  if (visualModeToggle) {
    visualModeToggle.checked = visualMinimalMode;
  }
}

function startAmbientPad() {
  const audioCtx = getAudioContext();
  if (!audioCtx) {
    if (ambientStatus) {
      ambientStatus.textContent = "Ambient audio is not supported in this browser.";
    }
    return;
  }

  if (ambientOscillatorRef && ambientGainRef) {
    if (ambientStatus) {
      ambientStatus.textContent = "Ambient audio is already playing.";
    }
    return;
  }

  const baseSa = 146.83;
  const pa = baseSa * 1.5;

  const gainNode = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1900, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.018, audioCtx.currentTime + 1.2);

  const makeDroneOsc = (frequency, detuneCents = 0) => {
    const osc = audioCtx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.detune.setValueAtTime(detuneCents, audioCtx.currentTime);
    osc.connect(filter);
    osc.start();
    return osc;
  };

  const oscillators = [
    makeDroneOsc(baseSa, -2),
    makeDroneOsc(pa, 1),
    makeDroneOsc(baseSa * 2, 0),
  ];

  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  ambientOscillatorRef = oscillators;
  ambientGainRef = gainNode;
  if (ambientStatus) {
    ambientStatus.textContent = "Ambient tanpura-style drone playing.";
  }
}

function stopAmbientPad() {
  if (ambientGainRef && audioContextRef) {
    ambientGainRef.gain.cancelScheduledValues(audioContextRef.currentTime);
    ambientGainRef.gain.setValueAtTime(Math.max(ambientGainRef.gain.value, 0.0001), audioContextRef.currentTime);
    ambientGainRef.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.currentTime + 0.35);
  }

  const oscillators = Array.isArray(ambientOscillatorRef)
    ? ambientOscillatorRef
    : ambientOscillatorRef
      ? [ambientOscillatorRef]
      : [];
  setTimeout(() => {
    oscillators.forEach((oscillator) => {
      try {
        oscillator?.stop();
      } catch {
      }
    });
  }, 380);

  ambientOscillatorRef = null;
  ambientGainRef = null;
  if (ambientStatus) {
    ambientStatus.textContent = "Ambient audio stopped.";
  }
}

function quoteOfTheDay() {
  return dailyRitualQuotes[new Date().getDay() % dailyRitualQuotes.length];
}

function journalPromptForItem(item) {
  if (!item) {
    return "Today I will chant with steadiness and gratitude.";
  }
  if (item.type === "planet") {
    return `Today I will align my practice with ${item.name} discipline by chanting with fixed count and calm breath.`;
  }
  if (item.type === "guru") {
    return `Today I will honor ${item.name} through humility, clear chanting, and silent reflection.`;
  }
  return `Today I will invoke ${item.name} with devotion, clear pronunciation, and consistent mantra count.`;
}

function renderRitualJournal(item) {
  if (ritualJournalQuote) {
    ritualJournalQuote.textContent = `“${quoteOfTheDay()}”`;
  }
  if (ritualJournalEntry && !ritualJournalEntry.value.trim()) {
    ritualJournalEntry.value = journalPromptForItem(item);
  }
}

function pickVoiceForAccent(accent) {
  if (!("speechSynthesis" in window)) return { voice: null, lang: "en-IN" };
  const profile = voiceProfiles[accent] || voiceProfiles.tamil;
  const voices = window.speechSynthesis.getVoices();

  const devotionalHint = /(india|tamil|hindi|sanskrit|bharat|devanagari)/i;
  for (const lang of profile.langs) {
    const matched = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith(lang.toLowerCase()));
    if (matched) return { voice: matched, lang: matched.lang };
  }

  const indiaPreferred = voices.find((voice) => devotionalHint.test(`${voice.name || ""} ${voice.lang || ""}`));
  if (indiaPreferred) {
    return { voice: indiaPreferred, lang: indiaPreferred.lang || profile.langs[0] || "en-IN" };
  }

  const enIndia = voices.find((voice) => (voice.lang || "").toLowerCase().startsWith("en-in"));
  if (enIndia) {
    return { voice: enIndia, lang: enIndia.lang || "en-IN" };
  }

  return { voice: voices[0] || null, lang: profile.langs[0] || "en-IN" };
}

function selectedVoiceText() {
  const item = activeItem();
  if (!item) return "";
  const mantra = selectedMantraData(item);
  return mantra.iast || mantra.devanagari || "";
}

function stopVoiceChant() {
  shouldKeepSpeaking = false;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (voiceStatus) {
    voiceStatus.textContent = "Voice chant stopped.";
  }
}

function speakCurrentMantra() {
  if (!("speechSynthesis" in window)) {
    if (voiceStatus) {
      voiceStatus.textContent = "Voice chanting is not supported in this browser.";
    }
    return;
  }

  const text = selectedVoiceText();
  if (!text) {
    if (voiceStatus) {
      voiceStatus.textContent = "Select a deity first to play chant audio.";
    }
    return;
  }

  window.speechSynthesis.cancel();
  shouldKeepSpeaking = true;
  const { voice, lang } = pickVoiceForAccent(voiceAccent);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = lang;
  utterance.rate = speechRateForIntensity();
  utterance.pitch = speechPitchForIntensity();
  utterance.onend = () => {
    if (shouldKeepSpeaking && voiceLoop) {
      setTimeout(() => {
        speakCurrentMantra();
      }, 220);
    }
  };

  const label = voiceProfiles[voiceAccent]?.label || "Selected";
  if (voiceStatus) {
    voiceStatus.textContent = `Playing ${label} voice chant${voiceLoop ? " on loop" : ""} at ${intensityLabel(spiritualIntensity)} intensity.`;
  }
  window.speechSynthesis.speak(utterance);
}

function formatMeditationTime(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const minutes = String(Math.floor(safe / 60)).padStart(2, "0");
  const rem = String(safe % 60).padStart(2, "0");
  return `${minutes}:${rem}`;
}

function stopMeditationSession(endedNaturally = false) {
  if (meditationTimerId) {
    clearInterval(meditationTimerId);
    meditationTimerId = null;
  }
  if (endedNaturally) {
    playSessionEndSound();
    showToast("Meditation session complete");
  }
}

function startMeditationSession() {
  const item = activeItem();
  if (!item) {
    showToast("Select an entry to start meditation");
    return;
  }

  stopMeditationSession(false);
  meditationRemainingSec = Number(meditationDurationSelect?.value || 300);
  playSessionStartSound();

  if (meditationTimerText) {
    meditationTimerText.textContent = `Silence timer: ${formatMeditationTime(meditationRemainingSec)}`;
  }

  meditationTimerId = setInterval(() => {
    meditationRemainingSec -= 1;
    if (meditationTimerText) {
      meditationTimerText.textContent = `Silence timer: ${formatMeditationTime(meditationRemainingSec)}`;
    }
    if (meditationRemainingSec <= 0) {
      stopMeditationSession(true);
    }
  }, 1000);
}

function renderExperienceMode(item) {
  const mode = experienceModeSelect?.value || "chant";
  experienceMode = mode;

  const mantra = item ? selectedMantraData(item) : null;

  const showChant = mode === "chant";
  const showMeditation = mode === "meditation";
  const showLearning = mode === "learning";

  chantAssistant.classList.toggle("hidden", !showChant || !item);
  meditationMode.classList.toggle("hidden", !showMeditation || !item);
  mantraInfo.classList.toggle("hidden", !showLearning || !item);

  if (showMeditation && item && mantra) {
    meditationTitle.textContent = `${item.name} — Timed silent meditation`;
    meditationOverlay.textContent = mantra.iast || mantra.devanagari;
    if (!meditationTimerId) {
      meditationTimerText.textContent = "Meditation timer not running.";
    }
  }

  if (!showMeditation) {
    stopMeditationSession(false);
  }
}

async function fetchTempleMeta(placeName) {
  const cacheKey = String(placeName || "").trim();
  if (!cacheKey) return null;
  if (templeMetaCache.has(cacheKey)) {
    return templeMetaCache.get(cacheKey);
  }

  const searchName = cacheKey.replace(/\s*\([^)]*\)\s*/g, "").trim();
  const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchName)}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("summary fetch failed");
    const payload = await response.json();
    const result = {
      title: payload?.title || searchName,
      image: payload?.thumbnail?.source || payload?.originalimage?.source || "",
      refUrl: payload?.content_urls?.desktop?.page || "",
    };
    templeMetaCache.set(cacheKey, result);
    return result;
  } catch {
    const fallback = { title: searchName, image: "", refUrl: "" };
    templeMetaCache.set(cacheKey, fallback);
    return fallback;
  }
}

async function renderTempleCards(temples) {
  if (!templeCards) return;
  if (!Array.isArray(temples) || !temples.length) {
    templeCards.innerHTML = "";
    return;
  }

  const requestId = ++templeRenderRequestId;
  templeCards.innerHTML = temples
    .slice(0, 4)
    .map((name) => `<article class="temple-card"><div class="temple-card-body"><p>${name}</p><p class="meaning">Loading references...</p></div></article>`)
    .join("");

  const templeMeta = await Promise.all(temples.slice(0, 4).map((name) => fetchTempleMeta(name)));
  if (requestId !== templeRenderRequestId) {
    return;
  }

  templeCards.innerHTML = temples
    .slice(0, 4)
    .map((name, index) => {
      const meta = templeMeta[index] || {};
      const imageBlock = meta.image
        ? `<img src="${meta.image}" alt="${name}" loading="lazy" />`
        : "";
      const referenceLink = meta.refUrl
        ? `<a href="${meta.refUrl}" target="_blank" rel="noopener noreferrer">Reference</a>`
        : `<a href="https://www.google.com/search?q=${encodeURIComponent(name + " temple")}" target="_blank" rel="noopener noreferrer">Reference</a>`;

      return `
        <article class="temple-card">
          ${imageBlock}
          <div class="temple-card-body">
            <p>${name}</p>
            <div class="temple-links">
              <a href="${mapSearchUrl(name)}" target="_blank" rel="noopener noreferrer">Directions</a>
              ${referenceLink}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function startRotatingMessages() {
  if (!rotatingMessage || !didYouKnowMessage) {
    return;
  }

  let rotatingIndex = 0;
  let didYouKnowIndex = 0;
  let isPaused = false;
  const didYouKnowCard = didYouKnowMessage.closest(".did-you-know");

  const renderMessageSet = () => {
    rotatingMessage.textContent = rotatingMessages[rotatingIndex];
    didYouKnowMessage.textContent = didYouKnowMessages[didYouKnowIndex];
  };

  const transitionMessageSet = () => {
    rotatingMessage.classList.add("message-fade");
    didYouKnowMessage.classList.add("message-fade");
    setTimeout(() => {
      renderMessageSet();
      rotatingMessage.classList.remove("message-fade");
      didYouKnowMessage.classList.remove("message-fade");
    }, 260);
  };

  renderMessageSet();

  setInterval(() => {
    if (isPaused) {
      return;
    }
    rotatingIndex = (rotatingIndex + 1) % rotatingMessages.length;
    didYouKnowIndex = (didYouKnowIndex + 1) % didYouKnowMessages.length;
    transitionMessageSet();
  }, 6000);

  const pause = () => {
    isPaused = true;
  };
  const resume = () => {
    isPaused = false;
  };

  rotatingMessage.addEventListener("mouseenter", pause);
  rotatingMessage.addEventListener("mouseleave", resume);
  if (didYouKnowCard) {
    didYouKnowCard.addEventListener("mouseenter", pause);
    didYouKnowCard.addEventListener("mouseleave", resume);
  }
}

function saveSoundPrefs() {
  localStorage.setItem(SOUND_PREF_KEY, JSON.stringify(soundSettings));
}

function loadSoundPrefs() {
  try {
    const raw = localStorage.getItem(SOUND_PREF_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.enabled === "boolean") {
      soundSettings.enabled = parsed.enabled;
    }
  } catch {
  }
}

function renderSoundToggle() {
  if (!sessionSoundToggle) return;
  sessionSoundToggle.checked = Boolean(soundSettings.enabled);
}

function getAudioContext() {
  if (audioContextRef) {
    return audioContextRef;
  }
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return null;
  }
  audioContextRef = new Ctx();
  return audioContextRef;
}

function playTone(frequency, durationMs, volume = 0.08, waveType = "sine", startDelayMs = 0) {
  const audioCtx = getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime + startDelayMs / 1000;
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.type = waveType;
  oscillator.frequency.setValueAtTime(frequency, now);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(volume, now + 0.03);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start(now);
  oscillator.stop(now + durationMs / 1000 + 0.03);
}

function playTempleBellStrike(baseFrequency = 432, startDelayMs = 0, totalDurationMs = 900, volume = 0.05) {
  const audioCtx = getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime + startDelayMs / 1000;
  const harmonicRatios = [1, 2.7, 4.1];
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + totalDurationMs / 1000);
  gain.connect(audioCtx.destination);

  harmonicRatios.forEach((ratio, index) => {
    const oscillator = audioCtx.createOscillator();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(baseFrequency * ratio, now);
    oscillator.connect(gain);
    oscillator.start(now);
    oscillator.stop(now + totalDurationMs / 1000 + 0.03);
  });
}

function playSessionStartSound() {
  if (!soundSettings.enabled) return;
  playTempleBellStrike(392, 0, 900, 0.05);
  playTempleBellStrike(588, 140, 760, 0.04);
}

function playSessionEndSound() {
  if (!soundSettings.enabled) return;
  playTempleBellStrike(588, 0, 760, 0.04);
  playTempleBellStrike(392, 130, 920, 0.05);
}

function setBreathPhase(isInhale) {
  if (!breathCueText || !breathCueDot) return;
  breathCueText.textContent = isInhale ? "Inhale" : "Exhale";
  breathCueDot.classList.toggle("exhale", !isInhale);
}

function startBreathCue() {
  if (!breathCueText || !breathCueDot) return;
  if (breathIntervalId) {
    clearInterval(breathIntervalId);
  }
  let inhale = true;
  setBreathPhase(inhale);
  breathIntervalId = setInterval(() => {
    inhale = !inhale;
    setBreathPhase(inhale);
  }, 4000);
}

function stopBreathCue() {
  if (breathIntervalId) {
    clearInterval(breathIntervalId);
    breathIntervalId = null;
  }
}

function renderMalaProgress() {
  if (!malaRing || !malaRingCount || !malaProgressText) return;
  const count = chantCount > 0 && chantCount % 108 === 0 ? 108 : chantCount % 108;
  const percent = Math.round((count / 108) * 100);
  malaRing.style.setProperty("--mala-progress", `${percent}%`);
  malaRingCount.textContent = String(count);
  malaProgressText.textContent = `Mala Progress: ${count} / 108`;
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let lineY = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (context.measureText(test).width > maxWidth) {
      context.fillText(line, x, lineY);
      line = word;
      lineY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) {
    context.fillText(line, x, lineY);
    lineY += lineHeight;
  }
  return lineY;
}

function blessingMessageForToday() {
  const message = rotatingMessage?.textContent || rotatingMessages[new Date().getDay() % rotatingMessages.length];
  return (message || "May peace and strength guide your day.").trim();
}

function blessingCardFilename(item) {
  return `${item.name.toLowerCase().replace(/\s+/g, "-")}-blessing-card.png`;
}

function buildBlessingCardCanvas(item) {
  const mantra = selectedMantraData(item);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  if (!context) {
    showToast("Blessing card not supported");
    return null;
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#fff8ef");
  gradient.addColorStop(1, "#ffe9d6");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#b14d00";
  context.font = "bold 52px 'Segoe UI'";
  context.fillText("ॐ Soulvest Blessing", 80, 110);

  context.fillStyle = "#24201a";
  context.font = "bold 60px 'Segoe UI'";
  context.fillText(item.name, 80, 210);

  context.fillStyle = "#625949";
  context.font = "32px 'Segoe UI'";
  let cursorY = wrapCanvasText(context, mantra.title, 80, 270, 920, 46);
  cursorY = wrapCanvasText(context, mantra.iast, 80, cursorY + 14, 920, 44);

  context.fillStyle = "#b14d00";
  context.font = "bold 34px 'Segoe UI'";
  context.fillText("Today's Message", 80, cursorY + 34);

  context.fillStyle = "#625949";
  context.font = "30px 'Segoe UI'";
  cursorY = wrapCanvasText(context, blessingMessageForToday(), 80, cursorY + 84, 920, 42);

  context.fillStyle = "#625949";
  context.font = "28px 'Segoe UI'";
  wrapCanvasText(context, `Purpose: ${item.purpose}`, 80, cursorY + 42, 920, 40);

  context.fillStyle = "#b14d00";
  context.font = "24px 'Segoe UI'";
  context.fillText(`Generated on ${new Date().toLocaleDateString()} · Soulvest Mantras`, 80, 1280);

  context.save();
  context.translate(930, 180);
  context.rotate(-Math.PI / 12);
  context.fillStyle = "rgba(177, 77, 0, 0.12)";
  context.font = "bold 48px 'Segoe UI'";
  context.fillText("ॐ Soulvest", -140, 0);
  context.restore();

  return canvas;
}

async function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob || null), "image/png");
  });
}

async function createBlessingCard(item) {
  const canvas = buildBlessingCardCanvas(item);
  if (!canvas) {
    return;
  }

  const link = document.createElement("a");
  link.download = blessingCardFilename(item);
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Blessing card downloaded");
}

async function shareBlessingCard(item) {
  if (!navigator.share || typeof File === "undefined") {
    await createBlessingCard(item);
    return;
  }

  const canvas = buildBlessingCardCanvas(item);
  if (!canvas) {
    return;
  }

  const blob = await canvasToBlob(canvas);
  if (!blob) {
    await createBlessingCard(item);
    return;
  }

  const file = new File([blob], blessingCardFilename(item), { type: "image/png" });
  const sharePayload = {
    title: `${item.name} Blessing Card`,
    text: blessingMessageForToday(),
    files: [file],
  };

  const canShareFiles = typeof navigator.canShare === "function" ? navigator.canShare({ files: [file] }) : true;
  if (!canShareFiles) {
    await createBlessingCard(item);
    return;
  }

  try {
    await navigator.share(sharePayload);
    showToast("Blessing card shared");
  } catch (error) {
    const message = String(error?.message || "").toLowerCase();
    if (!message.includes("abort")) {
      await createBlessingCard(item);
    }
  }
}

function typeLabel(value) {
  if (value === "planet") {
    return "Planet (Navagraha)";
  }
  if (value === "guru") {
    return "Guru";
  }
  return "God";
}

function scriptModeText(mode) {
  if (mode === "devanagari") return "Script: Devanagari";
  if (mode === "tamil") return "Script: Tamil";
  if (mode === "iast") return "Script: IAST (Transliteration)";
  return "Script: Devanagari + Tamil + IAST";
}

function famousVariantsForItem(item) {
  if (!item) return [];
  const base = {
    title: item.famousTitle || "Famous Mantra",
    devanagari: item.famousDevanagari || "",
    iast: item.famousIast || "",
  };
  const extras = famousMantraLibraryByName[item.name] || [];
  const supplements = supplementalFamousSlokasByName[item.name] || [];
  const traditional = [
    {
      title: `${item.gayatriTitle || "Gayatri Mantra"} (Traditional Recitation)`,
      devanagari: item.gayatriDevanagari || "",
      iast: item.gayatriIast || "",
    },
  ];

  const beej = beejMantrasByName[item.name];
  if (beej?.devanagari || beej?.iast) {
    traditional.push({
      title: `${beej.title || "Beej Mantra"} (Classical Japa)`,
      devanagari: beej.devanagari || "",
      iast: beej.iast || "",
    });
  }

  const merged = [base, ...extras, ...supplements, ...traditional]
    .filter((entry) => (entry?.devanagari || entry?.iast) && (entry?.title || "").trim())
    .map((entry) => ({
      title: String(entry.title || "Traditional Mantra").trim(),
      devanagari: String(entry.devanagari || "").trim(),
      iast: String(entry.iast || "").trim(),
    }));

  const seen = new Set();
  return merged.filter((entry) => {
    const key = `${entry.iast.toLowerCase()}|${entry.devanagari.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function currentFamousVariant(item) {
  const variants = famousVariantsForItem(item);
  return {
    variant: variants[0] || null,
    index: 0,
    total: variants.length,
  };
}

function savePrefs() {
  const payload = {
    type: typeSelect.value,
    entity: selectedEntity,
    mantraKey: selectedMantraKey,
    script: scriptSelect.value,
    chantCount,
    chantTarget,
    experienceMode,
    voiceAccent,
    voiceLoop,
    selectedMood,
    spiritualIntensity,
    visualMinimalMode,
    manualTimeTheme,
  };
  localStorage.setItem(PREF_KEY, JSON.stringify(payload));
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
}

function saveChantHistory() {
  localStorage.setItem(CHANT_HISTORY_KEY, JSON.stringify(chantHistory));
}

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    if (!raw) {
      return;
    }
    const prefs = JSON.parse(raw);
    if (prefs?.type) {
      typeSelect.value = prefs.type;
    }
    if (prefs?.script) {
      scriptSelect.value = prefs.script;
    }
    if (prefs?.mantraKey) {
      selectedMantraKey = prefs.mantraKey;
      mantraSelect.value = selectedMantraKey;
    }
    if (typeof prefs?.chantCount === "number" && prefs.chantCount >= 0) {
      chantCount = Math.floor(prefs.chantCount);
    }
    if (typeof prefs?.chantTarget === "number") {
      chantTarget = prefs.chantTarget;
      chantTargetSelect.value = String(chantTarget);
    }
    if (typeof prefs?.entity === "string") {
      selectedEntity = prefs.entity;
    }
    if (prefs?.experienceMode && experienceModeSelect) {
      experienceMode = prefs.experienceMode;
      experienceModeSelect.value = experienceMode;
    }
    if (prefs?.voiceAccent && voiceAccentSelect) {
      voiceAccent = prefs.voiceAccent;
      voiceAccentSelect.value = voiceAccent;
    }
    if (typeof prefs?.voiceLoop === "boolean") {
      voiceLoop = prefs.voiceLoop;
      if (voiceLoopToggle) {
        voiceLoopToggle.checked = voiceLoop;
      }
    }
    if (prefs?.selectedMood && moodSelect) {
      selectedMood = prefs.selectedMood;
      moodSelect.value = selectedMood;
    }
    if (typeof prefs?.spiritualIntensity === "number") {
      spiritualIntensity = Math.min(3, Math.max(1, Math.floor(prefs.spiritualIntensity)));
    }
    if (typeof prefs?.visualMinimalMode === "boolean") {
      visualMinimalMode = prefs.visualMinimalMode;
    }
    if (typeof prefs?.manualTimeTheme === "string") {
      manualTimeTheme = prefs.manualTimeTheme;
    }
  } catch {
  }
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return;
    const list = JSON.parse(raw);
    if (Array.isArray(list)) {
      favorites = new Set(list.filter((name) => typeof name === "string"));
    }
  } catch {
  }
}

function loadChantHistory() {
  try {
    const raw = localStorage.getItem(CHANT_HISTORY_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      chantHistory = parsed;
    }
  } catch {
  }
}

function toggleFavorite(name) {
  if (!name) return;
  if (favorites.has(name)) {
    favorites.delete(name);
    showToast(`${name} removed from favorites`);
  } else {
    favorites.add(name);
    showToast(`${name} added to favorites`);
  }
  saveFavorites();
  renderPersonalHub();
  render();
}

function recordChant(name, increment = 1) {
  if (!name || increment <= 0) return;
  const previous = chantHistory[name] || { total: 0, lastChantedAt: "" };
  chantHistory[name] = {
    total: Math.max(0, Number(previous.total || 0) + increment),
    lastChantedAt: new Date().toISOString()
  };
  saveChantHistory();
}

function formatLastChanted(isoTime) {
  if (!isoTime) return "just now";
  const date = new Date(isoTime);
  if (Number.isNaN(date.getTime())) return "recently";
  return date.toLocaleString();
}

function renderPersonalHub() {
  const sortedFavorites = Array.from(favorites).sort((a, b) => a.localeCompare(b));
  favoritesList.innerHTML = sortedFavorites
    .map((name) => `<button type="button" class="pill-btn" data-action="open-favorite" data-name="${name}">${name}</button>`)
    .join("");
  favoritesEmpty.classList.toggle("hidden", sortedFavorites.length > 0);

  const historyItems = Object.entries(chantHistory)
    .filter(([, value]) => value && typeof value.total === "number" && value.total > 0)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 8);

  historyList.innerHTML = historyItems
    .map(([name, value]) => `<li><strong>${name}</strong>: ${value.total} chants · Last: ${formatLastChanted(value.lastChantedAt)}</li>`)
    .join("");
  historyEmpty.classList.toggle("hidden", historyItems.length > 0);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayDateKey() {
  return formatDateKey(new Date());
}

function yesterdayDateKey() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return formatDateKey(yesterday);
}

function resetSankalpaDailyIfNeeded() {
  const today = todayDateKey();
  if (sankalpaState.dailyDate !== today) {
    sankalpaState.dailyDate = today;
    sankalpaState.dailyCount = 0;
  }
}

function saveSankalpa() {
  localStorage.setItem(SANKALPA_KEY, JSON.stringify(sankalpaState));
}

function loadSankalpa() {
  try {
    const raw = localStorage.getItem(SANKALPA_KEY);
    if (!raw) {
      resetSankalpaDailyIfNeeded();
      return;
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      sankalpaState = {
        ...sankalpaState,
        ...parsed,
      };
    }
    resetSankalpaDailyIfNeeded();
  } catch {
    resetSankalpaDailyIfNeeded();
  }
}

function markSankalpaComplete() {
  resetSankalpaDailyIfNeeded();
  const today = todayDateKey();
  if (sankalpaState.lastCompletedDate === today) {
    return false;
  }

  const yesterday = yesterdayDateKey();
  if (sankalpaState.lastCompletedDate === yesterday) {
    sankalpaState.streak += 1;
  } else {
    sankalpaState.streak = 1;
  }

  sankalpaState.lastCompletedDate = today;
  sankalpaState.maxStreak = Math.max(sankalpaState.maxStreak, sankalpaState.streak);
  return true;
}

function incrementSankalpaProgress(step = 1) {
  resetSankalpaDailyIfNeeded();
  sankalpaState.dailyCount = Math.max(0, Number(sankalpaState.dailyCount || 0) + step);
  let newlyCompleted = false;
  if (sankalpaState.dailyCount >= sankalpaState.target) {
    newlyCompleted = markSankalpaComplete();
  }
  saveSankalpa();
  return newlyCompleted;
}

function renderSankalpaTracker() {
  if (!sankalpaInput || !sankalpaTargetSelect || !sankalpaSummary || !sankalpaStreak) {
    return;
  }

  resetSankalpaDailyIfNeeded();
  sankalpaInput.value = sankalpaState.text || "";
  sankalpaTargetSelect.value = String(sankalpaState.target || 21);

  const completedToday = sankalpaState.lastCompletedDate === todayDateKey();
  sankalpaSummary.textContent = `Today: ${sankalpaState.dailyCount}/${sankalpaState.target} chants · Sankalpa: ${sankalpaState.text}`;
  sankalpaStreak.textContent = completedToday
    ? `Completed today · Current streak: ${sankalpaState.streak} day(s) · Best: ${sankalpaState.maxStreak}`
    : `Current streak: ${sankalpaState.streak} day(s) · Best: ${sankalpaState.maxStreak}`;
}

function saveReminderSettings() {
  localStorage.setItem(REMINDER_KEY, JSON.stringify(reminderSettings));
}

function loadReminderSettings() {
  try {
    const raw = localStorage.getItem(REMINDER_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      reminderSettings = {
        ...reminderSettings,
        ...parsed,
      };
    }
  } catch {
  }
}

function reminderDayLabel(dayValue) {
  if (dayValue === "daily") return "Every day";
  return weekdayLabel(Number(dayValue));
}

async function ensureNotificationPermission() {
  if (!("Notification" in window)) {
    return false;
  }
  if (Notification.permission === "granted") {
    return true;
  }
  if (Notification.permission === "denied") {
    return false;
  }
  const permission = await Notification.requestPermission();
  return permission === "granted";
}

function renderReminderSettings() {
  if (!reminderEnabled || !reminderDaySelect || !reminderTimeInput || !reminderMessageInput || !reminderStatus) {
    return;
  }

  reminderEnabled.checked = Boolean(reminderSettings.enabled);
  reminderDaySelect.value = reminderSettings.day || "daily";
  reminderTimeInput.value = reminderSettings.time || "06:00";
  reminderMessageInput.value = reminderSettings.message || "Time for your mantra practice.";

  const baseStatus = reminderSettings.enabled
    ? `Reminder active: ${reminderDayLabel(reminderSettings.day)} at ${reminderSettings.time}`
    : "Reminder disabled.";

  if (!("Notification" in window)) {
    reminderStatus.textContent = `${baseStatus} Browser notifications are not supported.`;
    return;
  }

  if (Notification.permission === "granted") {
    reminderStatus.textContent = `${baseStatus} Browser notifications enabled.`;
  } else if (Notification.permission === "denied") {
    reminderStatus.textContent = `${baseStatus} Notification permission is blocked in browser settings.`;
  } else {
    reminderStatus.textContent = `${baseStatus} Notification permission not granted yet.`;
  }
}

function saveAiPrefs() {
  if (!aiDeitySelect) return;
  const payload = {
    preferredDeity: aiDeitySelect.value || "",
    emotion: emotionInput?.value || "",
  };
  localStorage.setItem(AI_PREF_KEY, JSON.stringify(payload));
}

function loadAiPrefs() {
  if (!aiDeitySelect) return;
  try {
    const raw = localStorage.getItem(AI_PREF_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.preferredDeity === "string") {
      aiDeitySelect.value = parsed.preferredDeity;
    }
    if (emotionInput && typeof parsed?.emotion === "string") {
      emotionInput.value = parsed.emotion;
    }
  } catch {
  }
}

function saveJournalEntry() {
  if (!ritualJournalEntry) return;
  const payload = {
    text: ritualJournalEntry.value || "",
    date: formatDateKey(new Date()),
  };
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(payload));
}

function loadJournalEntry() {
  if (!ritualJournalEntry) return;
  try {
    const raw = localStorage.getItem(JOURNAL_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    if (parsed.date === formatDateKey(new Date()) && typeof parsed.text === "string") {
      ritualJournalEntry.value = parsed.text;
    }
  } catch {
  }
}

function populateAiDeityOptions() {
  if (!aiDeitySelect) return;
  aiDeitySelect.innerHTML = [
    `<option value="">No preference (weekday based)</option>`,
    ...mantras
      .filter((item) => item.type === "god")
      .map((item) => `<option value="${item.name}">${item.name}</option>`),
  ].join("");
}

function renderQuickPaths() {
  if (!homeQuickAccess) return;
  const buttons = homeQuickAccess.querySelectorAll(".quick-path-btn");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === typeSelect.value);
  });
}

function renderSlokaLibrary() {
  if (!slokaLibraryBody) return;

  const query = String(slokaLibrarySearch?.value || "").trim().toLowerCase();
  const rows = mantras.filter((item) => {
    if (!query) return true;
    const haystack = `${item.name} ${item.type} ${item.famousIast || ""} ${item.purpose || ""}`.toLowerCase();
    return haystack.includes(query);
  });

  slokaLibraryBody.innerHTML = rows.map((item) => {
    const typeText = item.type === "planet" ? "Planet" : item.type === "guru" ? "Guru" : "God";
    return `
      <tr>
        <td>${item.name}</td>
        <td>${typeText}</td>
        <td>${item.famousIast || "-"}</td>
        <td>${item.purpose || "-"}</td>
      </tr>
    `;
  }).join("");

  if (slokaLibraryCount) {
    slokaLibraryCount.textContent = `${rows.length} slokas shown`;
  }
}

function reminderShouldTrigger(now = new Date()) {
  if (!reminderSettings.enabled) {
    return false;
  }

  const day = reminderSettings.day;
  if (day !== "daily" && Number(day) !== now.getDay()) {
    return false;
  }

  const [hourText, minuteText] = String(reminderSettings.time || "06:00").split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);
  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return false;
  }

  if (now.getHours() !== hour || now.getMinutes() !== minute) {
    return false;
  }

  const triggerKey = `${formatDateKey(now)}-${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  if (reminderSettings.lastTriggeredKey === triggerKey) {
    return false;
  }

  reminderSettings.lastTriggeredKey = triggerKey;
  saveReminderSettings();
  return true;
}

function triggerReminder() {
  const message = (reminderSettings.message || "Time for your mantra practice.").trim();
  showToast(message);

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Soulvest Mantras Reminder", { body: message });
  }
}

function checkReminders() {
  if (reminderShouldTrigger(new Date())) {
    triggerReminder();
  }
}

function startReminderScheduler() {
  if (reminderIntervalId) {
    clearInterval(reminderIntervalId);
  }
  reminderIntervalId = setInterval(checkReminders, 30000);
  checkReminders();
}

function deityTempleKey(name) {
  if (name.includes("Ganesha")) return "Ganesha";
  if (name.includes("Shiva")) return "Shiva";
  if (name.includes("Vishnu")) return "Vishnu";
  if (name.includes("Narasimha") || name.includes("Narasimhar")) return "Narasimha";
  if (name.includes("Krishna")) return "Krishna";
  if (name.includes("Rama")) return "Rama";
  if (name.includes("Dakshina") || name.includes("Dhakshina")) return "Dhakshinamoorthy";
  if (name.includes("Hanuman")) return "Hanuman";
  if (name.includes("Durga")) return "Durga";
  if (name.includes("Lakshmi")) return "Lakshmi";
  if (name.includes("Saraswati")) return "Saraswati";
  if (name.includes("Murugan") || name.includes("Skanda") || name.includes("Kartikeya")) return "Murugan";
  if (name.includes("Varahi") || name.includes("Varāhī")) return "Varahi";
  return "";
}

function tnImageQueryForItem(item) {
  if (tnStyleImageQueryByEntity[item.name]) {
    return tnStyleImageQueryByEntity[item.name];
  }

  if (item.name.includes("Ganesha")) return tnStyleImageQueryByEntity.Ganesha;
  if (item.name.includes("Shiva")) return tnStyleImageQueryByEntity.Shiva;
  if (item.name.includes("Vishnu")) return tnStyleImageQueryByEntity.Vishnu;
  if (item.name.includes("Krishna")) return tnStyleImageQueryByEntity.Krishna;
  if (item.name.includes("Rama")) return tnStyleImageQueryByEntity.Rama;
  if (item.name.includes("Dakshina") || item.name.includes("Dhakshina")) return tnStyleImageQueryByEntity.Dhakshinamoorthy;
  if (item.name.includes("Hanuman")) return tnStyleImageQueryByEntity.Hanuman;
  if (item.name.includes("Durga")) return tnStyleImageQueryByEntity.Durga;
  if (item.name.includes("Lakshmi")) return tnStyleImageQueryByEntity.Lakshmi;
  if (item.name.includes("Saraswati")) return tnStyleImageQueryByEntity.Saraswati;
  if (item.name.includes("Murugan") || item.name.includes("Skanda") || item.name.includes("Kartikeya")) return tnStyleImageQueryByEntity.Murugan;
  if (item.name.includes("Varahi") || item.name.includes("Varāhī")) return tnStyleImageQueryByEntity["Varahi Amman"];

  return item.wikiQuery || item.name;
}

function imageQueriesForItem(item) {
  const primary = tnImageQueryForItem(item);
  const extra = imageQueryFallbacksByEntity[item.name] || [];
  const base = [primary, ...extra, item.wikiQuery || "", item.name];
  return [...new Set(base.filter(Boolean))];
}

function mapSearchUrl(placeName) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${placeName}, Tamil Nadu`)}`;
}

function mantraSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function defaultRitualGuidanceByType(type) {
  if (type === "planet") {
    return [
      "Follow the graha weekday tradition for consistency.",
      "Chant with fixed count and stable breath.",
      "Prefer discipline and regularity over long irregular sessions."
    ];
  }
  if (type === "guru") {
    return [
      "Begin with gratitude and guru remembrance.",
      "Use clear pronunciation and calm pace.",
      "Sit in silence briefly after chanting."
    ];
  }
  return [
    "Start with a simple sankalpa and chant in fixed counts.",
    "Keep posture upright and breath steady.",
    "Conclude with short silence and gratitude."
  ];
}

function renderTempleInfo(item) {
  templeInfo.classList.remove("hidden");
  if (templeCards) {
    templeCards.innerHTML = "";
  }
  muruganAruDetails.classList.add("hidden");
  muruganAruDetails.open = false;

  if (!item) {
    templeInfoTitle.textContent = "Ritual Guidance";
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = "Select a god, planet, or guru to view practical ritual guidance.";
    return;
  }

  const rituals = ritualGuidanceByName[item.name] || defaultRitualGuidanceByType(item.type);

  templeInfoTitle.textContent = `${item.name} — Ritual Guidance`;

  if (!rituals.length) {
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = "No ritual guidance is available for this selection yet.";
    return;
  }

  templeFallback.classList.add("hidden");
  templeList.innerHTML = rituals
    .map((line) => `<li>${line}</li>`)
    .join("");
}

function renderYouShouldKnow(item) {
  if (!item) {
    youShouldKnow.classList.add("hidden");
    return;
  }

  const basePoints = [
    `Purpose focus: ${item.purpose}`,
    `Start with ${item.famousTitle} for quick devotion, then continue with ${item.gayatriTitle} for focused chanting.`,
    "Chant with steady breathing and clear pronunciation rather than speed.",
    "If at temple, complete a sankalpa (intention) before beginning your count.",
    "For daily practice, choose a fixed count (11/21/51/108) and keep consistency."
  ];

  if (item.type === "planet") {
    basePoints.push("Planet mantras are often chanted on the graha’s weekday with disciplined routine.");
  }

  if (item.type === "guru") {
    basePoints.push("For guru mantras, chant with gratitude and remember the guru’s teachings while reciting.");
  }

  if (beejMantrasByName[item.name]) {
    basePoints.push("Beej mantra is available for this deity and can be used for short focused japa.");
  }

  youShouldKnow.classList.remove("hidden");
  knowList.innerHTML = basePoints.map((point) => `<li>${point}</li>`).join("");
}

function byType(list) {
  if (typeSelect.value === "all") {
    return list;
  }
  return list.filter((item) => item.type === typeSelect.value);
}

function baseList() {
  return byType(mantras);
}

async function copyText(text, label) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    showToast(`${label} copied`);
  } catch {
    showToast("Copy failed");
  }
}

function mantraBlock(title, devanagari, iast, mode) {
  const tamil = typeof iast === "object" ? iast.tamil : "";
  const iastText = typeof iast === "object" ? iast.iast : iast;
  const devText = devanagari || iastText;
  const devBlock = (mode === "both" || mode === "devanagari") && devText ? `<p class="mantra devanagari">${devText}</p>` : "";
  const tamilBlock = (mode === "both" || mode === "tamil") && tamil ? `<p class="mantra tamil-text">${tamil}</p>` : "";
  const iastBlock = (mode === "both" || mode === "iast") && iastText ? `<p class="mantra">${iastText}</p>` : "";

  return `
    <p class="section-title">${title}</p>
    ${devBlock}
    ${iastBlock}
    ${tamilBlock}
  `;
}

function selectedMantraData(item) {
  const beej = beejMantrasByName[item.name];
  const isGayatri = selectedMantraKey === "gayatri";
  const isBeej = selectedMantraKey === "beej";
  const isUnavailableBeej = isBeej && !beej;
  const famousSelection = currentFamousVariant(item);
  const famousVariant = famousSelection.variant;
  const famousVariants = famousVariantsForItem(item);

  let title = isGayatri ? item.gayatriTitle : (famousVariant?.title || item.famousTitle);
  let devanagari = isGayatri ? item.gayatriDevanagari : (famousVariant?.devanagari || item.famousDevanagari);
  let iast = isGayatri ? item.gayatriIast : (famousVariant?.iast || item.famousIast);

  if (isBeej) {
    if (beej) {
      title = beej.title;
      devanagari = beej.devanagari;
      iast = beej.iast;
    } else {
      title = "Beej Mantra";
      devanagari = "इस चयन के लिए बीज मंत्र उपलब्ध नहीं है।";
      iast = "Beej mantra is not available for this selection.";
    }
  }

  const tamil = isUnavailableBeej
    ? ""
    : isBeej
    ? getTamilMantraText(item, "beej", iast)
    : isGayatri
    ? getTamilMantraText(item, "gayatri", iast)
    : getTamilMantraText(item, "famous", iast);

  const meaning = isBeej
    ? (beej
      ? `Meaning: Beej mantra of ${item.name} carries the seed vibration used for concentrated japa and inner focus.`
      : "Meaning: Beej mantra is not typically assigned for this selection.")
    : isGayatri
    ? `Meaning: We meditate on ${item.name} and seek illumination of the intellect. This mantra is used for clarity, guidance, and inner refinement aligned with ${item.purpose.toLowerCase()}`
    : `Meaning: This ${item.famousTitle.toLowerCase()} invokes ${item.name} for ${item.purpose.toLowerCase()}. It is commonly chanted for devotion, focus, and spiritual connection.`;

  const usage = isBeej
    ? (beej
      ? "Usage: Chant with care using a fixed count and focused breathing for subtle inner alignment."
      : "Usage: Select Famous or Gayatri mantra for this entry.")
    : isGayatri
    ? "Usage: Traditionally chanted with focus on correct pronunciation and calm breathing, often during morning/evening prayer or meditation."
    : "Usage: Can be chanted during daily puja, before starting important tasks, or when seeking strength, peace, and blessings.";

  const famousCountLabel = !isGayatri && !isBeej
    ? ` · Showing ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))} of ${Math.max(famousVariants.length, 1)} curated famous/traditional chants for ${item.name}.`
    : "";

  return { title, devanagari, iast, tamil, meaning, usage: `${usage}${famousCountLabel}`, isEnglishOnlyFallback: isUnavailableBeej };
}

function renderChantAssistant(item) {
  if (!item || experienceMode !== "chant") {
    chantAssistant.classList.add("hidden");
    stopBreathCue();
    return;
  }

  const mantra = selectedMantraData(item);
  const mode = scriptSelect.value;

  chantAssistant.classList.remove("hidden");
  chantTitle.textContent = `${item.name} — ${mantra.title}`;
  chantScriptModeLabel.textContent = scriptModeText(mode);
  chantTextDevanagari.textContent = (mode === "both" || mode === "devanagari") ? (mantra.devanagari || mantra.iast) : "";
  chantTextTamil.textContent = (mode === "both" || mode === "tamil") ? (mantra.isEnglishOnlyFallback ? "" : mantra.tamil) : "";
  chantTextIast.textContent = (mode === "both" || mode === "iast") ? mantra.iast : "";
  const totalForEntity = Number(chantHistory[item.name]?.total || 0);
  chantProgress.textContent = `Count: ${chantCount} / ${chantTarget} · Total chanted: ${totalForEntity}`;
  startBreathCue();
  renderMalaProgress();
}

function renderMantraInfo(item) {
  if (!item || experienceMode !== "learning") {
    mantraInfo.classList.add("hidden");
    return;
  }

  const mantra = selectedMantraData(item);
  mantraInfo.classList.remove("hidden");
  mantraInfoTitle.textContent = `${item.name} — ${mantra.title}`;

  const mode = scriptSelect.value;
  scriptModeLabel.textContent = scriptModeText(mode);
  mantraInfoTextDevanagari.textContent = (mode === "both" || mode === "devanagari") ? (mantra.devanagari || mantra.iast) : "";
  mantraInfoTextTamil.textContent = (mode === "both" || mode === "tamil") ? (mantra.isEnglishOnlyFallback ? "" : mantra.tamil) : "";
  mantraInfoTextIast.textContent = (mode === "both" || mode === "iast") ? mantra.iast : "";
  mantraInfoMeaning.textContent = mantra.meaning;
  mantraInfoUsage.textContent = mantra.usage;
}

function buildCard(item, mode) {
  const mantra = selectedMantraData(item);
  const isFavorite = favorites.has(item.name);
  return `
    <article class="card" data-entity="${item.name}">
      <h2>${item.name}</h2>
      <p class="featured-type">${typeLabel(item.type)}</p>
      ${mantraBlock(mantra.title, mantra.devanagari, { iast: mantra.iast, tamil: mantra.tamil }, mode)}
      <p class="meaning">${item.purpose}</p>
      <div class="actions">
        <button data-action="toggle-favorite" data-name="${item.name}">${isFavorite ? "Remove Favorite" : "Add to Favorites"}</button>
        <button data-action="copy-selected" data-name="${item.name}">Copy Selected</button>
        <button data-action="copy-all" data-name="${item.name}">Copy All</button>
        <button data-action="blessing-card" data-name="${item.name}">Blessing Card</button>
        <button data-action="share-card" data-name="${item.name}">Share Card</button>
      </div>
    </article>
  `;
}

function filteredList() {
  const query = searchInput.value.trim().toLowerCase();
  const list = baseList();
  if (!query) {
    return list;
  }

  return list.filter((item) => {
    const beej = beejMantrasByName[item.name];
    const tamilSet = tamilMantrasByName[item.name] || {};
    const famousExtra = (famousMantraLibraryByName[item.name] || []).map((entry) => `${entry.title || ""} ${entry.devanagari || ""} ${entry.iast || ""}`).join(" ");
    const haystack = `${item.name} ${item.famousDevanagari} ${item.famousIast} ${item.gayatriDevanagari} ${item.gayatriIast} ${famousExtra} ${tamilSet.famous || ""} ${tamilSet.gayatri || ""} ${tamilSet.beej || ""} ${beej?.devanagari || ""} ${beej?.iast || ""} ${item.purpose} ${item.brief}`.toLowerCase();
    return haystack.includes(query);
  });
}

function populateEntityOptions() {
  const list = baseList();
  entitySelect.innerHTML = list.map((item) => `<option value="${item.name}">${item.name}</option>`).join("");

  if (!list.length) {
    selectedEntity = "";
    return;
  }

  const stillValid = list.some((item) => item.name === selectedEntity);
  if (!stillValid) {
    selectedEntity = list[0].name;
  }
  entitySelect.value = selectedEntity;
}

async function renderFeatured() {
  const item = mantras.find((entry) => entry.name === selectedEntity);
  if (!item) {
    featured.classList.add("hidden");
    return;
  }

  featured.classList.remove("hidden");
  featuredTitle.textContent = item.name;
  featuredType.textContent = typeLabel(item.type);
  featuredPurpose.textContent = `Purpose: ${item.purpose}`;
  featuredHistory.textContent = item.brief;
  featuredMeaning.textContent = `About ${item.name}: ${item.brief}`;

  const fallbackQueries = imageQueriesForItem(item);
  const cacheKey = `img:${fallbackQueries.join("|")}`;
  featuredImage.src = `https://placehold.co/900x600/f3e2c8/5a4b36?text=${encodeURIComponent(item.name)}`;

  if (imageCache.has(cacheKey)) {
    featuredImage.src = imageCache.get(cacheKey);
    return;
  }

  const requestId = ++latestImageRequestId;
  try {
    let resolvedImageUrl = "";

    for (const query of fallbackQueries) {
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      const response = await fetch(summaryUrl);
      if (!response.ok) {
        continue;
      }
      const payload = await response.json();
      const imageUrl = payload?.thumbnail?.source || payload?.originalimage?.source;

      if (!looksRelevantForItem(item, payload)) {
        continue;
      }

      if (!featuredHistory.textContent && typeof payload?.extract === "string" && payload.extract.trim()) {
        featuredHistory.textContent = payload.extract;
      }

      if (imageUrl) {
        resolvedImageUrl = imageUrl;
        break;
      }
    }

    if (resolvedImageUrl) {
      imageCache.set(cacheKey, resolvedImageUrl);
      if (requestId === latestImageRequestId) {
        featuredImage.src = resolvedImageUrl;
      }
    }
  } catch {
    imageCache.set(cacheKey, featuredImage.src);
  }
}

function render() {
  const mode = scriptSelect.value;
  experienceMode = experienceModeSelect?.value || "chant";
  const list = filteredList();

  if (!list.length) {
    grid.innerHTML = `<div class="empty">No entries found for your search.</div>`;
    resultCount.textContent = "0 entries shown";
    renderMantraInfo(null);
    renderChantAssistant(null);
    renderExperienceMode(null);
    renderYouShouldKnow(null);
    renderRitualJournal(null);
  } else {
    let selectedItem = list.find((item) => item.name === selectedEntity);
    if (!selectedItem) {
      selectedItem = list[0];
      selectedEntity = selectedItem.name;
      if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
        entitySelect.value = selectedEntity;
      }
    }

    grid.innerHTML = buildCard(selectedItem, mode);
    resultCount.textContent = "Full page view for selected entry";
    renderExperienceMode(selectedItem);
    renderMantraInfo(selectedItem);
    renderChantAssistant(selectedItem);
    renderYouShouldKnow(selectedItem);
    renderTempleInfo(selectedItem);
    renderRitualJournal(selectedItem);
  }

  renderFeatured();
  renderMantraOfDay();
  renderPersonalHub();
  renderSankalpaTracker();
  renderAiSuggestion();
  renderQuickPaths();
  renderSlokaLibrary();
  savePrefs();
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".card");

  if (card && card.dataset.entity) {
    selectedEntity = card.dataset.entity;
    if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
      entitySelect.value = selectedEntity;
    }
    renderFeatured();
  }

  if (!button) {
    return;
  }

  const name = button.dataset.name;
  const item = mantras.find((entry) => entry.name === name);
  if (!item) {
    return;
  }

  if (button.dataset.action === "toggle-favorite") {
    toggleFavorite(item.name);
    return;
  }

  if (button.dataset.action === "copy-selected") {
    const mantra = selectedMantraData(item);
    const tamilLine = mantra.tamil ? `\n${mantra.tamil}` : "";
    copyText(`${item.name}\n${mantra.devanagari}\n${mantra.iast}${tamilLine}`, `${item.name} selected mantra`);
  }

  if (button.dataset.action === "copy-all") {
    const beej = beejMantrasByName[item.name];
    const beejBlock = beej ? `\n\n${beej.title}:\n${beej.devanagari}\n${beej.iast}` : "";
    copyText(
      `${item.name}\n\n${item.famousTitle}:\n${item.famousDevanagari}\n${item.famousIast}\n\n${item.gayatriTitle}:\n${item.gayatriDevanagari}\n${item.gayatriIast}${beejBlock}\n\nPurpose: ${item.purpose}`,
      `${item.name} full text`
    );
  }

  if (button.dataset.action === "blessing-card") {
    createBlessingCard(item);
  }

  if (button.dataset.action === "share-card") {
    shareBlessingCard(item);
  }
});

searchInput.addEventListener("input", () => {
  const list = filteredList();
  if (list.length && !list.some((item) => item.name === selectedEntity)) {
    selectedEntity = list[0].name;
    if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
      entitySelect.value = selectedEntity;
    }
  }
  render();
});
if (slokaLibrarySearch) {
  slokaLibrarySearch.addEventListener("input", () => {
    renderSlokaLibrary();
  });
}
typeSelect.addEventListener("change", () => {
  populateEntityOptions();
  chantCount = 0;
  render();
});
entitySelect.addEventListener("change", () => {
  if (searchInput.value) {
    searchInput.value = "";
  }
  selectedEntity = entitySelect.value;
  chantCount = 0;
  render();
});
mantraSelect.addEventListener("change", () => {
  selectedMantraKey = mantraSelect.value;
  chantCount = 0;
  render();
});
scriptSelect.addEventListener("change", render);
if (experienceModeSelect) {
  experienceModeSelect.addEventListener("change", () => {
    experienceMode = experienceModeSelect.value;
    render();
  });
}
chantTargetSelect.addEventListener("change", () => {
  chantTarget = Number(chantTargetSelect.value);
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  savePrefs();
});
chantPlusBtn.addEventListener("click", () => {
  chantCount += 1;
  if (chantCount === 1) {
    playSessionStartSound();
  }
  recordChant(selectedEntity, 1);
  const completedSankalpa = incrementSankalpaProgress(1);
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  renderPersonalHub();
  renderSankalpaTracker();
  if (chantCount >= chantTarget) {
    showToast(`Completed ${chantTarget} chants`);
    if (chantCount === chantTarget) {
      playSessionEndSound();
    }
  }
  if (completedSankalpa) {
    showToast("Sankalpa complete for today");
  }
  savePrefs();
});
chantResetBtn.addEventListener("click", () => {
  const hadProgress = chantCount > 0;
  chantCount = 0;
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  if (hadProgress) {
    playSessionEndSound();
  }
  savePrefs();
});

if (sessionSoundToggle) {
  sessionSoundToggle.addEventListener("change", () => {
    soundSettings.enabled = sessionSoundToggle.checked;
    saveSoundPrefs();
    showToast(soundSettings.enabled ? "Temple sounds enabled" : "Temple sounds disabled");
  });
}

if (homeQuickAccess) {
  homeQuickAccess.addEventListener("click", (event) => {
    const button = event.target.closest(".quick-path-btn");
    if (!button?.dataset.type) return;
    typeSelect.value = button.dataset.type;
    populateEntityOptions();
    chantCount = 0;
    render();
  });
}

if (aiSuggestBtn) {
  aiSuggestBtn.addEventListener("click", () => {
    renderAiSuggestion();
    saveAiPrefs();
  });
}

if (aiApplySuggestionBtn) {
  aiApplySuggestionBtn.addEventListener("click", () => {
    applyAiSuggestion();
    saveAiPrefs();
  });
}

if (aiDeitySelect) {
  aiDeitySelect.addEventListener("change", () => {
    renderAiSuggestion();
    saveAiPrefs();
  });
}

if (voiceAccentSelect) {
  voiceAccentSelect.addEventListener("change", () => {
    voiceAccent = voiceAccentSelect.value;
    savePrefs();
  });
}

if (voiceLoopToggle) {
  voiceLoopToggle.addEventListener("change", () => {
    voiceLoop = voiceLoopToggle.checked;
    savePrefs();
  });
}

if (voicePlayBtn) {
  voicePlayBtn.addEventListener("click", () => {
    speakCurrentMantra();
  });
}

if (voiceStopBtn) {
  voiceStopBtn.addEventListener("click", () => {
    stopVoiceChant();
  });
}

if (moodSelect) {
  moodSelect.addEventListener("change", () => {
    selectedMood = moodSelect.value;
    applyMoodTheme(selectedMood);
    savePrefs();
  });
}

if (spiritualIntensityRange) {
  spiritualIntensityRange.addEventListener("input", () => {
    spiritualIntensity = Number(spiritualIntensityRange.value) || 2;
    renderSpiritualIntensity();
    savePrefs();
  });
}

if (visualModeToggle) {
  visualModeToggle.addEventListener("change", () => {
    setMinimalVisualMode(visualModeToggle.checked);
    savePrefs();
  });
}

if (morningThemeBtn) {
  morningThemeBtn.addEventListener("click", () => {
    manualTimeTheme = "morning";
    applyTimeTheme(manualTimeTheme);
    savePrefs();
  });
}

if (eveningThemeBtn) {
  eveningThemeBtn.addEventListener("click", () => {
    manualTimeTheme = "evening";
    applyTimeTheme(manualTimeTheme);
    savePrefs();
  });
}

if (nightThemeBtn) {
  nightThemeBtn.addEventListener("click", () => {
    manualTimeTheme = "night";
    applyTimeTheme(manualTimeTheme);
    savePrefs();
  });
}

if (autoThemeBtn) {
  autoThemeBtn.addEventListener("click", () => {
    manualTimeTheme = "auto";
    applyTimeTheme(manualTimeTheme);
    savePrefs();
  });
}

if (ambientPlayBtn) {
  ambientPlayBtn.addEventListener("click", () => {
    startAmbientPad();
  });
}

if (ambientStopBtn) {
  ambientStopBtn.addEventListener("click", () => {
    stopAmbientPad();
  });
}

if (applyMoodBtn) {
  applyMoodBtn.addEventListener("click", () => {
    const emotionMood = moodFromEmotionInput(emotionInput?.value || "");
    const targetMood = emotionMood || moodSelect?.value || "auto";
    selectedMood = targetMood;
    if (moodSelect) {
      moodSelect.value = targetMood;
    }
    const reason = emotionMood ? "Adjusted from your emotional input." : "Adjusted from selected mode/time.";
    applyMoodTheme(targetMood, reason);
    saveAiPrefs();
    savePrefs();
  });
}

if (saveJournalBtn) {
  saveJournalBtn.addEventListener("click", () => {
    saveJournalEntry();
    if (journalStatus) {
      journalStatus.textContent = "Journal entry saved for today.";
    }
    showToast("Ritual journal saved");
  });
}

if (startMeditationBtn) {
  startMeditationBtn.addEventListener("click", () => {
    startMeditationSession();
  });
}

if (stopMeditationBtn) {
  stopMeditationBtn.addEventListener("click", () => {
    stopMeditationSession(false);
    if (meditationTimerText) {
      meditationTimerText.textContent = "Meditation timer not running.";
    }
  });
}

mantraOfDayOpenBtn.addEventListener("click", () => {
  const suggestion = todaySuggestedItem();
  if (!suggestion.item) return;
  const targetType = suggestion.item.type;
  if (typeSelect.value !== "all" && typeSelect.value !== targetType) {
    typeSelect.value = targetType;
    populateEntityOptions();
  }
  selectedEntity = suggestion.item.name;
  selectedMantraKey = "famous";
  mantraSelect.value = selectedMantraKey;
  if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
    entitySelect.value = selectedEntity;
  }
  chantCount = 0;
  render();
});

favoritesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='open-favorite']");
  if (!button) return;
  const name = button.dataset.name;
  if (!name) return;
  const item = mantras.find((entry) => entry.name === name);
  if (!item) return;

  if (typeSelect.value !== "all" && typeSelect.value !== item.type) {
    typeSelect.value = item.type;
    populateEntityOptions();
  }
  selectedEntity = item.name;
  if (entitySelect.querySelector(`option[value="${selectedEntity}"]`)) {
    entitySelect.value = selectedEntity;
  }
  render();
});

if (saveReminderBtn) {
  saveReminderBtn.addEventListener("click", async () => {
    reminderSettings.enabled = reminderEnabled.checked;
    reminderSettings.day = reminderDaySelect.value;
    reminderSettings.time = reminderTimeInput.value || "06:00";
    reminderSettings.message = (reminderMessageInput.value || "").trim() || "Time for your mantra practice.";

    if (reminderSettings.enabled) {
      await ensureNotificationPermission();
    }

    saveReminderSettings();
    renderReminderSettings();
    startReminderScheduler();
    showToast("Reminder settings saved");
  });
}

if (sankalpaSaveBtn) {
  sankalpaSaveBtn.addEventListener("click", () => {
    const nextText = (sankalpaInput.value || "").trim();
    sankalpaState.text = nextText || "Chant with devotion and clarity.";
    sankalpaState.target = Number(sankalpaTargetSelect.value) || 21;
    resetSankalpaDailyIfNeeded();
    saveSankalpa();
    renderSankalpaTracker();
    showToast("Sankalpa saved");
  });
}

if (sankalpaCompleteBtn) {
  sankalpaCompleteBtn.addEventListener("click", () => {
    const completedNow = markSankalpaComplete();
    if (!completedNow) {
      showToast("Sankalpa already completed today");
    } else {
      sankalpaState.dailyCount = Math.max(sankalpaState.dailyCount, sankalpaState.target);
      saveSankalpa();
      showToast("Sankalpa complete for today");
    }
    renderSankalpaTracker();
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
    });
  });
}

loadPrefs();
loadFavorites();
loadChantHistory();
loadSankalpa();
loadReminderSettings();
loadSoundPrefs();
populateAiDeityOptions();
loadAiPrefs();
loadJournalEntry();
populateEntityOptions();
renderSpiritualIntensity();
setMinimalVisualMode(visualMinimalMode);
applyMoodTheme(selectedMood);
applyTimeTheme(manualTimeTheme);
render();
startRotatingMessages();
renderReminderSettings();
startReminderScheduler();
renderSoundToggle();

setInterval(() => {
  if (manualTimeTheme === "auto") {
    applyTimeTheme("auto");
  }
}, 60000);

window.addEventListener("beforeunload", () => {
  stopAmbientPad();
});

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}
