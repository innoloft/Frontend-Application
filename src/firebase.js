import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyOmRNcjBpuwB4uApsk6YYd182MeJIacw",
    authDomain: "front-271cb.firebaseapp.com",
    databaseURL: "https://front-271cb.firebaseio.com",
    projectId: "front-271cb",
    storageBucket: "front-271cb.appspot.com",
    messagingSenderId: "147917819174",
    appId: "1:147917819174:web:cee08a99b15d8f7786c5e7",
    measurementId: "G-BG7GPLDEDK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database().ref();

export default db;