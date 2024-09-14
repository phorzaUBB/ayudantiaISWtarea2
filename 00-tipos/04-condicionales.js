const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
/*
let mayor = 0;

 if (numero1<numero2){
    mayor = numero2;
    if (numero2<numero3) {
        mayor = numero3;
    } else {
        mayor=numero2
        
    } 
 }else{
    mayor = numero1;
    if (numero1<numero3) {
        mayor = numero3;
    } else {
        mayor=numero1
        
    } 
 }
 console.log(mayor);
 
 */
let mayor1 = 0;
 const num = [numero1,numero2,numero3];

 for (let i = 0; i < num.length; i++) {
    if(mayor1<num[i]){
        mayor1=num[i] 
    }
}
console.log("El número mayor de los 3 es:",mayor1);


let menor1=mayor1;

 for (let i = 0; i < num.length; i++) {
    if(menor1>num[i]){
        menor1=num[i] 
    }
}
console.log("El número menor de los 3 es:",menor1);

if((numero1%2)==0){
    console.log("El numero 1 es par");
}else{
    console.log("El numero 1 es impar");
}

if((numero2%2)==0){
    console.log("El numero 1 es par");
}else{
    console.log("El numero 1 es impar");
}

if((numero3%2)==0){
    console.log("El numero 1 es par");
}else{
    console.log("El numero 1 es impar");
}

if((numero1%5)==0){
    console.log("El numero 1 es multiplo de 5");
}else{
    console.log("El numero 1 no es multiplo de 5");
}

if((numero2%5)==0){
    console.log("El numero 1 es multiplo de 5");
}else{
    console.log("El numero 1 no es multiplo de 5");
}

if((numero3%5)==0){
    console.log("El numero 1 es multiplo de 5");
}else{
    console.log("El numero 1 no es multiplo de 5");
}