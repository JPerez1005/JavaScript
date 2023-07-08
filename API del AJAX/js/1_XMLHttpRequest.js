const d=document;

(()=>{
    const xhr=new XMLHttpRequest(),/**hacemos la instancia del xmlhttp */
    $xhr=d.getElementById("xhr"),//conectamos la id con la variable
    $fragment=d.createDocumentFragment();//creamos fragmentos en el documento

    xhr.addEventListener("readystatechange"/*el readystatechange se ejecuta cuando sucede algo, detecta cualquier cambio*/,
    (e)=>{//manipulación de eventos
        if(xhr.readyState!==4)return;//si el estado de la respuesta no esta listo entonces que no se ejecute

        if (xhr.status>=200 && xhr.status<300) {//si funcionó que me lo imprima
            // console.log("éxito");
            // console.log(xhr);
            // $xhr.innerHTML=xhr.responseText;//envía la respuesta en la etiqueta de xhr pero en modo jason
            let json=JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach(el => {
                const $li=d.createElement("li");
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {//si hubo algún error que me lo imprima
            console.log("error");
            let message=xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML=`Error ${xhr.status}: ${message}`;
        }
    });

    xhr.open("GET"/*Parametro por el cual nos comunicamos */,
     "https://jsonplaceholder.typicode.com/users");//abrimos petición del usuario

    xhr.send();
})();