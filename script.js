


let lengthInput = document.getElementById("numeroLongitud");
let passLength = lengthInput.value;
let sliderInput = document.getElementById("sliderLength");
let sliderLength = sliderInput.value;
let copiedAlert = document.getElementById("copiedText");
let passwordOutput = document.getElementById("contraseñaGenerada");
let generateAgain = document.getElementById("generateAgain");
let copyClipboard = document.getElementById("copyClipboard");
let checkUpperCase = document.getElementById("Mayus");
let checkUnderCase = document.getElementById("Minus"); 
let checkNumbers = document.getElementById("Nums");
let checkSymbols = document.getElementById("Symbols")

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
let underCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
let symbols = ["!", "&", "_", "/", "$", "#", "@", "?", ";", "%"]; 
let fullArray = [];
let password = [];


//checks length input and writes it on let, automatically calls generatePassword() 
lengthInput.addEventListener("click", checkLength=>{

    passLength =lengthInput.value;
    sliderInput.value = passLength;
    generatePassword(passLength);

})

sliderInput.addEventListener("click", checkSlider=>{

    passLength = sliderInput.value;
    lengthInput.value = passLength;
    generatePassword(passLength);

})

//button which generates another password with the same requisites.
generateAgain.addEventListener("click", buttonGenerate=>{

        generatePassword(passLength);

})

//button to copy password to clipborad instantly. 
// AGREGAR UN MENSAJE DE QUE LA CONTRASEÑA FUE COPIADA.
copyClipboard.addEventListener("click", copyToClip=>{

    navigator.clipboard.writeText((passwordOutput.value));
    copiedAlert.innerText = "Your new password has been copied to clipboard!";
  
})


//click event for adding number checkbox
checkNumbers.addEventListener("click", check=>{
    
    if (checkNumbers.checked) {

       fullArray = fullArray.concat(numbers);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)

})

//click event for adding upper case checkbox
checkUpperCase.addEventListener("click", check=>{
    
    if (checkUpperCase.checked) {

       fullArray = fullArray.concat(upperCase);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)

})

//click event for adding under case checkbox
checkUnderCase.addEventListener("click", check=>{
    
    if (checkUnderCase.checked) {

       fullArray = fullArray.concat(underCase);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)
})

//click event for adding symbols checkbox
checkSymbols.addEventListener("click", check=>{
    
    if (checkSymbols.checked) {

       fullArray = fullArray.concat(symbols);
      
       console.log(fullArray);


    } else {

        console.log("rayos");
    }

    generatePassword(passLength)
})

//generate the password array with push and write it on the output
function generatePassword(passLength) {

    password = [];
    passwordOutput.value = password;

    let i=0;
    while ( i != passLength ){
    
        password.push(fullArray[Math.floor(Math.random()*fullArray.length)])
        i++;
    }

    passwordOutput.value = password.join("");
    

}

