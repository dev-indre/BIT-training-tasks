function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//1. Kompiuterio atsitiktinio skaičiaus generavimas:

let generuojamasSk = rand(1, 50);
console.log(generuojamasSk);



// 2.Pradzia:

const NumbForm = document.getElementById("NumbForm");
NumbForm.style.display = "none";
const image = document.getElementById("image");
image.style.display = "none";
const newGame = document.getElementById("newGame");
newGame.style.display = "none";
const startGame = document.getElementById("startGame");
let maxGuessed = 5;
let guesses = maxGuessed; 


function startTheGame() {
    startGame.style.display = "none"; 
    NumbForm.style.display = "block";
  
}
startGame.addEventListener("click", startTheGame);


// 3.Duomenis kuriuose įveda vartotojas:
function inputNumb(event){
    event.preventDefault();
    const userNumb = document.getElementById("guessNumber").value;
    const goodNumb = Number(userNumb);
   
      
    if (isNaN(goodNumb)){
        alert (userNumb + " Nėra skaičius! Norint žaisti turite įvesti skaičių!")
        document.getElementById("guessNumber").value = "";
    }
    guesses--;
    document.getElementById("guessCount").innerText = `Likę spėjimai: ${guesses}`;

    if (goodNumb < generuojamasSk){
        alert (goodNumb + " yra per mažas skaičius!");
    }
    else if(goodNumb > generuojamasSk)
    {alert (goodNumb + " yra per didelis skaičius!");
    }
    else if (goodNumb === generuojamasSk){
    alert (`Atspėjote! ${goodNumb} yra teisingas skaičius! Jums prireikė viso ${maxGuessed - guesses} spėjimų.`);
    image.style.display = "block";
    image.src ="./A_happy_panda_white_background.png";
    document.getElementById("btn").style.display = "none";
    newGame.style.display = "block";
    }

    document.getElementById("guessNumber").value = "";
  

    if(guesses == 0){
    alert ("Skaičiaus neatspėjote ir išnaudojote visus 5 bandymus!");
    newGame.style.display = "block";
    startOver();
    }
};
NumbForm.addEventListener("submit", inputNumb);

// 4. Mygtukas grazina i zaidimo pradzia:

function startOver(){
    document.getElementById("btn").style.display = "inline-block";
    document.getElementById("guessNumber").value = "";
    image.style.display = "none";
    newGame.style.display = "none";
    NumbForm.style.display = "block";
    NumbForm.style.display = "none";
    startGame.style.display = "block";
    NumbForm.reset();
    generuojamasSk = rand(1, 50);
    console.log(generuojamasSk);
    guesses = maxGuessed;
    document.getElementById("guessCount").innerText = `Likę spėjimai: ${guesses}`;
}
newGame.addEventListener("click", startOver);
