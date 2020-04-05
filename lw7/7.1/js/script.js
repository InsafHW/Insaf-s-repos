function isPrimeNumber(digit){
	if ((typeof(digit) === 'number') || (typeof(digit) === 'object')){
		if (typeof(digit) === 'number'){
		let isPrime = true;
		for (let j = 2; j < digit; j++){
			isPrime = true;
			if ((digit % j) == 0){
				isPrime = false;
				break
			}
		}
		if (isPrime){
			console.log('Число ' + digit + ' простое')
		} else{
			console.log('Число ' + digit + ' непростое')
		}
	}
	else if (typeof(digit) === 'object'){
		for(let i = 0; i < (digit.length); i++){
			var num = digit[i];
			let isPrime = true;
			for (let j = 2; j < num; j ++){
				isPrime = true;
				if ((num % j) === 0){
					isPrime = false;
					break
				}
			}
			if (isPrime){
				console.log('Число ' + num + ' простое')
			} else{
				console.log('Число ' + num + ' непростое')
			}
		}
	}
	} else{
		console.log('Неккоректный ввод')
	}

}

