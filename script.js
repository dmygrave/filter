let pics = document.querySelectorAll('.fotochki');
let filter = document.querySelector('.filter');



filter.onchange = function () {           //обработчик событий
  for (let pic of pics) {
    if (pic.dataset.category === filter.value) {        //оператор строгого равенства + Валуев хеххее
      pic.classList.add('highlight')
    }
  }
}