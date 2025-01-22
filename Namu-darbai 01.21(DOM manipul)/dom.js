const questions = [
    {
      question: "Kas yra 'let'?",
      answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
      correctAnswer: 0 // Indeksas teisingo atsakymo
    },
    {
      question: "Ką daro 'document.querySelector'?",
      answers: ["Keičia stilių", "Pasirenka DOM elementą", "Prideda tekstą", "Sukuria funkciją"],
      correctAnswer: 0
    }
  ];
  
function sleptiMygtuka(){
    const h1 = document.querySelector("#slepti");
    const mygtukas = h1.nextElementSibling;
    mygtukas.remove();
}  
