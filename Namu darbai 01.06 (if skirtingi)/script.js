function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randsk1 = rand(1, 10);
let randsk2 = rand(1, 10);
let randsk3 = rand(1, 10);

console.log(randsk1, randsk2, randsk3);

// 1.console.log’inkite patį didžiausią iš šių trijų skaičių;
if (randsk1 > randsk2 && randsk1 > randsk3){
    console.log(randsk1);
}
if (randsk2 > randsk1 && randsk2 > randsk3){
    console.log(randsk2);
}
if (randsk3 > randsk1 && randsk3 > randsk2){
    console.log(randsk3);
}
// 2.console.log’inkite patį mažiausią iš šių trijų skaičių;
if (randsk1 < randsk2 && randsk1 < randsk3){
    console.log(randsk1);
}
if (randsk2 < randsk1 && randsk2 < randsk3){
    console.log(randsk2);
}
if (randsk3 < randsk1 && randsk3 < randsk2){
    console.log(randsk3);
}
// 3.Jei pirmų dviejų sk. suma yra didesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 3 ir apvalinkite į didžiąją pusę. Rezultatą console.logi’inkite;
if ((randsk1+randsk2) > (randsk2+randsk3)){
    console.log(Math.ceil((randsk1+randsk2+randsk3)/ 3));
}
// 4.Jei pirmų dviejų sk. suma yra mažesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 5 ir apvalinkite į mažąją pusę. Rezultatą console.logi’inkite;
if((randsk1+randsk2) < (randsk2+randsk3)){
    console.log(Math.floor((randsk1+randsk2+randsk3)/ 5));
}
// 5.Jei pirmas skaičius didesnis už antrąjį tačiau mažesnis už trečiąjį - konsolėje parašykite - “Pirmas - vidurinis”;
if (randsk1 > randsk2 && randsk1 < randsk3){
    console.log("Pirmas-vidurinis");
}
// 6.Jei antras skaičius didesnis už abu - konsolėje parašykite “Antras didžiausias”;
if (randsk1 < randsk2 && randsk2 > randsk3){
    console.log("Antras didžiausias");
}
// 7.Jei trečias skaičius mažesnis už abu - konsolėje parašykite “Trečias mažiausias”
if (randsk1 > randsk3 && randsk3 < randsk2){
    console.log("Trečias mažiausias");
}
// 8.Jei pirmasis skaičius yra 3, 5 arba 7 - konsolėje parašykite to skaičiaus pakėlimo 4-tuoju laipsniu rezultatą.
if (randsk1 == 3 || randsk1 == 5 || randsk1 == 7){
    console.log(randsk1 **4);
}
// 9.Jei pirmasis skaičius yra 4 arba 9 - konsolėje parašykite to skaičiaus šaknies rezultatą 
if (randsk1 == 4 || randsk1 == 9){
    console.log(Math.sqrt(randsk1));
}