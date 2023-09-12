const quiz = document.querySelectorAll(".quiz");
const answer = document.querySelectorAll('.answer')

for (let i = 0; i < quiz.length; i++) {
  quiz[i].addEventListener("click", function() {
    quiz[i].classList.toggle('bold');
    quiz[i].nextElementSibling.classList.toggle('hidden');
    quiz[i].nextElementSibling.classList.toggle('unhide');
    let last = quiz[i].querySelector('i');
  
    last.classList.toggle('fa-chevron-down');
    last.classList.toggle('fa-chevron-up')
  });
}