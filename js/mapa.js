
let options={
    enableHighAccuracy: true,
    timeuot: 5000,
    maximunAge: 0
 }

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

}else{
    alert ("los servicios de geolocalizacion no estan disponibles");
}


function success(position){ 
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;


    let map = L.map('map',{
        center:[latitude,longitude],
        zoom:12
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'Mi openStreetMap'}).addTo (map)
    
    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(40.42211, -3.61974)
    ],
    language:'es',
    }).addTo(map);
}

function error(){
    let map =L.map('map',{

        center: [40.42211, -3.61974],
        zoom:16
    })
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'mi openStreetMap'}).addTo(map)

let marker = L.marker([40.42211,-3.61974]).bindTooltip('Tiendita Gerkr').openTooltip().addTo(map)

}











































