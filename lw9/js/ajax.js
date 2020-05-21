let form = document.getElementById('form');//Получили форму
let successField = document.getElementById('success');//Поле для вывода
let img = document.getElementById('success_img');
img.style.opacity = '1';

form.addEventListener('submit', function(event) {
  let first_name = document.getElementById('first_name');
  let email = document.getElementById('email');
  let country = document.getElementById('country');
  let gender = document.getElementById('gender');
  let message = document.getElementById('message');

  let searchParams = new URLSearchParams();
  searchParams.set('FirstName', first_name.value);
  searchParams.set('Email', email.value);
  searchParams.set('Country', country.value);
  searchParams.set('Gender', gender.value);
  searchParams.set('Message', message.value);

  let promise = fetch('../php/ajax.php', {
    method: 'POST',
    body: searchParams,
  })

  promise.then(
    response => {
      return response.text();
    }
  ).then(
    text => {
      let redTableCheck = text;
      redTableCheck = redTableCheck.split(' ');
      let whichError = '';
      for(let i = 0; i < redTableCheck.length; i++) {
        if (redTableCheck[i] === 'name') {
          whichError += 'id="first_name"';
          first_name.style.border = '2px solid #EE5252';
          successField.style.opacity = '0';
        }
        if (redTableCheck[i] === 'email') {
          whichError += 'id="email"';
          email.style.border = '2px solid #EE5252';
          successField.style.opacity = '0';
        }
      }
      if (whichError === '') {
        first_name.style.border = '2px solid #c9c9c9';
        email.style.border = '2px solid #c9c9c9';
        successField.style.opacity = '1';
      }
    }
  )
  event.preventDefault();
});

