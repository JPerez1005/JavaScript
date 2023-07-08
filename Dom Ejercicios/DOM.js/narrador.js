const d=document,
w=window;

export default function speechReader() {
    /**Invocaremos los selectores internamente */
    /**Invocamos los elementos con los cuales trabajaremos */
    const $speechSelect=d.getElementById("speech-select"),
    $speechTextarea=d.getElementById("speech-text"),
    $speechBtn=d.getElementById("speech-btn"),
    speechMessage=new SpeechSynthesisUtterance();//Invocamos el API de voz

    // console.log(speechMessage);

    let voices=[];

    d.addEventListener("DOMContentLoaded", (e)=>{
        // console.log(w.speechSynthesis.getVoices());

        w.speechSynthesis.addEventListener("voiceschanged", e=>{//insertamos las voces
            voices=w.speechSynthesis.getVoices();//obtenemos las voces y las colocamos en la lista de voces

            voices.forEach((voice)=>{//por cada voz...
                const $option=d.createElement("option");//creamos un elemento de opcion
                $option.value=voice.name;
                $option.textContent=`${voice.name}***${voice.lang}`;//en el contenido de la etiqueta colocamos las opciones
                $speechSelect.appendChild($option);//conectamos el speech select con las opciones anteriormente creadas
            });
        });
    });

    d.addEventListener("change", (e)=>{
        if (e.target===$speechSelect) {//si el objeto que origino el evento es el speech select entonces
            speechMessage.voice=voices.find(//buscamos la voz
                (voice)=>voice.name===e.target.value//y colocamos esa voz en la utterance
            );
        }
    });

    d.addEventListener("click", (e)=>{
        if (e.target===$speechBtn) {//si el tager que origino el click es igual al  boton
            speechMessage.text=$speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
}