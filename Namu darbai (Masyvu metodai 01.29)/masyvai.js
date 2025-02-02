const prekes = [
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }];
    
// 1. Užduotis: Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja kiekvienos prekės barkodą.
// Barkodai prasideda pirmąja prekės pavadinimo raide ir atskiriamas brūkšneliu, pvz:
// "D-4061615651 (degtukai)."
// Rezultatą console.log’inkite.

const atnaujintiBarKodai = prekes.map(preke=>{preke.barkodas = preke.pavadinimas[0] + "-" +preke.barkodas
return preke
});
console.log(atnaujintiBarKodai);


// 2. Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'. 
// Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. 
// Rezultatą console.log’inkite

const prekesD = "D";
const rastosPrekes = prekes.filter((pav)=>pav.pavadinimas.startsWith(prekesD))
.map((pav) => {return pav.pavadinimas});

console.log(rastosPrekes);



// 3. Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.

const daugiauUzEur = prekes.filter((kainosDydis) => kainosDydis.kaina > 1);

console.log(daugiauUzEur);


// 4. Užduotis: Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.

const maziauUTris = prekes.filter((kainosDydis) => kainosDydis.kaina < 3);
console.log(maziauUTris);


// 5. Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau nei 3 eur.

const daugiauMaziau = prekes.filter((kainosDydis) => kainosDydis.kaina > 1 && kainosDydis.kaina < 3);
console.log(daugiauMaziau);



// 6. Užduotis: Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite į ‘Kavos pupelės’.

const kava = prekes.find(preke => preke.pavadinimas === "Kava");
if(kava){
    kava.pavadinimas = "Kavos pupelės"};

console.log(kava);



// 7. Užduotis: Prekėms, kurios kainuoja pigiau nei 1.5eur pridėkite pvmProcentas laukelį į šiuos objektus, 
// šioms prekėms taikomas pvmProcentas: 15%, prekėms kurios yra brangesnės, taikomas pvmProcentas: 21%. 
// Apskaičiuokite pvmMokestis laukelių reikšmes, pritaikę šį pvmProcentą prie kainos.


const atnaujintosPrekes=[];
prekes.forEach(preke =>{
    if(preke.kaina < 1.5){
        preke.pvmProcentas = 15;
    } else{
        preke.pvmProcentas = 21;
    }
    preke.pvmMokestis = (preke.pvmProcentas * preke.kaina)/100;
    preke.pvmMokestis = preke.pvmMokestis.toFixed(2);
    preke.pvmMokestis = Number(preke.pvmMokestis); // skaicius pavercia skaiciais, nes .toFixed() grazina string reiksme
    atnaujintosPrekes.push(preke);
});

console.log(atnaujintosPrekes);


// 8. Užduotis: Raskite prekes, kurios kainuoja pigiau nei 2 eur, ir jų pavadinimas baigiasi raide ‘s’.

const pigiauUzDu = prekes.filter(kainosDydis => kainosDydis.kaina < 2 && kainosDydis.pavadinimas.endsWith('s'));
console.log(pigiauUzDu);





   


