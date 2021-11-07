let pics = document.querySelectorAll('.fotochki');
let filter = document.querySelector('.filter');



filter.onchange = function () {           
  for (let pic of pics) {
    if (pic.dataset.category !== filter.value) {         // оператор строгого НЕравенства1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      pic.classList.add('hidden')
    } else {
      pic.classList.remove('hidden')
    }
  }
}