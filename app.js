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
    famousIast: "oṃ namo nārāyaṇāya ||",
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
    famousIast: "hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare | hare rāma hare rāma rāma rāma hare hare ||",
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
    famousIast: "śrī rāma jaya rāma jaya jaya rāma ||",
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
    famousIast: "śrī rāma jaya rāma jaya jaya rāma ||",
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
    famousIast: "oṃ haṃ hanumate namaḥ ||",
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
    famousIast: "oṃ duṃ durgāyai namaḥ ||",
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
    famousIast: "oṃ śrīṃ mahālakṣmyai namaḥ ||",
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
    famousIast: "oṃ aiṃ sarasvatyai namaḥ ||",
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
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ नमो भगवते दक्षिणामूर्तये॥",
    famousIast: "oṃ namo bhagavate dakṣiṇāmūrtaye ||",
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
    name: "Shirdi Sai Baba",
    type: "guru",
    wikiQuery: "Sai Baba of Shirdi",
    purpose: "For faith (Shraddha), patience (Saburi), and compassionate living.",
    brief:
      "Sai Baba of Shirdi is revered as a saint who taught universal love, service, and devotion beyond boundaries.",
    famousTitle: "Famous Mantra",
    famousDevanagari: "ॐ साईं राम॥",
    famousIast: "oṃ sāī rāma ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ शिर्डीवासाय विद्महे सच्चिदानन्दाय धीमहि तन्नः साईः प्रचोदयात्॥",
    gayatriIast: "oṃ śirḍīvāsāya vidmahe saccidānandāya dhīmahi tannaḥ sāīḥ pracodayāt ||"
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
    famousIast: "pūjyāya rāghavendrāya satyadharmaratāya ca | bhajatāṃ kalpavṛkṣāya namatāṃ kāmadhenuve ||",
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
    famousIast: "yogi rāma surata kumāra jaya gururāyā ||",
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

const imageCache = new Map();
let selectedEntity = "";
let selectedMantraKey = "famous";
let latestImageRequestId = 0;
let chantCount = 0;
let chantTarget = 11;
let favorites = new Set();
let chantHistory = {};

const PREF_KEY = "chant_helper_prefs_v1";
const FAVORITES_KEY = "chant_helper_favorites_v1";
const CHANT_HISTORY_KEY = "chant_helper_history_v1";

const mantraOfDayByWeekday = {
  0: "Surya (Sun)",
  1: "Shiva",
  2: "Hanuman",
  3: "Budha (Mercury)",
  4: "Brihaspati (Jupiter)",
  5: "Lakshmi",
  6: "Shani (Saturn)",
};

const rotatingMessages = [
  "One focused chant is stronger than many distracted chants.",
  "Breathe deeply, chant clearly, and keep your sankalpa steady.",
  "Consistency in 11 chants daily builds inner strength over time.",
  "Start with gratitude; end with silence for deeper absorption.",
  "Pronunciation with devotion matters more than speed."
];

const didYouKnowMessages = [
  "Many practitioners choose 108 because it is considered a spiritually complete count.",
  "Planet mantras are often aligned with specific weekdays for disciplined practice.",
  "Gayatri mantras traditionally focus on illumination of the intellect.",
  "Short beej mantras are commonly used for concentrated japa sessions.",
  "Daily chanting at a fixed time helps build a stable spiritual routine."
];

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

function savePrefs() {
  const payload = {
    type: typeSelect.value,
    entity: selectedEntity,
    mantraKey: selectedMantraKey,
    script: scriptSelect.value,
    chantCount,
    chantTarget,
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

function renderTempleInfo(item) {
  if (!item) {
    templeInfo.classList.remove("hidden");
    templeInfoTitle.textContent = "Famous Spiritual Places in Tamil Nadu";
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = "Select a god, planet, or guru to view related places in Tamil Nadu.";
    muruganAruDetails.classList.add("hidden");
    muruganAruDetails.open = false;
    return;
  }

  const key = deityTempleKey(item.name);
  let temples = [];
  if (item.type === "god") {
    temples = tnTemplesByDeity[key] || [];
  } else if (item.type === "planet") {
    temples = tnTemplesByPlanet[item.name] || [];
  } else if (item.type === "guru") {
    temples = tnTemplesByGuru[item.name] || [];
  }

  templeInfo.classList.remove("hidden");
  templeInfoTitle.textContent = `${item.name} — Famous Places in Tamil Nadu`;

  if (!temples.length) {
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = "No curated Tamil Nadu temple list is available yet for this deity.";
    muruganAruDetails.classList.add("hidden");
    muruganAruDetails.open = false;
    return;
  }

  templeFallback.classList.add("hidden");
  templeList.innerHTML = temples
    .map((name) => `<li><a href="${mapSearchUrl(name)}" target="_blank" rel="noopener noreferrer">${name}</a></li>`)
    .join("");

  if (key === "Murugan") {
    muruganAruDetails.classList.remove("hidden");
    muruganAruList.innerHTML = aruPadaiVeedu
      .map((place) => `<li><a href="${mapSearchUrl(place)}" target="_blank" rel="noopener noreferrer">${place}</a></li>`)
      .join("");
  } else {
    muruganAruDetails.classList.add("hidden");
    muruganAruDetails.open = false;
  }
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

  let title = isGayatri ? item.gayatriTitle : item.famousTitle;
  let devanagari = isGayatri ? item.gayatriDevanagari : item.famousDevanagari;
  let iast = isGayatri ? item.gayatriIast : item.famousIast;

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

  return { title, devanagari, iast, tamil, meaning, usage, isEnglishOnlyFallback: isUnavailableBeej };
}

function renderChantAssistant(item) {
  if (!item) {
    chantAssistant.classList.add("hidden");
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
}

function renderMantraInfo(item) {
  if (!item) {
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
    const haystack = `${item.name} ${item.famousDevanagari} ${item.famousIast} ${item.gayatriDevanagari} ${item.gayatriIast} ${tamilSet.famous || ""} ${tamilSet.gayatri || ""} ${tamilSet.beej || ""} ${beej?.devanagari || ""} ${beej?.iast || ""} ${item.purpose} ${item.brief}`.toLowerCase();
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
  const list = filteredList();

  if (!list.length) {
    grid.innerHTML = `<div class="empty">No entries found for your search.</div>`;
    resultCount.textContent = "0 entries shown";
    renderMantraInfo(null);
    renderChantAssistant(null);
    renderYouShouldKnow(null);
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
    renderMantraInfo(selectedItem);
    renderChantAssistant(selectedItem);
    renderYouShouldKnow(selectedItem);
    renderTempleInfo(selectedItem);
  }

  renderFeatured();
  renderMantraOfDay();
  renderPersonalHub();
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
typeSelect.addEventListener("change", () => {
  populateEntityOptions();
  chantCount = 0;
  render();
});
entitySelect.addEventListener("change", () => {
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
chantTargetSelect.addEventListener("change", () => {
  chantTarget = Number(chantTargetSelect.value);
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  savePrefs();
});
chantPlusBtn.addEventListener("click", () => {
  chantCount += 1;
  recordChant(selectedEntity, 1);
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  renderPersonalHub();
  if (chantCount >= chantTarget) {
    showToast(`Completed ${chantTarget} chants`);
  }
  savePrefs();
});
chantResetBtn.addEventListener("click", () => {
  chantCount = 0;
  const item = mantras.find((entry) => entry.name === selectedEntity);
  renderChantAssistant(item || null);
  savePrefs();
});

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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
    });
  });
}

loadPrefs();
loadFavorites();
loadChantHistory();
populateEntityOptions();
render();
startRotatingMessages();
