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
  const h3 = document.createElement("h3"); 
  h3.innerText = questions[0].question;
  
  const button = document.createElement("button");
  button.innerHTML = "Kitas klausimas";


  let HTMLTekstas = '<ul class ="no-bubbles">'; 
  questions[0].answers.forEach(answer => {
     HTMLTekstas += `<li><input type="checkbox">${answer}</input></li>`
  });
   HTMLTekstas += "</ul>"; 
  
  h1.insertAdjacentElement("afterend", h3);
  h3.insertAdjacentHTML("afterend", HTMLTekstas);

  const mygtukas = h3.nextElementSibling;
  mygtukas.insertAdjacentElement("afterend", button);

  
  
  // Antram klausimui
  let kitasKlausimas = 0;
  button.addEventListener("click", () => {
    kitasKlausimas++;

    if (kitasKlausimas < questions.length) {
      h3.innerText = questions[kitasKlausimas].question;
      
      let newHTMLTekstas = '<ul class ="no-bubbles">';
      questions[kitasKlausimas].answers.forEach(answer => {
        newHTMLTekstas += `<li><input type="checkbox">${answer}</li>`;
      });
      newHTMLTekstas += "</ul>";
    } else {
      button.innerText = "Rodyti rezultatus";
    }
  });
}

