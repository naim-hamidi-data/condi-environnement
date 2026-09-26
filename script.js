/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        section: "NITRATES",
        category: "DOCUMENTS & PRATIQUES",
        title: "Plan prévisionnel de fumure",
        text: "Votre PPF est-il réalisé selon une méthode de calcul conforme à la méthode COMIFER ?",
        action: "Vérifier la méthode utilisée pour établir votre PPF et conserver les éléments permettant de justifier le calcul."
    },

    {
        section: "NITRATES",
        category: "DOCUMENTS & PRATIQUES",
        title: "Cahier d'enregistrement",
        text: "Vos enregistrements permettent-ils de retrouver les dates et les quantités d'azote apportées pour vos fertilisations ?",
        action: "Vérifier que vos enregistrements permettent de retrouver les dates et quantités d'azote apportées."
    },

    {
        section: "NITRATES",
        category: "DOCUMENTS & PRATIQUES",
        title: "Équilibre de la fertilisation azotée",
        text: "Vos apports d'azote respectent-ils l'équilibre prévu par votre PPF, sauf situation bénéficiant d'une dérogation applicable ?",
        action: "Comparer les apports réalisés avec le PPF et vérifier les éventuelles dérogations applicables."
    },

    {
        section: "NITRATES",
        category: "ANALYSE DE SOL",
        title: "Reliquat azoté / analyse de sol",
        text: "Disposez-vous de l'analyse de sol ou du reliquat azoté lorsqu'il est requis pour votre situation ?",
        action: "Vérifier que vous disposez de l'analyse ou du reliquat requis et de son justificatif."
    },

    {
        section: "NITRATES",
        category: "ÉPANDAGE",
        title: "Périodes d'interdiction d'épandage",
        text: "Vos épandages respectent-ils les périodes d'interdiction applicables à vos fertilisants et à vos cultures ?",
        action: "Consulter le calendrier officiel des périodes d'interdiction et vérifier vos pratiques."
    },

    {
        section: "NITRATES",
        category: "COUVERTURE DES SOLS",
        title: "Couverture des sols",
        text: "Avez-vous respecté les règles de couverture des sols applicables à vos parcelles après récolte ?",
        action: "Vérifier les règles applicables à chaque situation : colza, céréales d'hiver, culture de printemps, repousses ou dérogation."
    },

    {
        section: "NITRATES",
        category: "CONTRÔLE SUR PLACE",
        title: "Bande tampon le long des cours d'eau",
        text: "Vos parcelles concernées disposent-elles d'une bande tampon d'au moins 5 mètres le long des cours d'eau classés BCAE ?",
        action: "Vérifier la présence de la bande tampon réglementaire. En cas de doute sur les îlots concernés, contacter la DDT."
    },

    {
        section: "EAU",
        category: "IRRIGATION",
        title: "Prélèvement d'eau",
        text: "Si vous irriguez, votre prélèvement est-il autorisé ou déclaré lorsque cela est nécessaire ?",
        action: "Vérifier votre situation administrative et conserver les justificatifs correspondant au prélèvement."
    },

    {
        section: "EAU",
        category: "IRRIGATION",
        title: "Volumes et périodes",
        text: "Respectez-vous les volumes et périodes de prélèvement applicables à votre autorisation ?",
        action: "Comparer vos pratiques avec les conditions prévues par votre autorisation ou les règles applicables."
    },

    {
        section: "EAU",
        category: "CONTRÔLE SUR PLACE",
        title: "Installation de prélèvement",
        text: "Pouvez-vous présenter votre installation de prélèvement et les éléments permettant de vérifier votre dispositif ?",
        action: "Préparer l'accès aux équipements de prélèvement et aux justificatifs correspondants."
    },

    {
        section: "EAU",
        category: "PULVÉRISATION",
        title: "Remplissage du pulvérisateur",
        text: "Votre installation dispose-t-elle d'au moins un dispositif permettant d'éviter le retour du produit vers le réseau et le débordement de la cuve ?",
        action: "Vérifier la présence d'un dispositif adapté : clapet anti-retour, dispositif anti-débordement ou système équivalent."
    },

    {
        section: "OISEAUX & HABITATS",
        category: "HAIES",
        title: "Taille des haies",
        text: "Avez-vous réalisé ou prévoyez-vous une taille de vos haies pendant la période de mars à août ?",
        action: "Vérifier vos périodes d'entretien des haies et éviter les interventions pendant les périodes réglementairement interdites."
    },

    {
        section: "OISEAUX & HABITATS",
        category: "NATURA 2000",
        title: "Natura 2000",
        text: "Votre exploitation ou certaines de vos parcelles sont-elles concernées par un site Natura 2000 ?",
        action: "Identifier les parcelles concernées et vérifier les règles et mesures de protection applicables au site."
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let answers = [];


/* =========================================
   ÉCRANS
========================================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   ACCUEIL
========================================= */

function goHome() {

    showScreen("homeScreen");

}


/* =========================================
   DÉMARRER
========================================= */

function startDiagnostic() {

    currentQuestion = 0;

    answers = [];

    document.getElementById("questionTotal").textContent =
        questions.length;

    showScreen("diagnosticScreen");

    displayQuestion();

}


/* =========================================
   AFFICHER QUESTION
========================================= */

function displayQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("sectionLabel").textContent =
        question.section;

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("questionCategory").textContent =
        question.category;

    document.getElementById("questionTitle").textContent =
        question.title;

    document.getElementById("questionText").textContent =
        question.text;


    const progress =
        ((currentQuestion) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progress}%`;


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    const options = [

        {
            label: "Oui, j'ai vérifié",
            value: "green",
            className: "answer-green"
        },

        {
            label: "Je dois vérifier",
            value: "orange",
            className: "answer-orange"
        },

        {
            label: "Non / absent",
            value: "red",
            className: "answer-red"
        },

        {
            label: "Non concerné",
            value: "gray",
            className: "answer-gray"
        }

    ];


    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            `answer-button ${option.className}`;

        button.innerHTML = `
            <span class="answer-indicator"></span>
            <span>${option.label}</span>
        `;

        button.onclick = () => {

            selectAnswer(option.value);

        };

        answersContainer.appendChild(button);

    });

}


/* =========================================
   RÉPONSE
========================================= */

function selectAnswer(value) {

    answers[currentQuestion] = value;


    setTimeout(() => {

        if (currentQuestion < questions.length - 1) {

            currentQuestion++;

            displayQuestion();

        } else {

            displayResults();

        }

    }, 180);

}


/* =========================================
   RÉSULTATS
========================================= */

function displayResults() {

    const green =
        answers.filter(a => a === "green").length;

    const orange =
        answers.filter(a => a === "orange").length;

    const red =
        answers.filter(a => a === "red").length;


    document.getElementById("greenCount").textContent =
        green;

    document.getElementById("orangeCount").textContent =
        orange;

    document.getElementById("redCount").textContent =
        red;


    const pointsToCheck =
        orange + red;


    document.getElementById("conclusionTitle").textContent =
        `Votre diagnostic a identifié ${pointsToCheck} point${pointsToCheck > 1 ? "s" : ""} à vérifier.`;


    document.getElementById("conclusionText").textContent =
        pointsToCheck === 0
            ? "Aucun point particulier n'a été signalé par vos réponses."
            : "Consultez les éléments ci-dessous avant votre prochaine campagne.";


    const list =
        document.getElementById("resultsList");

    list.innerHTML = "";


    questions.forEach((question, index) => {

        const answer = answers[index];

        if (answer === "orange" || answer === "red") {

            const item =
                document.createElement("div");

            item.className = "result-item";


            const color =
                answer === "orange"
                    ? "var(--orange)"
                    : "var(--red)";


            item.innerHTML = `

                <div class="result-item-header">

                    <span
                        class="result-dot"
                        style="background:${color}"
                    ></span>

                    <h4>
                        ${question.title}
                    </h4>

                </div>

                <p>
                    ${question.action}
                </p>

            `;


            list.appendChild(item);

        }

    });


    if (pointsToCheck === 0) {

        list.innerHTML = `

            <div class="result-item">

                <div class="result-item-header">

                    <span
                        class="result-dot"
                        style="background:var(--green)"
                    ></span>

                    <h4>
                        Aucun point particulier identifié
                    </h4>

                </div>

                <p>
                    Continuez néanmoins à vérifier régulièrement
                    vos documents et vos pratiques.
                </p>

            </div>

        `;

    }


    showScreen("resultScreen");

}


/* =========================================
   ACTIONS
========================================= */

function showActions() {

    const list =
        document.getElementById("actionsList");

    list.innerHTML = "";


    const groups = {};


    questions.forEach((question, index) => {

        const answer = answers[index];

        if (answer === "orange" || answer === "red") {

            if (!groups[question.section]) {

                groups[question.section] = [];

            }

            groups[question.section].push(question);

        }

    });


    Object.keys(groups).forEach(section => {

        const group =
            document.createElement("div");

        group.className =
            "action-group";


        group.innerHTML = `

            <div class="action-group-title">
                ${section}
            </div>

        `;


        groups[section].forEach(question => {

            const item =
                document.createElement("div");

            item.className =
                "action-item";


            item.innerHTML = `

                <div class="action-checkbox"></div>

                <div>

                    <strong>
                        ${question.title}
                    </strong>

                    <p>
                        ${question.action}
                    </p>

                </div>

            `;


            group.appendChild(item);

        });


        list.appendChild(group);

    });


    if (Object.keys(groups).length === 0) {

        list.innerHTML = `

            <div class="action-item">

                <div class="action-checkbox"></div>

                <div>

                    <strong>
                        Aucun point d'action identifié
                    </strong>

                    <p>
                        Votre diagnostic ne fait ressortir
                        aucun point particulier à vérifier.
                    </p>

                </div>

            </div>

        `;

    }


    showScreen("actionsScreen");

}


/* =========================================
   RETOUR RÉSULTATS
========================================= */

function showResults() {

    displayResults();

}


/* =========================================
   RECOMMENCER
========================================= */

function restartDiagnostic() {

    startDiagnostic();

}

function generatePDF() {

    const { jsPDF } = window.jspdf;

    const operatorName =
        document.getElementById("operatorName")?.value.trim()
        || "Non renseigné";

    const farmName =
        document.getElementById("farmName")?.value.trim()
        || "Non renseignée";

    const today = new Date();

    const date = today.toLocaleDateString("fr-FR");

    const doc = new jsPDF();

    let y = 20;

    // TITRE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("CONDITIONNALITÉ 31", 15, y);

    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
        "Diagnostic environnemental · Haute-Garonne · 2026",
        15,
        y
    );

    y += 15;

    // INFORMATIONS
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Informations du diagnostic", 15, y);

    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    doc.text(`Exploitant : ${operatorName}`, 15, y);
    y += 7;

    doc.text(`Exploitation : ${farmName}`, 15, y);
    y += 7;

    doc.text(`Date : ${date}`, 15, y);

    y += 15;

    // RÉSULTAT
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Résultat du diagnostic", 15, y);

    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const resultText =
        document.querySelector("#resultsSummary")?.innerText
        || "Résultats du diagnostic disponibles sur l'écran précédent.";

    const lines = doc.splitTextToSize(
        resultText,
        180
    );

    doc.text(lines, 15, y);

    y += lines.length * 6 + 15;

    // AVERTISSEMENT
    doc.setFont("helvetica", "bold");
    doc.text("Important", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    const warning =
        "Ce document constitue une trace de votre autodiagnostic. " +
        "Il ne constitue pas une attestation de conformité réglementaire " +
        "et ne remplace pas les textes officiels ou un contrôle administratif.";

    const warningLines = doc.splitTextToSize(
        warning,
        180
    );

    doc.text(warningLines, 15, y);

    // TÉLÉCHARGEMENT
    const fileName =
        `Diagnostic_Conditionnalite_31_${operatorName.replace(/\s+/g, "_")}.pdf`;

    doc.save(fileName);
}
