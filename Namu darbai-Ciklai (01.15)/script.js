// 1.Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų.
// Atsitiktiniai skaičiai nuo M iki O;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const atsitiktiniai = [];

let index = 0;

function kurtiSkaicius(n, m, o) {
  while (index < n) {
    let sk = rand(m, o);
    atsitiktiniai.push(sk);
    index++;
  }
  return atsitiktiniai;
}
console.log(kurtiSkaicius(6, 1, 99));

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M,
// mažesnius nei N.

let i = 0;

function mazesniNeiN(M, N) {
  while (i < M.length) {
    if (M[i] <= N) {
      console.log(M[i]);
    }
    i++;
  }
}
mazesniNeiN([1, 2, 3, 13, 1, 7], 5);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų,
// kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

function countAllThrees(array) {
  let pasikartojimuSkaicius = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      pasikartojimuSkaicius++;
    }
  }
  return pasikartojimuSkaicius;
}
console.log(countAllThrees([1, 2, 3, 0, 1, 3, 3]));

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array).
// Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve.
// Kita suskaičiuoja kiek yra nelyginių skaičių;

// FUNKCIJA LYGINIAMS:

function countAllEven(array) {
  let arLyginis = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      arLyginis++;
    }
  }
  return arLyginis;
}
console.log(countAllEven([1, 2, 3, 6]));

// FUNKCIJA NELYGINIAMS:
function countAllOdd(array) {
  let arLyginis = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 != 0) {
      arLyginis++;
    }
  }
  return arLyginis;
}
console.log(countAllOdd([1, 2, 3, 6, 7]));

// 5. Sukurkite funkciją countAllEvenUnderSix(array),
// kuri suskaičiuoja, kiek yra lyginių skaičių, kurių
// reikšmė yra  6 arba mažesnė  pateiktame masyve.

function countAllEvenUnderSix(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] <= 6) {
      count++;
    }
  }
  return count;
}
console.log(countAllEvenUnderSix([7, 8, 6, 15, 14, 3, 2]));

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

let masyvas = [1, 2, 3, 4, 5, 4];
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

function average(masyvas) {
  let suma = sumAll(masyvas);
  return suma / masyvas.length;
}
console.log(`Duotų skaičių vidurkis: ${average(masyvas)}`);

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

console.log(findAllUniqueNumbers(array));
