const malayalamScriptMaps = {
  om: "ഓം",
  anusvara: "ം",
  visarga: "ഃ",
  virama: "്",
  consonantMap: {
    kṣ: "ക്ഷ", jñ: "ജ്ഞ", kh: "ഖ", gh: "ഘ", ch: "ച", jh: "ഝ", ṭh: "ഠ", ḍh: "ഢ", th: "ഥ", dh: "ധ", ph: "ഫ", bh: "ഭ",
    ṅ: "ങ", ñ: "ഞ", ṭ: "ട", ḍ: "ഡ", ṇ: "ണ", ś: "ശ", ṣ: "ഷ", ḷ: "ള", ḻ: "ഴ", ṟ: "റ",
    k: "ക", g: "ഗ", c: "ച", j: "ജ", t: "ത", d: "ദ", n: "ന", p: "പ", b: "ബ", m: "മ", y: "യ", r: "ര", l: "ല", v: "വ", w: "വ", s: "സ", h: "ഹ"
  },
  independentVowel: { a: "അ", ā: "ആ", i: "ഇ", ī: "ഈ", u: "ഉ", ū: "ഊ", e: "എ", ē: "ഏ", o: "ഒ", ō: "ഓ", ai: "ഐ", au: "ഔ", ṛ: "ഋ", ṝ: "ൠ" },
  vowelSign: { a: "", ā: "ാ", i: "ി", ī: "ീ", u: "ു", ū: "ൂ", e: "െ", ē: "േ", o: "ൊ", ō: "ോ", ai: "ൈ", au: "ൗ", ṛ: "ൃ", ṝ: "ൄ" }
};

function iastToMalayalam(text) {
  return iastToBrahmic(text, malayalamScriptMaps);
}
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
    famousIast: "oṃ ādityāya ca somāya maṅgalāya budhāya ca | guru śukra śanibhyaśca rāhave ketave namaḥ ||",
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
    famousIast: "oṃ sāīṃ rāma ||",
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
    famousIast: "pūjyāya rāghavendrāya satyadharmaratāya ca | bhajatāṃ kalpavṛkṣāya namatāṃ kāmadhenave ||",
    gayatriTitle: "Gayatri Mantra",
    gayatriDevanagari: "ॐ राघवेन्द्राय विद्महे भक्तप्रियाय धीमहि तन्नो गुरुः प्रचोदयात्॥",
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
const languageSelect = document.getElementById("languageSelect");
const languageBarLabel = document.getElementById("languageBarLabel");
const langEnglishBtn = document.getElementById("langEnglishBtn");
const langTamilBtn = document.getElementById("langTamilBtn");
const langTeluguBtn = document.getElementById("langTeluguBtn");
const langKannadaBtn = document.getElementById("langKannadaBtn");
const langHindiBtn = document.getElementById("langHindiBtn");
const langMalayalamBtn = document.getElementById("langMalayalamBtn");
if (langMalayalamBtn) {
  langMalayalamBtn.textContent = "മലയാളം";
  langMalayalamBtn.classList.toggle("active", currentLanguage === "ml");
}
if (langMalayalamBtn) {
  langMalayalamBtn.addEventListener("click", () => setLanguage("ml"));
}

const imageCache = new Map();
let selectedEntity = "";
let selectedMantraKey = "famous";
let latestImageRequestId = 0;
let chantCount = 0;
let chantTarget = 11;
let favorites = new Set();
let chantHistory = {};
let sankalpaState = {
  text: "",
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
  message: "",
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
let manualTimeTheme = "morning";
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
const LANGUAGE_KEY = "chant_helper_language_v1";

let currentLanguage = "en";

const uiCopy = {
  en: {
    languageEnglish: "English",
    languageTamil: "தமிழ்",
    languageTelugu: "తెలుగు",
    languageKannada: "ಕನ್ನಡ",
    languageHindi: "हिंदी",
    searchPlaceholder: "Search deity, mantra, or meaning...",
    slokaSearchPlaceholder: "Search by deity, sloka text, or purpose...",
    noEntries: "No entries found for your search.",
    entriesShown: "{count} entries shown",
    fullPageView: "Full page view for selected entry",
    scriptDevanagari: "Script: Devanagari",
    scriptTamil: "Script: Tamil",
    scriptTelugu: "Script: Telugu",
    scriptKannada: "Script: Kannada",
    scriptHindi: "Script: Hindi (Devanagari)",
    scriptIast: "Script: IAST (Transliteration)",
    scriptBoth: "Script: Devanagari + Tamil + IAST",
    typeGod: "God",
    typeGuru: "Guru",
    typePlanet: "Planet (Navagraha)",
    addFavorite: "Add to Favorites",
    removeFavorite: "Remove Favorite",
    copySelected: "Copy Selected",
    copyAll: "Copy All",
    blessingCard: "Blessing Card",
    shareCard: "Share Card",
    copied: "{label} copied",
    copyFailed: "Copy failed",
    favoritesAdded: "{name} added to favorites",
    favoritesRemoved: "{name} removed from favorites",
    justNow: "just now",
    recently: "recently",
    chants: "chants",
    last: "Last",
    today: "Today",
    sankalpa: "Sankalpa",
    completedToday: "Completed today",
    currentStreak: "Current streak",
    best: "Best",
    days: "day(s)",
    everyDay: "Every day",
    reminderActive: "Reminder active: {day} at {time}",
    reminderDisabled: "Reminder disabled.",
    notifUnsupported: "Browser notifications are not supported.",
    notifEnabled: "Browser notifications enabled.",
    notifBlocked: "Notification permission is blocked in browser settings.",
    notifPending: "Notification permission not granted yet.",
    reminderSaved: "Reminder settings saved",
    reminderTitle: "Soulvest Mantras Reminder",
    defaultReminderMessage: "Time for your mantra practice.",
    mantraUnavailable: "No mantra suggestion available right now.",
    mantraOfDayTitle: "{day} — {name}",
    mantraOfDayText: "{title}: {purpose}",
    aiNoSuggestion: "No personalized suggestion available right now.",
    aiChosenReason: "Based on your chosen deity: {name}.",
    aiWeekdayReason: "Weekday alignment: {day} traditionally favors {name}.",
    aiFallbackReason: "Using your current selection as the best match.",
    aiOpened: "Suggested mantra opened: {name}",
    noPreferenceWeekday: "No preference (weekday based)",
    light: "Light",
    medium: "Medium",
    deep: "Deep",
    moodCalm: "Calm",
    moodDevotional: "Devotional",
    moodFestive: "Festive",
    moodActive: "Mood active: {mood}.{reason}",
    ambientUnsupported: "Ambient audio is not supported in this browser.",
    ambientAlready: "Ambient audio is already playing.",
    ambientPlaying: "Ambient tanpura-style drone playing.",
    ambientStopped: "Ambient audio stopped.",
    voiceStopped: "Voice chant stopped.",
    voiceUnsupported: "Voice chanting is not supported in this browser.",
    voiceSelectFirst: "Select a deity first to play chant audio.",
    voicePlaying: "Playing {label} voice chant{loop} at {intensity} intensity.",
    voiceLoopOn: " on loop",
    meditationComplete: "Meditation session complete",
    meditationPickEntry: "Select an entry to start meditation",
    silenceTimer: "Silence timer: {time}",
    meditationTitle: "{name} — Timed silent meditation",
    meditationNotRunning: "Meditation timer not running.",
    malaProgress: "Mala Progress: {count} / 108",
    countProgress: "Count: {count} / {target} · Total chanted: {total}",
    ritualGuidance: "Ritual Guidance",
    ritualGuidanceFor: "{name} — Ritual Guidance",
    ritualChoose: "Select a god, planet, or guru to view practical ritual guidance.",
    ritualMissing: "No ritual guidance is available for this selection yet.",
    slokasShown: "{count} slokas shown",
    mantraTypePlanet: "Planet",
    completedChants: "Completed {count} chants",
    sankalpaComplete: "Sankalpa complete for today",
    templeSoundsEnabled: "Temple sounds enabled",
    templeSoundsDisabled: "Temple sounds disabled",
    journalSavedStatus: "Journal entry saved for today.",
    ritualJournalSaved: "Ritual journal saved",
    sankalpaSaved: "Sankalpa saved",
    sankalpaAlready: "Sankalpa already completed today",
    blessingCardNotSupported: "Blessing card not supported",
    blessingCardShared: "Blessing card shared",
    generatedOn: "Generated on",
    todaysMessage: "Today's Message",
    purpose: "Purpose",
    about: "About",
    blessingDownloaded: "Blessing card downloaded",
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rotatingMessages: [
      "One focused chant is stronger than many distracted chants.",
      "Breathe deeply, chant clearly, and keep your sankalpa steady.",
      "Consistency in 11 chants daily builds inner strength over time.",
      "Start with gratitude; end with silence for deeper absorption.",
      "Pronunciation with devotion matters more than speed."
    ],
    didYouKnowMessages: [
      "Beej mantra means a seed sound — a compact vibration that represents the core energy of a deity.",
      "Common beej examples: ॐ गं (Gaṃ) for Ganesha, श्रीं (Śrīṃ) for Lakshmi, and ऐं (Aiṃ) for Saraswati.",
      "Beej mantras are usually short, but they are repeated with deep attention, correct pronunciation, and steady breath.",
      "In practice, many devotees start with a famous mantra and then continue with beej japa for focused inner absorption.",
      "Gayatri mantras invoke illumination of intellect, while beej mantras emphasize concentrated divine vibration.",
      "A fixed daily count such as 11, 21, 51, or 108 helps beej mantra practice become stable and disciplined."
    ]
  },
  ta: {
    languageEnglish: "English",
    languageTamil: "தமிழ்",
    languageTelugu: "తెలుగు",
    languageKannada: "ಕನ್ನಡ",
    languageHindi: "हिंदी",
    searchPlaceholder: "தெய்வம், மந்திரம் அல்லது பொருள் தேடுங்கள்...",
    slokaSearchPlaceholder: "தெய்வம், ஸ்லோகம் அல்லது நோக்கம் மூலம் தேடுங்கள்...",
    noEntries: "உங்கள் தேடலுக்கு பொருந்தும் பதிவுகள் இல்லை.",
    entriesShown: "{count} பதிவுகள் காட்டப்படுகின்றன",
    fullPageView: "தேர்ந்தெடுத்த பதிவுக்கான முழுப் பக்க காட்சி",
    scriptDevanagari: "எழுத்து: தேவநாகரி",
    scriptTamil: "எழுத்து: தமிழ்",
    scriptTelugu: "எழுத்து: தெலுங்கு",
    scriptKannada: "எழுத்து: கன்னடம்",
    scriptHindi: "எழுத்து: ஹிந்தி (தேவநாகரி)",
    scriptIast: "எழுத்து: IAST (ஒலிபெயர்ப்பு)",
    scriptBoth: "எழுத்து: தேவநாகரி + தமிழ் + IAST",
    typeGod: "தெய்வம்",
    typeGuru: "குரு",
    typePlanet: "கிரகம் (நவகிரகம்)",
    addFavorite: "பிடித்ததில் சேர்",
    removeFavorite: "பிடித்ததில் இருந்து நீக்கு",
    copySelected: "தேர்ந்ததை நகலெடு",
    copyAll: "அனைத்தையும் நகலெடு",
    blessingCard: "ஆசி அட்டை",
    shareCard: "அட்டையை பகிர்",
    copied: "{label} நகலெடுக்கப்பட்டது",
    copyFailed: "நகலெடுக்க முடியவில்லை",
    favoritesAdded: "{name} பிடித்ததில் சேர்க்கப்பட்டது",
    favoritesRemoved: "{name} பிடித்ததில் இருந்து நீக்கப்பட்டது",
    justNow: "இப்போது தான்",
    recently: "சமீபத்தில்",
    chants: "ஜபங்கள்",
    last: "கடைசியாக",
    today: "இன்று",
    sankalpa: "சங்கல்பம்",
    completedToday: "இன்று நிறைவு",
    currentStreak: "தொடர்",
    best: "சிறந்தது",
    days: "நாள்(கள்)",
    everyDay: "ஒவ்வொரு நாளும்",
    reminderActive: "நினைவூட்டல் செயல்பாட்டில்: {day} {time} மணிக்கு",
    reminderDisabled: "நினைவூட்டல் முடக்கப்பட்டுள்ளது.",
    notifUnsupported: "இந்த உலாவியில் அறிவிப்புகள் ஆதரிக்கப்படவில்லை.",
    notifEnabled: "உலாவி அறிவிப்புகள் இயக்கத்தில் உள்ளன.",
    notifBlocked: "உலாவி அமைப்புகளில் அறிவிப்பு அனுமதி தடுக்கப்பட்டுள்ளது.",
    notifPending: "அறிவிப்பு அனுமதி இன்னும் வழங்கப்படவில்லை.",
    reminderSaved: "நினைவூட்டல் அமைப்புகள் சேமிக்கப்பட்டது",
    reminderTitle: "Soulvest Mantras நினைவூட்டல்",
    defaultReminderMessage: "உங்கள் மந்திரப் பயிற்சிக்கு நேரம்.",
    mantraUnavailable: "இப்போது மந்திர பரிந்துரை கிடைக்கவில்லை.",
    mantraOfDayTitle: "{day} — {name}",
    mantraOfDayText: "{title}: {purpose}",
    aiNoSuggestion: "தனிப்பட்ட பரிந்துரை இப்போது இல்லை.",
    aiChosenReason: "நீங்கள் தேர்ந்தெடுத்த தெய்வத்தின் அடிப்படையில்: {name}.",
    aiWeekdayReason: "வாரநாள் பொருத்தம்: {day} அன்று {name} பரிந்துரைக்கப்படுகிறது.",
    aiFallbackReason: "உங்கள் தற்போதைய தேர்வே சிறந்ததாக பயன்படுத்தப்பட்டது.",
    aiOpened: "பரிந்துரைக்கப்பட்ட மந்திரம் திறக்கப்பட்டது: {name}",
    noPreferenceWeekday: "விருப்பம் இல்லை (வாரநாள் அடிப்படையில்)",
    light: "இலகு",
    medium: "மத்திய",
    deep: "ஆழம்",
    moodCalm: "அமைதி",
    moodDevotional: "பக்தி",
    moodFestive: "உற்சவம்",
    moodActive: "நிலை செயல்பாட்டில்: {mood}.{reason}",
    ambientUnsupported: "இந்த உலாவியில் பின்னணி ஒலி ஆதரிக்கப்படவில்லை.",
    ambientAlready: "பின்னணி ஒலி ஏற்கனவே இயங்குகிறது.",
    ambientPlaying: "தம்புரா பாணி பின்னணி ஒலி இயங்குகிறது.",
    ambientStopped: "பின்னணி ஒலி நிறுத்தப்பட்டது.",
    voiceStopped: "குரல் ஜபம் நிறுத்தப்பட்டது.",
    voiceUnsupported: "இந்த உலாவியில் குரல் ஜபம் ஆதரிக்கப்படவில்லை.",
    voiceSelectFirst: "முதலில் ஒரு தெய்வத்தை தேர்வு செய்யுங்கள்.",
    voicePlaying: "{label} குரல் ஜபம்{loop} {intensity} மட்டத்தில் இயங்குகிறது.",
    voiceLoopOn: " (மீண்டும் மீண்டும்)",
    meditationComplete: "தியான அமர்வு நிறைவடைந்தது",
    meditationPickEntry: "தியானம் தொடங்க ஒரு பதிவை தேர்வு செய்யுங்கள்",
    silenceTimer: "அமைதி நேரமணி: {time}",
    meditationTitle: "{name} — நேரமிட்ட அமைதித் தியானம்",
    meditationNotRunning: "தியான நேரமணி இயங்கவில்லை.",
    malaProgress: "மாலை முன்னேற்றம்: {count} / 108",
    countProgress: "எண்ணிக்கை: {count} / {target} · மொத்த ஜபங்கள்: {total}",
    ritualGuidance: "சடங்கு வழிகாட்டல்",
    ritualGuidanceFor: "{name} — சடங்கு வழிகாட்டல்",
    ritualChoose: "நடைமுறை சடங்கு வழிகாட்டலை காண தெய்வம், கிரகம் அல்லது குருவை தேர்வு செய்யுங்கள்.",
    ritualMissing: "இந்த தேர்விற்கு சடங்கு வழிகாட்டல் இன்னும் இல்லை.",
    slokasShown: "{count} ஸ்லோகங்கள் காட்டப்படுகின்றன",
    mantraTypePlanet: "கிரகம்",
    completedChants: "{count} ஜபங்கள் நிறைவு",
    sankalpaComplete: "இன்றைய சங்கல்பம் நிறைவு",
    templeSoundsEnabled: "கோவில் ஒலிகள் இயக்கப்பட்டது",
    templeSoundsDisabled: "கோவில் ஒலிகள் நிறுத்தப்பட்டது",
    journalSavedStatus: "இன்றைய ஜர்னல் பதிவு சேமிக்கப்பட்டது.",
    ritualJournalSaved: "சடங்கு ஜர்னல் சேமிக்கப்பட்டது",
    sankalpaSaved: "சங்கல்பம் சேமிக்கப்பட்டது",
    sankalpaAlready: "இன்றைய சங்கல்பம் ஏற்கனவே நிறைவு செய்யப்பட்டுள்ளது",
    blessingCardNotSupported: "ஆசி அட்டை ஆதரிக்கப்படவில்லை",
    blessingCardShared: "ஆசி அட்டை பகிரப்பட்டது",
    generatedOn: "உருவாக்கப்பட்ட நாள்",
    todaysMessage: "இன்றைய செய்தி",
    purpose: "நோக்கம்",
    about: "பற்றி",
    blessingDownloaded: "ஆசி அட்டை பதிவிறக்கப்பட்டது",
    weekdays: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
    rotatingMessages: [
      "ஒருமுகமான ஒரு ஜபம், கவனக்குறைவான பல ஜபங்களை விட வலிமையானது.",
      "ஆழமாக சுவாசியுங்கள், தெளிவாக ஜபியுங்கள், உங்கள் சங்கல்பத்தை நிலையாக வைத்திருங்கள்.",
      "தினமும் 11 ஜபம் தொடர்ந்து செய்வது உள்ளுணர்ச்சி வலிமையை வளர்க்கும்.",
      "நன்றியுடன் தொடங்கி, அமைதியுடன் முடிக்கவும்.",
      "வேகத்தை விட பக்தியுடன் உச்சரிப்பது முக்கியம்."
    ],
    didYouKnowMessages: [
      "பீஜ மந்திரம் என்பது விதை ஒலி — தெய்வத்தின் மைய சக்தியை குறிக்கும் சுருக்கமான அதிர்வு.",
      "பொதுவான பீஜ உதாரணங்கள்: கணேஷருக்கு ஓம் கம், லக்ஷ்மிக்கு ஸ்ரீம், சரஸ்வதிக்கு ஐம்.",
      "பீஜ மந்திரங்கள் சுருக்கமானவை; ஆனால் கவனத்துடன், சரியான உச்சரிப்புடன், நிலையான சுவாசத்துடன் ஜபிக்கப்படுகின்றன.",
      "பலர் முதலில் பிரபல மந்திரத்தை ஜபித்து பின் பீஜ ஜபத்தால் உள்ளார்ந்த கவனத்தை ஆழப்படுத்துகிறார்கள்.",
      "காயத்ரி மந்திரம் புத்தி ஒளிவளத்தை வேண்டுகிறது; பீஜ மந்திரம் சுருக்கமான தெய்வ அதிர்வை வலுப்படுத்துகிறது.",
      "11, 21, 51 அல்லது 108 போன்ற நிலையான எண்ணிக்கை பீஜ ஜபத்தை ஒழுங்காக மாற்றுகிறது."
    ]
  },
  te: {
    languageEnglish: "English",
    languageTamil: "தமிழ்",
    languageTelugu: "తెలుగు",
    languageKannada: "ಕನ್ನಡ",
    languageHindi: "हिंदी",
    searchPlaceholder: "దేవుడు, మంత్రం లేదా అర్థం కోసం వెతకండి...",
    slokaSearchPlaceholder: "దేవుడు, శ్లోకం లేదా ఉద్దేశం ద్వారా వెతకండి...",
    noEntries: "మీ శోధనకు ఎలాంటి నమోదులు కనబడలేదు.",
    entriesShown: "{count} నమోదులు చూపబడుతున్నాయి",
    fullPageView: "ఎంచుకున్న నమోదుకు పూర్తి పేజీ వీక్షణం",
    scriptDevanagari: "లిపి: దేవనాగరి",
    scriptTamil: "లిపి: తమిళం",
    scriptTelugu: "లిపి: తెలుగు",
    scriptKannada: "లిపి: కన్నడ",
    scriptHindi: "లిపి: హిందీ (దేవనాగరి)",
    scriptIast: "లిపి: IAST (లిప్యంతరీకరణ)",
    scriptBoth: "లిపి: దేవనాగరి + తమిళం + IAST",
    typeGod: "దేవుడు",
    typeGuru: "గురు",
    typePlanet: "గ్రహం (నవగ్రహం)",
    addFavorite: "ఇష్టాల్లో చేర్చు",
    removeFavorite: "ఇష్టాల నుండి తొలగించు",
    copySelected: "ఎంచుకున్నదాన్ని కాపీ చేయండి",
    copyAll: "అన్నింటినీ కాపీ చేయండి",
    blessingCard: "ఆశీర్వాద కార్డ్",
    shareCard: "కార్డును పంచుకోండి",
    copied: "{label} కాపీ అయింది",
    copyFailed: "కాపీ విఫలమైంది",
    favoritesAdded: "{name} ఇష్టాల్లో చేరింది",
    favoritesRemoved: "{name} ఇష్టాల నుండి తొలగించబడింది",
    justNow: "ఇప్పుడే",
    recently: "ఇటీవల",
    chants: "జపాలు",
    last: "చివరి",
    today: "ఈ రోజు",
    sankalpa: "సంకల్పం",
    completedToday: "ఈ రోజు పూర్తి",
    currentStreak: "ప్రస్తుత స్ట్రీక్",
    best: "ఉత్తమం",
    days: "రోజు(లు)",
    everyDay: "ప్రతి రోజు",
    reminderActive: "రిమైండర్ సక్రియంగా ఉంది: {day} {time} కు",
    reminderDisabled: "రిమైండర్ నిలిపివేయబడింది.",
    notifUnsupported: "ఈ బ్రౌజర్‌లో నోటిఫికేషన్లు అందుబాటులో లేవు.",
    notifEnabled: "బ్రౌజర్ నోటిఫికేషన్లు ప్రారంభించబడ్డాయి.",
    notifBlocked: "బ్రౌజర్ సెట్టింగుల్లో నోటిఫికేషన్ అనుమతి బ్లాక్ చేయబడింది.",
    notifPending: "నోటిఫికేషన్ అనుమతి ఇంకా ఇవ్వబడలేదు.",
    reminderSaved: "రిమైండర్ సెట్టింగులు సేవ్ అయ్యాయి",
    reminderTitle: "Soulvest Mantras రిమైండర్",
    defaultReminderMessage: "మీ మంత్ర సాధనకు సమయం.",
    mantraUnavailable: "ప్రస్తుతం మంత్ర సూచన అందుబాటులో లేదు.",
    mantraOfDayTitle: "{day} — {name}",
    mantraOfDayText: "{title}: {purpose}",
    aiNoSuggestion: "ప్రస్తుతం వ్యక్తిగత సూచన లేదు.",
    aiChosenReason: "మీరు ఎంచుకున్న దేవుడు ఆధారంగా: {name}.",
    aiWeekdayReason: "వారంలో రోజు సరిపోలిక: {day} రోజున సంప్రదాయంగా {name} అనుకూలం.",
    aiFallbackReason: "మీ ప్రస్తుత ఎంపికను ఉత్తమ సరిపోలికగా ఉపయోగించాం.",
    aiOpened: "సూచించిన మంత్రం తెరచబడింది: {name}",
    light: "తేలిక",
    medium: "మధ్యస్థ",
    deep: "లోతైన",
    moodCalm: "శాంతం",
    moodDevotional: "భక్తి",
    moodFestive: "ఉత్సవ",
    moodActive: "మూడ్ సక్రియం: {mood}.{reason}",
    ambientUnsupported: "ఈ బ్రౌజర్‌లో అంబియెంట్ ఆడియోకు మద్దతు లేదు.",
    ambientAlready: "అంబియెంట్ ఆడియో ఇప్పటికే ప్లే అవుతోంది.",
    ambientPlaying: "తంబూరా శైలిలో అంబియెంట్ ధ్వని ప్లే అవుతోంది.",
    ambientStopped: "అంబియెంట్ ఆడియో ఆగింది.",
    voiceStopped: "వాయిస్ జపం ఆపబడింది.",
    voiceUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ జపం మద్దతు లేదు.",
    voiceSelectFirst: "వాయిస్ జపం ప్లే చేయడానికి ముందుగా ఒక దేవుడిని ఎంచుకోండి.",
    voicePlaying: "{label} వాయిస్ జపం{loop} {intensity} తీవ్రతతో ప్లే అవుతోంది.",
    voiceLoopOn: " లూప్‌లో",
    noPreferenceWeekday: "ప్రాధాన్యం లేదు (వారంలో రోజు ఆధారంగా)",
    meditationComplete: "ధ్యాన సెషన్ పూర్తైంది",
    meditationPickEntry: "ధ్యానం ప్రారంభించడానికి ఒక నమోదు ఎంచుకోండి",
    silenceTimer: "నిశ్శబ్ద టైమర్: {time}",
    meditationTitle: "{name} — సమయబద్ధ నిశ్శబ్ద ధ్యానం",
    meditationNotRunning: "ధ్యాన టైమర్ నడవడం లేదు.",
    malaProgress: "మాలా పురోగతి: {count} / 108",
    countProgress: "లెక్క: {count} / {target} · మొత్తం జపం: {total}",
    ritualGuidance: "పూజా మార్గదర్శకం",
    ritualGuidanceFor: "{name} — పూజా మార్గదర్శకం",
    ritualChoose: "ప్రాయోగిక పూజా మార్గదర్శకం కోసం దేవుడు, గ్రహం లేదా గురువును ఎంచుకోండి.",
    ritualMissing: "ఈ ఎంపికకు పూజా మార్గదర్శకం ఇంకా అందుబాటులో లేదు.",
    slokasShown: "{count} శ్లోకాలు చూపబడుతున్నాయి",
    mantraTypePlanet: "గ్రహం",
    completedChants: "{count} జపాలు పూర్తయ్యాయి",
    sankalpaComplete: "ఈరోజు సంకల్పం పూర్తి అయింది",
    templeSoundsEnabled: "దేవాలయ ధ్వనులు ప్రారంభించబడ్డాయి",
    templeSoundsDisabled: "దేవాలయ ధ్వనులు నిలిపివేయబడ్డాయి",
    journalSavedStatus: "ఈరోజు జర్నల్ నమోదు సేవ్ చేయబడింది.",
    ritualJournalSaved: "పూజా జర్నల్ సేవ్ చేయబడింది",
    sankalpaSaved: "సంకల్పం సేవ్ చేయబడింది",
    sankalpaAlready: "ఈరోజు సంకల్పం ఇప్పటికే పూర్తి అయింది",
    blessingCardNotSupported: "ఆశీర్వాద కార్డ్‌కు మద్దతు లేదు",
    blessingCardShared: "ఆశీర్వాద కార్డ్ పంచబడింది",
    generatedOn: "సృష్టించిన తేదీ",
    todaysMessage: "ఈరోజు సందేశం",
    purpose: "ఉద్దేశ్యం",
    about: "గురించి",
    blessingDownloaded: "ఆశీర్వాద కార్డ్ డౌన్‌లోడ్ అయింది",
    weekdays: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"]
    ,
    rotatingMessages: [
      "ఏకాగ్రతతో చేసిన ఒక్క జపం, దృష్టి చెదిరిన ఎన్నో జపాల కంటే శ్రేష్ఠం.",
      "లోతుగా శ్వాస తీసుకోండి, స్పష్టంగా జపించండి, సంకల్పాన్ని స్థిరంగా ఉంచండి.",
      "ప్రతి రోజు 11 జపాలు క్రమంగా చేస్తే అంతరబలం పెరుగుతుంది.",
      "కృతజ్ఞతతో ప్రారంభించి నిశ్శబ్దంతో ముగించండి.",
      "వేగం కంటే భక్తితో సరైన ఉచ్చారణ ముఖ్యం."
    ],
    didYouKnowMessages: [
      "బీజ మంత్రం అంటే విత్తన ధ్వని — దేవత యొక్క మూలశక్తిని సూచించే సంక్షిప్త నాదం.",
      "సాధారణ బీజ ఉదాహరణలు: గణేశుడికి ఓం గం, లక్ష్మీకి శ్రీం, సరస్వతికి ఐం.",
      "బీజ మంత్రాలు చిన్నవైనా, అవి ఏకాగ్రతతో, సరైన ఉచ్చారణతో, స్థిర శ్వాసతో జపించాలి.",
      "చాలామంది మొదట ప్రసిద్ధ మంత్రంతో ప్రారంభించి, తరువాత బీజ జపంతో అంతర్గత ఏకాగ్రత పెంచుతారు.",
      "గాయత్రి మంత్రాలు బుద్ధి ప్రకాశాన్ని కోరుతాయి; బీజ మంత్రాలు కేంద్రీకృత దైవిక నాదాన్ని బలపరుస్తాయి.",
      "11, 21, 51 లేదా 108 వంటి స్థిర సంఖ్యలు బీజ జపాన్ని క్రమబద్ధం చేస్తాయి."
    ]
  },
  kn: {
    languageEnglish: "English",
    languageTamil: "தமிழ்",
    languageTelugu: "తెలుగు",
    languageKannada: "ಕನ್ನಡ",
    languageHindi: "हिंदी",
    searchPlaceholder: "ದೇವತೆ, ಮಂತ್ರ ಅಥವಾ ಅರ್ಥವನ್ನು ಹುಡುಕಿ...",
    slokaSearchPlaceholder: "ದೇವತೆ, ಶ್ಲೋಕ ಅಥವಾ ಉದ್ದೇಶದಿಂದ ಹುಡುಕಿ...",
    noEntries: "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಯಾವುದೇ ದಾಖಲೆಯಿಲ್ಲ.",
    entriesShown: "{count} ದಾಖಲೆಗಳು ತೋರಿಸಲಾಗುತ್ತಿವೆ",
    fullPageView: "ಆಯ್ದ ದಾಖಲೆಗಾಗಿ ಪೂರ್ಣ ಪುಟ ವೀಕ್ಷಣೆ",
    scriptDevanagari: "ಲಿಪಿ: ದೇವನಾಗರಿ",
    scriptTamil: "ಲಿಪಿ: ತಮಿಳು",
    scriptTelugu: "ಲಿಪಿ: తెలుగు",
    scriptKannada: "ಲಿಪಿ: ಕನ್ನಡ",
    scriptHindi: "ಲಿಪಿ: ಹಿಂದಿ (ದೇವನಾಗರಿ)",
    scriptIast: "ಲಿಪಿ: IAST (ಲಿಪ್ಯಂತರ)",
    scriptBoth: "ಲಿಪಿ: ದೇವನಾಗರಿ + ತಮಿಳು + IAST",
    typeGod: "ದೇವರು",
    typeGuru: "ಗುರು",
    typePlanet: "ಗ್ರಹ (ನವಗ್ರಹ)",
    addFavorite: "ಮೆಚ್ಚಿನಕ್ಕೆ ಸೇರಿಸಿ",
    removeFavorite: "ಮೆಚ್ಚಿನದಿಂದ ತೆಗೆದುಹಾಕಿ",
    copySelected: "ಆಯ್ದುದನ್ನು ನಕಲಿಸಿ",
    copyAll: "ಎಲ್ಲವನ್ನೂ ನಕಲಿಸಿ",
    blessingCard: "ಆಶೀರ್ವಾದ ಕಾರ್ಡ್",
    shareCard: "ಕಾರ್ಡ್ ಹಂಚಿಕೆ",
    copied: "{label} ನಕಲಾಯಿತು",
    copyFailed: "ನಕಲು ವಿಫಲವಾಗಿದೆ",
    favoritesAdded: "{name} ಮೆಚ್ಚಿನಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ",
    favoritesRemoved: "{name} ಮೆಚ್ಚಿನದಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
    justNow: "ಈಗಷ್ಟೇ",
    recently: "ಇತ್ತೀಚೆಗೆ",
    chants: "ಜಪಗಳು",
    last: "ಕೊನೆಯದು",
    today: "ಇಂದು",
    sankalpa: "ಸಂಕಲ್ಪ",
    completedToday: "ಇಂದು ಪೂರ್ಣ",
    currentStreak: "ಪ್ರಸ್ತುತ ಸರಣಿ",
    best: "ಅತ್ಯುತ್ತಮ",
    days: "ದಿನ(ಗಳು)",
    everyDay: "ಪ್ರತಿ ದಿನ",
    reminderActive: "ಜ್ಞಾಪನೆ ಸಕ್ರಿಯ: {day} ರಂದು {time}",
    reminderDisabled: "ಜ್ಞಾಪನೆ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆ.",
    notifUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸೂಚನೆಗಳಿಗೆ ಬೆಂಬಲ ಇಲ್ಲ.",
    notifEnabled: "ಬ್ರೌಸರ್ ಸೂಚನೆಗಳು ಸಕ್ರಿಯವಾಗಿವೆ.",
    notifBlocked: "ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಸೂಚನೆ ಅನುಮತಿ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ.",
    notifPending: "ಸೂಚನೆ ಅನುಮತಿ ಇನ್ನೂ ನೀಡಲಾಗಿಲ್ಲ.",
    reminderSaved: "ಜ್ಞಾಪನೆ ಸೆಟ್ಟಿಂಗ್ಸ್ ಉಳಿಸಲಾಗಿದೆ",
    reminderTitle: "Soulvest Mantras ಜ್ಞಾಪನೆ",
    defaultReminderMessage: "ನಿಮ್ಮ ಮಂತ್ರ ಅಭ್ಯಾಸದ ಸಮಯ.",
    mantraUnavailable: "ಈಗ ಮಂತ್ರ ಸಲಹೆ ಲಭ್ಯವಿಲ್ಲ.",
    mantraOfDayTitle: "{day} — {name}",
    mantraOfDayText: "{title}: {purpose}",
    aiNoSuggestion: "ಈಗ ವೈಯಕ್ತಿಕ ಸಲಹೆ ಲಭ್ಯವಿಲ್ಲ.",
    aiChosenReason: "ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ದೇವತೆ ಆಧಾರದ ಮೇಲೆ: {name}.",
    aiWeekdayReason: "ವಾರದ ದಿನ ಹೊಂದಾಣಿಕೆ: {day} ದಿನ {name} ಪರಂಪರೆಯಿಂದ ಅನುಕೂಲವಾಗಿದೆ.",
    aiFallbackReason: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆಯ್ಕೆಯನ್ನು ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆಯಾಗಿಯಾಗಿ ಬಳಸಲಾಗಿದೆ.",
    aiOpened: "ಸೂಚಿಸಿದ ಮಂತ್ರ ತೆರೆಯಲಾಗಿದೆ: {name}",
    light: "ಲಘು",
    medium: "ಮಧ್ಯಮ",
    deep: "ಆಳವಾದ",
    moodCalm: "ಶಾಂತ",
    moodDevotional: "ಭಕ್ತಿ",
    moodFestive: "ಹಬ್ಬದ",
    moodActive: "ಮೂಡ್ ಸಕ್ರಿಯ: {mood}.{reason}",
    ambientUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಅಂಬಿಯೆಂಟ್ ಆಡಿಯೋ ಬೆಂಬಲಿತವಲ್ಲ.",
    ambientAlready: "ಅಂಬಿಯೆಂಟ್ ಆಡಿಯೋ ಈಗಾಗಲೇ ಪ್ಲೇ ಆಗುತ್ತಿದೆ.",
    ambientPlaying: "ತಂಬೂರಾ ಶೈಲಿಯ ಅಂಬಿಯೆಂಟ್ ಧ್ವನಿ ಪ್ಲೇ ಆಗುತ್ತಿದೆ.",
    ambientStopped: "ಅಂಬಿಯೆಂಟ್ ಆಡಿಯೋ ನಿಂತಿದೆ.",
    voiceStopped: "ವಾಯ್ಸ್ ಜಪ ನಿಲ್ಲಿಸಲಾಗಿದೆ.",
    voiceUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ವಾಯ್ಸ್ ಜಪ ಬೆಂಬಲಿತವಲ್ಲ.",
    voiceSelectFirst: "ವಾಯ್ಸ್ ಜಪವನ್ನು ಪ್ಲೇ ಮಾಡಲು ಮೊದಲು ದೇವತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    voicePlaying: "{label} ವಾಯ್ಸ್ ಜಪ{loop} {intensity} ತೀವ್ರತೆಯಲ್ಲಿ ಪ್ಲೇ ಆಗುತ್ತಿದೆ.",
    voiceLoopOn: " ಲೂಪ್‌ನಲ್ಲಿ",
    noPreferenceWeekday: "ಆಯ್ಕೆ ಇಲ್ಲ (ವಾರದ ದಿನದ ಆಧಾರದಲ್ಲಿ)",
    meditationComplete: "ಧ್ಯಾನ ಸೆಷನ್ ಪೂರ್ಣಗೊಂಡಿದೆ",
    meditationPickEntry: "ಧ್ಯಾನ ಆರಂಭಿಸಲು ಒಂದು ನಮೂದನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    silenceTimer: "ಮೌನ ಟೈಮರ್: {time}",
    meditationTitle: "{name} — ಸಮಯನಿಗದಿತ ಮೌನ ಧ್ಯಾನ",
    meditationNotRunning: "ಧ್ಯಾನ ಟೈಮರ್ ಚಾಲನೆಯಲ್ಲಿಲ್ಲ.",
    malaProgress: "ಮಾಲಾ ಪ್ರಗತಿ: {count} / 108",
    countProgress: "ಎಣಿಕೆ: {count} / {target} · ಒಟ್ಟು ಜಪ: {total}",
    ritualGuidance: "ಆಚಾರ ಮಾರ್ಗದರ್ಶನ",
    ritualGuidanceFor: "{name} — ಆಚಾರ ಮಾರ್ಗದರ್ಶನ",
    ritualChoose: "ಪ್ರಾಯೋಗಿಕ ಆಚಾರ ಮಾರ್ಗದರ್ಶನ ನೋಡಲು ದೇವರು, ಗ್ರಹ ಅಥವಾ ಗುರುವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    ritualMissing: "ಈ ಆಯ್ಕೆಗೆ ಆಚಾರ ಮಾರ್ಗದರ್ಶನ ಇನ್ನೂ ಲಭ್ಯವಿಲ್ಲ.",
    slokasShown: "{count} ಶ್ಲೋಕಗಳು ತೋರಿಸಲಾಗುತ್ತಿವೆ",
    mantraTypePlanet: "ಗ್ರಹ",
    completedChants: "{count} ಜಪಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ",
    sankalpaComplete: "ಇಂದಿನ ಸಂಕಲ್ಪ ಪೂರ್ಣಗೊಂಡಿದೆ",
    templeSoundsEnabled: "ದೇವಾಲಯ ಧ್ವನಿಗಳು ಸಕ್ರಿಯಗೊಂಡಿವೆ",
    templeSoundsDisabled: "ದೇವಾಲಯ ಧ್ವನಿಗಳು ನಿಷ್ಕ್ರಿಯಗೊಂಡಿವೆ",
    journalSavedStatus: "ಇಂದಿನ ಜರ್ನಲ್ ನಮೂದು ಉಳಿಸಲಾಗಿದೆ.",
    ritualJournalSaved: "ಆಚಾರ ಜರ್ನಲ್ ಉಳಿಸಲಾಗಿದೆ",
    sankalpaSaved: "ಸಂಕಲ್ಪ ಉಳಿಸಲಾಗಿದೆ",
    sankalpaAlready: "ಇಂದಿನ ಸಂಕಲ್ಪ ಈಗಾಗಲೇ ಪೂರ್ಣಗೊಂಡಿದೆ",
    blessingCardNotSupported: "ಆಶೀರ್ವಾದ ಕಾರ್ಡ್ ಬೆಂಬಲಿತವಲ್ಲ",
    blessingCardShared: "ಆಶೀರ್ವಾದ ಕಾರ್ಡ್ ಹಂಚಲಾಗಿದೆ",
    generatedOn: "ರಚಿಸಿದ ದಿನಾಂಕ",
    todaysMessage: "ಇಂದಿನ ಸಂದೇಶ",
    purpose: "ಉದ್ದೇಶ",
    about: "ಬಗ್ಗೆ",
    blessingDownloaded: "ಆಶೀರ್ವಾದ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ",
    weekdays: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"]
    ,
    rotatingMessages: [
      "ಏಕಾಗ್ರತೆಯಿಂದ ಮಾಡಿದ ಒಂದು ಜಪ, ಗಮನ ಹರಿದ ಅನೇಕ ಜಪಗಳಿಗಿಂತ ಶಕ್ತಿಯುತ.",
      "ಆಳವಾಗಿ ಉಸಿರಾಡಿ, ಸ್ಪಷ್ಟವಾಗಿ ಜಪಿಸಿ, ಸಂಕಲ್ಪವನ್ನು ಸ್ಥಿರವಾಗಿಡಿ.",
      "ಪ್ರತಿ ದಿನ 11 ಜಪಗಳನ್ನು ನಿರಂತರವಾಗಿ ಮಾಡಿದರೆ ಒಳಬಲ ಹೆಚ್ಚುತ್ತದೆ.",
      "ಕೃತಜ್ಞತೆಯಿಂದ ಆರಂಭಿಸಿ, ಮೌನದಿಂದ ಮುಗಿಸಿ.",
      "ವೇಗಕ್ಕಿಂತ ಭಕ್ತಿಯಿಂದ ಸರಿಯಾದ ಉಚ್ಚಾರಣೆ ಮುಖ್ಯ."
    ],
    didYouKnowMessages: [
      "ಬೀಜ ಮಂತ್ರ ಎಂದರೆ ಬೀಜ ನಾದ — ದೇವರ ಮೂಲಶಕ್ತಿಯನ್ನು ಸೂಚಿಸುವ ಸಂಕ್ಷಿಪ್ತ ಸ್ಪಂದನ.",
      "ಸಾಮಾನ್ಯ ಬೀಜ ಉದಾಹರಣೆಗಳು: ಗಣೇಶನಿಗೆ ಓಂ ಗಂ, ಲಕ್ಷ್ಮಿಗೆ ಶ್ರೀಂ, ಸರಸ್ವತಿಗೆ ಐಂ.",
      "ಬೀಜ ಮಂತ್ರಗಳು ಚಿಕ್ಕದಾದರೂ, ಅವನ್ನು ಏಕಾಗ್ರತೆ, ಸರಿಯಾದ ಉಚ್ಚಾರಣೆ ಮತ್ತು ಸ್ಥಿರ ಉಸಿರಿನಿಂದ ಜಪಿಸಬೇಕು.",
      "ಅನೇಕರು ಮೊದಲು ಪ್ರಸಿದ್ಧ ಮಂತ್ರದಿಂದ ಆರಂಭಿಸಿ, ನಂತರ ಬೀಜ ಜಪದಿಂದ ಒಳಗಿನ ಏಕಾಗ್ರತೆಯನ್ನು ಗಾಢಗೊಳಿಸುತ್ತಾರೆ.",
      "ಗಾಯತ್ರಿ ಮಂತ್ರಗಳು ಬುದ್ಧಿಯ ಪ್ರಕಾಶವನ್ನು ಕೋರುತ್ತವೆ; ಬೀಜ ಮಂತ್ರಗಳು ಕೇಂದ್ರೀಕೃತ ದೈವಿಕ ಸ್ಪಂದನವನ್ನು ಬಲಪಡಿಸುತ್ತವೆ.",
      "11, 21, 51 ಅಥವಾ 108 જેવી ಸ್ಥಿರ ಎಣಿಕೆಗಳು ಬೀಜ ಜಪವನ್ನು ನಿಯಮಿತಗೊಳಿಸುತ್ತವೆ."
    ]
  },
  hi: {
    languageEnglish: "English",
    languageTamil: "தமிழ்",
    languageTelugu: "తెలుగు",
    languageKannada: "ಕನ್ನಡ",
    languageHindi: "हिंदी",
    searchPlaceholder: "देवता, मंत्र या अर्थ खोजें...",
    slokaSearchPlaceholder: "देवता, श्लोक या उद्देश्य से खोजें...",
    noEntries: "आपकी खोज के लिए कोई प्रविष्टि नहीं मिली।",
    entriesShown: "{count} प्रविष्टियाँ दिखाई जा रही हैं",
    fullPageView: "चयनित प्रविष्टि का पूर्ण पेज दृश्य",
    scriptDevanagari: "लिपि: देवनागरी",
    scriptTamil: "लिपि: तमिल",
    scriptTelugu: "लिपि: तेलुगु",
    scriptKannada: "लिपि: कन्नड़",
    scriptHindi: "लिपि: हिंदी (देवनागरी)",
    scriptIast: "लिपि: IAST (लिप्यंतरण)",
    scriptBoth: "लिपि: देवनागरी + तमिल + IAST",
    typeGod: "देवता",
    typeGuru: "गुरु",
    typePlanet: "ग्रह (नवग्रह)",
    addFavorite: "पसंदीदा में जोड़ें",
    removeFavorite: "पसंदीदा से हटाएँ",
    copySelected: "चयनित कॉपी करें",
    copyAll: "सभी कॉपी करें",
    blessingCard: "आशीर्वाद कार्ड",
    shareCard: "कार्ड साझा करें",
    copied: "{label} कॉपी हुआ",
    copyFailed: "कॉपी असफल",
    favoritesAdded: "{name} पसंदीदा में जोड़ा गया",
    favoritesRemoved: "{name} पसंदीदा से हटाया गया",
    justNow: "अभी",
    recently: "हाल ही में",
    chants: "जप",
    last: "पिछला",
    today: "आज",
    sankalpa: "संकल्प",
    completedToday: "आज पूर्ण",
    currentStreak: "वर्तमान क्रम",
    best: "सर्वश्रेष्ठ",
    days: "दिन",
    everyDay: "हर दिन",
    reminderActive: "रिमाइंडर सक्रिय: {day} को {time} बजे",
    reminderDisabled: "रिमाइंडर बंद है।",
    notifUnsupported: "इस ब्राउज़र में सूचनाएँ समर्थित नहीं हैं।",
    notifEnabled: "ब्राउज़र सूचनाएँ सक्षम हैं।",
    notifBlocked: "ब्राउज़र सेटिंग्स में सूचना अनुमति अवरुद्ध है।",
    notifPending: "सूचना अनुमति अभी तक नहीं दी गई है।",
    reminderSaved: "रिमाइंडर सेटिंग्स सहेजी गईं",
    reminderTitle: "Soulvest Mantras रिमाइंडर",
    defaultReminderMessage: "आपके मंत्र अभ्यास का समय है।",
    mantraUnavailable: "अभी कोई मंत्र सुझाव उपलब्ध नहीं है।",
    mantraOfDayTitle: "{day} — {name}",
    mantraOfDayText: "{title}: {purpose}",
    aiNoSuggestion: "अभी कोई व्यक्तिगत सुझाव उपलब्ध नहीं है।",
    aiChosenReason: "आपके चुने हुए देवता के आधार पर: {name}।",
    aiWeekdayReason: "सप्ताह के दिन के अनुसार: {day} को पारंपरिक रूप से {name} उपयुक्त है।",
    aiFallbackReason: "आपकी वर्तमान चयन को सर्वोत्तम मिलान के रूप में उपयोग किया गया।",
    aiOpened: "सुझाया गया मंत्र खोला गया: {name}",
    light: "हल्का",
    medium: "मध्यम",
    deep: "गहरा",
    moodCalm: "शांत",
    moodDevotional: "भक्ति",
    moodFestive: "उत्सवी",
    moodActive: "मूड सक्रिय: {mood}.{reason}",
    ambientUnsupported: "इस ब्राउज़र में एंबियंट ऑडियो समर्थित नहीं है।",
    ambientAlready: "एंबियंट ऑडियो पहले से चल रहा है।",
    ambientPlaying: "तंबूरा शैली का एंबियंट स्वर चल रहा है।",
    ambientStopped: "एंबियंट ऑडियो बंद किया गया।",
    voiceStopped: "वॉइस जप बंद किया गया।",
    voiceUnsupported: "इस ब्राउज़र में वॉइस जप समर्थित नहीं है।",
    voiceSelectFirst: "वॉइस जप चलाने के लिए पहले एक देवता चुनें।",
    voicePlaying: "{label} वॉइस जप{loop} {intensity} तीव्रता पर चल रहा है।",
    voiceLoopOn: " लूप में",
    noPreferenceWeekday: "कोई वरीयता नहीं (सप्ताह के दिन के आधार पर)",
    meditationComplete: "ध्यान सत्र पूरा हुआ",
    meditationPickEntry: "ध्यान शुरू करने के लिए एक प्रविष्टि चुनें",
    silenceTimer: "मौन टाइमर: {time}",
    meditationTitle: "{name} — समयबद्ध मौन ध्यान",
    meditationNotRunning: "ध्यान टाइमर चालू नहीं है।",
    malaProgress: "माला प्रगति: {count} / 108",
    countProgress: "गिनती: {count} / {target} · कुल जप: {total}",
    ritualGuidance: "अनुष्ठान मार्गदर्शन",
    ritualGuidanceFor: "{name} — अनुष्ठान मार्गदर्शन",
    ritualChoose: "व्यावहारिक अनुष्ठान मार्गदर्शन देखने के लिए देवता, ग्रह या गुरु चुनें।",
    ritualMissing: "इस चयन के लिए अभी अनुष्ठान मार्गदर्शन उपलब्ध नहीं है।",
    slokasShown: "{count} श्लोक दिखाए जा रहे हैं",
    mantraTypePlanet: "ग्रह",
    completedChants: "{count} जप पूर्ण",
    sankalpaComplete: "आज का संकल्प पूर्ण",
    templeSoundsEnabled: "मंदिर ध्वनियाँ सक्षम की गईं",
    templeSoundsDisabled: "मंदिर ध्वनियाँ बंद की गईं",
    journalSavedStatus: "आज की जर्नल प्रविष्टि सहेजी गई।",
    ritualJournalSaved: "अनुष्ठान जर्नल सहेजा गया",
    sankalpaSaved: "संकल्प सहेजा गया",
    sankalpaAlready: "आज का संकल्प पहले ही पूरा हो चुका है",
    blessingCardNotSupported: "आशीर्वाद कार्ड समर्थित नहीं है",
    blessingCardShared: "आशीर्वाद कार्ड साझा किया गया",
    generatedOn: "निर्मित तिथि",
    todaysMessage: "आज का संदेश",
    purpose: "उद्देश्य",
    about: "के बारे में",
    blessingDownloaded: "आशीर्वाद कार्ड डाउनलोड किया गया",
    weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    rotatingMessages: [
      "एकाग्र होकर किया गया एक जप, बिखरे ध्यान वाले कई जपों से अधिक प्रभावी होता है।",
      "गहरी साँस लें, स्पष्ट जप करें और अपने संकल्प को स्थिर रखें।",
      "रोज़ 11 जप की निरंतरता समय के साथ भीतर की शक्ति बढ़ाती है।",
      "कृतज्ञता से शुरू करें और गहरे अवशोषण के लिए मौन में समाप्त करें।",
      "गति से अधिक, भक्ति के साथ सही उच्चारण महत्वपूर्ण है।"
    ],
    didYouKnowMessages: [
      "बीज मंत्र का अर्थ है बीज ध्वनि — देवता की मूल ऊर्जा का संक्षिप्त स्पंदन।",
      "सामान्य बीज उदाहरण: गणेश के लिए ॐ गं, लक्ष्मी के लिए श्रीं और सरस्वती के लिए ऐं।",
      "बीज मंत्र छोटे होते हैं, लेकिन उन्हें गहन ध्यान, सही उच्चारण और स्थिर श्वास के साथ जपा जाता है।",
      "अनेक साधक पहले प्रसिद्ध मंत्र से शुरू करते हैं और फिर एकाग्र आंतरिक साधना हेतु बीज जप जारी रखते हैं।",
      "गायत्री मंत्र बुद्धि के प्रकाश का आह्वान करते हैं, जबकि बीज मंत्र केंद्रित दिव्य कंपन पर बल देते हैं।",
      "11, 21, 51 या 108 जैसी निश्चित संख्या बीज मंत्र अभ्यास को अनुशासित बनाती है।"
    ]
  }
};

function t(key, vars = {}) {
  const pack = uiCopy[currentLanguage] || uiCopy.en;
  const fallback = uiCopy.en || {};
  let value = pack[key] ?? fallback[key] ?? key;
  if (typeof value !== "string") {
    return value;
  }
  return value.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? ""));
}

const tamilNameByEntity = {
  "Ganesha": "விநாயகர்",
  "Shiva": "சிவபெருமான்",
  "Vishnu": "விஷ்ணு",
  "Krishna": "கிருஷ்ணர்",
  "Rama": "ராமர்",
  "Ramar": "ராமர்",
  "Hanuman": "ஆஞ்சநேயர்",
  "Durga": "துர்கை அம்மன்",
  "Lakshmi": "லட்சுமி",
  "Saraswati": "சரஸ்வதி",
  "Dhakshinamoorthy": "தட்சிணாமூர்த்தி",
  "Murugan": "முருகன்",
  "Varahi Amman": "வாராகி அம்மன்",
  "Lakshmi Narasimhar": "லட்சுமி நரசிம்மர்",
  "Surya (Sun)": "சூரியன்",
  "Chandra (Moon)": "சந்திரன்",
  "Mangala (Mars)": "செவ்வாய்",
  "Budha (Mercury)": "புதன்",
  "Brihaspati (Jupiter)": "குரு",
  "Shukra (Venus)": "சுக்ரன்",
  "Shani (Saturn)": "சனி",
  "Rahu": "ராகு",
  "Ketu": "கேது",
  "Navagraha (All Planets)": "நவகிரகம்",
  "Shirdi Sai Baba": "ஷிர்டி சாய்பாபா",
  "Raghavendra Swamy": "ராகவேந்திரர்",
  "Adi Shankaracharya": "ஆதி சங்கரர்",
  "Kanchi Sankaracharyar": "காஞ்சி சங்கராச்சார்யார்",
  "Puttaparthi Sai Baba": "புட்டபர்த்தி சாய்பாபா",
  "Yogi Ram Surat Kumar": "யோகி ராம் சுரத்குமார்",
  "Gnanananda Giri": "ஞானானந்த கிரி"
};

const teluguNameByEntity = {
  "Ganesha": "గణేశుడు",
  "Shiva": "శివుడు",
  "Vishnu": "విష్ణువు",
  "Krishna": "కృష్ణుడు",
  "Rama": "రాముడు",
  "Ramar": "రాముడు",
  "Hanuman": "హనుమాన్",
  "Durga": "దుర్గా దేవి",
  "Lakshmi": "లక్ష్మి దేవి",
  "Saraswati": "సరస్వతి దేవి",
  "Dhakshinamoorthy": "దక్షిణామూర్తి",
  "Murugan": "మురుగన్",
  "Varahi Amman": "వరాహి అమ్మవారు",
  "Lakshmi Narasimhar": "లక్ష్మీ నరసింహుడు",
  "Surya (Sun)": "సూర్యుడు",
  "Chandra (Moon)": "చంద్రుడు",
  "Mangala (Mars)": "మంగళుడు",
  "Budha (Mercury)": "బుధుడు",
  "Brihaspati (Jupiter)": "బృహస్పతి",
  "Shukra (Venus)": "శుక్రుడు",
  "Shani (Saturn)": "శని",
  "Rahu": "రాహు",
  "Ketu": "కేతు",
  "Navagraha (All Planets)": "నవగ్రహాలు",
  "Shirdi Sai Baba": "షిర్డీ సాయిబాబా",
  "Raghavendra Swamy": "రాఘవేంద్ర స్వామి",
  "Adi Shankaracharya": "ఆది శంకరాచార్యులు",
  "Kanchi Sankaracharyar": "కాంచీ శంకరాచార్యులు",
  "Puttaparthi Sai Baba": "పుట్టపర్తి సాయిబాబా",
  "Yogi Ram Surat Kumar": "యోగి రామ్ సురత్ కుమార్",
  "Gnanananda Giri": "జ్ఞానానంద గిరి"
};

const kannadaNameByEntity = {
  "Ganesha": "ಗಣೇಶ",
  "Shiva": "ಶಿವ",
  "Vishnu": "ವಿಷ್ಣು",
  "Krishna": "ಕೃಷ್ಣ",
  "Rama": "ರಾಮ",
  "Ramar": "ರಾಮ",
  "Hanuman": "ಹನುಮಾನ್",
  "Durga": "ದುರ್ಗಾ ದೇವಿ",
  "Lakshmi": "ಲಕ್ಷ್ಮೀ ದೇವಿ",
  "Saraswati": "ಸರಸ್ವತಿ ದೇವಿ",
  "Dhakshinamoorthy": "ದಕ್ಷಿಣಾಮೂರ್ತಿ",
  "Murugan": "ಮುರುಗನ್",
  "Varahi Amman": "ವಾರಾಹಿ ಅಮ್ಮ",
  "Lakshmi Narasimhar": "ಲಕ್ಷ್ಮೀ ನರಸಿಂಹ",
  "Surya (Sun)": "ಸೂರ್ಯ",
  "Chandra (Moon)": "ಚಂದ್ರ",
  "Mangala (Mars)": "ಮಂಗಳ",
  "Budha (Mercury)": "ಬುಧ",
  "Brihaspati (Jupiter)": "ಬೃಹಸ್ಪತಿ",
  "Shukra (Venus)": "ಶುಕ್ರ",
  "Shani (Saturn)": "ಶನಿ",
  "Rahu": "ರಾಹು",
  "Ketu": "ಕೇತು",
  "Navagraha (All Planets)": "ನವಗ್ರಹಗಳು",
  "Shirdi Sai Baba": "ಶಿರಡಿ ಸಾಯಿಬಾಬಾ",
  "Raghavendra Swamy": "ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ",
  "Adi Shankaracharya": "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು",
  "Kanchi Sankaracharyar": "ಕಾಂಚಿ ಶಂಕರಾಚಾರ್ಯರು",
  "Puttaparthi Sai Baba": "ಪುಟ್ಟಪರ್ತಿ ಸಾಯಿಬಾಬಾ",
  "Yogi Ram Surat Kumar": "ಯೋಗಿ ರಾಮ್ ಸುರತ್ ಕುಮಾರ್",
  "Gnanananda Giri": "ಜ್ಞಾನಾನಂದ ಗಿರಿ"
};

const hindiNameByEntity = {
  "Ganesha": "गणेश",
  "Shiva": "शिव",
  "Vishnu": "विष्णु",
  "Krishna": "कृष्ण",
  "Rama": "राम",
  "Ramar": "राम",
  "Hanuman": "हनुमान",
  "Durga": "दुर्गा",
  "Lakshmi": "लक्ष्मी",
  "Saraswati": "सरस्वती",
  "Dhakshinamoorthy": "दक्षिणामूर्ति",
  "Murugan": "मुरुगन",
  "Varahi Amman": "वाराही अम्मन",
  "Lakshmi Narasimhar": "लक्ष्मी नरसिंह",
  "Surya (Sun)": "सूर्य",
  "Chandra (Moon)": "चंद्र",
  "Mangala (Mars)": "मंगल",
  "Budha (Mercury)": "बुध",
  "Brihaspati (Jupiter)": "बृहस्पति",
  "Shukra (Venus)": "शुक्र",
  "Shani (Saturn)": "शनि",
  "Rahu": "राहु",
  "Ketu": "केतु",
  "Navagraha (All Planets)": "नवग्रह",
  "Shirdi Sai Baba": "शिरडी साईं बाबा",
  "Raghavendra Swamy": "राघवेंद्र स्वामी",
  "Adi Shankaracharya": "आदि शंकराचार्य",
  "Kanchi Sankaracharyar": "कांची शंकराचार्य",
  "Puttaparthi Sai Baba": "पुट्टपर्थी साईं बाबा",
  "Yogi Ram Surat Kumar": "योगी राम सुरत कुमार",
  "Gnanananda Giri": "ज्ञानानंद गिरी"
};

const tamilBriefByEntity = {
  const malayalamBriefByEntity = {
    "Ganesha": "വിനായക പൂജ തടസ്സങ്ങൾ നീക്കി വിജ്ഞാനവും ശുഭതയും നൽകുന്നു.",
    "Shiva": "ശിവ സ്മരണം അഹങ്കാരമില്ലായ്മ, ധ്യാന ആഴം, ആത്മശാന്തി എന്നിവ വളർത്തുന്നു.",
    "Vishnu": "വിഷ്ണു ആരാധന ജീവിതത്തിൽ സമതുല്യതയും സംരക്ഷണവും ധർമ്മം നിലനിൽക്കലും നൽകുന്നു.",
    "Krishna": "കൃഷ്ണ ഭക്തി ആനന്ദം, കരുണ, ജീവിതബോധം, ബന്ധങ്ങളുടെ സൗഹൃദം എന്നിവ വർദ്ധിപ്പിക്കുന്നു.",
    "Rama": "രാമ സ്മരണം ധർമ്മം, ധൈര്യം, കുടുംബ ഐക്യം, സത്യനിഷ്ഠ എന്നിവ ഉറപ്പാക്കുന്നു.",
    "Ramar": "രാമർ ആരാധന സത്യനിഷ്ഠ, നേതൃപാടവം, ഉത്തരവാദിത്വം എന്നിവ വളർത്തുന്നു.",
    "Hanuman": "ഹനുമാൻ ജപം ഭയം കുറച്ച് മനോവീര്യം, ദേഹശക്തി, ഭക്തി സ്ഥിരത നൽകുന്നു.",
    "Durga": "ദുർഗ്ഗാ അമ്മൻ പൂജ ദോഷങ്ങൾ നീക്കി സംരക്ഷണവും ധൈര്യവും നൽകുന്നു.",
    "Lakshmi": "ലക്ഷ്മി പൂജ സമൃദ്ധി, ഐശ്വര്യം, മനസ്സിന്റെ സമാധാനം, കുടുംബ സൗഭാഗ്യം നൽകുന്നു.",
    "Saraswati": "സരസ്വതി അനുഗ്രഹം വിദ്യാഭ്യാസം, വാചാലത, കലാനയം, ഓർമ്മശക്തി എന്നിവ വർദ്ധിപ്പിക്കുന്നു.",
    "Dhakshinamoorthy": "ദക്ഷിണാമൂർത്തി സ്മരണം വിജ്ഞാനം, മൗനധ്യാനം, ആത്മബോധം ആഴപ്പെടുത്തുന്നു.",
    "Murugan": "മുരുകൻ ആരാധന ധൈര്യം, വിജയം, വിജ്ഞാനദീക്ഷ, ആത്മിക പുരോഗതി എന്നിവ ഉത്തേജിപ്പിക്കുന്നു.",
    "Varahi Amman": "വാരാഹി അമ്മൻ അനുഗ്രഹം സംരക്ഷണവലയം ശക്തിപ്പെടുത്തി ദോഷങ്ങൾ കുറയ്ക്കുന്നു.",
    "Lakshmi Narasimhar": "ലക്ഷ്മി നരസിംഹർ സ്മരണം ഭയം നീക്കി സംരക്ഷണം, ധൈര്യം, മനോസ്ഥിരത നൽകുന്നു."
  };
  "Ganesha": "விநாயகர் வழிபாடு தடைகள் நீங்கி தெளிவான தொடக்கமும் ஞான வளர்ச்சியும் பெற உதவும்.",
  "Shiva": "சிவ ஸ்மரணம் அகம் அமைதி, பற்றின்மை, தியான ஆழம் ஆகியவற்றை வளர்க்கும்.",
  "Vishnu": "விஷ்ணு வழிபாடு வாழ்க்கையில் சமநிலை, பாதுகாப்பு மற்றும் தர்ம நிலைத்தன்மையை வலுப்படுத்தும்.",
  "Krishna": "கிருஷ்ண பக்தி ஆனந்தம், கருணை, வாழ்வறிவு மற்றும் உறவு நயத்தை வளர்க்கும்.",
  "Rama": "ராம நாம ஸ்மரணம் ஒழுக்கம், நேர்மை, துணிவு மற்றும் குடும்ப ஒற்றுமையை உறுதிசெய்யும்.",
  "Ramar": "ராமர் ஸ்மரணம் தர்மநிலை, தலைமை பண்பு, பொறுப்பு உணர்வு ஆகியவற்றை வலுப்படுத்தும்.",
  "Hanuman": "ஆஞ்சநேயர் ஜபம் அச்சம் குறைத்து மனவீரம், உடல் உழைப்பு சக்தி, பக்தி நிலைத்தன்மையை அளிக்கும்.",
  "Durga": "துர்கை அம்மன் அருள் எதிர்மறை சக்திகளை அகற்றி பாதுகாப்பும் தைரியமும் தரும்.",
  "Lakshmi": "லட்சுமி வழிபாடு செழிப்பு, சுபபலன், மன நிறைவு மற்றும் குடும்ப வளத்தை ஈர்க்கும்.",
  "Saraswati": "சரஸ்வதி அருள் கல்வி, பேச்சுத் தெளிவு, கலைநயம் மற்றும் நினைவுத்திறனை மேம்படுத்தும்.",
  "Dhakshinamoorthy": "தட்சிணாமூர்த்தி ஸ்மரணம் ஞானம், மௌன தியானம் மற்றும் ஆத்ம விளக்கத்தை ஆழப்படுத்தும்.",
  "Murugan": "முருகன் வழிபாடு தைரியம், வெற்றி மனப்பாங்கு, ஞான தீட்சை மற்றும் ஆன்மிக முன்னேற்றத்தை ஊக்குவிக்கும்.",
  "Varahi Amman": "வராஹி அம்மன் அருள் பாதுகாப்பு வலயத்தை பலப்படுத்தி எதிர்மறை தாக்கங்களை குறைக்கும்.",
  "Lakshmi Narasimhar": "லட்சுமி நரசிம்மர் ஸ்மரணம் அச்சம் நீங்கி பாதுகாப்பு, துணிவு, மனத் திடப்பை அளிக்கும்."
};

function displayName(name) {
  if (currentLanguage === "ta") return tamilNameByEntity[name] || name;
  if (currentLanguage === "te") return teluguNameByEntity[name] || name;
  if (currentLanguage === "kn") return kannadaNameByEntity[name] || name;
  if (currentLanguage === "hi") return hindiNameByEntity[name] || name;
  return name;
}

function localizedPurpose(item) {
  if (currentLanguage === "te") {
    if (item.type === "planet") return `${displayName(item.name)} కు సంబంధించిన నియమం, మానసిక సమతుల్యం మరియు ఆధ్యాత్మిక పురోగతికి.`;
    if (item.type === "guru") return `${displayName(item.name)} కృపతో జ్ఞానం, స్పష్టత మరియు అంతరశాంతి కోసం.`;
    return `${displayName(item.name)} అనుగ్రహం, రక్షణ మరియు జీవితంలో మేలు కోసం.`;
  }
  if (currentLanguage === "kn") {
    if (item.type === "planet") return `${displayName(item.name)} ಸಂಬಂಧಿತ ಶಿಸ್ತು, ಮನಸ್ಸಿನ ಸಮತೋಲನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಗತಿಗಾಗಿ.`;
    if (item.type === "guru") return `${displayName(item.name)} ಕೃಪೆಯಿಂದ ಜ್ಞಾನ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಒಳಶಾಂತಿಗಾಗಿ.`;
    return `${displayName(item.name)} ಕೃಪೆ, ರಕ್ಷಣೆಯೊಂದಿಗೆ ಜೀವನದಲ್ಲಿ ಮಂಗಳಕ್ಕಾಗಿ.`;
  }
  if (currentLanguage === "hi") {
    if (item.type === "planet") return `${displayName(item.name)} से संबंधित अनुशासन, मानसिक संतुलन और आध्यात्मिक प्रगति के लिए।`;
    if (item.type === "guru") return `${displayName(item.name)} की कृपा से ज्ञान, स्पष्टता और आंतरिक शांति के लिए।`;
    return `${displayName(item.name)} की कृपा, सुरक्षा और जीवन में मंगल के लिए।`;
  }
  if (currentLanguage !== "ta") return item.purpose || "";
  if (item.type === "planet") return `${displayName(item.name)} தொடர்பான ஒழுக்கம், மனநிலை சமநிலை மற்றும் ஆன்மிக முன்னேற்றத்திற்காக.`;
  if (item.type === "guru") return `${displayName(item.name)} அருளால் ஞானம், தெளிவு மற்றும் உள அமைதிக்காக.`;
  return `${displayName(item.name)} அருள், பாதுகாப்பு மற்றும் வாழ்வில் நன்மை பெறுவதற்காக.`;
}

function localizedBrief(item) {
  if (currentLanguage === "ml") {
    if (item.type === "planet") return `${displayName(item.name)} ജപം ജീവിതത്തിൽ ശാസനം, ആത്മവിശ്വാസം, സമതുല്യത എന്നിവ വളർത്തുന്നു.`;
    if (item.type === "guru") return `${displayName(item.name)} സ്മരണ വിനയം, ആത്മിക വ്യക്തത, ഉള്ളിലെ സ്ഥിരത നൽകുന്നു.`;
    if (malayalamBriefByEntity[item.name]) return malayalamBriefByEntity[item.name];
    return `${displayName(item.name)} ആരാധന ഭക്തി, മനോബലം, ഉള്ളിലെ ശാന്തി വർദ്ധിപ്പിക്കുന്നു.`;
  }
  if (currentLanguage === "te") {
    if (item.type === "planet") return `${displayName(item.name)} కు సంబంధించిన జపం జీవనంలో క్రమశిక్షణ, ఆత్మవిశ్వాసం మరియు సమతుల్యాన్ని పెంచడంలో సహాయపడుతుంది.`;
    if (item.type === "guru") return `${displayName(item.name)} స్మరణ ద్వారా వినయం, ఆధ్యాత్మిక స్పష్టత మరియు అంతర్గత స్థిరత్వం లభిస్తాయి.`;
    return `${displayName(item.name)} ఆరాధన భక్తి, మనోబలం మరియు అంతరశాంతిని పెంచుతుంది.`;
  }
  if (currentLanguage === "kn") {
    if (item.type === "planet") return `${displayName(item.name)} ಸಂಬಂಧಿತ ಜಪವು ಜೀವನದಲ್ಲಿ ಶಿಸ್ತು, ಆತ್ಮವಿಶ್ವಾಸ ಮತ್ತು ಸಮತೋಲನವನ್ನು ಬೆಳೆಸಲು ಸಹಕಾರಿಯಾಗುತ್ತದೆ.`;
    if (item.type === "guru") return `${displayName(item.name)} ಸ್ಮರಣೆಯಿಂದ ವಿನಯ, ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಒಳಸ್ಥೈರ್ಯ ದೊರೆಯುತ್ತದೆ.`;
    return `${displayName(item.name)} ಆರಾಧನೆ ಭಕ್ತಿ, ಮನೋಬಲ ಮತ್ತು ಒಳಶಾಂತಿಯನ್ನು ವೃದ್ಧಿಸುತ್ತದೆ.`;
  }
  if (currentLanguage === "hi") {
    if (item.type === "planet") return `${displayName(item.name)} से संबंधित जप जीवन में अनुशासन, आत्मविश्वास और संतुलन बढ़ाने में सहायक होता है।`;
    if (item.type === "guru") return `${displayName(item.name)} के स्मरण से विनम्रता, आध्यात्मिक स्पष्टता और आंतरिक स्थिरता मिलती है।`;
    return `${displayName(item.name)} की उपासना भक्ति, मानसिक शक्ति और आंतरिक शांति को बढ़ाती है।`;
  }
  if (currentLanguage !== "ta") return item.brief || "";
  if (item.type === "planet") return `${displayName(item.name)} தொடர்பான ஜபம் வாழ்க்கையில் ஒழுக்கம், தன்னம்பிக்கை மற்றும் சமநிலையை வளர்க்க உதவும்.`;
  if (item.type === "guru") return `${displayName(item.name)} ஸ்மரணம் மூலம் பணிவு, ஆன்மிக தெளிவு மற்றும் உள்ளார்ந்த நிலைத்தன்மை கிடைக்கும்.`;
  if (tamilBriefByEntity[item.name]) return tamilBriefByEntity[item.name];
  return `${displayName(item.name)} வழிபாடு பக்தி, மனவலிமை மற்றும் உள அமைதியை வளர்க்கும்.`;
}

function localizedMantraTitle(rawTitle = "") {
  if (currentLanguage === "te") {
    return String(rawTitle)
      .replace(/Famous Guru Sloka/gi, "ప్రసిద్ధ గురు శ్లోకం")
      .replace(/Famous Mantra/gi, "ప్రసిద్ధ మంత్రం")
      .replace(/Gayatri Mantra/gi, "గాయత్రి మంత్రం")
      .replace(/Beej Mantra/gi, "బీజ మంత్రం")
      .replace(/Traditional Recitation/gi, "సాంప్రదాయ పారాయణం")
      .replace(/Classical Japa/gi, "సాంప్రదాయ జపం");
  }
  if (currentLanguage === "kn") {
    return String(rawTitle)
      .replace(/Famous Guru Sloka/gi, "ಪ್ರಸಿದ್ಧ ಗುರು ಶ್ಲೋಕ")
      .replace(/Famous Mantra/gi, "ಪ್ರಸಿದ್ಧ ಮಂತ್ರ")
      .replace(/Gayatri Mantra/gi, "ಗಾಯತ್ರಿ ಮಂತ್ರ")
      .replace(/Beej Mantra/gi, "ಬೀಜ ಮಂತ್ರ")
      .replace(/Traditional Recitation/gi, "ಪಾರಂಪರಿಕ ಪಾರಾಯಣ")
      .replace(/Classical Japa/gi, "ಪಾರಂಪರಿಕ ಜಪ");
  }
  if (currentLanguage === "hi") {
    return String(rawTitle)
      .replace(/Famous Guru Sloka/gi, "प्रसिद्ध गुरु श्लोक")
      .replace(/Famous Mantra/gi, "प्रसिद्ध मंत्र")
      .replace(/Gayatri Mantra/gi, "गायत्री मंत्र")
      .replace(/Beej Mantra/gi, "बीज मंत्र")
      .replace(/Traditional Recitation/gi, "पारंपरिक पाठ")
      .replace(/Classical Japa/gi, "पारंपरिक जप");
  }
  if (currentLanguage !== "ta") return rawTitle;
  return String(rawTitle)
    .replace(/Famous Guru Sloka/gi, "பிரபல குரு ஸ்லோகம்")
    .replace(/Famous Mantra/gi, "பிரபல மந்திரம்")
    .replace(/Gayatri Mantra/gi, "காயத்ரி மந்திரம்")
    .replace(/Beej Mantra/gi, "பீஜ மந்திரம்")
    .replace(/Traditional Recitation/gi, "பாரம்பரிய பாராயணம்")
    .replace(/Classical Japa/gi, "பாரம்பரிய ஜபம்");
}

function setSelectOptionText(selectElement, value, label) {
  if (!selectElement) return;
  const option = selectElement.querySelector(`option[value="${value}"]`);
  if (option) {
    option.textContent = label;
  }
}

function isTamilLanguage() {
  return currentLanguage === "ta";
}

function preferredScriptModeForLanguage() {
  if (currentLanguage === "ta") return "tamil";
  if (currentLanguage === "te") return "telugu";
  if (currentLanguage === "kn") return "kannada";
  if (currentLanguage === "ml") return "malayalam";
  if (currentLanguage === "hi") return "hindi";
  if (currentLanguage !== "en") return "devanagari";
  return scriptSelect?.value || "both";
}

function localizedBreathPhase(isInhale) {
  if (currentLanguage === "ta") return isInhale ? "உள்உள் மூச்சு" : "வெளி மூச்சு";
  if (currentLanguage === "te") return isInhale ? "లోపల శ్వాస" : "బయట శ్వాస";
  if (currentLanguage === "kn") return isInhale ? "ಒಳ ಉಸಿರು" : "ಹೊರ ಉಸಿರು";
  if (currentLanguage === "hi") return isInhale ? "श्वास अंदर" : "श्वास बाहर";
  return isInhale ? "Inhale" : "Exhale";
}

function localizedMoodReason(fromEmotion) {
  if (currentLanguage === "ta") return fromEmotion ? "உங்கள் உணர்வு உள்ளீட்டின் அடிப்படையில் சரிசெய்யப்பட்டது." : "தேர்ந்தெடுத்த முறை/நேரத்தின் அடிப்படையில் சரிசெய்யப்பட்டது.";
  if (currentLanguage === "te") return fromEmotion ? "మీ భావోద్వేగ ఇన్‌పుట్ ఆధారంగా సర్దుబాటు చేయబడింది." : "ఎంచుకున్న మోడ్/సమయం ఆధారంగా సర్దుబాటు చేయబడింది.";
  if (currentLanguage === "kn") return fromEmotion ? "ನಿಮ್ಮ ಭಾವನೆ ಇನ್‌ಪುಟ್ ಆಧರಿಸಿ ಹೊಂದಿಸಲಾಗಿದೆ." : "ಆಯ್ದ ಮೋಡ್/ಸಮಯ ಆಧರಿಸಿ ಹೊಂದಿಸಲಾಗಿದೆ.";
  if (currentLanguage === "hi") return fromEmotion ? "आपके भावनात्मक इनपुट के आधार पर समायोजित किया गया।" : "चयनित मोड/समय के आधार पर समायोजित किया गया।";
  return fromEmotion ? "Adjusted from your emotional input." : "Adjusted from selected mode/time.";
}

function localizedFooterText(year) {
  if (currentLanguage === "ta") return `© ${year} Soulvest மந்திரங்கள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`;
  if (currentLanguage === "te") return `© ${year} Soulvest మంత్రాలు. అన్ని హక్కులు పరిరక్షించబడ్డాయి.`;
  if (currentLanguage === "kn") return `© ${year} Soulvest ಮಂತ್ರಗಳು. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.`;
  if (currentLanguage === "hi") return `© ${year} Soulvest मंत्र. सर्वाधिकार सुरक्षित।`;
  return `© ${year} Soulvest Mantras. All rights reserved.`;
}

function localizedMoodValue(mood) {
  if (mood === "calm") return t("moodCalm");
  if (mood === "devotional") return t("moodDevotional");
  if (mood === "festive") return t("moodFestive");
  if (currentLanguage === "ta") return "தானாக";
  if (currentLanguage === "te") return "ఆటో";
  if (currentLanguage === "kn") return "ಸ್ವಯಂ";
  if (currentLanguage === "hi") return "ऑटो";
  return "Auto";
}

function localizedBeejUnavailableText() {
  if (currentLanguage === "ta") return "இந்த தேர்வுக்கு பீஜ மந்திரம் கிடைக்கவில்லை.";
  if (currentLanguage === "te") return "ఈ ఎంపికకు బీజ మంత్రం అందుబాటులో లేదు.";
  if (currentLanguage === "kn") return "ಈ ಆಯ್ಕೆಗೆ ಬೀಜ ಮಂತ್ರ ಲಭ್ಯವಿಲ್ಲ.";
  if (currentLanguage === "hi") return "इस चयन के लिए बीज मंत्र उपलब्ध नहीं है।";
  return "Beej mantra is not available for this selection.";
}

function applyLanguageToStaticUI() {
  document.documentElement.lang = currentLanguage;
  const L = (en, ta, te, kn, hi) => ({ en, ta, te, kn, hi }[currentLanguage] || en);

  if (languageSelect) {
    setSelectOptionText(languageSelect, "en", t("languageEnglish"));
    setSelectOptionText(languageSelect, "ta", t("languageTamil"));
    languageSelect.value = currentLanguage;
  }

  if (languageBarLabel) {
    const labelByLanguage = {
      en: "Choose Language",
      ta: "மொழியைத் தேர்ந்தெடுக்கவும்",
      te: "భాషను ఎంచుకోండి",
      kn: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      hi: "भाषा चुनें"
    };
    languageBarLabel.textContent = labelByLanguage[currentLanguage] || labelByLanguage.en;
  }
  if (langEnglishBtn) {
    langEnglishBtn.textContent = "English";
    langEnglishBtn.classList.toggle("active", currentLanguage === "en");
  }
  if (langTamilBtn) {
    langTamilBtn.textContent = "தமிழ்";
    langTamilBtn.classList.toggle("active", currentLanguage === "ta");
  }
  if (langTeluguBtn) {
    langTeluguBtn.textContent = "తెలుగు";
    langTeluguBtn.classList.toggle("active", currentLanguage === "te");
  }
  if (langKannadaBtn) {
    langKannadaBtn.textContent = "ಕನ್ನಡ";
    langKannadaBtn.classList.toggle("active", currentLanguage === "kn");
  }
  if (langHindiBtn) {
    langHindiBtn.textContent = "हिंदी";
    langHindiBtn.classList.toggle("active", currentLanguage === "hi");
  }

  if (searchInput) {
    searchInput.placeholder = t("searchPlaceholder");
  }
  if (slokaLibrarySearch) {
    slokaLibrarySearch.placeholder = t("slokaSearchPlaceholder");
  }

  setSelectOptionText(typeSelect, "all", L("All", "அனைத்தும்", "అన్నీ", "ಎಲ್ಲಾ", "सभी"));
  setSelectOptionText(typeSelect, "god", L("Gods", "தெய்வங்கள்", "దేవుళ్లు", "ದೇವತೆಗಳು", "देवता"));
  setSelectOptionText(typeSelect, "planet", L("Planets (Navagraha)", "கிரகங்கள் (நவகிரகம்)", "గ్రహాలు (నవగ్రహం)", "ಗ್ರಹಗಳು (ನವಗ್ರಹ)", "ग्रह (नवग्रह)"));
  setSelectOptionText(typeSelect, "guru", L("Gurus", "குருமார்கள்", "గురువులు", "ಗುರುಗಳು", "गुरु"));

  setSelectOptionText(mantraSelect, "famous", L("Famous Mantra / Sloka", "பிரபல மந்திரம் / ஸ்லோகம்", "ప్రసిద్ధ మంత్రం / శ్లోకం", "ಪ್ರಸಿದ್ಧ ಮಂತ್ರ / ಶ್ಲೋಕ", "प्रसिद्ध मंत्र / श्लोक"));
  setSelectOptionText(mantraSelect, "gayatri", L("Gayatri Mantra", "காயத்ரி மந்திரம்", "గాయత్రి మంత్రం", "ಗಾಯತ್ರಿ ಮಂತ್ರ", "गायत्री मंत्र"));
  setSelectOptionText(mantraSelect, "beej", L("Beej Mantra", "பீஜ மந்திரம்", "బీజ మంత్రం", "ಬೀಜ ಮಂತ್ರ", "बीज मंत्र"));

  setSelectOptionText(scriptSelect, "both", isTamilLanguage() ? "தேவநாகரி + தமிழ் + ஒலிபெயர்ப்பு" : "Show Devanagari + Tamil + Transliteration");
  setSelectOptionText(scriptSelect, "devanagari", isTamilLanguage() ? "தேவநாகரி மட்டும்" : "Show Devanagari only");
  setSelectOptionText(scriptSelect, "tamil", isTamilLanguage() ? "தமிழ் மட்டும்" : "Show Tamil only");
  setSelectOptionText(scriptSelect, "iast", isTamilLanguage() ? "ஒலிபெயர்ப்பு மட்டும்" : "Show Transliteration only");
  if (scriptSelect) {
    if (currentLanguage !== "en") {
      scriptSelect.value = preferredScriptModeForLanguage();
      scriptSelect.disabled = true;
      scriptSelect.hidden = true;
    } else {
      scriptSelect.disabled = false;
      scriptSelect.hidden = false;
    }
  }

  if (scriptModeLabel) {
    scriptModeLabel.hidden = currentLanguage !== "en";
  }
  if (chantScriptModeLabel) {
    chantScriptModeLabel.hidden = currentLanguage !== "en";
  }

  setSelectOptionText(reminderDaySelect, "daily", L("Every day", "ஒவ்வொரு நாளும்", "ప్రతి రోజు", "ಪ್ರತಿ ದಿನ", "हर दिन"));
  setSelectOptionText(reminderDaySelect, "0", weekdayLabel(0));
  setSelectOptionText(reminderDaySelect, "1", weekdayLabel(1));
  setSelectOptionText(reminderDaySelect, "2", weekdayLabel(2));
  setSelectOptionText(reminderDaySelect, "3", weekdayLabel(3));
  setSelectOptionText(reminderDaySelect, "4", weekdayLabel(4));
  setSelectOptionText(reminderDaySelect, "5", weekdayLabel(5));
  setSelectOptionText(reminderDaySelect, "6", weekdayLabel(6));

  if (voiceAccentSelect) {
    setSelectOptionText(voiceAccentSelect, "tamil", L("Tamil accent", "தமிழ் குரல்", "తెలుగు/తమిళ స్వరం", "ತಮಿಳು ಉಚ್ಚಾರಣೆ", "तमिल उच्चारण"));
    setSelectOptionText(voiceAccentSelect, "sanskrit", L("Sanskrit accent", "சமஸ்கிருத குரல்", "సంస్కృత స్వరం", "ಸಂಸ್ಕೃತ ಉಚ್ಚಾರಣೆ", "संस्कृत उच्चारण"));
    setSelectOptionText(voiceAccentSelect, "hindi", L("Hindi accent", "ஹிந்தி குரல்", "హిందీ స్వరం", "ಹಿಂದಿ ಉಚ್ಚಾರಣೆ", "हिंदी उच्चारण"));
  }
  if (moodSelect) {
    setSelectOptionText(moodSelect, "auto", L("Auto (time based)", "தானாக (நேர அடிப்படை)", "ఆటో (సమయ ఆధారిత)", "ಸ್ವಯಂ (ಸಮಯ ಆಧಾರಿತ)", "ऑटो (समय आधारित)"));
    setSelectOptionText(moodSelect, "calm", L("Calm", "அமைதி", "శాంతం", "ಶಾಂತ", "शांत"));
    setSelectOptionText(moodSelect, "devotional", L("Devotional", "பக்தி", "భక్తి", "ಭಕ್ತಿ", "भक्ति"));
    setSelectOptionText(moodSelect, "festive", L("Festive", "உற்சவம்", "ఉత్సవ", "ಹಬ್ಬದ", "उत्सवी"));
  }

  const rotatingList = rotatingMessagesForLanguage();
  const knowListItems = didYouKnowMessagesForLanguage();
  if (rotatingMessage && rotatingList.length) {
    rotatingMessage.textContent = rotatingList[new Date().getDay() % rotatingList.length];
  }
  if (didYouKnowMessage && knowListItems.length) {
    didYouKnowMessage.textContent = knowListItems[new Date().getDay() % knowListItems.length];
  }

  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  setText("#homeQuickAccess h3", L("Simplified Home", "எளிய முகப்பு", "సరళ హోమ్", "ಸರಳ ಹೋಮ್", "सरल होम"));
  setText("#homeQuickAccess .meaning", L("Pick your path directly and begin in one tap.", "உங்கள் பாதையை நேரடியாகத் தேர்வு செய்து ஒரே தொடுதலில் தொடங்குங்கள்.", "మీ మార్గాన్ని ఎంచుకుని ఒక్క ట్యాప్‌లో ప్రారంభించండి.", "ನಿಮ್ಮ ಮಾರ್ಗವನ್ನು ಆಯ್ದು ಒಂದು ಟ್ಯಾಪ್‌ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ.", "अपना मार्ग चुनें और एक टैप में शुरू करें।"));
  setText(".hero-kicker", L("Soulvest Sacred Space", "Soulvest புனித இடம்", "Soulvest పవిత్ర స్థలం", "Soulvest ಪವಿತ್ರ ಸ್ಥಳ", "Soulvest पवित्र स्थान"));
  setText(".hero-copy h1", L("Soulvest Mantras", "Soulvest மந்திரங்கள்", "Soulvest మంత్రాలు", "Soulvest ಮಂತ್ರಗಳು", "Soulvest मंत्र"));
  setText(".hero-copy p:not(.hero-kicker)", L("Your sacred library of slokas and chants.", "உங்கள் புனித ஸ்லோக மற்றும் ஜப நூலகம்.", "మీ పవిత్ర శ్లోకాలు మరియు జపాల గ్రంథాలయం.", "ನಿಮ್ಮ ಪವಿತ್ರ ಶ್ಲೋಕ ಮತ್ತು ಜಪಗಳ ಸಂಗ್ರಹ.", "आपकी पवित्र श्लोक और जप लाइब्रेरी।"));
  setText(".welcome-kicker", L("Welcome to your divine chanting space", "உங்கள் தெய்வீக ஜப இடத்திற்கு வரவேற்கிறோம்", "మీ దివ్య జప స్థలానికి స్వాగతం", "ನಿಮ್ಮ ದಿವ್ಯ ಜಪ ಸ್ಥಳಕ್ಕೆ ಸ್ವಾಗತ", "आपके दिव्य जप स्थल में स्वागत है"));
  setText(".welcome-banner h2", L("Start with devotion, continue with discipline, and grow with grace.", "பக்தியுடன் தொடங்கி, ஒழுக்கத்துடன் தொடருங்கள்.", "భక్తితో ప్రారంభించి, నియమంతో కొనసాగండి.", "ಭಕ್ತಿಯಿಂದ ಪ್ರಾರಂಭಿಸಿ, ನಿಯಮದಿಂದ ಮುಂದುವರಿಯಿರಿ.", "भक्ति से शुरू करें, अनुशासन से जारी रखें।"));
  const welcomeDesc = document.querySelector(".welcome-banner h2 + p");
  if (welcomeDesc) welcomeDesc.textContent = L("Choose a deity, planet, or guru and begin your daily practice with focused mantra recitation.", "தெய்வம், கிரகம் அல்லது குருவைத் தேர்வு செய்து தினசரி ஜபப் பயிற்சியை தொடங்குங்கள்.", "దేవుడు, గ్రహం లేదా గురువును ఎంచుకుని దైనందిన సాధన ప్రారంభించండి.", "ದೇವತೆ, ಗ್ರಹ ಅಥವಾ ಗುರುವನ್ನೆ ಆರಿಸಿ ದೈನಂದಿನ ಸಾಧನೆ ಆರಂಭಿಸಿ.", "देवता, ग्रह या गुरु चुनकर दैनिक साधना शुरू करें।");
  setText(".did-you-know-title", L("Do You Know?", "உங்களுக்கு தெரியுமா?", "మీకు తెలుసా?", "ನಿಮಗೆ ಗೊತ್ತೇ?", "क्या आप जानते हैं?"));

  const quickButtons = document.querySelectorAll("#homeQuickAccess .quick-path-btn");
  if (quickButtons[0]) quickButtons[0].textContent = `🧘 ${L("Gurus", "குருமார்கள்", "గురువులు", "ಗುರುಗಳು", "गुरु")}`;
  if (quickButtons[1]) quickButtons[1].textContent = `🛕 ${L("Gods", "தெய்வங்கள்", "దేవుళ్లు", "ದೇವತೆಗಳು", "देवता")}`;
  if (quickButtons[2]) quickButtons[2].textContent = `🪐 ${L("Planets", "கிரகங்கள்", "గ్రహాలు", "ಗ್ರಹಗಳು", "ग्रह")}`;

  setText("#slokaLibrary h3", L("Sloka Library", "ஸ்லோக நூலகம்", "శ్లోక లైబ్రరీ", "ಶ್ಲೋಕ ಲೈಬ್ರರಿ", "श्लोक लाइब्रेरी"));
  const slokaMode = preferredScriptModeForLanguage();
  const slokaModeLabel = slokaMode === "tamil"
    ? "தமிழ்"
    : slokaMode === "telugu"
    ? "తెలుగు"
    : slokaMode === "kannada"
    ? "ಕನ್ನಡ"
    : slokaMode === "hindi"
    ? "हिंदी"
    : slokaMode === "devanagari"
    ? L("Devanagari", "தேவநாகரி", "దేవనాగరి", "ದೇವನಾಗರಿ", "देवनागरी")
    : "Transliteration";
  setText("#slokaLibrary .meaning", L("Browse all curated famous slokas.", "தொகுக்கப்பட்ட பிரபல ஸ்லோகங்களை பார்வையிடுங்கள்.", "క్యూరేట్ చేసిన ప్రసిద్ధ శ్లోకాలను వీక్షించండి.", "ಆಯ್ದ ಪ್ರಸಿದ್ಧ ಶ್ಲೋಕಗಳನ್ನು ನೋಡಿ.", "संकलित प्रसिद्ध श्लोक देखें।"));
  const slokaHeaders = document.querySelectorAll("#slokaLibrary th");
  if (slokaHeaders[0]) slokaHeaders[0].textContent = L("Name", "பெயர்", "పేరు", "ಹೆಸರು", "नाम");
  if (slokaHeaders[1]) slokaHeaders[1].textContent = L("Type", "வகை", "రకం", "ಪ್ರಕಾರ", "प्रकार");
  if (slokaHeaders[2]) slokaHeaders[2].textContent = `${L("Famous Sloka", "பிரபல ஸ்லோகம்", "ప్రసిద్ధ శ్లోకం", "ಪ್ರಸಿದ್ಧ ಶ್ಲೋಕ", "प्रसिद्ध श्लोक")} (${slokaModeLabel})`;
  if (slokaHeaders[3]) slokaHeaders[3].textContent = L("Purpose", "நோக்கம்", "ఉద్దేశం", "ಉದ್ದೇಶ", "उद्देश्य");

  setText("#mantraOfDay h3", L("Mantra of the Day", "இன்றைய மந்திரம்", "నేటి మంత్రం", "ಇಂದಿನ ಮಂತ್ರ", "आज का मंत्र"));
  if (mantraOfDayOpenBtn) mantraOfDayOpenBtn.textContent = L("Open Today’s Mantra", "இன்றைய மந்திரத்தைத் திற", "ఈరోజు మంత్రాన్ని తెరువు", "ಇಂದಿನ ಮಂತ್ರ ತೆರೆಯಿರಿ", "आज का मंत्र खोलें");

  setText("#aiHub h3", L("AI-Powered Enhancements", "AI ஆதரித்த அம்சங்கள்", "AI ఆధారిత మెరుగుదలలు", "AI ಆಧಾರಿತ ವೈಶಿಷ್ಟ್ಯಗಳು", "AI आधारित सुधार"));
  const aiCardTitles = document.querySelectorAll("#aiHub .ai-card .script-mode");
  if (aiCardTitles[0]) aiCardTitles[0].textContent = L("Personalized Mantra Suggestions", "தனிப்பட்ட மந்திர பரிந்துரைகள்", "వ్యక్తిగత మంత్ర సూచనలు", "ವೈಯಕ್ತಿಕ ಮಂತ್ರ ಸೂಚನೆಗಳು", "व्यक्तिगत मंत्र सुझाव");
  if (aiCardTitles[1]) aiCardTitles[1].textContent = L("Voice AI Chant", "குரல் AI ஜபம்", "వాయిస్ AI జపం", "ವಾಯ್ಸ್ AI ಜಪ", "वॉइस AI जप");
  if (aiCardTitles[2]) aiCardTitles[2].textContent = L("Mood-based UI", "மனநிலை UI", "మూడ్ ఆధారిత UI", "ಮೂಡ್ ಆಧಾರಿತ UI", "मूड आधारित UI");
  if (aiSuggestBtn) aiSuggestBtn.textContent = L("Suggest for me", "எனக்காக பரிந்துரைக்க", "నాకు సూచించు", "ನನಗಾಗಿ ಸೂಚಿಸಿ", "मेरे लिए सुझाव दें");
  if (aiApplySuggestionBtn) aiApplySuggestionBtn.textContent = L("Apply suggestion", "பரிந்துரையை பயன்படுத்து", "సూచనను వర్తింపజేయి", "ಸೂಚನೆಯನ್ನು ಅನ್ವಯಿಸಿ", "सुझाव लागू करें");
  if (voicePlayBtn) voicePlayBtn.textContent = L("Play voice chant", "குரல் ஜபம் தொடங்கு", "వాయిస్ జపం ప్రారంభించు", "ವಾಯ್ಸ್ ಜಪ ಆರಂಭಿಸಿ", "वॉइस जप चलाएँ");
  if (voiceStopBtn) voiceStopBtn.textContent = L("Stop voice chant", "குரல் ஜபம் நிறுத்து", "వాయిస్ జపం ఆపు", "ವಾಯ್ಸ್ ಜಪ ನಿಲ್ಲಿಸಿ", "वॉइस जप रोकें");
  if (applyMoodBtn) applyMoodBtn.textContent = L("Apply mood", "மனநிலையை பயன்படுத்து", "మూడ్‌ను వర్తింపజేయి", "ಮೂಡ್ ಅನ್ವಯಿಸಿ", "मूड लागू करें");
  if (ambientPlayBtn) ambientPlayBtn.textContent = L("Play Ambient", "பின்னணி ஒலி தொடங்கு", "అంబియెంట్ ప్రారంభించు", "ಅಂಬಿಯೆಂಟ್ ಚಾಲನೆ ಮಾಡಿ", "एंबियंट चलाएँ");
  if (ambientStopBtn) ambientStopBtn.textContent = L("Stop Ambient", "பின்னணி ஒலி நிறுத்து", "అంబియెంట్ ఆపు", "ಅಂಬಿಯೆಂಟ್ ನಿಲ್ಲಿಸಿ", "एंबियंट रोकें");
  if (emotionInput) emotionInput.placeholder = L("How do you feel? (e.g. calm, stressed, joyful)", "நீங்கள் இப்போது எப்படி உணர்கிறீர்கள்?", "మీరు ఎలా అనుభవిస్తున్నారు? (ఉదా: calm, stressed, joyful)", "ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ? (ಉದಾ: calm, stressed, joyful)", "आप कैसा महसूस कर रहे हैं? (जैसे: calm, stressed, joyful)");

  setText("#personalHub h3", L("Favorites & Chant History", "பிடித்தவை & ஜப வரலாறு", "ఇష్టాలు & జప చరిత్ర", "ಮೆಚ್ಚಿನವುಗಳು & ಜಪ ಇತಿಹಾಸ", "पसंदीदा और जप इतिहास"));
  const personalLabels = document.querySelectorAll("#personalHub .script-mode");
  if (personalLabels[0]) personalLabels[0].textContent = L("Favorites", "பிடித்தவை", "ఇష్టాలు", "ಮೆಚ್ಚಿನವುಗಳು", "पसंदीदा");
  if (personalLabels[1]) personalLabels[1].textContent = L("Chant History", "ஜப வரலாறு", "జప చరిత్ర", "ಜಪ ಇತಿಹಾಸ", "जप इतिहास");
  if (favoritesEmpty) favoritesEmpty.textContent = L("No favorites yet. Use “Add to Favorites” on a mantra card.", "இன்னும் பிடித்தவை இல்லை. மந்திர அட்டையில் “பிடித்ததில் சேர்” ஐ பயன்படுத்துங்கள்.", "ఇంకా ఇష్టాలు లేవు. మంత్ర కార్డ్‌లో “Add to Favorites” ఉపయోగించండి.", "ಇನ್ನೂ ಮೆಚ್ಚಿನವುಗಳಿಲ್ಲ. ಮಂತ್ರ ಕಾರ್ಡ್‌ನಲ್ಲಿ “Add to Favorites” ಬಳಸಿ.", "अभी कोई पसंदीदा नहीं। मंत्र कार्ड पर “Add to Favorites” का उपयोग करें।");
  if (historyEmpty) historyEmpty.textContent = L("No chant history yet. Start chanting to track progress.", "ஜப வரலாறு இல்லை. முன்னேற்றத்தைப் பார்க்க ஜபம் தொடங்குங்கள்.", "ఇంకా జప చరిత్ర లేదు. పురోగతిని ట్రాక్ చేయడానికి జపం ప్రారంభించండి.", "ಇನ್ನೂ ಜಪ ಇತಿಹಾಸ ಇಲ್ಲ. ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಜಪ ಪ್ರಾರಂಭಿಸಿ.", "अभी जप इतिहास नहीं है। प्रगति ट्रैक करने के लिए जप शुरू करें।");

  setText("#sankalpaTracker h3", L("Daily Sankalpa Tracker", "தினசரி சங்கல்ப கண்காணிப்பு", "దైనందిన సంకల్ప ట్రాకర్", "ದೈನಂದಿನ ಸಂಕಲ್ಪ ಟ್ರ್ಯಾಕರ್", "दैनिक संकल्प ट्रैकर"));
  if (sankalpaInput) sankalpaInput.placeholder = L("Set your sankalpa for today...", "இன்றைய சங்கல்பத்தை அமைக்கவும்...", "ఈరోజుకి మీ సంకల్పాన్ని సెట్ చేయండి...", "ಇಂದಿಗೆ ನಿಮ್ಮ ಸಂಕಲ್ಪವನ್ನು ಸೆಟ್ ಮಾಡಿ...", "आज के लिए अपना संकल्प सेट करें...");
  if (sankalpaSaveBtn) sankalpaSaveBtn.textContent = L("Save Sankalpa", "சங்கல்பம் சேமி", "సంకల్పం సేవ్ చేయి", "ಸಂಕಲ್ಪ ಉಳಿಸಿ", "संकल्प सहेजें");
  if (sankalpaCompleteBtn) sankalpaCompleteBtn.textContent = L("Mark Today Complete", "இன்றை நாள் நிறைவு செய்", "ఈరోజు పూర్తయింది అని గుర్తించు", "ಇಂದಿನದನ್ನು ಪೂರ್ಣವಾಗಿದೆ ಎಂದು ಗುರುತುಮಾಡಿ", "आज पूरा हुआ चिह्नित करें");

  setText("#reminderSettings h3", L("Reminder Settings", "நினைவூட்டல் அமைப்புகள்", "రిమైండర్ సెట్టింగులు", "ಜ್ಞಾಪನೆ ಸೆಟ್ಟಿಂಗ್ಗಳು", "रिमाइंडर सेटिंग्स"));
  if (saveReminderBtn) saveReminderBtn.textContent = L("Save Reminder", "நினைவூட்டலை சேமி", "రిమైండర్ సేవ్ చేయి", "ಜ್ಞಾಪನೆ ಉಳಿಸಿ", "रिमाइंडर सहेजें");
  if (reminderMessageInput) reminderMessageInput.placeholder = L("Reminder message", "நினைவூட்டல் செய்தி", "రిమైండర్ సందేశం", "ಜ್ಞಾಪನೆ ಸಂದೇಶ", "रिमाइंडर संदेश");
  const reminderToggleLabel = reminderEnabled?.closest("label");
  if (reminderToggleLabel) reminderToggleLabel.lastChild.textContent = ` ${L("Enable reminder", "நினைவூட்டலை இயக்கவும்", "రిమైండర్ ప్రారంభించు", "ಜ್ಞಾಪನೆ ಸಕ್ರಿಯಗೊಳಿಸಿ", "रिमाइंडर सक्षम करें")}`;

  setText("#chantAssistant h3", L("Chant Mode", "ஜப முறை", "జప మోడ్", "ಜಪ ಮೋಡ್", "जप मोड"));
  if (chantPlusBtn) chantPlusBtn.textContent = L("+1 Chant", "+1 ஜபம்", "+1 జపం", "+1 ಜಪ", "+1 जप");
  if (chantResetBtn) chantResetBtn.textContent = L("Reset", "மீட்டமை", "రీసెట్", "ರೀಸೆಟ್", "रीसेट");
  const chantTargetLabel = document.querySelector('label[for="chantTargetSelect"]');
  if (chantTargetLabel) chantTargetLabel.textContent = L("Target", "இலக்கு", "లక్ష్యం", "ಗುರಿ", "लक्ष्य");
  const sessionSoundLabel = sessionSoundToggle?.closest("label");
  if (sessionSoundLabel) sessionSoundLabel.lastChild.textContent = ` ${L("Temple bell + soft chime", "கோவில் மணி + மென்மையான ஒலி", "దేవాలయ గంట + మృదువైన నాదం", "ದೇವಾಲಯ ಗಂಟೆ + ಮೃದು ನಾದ", "मंदिर घंटी + हल्की ध्वनि")}`;

  setText("#meditationMode h3", L("Meditation Mode", "தியான முறை", "ధ్యాన మోడ్", "ಧ್ಯಾನ ಮೋಡ್", "ध्यान मोड"));
  if (startMeditationBtn) startMeditationBtn.textContent = L("Start", "தொடங்கு", "ప్రారంభించు", "ಪ್ರಾರಂಭಿಸಿ", "शुरू करें");
  if (stopMeditationBtn) stopMeditationBtn.textContent = L("Stop", "நிறுத்து", "ఆపు", "ನಿಲ್ಲಿಸಿ", "रोकें");
  const meditationTimerLabel = document.querySelector('label[for="meditationDurationSelect"]');
  if (meditationTimerLabel) meditationTimerLabel.textContent = L("Timer", "நேரம்", "టైమర్", "ಟೈಮರ್", "टाइमर");

  setText("#youShouldKnow h3", L("You Should Know", "நீங்கள் அறிந்திருக்க வேண்டியது", "మీరు తెలుసుకోవాలి", "ನೀವು ತಿಳಿಯಬೇಕು", "आपको जानना चाहिए"));
  setText("#ritualJournal h3", L("Daily Ritual Journal", "தினசரி சடங்கு ஜர்னல்", "దైనందిన రీతువల్ జర్నల్", "ದೈನಂದಿನ ಆಚರಣೆ ಜರ್ನಲ್", "दैनिक अनुष्ठान जर्नल"));
  if (saveJournalBtn) saveJournalBtn.textContent = L("Save Entry", "பதிவை சேமி", "ఎంట్రీ సేవ్ చేయి", "ಎಂಟ್ರಿ ಉಳಿಸಿ", "प्रविष्टि सहेजें");
  const ritualPromptLabel = document.querySelector('label[for="ritualJournalEntry"]');
  if (ritualPromptLabel) ritualPromptLabel.textContent = L("Today’s prompt", "இன்றைய வழிகாட்டல்", "ఈరోజు సూచన", "ಇಂದಿನ ಸೂಚನೆ", "आज का संकेत");
  if (ritualJournalEntry) ritualJournalEntry.placeholder = L("Today I will chant with...", "இன்று நான் ஜபிப்பது...", "ఈ రోజు నేను జపించేది...", "ಇಂದು ನಾನು ಜಪಿಸುವುದು...", "आज मैं जप करूँगा...");
  const voiceLoopLabel = voiceLoopToggle?.closest("label");
  if (voiceLoopLabel) voiceLoopLabel.lastChild.textContent = ` ${L("Loop chant audio", "ஜப ஒலியை மீண்டும் மீண்டும் இயக்கவும்", "జప ధ్వనిని లూప్‌లో ప్లే చేయి", "ಜಪ ಧ್ವನಿಯನ್ನು ಲೂಪ್‌ನಲ್ಲಿ ಪ್ಲೇ ಮಾಡಿ", "जप ऑडियो को लूप में चलाएँ")}`;
  const minimalVisualLabel = visualModeToggle?.closest("label");
  if (minimalVisualLabel) minimalVisualLabel.lastChild.textContent = ` ${L("Minimal visual mode", "குறைந்த காட்சி முறை", "కనిష్ట దృశ్య మోడ్", "ಕನಿಷ್ಠ ದೃಶ್ಯ ಮೋಡ್", "न्यूनतम दृश्य मोड")}`;

  if (morningThemeBtn) morningThemeBtn.textContent = L("🌅 Morning", "🌅 காலை", "🌅 ఉదయం", "🌅 ಬೆಳಗ್ಗೆ", "🌅 सुबह");
  if (eveningThemeBtn) eveningThemeBtn.textContent = L("🌇 Evening", "🌇 மாலை", "🌇 సాయంత్రం", "🌇 ಸಂಜೆ", "🌇 शाम");
  if (nightThemeBtn) nightThemeBtn.textContent = L("🌙 Night", "🌙 இரவு", "🌙 రాత్రి", "🌙 ರಾತ್ರಿ", "🌙 रात");
  if (autoThemeBtn) autoThemeBtn.textContent = L("🕒 Auto", "🕒 தானாக", "🕒 ఆటో", "🕒 ಸ್ವಯಂ", "🕒 ऑटो");

  if (breathCueText) {
    const isInhale = !breathCueDot?.classList.contains("exhale");
    breathCueText.textContent = localizedBreathPhase(isInhale);
  }

  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    footerText.textContent = localizedFooterText(new Date().getFullYear());
  }

  populateAiDeityOptions();
}

function setLanguage(nextLanguage) {
  const allowed = new Set(["en", "ta", "te", "kn", "hi"]);
  const next = allowed.has(nextLanguage) ? nextLanguage : "en";
  if (next === currentLanguage) return;
  currentLanguage = next;
  applyLanguageToStaticUI();
  renderReminderSettings();
  render();
}

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

function rotatingMessagesForLanguage() {
  return uiCopy[currentLanguage]?.rotatingMessages || uiCopy.en.rotatingMessages;
}

function didYouKnowMessagesForLanguage() {
  return uiCopy[currentLanguage]?.didYouKnowMessages || uiCopy.en.didYouKnowMessages;
}

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

  const independentVowel = { a: "அ", ā: "ஆ", i: "இ", ī: "ஈ", u: "உ", ū: "ஊ", e: "ஏ", ē: "ஏ", o: "ஓ", ō: "ஓ", ai: "ஐ", au: "ஔ", ṛ: "ரு", ṝ: "ரூ" };
  const vowelSign = { a: "", ā: "ா", i: "ி", ī: "ீ", u: "ு", ū: "ூ", e: "ே", ē: "ே", o: "ோ", ō: "ோ", ai: "ை", au: "ௌ", ṛ: "்ரு", ṝ: "்ரூ" };

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
  return iastToTamil(iastText);
}

function iastToBrahmic(text, maps) {
  if (!text) return "";
  const lower = text.toLowerCase();
  const consonants = [
    "kṣ", "jñ", "kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh",
    "ṅ", "ñ", "ṭ", "ḍ", "ṇ", "ś", "ṣ", "ḷ", "ḻ", "ṟ", "k", "g", "c", "j", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "w", "s", "h"
  ];
  const vowels = ["ai", "au", "ā", "ī", "ū", "ē", "ō", "ṛ", "ṝ", "a", "i", "u", "e", "o"];

  const startsWithAny = (source, index, options) => {
    for (const token of options) {
      if (source.startsWith(token, index)) return token;
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
    if (lower.startsWith("oṃ", index) || lower.startsWith("om", index)) {
      result += maps.om;
      index += lower.startsWith("oṃ", index) ? 2 : 2;
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
      result += maps.anusvara;
      index += 1;
      continue;
    }
    if (lower[index] === "ḥ") {
      result += maps.visarga;
      index += 1;
      continue;
    }

    const vowelToken = startsWithAny(lower, index, vowels);
    if (vowelToken) {
      result += maps.independentVowel[vowelToken] || vowelToken;
      index += vowelToken.length;
      continue;
    }

    const consonantToken = startsWithAny(lower, index, consonants);
    if (consonantToken) {
      const base = maps.consonantMap[consonantToken] || consonantToken;
      index += consonantToken.length;
      const nextVowel = startsWithAny(lower, index, vowels);
      if (nextVowel) {
        result += `${base}${maps.vowelSign[nextVowel] || ""}`;
        index += nextVowel.length;
      } else {
        result += `${base}${maps.virama}`;
      }
      continue;
    }

    result += char;
    index += 1;
  }
  return result.replace(/\s+/g, " ").trim();
}

const teluguScriptMaps = {
  om: "ఓం",
  anusvara: "ం",
  visarga: "ః",
  virama: "్",
  consonantMap: {
    kṣ: "క్ష", jñ: "జ్ఞ", kh: "ఖ", gh: "ఘ", ch: "చ", jh: "ఝ", ṭh: "ఠ", ḍh: "ఢ", th: "థ", dh: "ధ", ph: "ఫ", bh: "భ",
    ṅ: "ఙ", ñ: "ఞ", ṭ: "ట", ḍ: "డ", ṇ: "ణ", ś: "శ", ṣ: "ష", ḷ: "ళ", ḻ: "ళ", ṟ: "ర",
    k: "క", g: "గ", c: "చ", j: "జ", t: "త", d: "ద", n: "న", p: "ప", b: "బ", m: "మ", y: "య", r: "ర", l: "ల", v: "వ", w: "వ", s: "స", h: "హ"
  },
  independentVowel: { a: "అ", ā: "ఆ", i: "ఇ", ī: "ఈ", u: "ఉ", ū: "ఊ", e: "ఏ", ē: "ఏ", o: "ఓ", ō: "ఓ", ai: "ఐ", au: "ఔ", ṛ: "ఋ", ṝ: "ౠ" },
  vowelSign: { a: "", ā: "ా", i: "ి", ī: "ీ", u: "ు", ū: "ూ", e: "ే", ē: "ే", o: "ో", ō: "ో", ai: "ై", au: "ౌ", ṛ: "ృ", ṝ: "ౄ" }
};

const kannadaScriptMaps = {
  om: "ಓಂ",
  anusvara: "ಂ",
  visarga: "ಃ",
  virama: "್",
  consonantMap: {
    kṣ: "ಕ್ಷ", jñ: "ಜ್ಞ", kh: "ಖ", gh: "ಘ", ch: "ಚ", jh: "ಝ", ṭh: "ಠ", ḍh: "ಢ", th: "ಥ", dh: "ಧ", ph: "ಫ", bh: "ಭ",
    ṅ: "ಙ", ñ: "ಞ", ṭ: "ಟ", ḍ: "ಡ", ṇ: "ಣ", ś: "ಶ", ṣ: "ಷ", ḷ: "ಳ", ḻ: "ಳ", ṟ: "ರ",
    k: "ಕ", g: "ಗ", c: "ಚ", j: "ಜ", t: "ತ", d: "ದ", n: "ನ", p: "ಪ", b: "ಬ", m: "ಮ", y: "ಯ", r: "ರ", l: "ಲ", v: "ವ", w: "ವ", s: "ಸ", h: "ಹ"
  },
  independentVowel: { a: "ಅ", ā: "ಆ", i: "ಇ", ī: "ಈ", u: "ಉ", ū: "ಊ", e: "ಏ", ē: "ಏ", o: "ಓ", ō: "ಓ", ai: "ಐ", au: "ಔ", ṛ: "ಋ", ṝ: "ೠ" },
  vowelSign: { a: "", ā: "ಾ", i: "ಿ", ī: "ೀ", u: "ು", ū: "ೂ", e: "ೇ", ē: "ೇ", o: "ೋ", ō: "ೋ", ai: "ೈ", au: "ೌ", ṛ: "ೃ", ṝ: "ೄ" }
};

function iastToTelugu(text) {
  return iastToBrahmic(text, teluguScriptMaps);
}

function iastToKannada(text) {
  return iastToBrahmic(text, kannadaScriptMaps);
}

function getLanguageScriptText(item, key, iastText, devanagariText = "") {
  if (currentLanguage === "ta") return getTamilMantraText(item, key, iastText);
  if (currentLanguage === "te") return iastToTelugu(iastText);
  if (currentLanguage === "kn") return iastToKannada(iastText);
  if (currentLanguage === "hi") return devanagariText || iastText;
  return iastText;
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
  const days = t("weekdays");
  return Array.isArray(days) ? (days[index] || t("today")) : t("today");
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
    mantraOfDayText.textContent = t("mantraUnavailable");
    mantraOfDayOpenBtn.disabled = true;
    return;
  }

  mantraOfDayOpenBtn.disabled = false;
  mantraOfDayTitle.textContent = t("mantraOfDayTitle", { day: weekdayLabel(suggestion.dayIndex), name: displayName(suggestion.item.name) });
  mantraOfDayText.textContent = t("mantraOfDayText", { title: localizedMantraTitle(suggestion.item.famousTitle), purpose: localizedPurpose(suggestion.item) });
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
      reason: t("aiChosenReason", { name: displayName(preferredItem.name) }),
    };
  }

  if (weekdayItem) {
    return {
      name: weekdayItem.name,
      reason: t("aiWeekdayReason", { day: weekdayLabel(dayIndex), name: displayName(weekdayItem.name) }),
    };
  }

  const fallback = activeItem() || mantras[0] || null;
  return {
    name: fallback?.name || "",
    reason: t("aiFallbackReason"),
  };
}

function renderAiSuggestion() {
  if (!aiSuggestionText) return;
  const suggestion = recommendationForContext();
  aiCurrentSuggestionName = suggestion.name;
  if (!suggestion.name) {
    aiSuggestionText.textContent = t("aiNoSuggestion");
    return;
  }
  aiSuggestionText.textContent = `${displayName(suggestion.name)} — ${suggestion.reason}`;
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
  showToast(t("aiOpened", { name: displayName(item.name) }));
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
  if (mood === "festive") return { glyph: "🔔", label: t("moodFestive") };
  if (mood === "devotional") return { glyph: "🪔", label: t("moodDevotional") };
  return { glyph: "🕉️", label: t("moodCalm") };
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
  return "evening";
}

function applyTimeTheme(theme = "auto") {
  const resolved = theme === "auto" ? deriveTimeThemeFromClock() : theme;
  const nextTheme = resolved === "night" ? "evening" : resolved;
  document.body.dataset.timeTheme = nextTheme;
}

function intensityLabel(level) {
  if (level <= 1) return t("light");
  if (level >= 3) return t("deep");
  return t("medium");
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
    moodStatus.textContent = t("moodActive", { mood: localizedMoodValue(nextMood), reason });
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
      ambientStatus.textContent = t("ambientUnsupported");
    }
    return;
  }

  if (ambientOscillatorRef && ambientGainRef) {
    if (ambientStatus) {
      ambientStatus.textContent = t("ambientAlready");
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
    ambientStatus.textContent = t("ambientPlaying");
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
    ambientStatus.textContent = t("ambientStopped");
  }
}

function quoteOfTheDay() {
  if (currentLanguage === "ta") {
    const tamilQuotes = [
      "தொடர்ச்சியான ஜபம் மனதை சுத்தப்படுத்தி நோக்கத்தை வலுப்படுத்தும்.",
      "கவனமான ஒரு சுற்று, கவனக்குறைவான பல சுற்றுகளை விட சிறந்தது.",
      "மந்திரத்திற்குப் பின் சிறிய மௌனம் பிரார்த்தனையை உள்ளத்தில் நிலைநிறுத்தும்.",
      "தினசரி சிறிய ஒழுக்கம் ஆழமான ஆன்மிக பலனை தரும்.",
      "மூச்சு, மந்திரம், விழிப்புணர்வு — இவை சேர்ந்து உள்ளமைதியை தரும்.",
      "எளிய சங்கல்பம் ஒவ்வொரு ஜபத்தையும் அர்த்தமுள்ளதாக மாற்றும்.",
      "ஒழுங்கான, அமைதியான, உண்மையான பயிற்சியில் பக்தி வளர்கிறது."
    ];
    return tamilQuotes[new Date().getDay() % tamilQuotes.length];
  }
  if (currentLanguage === "te") {
    const teluguQuotes = [
      "నిరంతర జపం మనసును శుద్ధి చేసి సంకల్పాన్ని బలపరుస్తుంది.",
      "ఏకాగ్రతతో చేసిన ఒక చుట్టు, దృష్టి చెదిరిన అనేక చుట్టుల కంటే మెరుగైనది.",
      "మంత్రం తరువాతి నిశ్శబ్దం ప్రార్థనను అంతరంగంలో నిలబెడుతుంది.",
      "రోజువారీ చిన్న నియమం లోతైన ఆధ్యాత్మిక శక్తిని పెంచుతుంది.",
      "శ్వాస, మంత్రం, అవగాహన కలిసి అంతర సమతుల్యాన్ని సృష్టిస్తాయి.",
      "సరళమైన సంకల్పం ప్రతి జపాన్ని అర్థవంతం చేస్తుంది.",
      "నియమిత, ప్రశాంత, నిజాయితీ సాధనలో భక్తి పెరుగుతుంది."
    ];
    return teluguQuotes[new Date().getDay() % teluguQuotes.length];
  }
  if (currentLanguage === "kn") {
    const kannadaQuotes = [
      "ನಿಯತ ಜಪವು ಮನಸ್ಸನ್ನು ಶುದ್ಧಗೊಳಿಸಿ ಸಂಕಲ್ಪವನ್ನು ಬಲಪಡಿಸುತ್ತದೆ.",
      "ಏಕಾಗ್ರತೆಯ ಒಂದು ಸುತ್ತು, ಗಮನ ತಪ್ಪಿದ ಅನೇಕ ಸುತ್ತಿಗಿಂತ ಉತ್ತಮ.",
      "ಮಂತ್ರದ ನಂತರದ ಮೌನವು ಪ್ರಾರ್ಥನೆಯನ್ನು ಒಳಗೆ ನೆಲಸಿಸುತ್ತದೆ.",
      "ಪ್ರತಿದಿನದ ಸಣ್ಣ ನಿಯಮಿತತೆ ಆಳವಾದ ಆಧ್ಯಾತ್ಮಿಕ ವೇಗವನ್ನು ಕಟ್ಟುತ್ತದೆ.",
      "ಉಸಿರು, ಮಂತ್ರ ಮತ್ತು ಜಾಗೃತಿ ಸೇರಿ ಒಳಸಮತೋಲನವನ್ನು ನಿರ್ಮಿಸುತ್ತವೆ.",
      "ಸರಳ ಸಂಕಲ್ಪವು ಪ್ರತಿಯೊಂದು ಜಪವನ್ನೂ ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.",
      "ನಿಯಮಿತ, ಶಾಂತ ಮತ್ತು ಸತ್ಯಸಂಧ ಅಭ್ಯಾಸದಲ್ಲಿ ಭಕ್ತಿ ವೃದ್ಧಿಸುತ್ತದೆ."
    ];
    return kannadaQuotes[new Date().getDay() % kannadaQuotes.length];
  }
  if (currentLanguage === "hi") {
    const hindiQuotes = [
      "नियमित जप मन को शुद्ध करता है और संकल्प को मजबूत बनाता है।",
      "एकाग्रता से किया गया एक चक्र, बिखरे हुए कई चक्रों से बेहतर है।",
      "मंत्र के बाद का मौन प्रार्थना को भीतर स्थिर करता है।",
      "दैनिक छोटे अनुशासन से गहरी आध्यात्मिक शक्ति बनती है।",
      "श्वास, मंत्र और जागरूकता मिलकर आंतरिक संतुलन रचते हैं।",
      "सरल संकल्प हर जप को अर्थपूर्ण बनाता है।",
      "नियमित, शांत और सच्ची साधना में भक्ति बढ़ती है।"
    ];
    return hindiQuotes[new Date().getDay() % hindiQuotes.length];
  }
  return dailyRitualQuotes[new Date().getDay() % dailyRitualQuotes.length];
}

function journalPromptForItem(item) {
  if (currentLanguage === "ta") {
    if (!item) {
      return "இன்று நான் நிலைத்தன்மையும் நன்றியுணர்வும் கொண்டு ஜபிக்கிறேன்.";
    }
    if (item.type === "planet") {
      return `இன்று ${displayName(item.name)} தொடர்பான ஒழுக்கத்துடன் நிரந்தர எண்ணிக்கையில் அமைதியாக ஜபிக்கிறேன்.`;
    }
    if (item.type === "guru") {
      return `இன்று ${displayName(item.name)} அருளை நினைத்து பணிவுடனும் தெளிவுடனும் ஜபிக்கிறேன்.`;
    }
    return `இன்று ${displayName(item.name)} அருளை வேண்டி பக்தியுடனும் சீரான எண்ணிக்கையுடனும் ஜபிக்கிறேன்.`;
  }
  if (currentLanguage === "te") {
    if (!item) {
      return "ఈ రోజు నేను స్థిరత్వం మరియు కృతజ్ఞతతో జపం చేస్తాను.";
    }
    if (item.type === "planet") {
      return `ఈ రోజు ${displayName(item.name)} అనుబంధ నియమంతో స్థిర సంఖ్యలో ప్రశాంతంగా జపం చేస్తాను.`;
    }
    if (item.type === "guru") {
      return `ఈ రోజు ${displayName(item.name)}ను వినయం, స్పష్టమైన జపం, నిశ్శబ్ద మననంతో స్మరిస్తాను.`;
    }
    return `ఈ రోజు ${displayName(item.name)} అనుగ్రహం కోసం భక్తితో, స్పష్టమైన ఉచ్చారణతో, స్థిర జపసంఖ్యతో సాధన చేస్తాను.`;
  }
  if (currentLanguage === "kn") {
    if (!item) {
      return "ಇಂದು ನಾನು ಸ್ಥಿರತೆ ಮತ್ತು ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ ಜಪ ಮಾಡುತ್ತೇನೆ.";
    }
    if (item.type === "planet") {
      return `ಇಂದು ${displayName(item.name)} ಶಿಸ್ತಿಗೆ ಅನುಗುಣವಾಗಿ ನಿಗದಿತ ಎಣಿಕೆಯಲ್ಲಿ ಶಾಂತವಾಗಿ ಜಪ ಮಾಡುತ್ತೇನೆ.`;
    }
    if (item.type === "guru") {
      return `ಇಂದು ${displayName(item.name)}ರನ್ನು ವಿನಯ, ಸ್ಪಷ್ಟ ಜಪ ಮತ್ತು ಮೌನ ಚಿಂತನೆಯೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ.`;
    }
    return `ಇಂದು ${displayName(item.name)} ಕೃಪೆಗೆ ಭಕ್ತಿಯಿಂದ, ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆ ಮತ್ತು ನಿಗದಿತ ಜಪ ಎಣಿಕೆಯಿಂದ ಸಾಧನೆ ಮಾಡುತ್ತೇನೆ.`;
  }
  if (currentLanguage === "hi") {
    if (!item) {
      return "आज मैं स्थिरता और कृतज्ञता के साथ जप करूँगा।";
    }
    if (item.type === "planet") {
      return `आज मैं ${displayName(item.name)} अनुशासन के अनुसार निश्चित संख्या और शांत श्वास के साथ जप करूँगा।`;
    }
    if (item.type === "guru") {
      return `आज मैं ${displayName(item.name)} का सम्मान विनम्रता, स्पष्ट जप और मौन चिंतन से करूँगा।`;
    }
    return `आज मैं ${displayName(item.name)} का आह्वान भक्ति, स्पष्ट उच्चारण और नियमित जप-संख्या के साथ करूँगा।`;
  }
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
    voiceStatus.textContent = t("voiceStopped");
  }
}

function speakCurrentMantra() {
  if (!("speechSynthesis" in window)) {
    if (voiceStatus) {
      voiceStatus.textContent = t("voiceUnsupported");
    }
    return;
  }

  const text = selectedVoiceText();
  if (!text) {
    if (voiceStatus) {
      voiceStatus.textContent = t("voiceSelectFirst");
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
    voiceStatus.textContent = t("voicePlaying", {
      label,
      loop: voiceLoop ? t("voiceLoopOn") : "",
      intensity: intensityLabel(spiritualIntensity),
    });
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
    showToast(t("meditationComplete"));
  }
}

function startMeditationSession() {
  const item = activeItem();
  if (!item) {
    showToast(t("meditationPickEntry"));
    return;
  }

  stopMeditationSession(false);
  meditationRemainingSec = Number(meditationDurationSelect?.value || 300);
  playSessionStartSound();

  if (meditationTimerText) {
    meditationTimerText.textContent = t("silenceTimer", { time: formatMeditationTime(meditationRemainingSec) });
  }

  meditationTimerId = setInterval(() => {
    meditationRemainingSec -= 1;
    if (meditationTimerText) {
      meditationTimerText.textContent = t("silenceTimer", { time: formatMeditationTime(meditationRemainingSec) });
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
    meditationTitle.textContent = t("meditationTitle", { name: item.name });
    meditationOverlay.textContent = mantra.iast || mantra.devanagari;
    if (!meditationTimerId) {
      meditationTimerText.textContent = t("meditationNotRunning");
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
    const rotatingMessages = rotatingMessagesForLanguage();
    const didYouKnowMessages = didYouKnowMessagesForLanguage();
    rotatingMessage.textContent = rotatingMessages[rotatingIndex % rotatingMessages.length];
    didYouKnowMessage.textContent = didYouKnowMessages[didYouKnowIndex % didYouKnowMessages.length];
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
    const rotatingMessages = rotatingMessagesForLanguage();
    const didYouKnowMessages = didYouKnowMessagesForLanguage();
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
  breathCueText.textContent = localizedBreathPhase(isInhale);
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
  malaProgressText.textContent = t("malaProgress", { count });
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
  const list = rotatingMessagesForLanguage();
  const message = rotatingMessage?.textContent || list[new Date().getDay() % list.length];
  return (message || "").trim();
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
    showToast(t("blessingCardNotSupported"));
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
  context.fillText(t("todaysMessage"), 80, cursorY + 34);

  context.fillStyle = "#625949";
  context.font = "30px 'Segoe UI'";
  cursorY = wrapCanvasText(context, blessingMessageForToday(), 80, cursorY + 84, 920, 42);

  context.fillStyle = "#625949";
  context.font = "28px 'Segoe UI'";
  wrapCanvasText(context, `${t("purpose")}: ${localizedPurpose(item)}`, 80, cursorY + 42, 920, 40);

  context.fillStyle = "#b14d00";
  context.font = "24px 'Segoe UI'";
  context.fillText(`${t("generatedOn")} ${new Date().toLocaleDateString()} · Soulvest Mantras`, 80, 1280);

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
  showToast(t("blessingDownloaded"));
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
    showToast(t("blessingCardShared"));
  } catch (error) {
    const message = String(error?.message || "").toLowerCase();
    if (!message.includes("abort")) {
      await createBlessingCard(item);
    }
  }
}

function typeLabel(value) {
  if (value === "planet") {
    return t("typePlanet");
  }
  if (value === "guru") {
    return t("typeGuru");
  }
  return t("typeGod");
}

function scriptModeText(mode) {
  if (mode === "devanagari") return t("scriptDevanagari");
  if (mode === "tamil") return t("scriptTamil");
  if (mode === "telugu") return t("scriptTelugu");
  if (mode === "kannada") return t("scriptKannada");
  if (mode === "hindi") return t("scriptHindi");
  if (mode === "iast") return t("scriptIast");
  return t("scriptBoth");
}

function effectiveScriptMode() {
  return preferredScriptModeForLanguage();
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
    language: currentLanguage,
  };
  localStorage.setItem(PREF_KEY, JSON.stringify(payload));
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
}

function saveChantHistory() {
  localStorage.setItem(CHANT_HISTORY_KEY, JSON.stringify(chantHistory));
}

function loadPrefs() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (["en", "ta", "te", "kn", "hi"].includes(savedLanguage)) {
      currentLanguage = savedLanguage;
    }

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
    if (["en", "ta", "te", "kn", "hi"].includes(prefs?.language)) {
      currentLanguage = prefs.language;
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
    showToast(t("favoritesRemoved", { name }));
  } else {
    favorites.add(name);
    showToast(t("favoritesAdded", { name }));
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
  if (!isoTime) return t("justNow");
  const date = new Date(isoTime);
  if (Number.isNaN(date.getTime())) return t("recently");
  return date.toLocaleString();
}

function renderPersonalHub() {
  const sortedFavorites = Array.from(favorites).sort((a, b) => a.localeCompare(b));
  favoritesList.innerHTML = sortedFavorites
    .map((name) => `<button type="button" class="pill-btn" data-action="open-favorite" data-name="${name}">${displayName(name)}</button>`)
    .join("");
  favoritesEmpty.classList.toggle("hidden", sortedFavorites.length > 0);

  const historyItems = Object.entries(chantHistory)
    .filter(([, value]) => value && typeof value.total === "number" && value.total > 0)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 8);

  historyList.innerHTML = historyItems
    .map(([name, value]) => `<li><strong>${displayName(name)}</strong>: ${value.total} ${t("chants")} · ${t("last")}: ${formatLastChanted(value.lastChantedAt)}</li>`)
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

function defaultSankalpaText() {
  if (currentLanguage === "ta") return "பக்தியுடனும் தெளிவுடனும் ஜபம் செய்கிறேன்.";
  if (currentLanguage === "te") return "భక్తితో మరియు స్పష్టతతో జపం చేస్తాను.";
  if (currentLanguage === "kn") return "ಭಕ್ತಿ ಮತ್ತು ಸ್ಪಷ್ಟತೆಯೊಂದಿಗೆ ಜಪ ಮಾಡುತ್ತೇನೆ.";
  if (currentLanguage === "hi") return "मैं भक्ति और स्पष्टता के साथ जप करूँगा।";
  return "Chant with devotion and clarity.";
}

function renderSankalpaTracker() {
  if (!sankalpaInput || !sankalpaTargetSelect || !sankalpaSummary || !sankalpaStreak) {
    return;
  }

  resetSankalpaDailyIfNeeded();
  if (!String(sankalpaState.text || "").trim()) {
    sankalpaState.text = defaultSankalpaText();
  }
  sankalpaInput.value = sankalpaState.text || "";
  sankalpaTargetSelect.value = String(sankalpaState.target || 21);

  const completedToday = sankalpaState.lastCompletedDate === todayDateKey();
  sankalpaSummary.textContent = `${t("today")}: ${sankalpaState.dailyCount}/${sankalpaState.target} ${t("chants")} · ${t("sankalpa")}: ${sankalpaState.text}`;
  sankalpaStreak.textContent = completedToday
    ? `${t("completedToday")} · ${t("currentStreak")}: ${sankalpaState.streak} ${t("days")} · ${t("best")}: ${sankalpaState.maxStreak}`
    : `${t("currentStreak")}: ${sankalpaState.streak} ${t("days")} · ${t("best")}: ${sankalpaState.maxStreak}`;
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
  if (dayValue === "daily") return t("everyDay");
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
  reminderMessageInput.value = reminderSettings.message || t("defaultReminderMessage");

  const baseStatus = reminderSettings.enabled
    ? t("reminderActive", { day: reminderDayLabel(reminderSettings.day), time: reminderSettings.time })
    : t("reminderDisabled");

  if (!("Notification" in window)) {
    reminderStatus.textContent = `${baseStatus} ${t("notifUnsupported")}`;
    return;
  }

  if (Notification.permission === "granted") {
    reminderStatus.textContent = `${baseStatus} ${t("notifEnabled")}`;
  } else if (Notification.permission === "denied") {
    reminderStatus.textContent = `${baseStatus} ${t("notifBlocked")}`;
  } else {
    reminderStatus.textContent = `${baseStatus} ${t("notifPending")}`;
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
    `<option value="">${t("noPreferenceWeekday")}</option>`,
    ...mantras
      .filter((item) => item.type === "god")
      .map((item) => `<option value="${item.name}">${displayName(item.name)}</option>`),
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
  const rows = sortByTypePriority(mantras.filter((item) => {
    if (!query) return true;
    const haystack = `${item.name} ${item.type} ${item.famousIast || ""} ${item.purpose || ""}`.toLowerCase();
    return haystack.includes(query);
  }));

  slokaLibraryBody.innerHTML = rows.map((item) => {
    const typeText = item.type === "planet" ? t("mantraTypePlanet") : item.type === "guru" ? t("typeGuru") : t("typeGod");
    const scriptMode = preferredScriptModeForLanguage();
    const slokaText = scriptMode === "tamil"
      ? (() => {
        const tamilText = getTamilMantraText(item, "famous", item.famousIast || "") || item.famousIast || "-";
        const devanagariText = item.famousDevanagari || "";
        if (!devanagariText) return tamilText;
        return `${tamilText}<br><span class=\"script-mode\">${devanagariText}</span>`;
      })()
      : scriptMode === "telugu"
      ? (() => {
        const teluguText = iastToTelugu(item.famousIast || "") || item.famousIast || "-";
        const devanagariText = item.famousDevanagari || "";
        if (!devanagariText) return teluguText;
        return `${teluguText}<br><span class=\"script-mode\">${devanagariText}</span>`;
      })()
      : scriptMode === "kannada"
      ? (() => {
        const kannadaText = iastToKannada(item.famousIast || "") || item.famousIast || "-";
        const devanagariText = item.famousDevanagari || "";
        if (!devanagariText) return kannadaText;
        return `${kannadaText}<br><span class=\"script-mode\">${devanagariText}</span>`;
      })()
      : scriptMode === "malayalam"
      ? (() => {
        const malayalamText = iastToMalayalam ? iastToMalayalam(item.famousIast || "") : item.famousIast || "-";
        const devanagariText = item.famousDevanagari || "";
        if (!devanagariText) return malayalamText;
        return `${malayalamText}<br><span class=\"script-mode\">${devanagariText}</span>`;
      })()
      : scriptMode === "devanagari"
      ? (item.famousDevanagari || item.famousIast || "-")
      : scriptMode === "hindi"
      ? (item.famousDevanagari || item.famousIast || "-")
      : (item.famousIast || "-");
    return `
      <tr>
        <td>${displayName(item.name)}</td>
        <td>${typeText}</td>
        <td>${slokaText}</td>
        <td>${localizedPurpose(item) || "-"}</td>
      </tr>
    `;
  }).join("");

  if (slokaLibraryCount) {
    slokaLibraryCount.textContent = t("slokasShown", { count: rows.length });
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
  const message = (reminderSettings.message || t("defaultReminderMessage")).trim();
  showToast(message);

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(t("reminderTitle"), { body: message });
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
  if (currentLanguage === "ta") {
    if (type === "planet") {
      return [
        "வாரநாளுக்கு ஏற்ப ஒழுங்கான ஜப முறையை பின்பற்றுங்கள்.",
        "நிலையான எண்ணிக்கை மற்றும் சீரான சுவாசத்துடன் ஜபியுங்கள்.",
        "ஒழுக்கமான தினசரி பயிற்சி நீண்டகால பலனை தரும்."
      ];
    }
    if (type === "guru") {
      return [
        "நன்றியுடன் குரு ஸ்மரணம் செய்து தொடங்குங்கள்.",
        "தெளிவான உச்சரிப்பு மற்றும் அமைதியான வேகத்தை பின்பற்றுங்கள்.",
        "ஜபத்தின் முடிவில் சிறிது நேரம் மௌன தியானத்தில் இருங்கள்."
      ];
    }
    return [
      "எளிய சங்கல்பத்துடன் நிரந்தர எண்ணிக்கையில் ஜபத்தைத் தொடங்குங்கள்.",
      "நிமிர்ந்த உட்கார்வு மற்றும் சீரான மூச்சை காக்கவும்.",
      "முடிவில் நன்றியுடன் மௌனமாக சில நொடிகள் இருங்கள்."
    ];
  }
  if (currentLanguage === "te") {
    if (type === "planet") {
      return [
        "వారంలో రోజు సంప్రదాయాన్ని అనుసరించి క్రమబద్ధ సాధన చేయండి.",
        "స్థిర సంఖ్య, స్థిర శ్వాసతో జపం చేయండి.",
        "అనియమిత దీర్ఘ సాధన కంటే నియమిత సాధన మెరుగైనది."
      ];
    }
    if (type === "guru") {
      return [
        "కృతజ్ఞతతో గురు స్మరణతో ప్రారంభించండి.",
        "స్పష్ట ఉచ్చారణతో ప్రశాంత గమనంలో జపించండి.",
        "జపం తర్వాత కాసేపు నిశ్శబ్ద ధ్యానంలో ఉండండి."
      ];
    }
    return [
      "సరళ సంకల్పంతో స్థిర సంఖ్యలో జపం ప్రారంభించండి.",
      "నిటారుగా కూర్చొని శ్వాసను సమంగా ఉంచండి.",
      "చివరలో కృతజ్ఞతతో కొన్ని క్షణాలు మౌనంగా ఉండండి."
    ];
  }
  if (currentLanguage === "kn") {
    if (type === "planet") {
      return [
        "ವಾರದ ದಿನ ಪರಂಪರೆಯಂತೆ ನಿಯಮಿತ ಜಪ ಕ್ರಮ ಪಾಲಿಸಿ.",
        "ನಿಗದಿತ ಎಣಿಕೆ ಮತ್ತು ಸ್ಥಿರ ಉಸಿರಾಟದೊಂದಿಗೆ ಜಪಿಸಿ.",
        "ಅನಿಯಮಿತ ದೀರ್ಘ ಅವಧಿಗಿಂತ ನಿಯಮಿತ ಅಭ್ಯಾಸ ಉತ್ತಮ."
      ];
    }
    if (type === "guru") {
      return [
        "ಕೃತಜ್ಞತೆಯಿಂದ ಗುರುಸ್ಮರಣೆ ಮಾಡಿ ಪ್ರಾರಂಭಿಸಿ.",
        "ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆ ಮತ್ತು ಶಾಂತ ವೇಗದಲ್ಲಿ ಜಪಿಸಿ.",
        "ಜಪದ ಬಳಿಕ ಕ್ಷಣಕಾಲ ಮೌನಧ್ಯಾನದಲ್ಲಿಿರಿ."
      ];
    }
    return [
      "ಸರಳ ಸಂಕಲ್ಪದೊಂದಿಗೆ ನಿಗದಿತ ಎಣಿಕೆಯಲ್ಲಿ ಜಪ ಪ್ರಾರಂಭಿಸಿ.",
      "ನೆಟ್ಟಗೆ ಕುಳಿತು ಉಸಿರಾಟವನ್ನು ಸಮವಾಗಿರಿಸಿ.",
      "ಕೊನೆಯಲ್ಲಿ ಕೃತಜ್ಞತೆಯಿಂದ ಕೆಲವು ಕ್ಷಣ ಮೌನದಲ್ಲಿರಿ."
    ];
  }
  if (currentLanguage === "hi") {
    if (type === "planet") {
      return [
        "सप्ताह-दिन परंपरा के अनुसार नियमित जप करें।",
        "निश्चित संख्या और स्थिर श्वास के साथ जप करें।",
        "अनियमित लंबे सत्रों से बेहतर है नियमित अभ्यास।"
      ];
    }
    if (type === "guru") {
      return [
        "कृतज्ञता के साथ गुरु-स्मरण करके शुरुआत करें।",
        "स्पष्ट उच्चारण और शांत गति में जप करें।",
        "जप के बाद थोड़ी देर मौन ध्यान में बैठें।"
      ];
    }
    return [
      "सरल संकल्प के साथ निश्चित संख्या में जप शुरू करें।",
      "सीधी मुद्रा में बैठकर श्वास स्थिर रखें।",
      "अंत में कृतज्ञता के साथ कुछ क्षण मौन रहें।"
    ];
  }
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
    templeInfoTitle.textContent = t("ritualGuidance");
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = t("ritualChoose");
    return;
  }

  const rituals = currentLanguage === "en"
    ? (ritualGuidanceByName[item.name] || defaultRitualGuidanceByType(item.type))
    : defaultRitualGuidanceByType(item.type);

  templeInfoTitle.textContent = t("ritualGuidanceFor", { name: displayName(item.name) });

  if (!rituals.length) {
    templeList.innerHTML = "";
    templeFallback.classList.remove("hidden");
    templeFallback.textContent = t("ritualMissing");
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

  const basePoints = currentLanguage === "ta"
    ? [
      `நோக்க மையம்: ${localizedPurpose(item)}`,
      `${localizedMantraTitle(item.famousTitle)} மூலம் தொடங்கி, பின்னர் ${localizedMantraTitle(item.gayatriTitle)} மூலம் கவனமான ஜபத்தை தொடருங்கள்.`,
      "வேகத்தை விட சீரான சுவாசத்துடன் தெளிவாக ஜபிப்பது முக்கியம்.",
      "கோவிலில் இருந்தால் எண்ணிக்கையைத் தொடங்கும் முன் சங்கல்பம் செய்யுங்கள்.",
      "தினசரி பயிற்சிக்கு 11/21/51/108 போன்ற நிலையான எண்ணிக்கையை கடைப்பிடிக்கவும்."
    ]
    : currentLanguage === "te"
    ? [
      `ఉద్దేశ్య కేంద్రీకరణ: ${localizedPurpose(item)}`,
      `${localizedMantraTitle(item.famousTitle)} తో ప్రారంభించి, తర్వాత ${localizedMantraTitle(item.gayatriTitle)} తో ఏకాగ్ర జపాన్ని కొనసాగించండి.`,
      "వేగం కంటే స్థిర శ్వాసతో స్పష్టంగా జపించడం ముఖ్యం.",
      "దేవాలయంలో ఉంటే లెక్క మొదలుపెట్టే ముందు సంకల్పం చేయండి.",
      "దైనందిన సాధనకు 11/21/51/108 వంటి స్థిర సంఖ్యను పాటించండి."
    ]
    : currentLanguage === "kn"
    ? [
      `ಉದ್ದೇಶ ಕೇಂದ್ರೀಕರಣ: ${localizedPurpose(item)}`,
      `${localizedMantraTitle(item.famousTitle)} ಮೂಲಕ ಆರಂಭಿಸಿ, ನಂತರ ${localizedMantraTitle(item.gayatriTitle)} ಮೂಲಕ ಏಕಾಗ್ರ ಜಪ ಮುಂದುವರಿಸಿ.`,
      "ವೇಗಕ್ಕಿಂತ ಸ್ಥಿರ ಉಸಿರಾಟದೊಂದಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಜಪಿಸುವುದು ಮುಖ್ಯ.",
      "ದೇವಾಲಯದಲ್ಲಿದ್ದರೆ ಎಣಿಕೆ ಆರಂಭಿಸುವ ಮೊದಲು ಸಂಕಲ್ಪ ಮಾಡಿ.",
      "ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕೆ 11/21/51/108 ಹಾಗಿನ ಸ್ಥಿರ ಎಣಿಕೆಯನ್ನು ಪಾಲಿಸಿ."
    ]
    : currentLanguage === "hi"
    ? [
      `उद्देश्य केंद्र: ${localizedPurpose(item)}`,
      `${localizedMantraTitle(item.famousTitle)} से शुरुआत करें, फिर ${localizedMantraTitle(item.gayatriTitle)} से एकाग्र जप जारी रखें।`,
      "गति से अधिक, स्थिर श्वास के साथ स्पष्ट जप करना महत्वपूर्ण है।",
      "मंदिर में हों तो गिनती शुरू करने से पहले संकल्प करें।",
      "दैनिक अभ्यास के लिए 11/21/51/108 जैसी निश्चित संख्या रखें।"
    ]
    : [
      `Purpose focus: ${localizedPurpose(item)}`,
      `Start with ${item.famousTitle} for quick devotion, then continue with ${item.gayatriTitle} for focused chanting.`,
      "Chant with steady breathing and clear pronunciation rather than speed.",
      "If at temple, complete a sankalpa (intention) before beginning your count.",
      "For daily practice, choose a fixed count (11/21/51/108) and keep consistency."
    ];

  if (item.type === "planet") {
    basePoints.push(
      currentLanguage === "ta"
        ? "கிரக மந்திரங்கள் பொதுவாக அந்த கிரகத்தின் வாரநாளில் ஒழுக்கமாக ஜபிக்கப்படுகின்றன."
        : currentLanguage === "te"
        ? "గ్రహ మంత్రాలు సాధారణంగా ఆ గ్రహానికి అనుకూల వారంలో రోజు నియమంతో జపిస్తారు."
        : currentLanguage === "kn"
        ? "ಗ್ರಹ ಮಂತ್ರಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಆ ಗ್ರಹದ ವಾರದ ದಿನದಲ್ಲಿ ನಿಯಮಿತವಾಗಿ ಜಪಿಸಲಾಗುತ್ತದೆ."
        : currentLanguage === "hi"
        ? "ग्रह मंत्र सामान्यतः संबंधित वार-दिन पर अनुशासित रूप से जपे जाते हैं।"
        : "Planet mantras are often chanted on the graha’s weekday with disciplined routine."
    );
  }

  if (item.type === "guru") {
    basePoints.push(
      currentLanguage === "ta"
        ? "குரு மந்திரங்களுக்கு நன்றியுணர்வுடன், குருவின் உபதேசத்தை நினைத்து ஜபிக்கவும்."
        : currentLanguage === "te"
        ? "గురు మంత్రాలకు కృతజ్ఞతతో, గురువు ఉపదేశాలను స్మరిస్తూ జపించండి."
        : currentLanguage === "kn"
        ? "ಗುರು ಮಂತ್ರಗಳಿಗೆ ಕೃತಜ್ಞತೆಯಿಂದ, ಗುರು ಉಪದೇಶಗಳನ್ನು ಸ್ಮರಿಸಿ ಜಪಿಸಿ."
        : currentLanguage === "hi"
        ? "गुरु मंत्रों में कृतज्ञता के साथ गुरु-उपदेशों का स्मरण करते हुए जप करें।"
        : "For guru mantras, chant with gratitude and remember the guru’s teachings while reciting."
    );
  }

  if (beejMantrasByName[item.name]) {
    basePoints.push(
      currentLanguage === "ta"
        ? "இந்த தெய்வத்திற்கு பீஜ மந்திரம் உள்ளது; குறுகிய ஒருமுக ஜபத்திற்கு பயன்படுத்தலாம்."
        : currentLanguage === "te"
        ? "ఈ దేవతకు బీజ మంత్రం అందుబాటులో ఉంది; సంక్షిప్త ఏకాగ్ర జపానికి ఉపయోగించవచ్చు."
        : currentLanguage === "kn"
        ? "ಈ ದೇವತೆಗೆ ಬೀಜ ಮಂತ್ರ ಲಭ್ಯವಿದೆ; ಚಿಕ್ಕ ಏಕಾಗ್ರ ಜಪಕ್ಕೆ ಬಳಸಬಹುದು."
        : currentLanguage === "hi"
        ? "इस देवता के लिए बीज मंत्र उपलब्ध है; संक्षिप्त एकाग्र जप हेतु उपयोग कर सकते हैं।"
        : "Beej mantra is available for this deity and can be used for short focused japa."
    );
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

function sortByTypePriority(list) {
  const typePriority = { guru: 0, god: 1, planet: 2 };
  return [...list].sort((a, b) => {
    const rankDiff = (typePriority[a.type] ?? 99) - (typePriority[b.type] ?? 99);
    if (rankDiff !== 0) return rankDiff;
    return displayName(a.name).localeCompare(displayName(b.name));
  });
}

function baseList() {
  return sortByTypePriority(byType(mantras));
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
    showToast(t("copied", { label }));
  } catch {
    showToast(t("copyFailed"));
  }
}

function mantraBlock(title, devanagari, iast, mode) {
  const tamil = typeof iast === "object" ? iast.tamil : "";
  const telugu = typeof iast === "object" ? iast.telugu : "";
  const kannada = typeof iast === "object" ? iast.kannada : "";
  const hindi = typeof iast === "object" ? iast.hindi : "";
  const iastText = typeof iast === "object" ? iast.iast : iast;
  const devText = devanagari || iastText;
  const devBlock = (mode === "both" || mode === "devanagari") && devText ? `<p class="mantra devanagari">${devText}</p>` : "";
  const tamilBlock = (mode === "both" || mode === "tamil") && tamil ? `<p class="mantra tamil-text">${tamil}</p>` : "";
  const teluguBlock = mode === "telugu" && telugu ? `<p class="mantra">${telugu}</p>` : "";
  const kannadaBlock = mode === "kannada" && kannada ? `<p class="mantra">${kannada}</p>` : "";
  const hindiBlock = mode === "hindi" && hindi ? `<p class="mantra devanagari">${hindi}</p>` : "";
  const iastBlock = (mode === "both" || mode === "iast") && iastText ? `<p class="mantra">${iastText}</p>` : "";

  return `
    <p class="section-title">${title}</p>
    ${devBlock}
    ${hindiBlock}
    ${iastBlock}
    ${tamilBlock}
    ${teluguBlock}
    ${kannadaBlock}
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
      devanagari = localizedBeejUnavailableText();
      iast = localizedBeejUnavailableText();
    }
  }

  title = localizedMantraTitle(title);

  const tamil = isUnavailableBeej
    ? ""
    : isBeej
    ? getTamilMantraText(item, "beej", iast)
    : isGayatri
    ? getTamilMantraText(item, "gayatri", iast)
    : getTamilMantraText(item, "famous", iast);

  const scriptKey = isBeej ? "beej" : isGayatri ? "gayatri" : "famous";
  const telugu = isUnavailableBeej ? "" : getLanguageScriptText(item, scriptKey, iast, devanagari);
  const kannada = isUnavailableBeej ? "" : iastToKannada(iast);
  const hindi = isUnavailableBeej ? "" : (devanagari || iast);

  const meaning = currentLanguage === "ta"
    ? (isBeej
      ? `பொருள்: ${displayName(item.name)} தொடர்பான பீஜ மந்திரம் ஆழமான உள்ளார்ந்த கவனம் மற்றும் ஜப ஒத்திசைவை உருவாக்குகிறது.`
      : isGayatri
      ? `பொருள்: ${displayName(item.name)} மீது தியானித்து புத்தி ஒளிவளத்தை வேண்டுகின்றோம். இந்த மந்திரம் தெளிவு, வழிகாட்டல் மற்றும் ஆன்மிக நயத்தை வளர்க்க உதவும்.`
      : `பொருள்: இந்த மந்திரம் ${displayName(item.name)} அருளை வேண்டி பக்தி, கவனம் மற்றும் ஆன்மிக இணைப்பை வலுப்படுத்தும்.`)
    : currentLanguage === "te"
    ? (isBeej
      ? (beej
        ? `అర్థం: ${displayName(item.name)} బీజ మంత్రం ఏకాగ్ర జపం మరియు అంతర్గత ధ్యానం కోసం ఉపయుక్తం.`
        : "అర్థం: ఈ ఎంపికకు సాధారణంగా బీజ మంత్రం అందుబాటులో ఉండదు.")
      : isGayatri
      ? `అర్థం: ${displayName(item.name)} పై ధ్యానం చేసి జ్ఞాన ప్రకాశం కోరబడుతుంది. ఈ మంత్రం స్పష్టత, మార్గదర్శనం మరియు అంతర్గత శ్రేయస్సుకు సహాయపడుతుంది.`
      : `అర్థం: ఈ మంత్రం ${displayName(item.name)} అనుగ్రహాన్ని కోరుతూ భక్తి, ఏకాగ్రత మరియు ఆధ్యాత్మిక అనుసంధానాన్ని బలపరుస్తుంది.`)
    : currentLanguage === "kn"
    ? (isBeej
      ? (beej
        ? `ಅರ್ಥ: ${displayName(item.name)} ಬೀಜ ಮಂತ್ರವು ಏಕಾಗ್ರ ಜಪ ಮತ್ತು ಒಳಧ್ಯಾನಕ್ಕೆ ಸಹಾಯಕ.`
        : "ಅರ್ಥ: ಈ ಆಯ್ಕೆಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಬೀಜ ಮಂತ್ರ ಲಭ್ಯವಿರುವುದಿಲ್ಲ.")
      : isGayatri
      ? `ಅರ್ಥ: ${displayName(item.name)} ಮೇಲೆ ಧ್ಯಾನಿಸಿ ಜ್ಞಾನಪ್ರಕಾಶವನ್ನು ಕೋರುತ್ತೇವೆ. ಈ ಮಂತ್ರ ಸ್ಪಷ್ಟತೆ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಆಂತರಿಕ ಶ್ರೇಯಸ್ಸಿಗೆ ಸಹಾಯಕ.`
      : `ಅರ್ಥ: ಈ ಮಂತ್ರವು ${displayName(item.name)} ಕೃಪೆಯನ್ನು ಕೋರಿ ಭಕ್ತಿ, ಏಕಾಗ್ರತೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಂಪರ್ಕವನ್ನು ಬಲಪಡಿಸುತ್ತದೆ.`)
    : currentLanguage === "hi"
    ? (isBeej
      ? (beej
        ? `अर्थ: ${displayName(item.name)} का बीज मंत्र एकाग्र जप और आंतरिक ध्यान के लिए उपयोगी है।`
        : "अर्थ: इस चयन के लिए सामान्यतः बीज मंत्र उपलब्ध नहीं होता।")
      : isGayatri
      ? `अर्थ: ${displayName(item.name)} पर ध्यान करके बुद्धि के प्रकाश की प्रार्थना की जाती है। यह मंत्र स्पष्टता, मार्गदर्शन और आंतरिक संतुलन में सहायक है।`
      : `अर्थ: यह मंत्र ${displayName(item.name)} की कृपा के लिए जपा जाता है और भक्ति, एकाग्रता तथा आध्यात्मिक जुड़ाव को मजबूत करता है।`)
    : isBeej
    ? (beej
      ? `Meaning: Beej mantra of ${item.name} carries the seed vibration used for concentrated japa and inner focus.`
      : "Meaning: Beej mantra is not typically assigned for this selection.")
    : isGayatri
    ? `Meaning: We meditate on ${item.name} and seek illumination of the intellect. This mantra is used for clarity, guidance, and inner refinement aligned with ${item.purpose.toLowerCase()}`
    : `Meaning: This ${item.famousTitle.toLowerCase()} invokes ${item.name} for ${item.purpose.toLowerCase()}. It is commonly chanted for devotion, focus, and spiritual connection.`;

  const usage = currentLanguage === "ta"
    ? (isBeej
      ? (beej
        ? "பயன்பாடு: நிலையான எண்ணிக்கையில் சீரான சுவாசத்துடன் மனதை ஒருமுகப்படுத்தி ஜபிக்கவும்."
        : "பயன்பாடு: இந்த பதிவிற்கு பிரபல அல்லது காயத்ரி மந்திரத்தை தேர்வு செய்யவும்.")
      : isGayatri
      ? "பயன்பாடு: காலை/மாலை நேரங்களில் சரியான உச்சரிப்பு மற்றும் அமைதியான சுவாசத்துடன் ஜபிக்கலாம்."
      : "பயன்பாடு: தினசரி பூஜை, முக்கிய செயல்களுக்கு முன், அல்லது மனஅமைதி மற்றும் அருள் வேண்டி ஜபிக்கலாம்.")
    : currentLanguage === "te"
    ? (isBeej
      ? (beej
        ? "వినియోగం: స్థిర సంఖ్యతో, స్థిర శ్వాసతో ఏకాగ్రంగా జపించండి."
        : "వినియోగం: ఈ నమోదుకు ప్రసిద్ధ లేదా గాయత్రి మంత్రాన్ని ఎంచుకోండి.")
      : isGayatri
      ? "వినియోగం: సాధారణంగా ఉదయం/సాయంత్రం సరైన ఉచ్చారణతో, ప్రశాంత శ్వాసతో జపిస్తారు."
      : "వినియోగం: రోజువారి పూజలో, ముఖ్య పనుల ముందు, లేదా శాంతి మరియు కృప కోసం జపించండి.")
    : currentLanguage === "kn"
    ? (isBeej
      ? (beej
        ? "ಬಳಕೆ: ಸ್ಥಿರ ಎಣಿಕೆಯಲ್ಲಿ, ಸಮ ಉಸಿರಾಟದೊಂದಿಗೆ ಏಕಾಗ್ರವಾಗಿ ಜಪಿಸಿ."
        : "ಬಳಕೆ: ಈ ನಮೂದಿಗೆ ಪ್ರಸಿದ್ಧ ಅಥವಾ ಗಾಯತ್ರಿ ಮಂತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.")
      : isGayatri
      ? "ಬಳಕೆ: ಸಾಮಾನ್ಯವಾಗಿ ಬೆಳಗ್ಗೆ/ಸಂಜೆ ಸರಿಯಾದ ಉಚ್ಚಾರಣೆ ಮತ್ತು ಶಾಂತ ಉಸಿರಾಟದೊಂದಿಗೆ ಜಪಿಸಲಾಗುತ್ತದೆ."
      : "ಬಳಕೆ: ದೈನಂದಿನ ಪೂಜೆ, ಪ್ರಮುಖ ಕಾರ್ಯಗಳ ಮೊದಲು, ಅಥವಾ ಶಾಂತಿ ಮತ್ತು ಕೃಪೆಗಾಗಿ ಜಪಿಸಬಹುದು.")
    : currentLanguage === "hi"
    ? (isBeej
      ? (beej
        ? "उपयोग: निश्चित संख्या के साथ, स्थिर श्वास रखते हुए एकाग्रता से जप करें।"
        : "उपयोग: इस प्रविष्टि के लिए प्रसिद्ध या गायत्री मंत्र चुनें।")
      : isGayatri
      ? "उपयोग: प्रायः सुबह/शाम सही उच्चारण और शांत श्वास के साथ जपा जाता है।"
      : "उपयोग: दैनिक पूजा में, महत्वपूर्ण कार्यों से पहले, या शांति और कृपा की कामना से जप करें।")
    : isBeej
    ? (beej
      ? "Usage: Chant with care using a fixed count and focused breathing for subtle inner alignment."
      : "Usage: Select Famous or Gayatri mantra for this entry.")
    : isGayatri
    ? "Usage: Traditionally chanted with focus on correct pronunciation and calm breathing, often during morning/evening prayer or meditation."
    : "Usage: Can be chanted during daily puja, before starting important tasks, or when seeking strength, peace, and blessings.";

  const famousCountLabel = !isGayatri && !isBeej
    ? currentLanguage === "ta"
      ? ` · ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))}/${Math.max(famousVariants.length, 1)} தொகுக்கப்பட்ட பிரபல/பாரம்பரிய மந்திரங்கள் (${displayName(item.name)}).`
      : currentLanguage === "te"
      ? ` · ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))}/${Math.max(famousVariants.length, 1)} క్యూరేట్ చేసిన ప్రసిద్ధ/సాంప్రదాయ మంత్రాలు (${displayName(item.name)}).`
      : currentLanguage === "kn"
      ? ` · ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))}/${Math.max(famousVariants.length, 1)} ಆಯ್ದ ಪ್ರಸಿದ್ಧ/ಪಾರಂಪರಿಕ ಮಂತ್ರಗಳು (${displayName(item.name)}).`
      : currentLanguage === "hi"
      ? ` · ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))}/${Math.max(famousVariants.length, 1)} संकलित प्रसिद्ध/पारंपरिक मंत्र (${displayName(item.name)}).`
      : ` · Showing ${Math.min((famousSelection.index || 0) + 1, Math.max(famousSelection.total || 1, 1))} of ${Math.max(famousVariants.length, 1)} curated famous/traditional chants for ${item.name}.`
    : "";

  return { title, devanagari, iast, tamil, telugu, kannada, hindi, meaning, usage: `${usage}${famousCountLabel}`, isEnglishOnlyFallback: isUnavailableBeej };
}

function renderChantAssistant(item) {
  if (!item || experienceMode !== "chant") {
    chantAssistant.classList.add("hidden");
    stopBreathCue();
    return;
  }

  const mantra = selectedMantraData(item);
  const mode = effectiveScriptMode();

  chantAssistant.classList.remove("hidden");
  chantTitle.textContent = `${displayName(item.name)} — ${mantra.title}`;
  chantScriptModeLabel.textContent = scriptModeText(mode);
  chantTextDevanagari.textContent = (mode === "both" || mode === "devanagari") ? (mantra.devanagari || mantra.iast) : "";
  chantTextTamil.textContent = (mode === "both" || mode === "tamil") ? (mantra.isEnglishOnlyFallback ? "" : mantra.tamil) : "";
  const chantMainScript = mode === "telugu"
    ? mantra.telugu
    : mode === "kannada"
    ? mantra.kannada
    : mode === "hindi"
    ? mantra.hindi
    : mantra.iast;
  chantTextIast.textContent = (mode === "both" || mode === "iast" || mode === "telugu" || mode === "kannada" || mode === "hindi") ? chantMainScript : "";
  const totalForEntity = Number(chantHistory[item.name]?.total || 0);
  chantProgress.textContent = t("countProgress", { count: chantCount, target: chantTarget, total: totalForEntity });
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
  mantraInfoTitle.textContent = `${displayName(item.name)} — ${mantra.title}`;

  const mode = effectiveScriptMode();
  scriptModeLabel.textContent = scriptModeText(mode);
  mantraInfoTextDevanagari.textContent = (mode === "both" || mode === "devanagari") ? (mantra.devanagari || mantra.iast) : "";
  mantraInfoTextTamil.textContent = (mode === "both" || mode === "tamil") ? (mantra.isEnglishOnlyFallback ? "" : mantra.tamil) : "";
  const infoMainScript = mode === "telugu"
    ? mantra.telugu
    : mode === "kannada"
    ? mantra.kannada
    : mode === "hindi"
    ? mantra.hindi
    : mantra.iast;
  mantraInfoTextIast.textContent = (mode === "both" || mode === "iast" || mode === "telugu" || mode === "kannada" || mode === "hindi") ? infoMainScript : "";
  mantraInfoMeaning.textContent = mantra.meaning;
  mantraInfoUsage.textContent = mantra.usage;
}

function buildCard(item, mode) {
  const mantra = selectedMantraData(item);
  const isFavorite = favorites.has(item.name);
  return `
    <article class="card" data-entity="${item.name}">
      <h2>${displayName(item.name)}</h2>
      <p class="featured-type">${typeLabel(item.type)}</p>
      ${mantraBlock(mantra.title, mantra.devanagari, { iast: mantra.iast, tamil: mantra.tamil, telugu: mantra.telugu, kannada: mantra.kannada, hindi: mantra.hindi }, mode)}
      <p class="meaning">${localizedPurpose(item)}</p>
      <div class="actions">
        <button data-action="toggle-favorite" data-name="${item.name}">${isFavorite ? t("removeFavorite") : t("addFavorite")}</button>
        <button data-action="copy-selected" data-name="${item.name}">${t("copySelected")}</button>
        <button data-action="copy-all" data-name="${item.name}">${t("copyAll")}</button>
        <button data-action="blessing-card" data-name="${item.name}">${t("blessingCard")}</button>
        <button data-action="share-card" data-name="${item.name}">${t("shareCard")}</button>
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
  const dedupedList = [];
  const seenLabels = new Set();
  for (const item of list) {
    const labelKey = String(displayName(item.name) || "").trim().toLowerCase();
    if (seenLabels.has(labelKey)) {
      continue;
    }
    seenLabels.add(labelKey);
    dedupedList.push(item);
  }

  entitySelect.innerHTML = dedupedList.map((item) => `<option value="${item.name}">${displayName(item.name)}</option>`).join("");

  if (!dedupedList.length) {
    selectedEntity = "";
    return;
  }

  const stillValid = dedupedList.some((item) => item.name === selectedEntity);
  if (!stillValid) {
    selectedEntity = dedupedList[0].name;
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
  featuredTitle.textContent = displayName(item.name);
  featuredType.textContent = typeLabel(item.type);
  featuredPurpose.textContent = `${t("purpose")}: ${localizedPurpose(item)}`;
  featuredHistory.textContent = localizedBrief(item);
  featuredMeaning.textContent = "";
  featuredMeaning.classList.add("hidden");

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
  const mode = effectiveScriptMode();
  experienceMode = experienceModeSelect?.value || "chant";
  const list = filteredList();

  if (!list.length) {
    grid.innerHTML = `<div class="empty">${t("noEntries")}</div>`;
    resultCount.textContent = t("entriesShown", { count: 0 });
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
    resultCount.textContent = t("fullPageView");
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
    if (currentLanguage !== "en") {
      const scriptMode = preferredScriptModeForLanguage();
      const selectedText = scriptMode === "tamil"
        ? (mantra.tamil || mantra.iast)
        : scriptMode === "telugu"
        ? (mantra.telugu || mantra.iast)
        : scriptMode === "kannada"
        ? (mantra.kannada || mantra.iast)
        : scriptMode === "hindi"
        ? (mantra.hindi || mantra.devanagari || mantra.iast)
        : mantra.iast;
      copyText(`${displayName(item.name)}\n${selectedText}`, `${displayName(item.name)} selected mantra`);
    } else {
      const tamilLine = mantra.tamil ? `\n${mantra.tamil}` : "";
      copyText(`${item.name}\n${mantra.devanagari}\n${mantra.iast}${tamilLine}`, `${item.name} selected mantra`);
    }
  }

  if (button.dataset.action === "copy-all") {
    const beej = beejMantrasByName[item.name];
    if (currentLanguage !== "en") {
      const scriptMode = preferredScriptModeForLanguage();
      const toScriptText = (key, iastText, devanagariText = "") => {
        if (scriptMode === "tamil") return getTamilMantraText(item, key, iastText || "") || iastText || "";
        if (scriptMode === "telugu") return iastToTelugu(iastText || "") || iastText || "";
        if (scriptMode === "kannada") return iastToKannada(iastText || "") || iastText || "";
        if (scriptMode === "hindi") return devanagariText || iastText || "";
        return iastText || "";
      };
      const famousText = toScriptText("famous", item.famousIast, item.famousDevanagari);
      const gayatriText = toScriptText("gayatri", item.gayatriIast, item.gayatriDevanagari);
      const beejText = beej ? toScriptText("beej", beej.iast, beej.devanagari) : "";
      const beejBlock = beej ? `\n\n${localizedMantraTitle(beej.title)}:\n${beejText}` : "";
      copyText(
        `${displayName(item.name)}\n\n${localizedMantraTitle(item.famousTitle)}:\n${famousText}\n\n${localizedMantraTitle(item.gayatriTitle)}:\n${gayatriText}${beejBlock}\n\n${t("purpose")}: ${localizedPurpose(item)}`,
        `${displayName(item.name)} full text`
      );
    } else {
      const beejBlock = beej ? `\n\n${beej.title}:\n${beej.devanagari}\n${beej.iast}` : "";
      copyText(
        `${item.name}\n\n${item.famousTitle}:\n${item.famousDevanagari}\n${item.famousIast}\n\n${item.gayatriTitle}:\n${item.gayatriDevanagari}\n${item.gayatriIast}${beejBlock}\n\nPurpose: ${item.purpose}`,
        `${item.name} full text`
      );
    }
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
if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    setLanguage(languageSelect.value);
  });
}
if (langEnglishBtn) {
  langEnglishBtn.addEventListener("click", () => setLanguage("en"));
}
if (langTamilBtn) {
  langTamilBtn.addEventListener("click", () => setLanguage("ta"));
}
if (langTeluguBtn) {
  langTeluguBtn.addEventListener("click", () => setLanguage("te"));
}
if (langKannadaBtn) {
  langKannadaBtn.addEventListener("click", () => setLanguage("kn"));
}
if (langHindiBtn) {
  langHindiBtn.addEventListener("click", () => setLanguage("hi"));
}
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
    showToast(t("completedChants", { count: chantTarget }));
    if (chantCount === chantTarget) {
      playSessionEndSound();
    }
  }
  if (completedSankalpa) {
    showToast(t("sankalpaComplete"));
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
    showToast(soundSettings.enabled ? t("templeSoundsEnabled") : t("templeSoundsDisabled"));
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
    const reason = localizedMoodReason(Boolean(emotionMood));
    applyMoodTheme(targetMood, reason);
    saveAiPrefs();
    savePrefs();
  });
}

if (saveJournalBtn) {
  saveJournalBtn.addEventListener("click", () => {
    saveJournalEntry();
    if (journalStatus) {
      journalStatus.textContent = t("journalSavedStatus");
    }
    showToast(t("ritualJournalSaved"));
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
      meditationTimerText.textContent = t("meditationNotRunning");
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
    reminderSettings.message = (reminderMessageInput.value || "").trim() || t("defaultReminderMessage");

    if (reminderSettings.enabled) {
      await ensureNotificationPermission();
    }

    saveReminderSettings();
    renderReminderSettings();
    startReminderScheduler();
    showToast(t("reminderSaved"));
  });
}

if (sankalpaSaveBtn) {
  sankalpaSaveBtn.addEventListener("click", () => {
    const nextText = (sankalpaInput.value || "").trim();
    sankalpaState.text = nextText || defaultSankalpaText();
    sankalpaState.target = Number(sankalpaTargetSelect.value) || 21;
    resetSankalpaDailyIfNeeded();
    saveSankalpa();
    renderSankalpaTracker();
    showToast(t("sankalpaSaved"));
  });
}

if (sankalpaCompleteBtn) {
  sankalpaCompleteBtn.addEventListener("click", () => {
    const completedNow = markSankalpaComplete();
    if (!completedNow) {
      showToast(t("sankalpaAlready"));
    } else {
      sankalpaState.dailyCount = Math.max(sankalpaState.dailyCount, sankalpaState.target);
      saveSankalpa();
      showToast(t("sankalpaComplete"));
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
applyLanguageToStaticUI();
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
