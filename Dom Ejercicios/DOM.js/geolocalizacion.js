const d=document,
n=navigator;//navigator hace uso de cualquier hardware del equipo
export default function getGeolocalizacion(id){
    const $id=d.getElementById(id),
    options={
        enableHighAccuracy:true,//el mejor rendimiento posible
        timeout:50000,
        maximumAge:0//esto es para que no me guarde nada en caché
    };

    const success=(position)=>{
        let coords=position.coords;
        console.log(position);

        $id.innerHTML=`
        <p>Tu posición Actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank"
         rel="noopener">Ver en Google Maps</a>
            `;
    }

    const error=(err)=>{
        $id.innerHTML=`<p><mark>Error:${err.code}:${err.message}<br>por favor active su ubicación</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    }

    // n.geolocation.getCurrentPosition( success, error, options);
    // n.geolocation.watchPosition( success, error, options);//constante localización y es más Exacta
}