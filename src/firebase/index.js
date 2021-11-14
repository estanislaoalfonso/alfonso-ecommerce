import { initializeApp } from "firebase/app"; // Para inicializar firebase en el proyecto
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHuqzCTPD3raRfw-nIebnIq2i95OHLBC8",
    authDomain: "alfonso-ecommerce.firebaseapp.com",
    projectId: "alfonso-ecommerce",
    storageBucket: "alfonso-ecommerce.appspot.com",
    messagingSenderId: "737611445058",
    appId: "1:737611445058:web:7fb693808a96673e628edb"
};
const app = initializeApp(firebaseConfig); // Para inicializar firebase en el proyecto

export const getFirebase = () => app;

export {getFirestore};