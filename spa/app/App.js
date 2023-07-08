import api from "./helpers/wp_api.js"//importamos el domain
import { ajax } from "./helpers/ajax.js";
import {Header} from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Menu } from "./components/Menu.js";
import { SearchForm } from "./components/SearchForm.js";
import { Posts } from "./components/Posts.js";

export function App(){
    // document.getElementById("root").innerHTML=`<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

    // console.log(api);

    // ajax({
    //     url: api.POST,
    //     cbSuccess:(posts)=>{
    //         console.log(posts);
    //     }
    // });

    // ajax({
    //     url:api.CATEGORIES,
    //     cbSuccess:(categories)=>console.log(categories)
    // })

    const d=document,
    $root=d.getElementById("root");//conectamos el id con la variable del DOOM

    $root.appendChild(Header());//en la variable conectadad con el Main, colocamos el header
    $root.appendChild(Posts());//las publicaciones debajo del header en el main
    $root.appendChild(Loader());//el loader debajo de las publicaciones

    ajax({//usamos ajax ntiormente hecha en helpers
        url: api.POST,//conectamos la url anteriormente cargada en helpers/wp_api
        cbSuccess:(posts)=>{//usamos una callback
            console.log(posts);//me entrega todas las publicaciones
        }
    });
    
}