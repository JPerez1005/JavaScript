const d=document;

(()=>{
    const $axiosAsync=d.getElementById("axios-async"),//conectamos la id con la variable
    $fragment=d.createDocumentFragment();//creamos fragmentos en el documento

    async function getData(){
        try {
            let res=await axios.get("https://jsonplaceholder.typicode.com/users"),
            json=await res.data;//axios nos devuelve el objeto parseado

            console.log(res, json);

            json.forEach((el) => {//por cada elemento del json
                const $li=d.createElement("li");//creamos una etiqueta en el document
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;//del elemento solo sacamos el nombre,telefono y email
                //y lo colocamos en la etiqueta anteriormente creada
                $fragment.appendChild($li);//y la etiqueta la colocaremos en el fragmento
            });
    
            $axiosAsync.appendChild($fragment);//y el fragmento terminará en el fetch
        } catch (err) {
            console.log(err);
            let message=err.statusText || "Ocurrio un Error";
            $axiosAsync.innerHTML=`Error ${err.status}: ${message}`;
        }
    }

    getData();
})();