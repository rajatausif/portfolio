import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAGx4ZzOD35_6uHCE2fa7ItYVNVm_2jH4w",
  authDomain: "portfolio-95806.firebaseapp.com",
  projectId: "portfolio-95806",
  storageBucket: "portfolio-95806.appspot.com",
  messagingSenderId: "162977992966",
  appId: "1:162977992966:web:16f1c8c521e87496c64e87"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
const provider= new GoogleAuthProvider();

export  const storage= getStorage(app)
export const db = getFirestore (app)
export const singInWithGoogle =()=> signInWithPopup(auth,provider);