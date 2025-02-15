import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { 
    getFirestore, doc, setDoc, getDoc, 
    addDoc, getDocs, updateDoc, deleteDoc, collection 
} from "firebase/firestore"; // ✅ Import from firebase/firestore

const firebaseConfig = {
    apiKey: "AIzaSyC2KrmNoFjroRjtqgNcYQ4IynRER2wfGE0",
    authDomain: "task-manager-app-2a805.firebaseapp.com",
    projectId: "task-manager-app-2a805",
    storageBucket: "task-manager-app-2a805.appspot.com",  // ✅ Fixed storage bucket
    messagingSenderId: "856916920385",
    appId: "1:856916920385:web:3cc8f732cd83119a0e1ec0",
    measurementId: "G-JPW1F9DYMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// ✅ Export necessary Firebase functions
export { 
    auth, provider, signInWithPopup, signOut, onAuthStateChanged, db, 
    doc, setDoc, getDoc, addDoc, getDocs, updateDoc, deleteDoc, collection 
};
