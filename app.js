let num = 42;  // number 
let firstName = 'Igor';  // string
const isProgrammer = true;  // boolean

/* Can Do
let $ = 'test';
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
let first_name = 'Elena';  // bad
let myNum = 34;  // good
let num1 = 10;
*/

/* Restricted (запрещенные названия)
let 42num = '11';
let my-name = 'igor';
let const
*/

//firstName = 'Max';
// isProgrammer = false  // error because of const

//alert(firstName)
//console.log('Test', firstName, num, isProgrammer);

// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num);

// let num2 = num + 10;
// console.log(num, num2);
// num =  num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);

// let num3 = num + (10 * 2) / 5 - 1;
// console.log(num3);

//const fullName = firstName + ' Lipisa';
//const fullName = firstName + ' ' + 'Lipisa';
//console.log(fullName);

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const proizBtn = document.getElementById('proiz');
const delBtn = document.getElementById('del');
let action = '+'

//console.log(input1.value);

// console.log(resultElement.textContent);
// resultElement.textContent = (42 - 2) / num;

//console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+';
};

minusBtn.onclick = function () {
    action = '-';
};

proizBtn.onclick = function () {
    action = '*';
};

delBtn.onclick = function () {
    action = '/';
};


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
        resultElement.textContent = result;
    }
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol == '+') {
        return num1 + num2;
    } else if (actionSymbol == '-') {
        return num1 - num2;
    } else if (actionSymbol == '*') {
        return num1 * num2;
    } else if (actionSymbol == '/') {
        return num1 / num2;
    }
};

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result)


    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum)
    // } else if (action == '-' ) {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum)
    // };
};



