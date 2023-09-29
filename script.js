
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCko1mjimDNuhhOqVeDjpcB_TNhjS8rSzo",
    authDomain: "prueba-5c7d3.firebaseapp.com",
    projectId: "prueba-5c7d3",
    storageBucket: "prueba-5c7d3.appspot.com",
    messagingSenderId: "936925983623",
    appId: "1:936925983623:web:e0d9d3b287e9dba4cf1922",
    measurementId: "G-1KBD5D4NTG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function obtenerProductos() {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const tarjetasContainer = document.getElementById('tarjetasContainer');

querySnapshot.forEach((doc) => {
  // Crea un elemento div para la tarjeta
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta'); // Puedes agregar clases CSS para dar estilo a la tarjeta

  // Crea un elemento de imagen
  const imagen = document.createElement('img');
  imagen.src = doc.data().imagen; // Asigna la URL de la imagen desde Firestore
  imagen.alt = doc.data().nombre; // Agrega un texto alternativo para la imagen

  // Crea un elemento de título para la tarjeta
  const titulo = document.createElement('h2');
  titulo.textContent = doc.data().nombre;

  // Agrega la imagen y el título a la tarjeta
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(titulo);

  // Agrega la tarjeta al contenedor de tarjetas
  tarjetasContainer.appendChild(tarjeta);
});

  }

 await obtenerProductos()
 setTimeout(() => {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'none';
}, 1500);