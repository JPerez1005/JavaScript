//recoleccion de elementos en el html, en este caso muestra todas las listas
console.log(document.getElementsByTagName("li"));
//Recoleccion de clases
console.log(document.getElementsByClassName("card"));
//Busqueda por nombre
console.log(document.getElementsByName("nombre"));
//Busqueda por id
console.log(document.getElementById("menu"));
//los queryselector y los queryselectorall tambien sirven como los tres anteriores primeros
console.log(document.querySelectorAll("a").length);
//podemos tambien buscar por posiciones
console.log(document.querySelectorAll("a")[2]);
//tambien podemos buscar listas dentro del menu
console.log(document.querySelectorAll("#menu li"));


//Elementos del dom se guardan anteponiendo el simbolo dollar
// const $linkDOM=document.querySelector(".link-dom");

//Abrimos ese mismo documento en otra pestaña
// $linkDOM.setAttribute("target","_blank");
//cambiamos la dirrecion de esa referencia
// $linkDOM.setAttribute("href", "https://github.com");



// const $linkDOM=document.querySelector(".link-dom");

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// //buscamos los estilos del pc
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
// console.log(window.getComputedStyle($linkDOM));

// //ancho del link
// $linkDOM.style.width="50%";

// //quitar el subrayado en el link
// $linkDOM.style.setProperty("text-decoration","none");

//variables css- custom propierties css
const $html = document.documentElement,
$body = document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

//con esto accedimos a las variables

//vamos a aplicarlas
// $body.style.backgroundColor=varDarkColor;
// $body.style.color=varYellowColor;


const $card=document.querySelector('.card');

// console.log($card);
// console.log($card.className);

// console.clear();

// const $whatIsDOM=document.getElementById("que-es");


// let text=`
// <p>
// El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
// API para documentos HTML y XML.
// </p>
// <p>
// Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
//     <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
// </p>`
// ;

//Hacemos la conversion de js a html
// $whatIsDOM.innerHTML=text;

console.clear();



