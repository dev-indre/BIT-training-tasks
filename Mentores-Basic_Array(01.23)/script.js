// 1.Parašykite programą, kuri suskaičiuotų, kiek duotas skaičius 'a' turi
// lyginių ir nelyginių skaitmenų.

// function kiekLyginiu(a){
//     let lyginis = 0;
//     let nelyginis = 0;

//    while(a > 0){
//     let paskutinis = a % 10;
//     if(paskutinis % 2 == 0){
//         lyginis++;
//     }
//     else{
//         nelyginis++;
//     }
//     a = Math.floor(a/10); // šis veiksmas nuima paskutini skaiciu nuo viso duotojo skaiciaus, ir kitam rate skaicius jau bus be paskutiniojo
//    }
//    return `${lyginis} skaičiai lyginiai, ${nelyginis} skaičiai nelyginiai.`;
// }
// console.log(kiekLyginiu(63258));
// console.log(kiekLyginiu(75413654));

// 2. Parašykite funkciją, kuri priimtų parametru du tekstus ir išvestų kuris
// tekstas ilgesnis ir tą tekstą.
// @example:  (‘abc’, ‘b’) => ‘tekstas “abc” yra ilgesnis, jo ilgis 3 simboliai’
// (‘abcd’, ‘abcd’) => ‘abu tekstai lygus, jų ilgis 4 simboliai’

// function tekstai(n, m){
//     if(n.length > m.length){
//         return `Tekstas ${n} yra ilgesnis, jo ilgis ${n.length} simboliai.`
//     }
//     else if (n.length < m.length){
//         return `Tekstas ${m} yra ilgesnis, jo ilgis ${m.length} simboliai.`
//     }
//     else{
//         return `Abu tekstai lygus, jų ilgis ${n.length} simboliai`
//     }
// }
// console.log(tekstai("abc", "b"));
// console.log(tekstai("abcd", "abcd"));

// 3.  Sukurkite tuščią masyvą.
// • Įdėkite 4 elementus į masyvą
// • Pridėkite 1 elementą į masyvo galą
// • Ištrinkite vidurinį elementą ir išveskite jį į consolę
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.
// • Pakeiskite 2 elementą nauja reikšme
// • Pridėkite du naujus elementus į masyvo pradžią
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.

// const masyvas = [1, 2, 3, 4, 5, 6];

// masyvas.push(9);  // prideda norima papildoma elementa i masyvo gala
// console.log(masyvas);

// let vidurinis = masyvas.splice(Math.floor(masyvas.length / 2), 1);
// console.log(vidurinis);

// function print(masyvas){
//     for(let i = 0; i < masyvas.length; i++){
//         console.log(masyvas[i]);
//     }
// }
// print(masyvas);

// masyvas[1] = 3;
// console.log(masyvas);

// masyvas.unshift(7, 4);
// console.log(masyvas);

// print(masyvas);

// 4. Parašykite f-ją kur konvertuotų masyvą į stringą.

// const masyvas = [""];

// function paversti(masyvas){
//     return masyvas.join('');
// }

// console.log(paversti([1, 2, 3, 4, 5, 6]));
// console.log(paversti(["a", "b", "c", "d", "e", "f"]));
// console.log(paversti([1, 2, 3, "a", "s", "dAAAA"]));

// 5. Parašykite f-ją kuri apverstų masyvą.

// const masyvas = [""];

// function apversti(masyvas){
//     return masyvas.reverse();
// }
// console.log(apversti([1, 2, 3, 4]));
// console.log(apversti([9, 9, 2, 3, 4]));

// 6. Parašykite f-ją kuri gražintų paskutinį masyvo elementą.

// const masyvas = [""];

// function grazintiPaskutini(masyvas){
//     return masyvas.pop();
// }
// console.log(grazintiPaskutini([1, 2, 3]));
// console.log(grazintiPaskutini(["cat", "dog", "duck"]));
// console.log(grazintiPaskutini([true, false, true]));

// 7. Parašykite f-ją kuriai būtų perduodamas parametras masyvas iš skaičių.
// Ir gražinamas masyvas kurio elementai yra padauginti iš 2:

// const masyvas = [""];
// let newMasyvas = [];

// function padaugintiIsDvieju(masyvas){
//     let i= 0;
//     while (i < masyvas.length){
//         newMasyvas.push(masyvas[i] * 2);
//         i++;
//     }
//   return newMasyvas;
// }
// console.log(padaugintiIsDvieju([1, 2, 3, 4, 5, 6]));

// 8. Parašykite f-ją, kuri konvertuotų visus masyvo elementus į stringus

// const masyvas = [""];

// function parseArray(masyvas){
//     let naujas = masyvas.map(String);
//     return `["${naujas.join('", "')}"]`;
// }
// console.log(parseArray([1, 2, "a", "b"]));
// console.log(parseArray(["abc", 123, "def", 456]));

// 9. Išvesti į consolę visą daugybos lentelę (ciklas cikle pagalba)

// function daugybosLentele() {
//   for (dauginamasis = 1; dauginamasis < 11; dauginamasis++) {
//     for (i = 1; i <= 10; i++) {
//       console.log(`${dauginamasis} * ${i} = ${dauginamasis * i}`);
//     }
//   }
// }
// daugybosLentele();





// const automobilis =  {
//     pavadinimas: "Audi",
//     modelis: "cupe",
//     metai: "2012",
//     rida: "40000",
//     savininkas: {
//       vardas: "Petra",
//       pavarde: "Sluota"
//     }
//   };
//   automobilis.metai = "2024"
//   console.log(automobilis.metai);
//   console.log(automobilis.savininkas.pavarde);
