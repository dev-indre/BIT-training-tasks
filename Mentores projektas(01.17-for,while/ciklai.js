// // 1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
// // Multiplication(3)


// const dauginamasis = 3;
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
//     console.log(`Skaičius i = ${i}`);
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
// let suma = 0;

// for(let ind=1; ind<=100; ind++){
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



// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir suskaičiuoja kiek skaitmenų jį sudaro. 


// function countDigits(sk){
//     return sk.toString().length;
// }
// console.log(countDigits(5446));
// console.log(countDigits(54156348646));
// console.log(countDigits(5));



// 7.  Matematikas, pastebėjęs gobšų turtuolį pasiūlė tokį sandorį: 
// Pirmą dieną jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2 
// centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas 
// jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie 
// darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o 
// turtuolis mokės dvigubai daugiau negu praėjusią dieną.). Parašykite programą 
// kuri suskaičiuotų kiek pinigų duos matematikas turtuoliui ir kiek turtuolis sumokės matematikui.

// let mokejimoDiena = 1;
// let duodamaSuma = 0;
// let gaunamaSuma = 0;


// function pinigai(){
//     while (mokejimoDiena <= 31){
//         duodamaSuma = duodamaSuma + 1000000;
//         gaunamaSuma = (gaunamaSuma + (0.02*2));
//         mokejimoDiena++;
//     }
//     console.log(`Turtuolis po 31d., gaus: ${duodamaSuma}`);
//     console.log(`Matematikas po 31d., iš turtuolio atgaus: ${gaunamaSuma}`);
// }

// pinigai();

// function moneyExchange() {
//     let day = 1;
//     let givenMoney = 0;  // Total money given by the first man
//     let returnedMoney = 0;  // Total money returned by the second man
//     let returnAmount = 0.02;  // Starting return value in dollars (2 cents)
  
//     while (day <= 31) {
//       givenMoney = givenMoney + 1000000;  // First man gives 1 million dollars each day
//       returnedMoney += returnAmount;  // Second man returns doubling cents each day
//       returnAmount *= 2;  // Double the return amount for the next day
//       day++;
//     }
  
//     console.log(`Total money given by the first man: $${givenMoney}`);
//     console.log(`Total money returned by the second man: $${returnedMoney.toFixed(2)}`);
//   }
  
//   moneyExchange();