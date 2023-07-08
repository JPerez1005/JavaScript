const d=document;

(()=>{
    const $axios=d.getElementById("axios"),//conectamos la id con la variable
    $fragment=d.createDocumentFragment();//creamos fragmentos en el documento

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{//esta será la respuesta de la librería
        console.log(res);

        let json=res.data;

            json.forEach((el) => {//por cada elemento del json
                const $li=document.createElement("li");//creamos una etiqueta en el document
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;//del elemento solo sacamos el nombre,telefono y email
                //y lo colocamos en la etiqueta anteriormente creada
                $fragment.appendChild($li);//y la etiqueta la colocaremos en el fragmento
            });

            $axios.appendChild($fragment);//y el fragmento terminará en el fetch
    })
    .catch(err=>{
        console.log(err);
            let message=err.statusText || "Ocurrio un Error";
            $axios.innerHTML=`Error ${err.status}: ${message}`;
    })
    .finally(()=>{

    });
})();