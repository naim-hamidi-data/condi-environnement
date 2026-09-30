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
   DONNÉES DU DIAGNOSTIC
========================================================= */

const questions = [

    /* =====================================================
       EAU
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

        titre: "Protection des eaux souterraines contre les pollutions",

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

        titre: "Stockage des effluents d’élevage",

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
                label: "Non concerné — Je ne stocke pas d’effluents d’élevage"
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
                label: "Oui, je dispose d’au moins un dispositif adapté"
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
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 6,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre: "Lavage du pulvérisateur",

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
                label: "Non concerné — Je fais appel à une entreprise de travaux agricoles ou je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 7,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Contrôle sur place",

        titre: "Stockage des produits phytopharmaceutiques",

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
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 8,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Vérification administrative",

        titre: "Composés phosphorés – Exploitations ICPE",

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
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation"
            }
        ],

        fiche: FICHES.eau
    },


    {
        id: 9,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l'eau",
        type: "Vérification administrative",

        titre: "Bilan de matières – Exploitations ICPE",

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
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation"
            }
        ],

        fiche: FICHES.eau
    },


    /* =====================================================
       OISEAUX / HABITATS
    ====================================================== */

    {
        id: 10,
        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre: "Taille et coupe des arbres et des haies",

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
        domaineLabel: "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre: "Écobuage",

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
        domaineLabel: "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre: "Protection des habitats des espèces d’oiseaux protégées",

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
                label: "Non concerné — Aucune espèce protégée n’est répertoriée comme concernée sur mon exploitation"
            }
        ],

        fiche: FICHES.oiseaux
    },


    {
        id: 13,
        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        type: "Contrôle sur place",

        titre: "Sites Natura 2000",

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
                label: "Non concerné — Mon exploitation n’est pas concernée par un site Natura 2000"
            }
        ],

        fiche: FICHES.oiseaux
    },


    /* =====================================================
       QUESTION D'ORIENTATION ZV
    ====================================================== */

    {
        id: "zv",
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Orientation",

        titre:
            "Situation de l’exploitation vis-à-vis de la zone vulnérable",

        question:
            "Vos parcelles sont-elles situées en zone vulnérable aux nitrates ?",

        reponses: [
            {
                key: "oui",
                label: "Oui, au moins une de mes parcelles est située en zone vulnérable"
            },
            {
                key: "non",
                label: "Non, aucune de mes parcelles n’est située en zone vulnérable"
            },
            {
                key: "verification",
                label: "Je dois vérifier"
            }
        ],

        fiche: FICHES.nitrates
    },


    /* =====================================================
       NITRATES
    ====================================================== */

    {
        id: 14,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative",

        titre: "Périodes d’interdiction d’épandage",

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
        ficheMesure: FICHES_MESURES[14]
    },


    {
        id: 15,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative et justificatifs",

        titre: "Capacités de stockage des effluents d’élevage",

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
                label: "Non concerné — Je ne produis et ne stocke pas d’effluents d’élevage"
            }
        ],

        fiche: FICHES.nitrates,
        ficheMesure: FICHES_MESURES[15]
    },


    {
        id: 16,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative",

        titre: "Équilibre de la fertilisation azotée – PPF et CEP",

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
        ficheMesure: FICHES_MESURES[16]
    },


    {
        id: 17,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative",

        titre: "Respect des doses d’azote",

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
        ficheMesure: FICHES_MESURES[17]
    },


    {
        id: 18,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative",

        titre: "Analyse de sol",

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
        domaineLabel: "Directive nitrates",
        type: "Vérification administrative",

        titre: "Plafond de 170 kg d’azote par hectare",

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
                label: "Non concerné — Je n’utilise pas d’effluents d’élevage, qu’ils soient produits sur mon exploitation ou provenant d’une autre exploitation"
            }
        ],

        fiche: FICHES.nitrates,
        ficheMesure: FICHES_MESURES[19]
    },


    {
        id: 20,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Contrôle sur place et vérification administrative",

        titre: "Conditions particulières d’épandage",

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
        ficheMesure: FICHES_MESURES[20]
    },


    {
        id: 21,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Contrôle sur place et vérification administrative",

        titre: "Couverture des sols",

        question:
            "Respectez-vous les règles relatives à la couverture des sols, notamment les dates d’implantation, la durée de maintien et les dates de destruction des couverts autorisés ?",

        remarque:
            "Consultez la fiche dédiée à la couverture des sols pour connaître les couverts autorisés et les règles applicables à leur implantation et à leur destruction.",

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
        ficheMesure: FICHES_MESURES[21]
    },


    {
        id: 22,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        type: "Contrôle sur place",

        titre: "Bande tampon le long des cours d’eau",

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
        ficheMesure: FICHES_MESURES[22]
    }
];


/* =========================================================
   ETAT DU DIAGNOSTIC
========================================================= */

let currentQuestionIndex = 0;

let answers = {};


/* =========================================================
   COULEURS / LIBELLES
========================================================= */

const ANSWER_CLASSES = {

    oui: "answer-oui",

    non: "answer-non",

    verification: "answer-verification",

    "non-concerne": "answer-non-concerne"
};


const STATUS_CLASSES = {

    oui: "status-oui",

    non: "status-non",

    verification: "status-verification",

    "non-concerne": "status-non-concerne"
};


const STATUS_LABELS = {

    oui: "Oui",

    non: "Non",

    verification: "À vérifier",

    "non-concerne": "Non concerné"
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
   NAVIGATION
========================================================= */

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function goHome() {
    showScreen("homeScreen");
}


function startDiagnostic() {

    currentQuestionIndex = 0;
    answers = {};

    showScreen("diagnosticScreen");

    displayQuestion();
}


function restartDiagnostic() {

    currentQuestionIndex = 0;
    answers = {};

    showScreen("diagnosticScreen");

    displayQuestion();
}


function showResults() {

    displayResults();

    showScreen("resultsScreen");
}


function displayActionsScreen() {

    displayActions();

    showScreen("actionsScreen");
}


/* =========================================================
   QUESTION PRECEDENTE
========================================================= */

function previousQuestion() {

    if (currentQuestionIndex <= 0) {
        return;
    }

    /*
     * Si l'on revient depuis les nitrates et que la question ZV
     * avait indiqué "non", on revient simplement à la question ZV.
     */
    currentQuestionIndex--;

    displayQuestion();
}


/* =========================================================
   AFFICHAGE QUESTION
========================================================= */

function displayQuestion() {

    const question = questions[currentQuestionIndex];

    if (!question) {
        showResults();
        return;
    }


    /*
     * Affichage compteur.
     *
     * La question ZV n'est pas considérée comme l'un des
     * 22 points réglementaires.
     */

    let displayNumber;

    if (question.id === "zv") {
        displayNumber = "—";
    } else {
        displayNumber = String(question.id).padStart(2, "0");
    }


    const progressText = document.getElementById("progressText");

    if (question.id === "zv") {

        progressText.textContent =
            "Orientation · zone vulnérable";

    } else {

        progressText.textContent =
            `Question ${question.id} / 22`;
    }


    /*
     * Progression visuelle
     */

    let progressValue;

    if (question.id === "zv") {

        progressValue = 13 / 22 * 100;

    } else {

        progressValue = question.id / 22 * 100;
    }

    document.getElementById("progressBar").style.width =
        `${Math.min(progressValue, 100)}%`;


    /*
     * Badges
     */

    const domainBadge =
        document.getElementById("domainBadge");

    domainBadge.textContent =
        question.domaineLabel;


    const typeBadge =
        document.getElementById("typeBadge");

    typeBadge.textContent =
        question.type;


    /*
     * Contenu
     */

    document.getElementById("questionNumber").textContent =
        displayNumber;

    document.getElementById("questionTitle").textContent =
        question.titre;

    document.getElementById("questionText").textContent =
        question.question;


    /*
     * Exemples
     */

    const examplesBlock =
        document.getElementById("examplesBlock");

    const examplesText =
        document.getElementById("examplesText");

    if (question.exemples) {

        examplesText.textContent =
            question.exemples;

        examplesBlock.classList.remove("hidden");

    } else {

        examplesText.textContent = "";

        examplesBlock.classList.add("hidden");
    }


    /*
     * Remarque
     */

    const remarkBlock =
        document.getElementById("remarkBlock");

    const remarkText =
        document.getElementById("remarkText");

    if (question.remarque) {

        remarkText.textContent =
            question.remarque;

        remarkBlock.classList.remove("hidden");

    } else {

        remarkText.textContent = "";

        remarkBlock.classList.add("hidden");
    }


    /*
     * Question précédente
     */

    const previousButton =
        document.getElementById("previousQuestionButton");

    previousButton.disabled =
        currentQuestionIndex === 0;


    /*
     * Réponses
     */

    const answersContainer =
        document.getElementById("answersContainer");

    answersContainer.innerHTML = "";


    const savedAnswer =
        answers[question.id];


    question.reponses.forEach(response => {

        const button =
            document.createElement("button");

        const answerClass =
            ANSWER_CLASSES[response.key] || "";

        button.className =
            `answer-button ${answerClass}`;


        if (
            savedAnswer &&
            savedAnswer.key === response.key
        ) {

            button.classList.add(
                "selected-answer"
            );
        }


        button.textContent =
            response.label;


        button.addEventListener(
            "click",
            () => selectAnswer(response)
        );


        answersContainer.appendChild(button);

    });


    /*
     * Fiches
     */

    const regulationLink =
        document.getElementById("regulationLink");

    const supplementLink =
        document.getElementById("supplementLink");


    if (question.fiche) {

        regulationLink.href =
            question.fiche;

        regulationLink.classList.remove(
            "hidden"
        );

    } else {

        regulationLink.classList.add(
            "hidden"
        );
    }


    if (question.ficheMesure) {

        supplementLink.href =
            question.ficheMesure;

        supplementLink.classList.remove(
            "hidden"
        );

    } else {

        supplementLink.classList.add(
            "hidden"
        );
    }
}


/* =========================================================
   SELECTION D'UNE REPONSE
========================================================= */

function selectAnswer(answer) {

    const question =
        questions[currentQuestionIndex];


    answers[question.id] = {

        key: answer.key,

        label: answer.label
    };


    /*
     * QUESTION ZV
     *
     * Non = aucune parcelle en zone vulnérable.
     * On saute donc les questions 14 à 22.
     */

    if (
        question.id === "zv" &&
        answer.key === "non"
    ) {

        const questionAfterNitrates =
            questions.findIndex(
                q => q.id === 22
            );


        if (
            questionAfterNitrates !== -1
        ) {

            currentQuestionIndex =
                questionAfterNitrates + 1;

        } else {

            currentQuestionIndex++;
        }


        if (
            currentQuestionIndex >=
            questions.length
        ) {

            showResults();

        } else {

            displayQuestion();
        }


        return;
    }


    /*
     * Toutes les autres questions
     */

    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        questions.length
    ) {

        showResults();

    } else {

        displayQuestion();
    }
}


/* =========================================================
   STATISTIQUES
========================================================= */

function calculateStats() {

    const stats = {

        total: 0,

        oui: 0,

        non: 0,

        verification: 0,

        nonConcerne: 0
    };


    questions.forEach(question => {

        /*
         * La question ZV est une question d'orientation.
         * Elle n'est pas comptée dans les 22 points.
         */

        if (question.id === "zv") {
            return;
        }


        const answer =
            answers[question.id];


        if (!answer) {
            return;
        }


        stats.total++;


        if (answer.key === "oui") {
            stats.oui++;
        }


        if (answer.key === "non") {
            stats.non++;
        }


        if (answer.key === "verification") {
            stats.verification++;
        }


        if (
            answer.key ===
            "non-concerne"
        ) {

            stats.nonConcerne++;
        }

    });


    return stats;
}


/* =========================================================
   RESULTATS
========================================================= */

function displayResults() {

    const stats =
        calculateStats();


    document.getElementById(
        "statTotal"
    ).textContent =
        stats.total;


    document.getElementById(
        "statOui"
    ).textContent =
        stats.oui;


    document.getElementById(
        "statVerification"
    ).textContent =
        stats.verification;


    document.getElementById(
        "statNon"
    ).textContent =
        stats.non;


    document.getElementById(
        "statNonConcerne"
    ).textContent =
        stats.nonConcerne;


    displayActions();


    const resultsList =
        document.getElementById(
            "resultsList"
        );


    resultsList.innerHTML = "";


    const domains = [

        {
            key: "eau",
            label: "Directive cadre sur l'eau",
            className: "water"
        },

        {
            key: "oiseaux",
            label: "Directive oiseaux et habitats",
            className: "birds"
        },

        {
            key: "nitrates",
            label: "Directive nitrates",
            className: "nitrates"
        }

    ];


    domains.forEach(domain => {

        const domainQuestions =
            questions.filter(
                q =>
                    q.domaine === domain.key &&
                    q.id !== "zv" &&
                    answers[q.id]
            );


        if (
            domainQuestions.length === 0
        ) {

            return;
        }


        const domainWrapper =
            document.createElement("div");

        domainWrapper.className =
            `result-domain ${domain.className}`;


        const title =
            document.createElement("div");

        title.className =
            "result-domain-title";

        title.textContent =
            domain.label;


        domainWrapper.appendChild(title);


        domainQuestions.forEach(question => {

            const answer =
                answers[question.id];


            const item =
                document.createElement("div");

            item.className =
                "result-item";


            const number =
                document.createElement("div");

            number.className =
                "result-number";

            number.textContent =
                String(question.id)
                    .padStart(2, "0");


            const title =
                document.createElement("div");

            title.className =
                "result-title";

            title.textContent =
                question.titre;


            const status =
                document.createElement("div");

            status.className =
                `result-answer ${STATUS_CLASSES[answer.key]}`;

            status.textContent =
                STATUS_LABELS[answer.key];


            item.appendChild(number);

            item.appendChild(title);

            item.appendChild(status);


            domainWrapper.appendChild(item);

        });


        resultsList.appendChild(
            domainWrapper
        );

    });
}


/* =========================================================
   ACTIONS
========================================================= */

function getActionText(answerKey) {

    if (answerKey === "non") {

        return "Ce point a été renseigné « Non ». Il mérite une vérification et, si nécessaire, une action corrective.";
    }


    if (
        answerKey === "verification"
    ) {

        return "Ce point a été renseigné « Je dois vérifier ». Retrouvez la fiche associée pour vérifier votre situation.";
    }


    return "";
}


function createActionElement(question, answer) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        `action-item ${answer.key}`;


    const header =
        document.createElement("div");

    header.className =
        "action-item-header";


    const content =
        document.createElement("div");


    const number =
        document.createElement("div");

    number.className =
        "action-item-number";

    number.textContent =
        `POINT ${String(question.id).padStart(2, "0")}`;


    const title =
        document.createElement("h3");

    title.textContent =
        question.titre;


    const text =
        document.createElement("p");

    text.textContent =
        getActionText(answer.key);


    content.appendChild(number);

    content.appendChild(title);

    content.appendChild(text);


    const status =
        document.createElement("div");

    status.className =
        `result-answer ${STATUS_CLASSES[answer.key]}`;

    status.textContent =
        STATUS_LABELS[answer.key];


    header.appendChild(content);

    header.appendChild(status);


    wrapper.appendChild(header);


    /*
     * Liens vers les fiches
     */

    const links =
        document.createElement("div");

    links.className =
        "regulation-links";

    links.style.marginTop = "14px";


    if (question.fiche) {

        const link =
            document.createElement("a");

        link.href =
            question.fiche;

        link.target =
            "_blank";

        link.rel =
            "noopener";

        link.textContent =
            "Fiche générale →";

        links.appendChild(link);
    }


    if (question.ficheMesure) {

        const link =
            document.createElement("a");

        link.href =
            question.ficheMesure;

        link.target =
            "_blank";

        link.rel =
            "noopener";

        link.textContent =
            "Fiche mesure associée →";

        links.appendChild(link);
    }


    if (links.children.length > 0) {

        wrapper.appendChild(links);
    }


    return wrapper;
}


function displayActions() {

    const actionQuestions =
        questions.filter(question => {

            if (
                question.id === "zv"
            ) {
                return false;
            }


            const answer =
                answers[question.id];


            return (
                answer &&
                (
                    answer.key === "non" ||
                    answer.key === "verification"
                )
            );
        });


    const containers = [

        document.getElementById(
            "actionsList"
        ),

        document.getElementById(
            "fullActionsList"
        )

    ];


    containers.forEach(container => {

        if (!container) {
            return;
        }


        container.innerHTML = "";


        if (
            actionQuestions.length === 0
        ) {

            const empty =
                document.createElement("div");

            empty.className =
                "empty-actions";


            empty.textContent =
                "Aucun point n’a été renseigné « Non » ou « Je dois vérifier » dans vos réponses.";

            container.appendChild(
                empty
            );

            return;
        }


        actionQuestions.forEach(question => {

            const answer =
                answers[question.id];


            container.appendChild(
                createActionElement(
                    question,
                    answer
                )
            );
        });

    });
}


/* =========================================================
   NETTOYAGE TEXTE PDF
========================================================= */

function cleanPDFText(text) {

    return String(text ?? "")

        .replace(
            /[\u{1F1E6}-\u{1F1FF}]/gu,
            ""
        )

        .replace(
            /[\u{1F300}-\u{1FAFF}]/gu,
            ""
        )

        .replace(
            /[\u{1FC00}-\u{1FFFD}]/gu,
            ""
        )

        .replace(
            /[\u{2600}-\u{27BF}]/gu,
            ""
        )

        .replace(
            /[\u{FE0F}\u{200D}]/gu,
            ""
        )

        .replace(
            /\s{2,}/g,
            " "
        )

        .trim();
}


/* =========================================================
   PDF : STATUS
========================================================= */

function getPDFStatusLabel(key) {

    return STATUS_LABELS[key] ||
        "Non renseigné";
}


function addPDFStatusBadge(
    doc,
    x,
    y,
    label,
    key
) {

    const colors =
        PDF_STATUS_COLORS[key] ||
        PDF_STATUS_COLORS["non-concerne"];


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(8);


    const width =
        doc.getTextWidth(label) + 12;


    doc.setFillColor(
        ...colors.background
    );

    doc.setDrawColor(
        ...colors.border
    );


    doc.roundedRect(
        x,
        y,
        width,
        8,
        2,
        2,
        "FD"
    );


    doc.setTextColor(
        ...colors.text
    );


    doc.text(
        label,
        x + 6,
        y + 5.4
    );


    return width;
}


/* =========================================================
   PDF : PAGINATION
========================================================= */

function ensurePDFSpace(
    doc,
    y,
    requiredHeight,
    marginBottom = 20
) {

    const pageHeight =
        doc.internal.pageSize.getHeight();


    if (
        y + requiredHeight >
        pageHeight - marginBottom
    ) {

        doc.addPage();

        return 20;
    }


    return y;
}


/* =========================================================
   PDF : PIED DE PAGE
========================================================= */

function addPDFFooter(doc) {

    const pageCount =
        doc.internal.getNumberOfPages();


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const pageHeight =
        doc.internal.pageSize.getHeight();


    for (
        let i = 1;
        i <= pageCount;
        i++
    ) {

        doc.setPage(i);


        doc.setDrawColor(
            225,
            228,
            231
        );


        doc.line(
            15,
            pageHeight - 14,
            pageWidth - 15,
            pageHeight - 14
        );


        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(7);

        doc.setTextColor(
            135,
            141,
            148
        );


        doc.text(
            "Conditionnalité 31 · Diagnostic environnemental · Haute-Garonne · 2026",
            15,
            pageHeight - 8
        );


        doc.text(
            `${i} / ${pageCount}`,
            pageWidth - 15,
            pageHeight - 8,
            {
                align: "right"
            }
        );
    }
}


/* =========================================================
   PDF : EN-TETE
========================================================= */

function addPDFHeader(
    doc,
    operatorName,
    farmName
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    doc.setFillColor(
        25,
        38,
        55
    );


    doc.roundedRect(
        15,
        15,
        pageWidth - 30,
        48,
        5,
        5,
        "F"
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(19);


    doc.text(
        "DIAGNOSTIC ENVIRONNEMENTAL",
        24,
        35
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(9);


    doc.text(
        "Conditionnalité 31 · Haute-Garonne · 2026",
        24,
        47
    );


    const date =
        new Date().toLocaleDateString(
            "fr-FR"
        );


    doc.setFontSize(8);


    doc.text(
        `Généré le ${date}`,
        pageWidth - 24,
        47,
        {
            align: "right"
        }
    );


    /*
     * Identité
     */

    let y = 78;


    doc.setTextColor(
        35,
        42,
        50
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(10);


    doc.text(
        "IDENTIFICATION",
        15,
        y
    );


    y += 9;


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(9);


    doc.setTextColor(
        90,
        97,
        104
    );


    doc.text(
        `Exploitant : ${cleanPDFText(operatorName) || "Non renseigné"}`,
        15,
        y
    );


    doc.text(
        `Exploitation : ${cleanPDFText(farmName) || "Non renseignée"}`,
        15,
        y + 7
    );


    return y + 22;
}


/* =========================================================
   PDF : TABLEAU DE BORD
========================================================= */

function addPDFDashboard(
    doc,
    stats,
    y
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    y = ensurePDFSpace(
        doc,
        y,
        75
    );


    doc.setTextColor(
        35,
        42,
        50
    );

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(15);


    doc.text(
        "Tableau de bord",
        15,
        y
    );


    y += 10;


    const cards = [

        {
            label: "POINTS ANALYSÉS",
            value: stats.total
        },

        {
            label: "OUI",
            value: stats.oui,
            key: "oui"
        },

        {
            label: "À VÉRIFIER",
            value: stats.verification,
            key: "verification"
        },

        {
            label: "NON",
            value: stats.non,
            key: "non"
        },

        {
            label: "NON CONCERNÉ",
            value: stats.nonConcerne,
            key: "non-concerne"
        }

    ];


    const gap = 4;

    const cardWidth =
        (
            pageWidth -
            30 -
            gap * 4
        ) / 5;


    cards.forEach(
        (card, index) => {

            const x =
                15 +
                index *
                (cardWidth + gap);


            let background =
                [246, 247, 248];

            let text =
                [45, 50, 55];


            if (card.key) {

                const colors =
                    PDF_STATUS_COLORS[
                        card.key
                    ];

                background =
                    colors.background;

                text =
                    colors.text;
            }


            doc.setFillColor(
                ...background
            );


            doc.roundedRect(
                x,
                y,
                cardWidth,
                34,
                4,
                4,
                "F"
            );


            doc.setTextColor(
                ...text
            );


            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(18);


            doc.text(
                String(card.value),
                x + cardWidth / 2,
                y + 17,
                {
                    align: "center"
                }
            );


            doc.setFontSize(6.2);


            doc.text(
                card.label,
                x + cardWidth / 2,
                y + 27,
                {
                    align: "center"
                }
            );
        }
    );


    return y + 47;
}


/* =========================================================
   PDF : QUESTION D'ORIENTATION ZV
========================================================= */

function addPDFZVInfo(
    doc,
    y
) {

    const answer =
        answers["zv"];


    if (!answer) {
        return y;
    }


    y = ensurePDFSpace(
        doc,
        y,
        45
    );


    doc.setFillColor(
        247,
        248,
        249
    );


    doc.roundedRect(
        15,
        y,
        180,
        34,
        4,
        4,
        "F"
    );


    doc.setTextColor(
        35,
        42,
        50
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(9);


    doc.text(
        "ORIENTATION — ZONE VULNÉRABLE",
        22,
        y + 10
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(8);


    const text =
        doc.splitTextToSize(
            cleanPDFText(
                answer.label
            ),
            125
        );


    doc.text(
        text,
        22,
        y + 19
    );


    addPDFStatusBadge(
        doc,
        151,
        y + 7,
        getPDFStatusLabel(
            answer.key
        ),
        answer.key
    );


    return y + 44;
}


/* =========================================================
   PDF : TITRE DE SECTION
========================================================= */

function addPDFSectionTitle(
    doc,
    title,
    y,
    color
) {

    y = ensurePDFSpace(
        doc,
        y,
        25
    );


    doc.setFillColor(
        ...color
    );


    doc.roundedRect(
        15,
        y,
        180,
        18,
        4,
        4,
        "F"
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(10);


    doc.text(
        cleanPDFText(title),
        22,
        y + 11
    );


    return y + 27;
}


/* =========================================================
   PDF : SYNTHESE
========================================================= */

function addPDFSummaryTable(
    doc,
    y
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    y = ensurePDFSpace(
        doc,
        y,
        35
    );


    doc.setTextColor(
        35,
        42,
        50
    );

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(15);


    doc.text(
        "Synthèse des réponses",
        15,
        y
    );


    y += 10;


    /*
     * En-tête
     */

    doc.setFillColor(
        25,
        38,
        55
    );


    doc.roundedRect(
        15,
        y,
        pageWidth - 30,
        14,
        3,
        3,
        "F"
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(7);


    doc.text(
        "N°",
        20,
        y + 9
    );


    doc.text(
        "POINT DE CONTRÔLE",
        34,
        y + 9
    );


    doc.text(
        "RÉPONSE",
        170,
        y + 9
    );


    y += 18;


    questions.forEach(question => {

        if (question.id === "zv") {
            return;
        }


        const answer =
            answers[question.id];


        if (!answer) {
            return;
        }


        const colors =
            PDF_STATUS_COLORS[
                answer.key
            ];


        const title =
            cleanPDFText(
                question.titre
            );


        const lines =
            doc.splitTextToSize(
                title,
                126
            );


        const rowHeight =
            Math.max(
                13,
                lines.length * 4.2 + 7
            );


        y = ensurePDFSpace(
            doc,
            y,
            rowHeight + 3
        );


        /*
         * Fond de ligne
         */

        doc.setFillColor(
            ...colors.background
        );


        doc.roundedRect(
            15,
            y,
            180,
            rowHeight,
            2,
            2,
            "F"
        );


        /*
         * Numéro
         */

        doc.setTextColor(
            90,
            97,
            104
        );


        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(7);


        doc.text(
            String(question.id)
                .padStart(2, "0"),
            20,
            y + 8
        );


        /*
         * Titre
         */

        doc.setTextColor(
            45,
            50,
            55
        );


        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(7.5);


        doc.text(
            lines,
            34,
            y + 7
        );


        /*
         * Réponse
         */

        addPDFStatusBadge(
            doc,
            163,
            y + 3,
            getPDFStatusLabel(
                answer.key
            ),
            answer.key
        );


        y += rowHeight + 4;

    });


    return y + 12;
}


/* =========================================================
   PDF : ANNEXE DETAILLEE
========================================================= */

function addPDFDetailedQuestion(
    doc,
    question,
    answer,
    y
) {

    const pageWidth =
        doc.internal.pageSize.getWidth();


    const colors =
        PDF_STATUS_COLORS[
            answer.key
        ];


    /*
     * Préparation du texte
     */

    const title =
        cleanPDFText(
            question.titre
        );


    const questionText =
        cleanPDFText(
            question.question
        );


    const answerText =
        cleanPDFText(
            answer.label
        );


    const titleLines =
        doc.splitTextToSize(
            title,
            125
        );


    const questionLines =
        doc.splitTextToSize(
            questionText,
            158
        );


    const answerLines =
        doc.splitTextToSize(
            answerText,
            145
        );


    let cardHeight =
        15 +
        titleLines.length * 4.5 +
        7 +
        questionLines.length * 4.3 +
        12 +
        answerLines.length * 4.3 +
        14;


    if (question.remarque) {

        const remarkLines =
            doc.splitTextToSize(
                cleanPDFText(
                    question.remarque
                ),
                158
            );


        cardHeight +=
            12 +
            remarkLines.length * 4;
    }


    if (question.type) {
        cardHeight += 10;
    }


    y = ensurePDFSpace(
        doc,
        y,
        cardHeight + 8
    );


    /*
     * Carte
     */

    doc.setFillColor(
        250,
        251,
        252
    );


    doc.setDrawColor(
        228,
        231,
        235
    );


    doc.roundedRect(
        15,
        y,
        180,
        cardHeight,
        4,
        4,
        "FD"
    );


    /*
     * Barre latérale de statut
     */

    doc.setFillColor(
        ...colors.border
    );


    doc.roundedRect(
        15,
        y,
        4,
        cardHeight,
        2,
        2,
        "F"
    );


    /*
     * Numéro
     */

    doc.setTextColor(
        130,
        137,
        144
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(7);


    doc.text(
        `POINT ${String(question.id).padStart(2, "0")}`,
        24,
        y + 11
    );


    /*
     * Badge
     */

    addPDFStatusBadge(
        doc,
        151,
        y + 5,
        getPDFStatusLabel(
            answer.key
        ),
        answer.key
    );


    /*
     * Titre
     */

    let cursorY =
        y + 21;


    doc.setTextColor(
        32,
        37,
        43
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(11);


    doc.text(
        titleLines,
        24,
        cursorY
    );


    cursorY +=
        titleLines.length * 4.5 +
        7;


    /*
     * Question
     */

    doc.setTextColor(
        75,
        82,
        89
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(8);


    doc.text(
        questionLines,
        24,
        cursorY
    );


    cursorY +=
        questionLines.length * 4.3 +
        9;


    /*
     * Type
     */

    doc.setTextColor(
        135,
        141,
        148
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(7);


    doc.text(
        `TYPE : ${cleanPDFText(question.type)}`,
        24,
        cursorY
    );


    cursorY += 10;


    /*
     * Réponse
     */

    doc.setTextColor(
        100,
        107,
        114
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(7);


    doc.text(
        "RÉPONSE",
        24,
        cursorY
    );


    cursorY += 7;


    doc.setFillColor(
        ...colors.background
    );


    doc.roundedRect(
        24,
        cursorY - 5,
        158,
        Math.max(
            11,
            answerLines.length * 4.3 + 5
        ),
        3,
        3,
        "F"
    );


    doc.setTextColor(
        ...colors.text
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(8);


    doc.text(
        answerLines,
        29,
        cursorY + 2
    );


    cursorY +=
        Math.max(
            11,
            answerLines.length * 4.3 + 5
        ) + 7;


    /*
     * Remarque
     */

    if (question.remarque) {

        const remark =
            doc.splitTextToSize(
                cleanPDFText(
                    question.remarque
                ),
                158
            );


        doc.setTextColor(
            112,
            118,
            125
        );


        doc.setFont(
            "helvetica",
            "italic"
        );

        doc.setFontSize(7);


        doc.text(
            "À noter :",
            24,
            cursorY
        );


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.text(
            remark,
            24,
            cursorY + 5
        );
    }


    return y + cardHeight + 9;
}




/* =========================================================
   PDF : POINTS A VERIFIER
========================================================= */

function addPDFActions(
    doc,
    y
) {

    const actionQuestions =
        questions.filter(
            question => {

                if (
                    question.id === "zv"
                ) {
                    return false;
                }


                const answer =
                    answers[question.id];


                return (
                    answer &&
                    (
                        answer.key === "non" ||
                        answer.key === "verification"
                    )
                );
            }
        );


    y = ensurePDFSpace(
        doc,
        y,
        45
    );


    doc.setTextColor(
        35,
        42,
        50
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(15);


    doc.text(
        "Points à vérifier",
        15,
        y
    );


    y += 10;


    if (
        actionQuestions.length === 0
    ) {

        doc.setFillColor(
            241,
            250,
            244
        );


        doc.roundedRect(
            15,
            y,
            180,
            22,
            4,
            4,
            "F"
        );


        doc.setTextColor(
            35,
            107,
            66
        );


        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(8);


        doc.text(
            "Aucun point n'a été renseigné « Non » ou « Je dois vérifier ».",
            23,
            y + 13
        );


        return y + 32;
    }


    actionQuestions.forEach(
        question => {

            const answer =
                answers[question.id];


            const colors =
                PDF_STATUS_COLORS[
                    answer.key
                ];


            const title =
                cleanPDFText(
                    question.titre
                );


            const lines =
                doc.splitTextToSize(
                    title,
                    125
                );


            const height =
                Math.max(
                    22,
                    lines.length * 4.3 + 13
                );


            y =
                ensurePDFSpace(
                    doc,
                    y,
                    height + 6
                );


            doc.setFillColor(
                ...colors.background
            );


            doc.roundedRect(
                15,
                y,
                180,
                height,
                3,
                3,
                "F"
            );


            doc.setFillColor(
                ...colors.border
            );


            doc.roundedRect(
                15,
                y,
                4,
                height,
                2,
                2,
                "F"
            );


            doc.setTextColor(
                120,
                127,
                134
            );


            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(7);


            doc.text(
                `POINT ${String(question.id).padStart(2, "0")}`,
                23,
                y + 9
            );


            doc.setTextColor(
                45,
                50,
                55
            );


            doc.setFont(
                "helvetica",
                "normal"
            );

            doc.setFontSize(8);


            doc.text(
                lines,
                23,
                y + 16
            );


            addPDFStatusBadge(
                doc,
                158,
                y + 5,
                getPDFStatusLabel(
                    answer.key
                ),
                answer.key
            );


            y += height + 6;
        }
    );


    return y + 10;
}


/* =========================================================
   GENERATION PDF
========================================================= */

function generatePDF() {

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        alert(
            "Le module PDF n'a pas pu être chargé. Vérifiez votre connexion internet puis réessayez."
        );

        return;
    }


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });


    const operatorName =
        document
            .getElementById(
                "operatorName"
            )
            .value
            .trim();


    const farmName =
        document
            .getElementById(
                "farmName"
            )
            .value
            .trim();


    /*
     * Page 1
     */

    let y =
        addPDFHeader(
            doc,
            operatorName,
            farmName
        );


    const stats =
        calculateStats();


    y =
        addPDFDashboard(
            doc,
            stats,
            y
        );


    /*
     * Orientation ZV
     */

    y =
        addPDFZVInfo(
            doc,
            y
        );


    /*
     * Synthèse
     */

    y =
        addPDFSummaryTable(
            doc,
            y
        );


    /*
     * Points à vérifier
     */

    y =
        addPDFActions(
            doc,
            y
        );


    /*
     * Nouvelle page : annexe
     */

    doc.addPage();


    y = 20;


    doc.setTextColor(
        35,
        42,
        50
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(18);


    doc.text(
        "ANNEXE — DÉTAIL DES RÉPONSES",
        15,
        y
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(8);


    doc.setTextColor(
        110,
        117,
        124
    );


    doc.text(
        "Retrouvez ci-dessous le détail des réponses renseignées dans le diagnostic.",
        15,
        y + 8
    );


    y += 20;


    /*
     * Annexe
     */

    y =
        addPDFAnnex(
            doc,
            y
        );


    /*
     * Mention finale
     */

    y =
        ensurePDFSpace(
            doc,
            y,
            45
        );


    doc.setFillColor(
        247,
        248,
        249
    );


    doc.roundedRect(
        15,
        y,
        180,
        34,
        4,
        4,
        "F"
    );


    doc.setTextColor(
        35,
        42,
        50
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(8);


    doc.text(
        "IMPORTANT",
        23,
        y + 10
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(7.5);


    const disclaimer =
        doc.splitTextToSize(
            "Cet outil constitue une aide à l'autodiagnostic. Il ne constitue pas une attestation de conformité réglementaire. Les réponses renseignées correspondent aux informations déclarées par l'utilisateur au moment de la génération du document.",
            158
        );


    doc.text(
        disclaimer,
        23,
        y + 17
    );


    /*
     * Pieds de page
     */

    addPDFFooter(doc);


    /*
     * Nom du fichier
     */

    const safeOperator =
        cleanPDFText(
            operatorName
        )
        .replace(
            /[^a-zA-Z0-9À-ÿ_-]/g,
            "_"
        );


    const filename =
        safeOperator
            ? `Diagnostic_conditionnalite_31_${safeOperator}.pdf`
            : "Diagnostic_conditionnalite_31_2026.pdf";


    doc.save(filename);
}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showScreen(
            "homeScreen"
        );

    }
);
