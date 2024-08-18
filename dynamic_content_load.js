// hero section 
var header = [
    {
        h: "A Fully Integrated Site of Web Development Projects", p: "Our platform offers a collection of web development mini projects designed to enhance your coding skills and creativity. Whether you are a beginner or an experienced developer, you'll find something to challenge and inspire you.",
        img1: "Resources/web5.png" ,
        link : "https://github.com/Shaurya01836/Web-dev-mini-projects"
    },
]
var hearderz = "";
header.forEach(function (header) {
    hearderz += ` <div id="left-h">
                <h1>${header.h}</h1>
                <p>${header.p}</p>
                <div class="hero-buttons">
                    <a href="#" class="btn-primary">Documentation</a>
                    <a target="_blank" href="${header.link}"
                        class="btn-secondary">View on GitHub</a>
                </div>
                <div class="herostats">
                    <h5>8 Projects --</h5>
                    <h5>0 Contributor --</h5>
                    <h5>0 Forks</h5>
                </div>
            </div>
            <div id="right-h">
                <img loading="lazy" src="${header.img1}"alt="">
            </div>`
})
document.querySelector("header").innerHTML = hearderz ;


//for Technology & Tools (button)
let tech = [
    { names: "HTML" },
    { names: "CSS" },
    { names: "JAVA SCRIPT" },
    { names: "REACT" },
    { names: "REMIX ICON" }
]

var techz = "";
tech.forEach(function (tech) {
    techz += `<button>${tech.names}</button>`
})

document.querySelector(".tech").innerHTML = techz;


//for Featured Projects (cards)
let arr = [
    { name: "BMI Calculator", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/BMI.png", link: "BMI Calculator/index.html" },
    { name: "Quiz Game", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/quiz.png", link: "Quiz-Game/index.html" },
    { name: "Weather", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/weather.png", link: "Weather/index.html" },
    { name: "Typing Test", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/typing test.png", link: "" },
    { name: "Password Generator", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/pass_generator1.png", link: "Random-Password-Generator-master/index.html" },
    { name: "Url shortener", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/Url.png", link: "" },
    { name: "To do List", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/Todo list1.png", link: "todo-list/index.html" },
    { name: "Qr code maker", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/Qr_code.png", link: "QR-Code-Generator/index.html" },
    
    
]

var clutter = "";
arr.forEach(function (Object) {
    clutter += ` <div class="cards">
                    <img loading="lazy" src="${Object.img}" alt="${Object.name}">
                    <h4>${Object.name}</h4>
                    <p>${Object.des}</p>
                    <a target="blank" href="${Object.link}">Explore</a>
                </div> `
})

document.querySelector(".tools").innerHTML = clutter;


// for faq section

let faq = [
    { ques: "What is the main focus of this website?", ans: "This website showcases a collection of mini web development projects, providing examples and resources for learning and improving web development skills." },
    { ques: "Can I use the code from these projects for my own work?", ans: "Yes, you can use the code from these projects for educational purposes and personal projects. Please make sure to credit the original source." },
    { ques: "How can I contribute to this repository?", ans: "Contributions are welcome! Fork the repository, create a feature branch, commit your changes, and submit a pull request. Please ensure your contributions align with the project's goals and standards." },
    { ques: "How can I contact you for collaboration or questions?", ans: "For any inquiries or collaboration requests, you can contact me via the email provided on the contact page or through my GitHub profile: Shaurya01836." }
]

var faqz = "";
faq.forEach(function (faq) {
    faqz += `  <div class="faq">
            <div class="ques">
                <h4>${faq.ques}</h4>
                <i class="ri-arrow-drop-down-fill"></i>
            </div>
            <p class="ans">${faq.ans}</p>
        </div>`
})

document.querySelector("#right-f").innerHTML = faqz;
