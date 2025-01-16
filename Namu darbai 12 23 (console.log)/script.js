var planet = 'earth';
var Planet = 'Earth';
var star = 'Sun';
var age = '4.54 billion years';
var satellite = 'moon';

var sakinys = "The planet " + planet + " is the third planet from the " + star + ". " + Planet + " is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, " + planet + " formed over " + age + " ago. " + Planet + "'s gravity interacts with other objects in space, especially the " + star + " and the " + satellite + ", " + planet + "'s only natural satellite."

console.log(sakinys);


var year = prompt('Nurodykite savo gimimo metus (pvz:YYYY)');
var month = prompt('Įveskite gimimo mėnesį (pvz: MM)');
var day = prompt('Įveskite gimimo dieną (pvz: DD)');

var data = `${year}-${month}-${day}.`;
console.log(data);