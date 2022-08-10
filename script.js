


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

let upperEnabled = false;
let underEnabled = false;
let symbolEnabled = false;
let numberEnabled = false;


//checks length input and writes it on passLength, automatically calls generatePassword() 
lengthInput.addEventListener("click", checkLength=>{

    passLength =lengthInput.value;
    sliderInput.value = passLength;
    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled);

})
//checks slider input and writes it on passLength, automatically calls generatePassword() 
sliderInput.addEventListener("click", checkSlider=>{

    passLength = sliderInput.value;
    lengthInput.value = passLength;
    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled);

})

//button which generates another password with the same requisites.
generateAgain.addEventListener("click", buttonGenerate=>{

    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled);

})

//button to copy password to clipborad instantly.  Shows msg.
copyClipboard.addEventListener("click", copyToClip=>{

    navigator.clipboard.writeText((passwordOutput.value));
    copiedAlert.innerText = "Your new password has been copied to clipboard!";
  
})


//click event for adding number checkbox
checkNumbers.addEventListener("click", check=>{
    
    if (checkNumbers.checked) {

       fullArray = fullArray.concat(numbers);
       numberEnabled = true;

    } else {

        fullArray = fullArray.filter( function( numberArray ) {
            return !numbers.includes( numberArray );
          } );
        console.log(fullArray);

        numberEnabled = false;
    }

    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled)

})

//click event for adding upper case checkbox
checkUpperCase.addEventListener("click", check=>{
    
    if (checkUpperCase.checked) {

       fullArray = fullArray.concat(upperCase);
       upperEnabled = true;


    } else {


        fullArray = fullArray.filter( function( numberArray ) {
            return !upperCase.includes( numberArray );
          } );
        console.log(fullArray);
        
        upperEnabled = false;
    }

    generatePassword(passLength, numberEnabled, underEnabled, upperEnabled, symbolEnabled)

})

//click event for adding under case checkbox
checkUnderCase.addEventListener("click", check=>{
    
    if (checkUnderCase.checked) {

       fullArray = fullArray.concat(underCase);     
       underEnabled = true;


    } else {


        fullArray = fullArray.filter( function( numberArray ) {
            return !underCase.includes( numberArray );
          } );
        console.log(fullArray);
        underEnabled = false;
    }

    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled)
})

//click event for adding symbols checkbox
checkSymbols.addEventListener("click", check=>{
    
    if (checkSymbols.checked) {

       fullArray = fullArray.concat(symbols);
       symbolEnabled = true;


    } else {


        fullArray = fullArray.filter( function( numberArray ) {
            return !symbols.includes( numberArray );
          } );
        console.log(fullArray);
        symbolEnabled = false;
    }

    generatePassword(passLength,numberEnabled, underEnabled, upperEnabled, symbolEnabled)
})

//generate the password array with push and write it on the output
function generatePassword(passLength, numberEnabled, underEnabled, upperEnabled, symbolEnabled) {

    if(numberEnabled == true){

       //automatically add a number to the password array. We do this to guarantee AT LEAST one number in  the password. If not, chances are that there wont be any
       password.push(numbers[Math.floor(Math.random()*numbers.length)])
       console.log("caracter push: " + password);

    }

    if(underEnabled == true){

        //automatically add a number to the password array. We do this to guarantee AT LEAST one number in  the password. If not, chances are that there wont be any
        password.push(underCase[Math.floor(Math.random()*underCase.length)])
        console.log("caracter push: " + password);
 
    }

    if(upperEnabled == true){

        //automatically add a number to the password array. We do this to guarantee AT LEAST one number in  the password. If not, chances are that there wont be any
        password.push(upperCase [Math.floor(Math.random()*upperCase.length)])
        console.log("caracter push: " + password);
 
    }

    if(symbolEnabled == true){

        //automatically add a number to the password array. We do this to guarantee AT LEAST one number in  the password. If not, chances are that there wont be any
        password.push(symbols[Math.floor(Math.random()*symbols.length)])
        console.log("caracter push: " + password);
 
    }


    passwordOutput.value = password;

    //Add chars until the password fulfills the length required by the user
    while ( password.length != passLength ){
    
        password.push(fullArray[Math.floor(Math.random()*fullArray.length)])

    }

    //Re-shuffle the password so it doesnt always start with a number, followed by an undercase, etc.
    shuffleArray(password);

    //Show the password in the output.
    passwordOutput.value = password.join("");
    console.log("pass terminada "+password);

    //Empty output, so new passwords arent generated next to old passwords.
    password = [];

}

function  shuffleArray(password){
    
    let currentIndex = password.length;
    let randomIndex = 0; 

    while (currentIndex != 0) {       

        randomIndex = Math.floor(Math.random() * currentIndex);

        //swap places
        [password[currentIndex], password[randomIndex]] = [ password[randomIndex], password[currentIndex]];
        
        currentIndex--;
    }


}