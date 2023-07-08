/*export*/ function sumar(a,b){
    return a+b;
}

/*export*/ function restar(a,b){
    return a-b;
}

//entonces en vez de exportar cada función mejor las englobo en un objeto literal
//así no pierdo tanto tiempo llamando a cada una
//Onjeto literal
export const aritmetica={
    sumar,
    restar
};
//no se pueden exportar las arrow function
//export default no es necesario importar el nombre de la function
//no se pueden tener dos export default
export default function saludar(nombre=`desconocido`){
    console.log(`Hola ${nombre}`);
};

