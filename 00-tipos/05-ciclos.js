let num1a10 = [];
for (let i = 0; i < 10; i++) {
    //console.log(i+1);
    num1a10.push(i+1);
}
console.log(num1a10);

let num10a1 = [];
for (let i = 11; i > 1; i--) {
    num10a1.push(i-1);
}
console.log(num10a1);

let numpares1a10 = [];

for (let i = 1; i < 11; i++) {
    if ((i%2)==0) {
        numpares1a10.push(i);
    }
}
console.log(numpares1a10);

let numimpares1a10=[];
for (let i = 1; i < 11; i++) {
    if ((i%2)!==0) {
        numimpares1a10.push(i);
    }
}
console.log(numimpares1a10);

let nummultiplos3=[];
for (let i = 1; i < 11; i++) {
    if ((i%3)==0) {
        nummultiplos3.push(i);
    }
}
console.log(nummultiplos3);

let nummultiplos5=[];
for (let i = 1; i < 11; i++) {
    if ((i%5)==0) {
        nummultiplos5.push(i);
    }
}
console.log(nummultiplos5);

let nummultiplos3y5=[];
for (let i = 1; i < 11; i++) {
    if (((i%5) == 0)||((i%3)==0)) {
        nummultiplos3y5.push(i);
    }
}
console.log(nummultiplos3y5);

let nummultiplos3o5=[];
for (let i = 1; i < 11; i++) {
    if (((i%5) == 0)&&((i%3)==0)) {
        nummultiplos3o5.push(i);
    }
}
console.log(nummultiplos3o5);

