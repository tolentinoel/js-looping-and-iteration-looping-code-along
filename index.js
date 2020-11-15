// Code your solutions in this file
function writeCards(names, word) {
    let arrayOfmessages = [];
    for (let i = 0; i < names.length; i++){
        arrayOfmessages.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`);
    }
    return arrayOfmessages;
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}