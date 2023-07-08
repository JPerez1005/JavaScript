// Atajos Personalizados
const d=document;
let x=0, y=0;

export function shortcuts(e){
    console.clear();
    console.log(e.type);//tipo de evento que nos muestra en consola
    console.log(e);
    console.log(e.keyCode);//con keycode identificamos las teclas
    /*** confirmación de Teclas Especiales ***/
    console.log(`ctrl:${e.ctrlKey}`);
    console.log(`alt:${e.altKey}`);
    console.log(`shift:${e.shiftKey}`);

    if (e.key==="a" && e.altKey) {
        alert("Acabas de precionar la tecla alt y a");
    }
    if (e.key==="a" && e.ctrlKey) {
        confirm("Acabas de precionar la tecla ctrl y a");
    }
    if (e.key==="a" && e.shiftKey) {//la tecla shift no acepta combinaciones
        prompt("Acabas de precionar la tecla shift y a");
    }//es recomendable usar ctrl y alt en vez de shift
}//esta funcion esta hecha para reconocer los simbolos alfanumericos del teclado

// Movimientos y colisiones
export function moveBall(e, ball, stage) {
    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    limitsball=$ball.getBoundingClientRect(),
    limitsStage=$stage.getBoundingClientRect();
    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(limitsball, limitsStage);

    // const move=(direction)=>{};

    switch (e.keyCode) {//validamos los codigos del teclado
        case 37:
            // move:("left");
            if(limitsball.left>limitsStage.left){
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            e.preventDefault();
            // move:("up");
            if(limitsball.top>limitsStage.top){
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            e.preventDefault();
            // move:("right");
            if(limitsball.right<limitsStage.right)x++;
            break;
        case 40:
            e.preventDefault();
            // move:("down");
            if(limitsball.bottom<limitsStage.bottom)y++;
            break;
        default:
            break;
    }

    $ball.style.transform=`translate(${x*10}px, ${y*10}px)`;

}