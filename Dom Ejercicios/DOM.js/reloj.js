const d=document;

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;

    d.addEventListener("click", (e)=>{
        if (e.target.matches(btnPlay)) {
            clockTempo=setInterval(()=>{//ocurre un intervalo continuo en cierto tiempo
                let clockHour=new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}<h3>`;
            }, 100);//tiempo de ejecución de intervalos

            e.target.disabled=true;//aquí nos estamos refiriendo a btnPlay
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);//limpiamos los intervalos existentes
            d.querySelector(clock).innerHTML=null;//anulamos las etiquetas insertadas anteriormente
            d.querySelector(btnPlay).disabled=false;//seleccionamos el btnplay y lo habilitamos
        }
    })
}
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm=d.createElement("audio");//creamos una etiqueta dinamica llamada audio
    $alarm.src=sound;//a este nuevo elemento le insertamos la variable sound, q se conecta con el index-Dom.js

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo=setTimeout(() => {
                $alarm.play();//reproducimos la alarma
            }, 100);

            e.target.disabled=true;//aquí nos estamos refiriendo a btnPlay
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();//pausamos la alarma
            $alarm.currentTime=0;//reiniciamos la alarma a cero por si la vuelven a reproducir
            d.querySelector(btnPlay).disabled=false;//activamos el boton de play
        }
    });
}

