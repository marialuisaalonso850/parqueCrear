const map = L.map('map');
map.setView([4.533888, -75.681107], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const parqueaderos = [
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPj2PewO8FZloY1l0mNSJ3tq_GLPXjSBflg&usqp=CAU' ,name: 'Parqueadero Jaramillo', lat:  4.535257449895448, lng: -75.67439943626569, info: 'Carrera 17 #17-2, Centro, Armenia, Quindío', puesto:4 },
    { image:'https://i.pinimg.com/474x/3e/98/8d/3e988dd513d6e88bf8e6f64b29e065c4.jpg',name: 'Parqueadero La 22', lat: 4.533039812941283, lng: -75.67505862611485, info: 'Cra. 16 #22-26, Armenia, Quindío', puesto:5},
   

    
];

for (const parqueadero of parqueaderos) {
    const marker = L.marker([parqueadero.lat, parqueadero.lng]).addTo(map);
    marker.bindPopup(parqueadero.name);

    marker.on('click', () => {
        openParqueaderoModal(parqueadero);
    });
}

function openParqueaderoModal(parqueadero) {
    const modalBody = document.getElementById('parqueaderoModalBody');
    modalBody.innerHTML = `
        <img src="${parqueadero.image}" alt="${parqueadero.name}" width="465px">
        <h3>${parqueadero.name}</h3>
        <p>${parqueadero.info}</p>
        <p>puestos disponibles ${parqueadero.puesto}</p>
    `;


    const modal = new bootstrap.Modal(document.getElementById('parqueaderoModal'));
    modal.show();

    
    
    
    }