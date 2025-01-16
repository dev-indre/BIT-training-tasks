// 1. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
// padidinamas vienetu ir gražinamas rezultatas

function newNumber (num){
    // ++ didina tik per vieneta;
    // -- mazina tik per vieneta;
    num ++;
    return num;
}

console.log(newNumber(5));

// 2. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos)
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

function val(hour){
    hour *= 3600;
    return hour;
}
console.log(val(2));

// 3.Sukurti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius,
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių.
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių.

function taskai(baudos, dvit, trit){
    let rezult = baudos + dvit*2 + trit*3;
    return rezult;
}
console.log(taskai(2, 3, 5));

// 4. Parašykite f-ją, kuri apskaičiuotų trikampio plotą.
// Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b)
// Funkcija gražina trikampio plotą.
 
 function plotas(h, b){
    let ats = (h * b) /2;
    return ats;
 }
 console.log(`Trikampio plotas: ${plotas(3, 9)}`);

//  5.Paraykite f-ją, kuriai būtų paduodami du parametrai (skaičiai), 
// ir f-ja gražintų true  jei dviejų skaičių sumą yra mažiau arba lygų 100 
// ir false jei daugiau už 100.

function arTiesa(sk1, sk2){
    if(sk1 + sk2 <=100){
        return true;
    }
        return false;
}
console.log(arTiesa(50, 7));

// 6.Sukurkite f-ją, kuri nustatytų ar du paduodami 
// argumentai yra lygūs. Gražiname true arba false

function arLygu(n1, n2){
    if(n1 == n2){
        return true;
    }
        return false;
}
console.log(arLygu(50, 5));

// 7.Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų (n1, n2) yra didesnis. 
// Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", 
// jei "n2 skaičius didesnis", jei skaičiai lygūs gražintų n1 lygus n2.

function kurisDidesnis(num1, num2){
    if(num1 > num2){
        return num1 + ` skaičius didesnis už ` + num2;
    }
    else if (num2 > num1){
        return num2 + ` skaičius didesnis už `+ num1;
    }
    else{
        return num1 + ` lygu ` +num2;
    }
}
console.log(kurisDidesnis(6, 3));
console.log(kurisDidesnis(4, 8));
console.log(kurisDidesnis(5, 5));

// 8. Sukurti f-ją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių. 
// Ūkininkas pateikia tris parametrus: Pirmas parametras vištų skaičius, antras karvių skaičius, trečias paršelių skaičius ūkyje.
// F-ja gražiną bendrą kojų skaičių.  
function kojos(vist, karv, pars){
    return (vist*2 +((karv + pars)*4));
}
console.log(kojos(2, 2, 2));

// 9. Sukurk f-ją, kuri gautu du parametrus (a, b). 
// F-ja gražina 10 jei vienas iš: 1)skaičiu = 10 arba 2)tų skaičių suma  = 10

function arDesimt(a, b){
    if (a == 10 || b == 10 || a + b == 10){
        return true;
    }
        return false;
}
console.log(arDesimt(4,6));

// 10.Sukurk f-ją, kuri gauna vieną parametrą skaičių (n)
// ir jei skaičius dalinasi iš 100, gražiną true, priešingu atveju false.

function arDalinasi(n){
    if (n % 100 == 0){
        return true;
    }
    return false;
}
console.log(arDalinasi(200));
console.log(arDalinasi(20));

// 11. Sukurk f-ją, kuri patikrintu ar asmuo turi leidimą 
// ir ar asmuo yra vyresnis nei 18 metų abi sąlygos būtinos,
// kad f-ja gražintų true, priešingu atveju gražina false

function leidimas(age, arTuriLei){
    if(age >= 18 && arTuriLei == true){
        return true;
    }
    return false;
}
console.log(leidimas(19, true));
console.log(leidimas(15, true));