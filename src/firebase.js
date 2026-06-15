import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlJzjHDDNoJmjopR_AuvzlxckeYEuLtoo",
  authDomain: "medcare-a0bef.firebaseapp.com",
  projectId: "medcare-a0bef",
  storageBucket: "medcare-a0bef.firebasestorage.app",
  messagingSenderId: "256287937726",
  appId: "1:256287937726:web:1c3c3eeeef4246aa23faef",
  measurementId: "G-9VLGNL8TM2"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
