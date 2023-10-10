// Importa el núcleo de Firebase y los módulos específicos que necesitas
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5b2TioEkKKRznkPfzUJ73uu3UIj_QGKg",
  authDomain: "finanzaslogin-66c0f.firebaseapp.com",
  projectId: "finanzaslogin-66c0f",
  storageBucket: "finanzaslogin-66c0f.appspot.com",
  messagingSenderId: "62853900667",
  appId: "1:62853900667:web:a91bbaa4468c1a8007b5de",
  measurementId: "G-7YNPZ8E5TE"
};
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);

export default db;