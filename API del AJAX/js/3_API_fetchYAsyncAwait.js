const d=document;
(()=>{
    const $fetchAsync=d.getElementById("fetch-async"),//conectamos la id con la variable
    $fragment=d.createDocumentFragment();//creamos fragmentos en el documento

    async function getData(){
        try{
            let res=await fetch("https://jsonplaceholder.typicode.com/users"),
            json=await res.json();

            console.log(res,json);

            // if (!res.ok) {//si la respuesta es falsa, es decir si la peticion del fetch falla, entonces...
            //     throw new Error("Ocurrio un Nuevo Error al solicitar datos");
            // }
            if(!res.ok)throw{status: res.status, statusText: res.statusText};/**throw es un objeto que redirecciona el flujo al catch */

            json.forEach((el) => {//por cada elemento del json
                const $li=document.createElement("li");//creamos una etiqueta en el document
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;//del elemento solo sacamos el nombre,telefono y email
                //y lo colocamos en la etiqueta anteriormente creada
                $fragment.appendChild($li);//y la etiqueta la colocaremos en el fragmento
            });

            $fetchAsync.appendChild($fragment);//y el fragmento terminará en el fetch
        }catch(err){
            console.log(err);
            let message=err.statusText || "Ocurrio un Error";
            $fetchAsync.innerHTML=`Error ${err.status}: ${message}`;
        }
    }

    getData();
})();