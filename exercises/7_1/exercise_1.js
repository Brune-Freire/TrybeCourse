const factorial = number => {
    let result = number;
    if (number < 0) {
        console.log('O número precisa ser maior que 0!');
    }
    else if (number === 0) {
        result = 1;
    }
    else {
        for (let i = 1; i < number; i += 1) {
            result = result * i;
        }
    }
    return result;
}
console.log(factorial(1));