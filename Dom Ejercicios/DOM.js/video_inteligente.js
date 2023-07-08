const d=document,
w=window;

export default function smartVideo(){
    const $videos=d.querySelectorAll("video[data-smart-video]");/**video[data-smart-video] */

    const cb=(entries)=>{
        entries.forEach(entry => {
            entry.target.pause();
            if (entry.isIntersecting) {//si ocurre una interseccion
                entry.target.play();
            } else{
                entry.target.pause();
                // d.classList.add("muted");
            }

            w.addEventListener("visibilitychange",(e)=>/**esto es para pausar el video cuando se esta fuera de la pag */
                {
                    if (d.visibilityState!="visible") {
                        entry.target.pause()
                    }
                }
            );
        });
    }

    const observer=new IntersectionObserver(cb, {threshold: 0.5});//este es el observador

    $videos.forEach(el=>observer.observe(el));//el observador se asigna a los videos
}