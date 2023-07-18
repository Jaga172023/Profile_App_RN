import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBwS80mIRRrh9BGLqMm4lFptl6YuEWqkSE",
	authDomain: "sampleproject-ffd78.firebaseapp.com",
	projectId: "sampleproject-ffd78",
	storageBucket: "sampleproject-ffd78.appspot.com",
	messagingSenderId: "506314360640",
	appId: "1:506314360640:web:b8e0a74cdb76e0496edca5",
	measurementId: "G-L0D2XJ2C7D",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
