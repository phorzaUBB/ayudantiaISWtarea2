function sumaArrays (array){
    suma = 0;
    for (let i = 0; i < array.length; i++){ 
    suma = suma + array[i]
    }
    return suma;
}

let sumaArreglos = sumaArrays([1,2,3,4,5,6])
console.log(sumaArreglos);

function promedioArrays (array){
     suma= 0;
     promedio =0
    for (let i = 0; i < array.length; i++){ 
    suma = suma + array[i]
    }
    promedio = suma/array.length;   
    return promedio;
}

let promedioArreglos = promedioArrays([6,6,6,6,6,6])
console.log(promedioArreglos);
//aaaaaaaaaaaaaaaaaaa

function mayusArrays (array){
   let newArray=array;
   for (let i = 0; i < array.length; i++){ 

    newArray[i]=array[i].toUpperCase();

    }  
   return newArray;
}

let mayusArreglos = mayusArrays(["hola","como","estas","?"]);
console.log(mayusArreglos);

function soloPares(array) {
    return array.filter(num => num % 2 == 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arreglo1A10 = soloPares(numeros);
console.log(arreglo1A10);
