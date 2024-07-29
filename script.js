// for toggle dark mode 
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    let isDarkMode = false;

    modeToggle.addEventListener('click', function () {
        if (isDarkMode) {
            modeToggle.classList.replace('ri-moon-fill', 'ri-sun-fill');
            document.body.classList.remove('dark-mode');
        } else {
            modeToggle.classList.replace('ri-sun-fill', 'ri-moon-fill');
            document.body.classList.add('dark-mode');
        }
        isDarkMode = !isDarkMode;
    });
});


// for faq section

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




const projects = [
    {
        name: 'BMI Calculator',
        img: 'https://via.placeholder.com/400x300?text=BMI+Calculator',
        desc: 'This project calculates Body Mass Index based on user input.'
    },
    {
        name: 'Quiz Game',
        img: 'https://via.placeholder.com/400x300?text=Quiz+Game',
        desc: 'A simple quiz game to test your knowledge on various topics.'
    },
    {
        name: 'Weather',
        img: 'https://via.placeholder.com/400x300?text=Weather',
        desc: 'A weather application that shows current weather conditions.'
    },
    {
        name: 'Typing Test',
        img: 'https://via.placeholder.com/400x300?text=Typing+Test',
        desc: 'A typing test to measure your typing speed and accuracy.'
    }
];

function changeContent(index) {
    const leftP = document.querySelector('.left-p');
    const rightP = document.querySelector('.right-p');
    const projectImg = document.getElementById('project-img');
    const projectDesc = document.getElementById('project-desc');

    leftP.classList.add('fade-out');
    rightP.classList.add('fade-out');

    setTimeout(() => {
        projectImg.src = projects[index].img;
        projectDesc.textContent = projects[index].desc;

        leftP.classList.remove('fade-out');
        rightP.classList.remove('fade-out');

        leftP.classList.add('fade-in');
        rightP.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
        leftP.classList.remove('fade-in');
        rightP.classList.remove('fade-in');
    }, 500);
}


// var main = document.querySelector("main")
// var crsr = document.querySelector(".cursor")

// main.addEventListener("mousemove" , function(dets){
// crsr.style.left = dets.x + "px"
// crsr.style.top = dets.y + "px"
// })