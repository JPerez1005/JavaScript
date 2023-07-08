const d=document,
w=window;

export default function responsiveMedia(id, mq/**condicion de css */, mobileContent, desktopContent) {
    let breakpoint=w.matchMedia(mq);//aquí capturamos el parametro de mq

    const responsive=(e)=>{//aquí es cuando cambiamos de contenido dependiendo del mq o media query
        if(e.matches){
            d.getElementById(id).innerHTML=desktopContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }

    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);

}
