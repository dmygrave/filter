/*
1. У всех радиокнопок есть класс review.
2. Чтобы отслеживать переключение радиокнопок, нужно добавить обработчик событий onchange каждой радиокнопке.
3. У каждой радиокнопки есть атрибут data-evaluation. Если отзыв хороший, значение этого атрибута – 'good', а если плохой - 'bad'.
4. Кнопка отправки имеет класс submit-button. Если пользователь выбрал плохой отзыв, кнопку нужно заблокировать, а если хороший — разблокировать.
5. Чтобы показать сигнал об ошибке, элементу с классом error нужно добавить класс shown. Сигнал нужно показывать, если пользователь выбрал плохой отзыв. Если выбран хороший отзыв, сигнал об ошибке нужно спрятать.
*/

// let reviews = document.querySelectorAll('.review')
// const error = document.querySelector('.error')
// const form = document.querySelector('form')
// const submit = document.querySelector('.submit-button')


// form.onchange = function () {
//  for (let review of reviews) {
//   review.onclick = function () {
//       if (review.dataset.evalution !== 'good') { //если атрибут dataset.evalution НЕ равняется хорошо, то надо выдать эррор
//         error.classList.add('shown')
//         submit.disabled = true
//       }  else {
//         error.classList.remove('shown');
//         submit.disabled = false;
//       }
//     }
//   }
// }
  