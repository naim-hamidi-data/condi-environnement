/* =========================================================
   CONDITIONNALITÉ 31
   Diagnostic environnemental · Haute-Garonne · 2026
========================================================= */


/* =========================================================
   FICHES PDF
========================================================= */

const FICHES = {

    eau:
        "Conditionnalite-2026_fiche-technique_environnement-1_directive_cadre_eau.pdf",

    oiseaux:
        "Conditionnalite-2026_fiche-technique_environnement-3_oiseaux_sauvages-habitats.pdf",

    nitrates:
        "Conditionnalite-2026_fiche-technique_environnement-2_nitrates.pdf",

    mesure1:
        "fichemesure1_2025_vf2-7.pdf",

    mesure2:
        "fichemesure2_2024_vf-5.pdf",

    mesure3:
        "fichemesure3_2025_vf-4.pdf",

    mesure4:
        "fichemesure4_2025_vf-7.pdf",

    mesure5:
        "fichemesure5_2024_vf-4.pdf",

    mesure6:
        "fichemesure6_2024_vf-1.pdf",

    mesure7:
        "fichemesure7_2025_vf-4.pdf",

    mesure8:
        "fichemesure8_2024_vf-2.pdf"
};


/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

    /* =========================
       EAU
    ========================== */

    {
        id: 1,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Prélèvement pour l’irrigation",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un document attestant que vos prélèvements d’eau pour l’irrigation sont autorisés (autorisation de prélèvement, facture de l’année en cours, bulletin d’adhésion à une ASA, etc.) ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier que le document autorisant le prélèvement est disponible et à jour.",

        fiche: FICHES.eau
    },


    {
        id: 2,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Évaluation des volumes prélevés",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Disposez-vous d’un moyen approprié permettant d’évaluer et d’enregistrer les volumes d’eau prélevés, par exemple un compteur volumétrique ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je n’irrigue pas",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier la présence et le fonctionnement du dispositif permettant de mesurer les volumes prélevés.",

        fiche: FICHES.eau
    },


    {
        id: 3,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre:
            "Protection des eaux souterraines contre les pollutions",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Votre exploitation est-elle exempte de rejets directs dans les sols de substances susceptibles de polluer les eaux souterraines, telles que des produits phytopharmaceutiques, carburants et lubrifiants, produits de désinfection ou de santé animale, fertilisants, engrais azotés ou phosphatés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        remarque:
            "Le contrôleur peut vérifier ce point directement sur l’exploitation le jour du contrôle.",

        action:
            "Vérifier les conditions de stockage et l’absence de rejets directs susceptibles de polluer les eaux souterraines.",

        fiche: FICHES.eau
    },


    {
        id: 4,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Stockage des effluents d’élevage",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Respectez-vous les distances applicables entre les installations de stockage des effluents d’élevage et les points d’eau souterrains ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je ne stocke pas d’effluents d’élevage",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier les distances applicables autour des installations de stockage.",

        fiche: FICHES.eau
    },


    {
        id: 5,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre:
            "Prévention des retours et débordements lors du remplissage du pulvérisateur",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Lors du remplissage du pulvérisateur, disposez-vous d’au moins un dispositif permettant de prévenir le retour de produits vers le réseau d’eau et de limiter les risques de débordement ?",

        exemples:
            "Clapet anti-retour ; potence ; cuve intermédiaire ou de pré-stockage ; volucompteur à arrêt automatique ; autre dispositif équivalent.",

        reponses: [
            {
                label: "Oui, je dispose d’au moins un dispositif adapté",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne",
                class: "na"
            }
        ],

        remarque:
            "La simple présence de l’exploitant lors du remplissage ne constitue pas, à elle seule, un dispositif de prévention du débordement ou du retour de produits.",

        action:
            "Identifier le dispositif réellement utilisé lors du remplissage du pulvérisateur.",

        fiche: FICHES.eau
    },


    {
        id: 6,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Lavage du pulvérisateur",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Lorsque le lavage du pulvérisateur n’est pas réalisé au champ, disposez-vous d’un dispositif permettant de récupérer les effluents issus du lavage ?",

        exemples:
            "Aire ou bâche adaptée ; bac récupérateur ; autre dispositif permettant de récupérer les effluents.",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je fais appel à une entreprise de travaux agricoles ou je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier le dispositif de récupération des effluents lorsque le lavage est réalisé hors du champ.",

        fiche: FICHES.eau
    },


    {
        id: 7,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Stockage des produits phytopharmaceutiques",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Les produits phytopharmaceutiques présents sur votre exploitation sont-ils stockés dans un local ou un espace dédié à leur stockage ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je n’utilise pas de produits phytopharmaceutiques",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier l’espace dédié au stockage des produits phytopharmaceutiques.",

        fiche: FICHES.eau
    },


    {
        id: 8,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Composés phosphorés – Exploitations ICPE",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un cahier d’enregistrement des pratiques (CEP) permettant de suivre les apports de composés phosphorés organiques ou minéraux, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier que le CEP est disponible lorsque l’obligation s’applique.",

        fiche: FICHES.eau
    },


    {
        id: 9,

        domaine: "eau",

        domaineLabel: "Directive cadre sur l'eau",

        domaineIcon: "EAU",

        domaineClass: "water",

        titre: "Bilan de matières – Exploitations ICPE",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Avez-vous réalisé le bilan de matières nécessaire pour justifier la conformité des quantités de phosphore apportées, lorsque cette obligation s’applique à votre exploitation ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par cette obligation",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier le bilan de matières lorsque l’obligation s’applique.",

        fiche: FICHES.eau
    },


    /* =========================
       OISEAUX / HABITATS
    ========================== */

    {
        id: 10,

        domaine: "oiseaux",

        domaineLabel: "Directive oiseaux et habitats",

        domaineIcon: "OISEAUX",

        domaineClass: "birds",

        titre: "Taille et coupe des arbres et des haies",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Respectez-vous la période d’interdiction de taille et de coupe des arbres et des haies du 16 mars au 15 août, sauf intervention imposée par une autorité extérieure pour des raisons de sécurité ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier les dates des interventions réalisées sur les arbres et les haies.",

        fiche: FICHES.oiseaux
    },


    {
        id: 11,

        domaine: "oiseaux",

        domaineLabel: "Directive oiseaux et habitats",

        domaineIcon: "OISEAUX",

        domaineClass: "birds",

        titre: "Écobuage",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Vos pratiques d’écobuage respectent-elles la réglementation applicable et, lorsque cela est nécessaire, disposez-vous d’une dérogation préfectorale ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier les conditions applicables à la pratique de l’écobuage et les éventuelles autorisations nécessaires.",

        fiche: FICHES.oiseaux
    },


    {
        id: 12,

        domaine: "oiseaux",

        domaineLabel: "Directive oiseaux et habitats",

        domaineIcon: "OISEAUX",

        domaineClass: "birds",

        titre:
            "Protection des habitats des espèces d’oiseaux protégées",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Préservez-vous les habitats des espèces d’oiseaux protégées présentes sur votre exploitation et évitez-vous toute destruction ou dégradation interdite de ces habitats ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Aucune espèce protégée n’est répertoriée comme concernée sur mon exploitation",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier les enjeux liés aux habitats d’espèces protégées présents sur l’exploitation.",

        fiche: FICHES.oiseaux
    },


    {
        id: 13,

        domaine: "oiseaux",

        domaineLabel: "Directive oiseaux et habitats",

        domaineIcon: "OISEAUX",

        domaineClass: "birds",

        titre: "Sites Natura 2000",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Évitez-vous les travaux ou interventions susceptibles d’affecter de manière significative un site Natura 2000 ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Mon exploitation n’est pas concernée par un site Natura 2000",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier si les parcelles ou travaux concernés se situent dans le périmètre d’un site Natura 2000.",

        fiche: FICHES.oiseaux
    },


    /* =========================
       NITRATES
    ========================== */

    {
        id: 14,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Périodes d’interdiction d’épandage",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Respectez-vous les périodes pendant lesquelles l’épandage des fertilisants azotés est interdit ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné",
                status: "non-concerne",
                class: "na"
            }
        ],

        remarque:
            "Consultez le document présentant les périodes d’interdiction d’épandage applicables à votre situation.",

        action:
            "Vérifier les périodes d’interdiction applicables aux fertilisants utilisés.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure1,

        ficheSupplementaireLabel:
            "Fiche mesure 1 — Périodes d’interdiction d’épandage"
    },


    {
        id: 15,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Capacités de stockage des effluents d’élevage",

        type: "administratif",

        typeLabel: "Vérification administrative et justificatifs",

        question:
            "Disposez-vous d’installations de stockage des effluents d’élevage étanches et d’une capacité suffisante pour respecter les périodes d’interdiction d’épandage ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je ne produis et ne stocke pas d’effluents d’élevage",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier l’étanchéité et la capacité des installations de stockage.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure2,

        ficheSupplementaireLabel:
            "Fiche mesure 2 — Capacités de stockage"
    },


    {
        id: 16,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Équilibre de la fertilisation azotée – PPF et CEP",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous d’un plan prévisionnel de fumure (PPF) et d’un cahier d’enregistrement des pratiques (CEP) permettant de justifier le respect de l’équilibre de la fertilisation azotée ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        remarque:
            "Même si vous ne réalisez aucun épandage, vous devez tenir à jour un PPF et un CEP lorsque vous êtes concerné par cette obligation. Dans ce cas, renseignez les îlots et les parcelles sur lesquels aucun épandage n’est réalisé.",

        action:
            "Vérifier la présence et la mise à jour du PPF et du CEP.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure3,

        ficheSupplementaireLabel:
            "Fiche mesure 3 — PPF et CEP"
    },


    {
        id: 17,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Respect des doses d’azote",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Les doses d’azote prévues dans votre PPF respectent-elles les doses maximales calculées conformément aux règles applicables ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier les doses prévues dans le PPF et leur cohérence avec les règles applicables.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure4,

        ficheSupplementaireLabel:
            "Fiche mesure 4 — Respect des doses d’azote"
    },


    {
        id: 18,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Analyse de sol",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "Disposez-vous des analyses de sol requises par la réglementation, notamment concernant le reliquat d’azote ou, pour les situations concernées, l’analyse de matière organique des prairies ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier que les analyses de sol requises sont disponibles et correspondent aux situations concernées.",

        fiche: FICHES.nitrates
    },


    {
        id: 19,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Plafond de 170 kg d’azote par hectare",

        type: "administratif",

        typeLabel: "Vérification administrative",

        question:
            "La quantité d’azote contenue dans les effluents d’élevage épandus sur votre exploitation respecte-t-elle le plafond annuel de 170 kg d’azote par hectare de SAU ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            },
            {
                label: "Non concerné — Je n’utilise pas d’effluents d’élevage, qu’ils soient produits sur mon exploitation ou provenant d’une autre exploitation",
                status: "non-concerne",
                class: "na"
            }
        ],

        action:
            "Vérifier les quantités d’azote apportées par les effluents d’élevage et le plafond applicable.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure5,

        ficheSupplementaireLabel:
            "Fiche mesure 5 — Plafond de 170 kg d’azote par hectare"
    },


    {
        id: 20,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Conditions particulières d’épandage",

        type: "mixte",

        typeLabel: "Contrôle sur place et vérification administrative",

        question:
            "Respectez-vous les conditions particulières applicables aux épandages, notamment concernant les sols à forte pente et les sols détrempés, inondés, gelés ou enneigés, ainsi que les distances à respecter à proximité des cours d’eau ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier les conditions applicables aux épandages selon les caractéristiques des sols et la proximité des cours d’eau.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure6,

        ficheSupplementaireLabel:
            "Fiche mesure 6 — Conditions particulières d’épandage"
    },


    {
        id: 21,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Couverture des sols",

        type: "mixte",

        typeLabel: "Contrôle sur place et vérification administrative",

        question:
            "Respectez-vous les règles relatives à la couverture des sols, notamment les dates d’implantation, la durée de maintien et les dates de destruction des couverts autorisés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        remarque:
            "Consultez la fiche dédiée à la couverture des sols pour connaître les couverts autorisés et les règles applicables à leur implantation et à leur destruction.",

        action:
            "Vérifier les dates d’implantation, de maintien et de destruction des couverts.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure7,

        ficheSupplementaireLabel:
            "Fiche mesure 7 — Couverture des sols"
    },


    {
        id: 22,

        domaine: "nitrates",

        domaineLabel: "Directive nitrates",

        domaineIcon: "NITRATES",

        domaineClass: "nitrates",

        titre: "Bande tampon le long des cours d’eau",

        type: "terrain",

        typeLabel: "Contrôle sur place",

        question:
            "Entretenez-vous correctement la bande tampon végétalisée le long des cours d’eau concernés ?",

        reponses: [
            {
                label: "Oui",
                status: "verifie",
                class: "yes"
            },
            {
                label: "Non",
                status: "action",
                class: "no"
            },
            {
                label: "Je dois vérifier",
                status: "verification",
                class: "check"
            }
        ],

        action:
            "Vérifier l’entretien et l’état de la bande tampon végétalisée.",

        fiche: FICHES.nitrates,

        ficheSupplementaire: FICHES.mesure8,

        ficheSupplementaireLabel:
            "Fiche mesure 8 — Bande tampon le long des cours d’eau"
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

function showScreen(screenId) {

    Object.values(screens).forEach(screen => {
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


function startDiagnostic() {

    currentQuestionIndex = 0;

    answers = [];

    showScreen("diagnosticScreen");

    displayQuestion();
}


function restartDiagnostic() {

    currentQuestionIndex = 0;

    answers = [];

    document.getElementById("operatorName").value = "";
    document.getElementById("farmName").value = "";

    showScreen("diagnosticScreen");

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


    const total = questions.length;

    const current = currentQuestionIndex + 1;

    const percentage =
        (current / total) * 100;


    document.getElementById("questionCounter").textContent =
        `Question ${current} / ${total}`;


    document.getElementById("progressBar").style.width =
        `${percentage}%`;


    document.getElementById("questionNumber").textContent =
        String(current).padStart(2, "0");


    document.getElementById("domainBadge").textContent =
        question.domaineLabel;


    document.getElementById("typeBadge").textContent =
        question.typeLabel;


    document.getElementById("questionTitle").textContent =
        question.titre;


    document.getElementById("questionText").textContent =
        question.question;


    /* EXEMPLES */

    const examplesContainer =
        document.getElementById("examplesContainer");

    const examplesText =
        document.getElementById("examplesText");


    if (question.exemples) {

        examplesContainer.style.display = "block";

        examplesText.textContent =
            question.exemples;

    } else {

        examplesContainer.style.display = "none";

        examplesText.textContent = "";
    }


    /* REMARQUE */

    const remarkContainer =
        document.getElementById("remarkContainer");

    const remarkText =
        document.getElementById("remarkText");


    if (question.remarque) {

        remarkContainer.style.display = "block";

        remarkText.textContent =
            question.remarque;

    } else {

        remarkContainer.style.display = "none";

        remarkText.textContent = "";
    }


    /* LIENS */

    const regulationLink =
        document.getElementById("regulationLink");


    if (question.fiche) {

        regulationLink.href =
            question.fiche;

        regulationLink.target =
            "_blank";

        regulationLink.classList.remove("disabled");

        regulationLink.textContent =
            "Consulter la fiche principale →";

    } else {

        regulationLink.href =
            "#";

        regulationLink.classList.add("disabled");

        regulationLink.textContent =
            "Fiche indisponible";
    }


    /* REPONSES */

    const answersContainer =
        document.getElementById("answersContainer");

    answersContainer.innerHTML = "";


    /* BOUTON PRECEDENT */

    const previousButton =
        document.getElementById("previousQuestionButton");


    if (currentQuestionIndex === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;
    }


    /* CREATION DES REPONSES */

    question.reponses.forEach(response => {

        const button =
            document.createElement("button");


        button.className =
            `answer-button answer-${response.class}`;


        button.textContent =
            response.label;


        button.onclick = () => {

            selectAnswer(response);

        };


        /* RESTAURATION DE LA REPONSE */

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


        answersContainer.appendChild(button);

    });
}


/* =========================================================
   QUESTION PRECEDENTE
========================================================= */

function previousQuestion() {

    if (currentQuestionIndex <= 0) {
        return;
    }

    currentQuestionIndex--;

    displayQuestion();
}


/* =========================================================
   REPONSE
========================================================= */

function selectAnswer(response) {

    const question =
        questions[currentQuestionIndex];


    answers[currentQuestionIndex] = {

        question: question,

        answer: response

    };


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
   RESULTATS
========================================================= */

function calculateStats() {

    const stats = {

        verifie: 0,

        action: 0,

        verification: 0,

        "non-concerne": 0
    };


    answers.forEach(item => {

        if (!item) {
            return;
        }

        const status =
            item.answer.status;


        if (
            Object.prototype.hasOwnProperty.call(
                stats,
                status
            )
        ) {

            stats[status]++;
        }

    });


    return stats;
}


function showResults() {

    showScreen("resultsScreen");

    displayResults();
}


function displayResults() {

    const stats =
        calculateStats();


    /* STATISTIQUES */

    const statsContainer =
        document.getElementById("statsContainer");


    statsContainer.innerHTML = `

        <div class="stat-card stat-yes">
            <span class="stat-value">${stats.verifie}</span>
            <span class="stat-label">Oui</span>
        </div>

        <div class="stat-card stat-no">
            <span class="stat-value">${stats.action}</span>
            <span class="stat-label">Non</span>
        </div>

        <div class="stat-card stat-check">
            <span class="stat-value">${stats.verification}</span>
            <span class="stat-label">À vérifier</span>
        </div>

        <div class="stat-card stat-na">
            <span class="stat-value">${stats["non-concerne"]}</span>
            <span class="stat-label">Non concerné</span>
        </div>

    `;


    /* GROUPES */

    const groups = {};


    answers.forEach(item => {

        if (!item) {
            return;
        }

        const domaine =
            item.question.domaine;


        if (!groups[domaine]) {

            groups[domaine] = [];

        }


        groups[domaine].push(item);

    });


    const resultsContainer =
        document.getElementById("resultsContainer");


    resultsContainer.innerHTML = "";


    Object.values(groups).forEach(group => {

        const first =
            group[0].question;


        const domainBlock =
            document.createElement("div");


        domainBlock.className =
            "result-domain";


        domainBlock.innerHTML = `

            <div class="result-domain-header">

                <h2>
                    ${escapeHTML(first.domaineLabel)}
                </h2>

                <span>
                    ${group.length} point${group.length > 1 ? "s" : ""}
                </span>

            </div>

        `;


        group.forEach(item => {

            const status =
                item.answer.status;


            const statusLabel =
                getStatusLabel(status);


            const itemBlock =
                document.createElement("div");


            itemBlock.className =
                "result-item";


            itemBlock.innerHTML = `

                <div class="result-item-top">

                    <div class="result-question-title">
                        ${escapeHTML(item.question.titre)}
                    </div>

                    <span class="
                        result-answer
                        ${getStatusClass(status)}
                    ">
                        ${statusLabel}
                    </span>

                </div>

                <p class="result-action">
                    ${escapeHTML(item.question.action || "")}
                </p>

            `;


            domainBlock.appendChild(itemBlock);

        });


        resultsContainer.appendChild(domainBlock);

    });
}


/* =========================================================
   ACTIONS
========================================================= */

function showActions() {

    showScreen("actionsScreen");

    displayActions();
}


function displayActions() {

    const container =
        document.getElementById("actionsContainer");


    container.innerHTML = "";


    const actions =
        answers.filter(item => {

            if (!item) {
                return false;
            }

            return (
                item.answer.status === "action" ||
                item.answer.status === "verification"
            );

        });


    if (actions.length === 0) {

        container.innerHTML = `

            <div class="empty-actions">

                <strong>
                    Aucun point particulier à signaler.
                </strong>

                <p>
                    Toutes les réponses enregistrées sont
                    actuellement indiquées comme vérifiées
                    ou non concernées.
                </p>

            </div>

        `;

        return;
    }


    actions.forEach(item => {

        const question =
            item.question;


        const card =
            document.createElement("div");


        card.className =
            "action-card";


        let linksHTML = "";


        if (question.fiche) {

            linksHTML += `
                <a
                    href="${question.fiche}"
                    target="_blank"
                >
                    Fiche principale →
                </a>
            `;
        }


        if (question.ficheSupplementaire) {

            linksHTML += `
                <br>

                <a
                    href="${question.ficheSupplementaire}"
                    target="_blank"
                >
                    ${escapeHTML(
                        question.ficheSupplementaireLabel ||
                        "Fiche complémentaire"
                    )} →
                </a>
            `;
        }


        card.innerHTML = `

            <h3>
                ${escapeHTML(question.titre)}
            </h3>

            <p>
                ${escapeHTML(question.action || "")}
            </p>

            ${linksHTML}

        `;


        container.appendChild(card);

    });
}


/* =========================================================
   STATUTS
========================================================= */

function getStatusLabel(status) {

    const labels = {

        verifie: "Oui",

        verification: "À vérifier",

        action: "Non",

        "non-concerne": "Non concerné"

    };


    return labels[status] || "";
}


function getPDFStatusLabel(status) {

    const labels = {

        verifie: "Oui",

        verification: "À vérifier",

        action: "Non",

        "non-concerne": "Non concerné"

    };


    return labels[status] || "";
}


function getStatusClass(status) {

    const classes = {

        verifie: "status-yes",

        action: "status-no",

        verification: "status-check",

        "non-concerne": "status-na"

    };


    return classes[status] || "";
}


/* =========================================================
   NETTOYAGE PDF
========================================================= */

function cleanPDFText(text) {

    if (!text) {
        return "";
    }


    return String(text)

        /* Emojis */

        .replace(
            /[\u{1F300}-\u{1FAFF}]/gu,
            ""
        )

        /* Symboles */

        .replace(
            /[\u{2600}-\u{27BF}]/gu,
            ""
        )

        /* espaces multiples */

        .replace(
            /\s{2,}/g,
            " "
        )

        .trim();
}


/* =========================================================
   PDF
========================================================= */

function generatePDF() {

    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF({
            unit: "mm",
            format: "a4"
        });


    const operatorName =
        document.getElementById(
            "operatorName"
        ).value.trim();


    const farmName =
        document.getElementById(
            "farmName"
        ).value.trim();


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


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const pageHeight =
        doc.internal.pageSize.getHeight();


    const margin =
        18;


    let y = 20;


    /* =====================================================
       OUTILS PDF
    ====================================================== */

    function setColor(hex) {

        const rgb =
            hex.match(/\w\w/g)
                .map(value =>
                    parseInt(value, 16)
                );


        doc.setTextColor(
            rgb[0],
            rgb[1],
            rgb[2]
        );
    }


    function setFill(hex) {

        const rgb =
            hex.match(/\w\w/g)
                .map(value =>
                    parseInt(value, 16)
                );


        doc.setFillColor(
            rgb[0],
            rgb[1],
            rgb[2]
        );
    }


    function setDraw(hex) {

        const rgb =
            hex.match(/\w\w/g)
                .map(value =>
                    parseInt(value, 16)
                );


        doc.setDrawColor(
            rgb[0],
            rgb[1],
            rgb[2]
        );
    }


    function addPageIfNeeded(height) {

        if (
            y + height >
            pageHeight - 18
        ) {

            doc.addPage();

            y = 20;

            addPageHeader();
        }
    }


    function addPageHeader() {

        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(8);

        setColor("77777D");

        doc.text(
            "CONDITIONNALITÉ 31 · DIAGNOSTIC ENVIRONNEMENTAL",
            margin,
            11
        );

        setDraw("E5E5E7");

        doc.setLineWidth(0.3);

        doc.line(
            margin,
            14,
            pageWidth - margin,
            14
        );
    }


    /* =====================================================
       COUVERTURE
    ====================================================== */

    setFill("1D1D1F");

    doc.rect(
        0,
        0,
        pageWidth,
        62,
        "F"
    );


    setColor("FFFFFF");

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(10);

    doc.text(
        "CONDITIONNALITÉ 31",
        margin,
        22
    );


    doc.setFontSize(25);

    doc.text(
        "Diagnostic",
        margin,
        37
    );

    doc.text(
        "environnemental",
        margin,
        48
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(9);

    setColor("C8C8CD");

    doc.text(
        "Haute-Garonne · PAC 2026",
        pageWidth - margin,
        22,
        {
            align: "right"
        }
    );


    y = 78;


    /* IDENTITE */

    setColor("77777D");

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(8);

    doc.text(
        "IDENTIFICATION",
        margin,
        y
    );


    y += 8;


    setColor("1D1D1F");

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(14);

    doc.text(
        operatorName || "Exploitant non renseigné",
        margin,
        y
    );


    y += 7;


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);

    setColor("66666B");

    doc.text(
        farmName || "Exploitation non renseignée",
        margin,
        y
    );


    y += 7;


    doc.text(
        `Diagnostic réalisé le ${date} à ${time}`,
        margin,
        y
    );


    y += 17;


    /* BANDEAU */

    setFill("F3F5F7");

    doc.roundedRect(
        margin,
        y,
        pageWidth - margin * 2,
        22,
        4,
        4,
        "F"
    );


    setColor("1D1D1F");

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(9);

    doc.text(
        "Objet du document",
        margin + 7,
        y + 8
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(8);

    setColor("66666B");

    doc.text(
        "Synthèse des réponses renseignées dans l'autodiagnostic.",
        margin + 7,
        y + 15
    );


    y += 35;


    /* =====================================================
       RESUME
    ====================================================== */

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(16);

    setColor("1D1D1F");

    doc.text(
        "Synthèse",
        margin,
        y
    );


    y += 11;


    const stats =
        calculateStats();


    const statData = [

        {
            label: "Oui",
            value: stats.verifie,
            color: "198754"
        },

        {
            label: "Non",
            value: stats.action,
            color: "D64545"
        },

        {
            label: "À vérifier",
            value: stats.verification,
            color: "B77900"
        },

        {
            label: "Non concerné",
            value: stats["non-concerne"],
            color: "727272"
        }

    ];


    const cardGap = 4;

    const cardWidth =
        (
            pageWidth -
            margin * 2 -
            cardGap * 3
        ) / 4;


    statData.forEach((stat, index) => {

        const x =
            margin +
            index * (cardWidth + cardGap);


        setFill("F8F8F9");

        doc.roundedRect(
            x,
            y,
            cardWidth,
            25,
            3,
            3,
            "F"
        );


        setFill(stat.color);

        doc.roundedRect(
            x,
            y,
            2,
            25,
            1,
            1,
            "F"
        );


        setColor("1D1D1F");

        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(17);

        doc.text(
            String(stat.value),
            x + 7,
            y + 11
        );


        setColor("77777D");

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(7);

        doc.text(
            stat.label,
            x + 7,
            y + 19
        );

    });


    y += 38;


    /* =====================================================
       DETAILS
    ====================================================== */

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(16);

    setColor("1D1D1F");

    doc.text(
        "Détail des réponses",
        margin,
        y
    );


    y += 10;


    const groups = {};


    answers.forEach(item => {

        if (!item) {
            return;
        }


        const domaine =
            item.question.domaine;


        if (!groups[domaine]) {

            groups[domaine] = [];

        }


        groups[domaine].push(item);

    });


    Object.values(groups).forEach(group => {

        const first =
            group[0].question;


        addPageIfNeeded(35);


        /* HEADER DOMAINE */

        setFill("F1F2F4");

        doc.roundedRect(
            margin,
            y,
            pageWidth - margin * 2,
            11,
            3,
            3,
            "F"
        );


        setColor("1D1D1F");

        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(9);


        doc.text(
            cleanPDFText(first.domaineLabel),
            margin + 5,
            y + 7
        );


        y += 16;


        group.forEach(item => {

            const question =
                item.question;


            const status =
                item.answer.status;


            const statusLabel =
                getPDFStatusLabel(status);


            const colorMap = {

                verifie: "198754",

                action: "D64545",

                verification: "B77900",

                "non-concerne": "727272"

            };


            const statusColor =
                colorMap[status] ||
                "727272";


            const titleLines =
                doc.splitTextToSize(
                    cleanPDFText(
                        question.titre
                    ),
                    112
                );


            const actionLines =
                doc.splitTextToSize(
                    cleanPDFText(
                        question.action || ""
                    ),
                    112
                );


            const boxHeight =
                15 +
                titleLines.length * 4 +
                actionLines.length * 3.5;


            addPageIfNeeded(
                boxHeight + 4
            );


            setFill("FFFFFF");

            setDraw("E5E5E7");

            doc.setLineWidth(0.3);

            doc.roundedRect(
                margin,
                y,
                pageWidth - margin * 2,
                boxHeight,
                3,
                3,
                "FD"
            );


            /* LIGNE STATUT */

            setFill(statusColor);

            doc.roundedRect(
                margin,
                y,
                2.5,
                boxHeight,
                1,
                1,
                "F"
            );


            /* TITRE */

            setColor("1D1D1F");

            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(8.5);


            doc.text(
                titleLines,
                margin + 7,
                y + 8
            );


            /* STATUT */

            setFill(statusColor);

            doc.roundedRect(
                pageWidth - margin - 32,
                y + 5,
                27,
                8,
                2,
                2,
                "F"
            );


            setColor("FFFFFF");

            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(6.5);


            doc.text(
                statusLabel,
                pageWidth - margin - 18.5,
                y + 10,
                {
                    align: "center"
                }
            );


            /* ACTION */

            const actionY =
                y +
                9 +
                titleLines.length * 4;


            setColor("77777D");

            doc.setFont(
                "helvetica",
                "normal"
            );

            doc.setFontSize(7);


            doc.text(
                actionLines,
                margin + 7,
                actionY
            );


            y += boxHeight + 5;

        });


        y += 5;

    });


    /* =====================================================
       DERNIERE PAGE : INFORMATIONS
    ====================================================== */

    addPageIfNeeded(70);


    y += 8;


    setFill("F3F5F7");

    doc.roundedRect(
        margin,
        y,
        pageWidth - margin * 2,
        42,
        4,
        4,
        "F"
    );


    setColor("1D1D1F");

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(9);


    doc.text(
        "À propos de ce document",
        margin + 8,
        y + 10
    );


    setColor("66666B");

    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(7.5);


    const warning =
        "Cet outil aide à identifier les points qui méritent une vérification. " +
        "Il ne constitue pas une attestation de conformité réglementaire.";


    const warningLines =
        doc.splitTextToSize(
            warning,
            pageWidth - margin * 2 - 16
        );


    doc.text(
        warningLines,
        margin + 8,
        y + 18
    );


    const privacy =
        "Les réponses sont traitées localement dans le navigateur et ne sont pas enregistrées sur ce site.";


    const privacyLines =
        doc.splitTextToSize(
            privacy,
            pageWidth - margin * 2 - 16
        );


    doc.text(
        privacyLines,
        margin + 8,
        y + 31
    );


    /* =====================================================
       PIED DE PAGE SUR TOUTES LES PAGES
    ====================================================== */

    const pageCount =
        doc.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= pageCount;
        page++
    ) {

        doc.setPage(page);


        setColor("99999F");

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(6.5);


        doc.text(
            "Conditionnalité 31 · Diagnostic environnemental · 2026",
            margin,
            pageHeight - 9
        );


        doc.text(
            `${page} / ${pageCount}`,
            pageWidth - margin,
            pageHeight - 9,
            {
                align: "right"
            }
        );

    }


    /* =====================================================
       NOM DU FICHIER
    ====================================================== */

    const safeName =
        (
            operatorName ||
            "exploitant"
        )
            .replace(
                /[^a-zA-Z0-9À-ÿ_-]/g,
                "_"
            );


    doc.save(
        `Diagnostic_Conditionnalite_31_${safeName}_${date.replaceAll("/", "-")}.pdf`
    );
}


/* =========================================================
   SECURITE HTML
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
