import firebase from 'firebase/app';
import 'firebase/auth';
   
    const firebaseConfig = {
        apiKey: "AIzaSyAaC-qj3yCVfLJXAd6cUQrwJG9j9AZQpqw",
        authDomain: "datavoosh.firebaseapp.com",
        projectId: "datavoosh",
        storageBucket: "datavoosh.appspot.com",
        messagingSenderId: "718177920709",
        appId: "1:718177920709:web:eb61f3b0de54e3b9f3b2ac"
      };

      firebase.initializeApp(firebaseConfig);
  
      export default firebase

  
