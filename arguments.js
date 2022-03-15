function addNumbers(num1, num2) {

    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;

    }

    function logInfo(massage) {
        console.log(massage);
    }
    logInfo('Good Morning')

    var double = sum * 2;

    return sum;
}

var result = addNumbers(3, 5, 5, 8, 25, 45, 45);
console.log(result);