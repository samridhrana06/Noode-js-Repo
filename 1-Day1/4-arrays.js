// Problem 4: Arrays
// You're organizing a party and want to keep track of the guest list. 
// Create an array called
// "guestList" and add the names of at least five guests. 
// Then, write a program that checks if a
// given name is on the guest list. If the name is found, display 
// "Welcome to the party, [name]!";
// otherwise, display "Sorry, you're not on the guest list."


var prompt = require('prompt-sync')()
const name= prompt('Enter your name: ');
const guest = ['samridh','sam','shilpa','soman','kusum','Himanshu'];
let flag = 0;
for(let i=0;i<guest.length;i++){
    if(guest[i]== name){
        flag = 1;
        break;
    }
}

if(flag == 1){
    console.log(`Welcome to the party ${name}`);
}
else{
    console.log(`Sorry, you're not on the guest list.`);
}