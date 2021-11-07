let pics = document.querySelectorAll('.fotochki');
let filter = document.querySelector('.filter');



filter.onchange = function () {           
  for (let pic of pics) {
    if (pic.dataset.category === filter.value) {        
      pic.classList.add('highlight')
    }
  }
}