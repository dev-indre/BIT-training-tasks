// // 1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
// // Multiplication(3)


// const dauginamasis = 2;
// let index = 1;

// function daugyba(dauginamasis) {
//   while (index <= 10) {
//     //console.log(`${dauginamasis} * ${index} = ${dauginamasis * index}`);
//     index++;
//   }
// }
// //daugyba(dauginamasis);


// // 2. Išvesti į konsolę skaičiuos nuo 10 iki 100. Visais žinomais ciklais while, for
 
// //WHILE:
// let numeris = 10;

// while (numeris <= 100) {
//     //console.log(numeris);
//     numeris += 10;
// }
// // FOR:

// for (let numeris = 10; numeris <= 100; numeris += 10)
// {
//     //console.log(numeris);
// }


// // 3. Perašyti pateikta ciklą  for į ciklą while.

// let i = 0;

// while (i <= 10){
//     //console.log(`Skaičius i = ${i}`);
//     i += 2;
// }


// 4. Naudojantis ciklu, sumuokite visus skaičius nuo 1 iki 100 ir išveskite 
// galutinį rezultatą. 

//WHILE:

// let ind = 1;
// let suma = 0;

// while (ind <= 100){
//     suma += ind;
//     ind++;
// }

// //console.log(`Skaičių suma yra: ${suma}`);

// //For:

// for(let ind=1; ind<=100; ind++){
//     let suma = 0;
//     suma += ind;
// }
// console.log(`Skaičių suma yra: ${suma}`);



// 5. Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3 
// intervale nuo 0 iki 100.  

//WHILE:
// let skaicius = 0;

// function dalijasiIsTriju(skaicius){
//     while (skaicius <= 100){
//         if(skaicius % 3 == 0){
//             console.log(`Skaičiai, kurie dalinasi iš 3 intervale nuo 0 iki 100: ${skaicius}`);  
//         }
//         skaicius++;
//     }
// }
// dalijasiIsTriju(skaicius);

// FOR:

// function dalijasiIsTriju(){
//     for(let skaicius = 0; skaicius <= 100; skaicius++){
//         if(skaicius % 3 == 0){
//             console.log(`Skaičiai, kurie dalinasi iš 3 intervale nuo 0 iki 100: ${skaicius}`); 
//         }
//     }
// }
// dalijasiIsTriju();



// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir 
// suskaičiuoja kiek skaitenų jį sudaro 

function countDigits(sk){
    return sk.toString().length;
}
console.log(countDigits(5446));
console.log(countDigits(54156348646));
console.log(countDigits(5));



// 7. 