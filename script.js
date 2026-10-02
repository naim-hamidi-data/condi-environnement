/* =========================================================
   CONFIGURATION DES FICHES
========================================================= */

const FICHES = {

    eau:
        "Conditionnalite-2026_fiche-technique_environnement-1_directive_cadre_eau.pdf",

    nitrates:
        "Conditionnalite-2026_fiche-technique_environnement-2_nitrates.pdf",

    oiseaux:
        "Conditionnalite-2026_fiche-technique_environnement-3_oiseaux_sauvages-habitats.pdf"
};


const FICHES_MESURES = {

    14:
        "fichemesure1_2025_vf2-7.pdf",

    15:
        "fichemesure2_2024_vf-5.pdf",

    16:
        "fichemesure3_2025_vf-4.pdf",

    17:
        "fichemesure4_2025_vf-7.pdf",

    19:
        "fichemesure5_2024_vf-4.pdf",

    20:
        "fichemesure6_2024_vf-1.pdf",

    21:
        "fichemesure7_2025_vf-4.pdf",

    22:
        "fichemesure8_2024_vf-2.pdf"
};


/* =========================================================
   EMOJIS — UNIQUEMENT POUR LE SITE
   Ils ne seront jamais utilisés dans le PDF
========================================================= */

const DOMAIN_ICONS = {

    eau: "💧",

    nitrates: "🌱",

    oiseaux: "🐦"

};


/* =========================================================
   DONNÉES DU DIAGNOSTIC
========================================================= */

const questions = [

    /* =====================================================
       DIRECTIVE CADRE SUR L'EAU
    ====================================================== */

    {
        id: 1,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Vérification administrative",

        titre: "Prélèvement pour l'irrigation",

        question:
            "Disposez-vous d’un document attestant que vos prélèvements d’eau pour l’irrigation sont autorisés (autorisation de prélèvement, facture de l’année en cours, bulletin d’adhésion à une ASA, etc.) ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label: "Non concerné — Je n’irrigue pas"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 2,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre: "Évaluation des volumes prélevés",

        question:
            "Disposez-vous d’un moyen approprié permettant d’évaluer et d’enregistrer les volumes d’eau prélevés, par exemple un compteur volumétrique ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label: "Non concerné — Je n’irrigue pas"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 3,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre:
            "Protection des eaux souterraines contre les pollutions",

        question:
            "Votre exploitation est-elle exempte de rejets directs dans les sols de substances susceptibles de polluer les eaux souterraines, telles que des produits phytopharmaceutiques, carburants et lubrifiants, produits de désinfection ou de santé animale, fertilisants, engrais azotés ou phosphatés ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        remarque:
            "Le contrôleur peut vérifier ce point directement sur l’exploitation le jour du contrôle.",

        fiche: FICHES.eau
    },


    {
        id: 4,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre:
            "Stockage des effluents d’élevage",

        question:
            "Respectez-vous les distances applicables entre les installations de stockage des effluents d’élevage et les points d’eau souterrains ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je ne stocke pas d’effluents d’élevage"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 5,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre:
            "Prévention des retours et débordements lors du remplissage du pulvérisateur",

        question:
            "Lors du remplissage du pulvérisateur, disposez-vous d’au moins un dispositif permettant de prévenir le retour de produits vers le réseau d’eau et de limiter les risques de débordement ?",

        exemples:
            "Clapet anti-retour ; potence ; cuve intermédiaire ou de pré-stockage ; volucompteur à arrêt automatique ; autre dispositif équivalent.",

        remarque:
            "La simple présence de l’exploitant lors du remplissage ne constitue pas, à elle seule, un dispositif de prévention du débordement ou du retour de produits.",

        reponses: [
            {
                key: "oui",
                label:
                    "Oui, je dispose d’au moins un dispositif adapté"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 6,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre:
            "Lavage du pulvérisateur",

        question:
            "Lorsque le lavage du pulvérisateur n’est pas réalisé au champ, disposez-vous d’un dispositif permettant de récupérer les effluents issus du lavage ?",

        exemples:
            "Aire ou bâche adaptée ; bac récupérateur ; autre dispositif permettant de récupérer les effluents.",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je fais appel à une entreprise de travaux agricoles ou je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 7,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre:
            "Stockage des produits phytopharmaceutiques",

        question:
            "Les produits phytopharmaceutiques présents sur votre exploitation sont-ils stockés dans un local ou un espace dédié à leur stockage ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 8,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Vérification administrative",

        titre:
            "Composés phosphorés – Exploitations ICPE",

        question:
            "Disposez-vous d’un cahier d’enregistrement des pratiques (CEP) permettant de suivre les apports de composés phosphorés organiques ou minéraux, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Mon exploitation n’est pas concernée par cette obligation"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 9,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Vérification administrative",

        titre:
            "Bilan de matières – Exploitations ICPE",

        question:
            "Avez-vous réalisé le bilan de matières nécessaire pour justifier la conformité des quantités de phosphore apportées, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Mon exploitation n’est pas concernée par cette obligation"
            }
        ],

        fiche: FICHES.eau
    },


    /* =====================================================
       DIRECTIVE OISEAUX / HABITATS
    ====================================================== */

    {
        id: 10,
        domaine: "oiseaux",
        domaineLabel:
            "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre:
            "Taille et coupe des arbres et des haies",

        question:
            "Respectez-vous la période d’interdiction de taille et de coupe des arbres et des haies du 16 mars au 15 août, sauf intervention imposée par une autorité extérieure pour des raisons de sécurité ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.oiseaux
    },


    {
        id: 11,
        domaine: "oiseaux",
        domaineLabel:
            "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre:
            "Écobuage",

        question:
            "Vos pratiques d’écobuage respectent-elles la réglementation applicable et, lorsque cela est nécessaire, disposez-vous d’une dérogation préfectorale ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.oiseaux
    },


    {
        id: 12,
        domaine: "oiseaux",
        domaineLabel:
            "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre:
            "Protection des habitats des espèces d’oiseaux protégées",

        question:
            "Préservez-vous les habitats des espèces d’oiseaux protégées présentes sur votre exploitation et évitez-vous toute destruction ou dégradation interdite de ces habitats ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Aucune espèce protégée n’est répertoriée comme concernée sur mon exploitation"
            }
        ],

        fiche: FICHES.oiseaux
    },


    {
        id: 13,
        domaine: "oiseaux",
        domaineLabel:
            "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre:
            "Sites Natura 2000",

        question:
            "Évitez-vous les travaux ou interventions susceptibles d’affecter de manière significative un site Natura 2000 ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Mon exploitation n’est pas concernée par un site Natura 2000"
            }
        ],

        fiche: FICHES.oiseaux
    },


    /* =====================================================
       QUESTION D'ORIENTATION ZONE VULNÉRABLE
    ====================================================== */

    {
        id: "zv",
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type: "Orientation",

        titre:
            "Situation de l’exploitation vis-à-vis de la zone vulnérable",

        question:
            "Vos parcelles sont-elles situées en zone vulnérable aux nitrates ?",

        reponses: [
            {
                key: "oui",
                label:
                    "Oui, au moins une de mes parcelles est située en zone vulnérable"
            },
            {
                key: "non",
                label:
                    "Non, aucune de mes parcelles n’est située en zone vulnérable"
            },
            {
                key: "verification",
                label:
                    "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates
    },


    /* =====================================================
       DIRECTIVE NITRATES
    ====================================================== */

    {
        id: 14,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type: "Vérification administrative",

        titre:
            "Périodes d’interdiction d’épandage",

        question:
            "Respectez-vous les périodes pendant lesquelles l’épandage des fertilisants azotés est interdit ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label: "Non concerné"
            }
        ],

        remarque:
            "Consultez le document présentant les périodes d’interdiction d’épandage applicables à votre situation.",

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[14]
    },


    {
        id: 15,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Vérification administrative et justificatifs",

        titre:
            "Capacités de stockage des effluents d’élevage",

        question:
            "Disposez-vous d’installations de stockage des effluents d’élevage étanches et d’une capacité suffisante pour respecter les périodes d’interdiction d’épandage ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je ne produis et ne stocke pas d’effluents d’élevage"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[15]
    },


    {
        id: 16,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Vérification administrative",

        titre:
            "Équilibre de la fertilisation azotée – PPF et CEP",

        question:
            "Disposez-vous d’un plan prévisionnel de fumure (PPF) et d’un cahier d’enregistrement des pratiques (CEP) permettant de justifier le respect de l’équilibre de la fertilisation azotée ?",

        remarque:
            "Même si vous ne réalisez aucun épandage, vous devez tenir à jour un PPF et un CEP lorsque vous êtes concerné par cette obligation. Dans ce cas, renseignez les îlots et les parcelles sur lesquels aucun épandage n’est réalisé.",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[16]
    },


    {
        id: 17,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Vérification administrative",

        titre:
            "Respect des doses d’azote",

        question:
            "Les doses d’azote prévues dans votre PPF respectent-elles les doses maximales calculées conformément aux règles applicables ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[17]
    },


    {
        id: 18,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Vérification administrative",

        titre:
            "Analyse de sol",

        question:
            "Disposez-vous des analyses de sol requises par la réglementation, notamment concernant le reliquat d’azote ou, pour les situations concernées, l’analyse de matière organique des prairies ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates
    },


    {
        id: 19,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Vérification administrative",

        titre:
            "Plafond de 170 kg d’azote par hectare",

        question:
            "La quantité d’azote contenue dans les effluents d’élevage épandus sur votre exploitation respecte-t-elle le plafond annuel de 170 kg d’azote par hectare de SAU ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            },
            {
                key: "non-concerne",
                label:
                    "Non concerné — Je n’utilise pas d’effluents d’élevage, qu’ils soient produits sur mon exploitation ou provenant d’une autre exploitation"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[19]
    },


    {
        id: 20,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Contrôle sur place et vérification administrative",

        titre:
            "Conditions particulières d’épandage",

        question:
            "Respectez-vous les conditions particulières applicables aux épandages, notamment concernant les sols à forte pente et les sols détrempés, inondés, gelés ou enneigés, ainsi que les distances à respecter à proximité des cours d’eau ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[20]
    },


    {
        id: 21,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Contrôle sur place et vérification administrative",

        titre:
            "Couverture des sols",

        question:
            "Respectez-vous les règles relatives à la couverture des sols, notamment les dates d’implantation, la durée de maintien et les dates de destruction des couverts autorisés ?",

        remarque:
            "Consultez la fiche dédiée à la couverture des sols pour connaître les couverts autorisés et les règles applicables à leur implantation et à leur destruction.
             Campagne 2026 :    "Au vu des événements climatiques exceptionnels survenus cet été et qui se prolongent au mois de septembre, une dérogation est accordée. Les exploitations qui mettent en œuvre cette dérogation doivent se déclarer auprès de la DDT, soit via l’application « Mes Démarches » (https://demarche.numerique.gouv.fr/commencer/ddt31-secheresse-2026), soit par courriel à l’adresse pac-surface@haute-garonne.gouv.fr.",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[21]
    },


    {
        id: 22,
        domaine: "nitrates",
        domaineLabel:
            "Directive nitrates",
        type:
            "Contrôle sur place",

        titre:
            "Bande tampon le long des cours d’eau",

        question:
            "Entretenez-vous correctement la bande tampon végétalisée le long des cours d’eau concernés ?",

        reponses: [
            {
                key: "oui",
                label: "Oui"
            },
            {
                key: "non",
                label: "Non"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates,

        ficheMesure:
            FICHES_MESURES[22]
    }

];


/* =========================================================
   ÉTAT DU DIAGNOSTIC
========================================================= */

let currentQuestionIndex = 0;

let answers = {};


/*
   Domaine sélectionné depuis la page d'accueil :
   eau / nitrates / oiseaux
*/

let currentDomain = null;


/*
   Liste des questions actuellement utilisées
   dans le questionnaire.
*/

let currentQuestions = [];


/* =========================================================
   COULEURS / LIBELLÉS
========================================================= */

const ANSWER_CLASSES = {

    oui: "answer-oui",

    non: "answer-non",

    verification:
        "answer-verification",

    "non-concerne":
        "answer-non-concerne"
};


const STATUS_CLASSES = {

    oui: "status-oui",

    non: "status-non",

    verification:
        "status-verification",

    "non-concerne":
        "status-non-concerne"
};


const STATUS_LABELS = {

    oui: "Oui",

    non: "Non",

    verification: "À vérifier",

    "non-concerne":
        "Non concerné"
};


const PDF_STATUS_COLORS = {

    oui: {
        background: [224, 243, 230],
        text: [35, 107, 66],
        border: [46, 155, 101]
    },

    non: {
        background: [253, 227, 227],
        text: [165, 47, 47],
        border: [214, 69, 69]
    },

    verification: {
        background: [255, 240, 194],
        text: [138, 101, 0],
        border: [216, 155, 0]
    },

    "non-concerne": {
        background: [233, 235, 237],
        text: [98, 104, 113],
        border: [122, 127, 135]
    }
};


/* =========================================================
   FIN PARTIE 1
========================================================= */

/* =========================================================
   PARTIE 2
   DÉMARRAGE ET NAVIGATION DU DIAGNOSTIC
========================================================= */


/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS DU SITE
========================================================= */

const homeScreen =
    document.getElementById("homeScreen");

const diagnosticScreen =
    document.getElementById("diagnosticScreen");

const resultsScreen =
    document.getElementById("resultsScreen");

const actionsScreen =
    document.getElementById("actionsScreen");


const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");


const domainBadge =
    document.getElementById("domainBadge");

const typeBadge =
    document.getElementById("typeBadge");


const questionNumber =
    document.getElementById("questionNumber");

const questionTitle =
    document.getElementById("questionTitle");

const questionText =
    document.getElementById("questionText");


const examplesBlock =
    document.getElementById("examplesBlock");

const examplesText =
    document.getElementById("examplesText");


const remarkBlock =
    document.getElementById("remarkBlock");

const remarkText =
    document.getElementById("remarkText");


const answersContainer =
    document.getElementById("answersContainer");


const regulationLink =
    document.getElementById("regulationLink");

const supplementLink =
    document.getElementById("supplementLink");


const previousQuestionButton =
    document.getElementById("previousQuestionButton");


/* =========================================================
   HISTORIQUE DE NAVIGATION
========================================================= */

let questionHistory = [];


/* =========================================================
   AFFICHAGE DES ÉCRANS
========================================================= */

function showScreen(screen) {

    const screens = [
        homeScreen,
        diagnosticScreen,
        resultsScreen,
        actionsScreen
    ];


    screens.forEach(item => {

        if (!item) {
            return;
        }

        item.classList.remove("active");

    });


    if (screen) {

        screen.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RETOUR À L'ACCUEIL
========================================================= */

function goHome() {

    showScreen(homeScreen);

}


/* =========================================================
   COMMENCER MON DIAGNOSTIC
========================================================= */

function startDiagnostic() {

    /*
       Réinitialisation du diagnostic.
    */

    currentQuestionIndex = 0;

    answers = {};

    questionHistory = [];

    currentDomain = null;


    /*
       On utilise toutes les questions.

       Ordre :
       1 à 9   → Directive cadre sur l'eau
       10 à 13 → Oiseaux / habitats
       zv      → Orientation nitrates
       14 à 22 → Directive nitrates
    */

    currentQuestions = [...questions];


    /*
       Affichage de l'écran diagnostic.
    */

    showScreen(diagnosticScreen);


    /*
       Affichage de la première question.
    */

    displayQuestion();

}


/* =========================================================
   AFFICHER LA QUESTION ACTUELLE
========================================================= */

function displayQuestion() {

    const question =
        currentQuestions[currentQuestionIndex];


    /*
       Si aucune question n'est disponible,
       le diagnostic est terminé.
    */

    if (!question) {

        finishDiagnostic();

        return;

    }


    currentDomain =
        question.domaine;


    /* =====================================================
       PROGRESSION
    ====================================================== */

    updateProgress();


    /* =====================================================
       BADGE DE LA DIRECTIVE
       EMOJIS UNIQUEMENT SUR LE SITE
    ====================================================== */

    if (domainBadge) {

        const icon =
            DOMAIN_ICONS[question.domaine] || "";


        domainBadge.textContent =
            `${icon} ${question.domaineLabel}`.trim();


        /*
           Classes permettant au CSS de différencier
           les trois directives.
        */

        domainBadge.classList.remove(
            "domain-eau",
            "domain-nitrates",
            "domain-oiseaux"
        );


        domainBadge.classList.add(
            `domain-${question.domaine}`
        );

    }


    /* =====================================================
       TYPE DE CONTRÔLE
    ====================================================== */

    if (typeBadge) {

        if (question.type) {

            typeBadge.textContent =
                question.type;

            typeBadge.style.display =
                "inline-flex";

        }

        else {

            typeBadge.textContent = "";

            typeBadge.style.display =
                "none";

        }

    }


    /* =====================================================
       NUMÉRO DE QUESTION
    ====================================================== */

    if (questionNumber) {

        if (question.id === "zv") {

            questionNumber.textContent =
                "ORIENTATION";

        }

        else {

            questionNumber.textContent =
                `QUESTION ${question.id}`;

        }

    }


    /* =====================================================
       TITRE
    ====================================================== */

    if (questionTitle) {

        questionTitle.textContent =
            question.titre || "";

    }


    /* =====================================================
       QUESTION
    ====================================================== */

    if (questionText) {

        questionText.textContent =
            question.question || "";

    }


    /* =====================================================
       EXEMPLES
    ====================================================== */

    if (
        examplesBlock &&
        examplesText
    ) {

        if (question.exemples) {

            examplesText.textContent =
                question.exemples;

            examplesBlock.style.display =
                "block";

        }

        else {

            examplesText.textContent = "";

            examplesBlock.style.display =
                "none";

        }

    }


    /* =====================================================
       REMARQUE
    ====================================================== */

    if (
        remarkBlock &&
        remarkText
    ) {

        if (question.remarque) {

            remarkText.textContent =
                question.remarque;

            remarkBlock.style.display =
                "block";

        }

        else {

            remarkText.textContent = "";

            remarkBlock.style.display =
                "none";

        }

    }


    /* =====================================================
       LIENS RÉGLEMENTAIRES
    ====================================================== */

    updateRegulationLinks(
        question
    );


    /* =====================================================
       RÉPONSES
    ====================================================== */

    displayAnswers(
        question
    );


    /* =====================================================
       BOUTON QUESTION PRÉCÉDENTE
    ====================================================== */

    updatePreviousButton();

}


/* =========================================================
   BARRE DE PROGRESSION
========================================================= */

function updateProgress() {

    /*
       La question "zv" compte comme une question
       d'orientation dans le parcours.
    */

    const total =
        currentQuestions.length;


    const current =
        currentQuestionIndex + 1;


    if (progressText) {

        progressText.textContent =
            `${current} / ${total}`;

    }


    if (progressBar) {

        const percentage =
            total > 0
                ? (current / total) * 100
                : 0;


        progressBar.style.width =
            `${percentage}%`;

    }

}


/* =========================================================
   LIENS RÉGLEMENTAIRES
========================================================= */

function updateRegulationLinks(
    question
) {

    /*
       Fiche principale de la directive.
    */

    if (regulationLink) {

        if (question.fiche) {

            regulationLink.href =
                question.fiche;

            regulationLink.target =
                "_blank";

            regulationLink.rel =
                "noopener noreferrer";

            regulationLink.style.display =
                "inline-flex";

        }

        else {

            regulationLink.removeAttribute(
                "href"
            );

            regulationLink.style.display =
                "none";

        }

    }


    /*
       Fiche complémentaire pour certaines
       mesures nitrates.
    */

    if (supplementLink) {

        if (question.ficheMesure) {

            supplementLink.href =
                question.ficheMesure;

            supplementLink.target =
                "_blank";

            supplementLink.rel =
                "noopener noreferrer";

            supplementLink.style.display =
                "inline-flex";

        }

        else {

            supplementLink.removeAttribute(
                "href"
            );

            supplementLink.style.display =
                "none";

        }

    }

}


/* =========================================================
   AFFICHER LES RÉPONSES
========================================================= */

function displayAnswers(
    question
) {

    if (!answersContainer) {
        return;
    }


    answersContainer.innerHTML = "";


    question.reponses.forEach(
        response => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-button";


            /* =============================================
               COULEUR DES RÉPONSES
            ============================================== */

            if (
                response.key === "oui"
            ) {

                button.classList.add(
                    "yes"
                );

            }


            else if (
                response.key === "non"
            ) {

                button.classList.add(
                    "no"
                );

            }


            else if (
                response.key ===
                "verification"
            ) {

                button.classList.add(
                    "verify"
                );

            }


            else if (
                response.key ===
                "non-concerne"
            ) {

                button.classList.add(
                    "na"
                );

            }


            /* =============================================
               TEXTE DU BOUTON
            ============================================== */

            button.textContent =
                response.label;


            /* =============================================
               RÉPONSE DÉJÀ ENREGISTRÉE
            ============================================== */

            const savedAnswer =
                answers[
                    String(question.id)
                ];


            if (
                savedAnswer &&
                savedAnswer.key ===
                    response.key
            ) {

                button.classList.add(
                    "selected"
                );


                button.setAttribute(
                    "aria-pressed",
                    "true"
                );

            }

            else {

                button.setAttribute(
                    "aria-pressed",
                    "false"
                );

            }


            /* =============================================
               CLIC SUR UNE RÉPONSE
            ============================================== */

            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        question,
                        response
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   ENREGISTRER UNE RÉPONSE
========================================================= */

function selectAnswer(
    question,
    response
) {

    /*
       Enregistrement complet.

       Ces informations seront utilisées
       ensuite pour :
       - le tableau de bord
       - la synthèse
       - les points à vérifier
       - le PDF
    */

    answers[String(question.id)] = {

        questionId:
            question.id,

        domaine:
            question.domaine,

        domaineLabel:
            question.domaineLabel,

        type:
            question.type,

        titre:
            question.titre,

        question:
            question.question,

        key:
            response.key,

        label:
            response.label

    };


    /* =====================================================
       CAS SPÉCIAL :
       AUCUNE PARCELLE EN ZONE VULNÉRABLE
    ====================================================== */

    if (
        question.id === "zv" &&
        response.key === "non"
    ) {

        /*
           On conserve la réponse à la question
           d'orientation.
        */


        /*
           On saute ensuite toutes les questions
           nitrates 14 à 22.

           Comme les nitrates sont placés à la fin
           du questionnaire, le diagnostic se termine.
        */

        questionHistory.push(
            currentQuestionIndex
        );


        finishDiagnostic();

        return;

    }


    /* =====================================================
       CAS SPÉCIAL :
       JE DOIS VÉRIFIER LA ZONE VULNÉRABLE
    ====================================================== */

    if (
        question.id === "zv" &&
        response.key === "verification"
    ) {

        /*
           On continue le questionnaire nitrates.

           Cela permet à l'utilisateur de faire
           l'autodiagnostic même s'il doit encore
           vérifier la situation géographique
           de ses parcelles.
        */

        goToNextQuestion();

        return;

    }


    /* =====================================================
       CAS NORMAL
    ====================================================== */

    goToNextQuestion();

}


/* =========================================================
   QUESTION SUIVANTE
========================================================= */

function goToNextQuestion() {

    /*
       Sauvegarde de la position actuelle
       pour permettre le retour en arrière.
    */

    questionHistory.push(
        currentQuestionIndex
    );


    /*
       Question suivante.
    */

    currentQuestionIndex++;


    /*
       Fin du questionnaire.
    */

    if (
        currentQuestionIndex >=
        currentQuestions.length
    ) {

        finishDiagnostic();

        return;

    }


    /*
       Affichage de la question suivante.
    */

    displayQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   QUESTION PRÉCÉDENTE
========================================================= */

function goToPreviousQuestion() {

    if (
        questionHistory.length === 0
    ) {

        return;

    }


    const previousIndex =
        questionHistory.pop();


    if (
        previousIndex < 0 ||
        previousIndex >=
            currentQuestions.length
    ) {

        return;

    }


    currentQuestionIndex =
        previousIndex;


    displayQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   AFFICHAGE DU BOUTON QUESTION PRÉCÉDENTE
========================================================= */

function updatePreviousButton() {

    if (!previousQuestionButton) {
        return;
    }


    if (
        questionHistory.length === 0
    ) {

        previousQuestionButton.style.display =
            "none";

    }

    else {

        previousQuestionButton.style.display =
            "inline-flex";

    }

}


/* =========================================================
   ÉVÉNEMENT DU BOUTON PRÉCÉDENT
========================================================= */

if (previousQuestionButton) {

    previousQuestionButton.addEventListener(
        "click",
        goToPreviousQuestion
    );

}


/* =========================================================
   FIN DU DIAGNOSTIC
========================================================= */

function finishDiagnostic() {

    /*
       buildResults() sera défini dans
       la partie 3.
    */

    if (
        typeof buildResults ===
        "function"
    ) {

        buildResults();

    }


    showScreen(
        resultsScreen
    );

}


/* =========================================================
   RECOMMENCER LE DIAGNOSTIC
========================================================= */

function restartDiagnostic() {

    currentQuestionIndex = 0;

    currentQuestions = [];

    currentDomain = null;

    questionHistory = [];

    answers = {};


    /*
       Réinitialisation de l'identification.
    */

    const operatorName =
        document.getElementById(
            "operatorName"
        );


    const farmName =
        document.getElementById(
            "farmName"
        );


    if (operatorName) {

        operatorName.value = "";

    }


    if (farmName) {

        farmName.value = "";

    }


    /*
       Retour à l'accueil.
    */

    showScreen(
        homeScreen
    );

}


/* =========================================================
   INITIALISATION DU SITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Accueil visible.
        */

        if (homeScreen) {

            homeScreen.classList.add(
                "active"
            );

        }


        /*
           Les autres écrans sont cachés.
        */

        if (diagnosticScreen) {

            diagnosticScreen.classList.remove(
                "active"
            );

        }


        if (resultsScreen) {

            resultsScreen.classList.remove(
                "active"
            );

        }


        if (actionsScreen) {

            actionsScreen.classList.remove(
                "active"
            );

        }


        /*
           Pas de bouton précédent
           avant la première question.
        */

        if (previousQuestionButton) {

            previousQuestionButton.style.display =
                "none";

        }

    }
);


/* =========================================================
   FIN PARTIE 2
========================================================= */

/* =========================================================
   PARTIE 3
   RÉSULTATS — TABLEAU DE BORD — SYNTHÈSE — POINTS À VÉRIFIER
========================================================= */


/* =========================================================
   RÉCUPÉRER LES RÉPONSES
========================================================= */

function getAnswerEntries() {

    return Object.values(answers);

}


/* =========================================================
   ORDRE DES RÉPONSES
========================================================= */

function sortAnswerEntries(entries) {

    const questionOrder =
        questions.map(
            question =>
                String(question.id)
        );


    return [...entries].sort(
        (a, b) => {

            const indexA =
                questionOrder.indexOf(
                    String(a.questionId)
                );

            const indexB =
                questionOrder.indexOf(
                    String(b.questionId)
                );


            return indexA - indexB;

        }
    );

}


/* =========================================================
   LIBELLÉ COURT DES RÉPONSES
========================================================= */

function getShortAnswerLabel(answer) {

    if (!answer) {
        return "";
    }


    if (answer.key === "oui") {

        return "Oui";

    }


    if (answer.key === "non") {

        return "Non";

    }


    if (answer.key === "verification") {

        return "À vérifier";

    }


    if (answer.key === "non-concerne") {

        return "Non concerné";

    }


    return answer.label || "";

}


/* =========================================================
   CLASSE D'UNE RÉPONSE
========================================================= */

function getAnswerClass(key) {

    if (key === "oui") {

        return "yes";

    }


    if (key === "non") {

        return "no";

    }


    if (key === "verification") {

        return "verify";

    }


    if (key === "non-concerne") {

        return "na";

    }


    return "";

}


/* =========================================================
   CONSTRUCTION DES RÉSULTATS
========================================================= */

function buildResults() {

    const entries =
        sortAnswerEntries(
            getAnswerEntries()
        );


    updateStatistics(
        entries
    );


    renderResultsList(
        entries
    );


    renderActionsList(
        entries
    );

}


/* =========================================================
   TABLEAU DE BORD
========================================================= */

function updateStatistics(entries) {

    /*
       La question d'orientation ZV n'est pas
       considérée comme un point de contrôle.

       Elle apparaît dans ORIENTATION,
       mais elle ne doit pas fausser
       le tableau de bord.
    */

    const controlEntries =
        entries.filter(
            answer =>
                String(answer.questionId) !== "zv"
        );


    const total =
        controlEntries.length;


    const oui =
        controlEntries.filter(
            answer =>
                answer.key === "oui"
        ).length;


    const verification =
        controlEntries.filter(
            answer =>
                answer.key === "verification"
        ).length;


    const non =
        controlEntries.filter(
            answer =>
                answer.key === "non"
        ).length;


    const nonConcerne =
        controlEntries.filter(
            answer =>
                answer.key === "non-concerne"
        ).length;


    const statTotal =
        document.getElementById(
            "statTotal"
        );


    const statOui =
        document.getElementById(
            "statOui"
        );


    const statVerification =
        document.getElementById(
            "statVerification"
        );


    const statNon =
        document.getElementById(
            "statNon"
        );


    const statNonConcerne =
        document.getElementById(
            "statNonConcerne"
        );


    if (statTotal) {

        statTotal.textContent =
            total;

    }


    if (statOui) {

        statOui.textContent =
            oui;

    }


    if (statVerification) {

        statVerification.textContent =
            verification;

    }


    if (statNon) {

        statNon.textContent =
            non;

    }


    if (statNonConcerne) {

        statNonConcerne.textContent =
            nonConcerne;

    }

}


/* =========================================================
   SYNTHÈSE DES RÉPONSES SUR LE SITE
========================================================= */

function renderResultsList(entries) {

    const resultsList =
        document.getElementById(
            "resultsList"
        );


    if (!resultsList) {
        return;
    }


    resultsList.innerHTML = "";


    /*
       La question ZV sera traitée dans
       l'orientation du PDF.

       Sur le tableau des réponses du site,
       on peut néanmoins la conserver pour
       que l'utilisateur voie son choix.
    */

    if (entries.length === 0) {

        const empty =
            document.createElement("div");


        empty.className =
            "result-item";


        empty.textContent =
            "Aucune réponse enregistrée.";


        resultsList.appendChild(
            empty
        );


        return;

    }


    entries.forEach(answer => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "result-item";


        /* =================================================
           EN-TÊTE DU POINT
        ================================================= */

        const header =
            document.createElement(
                "div"
            );


        header.className =
            "result-header";


        /* =================================================
           DIRECTIVE
        ================================================= */

        const domain =
            document.createElement(
                "div"
            );


        domain.className =
            "result-domain";


        const icon =
            DOMAIN_ICONS[
                answer.domaine
            ] || "";


        domain.textContent =
            `${icon} ${answer.domaineLabel}`.trim();


        /* =================================================
           RÉPONSE
        ================================================= */

        const response =
            document.createElement(
                "span"
            );


        response.className =
            `result-status ${getAnswerClass(answer.key)}`;


        response.textContent =
            getShortAnswerLabel(
                answer
            );


        header.appendChild(
            domain
        );


        header.appendChild(
            response
        );


        /* =================================================
           TITRE
        ================================================= */

        const title =
            document.createElement(
                "div"
            );


        title.className =
            "result-title";


        title.textContent =
            answer.titre || "";


        /* =================================================
           QUESTION
        ================================================= */

        const question =
            document.createElement(
                "div"
            );


        question.className =
            "result-question";


        question.textContent =
            answer.question || "";


        /* =================================================
           TYPE DE CONTRÔLE
        ================================================= */

        const type =
            document.createElement(
                "div"
            );


        type.className =
            "result-type";


        type.textContent =
            answer.type || "";


        /* =================================================
           AJOUT
        ================================================= */

        item.appendChild(
            header
        );


        item.appendChild(
            title
        );


        item.appendChild(
            question
        );


        if (answer.type) {

            item.appendChild(
                type
            );

        }


        resultsList.appendChild(
            item
        );

    });

}


/* =========================================================
   POINTS À VÉRIFIER
========================================================= */

function getActionEntries(entries) {

    return entries.filter(
        answer => {

            /*
               L'orientation ZV n'est pas
               un point de contrôle.
            */

            if (
                String(answer.questionId) === "zv"
            ) {

                return false;

            }


            /*
               On affiche :
               - NON
               - À VÉRIFIER
            */

            return (
                answer.key === "non" ||
                answer.key === "verification"
            );

        }
    );

}


/* =========================================================
   AFFICHAGE DES POINTS À VÉRIFIER
========================================================= */

function renderActionsList(entries) {

    const actions =
        getActionEntries(
            entries
        );


    const actionsList =
        document.getElementById(
            "actionsList"
        );


    const fullActionsList =
        document.getElementById(
            "fullActionsList"
        );


    renderActionContainer(
        actionsList,
        actions
    );


    renderActionContainer(
        fullActionsList,
        actions
    );

}


/* =========================================================
   CONTENU D'UN POINT À VÉRIFIER
========================================================= */

function renderActionContainer(
    container,
    actions
) {

    if (!container) {
        return;
    }


    container.innerHTML = "";


    /* =====================================================
       AUCUN POINT À VÉRIFIER
    ====================================================== */

    if (actions.length === 0) {

        const empty =
            document.createElement(
                "div"
            );


        empty.className =
            "action-item action-ok";


        const title =
            document.createElement(
                "strong"
            );


        title.textContent =
            "Aucun point particulier identifié";


        const text =
            document.createElement(
                "p"
            );


        text.textContent =
            "À partir des réponses renseignées, aucun point n’a été identifié comme nécessitant une vérification particulière.";


        empty.appendChild(
            title
        );


        empty.appendChild(
            text
        );


        container.appendChild(
            empty
        );


        return;

    }


    /* =====================================================
       POINTS IDENTIFIÉS
    ====================================================== */

    actions.forEach(answer => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "action-item";


        if (
            answer.key === "non"
        ) {

            item.classList.add(
                "action-no"
            );

        }


        else {

            item.classList.add(
                "action-verify"
            );

        }


        /* =================================================
           DIRECTIVE
        ================================================= */

        const domain =
            document.createElement(
                "div"
            );


        domain.className =
            "action-domain";


        const icon =
            DOMAIN_ICONS[
                answer.domaine
            ] || "";


        domain.textContent =
            `${icon} ${answer.domaineLabel}`.trim();


        /* =================================================
           TITRE
        ================================================= */

        const title =
            document.createElement(
                "strong"
            );


        title.className =
            "action-title";


        title.textContent =
            answer.titre;


        /* =================================================
           QUESTION
        ================================================= */

        const question =
            document.createElement(
                "p"
            );


        question.className =
            "action-question";


        question.textContent =
            answer.question;


        /* =================================================
           STATUT
        ================================================= */

        const status =
            document.createElement(
                "span"
            );


        status.className =
            `action-status ${getAnswerClass(answer.key)}`;


        status.textContent =
            answer.key === "non"
                ? "Non"
                : "À vérifier";


        /* =================================================
           AJOUT
        ================================================= */

        item.appendChild(
            domain
        );


        item.appendChild(
            title
        );


        item.appendChild(
            question
        );


        item.appendChild(
            status
        );


        container.appendChild(
            item
        );

    });

}


/* =========================================================
   AFFICHER LE TABLEAU DE BORD
========================================================= */

function showResults() {

    buildResults();


    showScreen(
        resultsScreen
    );

}


/* =========================================================
   AFFICHER TOUS LES POINTS À VÉRIFIER
========================================================= */

function showActions() {

    const entries =
        sortAnswerEntries(
            getAnswerEntries()
        );


    renderActionsList(
        entries
    );


    showScreen(
        actionsScreen
    );

}


/* =========================================================
   IDENTIFICATION
========================================================= */

function getOperatorName() {

    const input =
        document.getElementById(
            "operatorName"
        );


    if (!input) {

        return "";

    }


    return input.value.trim();

}


function getFarmName() {

    const input =
        document.getElementById(
            "farmName"
        );


    if (!input) {

        return "";

    }


    return input.value.trim();

}


/* =========================================================
   ORIENTATION — DIRECTIVES
========================================================= */

function getOrientationData() {

    const entries =
        sortAnswerEntries(
            getAnswerEntries()
        );


    const waterAnswers =
        entries.filter(
            answer =>
                answer.domaine === "eau"
        );


    const birdAnswers =
        entries.filter(
            answer =>
                answer.domaine === "oiseaux"
        );


    const nitrateOrientation =
        entries.find(
            answer =>
                String(answer.questionId) === "zv"
        );


    const nitrateAnswers =
        entries.filter(
            answer =>
                answer.domaine === "nitrates" &&
                String(answer.questionId) !== "zv"
        );


    /* =====================================================
       DIRECTIVE CADRE SUR L'EAU
    ====================================================== */

    const waterConcerned =
        waterAnswers.length > 0;


    /* =====================================================
       OISEAUX / HABITATS
    ====================================================== */

    const birdsConcerned =
        birdAnswers.length > 0;


    /* =====================================================
       NITRATES
    ====================================================== */

    let nitratesStatus =
        "Non renseigné";


    if (nitrateOrientation) {

        if (
            nitrateOrientation.key === "oui"
        ) {

            nitratesStatus =
                "Concernée";

        }


        else if (
            nitrateOrientation.key === "non"
        ) {

            nitratesStatus =
                "Non concernée — aucune parcelle située en zone vulnérable";

        }


        else if (
            nitrateOrientation.key === "verification"
        ) {

            nitratesStatus =
                "Situation à vérifier";

        }

    }


    else if (
        nitrateAnswers.length > 0
    ) {

        nitratesStatus =
            "Concernée";

    }


    return {

        eau: {
            label:
                "Directive cadre sur l'eau",

            status:
                waterConcerned
                    ? "Concernée"
                    : "Non renseignée"
        },


        oiseaux: {
            label:
                "Directive oiseaux sauvages et habitats",

            status:
                birdsConcerned
                    ? "Concernée"
                    : "Non renseignée"
        },


        nitrates: {
            label:
                "Directive nitrates",

            status:
                nitratesStatus
        }

    };

}


/* =========================================================
   DIRECTIVES CONCERNÉES
   UTILISÉ DANS LE PDF
========================================================= */

function getConcernedDomains() {

    const orientation =
        getOrientationData();


    const concerned = [];


    if (
        orientation.eau.status ===
        "Concernée"
    ) {

        concerned.push(
            orientation.eau.label
        );

    }


    if (
        orientation.oiseaux.status ===
        "Concernée"
    ) {

        concerned.push(
            orientation.oiseaux.label
        );

    }


    if (
        orientation.nitrates.status ===
        "Concernée"
    ) {

        concerned.push(
            orientation.nitrates.label
        );

    }


    return concerned;

}


/* =========================================================
   DIRECTIVES NON CONCERNÉES
========================================================= */

function getNotConcernedDomains() {

    const orientation =
        getOrientationData();


    const notConcerned = [];


    if (
        orientation.nitrates.status.startsWith(
            "Non concernée"
        )
    ) {

        notConcerned.push(
            orientation.nitrates.label
        );

    }


    return notConcerned;

}


/* =========================================================
   NETTOYAGE TEXTE POUR LE PDF
========================================================= */

function cleanPDFText(text) {

    if (
        text === null ||
        text === undefined
    ) {

        return "";

    }


    let cleaned =
        String(text);


    /* =====================================================
       SUPPRESSION DES EMOJIS
    ====================================================== */

    cleaned =
        cleaned.replace(
            /[\u{1F300}-\u{1FAFF}]/gu,
            ""
        );


    cleaned =
        cleaned.replace(
            /[\u{2600}-\u{27BF}]/gu,
            ""
        );


    /* =====================================================
       CARACTÈRES PROBLÉMATIQUES POUR JSPDF
    ====================================================== */

    cleaned =
        cleaned
            .replace(/’/g, "'")
            .replace(/‘/g, "'")
            .replace(/“/g, '"')
            .replace(/”/g, '"')
            .replace(/–/g, "-")
            .replace(/—/g, "-")
            .replace(/…/g, "...")
            .replace(/\u00A0/g, " ");


    /* =====================================================
       ESPACES
    ====================================================== */

    cleaned =
        cleaned
            .replace(/\s+/g, " ")
            .trim();


    return cleaned;

}


/* =========================================================
   NOM DU FICHIER PDF
========================================================= */

function getPDFFileName() {

    let name =
        getFarmName();


    if (!name) {

        name =
            getOperatorName();

    }


    if (!name) {

        name =
            "exploitation";

    }


    const safeName =
        name
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .replace(
                /[^a-zA-Z0-9-_ ]/g,
                ""
            )
            .trim()
            .replace(
                /\s+/g,
                "-"
            )
            .toLowerCase();


    return (
        "controle-conditionnalite-pac-environnement-" +
        safeName +
        "-2026.pdf"
    );

}


/* =========================================================
   DATE DU PDF
========================================================= */

function getPDFDate() {

    const now =
        new Date();


    return now.toLocaleDateString(
        "fr-FR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


/* =========================================================
   FIN PARTIE 3

   La partie 4 contiendra UNIQUEMENT la génération PDF :

   1. IDENTIFICATION
   2. ORIENTATION
   3. TABLEAU DE BORD
   4. SYNTHÈSE DES RÉPONSES
   5. POINTS À VÉRIFIER

   PAS D'ANNEXE.
   PAS D'EMOJIS DANS LE PDF.
========================================================= */

/* =========================================================
   PARTIE 4
   GÉNÉRATION DU PDF
========================================================= */


/* =========================================================
   COULEURS PDF
========================================================= */

const PDF_COLORS = {

    text: [29, 29, 31],

    secondary: [110, 110, 115],

    muted: [134, 134, 139],

    line: [218, 218, 223],

    background: [247, 247, 249],

    white: [255, 255, 255],

    blue: [0, 113, 227],


    /* Réponses */

    green: [35, 131, 76],

    greenLight: [232, 247, 238],

    red: [183, 53, 53],

    redLight: [252, 235, 235],

    yellow: [158, 103, 0],

    yellowLight: [255, 246, 218],

    gray: [104, 104, 109],

    grayLight: [238, 238, 241],


    /* Directives */

    eau: [37, 99, 235],

    nitrates: [42, 132, 79],

    oiseaux: [117, 82, 164]

};


/* =========================================================
   COULEUR D'UNE DIRECTIVE
========================================================= */

function getPDFDomainColor(domain) {

    if (domain === "eau") {

        return PDF_COLORS.eau;

    }


    if (domain === "nitrates") {

        return PDF_COLORS.nitrates;

    }


    if (domain === "oiseaux") {

        return PDF_COLORS.oiseaux;

    }


    return PDF_COLORS.blue;

}


/* =========================================================
   COULEUR D'UNE RÉPONSE
========================================================= */

function getPDFAnswerColors(key) {

    if (key === "oui") {

        return {

            text:
                PDF_COLORS.green,

            background:
                PDF_COLORS.greenLight

        };

    }


    if (key === "non") {

        return {

            text:
                PDF_COLORS.red,

            background:
                PDF_COLORS.redLight

        };

    }


    if (key === "verification") {

        return {

            text:
                PDF_COLORS.yellow,

            background:
                PDF_COLORS.yellowLight

        };

    }


    return {

        text:
            PDF_COLORS.gray,

        background:
            PDF_COLORS.grayLight

    };

}


/* =========================================================
   FOOTER
========================================================= */

function addPDFFooter(
    doc,
    pageNumber
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    const pageHeight =
        doc.internal.pageSize.getHeight();


    doc.setDrawColor(
        ...PDF_COLORS.line
    );


    doc.setLineWidth(0.25);


    doc.line(
        18,
        pageHeight - 16,
        pageWidth - 18,
        pageHeight - 16
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        "Contrôle conditionnalité PAC - volet Environnement",
        18,
        pageHeight - 10
    );


    doc.text(
        `Page ${pageNumber}`,
        pageWidth - 18,
        pageHeight - 10,
        {
            align: "right"
        }
    );

}


/* =========================================================
   EN-TÊTE DES PAGES SUIVANTES
========================================================= */

function addPDFPageHeader(
    doc,
    section
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(7.5);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        "CONDITIONNALITÉ PAC · HAUTE-GARONNE · 2026",
        18,
        16
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.text(
        cleanPDFText(section).toUpperCase(),
        pageWidth - 18,
        16,
        {
            align: "right"
        }
    );


    doc.setDrawColor(
        ...PDF_COLORS.line
    );


    doc.line(
        18,
        21,
        pageWidth - 18,
        21
    );

}


/* =========================================================
   NOUVELLE PAGE
========================================================= */

function addPDFPage(
    doc,
    section
) {

    doc.addPage();


    addPDFPageHeader(
        doc,
        section
    );


    return 31;

}


/* =========================================================
   CONTRÔLE DE L'ESPACE DISPONIBLE
========================================================= */

function ensurePDFSpace(
    doc,
    y,
    requiredHeight,
    section
) {

    const pageHeight =
        doc.internal.pageSize.getHeight();


    const limit =
        pageHeight - 25;


    if (
        y + requiredHeight >
        limit
    ) {

        return addPDFPage(
            doc,
            section
        );

    }


    return y;

}


/* =========================================================
   TITRE DE SECTION
========================================================= */

function addPDFSectionTitle(
    doc,
    title,
    y
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    y = ensurePDFSpace(
        doc,
        y,
        18,
        title
    );


    doc.setFillColor(
        ...PDF_COLORS.text
    );


    doc.roundedRect(
        18,
        y,
        5,
        5,
        1.2,
        1.2,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(11.5);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        cleanPDFText(title),
        28,
        y + 4.2
    );


    doc.setDrawColor(
        ...PDF_COLORS.line
    );


    doc.line(
        28,
        y + 8,
        pageWidth - 18,
        y + 8
    );


    return y + 17;

}


/* =========================================================
   EN-TÊTE PRINCIPAL DU PDF
========================================================= */

function addPDFMainHeader(doc) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(8);


    doc.setTextColor(
        ...PDF_COLORS.blue
    );


    doc.text(
        "PAC · CONDITIONNALITÉ ENVIRONNEMENTALE",
        18,
        20
    );


    doc.setFontSize(22);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        "Contrôle conditionnalité PAC",
        18,
        34
    );


    doc.setFontSize(15);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    doc.text(
        "Volet Environnement",
        18,
        43
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(8.5);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        "Haute-Garonne · Campagne 2026",
        18,
        52
    );


    doc.setDrawColor(
        ...PDF_COLORS.line
    );


    doc.line(
        18,
        59,
        pageWidth - 18,
        59
    );


    return 69;

}


/* =========================================================
   IDENTIFICATION
========================================================= */

function addPDFIdentification(
    doc,
    y
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    const operator =
        cleanPDFText(
            getOperatorName()
        ) || "Non renseigné";


    const farm =
        cleanPDFText(
            getFarmName()
        ) || "Non renseigné";


    y = ensurePDFSpace(
        doc,
        y,
        37,
        "Identification"
    );


    doc.setFillColor(
        ...PDF_COLORS.background
    );


    doc.roundedRect(
        18,
        y,
        pageWidth - 36,
        30,
        3,
        3,
        "F"
    );


    const columnWidth =
        (pageWidth - 48) / 2;


    /* EXPLOITANT */

    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(7);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        "EXPLOITANT",
        24,
        y + 8
    );


    doc.setFontSize(10);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        doc.splitTextToSize(
            operator,
            columnWidth - 5
        ),
        24,
        y + 15
    );


    /* EXPLOITATION */

    doc.setFontSize(7);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        "EXPLOITATION",
        24 + columnWidth,
        y + 8
    );


    doc.setFontSize(10);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        doc.splitTextToSize(
            farm,
            columnWidth - 5
        ),
        24 + columnWidth,
        y + 15
    );


    return y + 39;

}


/* =========================================================
   ORIENTATION
========================================================= */

function addPDFOrientation(
    doc,
    y
) {

    const orientation =
        getOrientationData();


    const domains = [

        {
            key: "eau",
            label:
                orientation.eau.label,
            status:
                orientation.eau.status
        },

        {
            key: "oiseaux",
            label:
                orientation.oiseaux.label,
            status:
                orientation.oiseaux.status
        },

        {
            key: "nitrates",
            label:
                orientation.nitrates.label,
            status:
                orientation.nitrates.status
        }

    ];


    domains.forEach(domain => {

        y = ensurePDFSpace(
            doc,
            y,
            18,
            "Orientation"
        );


        const color =
            getPDFDomainColor(
                domain.key
            );


        doc.setFillColor(
            248,
            248,
            250
        );


        doc.roundedRect(
            18,
            y,
            174,
            14,
            2.5,
            2.5,
            "F"
        );


        /* BARRE DE DIRECTIVE */

        doc.setFillColor(
            ...color
        );


        doc.roundedRect(
            22,
            y + 3,
            4,
            8,
            1,
            1,
            "F"
        );


        /* NOM */

        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.setFontSize(8.5);


        doc.setTextColor(
            ...PDF_COLORS.text
        );


        doc.text(
            cleanPDFText(
                domain.label
            ),
            30,
            y + 8.7
        );


        /* STATUT */

        let statusColor =
            PDF_COLORS.gray;


        if (
            domain.status ===
            "Concernée"
        ) {

            statusColor =
                PDF_COLORS.green;

        }


        else if (
            domain.status.startsWith(
                "Situation"
            )
        ) {

            statusColor =
                PDF_COLORS.yellow;

        }


        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.setFontSize(7.3);


        doc.setTextColor(
            ...statusColor
        );


        const statusLines =
            doc.splitTextToSize(
                cleanPDFText(
                    domain.status
                ),
                57
            );


        doc.text(
            statusLines,
            186,
            y + 6.5,
            {
                align: "right"
            }
        );


        y += 18;

    });


    return y + 2;

}


/* =========================================================
   STATISTIQUE
========================================================= */

function addPDFStatCard(
    doc,
    x,
    y,
    width,
    value,
    label,
    color
) {

    doc.setFillColor(
        248,
        248,
        250
    );


    doc.roundedRect(
        x,
        y,
        width,
        25,
        2.5,
        2.5,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(17);


    doc.setTextColor(
        ...color
    );


    doc.text(
        String(value),
        x + 5,
        y + 11
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    doc.text(
        doc.splitTextToSize(
            cleanPDFText(label),
            width - 10
        ),
        x + 5,
        y + 17
    );

}


/* =========================================================
   TABLEAU DE BORD
========================================================= */

function addPDFDashboard(
    doc,
    entries,
    y
) {

    /*
       La question ZV est une question
       d'orientation et non un point
       de contrôle.
    */

    const controls =
        entries.filter(
            item =>
                String(item.questionId) !== "zv"
        );


    const total =
        controls.length;


    const yes =
        controls.filter(
            item =>
                item.key === "oui"
        ).length;


    const verify =
        controls.filter(
            item =>
                item.key === "verification"
        ).length;


    const no =
        controls.filter(
            item =>
                item.key === "non"
        ).length;


    const na =
        controls.filter(
            item =>
                item.key === "non-concerne"
        ).length;


    y = ensurePDFSpace(
        doc,
        y,
        32,
        "Tableau de bord"
    );


    const x = 18;

    const gap = 3;

    const totalWidth = 174;


    const cardWidth =
        (
            totalWidth -
            gap * 4
        ) / 5;


    addPDFStatCard(
        doc,
        x,
        y,
        cardWidth,
        total,
        "Points",
        PDF_COLORS.text
    );


    addPDFStatCard(
        doc,
        x + cardWidth + gap,
        y,
        cardWidth,
        yes,
        "Oui",
        PDF_COLORS.green
    );


    addPDFStatCard(
        doc,
        x + (cardWidth + gap) * 2,
        y,
        cardWidth,
        verify,
        "À vérifier",
        PDF_COLORS.yellow
    );


    addPDFStatCard(
        doc,
        x + (cardWidth + gap) * 3,
        y,
        cardWidth,
        no,
        "Non",
        PDF_COLORS.red
    );


    addPDFStatCard(
        doc,
        x + (cardWidth + gap) * 4,
        y,
        cardWidth,
        na,
        "Non concerné",
        PDF_COLORS.gray
    );


    return y + 34;

}


/* =========================================================
   BADGE DE RÉPONSE
========================================================= */

function addPDFAnswerBadge(
    doc,
    key,
    label,
    x,
    y
) {

    const colors =
        getPDFAnswerColors(
            key
        );


    const text =
        cleanPDFText(
            label
        );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(7.5);


    const width =
        Math.min(
            Math.max(
                doc.getTextWidth(text) + 8,
                23
            ),
            48
        );


    doc.setFillColor(
        ...colors.background
    );


    doc.roundedRect(
        x,
        y,
        width,
        8,
        2,
        2,
        "F"
    );


    doc.setTextColor(
        ...colors.text
    );


    doc.text(
        text,
        x + 4,
        y + 5.4
    );

}


/* =========================================================
   UNE RÉPONSE DANS LA SYNTHÈSE
========================================================= */

function addPDFSummaryAnswer(
    doc,
    answer,
    y
) {

    /*
       La question d'orientation ZV n'est pas
       répétée dans la synthèse.

       Elle est déjà affichée dans ORIENTATION.
    */

    if (
        String(answer.questionId) === "zv"
    ) {

        return y;

    }


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const width =
        pageWidth - 36;


    const color =
        getPDFDomainColor(
            answer.domaine
        );


    const title =
        cleanPDFText(
            answer.titre
        );


    const question =
        cleanPDFText(
            answer.question
        );


    const titleLines =
        doc.splitTextToSize(
            title,
            width - 16
        );


    const questionLines =
        doc.splitTextToSize(
            question,
            width - 16
        );


    const estimatedHeight =
        24 +
        titleLines.length * 4.2 +
        questionLines.length * 3.8;


    const boxHeight =
        Math.max(
            31,
            estimatedHeight
        );


    y = ensurePDFSpace(
        doc,
        y,
        boxHeight + 4,
        "Synthèse des réponses"
    );


    /* FOND */

    doc.setFillColor(
        249,
        249,
        251
    );


    doc.roundedRect(
        18,
        y,
        width,
        boxHeight,
        2.5,
        2.5,
        "F"
    );


    /* BARRE DIRECTIVE */

    doc.setFillColor(
        ...color
    );


    doc.roundedRect(
        18,
        y,
        3,
        boxHeight,
        1.4,
        1.4,
        "F"
    );


    /* DIRECTIVE */

    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(6.8);


    doc.setTextColor(
        ...color
    );


    doc.text(
        cleanPDFText(
            answer.domaineLabel
        ).toUpperCase(),
        26,
        y + 7
    );


    /* TITRE */

    doc.setFontSize(9.2);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        titleLines,
        26,
        y + 13
    );


    let contentY =
        y +
        13 +
        titleLines.length * 4.2;


    /* QUESTION */

    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7.7);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    doc.text(
        questionLines,
        26,
        contentY + 2
    );


    contentY +=
        4 +
        questionLines.length * 3.8;


    /* RÉPONSE */

    addPDFAnswerBadge(
        doc,
        answer.key,
        getShortAnswerLabel(
            answer
        ),
        26,
        contentY
    );


    return y + boxHeight + 4;

}


/* =========================================================
   SYNTHÈSE DES RÉPONSES
========================================================= */

function addPDFSummary(
    doc,
    entries,
    y
) {

    const controls =
        entries.filter(
            answer =>
                String(answer.questionId) !== "zv"
        );


    if (
        controls.length === 0
    ) {

        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.setFontSize(9);


        doc.setTextColor(
            ...PDF_COLORS.secondary
        );


        doc.text(
            "Aucune réponse enregistrée.",
            18,
            y
        );


        return y + 10;

    }


    controls.forEach(
        answer => {

            y = addPDFSummaryAnswer(
                doc,
                answer,
                y
            );

        }
    );


    return y;

}


/* =========================================================
   UN POINT À VÉRIFIER
========================================================= */

function addPDFActionItem(
    doc,
    answer,
    y
) {

    const width =
        doc.internal.pageSize.getWidth() -
        36;


    const isNo =
        answer.key === "non";


    const background =
        isNo
            ? PDF_COLORS.redLight
            : PDF_COLORS.yellowLight;


    const statusColor =
        isNo
            ? PDF_COLORS.red
            : PDF_COLORS.yellow;


    const titleLines =
        doc.splitTextToSize(
            cleanPDFText(
                answer.titre
            ),
            width - 16
        );


    const questionLines =
        doc.splitTextToSize(
            cleanPDFText(
                answer.question
            ),
            width - 16
        );


    const boxHeight =
        Math.max(
            29,
            19 +
            titleLines.length * 4.2 +
            questionLines.length * 3.8
        );


    y = ensurePDFSpace(
        doc,
        y,
        boxHeight + 4,
        "Points à vérifier"
    );


    doc.setFillColor(
        ...background
    );


    doc.roundedRect(
        18,
        y,
        width,
        boxHeight,
        2.5,
        2.5,
        "F"
    );


    /* STATUT */

    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(7);


    doc.setTextColor(
        ...statusColor
    );


    doc.text(
        isNo
            ? "NON"
            : "À VÉRIFIER",
        25,
        y + 7
    );


    /* DIRECTIVE */

    doc.setFontSize(6.7);


    doc.setTextColor(
        ...getPDFDomainColor(
            answer.domaine
        )
    );


    doc.text(
        cleanPDFText(
            answer.domaineLabel
        ).toUpperCase(),
        186,
        y + 7,
        {
            align: "right"
        }
    );


    /* TITRE */

    doc.setFontSize(9.2);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        titleLines,
        25,
        y + 13
    );


    const questionY =
        y +
        15 +
        titleLines.length * 4.2;


    /* QUESTION */

    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7.7);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    doc.text(
        questionLines,
        25,
        questionY
    );


    return y + boxHeight + 4;

}


/* =========================================================
   POINTS À VÉRIFIER
========================================================= */

function addPDFActions(
    doc,
    entries,
    y
) {

    const actions =
        getActionEntries(
            entries
        );


    if (
        actions.length === 0
    ) {

        y = ensurePDFSpace(
            doc,
            y,
            28,
            "Points à vérifier"
        );


        doc.setFillColor(
            ...PDF_COLORS.greenLight
        );


        doc.roundedRect(
            18,
            y,
            174,
            22,
            2.5,
            2.5,
            "F"
        );


        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.setFontSize(8.5);


        doc.setTextColor(
            ...PDF_COLORS.green
        );


        doc.text(
            "Aucun point particulier identifié comme nécessitant une vérification.",
            24,
            y + 9
        );


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.setFontSize(7.2);


        doc.setTextColor(
            ...PDF_COLORS.secondary
        );


        doc.text(
            "Cette synthèse repose uniquement sur les réponses renseignées dans l'autodiagnostic.",
            24,
            y + 15
        );


        return y + 30;

    }


    actions.forEach(
        answer => {

            y = addPDFActionItem(
                doc,
                answer,
                y
            );

        }
    );


    return y;

}


/* =========================================================
   AVERTISSEMENT FINAL
========================================================= */

function addPDFDisclaimer(
    doc,
    y
) {

    y = ensurePDFSpace(
        doc,
        y,
        33,
        "Information"
    );


    doc.setFillColor(
        245,
        247,
        250
    );


    doc.roundedRect(
        18,
        y,
        174,
        27,
        2.5,
        2.5,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(7.8);


    doc.setTextColor(
        ...PDF_COLORS.text
    );


    doc.text(
        "À propos de cet autodiagnostic",
        24,
        y + 8
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7.2);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    const text =
        "Ce document aide à identifier les points pouvant nécessiter une vérification avant un contrôle. Il est établi à partir des réponses renseignées et ne constitue pas une attestation de conformité.";


    doc.text(
        doc.splitTextToSize(
            text,
            160
        ),
        24,
        y + 14
    );


    return y + 34;

}


/* =========================================================
   GÉNÉRER LE PDF
========================================================= */

function generatePDF() {

    /* =====================================================
       VÉRIFICATION DE JSPDF
    ====================================================== */

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        alert(
            "Impossible de générer le PDF. La bibliothèque jsPDF n'est pas disponible."
        );


        return;

    }


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF({

            orientation:
                "portrait",

            unit:
                "mm",

            format:
                "a4"

        });


    /* =====================================================
       RÉPONSES
    ====================================================== */

    const entries =
        sortAnswerEntries(
            getAnswerEntries()
        );


    /* =====================================================
       EN-TÊTE
    ====================================================== */

    let y =
        addPDFMainHeader(
            doc
        );


    /* =====================================================
       IDENTIFICATION
    ====================================================== */

    y = addPDFSectionTitle(
        doc,
        "IDENTIFICATION",
        y
    );


    y = addPDFIdentification(
        doc,
        y
    );


    /* =====================================================
       ORIENTATION
    ====================================================== */

    y = addPDFSectionTitle(
        doc,
        "ORIENTATION",
        y
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7.8);


    doc.setTextColor(
        ...PDF_COLORS.secondary
    );


    doc.text(
        "Directives pour lesquelles l'exploitation est concernée :",
        18,
        y
    );


    y += 6;


    y = addPDFOrientation(
        doc,
        y
    );


    /* =====================================================
       TABLEAU DE BORD
    ====================================================== */

    y = addPDFSectionTitle(
        doc,
        "TABLEAU DE BORD",
        y
    );


    y = addPDFDashboard(
        doc,
        entries,
        y
    );


    /* DATE */

    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(7);


    doc.setTextColor(
        ...PDF_COLORS.muted
    );


    doc.text(
        `Document généré le ${getPDFDate()}`,
        18,
        y
    );


    y += 10;


    /* =====================================================
       SYNTHÈSE DES RÉPONSES
    ====================================================== */

    y = addPDFSectionTitle(
        doc,
        "SYNTHÈSE DES RÉPONSES",
        y
    );


    y = addPDFSummary(
        doc,
        entries,
        y
    );


    /* =====================================================
       POINTS À VÉRIFIER
    ====================================================== */

    y = addPDFSectionTitle(
        doc,
        "POINTS À VÉRIFIER",
        y + 4
    );


    y = addPDFActions(
        doc,
        entries,
        y
    );


    /* =====================================================
       AVERTISSEMENT
    ====================================================== */

    y = addPDFDisclaimer(
        doc,
        y + 5
    );


    /* =====================================================
       FOOTER SUR TOUTES LES PAGES
    ====================================================== */

    const pageCount =
        doc.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= pageCount;
        page++
    ) {

        doc.setPage(
            page
        );


        addPDFFooter(
            doc,
            page
        );

    }


    /* =====================================================
       TÉLÉCHARGEMENT
    ====================================================== */

    doc.save(
        getPDFFileName()
    );

}


/* =========================================================
   FIN DU SCRIPT.JS

   STRUCTURE DU PDF :

   IDENTIFICATION

   ORIENTATION

   TABLEAU DE BORD

   SYNTHÈSE DES RÉPONSES

   POINTS À VÉRIFIER


   VOLONTAIREMENT SUPPRIMÉ :

   ANNEXE — DÉTAIL DES RÉPONSES


   IMPORTANT :

   Les emojis 💧 🌱 🐦 sont utilisés uniquement
   dans l'interface du site.

   Aucun emoji n'est ajouté au PDF.
========================================================= */
