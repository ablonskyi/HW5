let str = '';

for (let i = 10; i <= 20; i++) {
    if (i<20) {
        str = str + i + ', ';
    } else {
        str = str + i;
    }
}
alert(str);
str = '';

for (let i = 10; i <= 20; i++) {
    if (i<20) {
        str = str + i**2 + ', ';
    } else {
        str = str + i**2;
    }
}
alert(str);
str = '';

for (let i = 0; i <= 10; i++) {
    str = str + `7 * ${i} = ${7 * i} \n`;
}
alert(str);
str = '';

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
alert(sum);

let multiple = 1;
for (let i = 15; i <= 35; i++) {
    multiple *= i;
}
alert(multiple);

let average = 0;
for (let i = 1; i <= 500; i++) {
    if (i < 500) {
        average += i; 
    } else {
        average = (average + i)/i;
    }
}
alert(average);

let doubleNumbersSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        doubleNumbersSum += i;
    }
}
alert(doubleNumbersSum);

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        str = str + i + ', ';
    }
}
alert(str);
str = '';

let naturalNumber = +prompt('Введіть натуральне число');
let evenDivisors = '';
let sumEvenDivisors = 0;
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i == 0) {
        str = str + i + ', '
        if (i % 2 == 0){
            evenDivisors = evenDivisors + i + ', '
            sumEvenDivisors += i;
        }
    } 
}
alert(`${naturalNumber} має такі дільники:\n${str}\nА це його парні дільники\n${evenDivisors}\nСумма парних дільників = ${sumEvenDivisors}`);


let multiplicationTable = '';
let showMultiplicateTable = '';
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
     multiplicationTable = multiplicationTable + `${i} * ${j} = ${i * j}` + '\n';
    }
    alert(multiplicationTable);
    multiplicationTable = '';
}
