import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyC2DJnnhyTFRvyMneXUfXh_Z57Dwlqv3is",
    authDomain: "folder-d8e59.firebaseapp.com",
    databaseURL: "https://folder-d8e59-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "folder-d8e59",
    storageBucket: "folder-d8e59.appspot.com",
    messagingSenderId: "692901611633",
    appId: "1:692901611633:web:c54b10264194c6ba6c73d0",
    measurementId: "G-KXLY608QMV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, analytics, auth, db }; 
