import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    
      apiKey: "AIzaSyDL-wk4aB6Tgjp9KL33EBQgMqTsSOepH68",
      authDomain: "facebook-messenger-clone-d6bd8.firebaseapp.com",
      databaseURL: "https://facebook-messenger-clone-d6bd8.firebaseio.com",
      projectId: "facebook-messenger-clone-d6bd8",
      storageBucket: "facebook-messenger-clone-d6bd8.appspot.com",
      messagingSenderId: "199215604841",
      appId: "1:199215604841:web:f48c2eec05780b6c1beef8",
      measurementId: "G-QHYBHEYV6P"
    });
    const db = firebaseApp.firestore();
    export default db ;