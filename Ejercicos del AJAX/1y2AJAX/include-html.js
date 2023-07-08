 document.addEventListener("DOMContentLoaded", (e)=>{
    const includeHTML=(el, url)=>{
        const xhr=new XMLHttpRequest();//creamos instancia

        xhr.addEventListener("readystatechange", e=>{
            if (xhr.onreadystate!==4)return;
            if (xhr.status>=200 && xhr.status<300) {//si esto succede se responde la peticion
                el.outerHTML=xhr.responseText;
            }else{
                let message=xhr.statusText || "Error al cargar el Archivo, verifica la peticion por http o https";
                
                el.outerHTML=`<div><p>Error ${xhr.status}: ${message}</p></div>`;
            }
        });

        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
        xhr.send();
    };

    document
    .querySelectorAll("[data-include]")//buscamos todos los data-include del html
    .forEach((el)=>includeHTML(el, el.getAttribute("data-include")));//por cada
    //[data-include] conseguimos el elemento de ese data include en este caso es
    //el url y el (el) representa al html del elemento
    });