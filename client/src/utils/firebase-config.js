//NOTE THIS CODE WAS DEVELOPED ON TOP OF STARTER CODE THAT CAN BE FOUND HERE:
// https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAknxq27LpwdFNrRFPoiXpc1-f5phMwwSU",
  authDomain: "ready-pet-go-7b8cc.firebaseapp.com",
  projectId: "ready-pet-go-7b8cc",
  storageBucket: "ready-pet-go-7b8cc.appspot.com",
  messagingSenderId: "472920348187",
  appId: "1:472920348187:web:5e2bdeb436672647be8abe",
  measurementId: "G-NM9C9NSX2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();