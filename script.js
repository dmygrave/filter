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
