let num = 42 //number
let firstName = 'Vladilen' //string
const isProgrammer = true //boolean

/* Can do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' // плохая практика // лучше написать firstName
let myNum = 34 // good
let num42 = 10 */

/* Запрещённые (Restricted)
let 42num = '11'
 let my-name = 1
 let false и тд */

//firstName = 'Max'
// isProgrammer = false // error because of const

//alert(firstName)
//console.log('test: ',firstName, isProgrammer)

/* console.log(num + 10)
console.log(num / 10)
console.log(num) 
let num2 = num + 10
console.log(num, num2)
num = num2 - num
num2 = num2 + 1
console.log(num, num2)
let num3 = (num + 10 * 2) / 3 - 1
console.log(num3)
const fullName = firstName + ' Minin'
console.log(fullName) */

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

//console.log(input1.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 42
//console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result ) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol == '+' ? num1+num2 : num1-num2
}
submitBtn.onclick = function () {

    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}