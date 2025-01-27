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
      price: 1.194 }
];


let HTMLTekstas = "<ul class=\"italic\">"; 
console.log(HTMLTekstas);

for(let i = 0; i < shoppingList.length; i++){
    HTMLTekstas += `<li>${shoppingList[i].name} - <span class="gray">${shoppingList[i].price.toFixed(2)}€</span></li>`
}

HTMLTekstas += "</ul>";
console.log(HTMLTekstas);

document.body.insertAdjacentHTML("afterbegin", HTMLTekstas);