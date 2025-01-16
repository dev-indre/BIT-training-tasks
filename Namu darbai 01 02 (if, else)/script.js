const sugeneruotasSkaiciusElementas = document.querySelector("#skaicius");
const skaiciausKategorijaElementas = document.querySelector("#kategorija");


function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomString(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
let sugeneruotasSkaicius = rand(0, 99);
sugeneruotasSkaiciusElementas.innerHTML = sugeneruotasSkaicius;
let kategorija = 0;

if (sugeneruotasSkaicius <=10) {
    sugeneruotasSkaicius *= sugeneruotasSkaicius
    console.log(sugeneruotasSkaicius);
    kategorija = 1;
}
else if (sugeneruotasSkaicius <= 19) {
    console.log(sugeneruotasSkaicius);
    kategorija = 2;
}
else if (sugeneruotasSkaicius <= 49  && sugeneruotasSkaicius % 2 == 0){
    console.log("Skaičius yra lyginis.");
      // Math.floor apvalina skaiciu i mazesne puse
    sugeneruotasSkaicius -= Math.floor(sugeneruotasSkaicius/10);
    console.log(sugeneruotasSkaicius);
    kategorija = 3;    
}
else if (sugeneruotasSkaicius <= 49  && sugeneruotasSkaicius % 2 != 0){
        console.log("Skaičius yra nelyginis.");
        sugeneruotasSkaicius = (sugeneruotasSkaicius + (sugeneruotasSkaicius % 10))/2
        console.log(sugeneruotasSkaicius);
        kategorija = 4;
}
else if (sugeneruotasSkaicius >= 50  && sugeneruotasSkaicius % 3 == 0){
    let sugeneruotasTekstas = String.fromCharCode(rand(65, 90)) +
    String.fromCharCode(rand(65, 90)) +
    String.fromCharCode(rand(65, 90)) +
    String.fromCharCode(rand(65, 90)) ;    
    console.log(sugeneruotasTekstas);
        kategorija = 5;
    }
else {
        alert("Skaičius netinkamas nei vienai kategorijai!")
    }
skaiciausKategorijaElementas.innerHTML = kategorija;

