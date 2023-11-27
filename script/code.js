let array = [1, 15, 3, 4, 5, 52];
let sum = 0; 

let arr1 = document.querySelector('[data-arr1]').textContent = array


function test(){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    document.querySelector('[data-output]').textContent = sum
}

let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', test)