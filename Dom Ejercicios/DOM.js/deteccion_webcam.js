const d=document,
n=navigator;

export default function webCam(id){
    const $video=d.getElementById(id);//capturamos

    if (n.mediaDevices.getUserMedia) {//si hay una camara la condicciondeja acceder
        n.mediaDevices
        .getUserMedia({video: true, audio: true})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play();
        })
        .catch((err)=>{
            console.log(`Succedio el siguiente error!!: ${err}`);
            alert(`Succedio el siguiente error!!: ${err}`);
            $video.insertAdjacentHTML("beforebegin", `<p><mark>Por favor permita el uso de la camara<br>
            al lado del URL</mark></p>`);
        })
    }
}