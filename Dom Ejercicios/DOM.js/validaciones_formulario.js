const d=document;

export default function contactFormValidations(){
    const $form=d.querySelector(".contact-form"),
    $inputs=d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input)=>{//por cada input con requerimiento hacemos lo siguiente
        const $span=d.createElement("span");//Creamos la etiqueta span
        $span.id=input.name;//le creamos un id con el nombre del input correspondiente
        $span.textContent=input.title;//al contenido en sí le colocamos el error del input que se llama title
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);//insertamos la etiqueta span en sí
    });

    d.addEventListener("keyup", e=>{
        let $input=e.target,
        pattern=$input.pattern || $input.dataset.pattern;/***los areaText tienen data-pattern pero no un patern en sí entonces.... */

        // console.log($input, pattern);

        if (pattern && $input.value!=="") {/***Los pattern y required obligan al usuario a colocar info en los inputs */
            let regex=new RegExp(pattern);
            return !regex.exec($input.value)
            ?d.getElementById($input.name).classList.add("is-active")
            :d.getElementById($input.name).classList.remove("is-active");
        }

        if(!pattern){/***si no tiene un pattern*/
            return $input.value===""
            ?d.getElementById($input.name).classList.add("is-active")
            :d.getElementById($input.name).classList.remove("is-active");
        }
    });

    d.addEventListener("submit", (e)=>{
        // e.preventDefault();//así cuando le demos click al boton enviar, no nos redigirá al inicio
        alert("Enviando Formulario...");

        const $loader=d.querySelector(".contact-form-loader"),
        $response=d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(()=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => $response.classList.add("none"),3000);
        }, 3000);
    });

}