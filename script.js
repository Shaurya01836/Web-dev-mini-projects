document.querySelectorAll('.ques').forEach(ques => {
    ques.addEventListener('click', () => {
        const answer = ques.querySelector('.answer');
        if (answer.classList.contains('on')) {
            answer.classList.remove('on');
        } else {
            document.querySelectorAll('.answer').forEach(ans => ans.classList.remove('on'));
            answer.classList.add('on');
        }
    });
});