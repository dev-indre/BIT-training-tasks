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

function klausimoAtvaizdavimas(){
  const h1 = document.querySelector("#slepti");
  const h5 = document.createElement("h5"); 
  h5.innerText = questions[0].question;

  let HTMLTekstas = "<ul>"; 
  questions[0].answers.forEach(answer => {
      HTMLTekstas += `<li>${answer}</li>`
  });
  HTMLTekstas += "</ul>"; 
  
  h1.insertAdjacentElement("afterend", h5);
  h5.insertAdjacentHTML("afterend", HTMLTekstas);
}
