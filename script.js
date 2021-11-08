let pics = document.querySelectorAll('.fotochki');
let filter = document.querySelector('.filter');



filter.onchange = function () {           
  for (let pic of pics) {
    if (pic.dataset.category !== filter.value && filter.value !== 'all') {         // оператор строгого НЕравенства, к нему добавил логическое И, чтобы все картинки показывались
      pic.classList.add('hidden')
    } else {
      pic.classList.remove('hidden')
    }
  } 
}

// let form = document.querySelector('form');
// let error = document.querySelector('.error');
// let submit = document.querySelector('.submit-button');
// let reviews = document.querySelectorAll('.review');

// form.onchange = function () {
// for (let review of reviews) {
// review.onclick = function () {
// if (review.dataset.evaluation !== 'good') {
// error.classList.add('shown');
// submit.disabled = true;
// } else {
// error.classList.remove('shown');
// submit.disabled = false;
// }
// }
// }
// }