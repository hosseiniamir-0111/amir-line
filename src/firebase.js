import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFSRePyMthlOGCOKkMEggeTjASrnVclVw",
  authDomain: "amir-line.firebaseapp.com",
  projectId: "amir-line",
  storageBucket: "amir-line.firebasestorage.app",
  messagingSenderId: "475068714385",
  appId: "1:475068714385:web:03d4757870fc0391801e30",
  measurementId: "G-LDDKSJ9RVW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);