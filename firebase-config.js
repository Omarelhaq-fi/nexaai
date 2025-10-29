// firebase-config.js - Your Firebase configuration

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Replace with your Firebase config from Step 3
const firebaseConfig = {
  apiKey: "AIzaSyC3fK5zT6wnYS0dCLHVquxHN43J1LnRL1Q",
  authDomain: "nexaai-13216.firebaseapp.com",
  projectId: "nexaai-13216",
  storageBucket: "nexaai-13216.firebasestorage.app",
  messagingSenderId: "884913897531",
  appId: "1:884913897531:web:dbef32b3e7be83de695c1e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc };
