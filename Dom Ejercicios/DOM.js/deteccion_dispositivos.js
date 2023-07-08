const d=document,
n=navigator,
ua=n.userAgent;

export default function userDeviceInfo(id){
    console.log(ua);//nos deja ver la info del dispositivo del usuario
    const $id=d.getElementById(id),
    isMobile={
        android:()=>ua.match(/android/i),
        ios: ()=>ua.match(/iphone|ipad|ipod/i),
        windows: ()=>ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop={
        linux: ()=> ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrowser={
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge/i),
        any: function(){
            return(
                this.ie() ||
                this.edge() ||
                this.opera() ||
                this.firefox() ||
                this.safari() ||
                this.chrome()
            );
        },
    };

    $id.innerHTML=`
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

    /**Contenido Exclusivo */
    if(isBrowser.chrome()){
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en chrome</mark></p>`;
    }

    if(isBrowser.opera()){
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en OPRA</mark></p>`;
    }//opra y opra gx son de diferente estructura de navegadores, gx esta directmente conectado a chrome y safari

    if(isBrowser.safari()){
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en Safari</mark></p>`;
    }

    /**Redirecciones */
    if(isMobile.android()){
        window.location.href="https://jonmircha.com";
    }

}