import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCoWqohIRo0lHN7nx7eyWMNTCtgy04csUE",
  authDomain: "netflix-clone-24de1.firebaseapp.com",
  projectId: "netflix-clone-24de1",
  storageBucket: "netflix-clone-24de1.appspot.com",
  messagingSenderId: "382312401832",
  appId: "1:382312401832:web:c0a7840ae49d1d0bedeb9d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;