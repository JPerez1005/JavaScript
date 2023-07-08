import scroolTopButton from "./DOM.js/boton_scroll.js";
import slider from "./DOM.js/carrusel.js";
import responsiveTester from "./DOM.js/crear_ventana.js";
import userDeviceInfo from "./DOM.js/deteccion_dispositivos.js";
import webCam from "./DOM.js/deteccion_webcam.js";
import networkStatus from "./DOM.js/detección_red.js";
import searchFilters from "./DOM.js/filtro_busquedas.js";
import getGeolocalizacion from "./DOM.js/geolocalizacion.js";
import deslizMenu from "./DOM.js/menu.js";
import speechReader from "./DOM.js/narrador.js";
import responsiveMedia from "./DOM.js/objeto_responsive.js";
import { digitalClock, alarm } from "./DOM.js/reloj.js";
import scrollSpy from "./DOM.js/scroll_espia.js";
// import draw from "./DOM.js/sorteo.js";
import { shortcuts, moveBall } from "./DOM.js/teclado.js";
import darkTheme from "./DOM.js/tema_oscuro.js";
import contactFormValidations from "./DOM.js/validaciones_formulario.js";
import smartVideo from "./DOM.js/video_inteligente.js";
// import { countdown } from "./DOM.js/cuenta_regresiva";

const d=document;

d.addEventListener("DOMContentLoaded", e=>{//esto es modulizar o reutilizacion
    /************* Menu **************/
    deslizMenu(".panel-btn", ".panel", ".menu a");
    /************* Reloj y Alarma **************/
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("Assets/y2mate.com - Wow Remix.mp3", "#activar-alarma", "#desactivar-alarma");
    /************* Cuenta Regresiva **************/
    // countdown("countdown",
    // "May 27, 2023 03:23:19", 
    // "Feliz Cumpleaños al mejor desarrollador del mundo");
    /****************boton del scroll****************/
    scroolTopButton(".scroll-top-btn");
    /****************Metodo Responsive*************** */
    //se crean dos responsive media para el video y el mapa
    responsiveMedia
    ("youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93" 
    target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>`
    );
    responsiveMedia
    ("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/4KW2wbvo4QtP7Bsg6" 
    target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7086.015734819603!2d-74.
    17558269549451!3d4.613357898873286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
    1s0x8e3f9c20c1186379%3A0x72c48cbe21e275ac!2sKennedy%2C%20Bogot%C3%A1!5e0!3m2!1ses!
    2sco!4v1674130006822!5m2!1ses!2sco" width="600" height="450" style="border:0;
    " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    /**creacion de ventanas y uso de formularios */
    responsiveTester("responsive-tester");
    /**Deteccion de dispositivos co user Agent** */
    userDeviceInfo("user-device");
    /**Deteccion de Camara */
    webCam("webcam");
    /**Geolocalización**/
    getGeolocalizacion("geolocation");
    /**Filtro De Busquedas**/
    searchFilters(".card-filter"/**este es el elemento donde va a buscar*/,
    ".card"/**Hace las busquedas en las tarjetas */);
    /****** Sorteo Digital ********/
    // draw("#winner-btn",".player");
    /*****Carrusel******/
    slider();
    /********Scroll Spy**********/
    scrollSpy();
    /*******Video Inteligente********/
    smartVideo();
    /******************Validación de Formulario******************/
    contactFormValidations();
});

d.addEventListener("keydown", (e)=>{//keydown es cuando presionas una tecla
    /*keydown: momento donde presionamos la tecla
    keyup: momento donde dejamos de presionar la tecla
    keypress: momento donde mantenemos presionada la tecla*/
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});


    /****************boton del Dark theme****************/
    darkTheme(".dark-theme-btn","dark-mode");
    /****************Perdida de conexión****************/
    networkStatus();
    /*******************Narrador*****************/
    speechReader();
    