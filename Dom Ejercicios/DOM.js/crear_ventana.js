const d=document;

export default function responsiveTester(form){
    const $form=d.getElementById(form);//capturamos el parametro
    let tester;

    d.addEventListener("submit", (e)=>{//en cuanto selecciono un input con el id de submit,ocurre el evento
        if (e.target===$form) {
            e.preventDefault();//hace que la pag no se recarge, eliminando valores por defecto
            // alert("Formulario Enviado");
            tester=window.open($form.direccion.value, "tester",
            `innerWidth=${$form.ancho.value},
             innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener("click", e=>{//con este evento cerramos la ventana
        if(e.target===$form.cerrar)tester.close();
    })
}