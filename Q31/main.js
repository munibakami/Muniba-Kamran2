"use strict";
//31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let username = ["Ahamed", "Ahsen", "Sana", "Hasnain"];
if (username.length === 0) {
    console.log("we need to find some user!");
}
else {
    for (let i = 0; i < username.length; i++)
        ;
}
console.log(username);
//2nd method
//let usernames: string[]=[];
//if(usernames.length === 0){
// console.log("we need to find some user!")
//}
//else{
// for(let i=0; i< usernames.length; i++);
//}
//console.log(username[i])
