function cadenaMayuscula(cadenamin) {
    return cadenamin.toUpperCase();
}
let mayvictor = cadenaMayuscula("esto está en mayúsculas");
console.log(mayvictor);

function cadenaMiniscula(cadenamay) {
    return cadenamay.toLowerCase();
}
let minvictor = cadenaMiniscula("ESTO ESTÁ EN MINÚSCULAS");
console.log(minvictor);

function resta(num1,num2) {
    return num1-num2;   
}
const res=resta(10,5);
console.log("El resultado de la resta es: ",res);


function division(num1,num2) {
    return num1/num2;   
}
const div=division(10,5);
console.log("El resultado de la división es: ",div);


function multiplicacion(num1,num2) {
    return num1*num2;   
}
const mul=multiplicacion(10,5);
console.log("El resultado de la división es: ",mul);

function cadenaLongitud(cadenalon) {
    return cadenalon.length;
}
let longitud = cadenaLongitud("almasoul");
console.log(longitud);