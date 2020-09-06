import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAU1o345tmsBpWaU6R9Yiwa-2ANA6EXlE",
    authDomain: "todo-react-a53e0.firebaseapp.com",
    databaseURL: "https://todo-react-a53e0.firebaseio.com",
    projectId: "todo-react-a53e0",
    storageBucket: "todo-react-a53e0.appspot.com",
    messagingSenderId: "246131844093",
    appId: "1:246131844093:web:93b96294eb402344046f94",
    measurementId: "G-2PW0XGT42P"
});

const db = firebaseApp.firestore();

export default db;