let form = document.getElementById('form');//Получили форму
let successField = document.getElementById('success');//Поле для вывода
let img = document.getElementById('success_img');

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
          whichError += 'id="first_name" ';
          toError(first_name);
          successField.style.opacity = '0';
        }
        if (redTableCheck[i] === 'email') {
          whichError += 'id="email" ';
          toError(email);
          successField.style.opacity = '0';
        }
      }
      if (whichError === 'id="first_name" ') {
        delError(email);
      }
      if (whichError === 'id="email" ') {
        delError(first_name);
      }
      if (whichError === '') {
        delError(email);
        delError(first_name);
        successField.style.opacity = '1';
      }
    }
  )
  event.preventDefault();
});

function delError(element) {
  element.classList.remove("error_border");
  element.classList.add("focused");
}

function toError(element) {
  element.classList.remove("focused");
  element.classList.add("error_border");
}