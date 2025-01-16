const vardoInput = document.querySelector("#name");
const pavardesInput = document.querySelector("#surname");
const gimDataInput = document.querySelector("#data");
const emailInput = document.querySelector("#email");
const arSutinkCheckBox = document.querySelector("#ar-sutinkate");

// Taisyklės, kad registracija įvyktų sėkmingai:
// 1. Vardas turi būti sudarytas iš 3-40 simbolių;
// 2. Pavardė turi būti sudaryta iš 3-70 simbolių;
// 3. Buvo sutikta su taisyklėmis ir salygomis;
// Nesėkmingos registracijos atveju išmesti alert() pranešimą, pranešantį, kodėl registracija nepavyko.
// Sėkmingos registracijos atveju imituojame elektroninio pašto pranešimą console.log():
// “Siunčiamas laiškas adresu EMAIL...”
// "
// Sveiki, VARDAS PAVARDĖ. Ačiū kad registravotės mūsų socialiniame tinkle. Jūsų laikinasis slaptažodis VARDAS_GIMIMOMETAI. Linkime gražios dienos - one.lt administracija
// "
const bold = "font-weight: bold";

function registracijaSekminga(){
    let tikrasVardas = vardoInput.value;
    let vardas = vardoInput.value.length;
    let tikraPavard = pavardesInput.value;
    let pavard = pavardesInput.value.length;
    let bData = gimDataInput.value.slice(0,4);
    let checkSutinku = arSutinkCheckBox.checked;
    let email = emailInput.value;

    if (vardas < 3 || vardas > 40){
        alert("Įvesties laukelyje vardas turi susidaryti iš 3-40 simbolių!")
    }
    else if (pavard < 3 || pavard > 70){
        alert("Įvesties laukelyje pavardė turi susidaryti iš 3-70 simbolių!")
    }
    else if(!bData){
        alert("Privalote įvesti gimimo datą!")
    }
    else if(!email){
        alert("Privalote įvesti el. pašto adresą!")
    }
    else if(!checkSutinku){
        alert("Privalote sutikti su taisyklėmis ir sąlygomis!")
    }
    else{
        console.log(`Siunčiamas laiškas elektroniniu adresu: %c${email}`, bold);
        console.log(`Sveiki, ${tikrasVardas} ${tikraPavard}. Ačiū kad registravotės mūsų socialiniame tinkle. Jūsų laikinasis slaptažodis ${tikrasVardas}_${bData}.Linkime gražios dienos - one.lt administracija.`)
    }
}
