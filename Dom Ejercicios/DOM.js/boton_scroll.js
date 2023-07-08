const d=document, w=window;
export default function scroolTopButton(btn){
    const $scrollBtn=d.querySelector(btn);

    w.addEventListener("scroll", e=>{
        //por si pageyoffset no existe en ese navegador entonces optamos por la otra opción
        let scrollTop=w.pageYOffset||d.documentElement.scrollTop;

        if (scrollTop>600) {
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    
}