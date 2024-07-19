
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
    { ques: "Lorem ipsum dolor sit amet?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur sed aut expedita tempora quae beatae, rem, libero magnam id illo quos nesciunt soluta ex porro voluptatibus voluptatem voluptate. Amet." },
    { ques: "Lorem ipsum dolor sit amet?", ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatum veniam esse." },
    { ques: "Lorem ipsum dolor sit amet?", ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { ques: "Lorem ipsum dolor sit amet?", ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." }
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


