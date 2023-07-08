const d=document;
(()=>{
    const $fetch=d.getElementById("fetch"),//conectamos la id con la variable
    $fragment=d.createDocumentFragment();//creamos fragmentos en el documento

    fetch("https://jsonplaceholder.typicode.com/users")
        // .then((res)=>{
        //     console.log(res);
        //     return res.json();
        // })
        .then((res)=>(res.ok ? res.json():Promise.reject(res)))//si colocamos el .log(res) nos devolvera un valor de ok:true or false
        // así que si es true entonces hacemos el parseo en .json si Node, entonces reflejamos un error
        .then((json)=>{
            console.log(json);//.text.blob tambien sirven pero de diferente manera
            //$fetch.innerHTML=json;
            json.forEach((el) => {//por cada elemento del json
                const $li=document.createElement("li");//creamos una etiqueta en el document
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;//del elemento solo sacamos el nombre,telefono y email
                //y lo colocamos en la etiqueta anteriormente creada
                $fragment.appendChild($li);//y la etiqueta la colocaremos en el fragmento
            });

            $fetch.appendChild($fragment);//y el fragmento terminará en el fetch

        })
        .catch((err)=>{
            console.log(err);
            let message=err.status.err || "Ocucrrio un error";
            $fetch.innerHTML=`Error ${err.status}: ${message}`;
        })
        .finally(()=>//es opcional
            console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch"));
})();