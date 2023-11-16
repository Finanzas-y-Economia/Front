// Importa el núcleo de Firebase y los módulos específicos que necesitas
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


// Tu configuración de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBtpQ_QlaI8kUyYwBIVMhqNhhrmoiBwbBE",
  authDomain: "finanzas2-dc973.firebaseapp.com",
  projectId: "finanzas2-dc973",
  storageBucket: "finanzas2-dc973.appspot.com",
  messagingSenderId: "310300658826",
  appId: "1:310300658826:web:d94fb19e6d00ca33e57173",
  measurementId: "G-3P8BVWGMYC"
};
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);

export default db;