function isPrimeDigit(digit){
  if (typeof(digit) == 'number'){
    let isPrime = true;
    if (digit < 2){
      console.log(digit + ' непростое число');
    }
    else{
      isPrime = isPrimeCheck(isPrime, digit);
      primePrint(isPrime, digit);
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
          isPrime = isPrimeCheck(isPrime, num);
          primePrint(isPrime, num);
        }
      }
    }
  }
  else{
    console.log('Неккоректный ввод')
  }
}

function isPrimeCheck(isPrime, digit){
  for (let i = 2; i < digit; i++){
  isPrime = true;
  if ((digit % i) == 0){
    isPrime = false;
    break;
  }
 }
  return isPrime;
}

function primePrint(isPrime, digit){
  if (isPrime){
    console.log(digit + ' простое число');
  }
  else{
   console.log(digit + ' непростое число');
  }
}