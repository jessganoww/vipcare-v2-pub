import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }