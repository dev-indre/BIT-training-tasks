// 1.Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų.
// Atsitiktiniai skaičiai nuo M iki O;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const atsitiktiniai = [];

let index = 0;

while (index < 3) {
  const sk = rand(1, 50);
  atsitiktiniai.push(sk);
  index++;
}
console.log(atsitiktiniai);

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M,
// mažesnius nei N.

let pradziaMas = 0;
let N = 23;

function mazesniNeiN(atsitiktiniai) {
  while (pradziaMas < atsitiktiniai.length) {
    if (atsitiktiniai[pradziaMas] < N) {
      console.log(atsitiktiniai[pradziaMas]);
    }
    pradziaMas++;
  }
}
mazesniNeiN(atsitiktiniai);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų,
// kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

let kiekKartu = 0;
let masStart = 0;
let atskiri = atsitiktiniai.toString().split("");

function countAllThrees(atskiri) {
  while (masStart < atskiri.length) {
    if (atskiri[masStart] == 3) {
      console.log(`Rastas skaičius  ${atskiri[masStart]}`);
      kiekKartu++;
    }
    masStart++;
  }
  console.log(`Skaičių masyve rastas 3 pasikartoja ${kiekKartu}`);
}
countAllThrees(atskiri);

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array).
// Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve.
// Kita suskaičiuoja kiek yra nelyginių skaičių;

// FUNKCIJA LYGINIAMS:
let kiekLyginis = 0;

function countAllEven(atsitiktiniai) {
  let masStart1 = 0;
  while (masStart1 < atsitiktiniai.length) {
    if (atsitiktiniai[masStart1] % 2 == 0) {
      console.log(`Rastas skaičius ${atsitiktiniai[masStart1]} yra lyginis`);
      kiekLyginis++;
    }
    masStart1++;
  }
  return atsitiktiniai[masStart1];
}
countAllEven(atsitiktiniai);

// FUNKCIJA NELYGINIAMS:
function countAllOdd(atsitiktiniai) {
  let masStart1 = 0;
  while (masStart1 < atsitiktiniai.length) {
    if (atsitiktiniai[masStart1] % 2 != 0) {
      console.log(`Rastas skaičius ${atsitiktiniai[masStart1]} yra nelyginis`);
      kiekLyginis++;
    }
    masStart1++;
  }
}
countAllOdd(atsitiktiniai);

// 5. Sukurkite funkciją countAllEvenUnderSix(array),
// kuri suskaičiuoja, kiek yra lyginių skaičių, kurių
// reikšmė yra  6 arba mažesnė  pateiktame masyve.

function countAllEvenUnderSix(atsitiktiniai) {
  let atsakymas = 0;
  let start = 0;

  while (start < atsitiktiniai.length) {
    if (atsitiktiniai[start] % 2 == 0 && atsitiktiniai[start] <= 6) {
      atsakymas++;
    }
    start++;
  }
  console.log(`Lyginiai skaičiai lygūs 6, arba mažesni: ${atsakymas}`);
}
countAllEvenUnderSix(atsitiktiniai);

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą.
// Funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

let kasIskrito = rand(1, 2);

function throwCoin(kasIskrito) {
  if (kasIskrito == 1) {
    return "H - Herbas";
  }
  return "S - Skaičius";
}
console.log(throwCoin(kasIskrito));

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų,
// suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas.
// Paskaičiuokite procentaliai, kokiu dažnumu krito herbas,
// kokiu dažnumu krito skaičius;

let kartaiMetimo = 0;
let mestiH = 0;
let mestiS = 0;

function metimai() {
  while (kartaiMetimo < 20) {
    let kasIskrito = rand(1, 2);
    let ats = throwCoin(kasIskrito);

    if (ats == "H - Herbas") {
      mestiH++;
    } else {
      mestiS++;
    }
    kartaiMetimo++;
  }
  console.log(
    `Iškrito herbas ${mestiH} kartų, tai sudaro: ${
      (mestiH / 20) * 100
    }% visų metimų.`
  );
  console.log(
    `Iškrito skaičius ${mestiS} kartų, tai sudaro: ${
      (mestiS / 20) * 100
    }% visų metimų.`
  );
}

metimai();

// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus,
//  bei gražina šią sumą kaip rezultatą;

let masyvas = [1, 2, 3, 4, 5];
let ind = 0;
let suma = 0;

function sumAll(masyvas) {
  while (ind < masyvas.length) {
    suma += masyvas[ind];
    ind++;
  }
  return suma;
}
console.log(`Skaičių suma yra: ${sumAll(masyvas)}`);

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų
// skaičių vidurkį; PVZ: average([1,2,3,4,5])//3

let mas = [1, 2, 3, 4, 5, 3];
let ind1 = 0;
let ats = 0;
let sum = 0;

function average(mas) {
  while (ind1 < mas.length) {
    sum += mas[ind1];
    ats = sum / mas.length;
    ind1++;
  }
  return ats;
}
console.log(`Duotų skaičių vidurkis: ${average(mas)}`);

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas),
// kuri atranda masyve esančius unikalius skaičius. gražina juos
// masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];

const array = [1, 1, 2, 8, 8, 1, 4, 6, 56, 7, 6, 105, 42, 3, 3];
console.log(array);
const atfiltruoti = [];
let ind2 = 0;

function findAllUniqueNumbers(array) {
  while (ind2 < array.length) {
    if (!atfiltruoti.includes(array[ind2])) {
      atfiltruoti.push(array[ind2]);
    }
    ind2++;
  }
  return atfiltruoti;
}
console.log(`Duoto masyvo unikalūs skaičiai: [${findAllUniqueNumbers(array)}]`);
console.log(findAllUniqueNumbers(array));
