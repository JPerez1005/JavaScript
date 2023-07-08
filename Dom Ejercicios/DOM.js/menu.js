export default function deslizMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", e=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){//así tal y con espacios fiunciona
            //si presiono el boton del panel la clase cambia
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");//con esto se activa la animacion
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}