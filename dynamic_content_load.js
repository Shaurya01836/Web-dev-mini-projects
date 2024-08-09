// hero section 
var header = [
    {
        h: "A Fully Integrated Site of Web Development Projects", p: "Our platform offers a collection of web development mini projects designed to enhance your coding skills and creativity. Whether you are a beginner or an experienced developer, you'll find something to challenge and inspire you.",
        img1: "https://plus.unsplash.com/premium_vector-1712873279560-474b6f5a5b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFdlYiUyMERldmVsb3BtZW50JTIwUHJvamVjdHN8ZW58MHx8MHx8fDA%3D" ,
        img2: "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" ,
        img3: "https://plus.unsplash.com/premium_vector-1713913589831-611a54b0641c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" ,
        img4: "https://plus.unsplash.com/premium_vector-1711987659854-3f0edf6f6c52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdlYiUyMERldmVsb3BtZW50JTIwUHJvamVjdHN8ZW58MHx8MHx8fDA%3D" ,
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
                    <h5>4 Projects --</h5>
                    <h5>0 Contributor --</h5>
                    <h5>0 Forks</h5>
                </div>
            </div>
            <div id="right-h">
                <img src="${header.img1}"alt="">
                <img src="${header.img2}" alt="">
                <img src="${header.img3}"alt="">
                <img src="${header.img4}"alt="">
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
    { name: "Quiz Game", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/quiz.png", link: "Quiz Game/index.html" },
    { name: "Weather", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/weather.png", link: "Weather/index.html" },
    { name: "Typing Test", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Resources/typing test.png", link: "" }
]

var clutter = "";
arr.forEach(function (Object) {
    clutter += ` <div class="cards">
                    <img src="${Object.img}" alt="${Object.name}">
                    <h4>${Object.name}</h4>
                    <p>${Object.des}</p>
                    <button><a target="blank" href="${Object.link}">Explore</a></button>
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
