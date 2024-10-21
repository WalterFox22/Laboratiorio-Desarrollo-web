// MODIFICACION DE CONTENIDO POR EL DOM 
function changeSongTitle() {
  // Cambiar el título de la primera canción a una mas reciente 
  const firstSong = document.querySelector('.song');
  firstSong.textContent = 'Piensalo - Junior-H (Remix)';
  console.log("Puesto actualizado: " + firstSong.textContent);
}

// FUNDAMENTOS DEL DOM (ACCESO)

// Acceder a todos los títulos de las canciones con el script como el "foreach"
const songs = document.querySelectorAll('.title');
songs.forEach((song, index) => {
    console.log(`Canción ${index + 1}: ${song.textContent}`);
});

// ACCESO AL CONTENIDO POR EL DOM

// Acceder a la biografía del artista con el formato del Id 
const artistBio = document.getElementById('bio').textContent;
console.log("Biografía del artista: " + artistBio);

// PROGRAMACION ASINCRONICA 
const tokenn='TOKENPRUEBA'
console.log("Reproduciendo lista de reproducciones");
fetch('https://api.spotify.com/v1/me/player/play', {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${tokenn}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "context_uri":"spotify:playlist:Tu_playlist_Favorito"
  })
}).then(response =>{
  console.log("Saltar siguente cancion");
  return fetch('https://api.spotify.com/v1/me/player/next', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenn}`,
      'Content-Type': 'application/json',
    }
  }).catch(error =>{
    console.error("Error al pausar la reproduccion: ", error)
  })
})


// DEFERENCIAS ASINCRONICAS Y SINCRONICAS 
  //SINCRONICA 
  function reproduccionMusica(){
    console.log("Reproduciendo lista de reproduccion");
    console.log("Saltando a la siguente canción");
    console.log("Reprodiciendo cancion favorita");
    console.log("Pausado la reproduccion");
  };

  // ASINCRONICA 
  function reproduccionMusica(){
    console.log("Reproduccion lista de reproduccion");
    setTimeout(()=>{
      console.log("Reproducior cancion favorita");
      setTimeout(()=>{
        console.log("Pausar reproduccion");
      }, 3000)
    }, 3000)
  }
  reproduccionMusica();


// PROMESAS
const token = 'BQD8DFLhKXv8E7KWKyB8JBAlTN7gxw00fswcwoNWPUHtwuQD-_XPiltKWATZtDEynQF5I7pHsq87ExWCT-vZbwkSCHON02kx3UnP0bGhF4EYJGKh05BtSyBQ9vaaXcWNFBUvqebXp6OJg0aejbwx8DsveVRPsc7Lp3fM-G_6eVU-jpIqnl51z0p6ekL16Wg0JBPSCums4C4MMMrxV--_v5EdnnxwFX2EhnECCTh__wAkql-RKhO_9AljXqjmuIvSUmPextjK1hdGhnpg9LjFdDhLrpkE8U6a';

const Verificacion = (ConexionSpotify) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ConexionSpotify ? resolve("Conexión satisfactoria") : reject("Conexión rechazada");
    }, 3000);
  });
};

const obtenerProductos = fetch(`https://api.spotify.com/v1/me`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

Verificacion(true)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error));

obtenerProductos
  .then(datos => console.log(datos))
  .catch(error => console.log('Error al obtener productos:', error));


/// Async - Awaint
const token2 = 'BQD8DFLhKXv8E7KWKyB8JBAlTN7gxw00fswcwoNWPUHtwuQD-_XPiltKWATZtDEynQF5I7pHsq87ExWCT-vZbwkSCHON02kx3UnP0bGhF4EYJGKh05BtSyBQ9vaaXcWNFBUvqebXp6OJg0aejbwx8DsveVRPsc7Lp3fM-G_6eVU-jpIqnl51z0p6ekL16Wg0JBPSCums4C4MMMrxV--_v5EdnnxwFX2EhnECCTh__wAkql-RKhO_9AljXqjmuIvSUmPextjK1hdGhnpg9LjFdDhLrpkE8U6a';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token2}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

