/* ==================================================
   CONDITIONNALITÉ 31
   AUTODIAGNOSTIC
================================================== */


/* ==================================================
   DONNÉES DU DIAGNOSTIC
================================================== */

const questions = [

    /* ==================================================
       EAU
    ================================================== */

    {
        id: 1,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Prélèvement pour l’irrigation",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Disposez-vous d’un document attestant que vos prélèvements d’eau pour l’irrigation sont autorisés (autorisation de prélèvement, facture de l’année en cours, bulletin d’adhésion à une ASA, etc.) ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier que le prélèvement d’eau utilisé pour l’irrigation est autorisé et conserver le justificatif correspondant.",

        regulation: ""
    },


    {
        id: 2,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Évaluation des volumes prélevés",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Disposez-vous d’un moyen approprié permettant d’évaluer et d’enregistrer les volumes d’eau prélevés, par exemple un compteur volumétrique ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence et le fonctionnement du dispositif permettant d’évaluer et d’enregistrer les volumes prélevés.",

        regulation: ""
    },


    {
        id: 3,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Protection des eaux souterraines contre les pollutions",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Votre exploitation est-elle exempte de rejets directs dans les sols de substances susceptibles de polluer les eaux souterraines, telles que des produits phytopharmaceutiques, carburants et lubrifiants, produits de désinfection ou de santé animale, fertilisants, engrais azotés ou phosphatés ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Identifier et supprimer les situations susceptibles d'entraîner un rejet direct de substances polluantes dans les sols.",

        remarque:
            "Le contrôleur peut vérifier ce point directement sur l’exploitation le jour du contrôle.",

        regulation: ""
    },


    {
        id: 4,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Stockage des effluents d’élevage",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Respectez-vous les distances applicables entre les installations de stockage des effluents d’élevage et les points d’eau souterrains ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je ne stocke pas d’effluents d’élevage",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier les distances applicables entre les installations de stockage des effluents et les points d’eau souterrains.",

        regulation: ""
    },


    {
        id: 5,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Prévention des retours et débordements lors du remplissage du pulvérisateur",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Lors du remplissage du pulvérisateur, disposez-vous d’au moins un dispositif permettant de prévenir le retour de produits vers le réseau d’eau et de limiter les risques de débordement ?",

        exemples: [
            "clapet anti-retour",
            "potence",
            "cuve intermédiaire ou de pré-stockage",
            "volucompteur à arrêt automatique",
            "autre dispositif équivalent"
        ],

        reponses: [
            {
                label: "Oui, je dispose d’au moins un dispositif adapté",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence d’un dispositif adapté permettant de prévenir le retour de produits vers le réseau d’eau et de limiter les débordements.",

        remarque:
            "La simple présence de l’exploitant lors du remplissage du pulvérisateur ne constitue pas, à elle seule, un dispositif de prévention du débordement ou du retour de produits.",

        regulation: ""
    },


    {
        id: 6,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Lavage du pulvérisateur",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Lorsque le lavage du pulvérisateur n’est pas réalisé au champ, disposez-vous d’un dispositif permettant de récupérer les effluents issus du lavage ?",

        exemples: [
            "aire ou bâche adaptée",
            "bac récupérateur",
            "autre dispositif permettant de récupérer les effluents"
        ],

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je fais appel à une entreprise de travaux agricoles ou je n’utilise pas de produits phytopharmaceutiques",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence d’un dispositif permettant de récupérer les effluents issus du lavage lorsque celui-ci est réalisé hors du champ.",

        regulation: ""
    },


    {
        id: 7,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Stockage des produits phytopharmaceutiques",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Les produits phytopharmaceutiques présents sur votre exploitation sont-ils stockés dans un local ou un espace dédié à leur stockage ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier que les produits phytopharmaceutiques sont stockés dans un espace adapté et dédié.",

        regulation: ""
    },


    {
        id: 8,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Composés phosphorés – Exploitations ICPE",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Disposez-vous d’un cahier d’enregistrement des pratiques (CEP) permettant de suivre les apports de composés phosphorés organiques ou minéraux, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier la tenue du cahier d’enregistrement des pratiques relatif aux apports de composés phosphorés lorsque l’obligation s’applique.",

        regulation: ""
    },


    {
        id: 9,
        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Bilan de matières – Exploitations ICPE",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Avez-vous réalisé le bilan de matières nécessaire pour justifier la conformité des quantités de phosphore apportées, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier si l’obligation s’applique à l’exploitation et, le cas échéant, réaliser ou conserver le bilan de matières requis.",

        regulation: ""
    },


    /* ==================================================
       OISEAUX & HABITATS
    ================================================== */

    {
        id: 10,
        domaine: "birds",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Taille et coupe des arbres et des haies",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Respectez-vous la période d’interdiction de taille et de coupe des arbres et des haies du 16 mars au 15 août, sauf intervention imposée par une autorité extérieure pour des raisons de sécurité ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier les interventions réalisées ou prévues sur les arbres et les haies et respecter la période d’interdiction indiquée.",

        regulation: ""
    },


    {
        id: 11,
        domaine: "birds",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Écobuage",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Vos pratiques d’écobuage respectent-elles la réglementation applicable et, lorsque cela est nécessaire, disposez-vous d’une dérogation préfectorale ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier les règles applicables à l’écobuage et conserver la dérogation préfectorale lorsqu’elle est nécessaire.",

        regulation: ""
    },


    {
        id: 12,
        domaine: "birds",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Protection des habitats des espèces d’oiseaux protégées",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Préservez-vous les habitats des espèces d’oiseaux protégées présentes sur votre exploitation et évitez-vous toute destruction ou dégradation interdite de ces habitats ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Aucune espèce protégée n’est répertoriée comme concernée sur mon exploitation",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence éventuelle d’habitats concernés et éviter toute destruction ou dégradation interdite.",

        regulation: ""
    },


    {
        id: 13,
        domaine: "birds",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Sites Natura 2000",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Évitez-vous les travaux ou interventions susceptibles d’affecter de manière significative un site Natura 2000 ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par un site Natura 2000",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier si l’exploitation ou les travaux envisagés sont concernés par un site Natura 2000 et identifier les éventuelles démarches nécessaires.",

        regulation: ""
    },


    /* ==================================================
       NITRATES
    ================================================== */

    {
        id: 14,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Périodes d’interdiction d’épandage",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Respectez-vous les périodes pendant lesquelles l’épandage des fertilisants azotés est interdit ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier les périodes d’interdiction d’épandage applicables à votre situation et comparer vos pratiques à ce calendrier.",

        remarque:
            "Consultez le document présentant les périodes d’interdiction d’épandage applicables à votre situation.",

        regulation: ""
    },


    {
        id: 15,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Capacités de stockage des effluents d’élevage",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Disposez-vous d’installations de stockage des effluents d’élevage étanches et d’une capacité suffisante pour respecter les périodes d’interdiction d’épandage ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je ne produis et ne stocke pas d’effluents d’élevage",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier l’étanchéité et la capacité des installations de stockage des effluents d’élevage au regard des périodes d’interdiction d’épandage.",

        regulation: ""
    },


    {
        id: 16,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Équilibre de la fertilisation azotée – PPF et CEP",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Disposez-vous d’un plan prévisionnel de fumure (PPF) et d’un cahier d’enregistrement des pratiques (CEP) permettant de justifier le respect de l’équilibre de la fertilisation azotée ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier que le PPF et le CEP sont disponibles, à jour et permettent de justifier l’équilibre de la fertilisation azotée.",

        remarque:
            "Même si vous ne réalisez aucun épandage, vous devez tenir à jour un PPF et un CEP lorsque vous êtes concerné par cette obligation. Dans ce cas, renseignez les îlots et les parcelles sur lesquels aucun épandage n’est réalisé.",

        regulation: ""
    },


    {
        id: 17,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Respect des doses d’azote",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Les doses d’azote prévues dans votre PPF respectent-elles les doses maximales calculées conformément aux règles applicables ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Comparer les doses prévues dans le PPF aux doses maximales applicables.",

        regulation: ""
    },


    {
        id: 18,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Analyse de sol",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "Disposez-vous des analyses de sol requises par la réglementation, notamment concernant le reliquat d’azote ou, pour les situations concernées, l’analyse de matière organique des prairies ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier les analyses de sol requises pour votre situation et conserver les résultats correspondants.",

        regulation: ""
    },


    {
        id: 19,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Plafond de 170 kg d’azote par hectare",

        type: "administratif",
        typeLabel: "📄 Vérification administrative",

        question:
            "La quantité d’azote contenue dans les effluents d’élevage épandus sur votre exploitation respecte-t-elle le plafond annuel de 170 kg d’azote par hectare de SAU ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas d’effluents d’élevage, qu’ils soient produits sur mon exploitation ou provenant d’une autre exploitation",
                statut: "non-concerne"
            }
        ],

        action:
            "Vérifier le calcul de la quantité d’azote issue des effluents d’élevage rapportée à la SAU.",

        regulation: ""
    },


    {
        id: 20,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Conditions particulières d’épandage",

        type: "mixte",
        typeLabel: "👀 Contrôle sur place · 📄 Vérification administrative",

        question:
            "Respectez-vous les conditions particulières applicables aux épandages, notamment concernant les sols à forte pente et les sols détrempés, inondés, gelés ou enneigés, ainsi que les distances à respecter à proximité des cours d’eau ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier les conditions d’épandage applicables aux parcelles et les distances à respecter à proximité des cours d’eau.",

        regulation: ""
    },


    {
        id: 21,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Couverture des sols",

        type: "mixte",
        typeLabel: "👀 Contrôle sur place · 📄 Vérification administrative",

        question:
            "Respectez-vous les règles relatives à la couverture des sols, notamment les dates d’implantation, la durée de maintien et les dates de destruction des couverts autorisés ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier les types de couverts utilisés, leurs dates d’implantation, leur durée de maintien et leurs dates de destruction.",

        remarque:
            "Consultez la fiche dédiée à la couverture des sols pour connaître les couverts autorisés et les règles applicables à leur implantation et à leur destruction.",

        regulation: ""
    },


    {
        id: 22,
        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Bande tampon le long des cours d’eau",

        type: "sur-place",
        typeLabel: "👀 Contrôle sur place",

        question:
            "Entretenez-vous correctement la bande tampon végétalisée le long des cours d’eau concernés ?",

        reponses: [
            {
                label: "Oui",
                statut: "verifie"
            },
            {
                label: "Non",
                statut: "action"
            },
            {
                label: "Je dois vérifier",
                statut: "verification"
            }
        ],

        action:
            "Vérifier la présence et l’entretien correct de la bande tampon végétalisée le long des cours d’eau concernés.",

        regulation: ""
    }

];


/* ==================================================
   VARIABLES
================================================== */

let currentQuestionIndex = 0;

let answers = [];


/* ==================================================
   ÉLÉMENTS DOM
================================================== */

const screens = {

    home:
        document.getElementById("homeScreen"),

    diagnostic:
        document.getElementById("diagnosticScreen"),

    results:
        document.getElementById("resultsScreen"),

    actions:
        document.getElementById("actionsScreen")

};


/* ==================================================
   NAVIGATION
================================================== */

function showScreen(screen) {

    Object.values(screens).forEach(
        element => element.classList.remove("active")
    );

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function startDiagnostic() {

    currentQuestionIndex = 0;

    answers = [];

    showScreen(screens.diagnostic);

    displayQuestion();
}


function restartDiagnostic() {

    currentQuestionIndex = 0;

    answers = [];

    document.getElementById("operatorName").value = "";

    document.getElementById("farmName").value = "";

    showScreen(screens.home);
}


function showResults() {

    showScreen(screens.results);

    displayResults();
}


function showActions() {

    showScreen(screens.actions);

    displayActions();
}


/* ==================================================
   AFFICHAGE QUESTION
================================================== */

function displayQuestion() {

    const question =
        questions[currentQuestionIndex];


    /* COMPTEUR */

    document.getElementById("questionNumber")
        .textContent =
        currentQuestionIndex + 1;

    document.getElementById("questionTotal")
        .textContent =
        questions.length;


    /* PROGRESSION */

    const progress =
        ((currentQuestionIndex + 1) /
        questions.length) * 100;

    document.getElementById("progressBar")
        .style.width =
        `${progress}%`;


    /* DOMAINE */

    const domainBadge =
        document.getElementById("domainBadge");

    domainBadge.textContent =
        `${question.domaineIcon} ${question.domaineLabel}`;

    domainBadge.className =
        `domain-badge ${question.domaineClass}`;


    /* TYPE */

    document.getElementById("controlTypeBadge")
        .textContent =
        question.typeLabel;


    /* TITRE */

    document.getElementById("questionTitle")
        .textContent =
        question.titre;


    /* QUESTION */

    document.getElementById("questionText")
        .textContent =
        question.question;


    /* EXEMPLES */

    const examplesBox =
        document.getElementById("examplesBox");

    const examplesList =
        document.getElementById("examplesList");

    examplesList.innerHTML = "";

    if (question.exemples) {

        question.exemples.forEach(
            exemple => {

                const li =
                    document.createElement("li");

                li.textContent =
                    exemple;

                examplesList.appendChild(li);
            }
        );

        examplesBox.classList.remove("hidden");

    } else {

        examplesBox.classList.add("hidden");
    }


    /* REMARQUE */

    const remarkBox =
        document.getElementById("remarkBox");

    const remarkText =
        document.getElementById("remarkText");

    if (question.remarque) {

        remarkText.textContent =
            question.remarque;

        remarkBox.classList.remove("hidden");

    } else {

        remarkBox.classList.add("hidden");
    }


    /* RÉGLEMENTATION */

    const regulationLink =
        document.getElementById("regulationLink");

    if (question.regulation) {

        regulationLink.href =
            question.regulation;

        regulationLink.classList.remove("disabled");

    } else {

        regulationLink.href = "#";

        regulationLink.classList.add("disabled");

        regulationLink.textContent =
            "Référence à ajouter →";
    }


    /* RÉPONSES */

    const answersContainer =
        document.getElementById("answersContainer");

    answersContainer.innerHTML = "";


    question.reponses.forEach(
        response => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";


            const label =
                document.createElement("span");

            label.className =
                "answer-label";

            label.textContent =
                response.label;


            const arrow =
                document.createElement("span");

            arrow.className =
                "answer-arrow";

            arrow.textContent =
                "→";


            button.appendChild(label);

            button.appendChild(arrow);


            button.addEventListener(
                "click",
                () => selectAnswer(response)
            );


            answersContainer.appendChild(button);

        }
    );

}


/* ==================================================
   RÉPONSE
================================================== */

function selectAnswer(response) {

    const question =
        questions[currentQuestionIndex];


    answers[currentQuestionIndex] = {

        questionId:
            question.id,

        question:
            question,

        answer:
            response

    };


    if (
        currentQuestionIndex <
        questions.length - 1
    ) {

        currentQuestionIndex++;

        displayQuestion();

    } else {

        displayResults();

        showScreen(screens.results);
    }

}


/* ==================================================
   STATISTIQUES
================================================== */

function calculateStats() {

    const stats = {

        verifie: 0,

        verification: 0,

        action: 0,

        "non-concerne": 0

    };


    answers.forEach(
        item => {

            if (!item) return;

            stats[item.answer.statut]++;

        }
    );


    return stats;
}


/* ==================================================
   LIBELLÉS
================================================== */

function getStatusLabel(status) {

    const labels = {

        verifie:
            "🟢 Vérifié",

        verification:
            "🟠 À vérifier",

        action:
            "🔴 Action",

        "non-concerne":
            "⚪ Non concerné"

    };

    return labels[status];
}


/* ==================================================
   RÉSULTATS
================================================== */

function displayResults() {

    const stats =
        calculateStats();


    document.getElementById("greenCount")
        .textContent =
        stats.verifie;


    document.getElementById("orangeCount")
        .textContent =
        stats.verification;


    document.getElementById("redCount")
        .textContent =
        stats.action;


    document.getElementById("grayCount")
        .textContent =
        stats["non-concerne"];


    /* RÉSUMÉ */

    const summary =
        document.getElementById("resultsSummary");


    let summaryText =
        `Votre diagnostic a identifié `;


    const totalPoints =
        answers.filter(Boolean).length;


    summaryText +=
        `${totalPoints} point${totalPoints > 1 ? "s" : ""}.`;


    if (stats.verification > 0) {

        summaryText +=
            ` ${stats.verification} point${stats.verification > 1 ? "s" : ""} mérite${stats.verification > 1 ? "nt" : ""} une vérification supplémentaire.`;

    }


    if (stats.action > 0) {

        summaryText +=
            ` ${stats.action} action${stats.action > 1 ? "s" : ""} à prévoir.`;
    }


    summary.textContent =
        summaryText;


    /* LISTE */

    const resultsList =
        document.getElementById("resultsList");


    resultsList.innerHTML = "";


    const domains = [
        "water",
        "birds",
        "nitrates"
    ];


    domains.forEach(
        domain => {

            const domainAnswers =
                answers.filter(
                    item =>
                        item &&
                        item.question.domaineClass === domain
                );


            if (!domainAnswers.length)
                return;


            const first =
                domainAnswers[0].question;


            const domainTitle =
                document.createElement("div");

            domainTitle.className =
                `result-domain ${domain}`;


            domainTitle.textContent =
                `${first.domaineIcon} ${first.domaineLabel}`;


            resultsList.appendChild(domainTitle);


            domainAnswers.forEach(
                item => {

                    const card =
                        document.createElement("div");

                    card.className =
                        `result-item status-${item.answer.statut}`;


                    const top =
                        document.createElement("div");

                    top.className =
                        "result-top";


                    const title =
                        document.createElement("div");


                    const h3 =
                        document.createElement("h3");

                    h3.className =
                        "result-title";

                    h3.textContent =
                        item.question.titre;


                    const type =
                        document.createElement("div");

                    type.className =
                        "result-type";

                    type.textContent =
                        item.question.typeLabel;


                    title.appendChild(h3);

                    title.appendChild(type);


                    const pill =
                        document.createElement("span");

                    pill.className =
                        `status-pill ${item.answer.statut}`;

                    pill.textContent =
                        getStatusLabel(
                            item.answer.statut
                        );


                    top.appendChild(title);

                    top.appendChild(pill);


                    card.appendChild(top);


                    const answer =
                        document.createElement("div");

                    answer.className =
                        "result-answer";

                    answer.innerHTML =
                        `<strong>Réponse :</strong> ${escapeHTML(item.answer.label)}`;


                    card.appendChild(answer);


                    if (
                        item.answer.statut === "action" ||
                        item.answer.statut === "verification"
                    ) {

                        const action =
                            document.createElement("div");

                        action.className =
                            "result-action";

                        action.innerHTML =
                            `<strong>À faire :</strong> ${escapeHTML(item.question.action)}`;


                        card.appendChild(action);

                    }


                    resultsList.appendChild(card);

                }
            );

        }
    );

}


/* ==================================================
   ACTIONS
================================================== */

function displayActions() {

    const actionsList =
        document.getElementById("actionsList");


    actionsList.innerHTML = "";


    const domains = [
        "water",
        "birds",
        "nitrates"
    ];


    domains.forEach(
        domain => {

            const items =
                answers.filter(
                    item =>
                        item &&
                        item.question.domaineClass === domain &&
                        (
                            item.answer.statut === "action" ||
                            item.answer.statut === "verification"
                        )
                );


            if (!items.length)
                return;


            const title =
                document.createElement("div");

            title.className =
                `action-domain-title ${domain}`;


            title.textContent =
                `${items[0].question.domaineIcon} ${items[0].question.domaineLabel}`;


            actionsList.appendChild(title);


            items.forEach(
                item => {

                    const card =
                        document.createElement("div");

                    card.className =
                        "action-card";


                    const h3 =
                        document.createElement("h3");

                    h3.textContent =
                        `${getStatusLabel(item.answer.statut)} · ${item.question.titre}`;


                    const p =
                        document.createElement("p");

                    p.textContent =
                        item.question.action;


                    card.appendChild(h3);

                    card.appendChild(p);


                    actionsList.appendChild(card);

                }
            );

        }
    );


    if (!actionsList.children.length) {

        const empty =
            document.createElement("div");

        empty.className =
            "results-summary";

        empty.textContent =
            "Aucune action particulière n’a été identifiée à partir de vos réponses.";

        actionsList.appendChild(empty);
    }

}


/* ==================================================
   ÉCHAPPEMENT HTML
================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;
}


/* ==================================================
   PDF
================================================== */

function generatePDF() {

    if (!window.jspdf) {

        alert(
            "La bibliothèque PDF n’a pas pu être chargée. Vérifiez votre connexion internet puis réessayez."
        );

        return;
    }


    const {
        jsPDF
    } = window.jspdf;


    const operatorName =
        document
            .getElementById("operatorName")
            .value
            .trim()
        || "Non renseigné";


    const farmName =
        document
            .getElementById("farmName")
            .value
            .trim()
        || "Non renseignée";


    const today =
        new Date();


    const date =
        today.toLocaleDateString(
            "fr-FR"
        );


    const time =
        today.toLocaleTimeString(
            "fr-FR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const doc =
        new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const pageHeight =
        doc.internal.pageSize.getHeight();


    const margin = 15;

    const contentWidth =
        pageWidth - margin * 2;


    let y = 20;


    /* ------------------------------------------
       COULEURS PDF
    ------------------------------------------ */

    const colors = {

        text: [29, 29, 31],

        secondary: [100, 100, 105],

        green: [34, 160, 107],

        orange: [229, 138, 0],

        red: [214, 69, 69],

        gray: [134, 134, 139],

        nitrates: [217, 154, 0],

        water: [22, 119, 255],

        birds: [40, 166, 111]

    };


    /* ------------------------------------------
       OUTILS
    ------------------------------------------ */

    function addFooter() {

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(8);

        doc.setTextColor(
            140,
            140,
            145
        );


        doc.text(
            "Conditionnalité 31 · Haute-Garonne · 2026",
            margin,
            pageHeight - 8
        );


        doc.text(
            `Page ${doc.internal.getNumberOfPages()}`,
            pageWidth - 30,
            pageHeight - 8
        );
    }


    function newPageIfNeeded(
        needed = 20
    ) {

        if (
            y + needed >
            pageHeight - 18
        ) {

            addFooter();

            doc.addPage();

            y = 20;
        }
    }


    function wrappedText(
        text,
        x,
        width,
        fontSize = 9,
        color = colors.text,
        lineHeight = 4.5
    ) {

        doc.setFontSize(
            fontSize
        );

        doc.setTextColor(
            ...color
        );

        const lines =
            doc.splitTextToSize(
                text,
                width
            );


        doc.text(
            lines,
            x,
            y
        );


        y +=
            lines.length *
            lineHeight;


        return lines.length;
    }


    function domainColor(domain) {

        if (domain === "nitrates")
            return colors.nitrates;

        if (domain === "water")
            return colors.water;

        return colors.birds;
    }


    function statusColor(status) {

        if (status === "verifie")
            return colors.green;

        if (status === "verification")
            return colors.orange;

        if (status === "action")
            return colors.red;

        return colors.gray;
    }


    /* ------------------------------------------
       EN-TÊTE
    ------------------------------------------ */

    doc.setFillColor(
        29,
        29,
        31
    );

    doc.rect(
        0,
        0,
        pageWidth,
        42,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(21);

    doc.setTextColor(
        255,
        255,
        255
    );


    doc.text(
        "CONDITIONNALITÉ 31",
        margin,
        17
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);


    doc.text(
        "Diagnostic environnemental · Haute-Garonne · 2026",
        margin,
        25
    );


    doc.setFontSize(8);


    doc.text(
        `Généré le ${date} à ${time}`,
        margin,
        33
    );


    y = 55;


    /* ------------------------------------------
       INFORMATIONS
    ------------------------------------------ */

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(14);

    doc.setTextColor(
        ...colors.text
    );


    doc.text(
        "Informations du diagnostic",
        margin,
        y
    );


    y += 9;


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);


    doc.text(
        `Exploitant : ${operatorName}`,
        margin,
        y
    );

    y += 6;


    doc.text(
        `Exploitation : ${farmName}`,
        margin,
        y
    );

    y += 6;


    doc.text(
        `Date : ${date}`,
        margin,
        y
    );

    y += 14;


    /* ------------------------------------------
       SYNTHÈSE
    ------------------------------------------ */

    const stats =
        calculateStats();


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(14);


    doc.text(
        "Synthèse",
        margin,
        y
    );


    y += 9;


    const summaryItems = [

        [
            "Vérifiés",
            stats.verifie,
            colors.green
        ],

        [
            "À vérifier",
            stats.verification,
            colors.orange
        ],

        [
            "Actions",
            stats.action,
            colors.red
        ],

        [
            "Non concernés",
            stats["non-concerne"],
            colors.gray
        ]

    ];


    const boxWidth =
        (contentWidth - 9) / 4;


    summaryItems.forEach(
        (item, index) => {

            const x =
                margin +
                index *
                (boxWidth + 3);


            doc.setFillColor(
                248,
                248,
                249
            );


            doc.roundedRect(
                x,
                y,
                boxWidth,
                21,
                3,
                3,
                "F"
            );


            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(15);

            doc.setTextColor(
                ...item[2]
            );


            doc.text(
                String(item[1]),
                x + 5,
                y + 9
            );


            doc.setFont(
                "helvetica",
                "normal"
            );

            doc.setFontSize(7);

            doc.setTextColor(
                ...colors.secondary
            );


            doc.text(
                item[0],
                x + 5,
                y + 16
            );

        }
    );


    y += 34;


    /* ------------------------------------------
       RÉSULTATS PAR DOMAINE
    ------------------------------------------ */

    const domains = [
        "water",
        "birds",
        "nitrates"
    ];


    domains.forEach(
        domain => {

            const domainAnswers =
                answers.filter(
                    item =>
                        item &&
                        item.question.domaineClass === domain
                );


            if (!domainAnswers.length)
                return;


            newPageIfNeeded(35);


            const first =
                domainAnswers[0].question;


            const color =
                domainColor(domain);


            doc.setFillColor(
                ...color
            );


            doc.roundedRect(
                margin,
                y - 5,
                contentWidth,
                11,
                3,
                3,
                "F"
            );


            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(11);

            doc.setTextColor(
                255,
                255,
                255
            );


            doc.text(
                `${first.domaineIcon} ${first.domaineLabel}`,
                margin + 5,
                y + 2
            );


            y += 15;


            domainAnswers.forEach(
                item => {

                    newPageIfNeeded(34);


                    const status =
                        item.answer.statut;


                    const statusCol =
                        statusColor(status);


                    /* carte */

                    doc.setFillColor(
                        249,
                        249,
                        250
                    );


                    doc.roundedRect(
                        margin,
                        y - 4,
                        contentWidth,
                        31,
                        3,
                        3,
                        "F"
                    );


                    /* ligne statut */

                    doc.setFillColor(
                        ...statusCol
                    );


                    doc.roundedRect(
                        margin,
                        y - 4,
                        3,
                        31,
                        1.5,
                        1.5,
                        "F"
                    );


                    /* titre */

                    doc.setFont(
                        "helvetica",
                        "bold"
                    );

                    doc.setFontSize(9);

                    doc.setTextColor(
                        ...colors.text
                    );


                    doc.text(
                        item.question.titre,
                        margin + 7,
                        y + 2
                    );


                    /* statut */

                    doc.setFont(
                        "helvetica",
                        "bold"
                    );

                    doc.setFontSize(7);

                    doc.setTextColor(
                        ...statusCol
                    );


                    doc.text(
                        getStatusLabel(status),
                        pageWidth - margin - 30,
                        y + 2
                    );


                    y += 7;


                    /* type */

                    doc.setFont(
                        "helvetica",
                        "normal"
                    );

                    doc.setFontSize(7);

                    doc.setTextColor(
                        ...colors.secondary
                    );


                    doc.text(
                        item.question.typeLabel,
                        margin + 7,
                        y
                    );


                    y += 5;


                    /* réponse */

                    const answerText =
                        `Réponse : ${item.answer.label}`;


                    doc.setTextColor(
                        ...colors.secondary
                    );


                    wrappedText(
                        answerText,
                        margin + 7,
                        contentWidth - 14,
                        7,
                        colors.secondary,
                        3.5
                    );


                    /* action */

                    if (
                        status === "action" ||
                        status === "verification"
                    ) {

                        doc.setFont(
                            "helvetica",
                            "bold"
                        );

                        doc.setFontSize(7);

                        doc.setTextColor(
                            ...statusCol
                        );


                        doc.text(
                            "À faire :",
                            margin + 7,
                            y + 2
                        );


                        y += 5;


                        wrappedText(
                            item.question.action,
                            margin + 7,
                            contentWidth - 14,
                            7,
                            colors.secondary,
                            3.5
                        );

                    }


                    y += 7;

                }
            );

        }
    );


    /* ------------------------------------------
       AVERTISSEMENT
    ------------------------------------------ */

    newPageIfNeeded(45);


    doc.setFillColor(
        255,
        248,
        232
    );


    doc.roundedRect(
        margin,
        y,
        contentWidth,
        36,
        4,
        4,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(10);

    doc.setTextColor(
        140,
        90,
        0
    );


    doc.text(
        "Important",
        margin + 6,
        y + 9
    );


    y += 15;


    wrappedText(
        "Cet outil vous aide à identifier les points qui méritent une vérification. Il ne constitue pas une attestation de conformité réglementaire.",
        margin + 6,
        contentWidth - 12,
        8,
        [100, 80, 30],
        4
    );


    y += 10;


    /* ------------------------------------------
       DONNÉES
    ------------------------------------------ */

    newPageIfNeeded(30);


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(11);

    doc.setTextColor(
        ...colors.text
    );


    doc.text(
        "Données et confidentialité",
        margin,
        y
    );


    y += 8;


    wrappedText(
        "Votre diagnostic est généré localement dans votre navigateur. Aucune donnée n'est enregistrée sur ce site.",
        margin,
        contentWidth,
        8,
        colors.secondary,
        4
    );


    y += 5;


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(8);

    doc.setTextColor(
        ...colors.secondary
    );


    doc.text(
        "Version du diagnostic : 2026.1",
        margin,
        y
    );


    /* ------------------------------------------
       FOOTER
    ------------------------------------------ */

    addFooter();


    /* ------------------------------------------
       NOM DU FICHIER
    ------------------------------------------ */

    const safeName =
        operatorName
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .replace(
                /[^a-zA-Z0-9]/g,
                "_"
            )
            .substring(
                0,
                40
            );


    const filename =
        `Diagnostic_Conditionnalite_31_${safeName}_${date.replaceAll("/", "-")}.pdf`;


    doc.save(filename);

}
