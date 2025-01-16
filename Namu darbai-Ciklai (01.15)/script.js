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

let kartaiMetimo = 20;
let mestiHArbaS = 0;

function metimai(kasIskrito) {
  while (kartaiMetimo < 20) {
    if (kasIskrito[kartaiMetimo] == 1) {
      mestiHArbaS++;
    }
    kartaiMetimo++;
    return `Herbas iškrito ${kartaiMetimo}`;
  }
}
console.log(metimai(kasIskrito));
