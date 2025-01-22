const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


const navfaner = document.getElementById("nav-tabs")
const content = document.getElementById("content")

let resourcesHTML = "";

// Dynamisk generering av navigasjonselementer
resources.map((resource, index) => 
    resourcesHTML += `<li data-index="${index}" class="${index === 0 ? "active" : ""}">${resource.category}</li>`)

navfaner.innerHTML = resourcesHTML;


function updateFaner(index) {
    const resource = resources[index]
    content.innerHTML = `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
    </ul>`
};

// Bruk filter() og map() for å vise HTML-kategori innhold ved siden lasting
const htmlResource = resources.filter(resource => resource.category === "HTML")[0];
content.innerHTML = `<h2>${htmlResource.category}</h2>
    <p>${htmlResource.text}</p>
    <ul>
        ${htmlResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
    </ul>`;

// Legg til event listeners på hvert listeelement (uten å bruke forEach eller querySelectorAll)
const tabs = navfaner.getElementsByTagName('li');  // Hent alle li-elementene
for (let tab of tabs) {
    tab.addEventListener("click", (event) => {
        const li = event.target;
        const index = li.dataset.index;

        // Fjern 'active' klasse fra alle tabene
        for (let tab of tabs) {
            tab.classList.remove("active");
        }

        // Legg til 'active' på den valgte taben
        li.classList.add("active");

        // Oppdater innholdet basert på valgt kategori
        updateFaner(index);
    });
}

// Initialiser innhold ved å vise den første kategorien
updateFaner(0);

