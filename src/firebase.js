import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAcpjzR1oHeX6wFeKuBYC05qw3FDRRt8dg",
  authDomain: "quanly-41170.firebaseapp.com",
  projectId: "quanly-41170",
  storageBucket: "quanly-41170.appspot.com",
  messagingSenderId: "610246658820",
  appId: "1:610246658820:web:768cc3b2c5df1bf2371e51",
  measurementId: "G-5VJ18VSLF5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
