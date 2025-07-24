for (let i = 1; i <= 5 ; i ++){
    console.log("vuelta numero; ", i);
}

let contador = 0;
while(contador <= 5){
    console.log("contador");
    contador ++
}

let contador2 = 6;
do{
    console.log("contador", contador2);
} while(contador2 <= 5);

let numero1 = 10;
let numero2 = 5;
let operacion = prompt("Ingrese una operacion: ")
switch(operacion){
    case "+":
        console.log("resultado: ", numero1 + numero2);
        break
    case "-":
        console.log("resultado: ", numero1 + numero2);
        break
    case "*":
        console.log("resultado: ", numero1 * numero2);
        break
    case "/":
        console.log("resultado: ", numero1/numero2);
        break
}