// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKE5wVzoDUYGReSUVhBCR2A28PLzKUvaU",
  authDomain: "steamauto-3bf91.firebaseapp.com",
  projectId: "steamauto-3bf91",
  storageBucket: "steamauto-3bf91.appspot.com",
  messagingSenderId: "980655506401",
  appId: "1:980655506401:web:16284901dce2cfabda08a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get Reference to the Service
export const db = getFirestore(app);

export default app;
