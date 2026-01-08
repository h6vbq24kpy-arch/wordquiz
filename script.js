//HTMlの要素の呼び出し
const answer1 = document.querySelector('.Correct');
const answer2 = document.querySelector('.Notcorrect1');
const answer3 = document.querySelector('.Notcorrect2');
const result = document.querySelector('.judge');
const CurrentPage = document.querySelector('.pages');

answer1.addEventListener('click', () => {
    const showresult = '◎正解です';

    result.innerHTML = showresult;   
});

answer2.addEventListener('click', () => {
    const showresult2 = '×不正解です';

    result.innerHTML = showresult2;
});

answer3.addEventListener('click', () => {
    const showresult3 = '×不正解です';

    result.innerHTML = showresult3;
});



