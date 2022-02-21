//     github.com/berathazer

let length = document.querySelector('#length');
let uppercase = document.querySelector('#uppercase');
let lowercase = document.querySelector('#lowercase');
let number = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let password = document.querySelector('#password');
let button = document.querySelector('.btn');

const numbers    ="0123456789"
const uppercases ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercases ="abcdefghijklmnopqestuvwxyz";
const symboles   ="$#%&=*-_.";

button.addEventListener('click',function(){   // generate password 
    let array =[];
    password.value = "";

    if(uppercase.checked){
        for(let i = 0; i<uppercases.length ; i++){
            array.push(uppercases[i]);
        }
    }

    if(lowercase.checked){
        for(let i = 0; i<lowercases.length ; i++){
            array.push(lowercases[i]);
        }
    }

    if(number.checked){
        for(let i = 0; i<numbers.length ; i++){
            array.push(numbers[i]);
        }
    }

    if(symbols.checked){
        for(let i = 0; i<symboles.length ; i++){
            array.push(symboles[i]);
        }
    }

    array.reverse();
    for(let i =0 ; i<length.value ; i++){
        if(array[0])
            password.value += array[Math.floor(Math.random()*array.length)];
    }
});

password.addEventListener('click',function(){     // for copy to clipboard
    const textarea = document.createElement('textarea');
    if(!password.value) return;
    textarea.value = password.value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert(`${password.value} kopyalandi`);
});