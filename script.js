/* =========================================================
   CONDITIONNALITÉ 31 · 2026
   AUTODIAGNOSTIC ENVIRONNEMENTAL
========================================================= */


/* =========================================================
   FICHES RÉGLEMENTAIRES
========================================================= */

const FICHES = {

    eau:
        "Conditionnalite-2026_fiche-technique_environnement-1_directive_cadre_eau.pdf",

    nitrates:
        "Conditionnalite-2026_fiche-technique_environnement-2_nitrates.pdf",

    oiseaux:
        "Conditionnalite-2026_fiche-technique_environnement-3_oiseaux_sauvages-habitats.pdf",


    /* Fiches mesures nitrates */

    nitratesMesure1:
        "fichemesure1_2025_vf2-7.pdf",

    nitratesMesure2:
        "fichemesure2_2024_vf-5.pdf",

    nitratesMesure3:
        "fichemesure3_2025_vf-4.pdf",

    nitratesMesure4:
        "fichemesure4_2025_vf-7.pdf",

    nitratesMesure5:
        "fichemesure5_2024_vf-4.pdf",

    nitratesMesure6:
        "fichemesure6_2024_vf-1.pdf",

    nitratesMesure7:
        "fichemesure7_2025_vf-4.pdf",

    nitratesMesure8:
        "fichemesure8_2024_vf-2.pdf"

};



/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

    /* =====================================================
       DIRECTIVE CADRE SUR L'EAU
    ====================================================== */

    {
        id: 1,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Prélèvement pour l’irrigation",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un document attestant que vos prélèvements d’eau pour l’irrigation sont autorisés (autorisation de prélèvement, facture de l’année en cours, bulletin d’adhésion à une ASA, etc.) ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier que le document autorisant le prélèvement est disponible et à jour.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 2,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Évaluation des volumes prélevés",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Disposez-vous d’un moyen approprié permettant d’évaluer et d’enregistrer les volumes d’eau prélevés, par exemple un compteur volumétrique ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence et le fonctionnement du dispositif permettant de mesurer les volumes prélevés.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 3,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Protection des eaux souterraines contre les pollutions",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Votre exploitation est-elle exempte de rejets directs dans les sols de substances susceptibles de polluer les eaux souterraines, telles que des produits phytopharmaceutiques, carburants et lubrifiants, produits de désinfection ou de santé animale, fertilisants, engrais azotés ou phosphatés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier les conditions de stockage et de manipulation des produits et substances susceptibles de polluer les eaux souterraines.",

        remarque:
            "Le contrôleur peut vérifier ce point directement sur l’exploitation le jour du contrôle.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 4,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Stockage des effluents d’élevage",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Respectez-vous les distances applicables entre les installations de stockage des effluents d’élevage et les points d’eau souterrains ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je ne stocke pas d’effluents d’élevage",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier les distances entre les installations de stockage et les points d’eau concernés.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 5,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Prévention des retours et débordements lors du remplissage du pulvérisateur",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Lors du remplissage du pulvérisateur, disposez-vous d’au moins un dispositif permettant de prévenir le retour de produits vers le réseau d’eau et de limiter les risques de débordement ?",

        exemples: [
            "Clapet anti-retour",
            "Potence",
            "Cuve intermédiaire ou de pré-stockage",
            "Volucompteur à arrêt automatique",
            "Autre dispositif équivalent"
        ],

        reponses: [
            {
                label: "Oui, je dispose d’au moins un dispositif adapté",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence d’au moins un dispositif adapté lors du remplissage du pulvérisateur.",

        remarque:
            "La simple présence de l’exploitant lors du remplissage ne constitue pas, à elle seule, un dispositif de prévention du débordement ou du retour de produits.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 6,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Lavage du pulvérisateur",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Lorsque le lavage du pulvérisateur n’est pas réalisé au champ, disposez-vous d’un dispositif permettant de récupérer les effluents issus du lavage ?",

        exemples: [
            "Aire ou bâche adaptée",
            "Bac récupérateur",
            "Autre dispositif permettant de récupérer les effluents"
        ],

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je fais appel à une entreprise de travaux agricoles ou je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier que les effluents issus du lavage sont récupérés lorsque le lavage n’est pas réalisé au champ.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 7,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Stockage des produits phytopharmaceutiques",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Les produits phytopharmaceutiques présents sur votre exploitation sont-ils stockés dans un local ou un espace dédié à leur stockage ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier que les produits phytopharmaceutiques sont stockés dans un espace dédié.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 8,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Composés phosphorés – Exploitations ICPE",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un cahier d’enregistrement des pratiques (CEP) permettant de suivre les apports de composés phosphorés organiques ou minéraux, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier la présence et la tenue du CEP lorsque cette obligation s’applique.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    {
        id: 9,

        domaine: "eau",
        domaineLabel: "Directive cadre sur l’eau",
        domaineIcon: "💧",
        domaineClass: "water",

        titre: "Bilan de matières – Exploitations ICPE",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Avez-vous réalisé le bilan de matières nécessaire pour justifier la conformité des quantités de phosphore apportées, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier la réalisation et la disponibilité du bilan de matières lorsque cette obligation s’applique.",

        fiches: [
            {
                label: "Fiche directive cadre sur l’eau",
                url: FICHES.eau
            }
        ]
    },


    /* =====================================================
       DIRECTIVE OISEAUX ET HABITATS
    ====================================================== */

    {
        id: 10,

        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Taille et coupe des arbres et des haies",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Respectez-vous la période d’interdiction de taille et de coupe des arbres et des haies du 16 mars au 15 août, sauf intervention imposée par une autorité extérieure pour des raisons de sécurité ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier les dates des interventions réalisées ou prévues sur les arbres et les haies.",

        fiches: [
            {
                label: "Fiche oiseaux et habitats",
                url: FICHES.oiseaux
            }
        ]
    },


    {
        id: 11,

        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Écobuage",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Vos pratiques d’écobuage respectent-elles la réglementation applicable et, lorsque cela est nécessaire, disposez-vous d’une dérogation préfectorale ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier la réglementation applicable à votre situation et l’existence d’une éventuelle dérogation préfectorale.",

        fiches: [
            {
                label: "Fiche oiseaux et habitats",
                url: FICHES.oiseaux
            }
        ]
    },


    {
        id: 12,

        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Protection des habitats des espèces d’oiseaux protégées",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Préservez-vous les habitats des espèces d’oiseaux protégées présentes sur votre exploitation et évitez-vous toute destruction ou dégradation interdite de ces habitats ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Aucune espèce protégée n’est répertoriée comme concernée sur mon exploitation",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier les habitats et les éventuelles espèces protégées concernées sur l’exploitation.",

        fiches: [
            {
                label: "Fiche oiseaux et habitats",
                url: FICHES.oiseaux
            }
        ]
    },


    {
        id: 13,

        domaine: "oiseaux",
        domaineLabel: "Directive oiseaux et habitats",
        domaineIcon: "🐦",
        domaineClass: "birds",

        titre: "Sites Natura 2000",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Évitez-vous les travaux ou interventions susceptibles d’affecter de manière significative un site Natura 2000 ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par un site Natura 2000",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier si l’exploitation est concernée par un site Natura 2000 et si les interventions prévues peuvent l’affecter.",

        fiches: [
            {
                label: "Fiche oiseaux et habitats",
                url: FICHES.oiseaux
            }
        ]
    },


    /* =====================================================
       DIRECTIVE NITRATES
    ====================================================== */

    {
        id: 14,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Périodes d’interdiction d’épandage",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Respectez-vous les périodes pendant lesquelles l’épandage des fertilisants azotés est interdit ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier les périodes d’interdiction d’épandage applicables à votre situation.",

        remarque:
            "Consultez le document présentant les périodes d’interdiction d’épandage applicables à votre situation.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 1 · Périodes d’épandage",
                url: FICHES.nitratesMesure1
            }
        ]
    },


    {
        id: 15,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Capacités de stockage des effluents d’élevage",

        type: "administratif",
        typeLabel: "Vérification administrative et justificatifs",

        question:
            "Disposez-vous d’installations de stockage des effluents d’élevage étanches et d’une capacité suffisante pour respecter les périodes d’interdiction d’épandage ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je ne produis et ne stocke pas d’effluents d’élevage",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier l’étanchéité et la capacité des installations de stockage des effluents d’élevage.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 2 · Stockage",
                url: FICHES.nitratesMesure2
            }
        ]
    },


    {
        id: 16,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Équilibre de la fertilisation azotée – PPF et CEP",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un plan prévisionnel de fumure (PPF) et d’un cahier d’enregistrement des pratiques (CEP) permettant de justifier le respect de l’équilibre de la fertilisation azotée ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier que le PPF et le CEP sont disponibles et correctement renseignés.",

        remarque:
            "Même si vous ne réalisez aucun épandage, vous devez tenir à jour un PPF et un CEP lorsque vous êtes concerné par cette obligation. Dans ce cas, renseignez les îlots et les parcelles sur lesquels aucun épandage n’est réalisé.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 3 · PPF et CEP",
                url: FICHES.nitratesMesure3
            }
        ]
    },


    {
        id: 17,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Respect des doses d’azote",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Les doses d’azote prévues dans votre PPF respectent-elles les doses maximales calculées conformément aux règles applicables ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier les doses prévues dans le PPF et leur conformité avec les règles applicables.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 4 · Doses d’azote",
                url: FICHES.nitratesMesure4
            }
        ]
    },


    {
        id: 18,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Analyse de sol",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous des analyses de sol requises par la réglementation, notamment concernant le reliquat d’azote ou, pour les situations concernées, l’analyse de matière organique des prairies ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier que les analyses de sol requises sont disponibles.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            }
        ]
    },


    {
        id: 19,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Plafond de 170 kg d’azote par hectare",

        type: "administratif",
        typeLabel: "Vérification administrative",

        question:
            "La quantité d’azote contenue dans les effluents d’élevage épandus sur votre exploitation respecte-t-elle le plafond annuel de 170 kg d’azote par hectare de SAU ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            },
            {
                label: "Non concerné — Je n’utilise pas d’effluents d’élevage, qu’ils soient produits sur mon exploitation ou provenant d’une autre exploitation",
                status: "non-concerne"
            }
        ],

        action:
            "Vérifier les quantités d’azote apportées par les effluents d’élevage par rapport à la SAU concernée.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 5 · 170 kg N/ha",
                url: FICHES.nitratesMesure5
            }
        ]
    },


    {
        id: 20,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Conditions particulières d’épandage",

        type: "terrain",
        typeLabel: "Contrôle sur place et vérification administrative",

        question:
            "Respectez-vous les conditions particulières applicables aux épandages, notamment concernant les sols à forte pente et les sols détrempés, inondés, gelés ou enneigés, ainsi que les distances à respecter à proximité des cours d’eau ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier les conditions applicables aux épandages et les distances à respecter à proximité des cours d’eau.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 6 · Conditions d’épandage",
                url: FICHES.nitratesMesure6
            }
        ]
    },


    {
        id: 21,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Couverture des sols",

        type: "terrain",
        typeLabel: "Contrôle sur place et vérification administrative",

        question:
            "Respectez-vous les règles relatives à la couverture des sols, notamment les dates d’implantation, la durée de maintien et les dates de destruction des couverts autorisés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier les types de couverts utilisés ainsi que leurs dates d’implantation, de maintien et de destruction.",

        remarque:
            "Consultez la fiche dédiée à la couverture des sols pour connaître les couverts autorisés et les règles applicables à leur implantation et à leur destruction.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 7 · Couverture des sols",
                url: FICHES.nitratesMesure7
            }
        ]
    },


    {
        id: 22,

        domaine: "nitrates",
        domaineLabel: "Directive nitrates",
        domaineIcon: "🌱",
        domaineClass: "nitrates",

        titre: "Bande tampon le long des cours d’eau",

        type: "terrain",
        typeLabel: "Contrôle sur place",

        question:
            "Entretenez-vous correctement la bande tampon végétalisée le long des cours d’eau concernés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie"
            },
            {
                label: "Non",
                status: "action"
            },
            {
                label: "Je dois vérifier",
                status: "verification"
            }
        ],

        action:
            "Vérifier l’entretien de la bande tampon végétalisée le long des cours d’eau concernés.",

        fiches: [
            {
                label: "Fiche directive nitrates",
                url: FICHES.nitrates
            },
            {
                label: "Fiche mesure 8 · Bande tampon",
                url: FICHES.nitratesMesure8
            }
        ]
    }

];



/* =========================================================
   VARIABLES
========================================================= */

let currentQuestionIndex = 0;

let answers = [];

const screens = {
    home: document.getElementById("homeScreen"),
    diagnostic: document.getElementById("diagnosticScreen"),
    results: document.getElementById("resultsScreen"),
    actions: document.getElementById("actionsScreen")
};



/* =========================================================
   NAVIGATION
========================================================= */

function showScreen(screenName) {

    Object.values(screens).forEach(screen => {
        screen.classList.remove("active");
    });

    if (screens[screenName]) {
        screens[screenName].classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================================================
   DÉMARRER
========================================================= */

function startDiagnostic() {

    currentQuestionIndex = 0;
    answers = [];

    document.getElementById("questionTotal").textContent =
        questions.length;

    showScreen("diagnostic");

    displayQuestion();
}



/* =========================================================
   RECOMMENCER
========================================================= */

function restartDiagnostic() {

    currentQuestionIndex = 0;
    answers = [];

    document.getElementById("operatorName").value = "";
    document.getElementById("farmName").value = "";

    showScreen("diagnostic");

    displayQuestion();
}



/* =========================================================
   AFFICHAGE QUESTION
========================================================= */

function displayQuestion() {

    const question =
        questions[currentQuestionIndex];

    if (!question) return;


    /* Compteur */

    document.getElementById("questionNumber").textContent =
        currentQuestionIndex + 1;

    document.getElementById("questionTotal").textContent =
        questions.length;


    /* Progression */

    const progress =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progress}%`;


    /* Domaine */

    const domainBadge =
        document.getElementById("domainBadge");

    domainBadge.textContent =
        `${question.domaineIcon} ${question.domaineLabel}`;


    /* Type */

    document.getElementById("typeBadge").textContent =
        question.typeLabel;


    /* Titre */

    document.getElementById("questionTitle").textContent =
        question.titre;


    /* Question */

    document.getElementById("questionText").textContent =
        question.question;


    /* =====================================================
       EXEMPLES
    ====================================================== */

    const examplesContainer =
        document.getElementById("examplesContainer");

    examplesContainer.innerHTML = "";

    if (question.exemples && question.exemples.length > 0) {

        const title =
            document.createElement("strong");

        title.textContent =
            "Exemples : ";

        examplesContainer.appendChild(title);


        const text =
            document.createElement("span");

        text.textContent =
            question.exemples.join(" · ");

        examplesContainer.appendChild(text);

        examplesContainer.style.display = "block";

    } else {

        examplesContainer.style.display = "none";

    }


    /* =====================================================
       REMARQUE
    ====================================================== */

    const remarkContainer =
        document.getElementById("remarkContainer");

    remarkContainer.innerHTML = "";

    if (question.remarque) {

        remarkContainer.textContent =
            question.remarque;

        remarkContainer.style.display =
            "block";

    } else {

        remarkContainer.style.display =
            "none";

    }


    /* =====================================================
       BOUTON PRÉCÉDENT
    ====================================================== */

    const previousButton =
        document.getElementById(
            "previousQuestionButton"
        );

    if (currentQuestionIndex === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;

    }


    /* =====================================================
       LIENS DES FICHES
    ====================================================== */

    const regulationLinks =
        document.getElementById(
            "regulationLinks"
        );

    regulationLinks.innerHTML = "";


    if (question.fiches && question.fiches.length > 0) {

        question.fiches.forEach(fiche => {

            const link =
                document.createElement("a");

            link.href = fiche.url;

            link.target = "_blank";

            link.rel = "noopener noreferrer";

            link.className =
                "regulation-link";

            link.textContent =
                `${fiche.label} →`;

            regulationLinks.appendChild(link);

        });

    }


    /* =====================================================
       RÉPONSES
    ====================================================== */

    const answersContainer =
        document.getElementById(
            "answersContainer"
        );

    answersContainer.innerHTML = "";


    question.reponses.forEach(response => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "answer-button";


        const label =
            document.createElement("span");

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


        /* Réponse précédemment sélectionnée */

        const savedAnswer =
            answers[currentQuestionIndex];


        if (
            savedAnswer &&
            savedAnswer.answer.label === response.label
        ) {

            button.classList.add(
                "selected-answer"
            );

        }


        button.addEventListener(
            "click",
            () => selectAnswer(response)
        );


        answersContainer.appendChild(button);

    });

}



/* =========================================================
   QUESTION PRÉCÉDENTE
========================================================= */

function previousQuestion() {

    if (currentQuestionIndex <= 0) {
        return;
    }

    currentQuestionIndex--;

    displayQuestion();
}



/* =========================================================
   SÉLECTION RÉPONSE
========================================================= */

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


    /* Question suivante */

    if (
        currentQuestionIndex <
        questions.length - 1
    ) {

        currentQuestionIndex++;

        displayQuestion();

    } else {

        showResults();

    }

}



/* =========================================================
   STATISTIQUES
========================================================= */

function calculateStats() {

    const stats = {

        verifie: 0,

        verification: 0,

        action: 0,

        "non-concerne": 0

    };


    answers.forEach(item => {

        if (
            item &&
            item.answer &&
            stats[item.answer.status] !== undefined
        ) {

            stats[item.answer.status]++;

        }

    });


    return stats;
}



/* =========================================================
   LIBELLÉS STATUTS — INTERFACE
========================================================= */

function getStatusLabel(status) {

    const labels = {

        verifie:
            "✓ Vérifié",

        verification:
            "À vérifier",

        action:
            "Action",

        "non-concerne":
            "Non concerné"

    };

    return labels[status] || "";
}



/* =========================================================
   LIBELLÉS STATUTS — PDF
   SANS EMOJIS
========================================================= */

function getPDFStatusLabel(status) {

    const labels = {

        verifie:
            "Vérifié",

        verification:
            "À vérifier",

        action:
            "Action",

        "non-concerne":
            "Non concerné"

    };

    return labels[status] || "";
}



/* =========================================================
   NETTOYAGE DU TEXTE PDF
   SUPPRESSION DES EMOJIS
========================================================= */

function cleanPDFText(text) {

    return String(text || "")

        .replace(
            /[\u{1F300}-\u{1FAFF}]/gu,
            ""
        )

        .replace(
            /[\u{2600}-\u{27BF}]/gu,
            ""
        )

        .replace(
            /\s{2,}/g,
            " "
        )

        .trim();
}



/* =========================================================
   RÉSULTATS
========================================================= */

function showResults() {

    const stats =
        calculateStats();


    document.getElementById("statVerified")
        .textContent =
        stats.verifie;


    document.getElementById("statToCheck")
        .textContent =
        stats.verification;


    document.getElementById("statAction")
        .textContent =
        stats.action;


    document.getElementById("statNotConcerned")
        .textContent =
        stats["non-concerne"];


    displayResults();

    showScreen("results");
}



/* =========================================================
   AFFICHER RÉSULTATS
========================================================= */

function displayResults() {

    const container =
        document.getElementById(
            "resultsContainer"
        );

    container.innerHTML = "";


    const domains = {};


    answers.forEach(item => {

        if (!item) return;


        const domain =
            item.question.domaine;


        if (!domains[domain]) {

            domains[domain] = {

                label:
                    item.question.domaineLabel,

                icon:
                    item.question.domaineIcon,

                items: []

            };

        }


        domains[domain].items.push(item);

    });


    Object.values(domains).forEach(domain => {

        const domainCard =
            document.createElement("div");

        domainCard.className =
            "result-domain";


        const header =
            document.createElement("div");

        header.className =
            "result-domain-header";

        header.textContent =
            `${domain.icon} ${domain.label}`;


        domainCard.appendChild(header);


        domain.items.forEach(item => {

            const resultItem =
                document.createElement("div");

            resultItem.className =
                "result-item";


            const content =
                document.createElement("div");


            const title =
                document.createElement("h4");

            title.textContent =
                item.question.titre;


            const answer =
                document.createElement("p");

            answer.textContent =
                item.answer.label;


            content.appendChild(title);
            content.appendChild(answer);


            const badge =
                document.createElement("span");

            badge.className =
                "status-badge";


            if (
                item.answer.status === "verifie"
            ) {

                badge.classList.add(
                    "status-verified"
                );

            } else if (
                item.answer.status === "verification"
            ) {

                badge.classList.add(
                    "status-check"
                );

            } else if (
                item.answer.status === "action"
            ) {

                badge.classList.add(
                    "status-action"
                );

            } else {

                badge.classList.add(
                    "status-not-concerned"
                );

            }


            badge.textContent =
                getStatusLabel(
                    item.answer.status
                );


            resultItem.appendChild(content);
            resultItem.appendChild(badge);


            domainCard.appendChild(resultItem);

        });


        container.appendChild(domainCard);

    });

}



/* =========================================================
   ACTIONS
========================================================= */

function showActions() {

    const container =
        document.getElementById(
            "actionsContainer"
        );

    container.innerHTML = "";


    const actionItems =
        answers.filter(
            item =>
                item &&
                (
                    item.answer.status === "action" ||
                    item.answer.status === "verification"
                )
        );


    if (actionItems.length === 0) {

        const card =
            document.createElement("div");

        card.className =
            "action-card";


        card.innerHTML = `
            <h3>
                Aucun point d'attention identifié
            </h3>

            <p>
                D'après vos réponses, aucun point n'a été
                identifié comme nécessitant une action ou
                une vérification complémentaire.
            </p>
        `;


        container.appendChild(card);

    } else {

        actionItems.forEach(item => {

            const card =
                document.createElement("div");

            card.className =
                "action-card";


            const title =
                document.createElement("h3");

            title.textContent =
                item.question.titre;


            const description =
                document.createElement("p");

            description.textContent =
                item.question.action ||
                "Vérifiez ce point avant le contrôle.";


            card.appendChild(title);
            card.appendChild(description);


            /* Liens */

            if (
                item.question.fiches &&
                item.question.fiches.length > 0
            ) {

                item.question.fiches.forEach(
                    fiche => {

                        const link =
                            document.createElement("a");

                        link.href =
                            fiche.url;

                        link.target =
                            "_blank";

                        link.rel =
                            "noopener noreferrer";

                        link.textContent =
                            `${fiche.label} →`;


                        card.appendChild(link);

                    }
                );

            }


            container.appendChild(card);

        });

    }


    showScreen("actions");
}



/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value || "")

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}



/* =========================================================
   PDF
========================================================= */

function generatePDF() {

    const {
        jsPDF
    } = window.jspdf;


    const operatorName =
        document.getElementById(
            "operatorName"
        ).value.trim();


    const farmName =
        document.getElementById(
            "farmName"
        ).value.trim();


    const pdf =
        new jsPDF({
            unit: "mm",
            format: "a4"
        });


    const pageWidth =
        pdf.internal.pageSize.getWidth();


    const pageHeight =
        pdf.internal.pageSize.getHeight();


    const margin = 18;

    let y = 20;


    /* =====================================================
       OUTILS PDF
    ====================================================== */

    function checkPageSpace(heightNeeded = 15) {

        if (
            y + heightNeeded >
            pageHeight - 20
        ) {

            pdf.addPage();

            y = 20;

        }

    }


    function addText(
        text,
        x,
        yPosition,
        options = {}
    ) {

        const size =
            options.size || 10;

        const font =
            options.font || "normal";

        const maxWidth =
            options.maxWidth ||
            pageWidth - margin * 2;


        pdf.setFont(
            "helvetica",
            font
        );

        pdf.setFontSize(size);


        const cleanText =
            cleanPDFText(text);


        const lines =
            pdf.splitTextToSize(
                cleanText,
                maxWidth
            );


        pdf.text(
            lines,
            x,
            yPosition
        );


        return lines.length *
            (size * 0.45);

    }



    /* =====================================================
       TITRE
    ====================================================== */

    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(22);

    pdf.text(
        "CONDITIONNALITE 31",
        margin,
        y
    );

    y += 9;


    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(11);

    pdf.text(
        "Diagnostic environnemental · 2026",
        margin,
        y
    );

    y += 15;


    /* =====================================================
       IDENTITÉ
    ====================================================== */

    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(12);

    pdf.text(
        "Identification",
        margin,
        y
    );

    y += 7;


    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(10);


    pdf.text(
        `Exploitant : ${cleanPDFText(
            operatorName || "Non renseigné"
        )}`,
        margin,
        y
    );

    y += 6;


    pdf.text(
        `Exploitation : ${cleanPDFText(
            farmName || "Non renseignée"
        )}`,
        margin,
        y
    );

    y += 6;


    pdf.text(
        `Date : ${new Date().toLocaleDateString(
            "fr-FR"
        )}`,
        margin,
        y
    );

    y += 13;



    /* =====================================================
       RÉSUMÉ
    ====================================================== */

    const stats =
        calculateStats();


    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(12);

    pdf.text(
        "Résumé",
        margin,
        y
    );

    y += 7;


    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(10);


    const summaryText =
        `Vérifiés : ${stats.verifie}   |   ` +
        `À vérifier : ${stats.verification}   |   ` +
        `Actions : ${stats.action}   |   ` +
        `Non concernés : ${stats["non-concerne"]}`;


    pdf.text(
        summaryText,
        margin,
        y
    );

    y += 13;



    /* =====================================================
       RÉSULTATS PAR DIRECTIVE
    ====================================================== */

    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(12);

    pdf.text(
        "Détail du diagnostic",
        margin,
        y
    );

    y += 9;


    const domains = {};


    answers.forEach(item => {

        if (!item) return;


        const domain =
            item.question.domaine;


        if (!domains[domain]) {

            domains[domain] = {

                label:
                    item.question.domaineLabel,

                items: []

            };

        }


        domains[domain].items.push(item);

    });


    Object.values(domains).forEach(
        domain => {

            checkPageSpace(18);


            pdf.setFont(
                "helvetica",
                "bold"
            );

            pdf.setFontSize(11);


            pdf.text(
                cleanPDFText(
                    domain.label
                ),
                margin,
                y
            );

            y += 7;


            domain.items.forEach(
                item => {

                    checkPageSpace(25);


                    pdf.setFont(
                        "helvetica",
                        "bold"
                    );

                    pdf.setFontSize(9);


                    const titleLines =
                        pdf.splitTextToSize(
                            cleanPDFText(
                                item.question.titre
                            ),
                            115
                        );


                    pdf.text(
                        titleLines,
                        margin,
                        y
                    );


                    pdf.setFont(
                        "helvetica",
                        "normal"
                    );

                    pdf.setFontSize(8);


                    const status =
                        getPDFStatusLabel(
                            item.answer.status
                        );


                    pdf.text(
                        status,
                        pageWidth - margin - 30,
                        y
                    );


                    y +=
                        titleLines.length * 4;


                    const answerLines =
                        pdf.splitTextToSize(
                            cleanPDFText(
                                `Réponse : ${item.answer.label}`
                            ),
                            pageWidth - margin * 2
                        );


                    pdf.text(
                        answerLines,
                        margin,
                        y
                    );


                    y +=
                        answerLines.length * 4;


                    y += 4;

                }
            );


            y += 3;

        }
    );



    /* =====================================================
       ACTIONS
    ====================================================== */

    const actionItems =
        answers.filter(
            item =>
                item &&
                (
                    item.answer.status === "action" ||
                    item.answer.status === "verification"
                )
        );


    checkPageSpace(25);


    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(12);

    pdf.text(
        "Points à vérifier",
        margin,
        y
    );

    y += 8;


    if (actionItems.length === 0) {

        pdf.setFont(
            "helvetica",
            "normal"
        );

        pdf.setFontSize(9);

        pdf.text(
            "Aucun point d'action ou de vérification supplémentaire identifié.",
            margin,
            y
        );

        y += 8;

    } else {

        actionItems.forEach(
            item => {

                checkPageSpace(20);


                pdf.setFont(
                    "helvetica",
                    "bold"
                );

                pdf.setFontSize(9);


                pdf.text(
                    cleanPDFText(
                        item.question.titre
                    ),
                    margin,
                    y
                );


                y += 5;


                pdf.setFont(
                    "helvetica",
                    "normal"
                );

                pdf.setFontSize(8);


                const actionText =
                    item.question.action ||
                    "Vérifier ce point.";


                const actionLines =
                    pdf.splitTextToSize(
                        cleanPDFText(
                            actionText
                        ),
                        pageWidth - margin * 2
                    );


                pdf.text(
                    actionLines,
                    margin,
                    y
                );


                y +=
                    actionLines.length * 4;


                y += 4;

            }
        );

    }



    /* =====================================================
       AVERTISSEMENT
    ====================================================== */

    checkPageSpace(35);


    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(10);

    pdf.text(
        "Important",
        margin,
        y
    );

    y += 6;


    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(8);


    const warning =
        "Cet outil aide à identifier les points qui méritent une vérification. Il ne constitue pas une attestation de conformité réglementaire.";


    const warningLines =
        pdf.splitTextToSize(
            cleanPDFText(warning),
            pageWidth - margin * 2
        );


    pdf.text(
        warningLines,
        margin,
        y
    );


    y +=
        warningLines.length * 4 + 8;



    /* =====================================================
       CONFIDENTIALITÉ
    ====================================================== */

    pdf.setFontSize(8);

    pdf.setTextColor(
        100,
        100,
        100
    );


    const privacy =
        "Diagnostic généré localement dans votre navigateur. Aucune donnée n'est enregistrée sur ce site.";


    const privacyLines =
        pdf.splitTextToSize(
            cleanPDFText(privacy),
            pageWidth - margin * 2
        );


    pdf.text(
        privacyLines,
        margin,
        y
    );



    /* =====================================================
       FOOTER
    ====================================================== */

    const totalPages =
        pdf.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        pdf.setPage(page);


        pdf.setFont(
            "helvetica",
            "normal"
        );

        pdf.setFontSize(7);

        pdf.setTextColor(
            130,
            130,
            130
        );


        pdf.text(
            `Conditionnalité 31 · 2026 · Page ${page}/${totalPages}`,
            margin,
            pageHeight - 10
        );

    }



    /* =====================================================
       NOM DU FICHIER
    ====================================================== */

    const cleanName =
        (
            operatorName ||
            "exploitant"
        )

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(
            /[^a-zA-Z0-9-_]/g,
            "_"
        );


    const date =
        new Date()
            .toISOString()
            .slice(0, 10);


    pdf.save(
        `Diagnostic_Conditionnalite_31_${cleanName}_${date}.pdf`
    );

}
