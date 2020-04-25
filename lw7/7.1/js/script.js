function isPrimeDigit(digit){
  if (typeof(digit) == 'number'){
    let isPrime = true;
    if (digit < 2){
      console.log(digit + ' непростое число');
    }
    else{
      for (let i = 2; i < digit; i++){
        isPrime = true;
        if ((digit % i) == 0){
          isPrime = false;
          break;
        }
      }
      if (isPrime){
        console.log(digit + ' простое число');
      }
      else{
        console.log(digit + ' непростое число');
      }
    }
  }
  else if (typeof(digit) == 'object'){
    if (digit.length == 0){
      console.log('Неккоректный ввод');
    }
    else{
      for(let i = 0; i < digit.length; i++){
        let num = digit[i];
        let isPrime = true;
        if (num < 2){
          console.log(num + ' непростое число')
        }
        else{
          for (let i = 2; i < num; i++){
            isPrime = true;
            if ((num % i) == 0){
              isPrime = false;
              break;
            }
          }
          if (isPrime){
            console.log(num + ' простое число');
          }
          else{
            console.log(num + ' непростое число');
          }
        }
      }
    }
  }
  else{
    console.log('Неккоректный ввод')
  }
}