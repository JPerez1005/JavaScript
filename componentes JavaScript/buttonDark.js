const d=document,
ls=localStorage;

function darkTheme(btn, classDark){
    const $themeBtn=d.querySelector(btn),
    $selectors= d.querySelectorAll("[data-dark]");//Data dark se implanto en la etiqueta html
    //con la intención de cambiar la estructura de esa misma etiqueta

    // console.log($selectors);//esto lo que hará es informarnos cuantas etiquetas tienen la clase Datadark

    let moon="🌙",
    sun="☀️";

    const lightMode=()=>{
        $selectors.forEach((el)=>el.classList.add(classDark));//agregamos la clase dark en donde
                //habiamos colocado la etiqueta data-dark en este caso html y body, head tambien lo podemos colocar
                $themeBtn.textContent=sun;
                ls.setItem("theme", "light");
    }

    const darkMode=()=>{
        $selectors.forEach((el)=>el.classList.remove(classDark));
                $themeBtn.textContent=moon;
                ls.setItem("theme", "dark");
    }

    d.addEventListener("click", (e)=>{
        if (e.target.matches(btn)) {//si presionamos el boton
            // console.log($themeBtn.textContent);//me informa en que modo estoy
            if ($themeBtn.textContent===moon) {
                lightMode();
            } else {
                darkMode();
            }
        }
    });

    /**Guardar el tema de la pagina */
    /**recordar que usaremos domcontentloaded así que si el js principal tambien tiene un evento así
     * este evento no funcionará
     * Recordar que el domcontenloaded funciona justo al reiniciar la pag o la app
     */

    d.addEventListener("DOMContentLoaded", (e)=>{
        // alert("Hola desde la función Dark Theme");
        console.log(ls.getItem("theme"));
        if (ls.getItem("theme")===null)ls.setItem("theme","light");
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkMode();
    });
}

darkTheme(".dark-theme-btn","dark-mode");