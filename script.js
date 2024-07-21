
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
    techz += `  <button>${tech.names}</button>`
})

document.querySelector(".tech").innerHTML = techz;


//for Featured Projects (cards)
let arr = [
    { name: "BMI Calculator", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Screenshot (657).png", link: "BMI Calculator/index.html" },
    { name: "Quiz Game", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Screenshot (659).png", link: "Quiz Game/index.html" },
    { name: "Weather", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "Screenshot (664).png", link: "Weather/index.html" },
    { name: "Typing Test", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?", img: "", link: "" }
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

document.querySelector("#right-f").innerHTML = faqz ;


document.querySelectorAll('.ques').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');
        const isVisible = answer.style.display === 'block';

        document.querySelectorAll('.ans').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.ques i').forEach(ic => ic.style.transform = 'rotate(0deg)');

        if (!isVisible) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});


