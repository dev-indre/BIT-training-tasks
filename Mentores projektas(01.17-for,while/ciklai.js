// 1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
//  Multiplication(3)


// let dauginamasis = 3;
// let index = 1;

// function daugyba(dauginamasis) {
//   while (index <= 10) {
//     console.log(`${dauginamasis} * ${index} = ${dauginamasis * index}`);
//     index++;
//   }
// }
// daugyba(6);




// 2. Išvesti į konsolę skaičiuos nuo 10 iki 100. Visais žinomais ciklais while, for
 
//WHILE:
// let numeris = 10;

// while (numeris <= 100) {
//     console.log(numeris);
//     numeris += 10;
// }
 
//FOR:

// for (let numeris = 10; numeris <= 100; numeris += 10)
// {
//     console.log(numeris);
// }

// DO WHILE

// let ind = 10;
// do {
//     console.log(ind);
//     ind += 10;
// }
// while(ind <=100)


// 3. Perašyti pateikta ciklą  for į ciklą while.

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

// console.log(`Skaičių suma yra: ${suma}`);

 //For:
//  let suma = 0;

//  for(let ind=1; ind<=100; ind++){
//      suma += ind;
//  }
// console.log(`Skaičių suma yra: ${suma}`);



// 5. Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3 
// intervale nuo 0 iki 100.  

//WHILE:


// function dalijasiIsTriju(n){
//     let skaicius = 0;
//     while (skaicius <= 100){
//         if(skaicius % n === 0){
//             console.log(`Skaičiai, kurie dalinasi iš ${n} intervale nuo 0 iki 100: ${skaicius}`);  
//         }
//         skaicius++;
//     }
// }
// dalijasiIsTriju(6);

// FOR:

//function dalijasiIsTriju(n){
 //   for(let skaicius = 0; skaicius <= 100; skaicius++){
 //       if(skaicius % n == 0){
            //console.log(`Skaičiai, kurie dalinasi iš ${n} intervale nuo 0 iki 100: ${skaicius}`); 
 //       }
 //   }
//}
//dalijasiIsTriju(3);



// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir suskaičiuoja kiek skaitmenų jį sudaro. 


//function countDigits(sk){
    //return Math.abs(sk).toString().length;  // - Math.abs nuima minusa, ir skaiciuoja skaicius iprastai kaip ir be minuso.
//}

// function countDigits(sk){
//     let result = 0;
//     sk = Math.abs(sk);
//     while(sk > 0){
//         sk = Math.floor(sk/10)
//         result++;
//     }
//     return result;
// }

// console.log(countDigits(5446));
// console.log(countDigits(54156348646));
// console.log(countDigits(-5));




// 7.  Matematikas, pastebėjęs gobšų turtuolį pasiūlė tokį sandorį: 
// Pirmą dieną jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2 
// centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas 
// jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie 
// darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o 
// turtuolis mokės dvigubai daugiau negu praėjusią dieną.). Parašykite programą 
// kuri suskaičiuotų kiek pinigų duos matematikas turtuoliui ir kiek turtuolis sumokės matematikui.

// let mokejimoDiena = 1;
// let duodamaSuma = 0;
// let gaunamaSuma = 0.02;


// function pinigai(){
//     while (mokejimoDiena <= 31){
//         duodamaSuma += 1;
//         gaunamaSuma *= 2;
//         mokejimoDiena++;
//     }
//     gaunamaSuma = (gaunamaSuma / 1000000).toFixed(1);
//     console.log(`Turtuolis po 31d., gaus: $${duodamaSuma} milijoną.`);
//     console.log(`Matematikas po 31d., iš turtuolio atgaus: $${gaunamaSuma} milijonų.`);
// }

// pinigai();



// 8.  Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 
// iki 999 intervale. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų 
// atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.)  

function visiSkaiciai() {
    let rastiSkaiciai = [];
    
    for (let sk = 100; sk < 999; sk++){
       
        let newSk = sk.toString();
        let a = newSk[0];
        let b = newSk[1];
        let c = newSk[2];

        ArmSkaicius = (a*a*a)+(b*b*b)+(c*c*c);
        
        if(ArmSkaicius == sk){
            rastiSkaiciai.push(newSk);
        }
    }
    return rastiSkaiciai;
}
console.log(`Rasti visi Armstrongo skaičiai tarp 100 ir 999: ${visiSkaiciai()}`);

// 9. Parašykite funkcija kuri paskaičiuotų atstumą tarp dviejų taškų 
// koordinačių sistemoje. Parametrai: 4 perduodami skaičiai x1, y1, x2, y2
// (Atstumo formule: atstumas = kvadratine saknis is (atstumas x2-x1, pakelta 2) + (atstumas y2-y1, pakelta 2)
// @example:  
// (0,0) (0,1) => 1  
// (0,0) (1,0) => 1  
// (-5,0) (10,-10) => 18.027756377319946  

function atstumas(x1, y1, x2, y2) {
    const m = x2 - x1;
    const n = y2 - y1;
    return Math.sqrt(m * m + n * n );
  }

  console.log(atstumas(0, 0, 0, 1));
  console.log(atstumas(0, 0, 1, 0));
  console.log(atstumas(-5, 0, 10, -10));