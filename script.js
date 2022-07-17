


let longitudContraseñaInput = document.getElementById("numeroLongitud");
let passLength = longitudContraseñaInput.value;
let contraseña = document.getElementById("contraseñaGenerada");
let generateAgain = document.getElementById("generateAgain");
let totalUpperCase = 0;
let totalUnderCase = 0;
let totalNumbers = 0;

totalUnderCase = randomNum(totalUnderCase, 10);
totalUpperCase = randomNum(totalUpperCase, 10);
totalNumbers = randomNum(totalNumbers, 10);

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
let underCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
let password = [];

contraseña.value = "My Value";

//modify password length.
longitudContraseñaInput.addEventListener("click",  modificarTamaño=>{

    passLength = longitudContraseñaInput.value;
    console.log(passLength);
    console.log(totalUpperCase);
    
})

//get a random number for array positions
function randomNum(cantChar, longitudPorChar) {
    
    cantChar = Math.floor((Math.random()*longitudPorChar)+1);
    return cantChar;

}

generateAgain.addEventListener("click", generatePassword=>{

    console.log("Cantidad de caracteres en contraseña:" + passLength);

    totalUpperCase = randomNum(totalUpperCase, passLength/2);
    console.log("Cantidad de mayusculas: "+totalUpperCase);

    totalUnderCase = randomNum(totalUnderCase, passLength/2);
    console.log("Cantidad de minusculas: "+totalUnderCase);

    totalNumbers = randomNum(totalNumbers, passLength/2);
    console.log("Cantidad de numeros: "+totalNumbers);

    createPassword(totalUpperCase,totalUnderCase,totalNumbers);
});

function createPassword(totalUpperCase,totalUnderCase,totalNumbers) {
    
    let fusion = upperCase.concat(underCase);
    console.log(fusion);
    
}