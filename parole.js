/* =========================================================================
   ARCHIVIO PAROLE CHIAVE: L'APPARATO DIGERENTE (Classe 2ª)
   Ogni oggetto contiene:
   - parola: il termine scientifico da indovinare o studiare
   - emoji: un'icona visiva associata
   - definizione: spiegazione breve adatta a ragazzi di 12-13 anni
   - vietate: array di 3 parole proibite per giocare a Taboo
   ========================================================================= */

const paroleApparatoDigerente = [
    {
        parola: "Digestione",
        emoji: "⚙️",
        definizione: "Il processo che trasforma il cibo in sostanze piccolissime utilizzabili dal corpo.",
        vietate: ["Cibo", "Mangiare", "Stomaco"]
    },
    {
        parola: "Bocca",
        emoji: "👄",
        definizione: "La prima parte dell'apparato digerente dove il cibo viene tritato e impastato.",
        vietate: ["Denti", "Lingua", "Masticare"]
    },
    {
        parola: "Saliva",
        emoji: "💧",
        definizione: "Liquido prodotto in bocca che bagna il cibo e inizia a digerire gli zuccheri.",
        vietate: ["Bocca", "Bagnare", "Sputare"]
    },
    {
        parola: "Denti",
        emoji: "🦷",
        definizione: "Strutture dure in bocca che tagliano, strappano e tritano gli alimenti.",
        vietate: ["Masticare", "Bocca", "Bianchi"]
    },
    {
        parola: "Bolo",
        emoji: "⚽",
        definizione: "La pallina di cibo masticato e impastato con la saliva pronta per essere ingoiata.",
        vietate: ["Saliva", "Masticare", "Deglutire"]
    },
    {
        parola: "Esofago",
        emoji: "🧣",
        definizione: "Il tubo muscolare che collega la gola allo stomaco.",
        vietate: ["Tubo", "Gola", "Stomaco"]
    },
    {
        parola: "Peristalsi",
        emoji: "〰️",
        definizione: "I movimenti involontari dei muscoli che spingono il cibo lungo il tubo digerente.",
        vietate: ["Movimento", "Spingere", "Muscoli"]
    },
    {
        parola: "Stomaco",
        emoji: "👜",
        definizione: "Organo a forma di sacco che rimescola il cibo con i succhi acidi.",
        vietate: ["Pancia", "Acido", "Digerire"]
    },
    {
        parola: "Succhi gastrici",
        emoji: "🧪",
        definizione: "Liquidi molto acidi prodotti nello stomaco per scomporre le proteine e uccidere i batteri.",
        vietate: ["Stomaco", "Acido", "Liquido"]
    },
    {
        parola: "Chimo",
        emoji: "🥣",
        definizione: "La poltiglia liquida e acida che si forma nello stomaco alla fine della sua lavorazione.",
        vietate: ["Stomaco", "Poltiglia", "Bolo"]
    },
    {
        parola: "Intestino tenue",
        emoji: "➰",
        definizione: "Il lungo tubo ripiegato dove finisce la digestione e vengono assorbiti i nutrienti.",
        vietate: ["Lungo", "Assorbire", "Villi"]
    },
    {
        parola: "Duodeno",
        emoji: "1️⃣",
        definizione: "Il primo tratto dell'intestino tenue dove arrivano la bile e il succo pancreatico.",
        vietate: ["Intestino", "Primo", "Tenue"]
    },
    {
        parola: "Fegato",
        emoji: "🤎",
        definizione: "La ghiandola più grande del corpo umano, che produce la bile.",
        vietate: ["Bile", "Ghiandola", "Grassi"]
    },
    {
        parola: "Bile",
        emoji: "🧼",
        definizione: "Sostanza prodotta dal fegato che scioglie i grassi in goccioline minuscole.",
        vietate: ["Fegato", "Grassi", "Verde"]
    },
    {
        parola: "Pancreas",
        emoji: "🌽",
        definizione: "Ghiandola dietro lo stomaco che produce succhi digestivi e regola gli zuccheri nel sangue.",
        vietate: ["Ghiandola", "Succo", "Insulina"]
    },
    {
        parola: "Villi intestinali",
        emoji: "🌿",
        definizione: "Piccole pieghe sulle pareti dell'intestino tenue che assorbono i nutrienti nel sangue.",
        vietate: ["Assorbire", "Intestino", "Sangue"]
    },
    {
        parola: "Chilo",
        emoji: "🥛",
        definizione: "Il liquido lattiginoso ricco di nutrienti pronti per essere assorbiti nell'intestino tenue.",
        vietate: ["Liquido", "Tenue", "Chimo"]
    },
    {
        parola: "Intestino crasso",
        emoji: "⭕",
        definizione: "L'ultima parte dell'intestino, più corta e larga, che riassorbe l'acqua.",
        vietate: ["Acqua", "Feci", "Ultimo"]
    },
    {
        parola: "Microbiota",
        emoji: "🦠",
        definizione: "L'insieme dei miliardi di batteri buoni che vivono nel nostro intestino.",
        vietate: ["Batteri", "Flora", "Intestino"]
    },
    {
        parola: "Enzimi",
        emoji: "✂️",
        definizione: "Proteine speciali che funzionano come forbici chimiche per tagliare i nutrienti.",
        vietate: ["Forbici", "Tagliare", "Proteine"]
    }
];