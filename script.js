let pics = document.querySelectorAll('.fotochki');
let filter = document.querySelector('.filter');

for (let pic of pics) {
  if (pic.dataset.category === 'tyan') {        //оператор строгого равенства 
    pic.classList.add('highlight')
  }
  
}