import {initializeApp} from "firebase/app";
import {getFunctions} from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB3uf2-Y4vKsJjh4CjEKtluBVJQELA5R88",
  authDomain: "elated-life-375121.firebaseapp.com",
  projectId: "elated-life-375121",
  storageBucket: "elated-life-375121.appspot.com",
  messagingSenderId: "491780931767",
  appId: "1:491780931767:web:3ab50efb6f5d02ffeb4d32",
  measurementId: "G-YQ6S7L68HL",
};

export const app = initializeApp(firebaseConfig);

export const functions = getFunctions(app);

