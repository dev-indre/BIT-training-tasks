const shoppingList = [
    { name: "Duona", 
      price: 1.491 },
    { name: "Pienas", 
      price: 0.9923 },
    { name: "Sūris", 
      price: 3.789 },
    { name: "Kiaušiniai", 
      price: 2.392 },
    { name: "Bananas", 
      price: 1.194 },
];

let PrekiuHTML = "";
for(let i = 0; i < shoppingList.length; i++){
    PrekiuHTML += `<div class="preke-kaina">
            <div class="sarasas name">
        <ul>
          <li class="prekes-pav">${shoppingList[i].name}</li>
        </ul>
    </div>     
            <div class="kaina price">
                <p>${shoppingList[i].price.toFixed(2)}€</p>
            </div>
        </div>`;
};

const prekesElement = document.querySelector("#prekes");
prekesElement.innerHTML = PrekiuHTML;
console.log(PrekiuHTML);

