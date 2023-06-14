//NOTE THIS CODE WAS DEVELOPED ON TOP OF STARTER CODE THAT CAN BE FOUND HERE:
// https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrAB9zPq5xij8nhCtOQulcjjyJ30WBYrE",
  authDomain: "ready-pet-go-83a64.firebaseapp.com",
  databaseURL: "https://ready-pet-go-83a64-default-rtdb.firebaseio.com",
  projectId: "ready-pet-go-83a64",
  storageBucket: "ready-pet-go-83a64.appspot.com",
  messagingSenderId: "253577672022",
  appId: "1:253577672022:web:143fc64601bfc5595412f7",
  measurementId: "G-1ST0K8QBXY"
};

// function getFirebaseConfig() {
//   if (!config || !config.apiKey) {
//     throw new Error('No Firebase configuration object provided.' + '\n' +
//       'Add your web app\'s configuration object to firebase-config.js');
//   } else {
//     return config;
//   }
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line 
}
  );
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();