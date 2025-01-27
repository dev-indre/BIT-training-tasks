function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// 1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30.
// Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti 
// geriausiai besimokantį ir blogiausiai. 

const atsitiktiniai = [];

function kurtiSkaicius(n = 30, m = 1, o = 10) {
  for(let index = 0; index < n; index++) {
    let sk = rand(m, o);
    atsitiktiniai.push(sk);
}
return atsitiktiniai;
}

function geriausiBlogiausi(masyvas) {
const didz = [];
const maz = [];

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] === 10) {
    didz.push(masyvas[i]);
  } else if (masyvas[i] === 1) {
    maz.push(masyvas[i]);
  }
}

return { didz, maz };
}

//console.log(kurtiSkaicius());
//console.log(geriausiBlogiausi(atsitiktiniai));

// 2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoje min 3 
// pažymiai. Rasti studento semestro vidurkį. 
// Paprastesnis variantas susikuriam masyvą rankiniu būdu. 
// Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių nuo 1 iki 10, 
// pažymių kiekis irgi random nuo 3 iki 6. 


const pazymiai = [];
//let n = rand(3,6);
function generuotiPazymius(m = 1, o = 10){
    let n = rand(3,6);
    for(let j=0; j<n; j++){
        let atsitikpaz = rand(m, o);
        pazymiai.push(atsitikpaz);
    }
    return pazymiai;
}
//console.log(generuotiPazymius());


function disciplinosVidurkis(p){
    let suma = 0;
    for(let k=0; k < p.length; k++){
        suma += p[k]; 
    }
    return (suma / p.length).toFixed(1);
}

//console.log("Disciplinos vidurkis:", disciplinosVidurkis(pazymiai));



function trimestroVidurkis(m = 1, o = 10) {
    let rezultatai = [];
    for (let i = 0; i < 7; i++) { // 7 disciplinos
        let kiekPazymiu = rand(3,6); // random pazymiai
        let pazymiai = [];
 
        for (let j = 0; j < kiekPazymiu; j++) {
            pazymiai.push(rand(m,o)); //pazymiai
        }   
            rezultatai.push(+disciplinosVidurkis(pazymiai));
            }
            //console.log((rezultatai));
            return disciplinosVidurkis(rezultatai); 
}
//console.log(trimestroVidurkis());


// 3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 600 
// Eurų., < nei 800Eurų., ir < nei 1100 eurų. Iš tų trijų grupių surasti, kurių 
// yra daugiausia? 
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų. 
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki 
// 1100, elementų gali būti 100.


const atlyginimai = [];

function kurtiAtlyginimus(n = 100, m = 500, o = 1100) {
  for(let index = 0; index < n; index++) {
    let skaiciai = rand(m, o);
    atlyginimai.push(skaiciai);
}
return atlyginimai;
}

function kiekKasGauna(n) {
let maziauSesiu = 0;
let maziauAstuoniu = 0;
let maziauTukstancio = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] < 600) {
    maziauSesiu++;
  } else if (n[i] < 800) {
    maziauAstuoniu++;
  }
  else {
    maziauTukstancio++;
  }
}
if(maziauSesiu > maziauAstuoniu && maziauSesiu > maziauTukstancio){
    return `Daugiausiai gauna mažiau 600€: ${maziauSesiu} mokytojų.`
}
else if(maziauAstuoniu > maziauSesiu && maziauAstuoniu > maziauTukstancio){
    return `Daugiausiai gauna mažiau 800€: ${maziauAstuoniu} mokytojų.`
}
else if(maziauTukstancio > maziauSesiu && maziauTukstancio > maziauAstuoniu){
    return `Daugiausiai gauna mažiau 1100€: ${maziauTukstancio} mokytojų.`
}
}

//console.log(kurtiAtlyginimus());
//console.log(kiekKasGauna(atlyginimai));


// 4.Parašyti f-ją kuri sudvigubintu masyvą. 
// @example 
// ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true] 
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]

function dvigubasMasyvas(array){
    return array.concat(array);
  }
  //console.log(dvigubasMasyvas(['Ace' , 10, true]));
  //console.log(dvigubasMasyvas([0, 1, 2, 3]));


// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias 
// raides.  
// @example 
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP', 
// 'GLUTINOUS-SHRIEK', 'ELEVATION' ], 
// [ 'a', 'b', 'c', 'd', 'e'  ]  => [ 'A', 'B', 'C', 'D', 'E' ]  


const array = ['internship', 'glutinous-shriek', 'elevation'];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  let capitalizeArray = array[i].toUpperCase();
  newArray.push(capitalizeArray); 
  };
//console.log(newArray);


// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais 
// @example 
// [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ] 
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]

const obuolys = ['angular', 'react', 'ember'];

function pakeistiISkaicius(masyvas){
    for (let i = 0; i < masyvas.length; i++) {
        masyvas.splice(i, 1, masyvas[i].length);
      }
      return masyvas;
    }
console.log(pakeistiISkaicius(obuolys));
