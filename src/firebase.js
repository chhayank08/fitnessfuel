import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCqPljoM97GtkDBy96Qio-NPy-xkriP_0",
  authDomain: "fitness-fuel-aad26.firebaseapp.com",
  databaseURL: "https://fitness-fuel-aad26-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fitness-fuel-aad26",
  storageBucket: "fitness-fuel-aad26.firebasestorage.app",
  messagingSenderId: "519057828576",
  appId: "1:519057828576:web:e979911a0aa281a14f3e85",
  measurementId: "G-L5SP2QSVJD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
