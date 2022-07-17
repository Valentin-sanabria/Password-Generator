


let lengthInput = document.getElementById("numeroLongitud");
let passLength = lengthInput.value;
let passwordOutput = document.getElementById("contraseñaGenerada");
let generateAgain = document.getElementById("generateAgain");
let checkUpperCase = document.getElementById("Mayus");
let checkUnderCase = document.getElementById("Minus"); 
let checkNumbers = document.getElementById("Nums");


let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
let underCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
let fullArray = [];
let password = [];


checkNumbers.addEventListener("click", check=>{
    
    if (checkNumbers.checked) {

       fullArray = fullArray.concat(numbers);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)

})

checkUpperCase.addEventListener("click", check=>{
    
    if (checkUpperCase.checked) {

       fullArray = fullArray.concat(upperCase);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)

})

checkUnderCase.addEventListener("click", check=>{
    
    if (checkUnderCase.checked) {

       fullArray = fullArray.concat(underCase);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)
})

function generatePassword(passLength) {

    password = [];
    passwordOutput.value = password;

    let i=0;
    while ( i != passLength ){
    
        password.push(fullArray[Math.floor(Math.random()*fullArray.length)])
        i++;
    
    }

    passwordOutput.value = password;

}