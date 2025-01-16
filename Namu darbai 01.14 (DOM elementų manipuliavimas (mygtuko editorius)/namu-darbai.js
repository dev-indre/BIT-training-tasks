const mygtukoElementas = document.getElementById('my-button');
const tekstoElementas = document.getElementById('tekstas');
const colorElementas = document.getElementById('color');
const apvalintiElement = document.getElementById('kiek-apvalinti');
const parasteElement = document.getElementById('padding');
const borderSizeElement = document.getElementById('borderSize');
const borderColorElement = document.getElementById('borderColor');
const styleElement = document.getElementById('style');


function keistiPav(){
    const pavad = tekstoElementas.value;
    mygtukoElementas.textContent = pavad;
}
function changeColor() {
    const fonas = colorElementas.value;
    mygtukoElementas.style.backgroundColor = fonas;
}
function apvalinti(){
    const border = apvalintiElement.value;
    mygtukoElementas.style.borderRadius = `${border}px`;
}
function paddLeftRight(){
    const pad = parasteElement.value;
    mygtukoElementas.style.paddingLeft = `${pad}px`;
    mygtukoElementas.style.paddingRight = `${pad}px`;
}
function paddTopBottom(){
    const pad = parasteElement.value;
    mygtukoElementas.style.paddingTop = `${pad}px`;
    mygtukoElementas.style.paddingBottom = `${pad}px`;
}
function krastinesStilius(){
    const krastinesDydis = borderSizeElement.value;
    const krastinesSpalva = borderColorElement.value;
    mygtukoElementas.style.border = `${krastinesDydis}px solid ${krastinesSpalva}`;
}
function borderStilius(){
    const krastStyle = styleElement.value;
    mygtukoElementas.style.borderStyle = krastStyle;
}
