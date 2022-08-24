const calcInput = document.querySelector('.screen')
const buttons = document.querySelectorAll('.button')
// const operators = ['*', '/', '+', '-']

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        calcInput.innerText += value
    })
})

