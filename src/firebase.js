import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: <your api key>,
    authDomain: <your auth domain>,
    databaseURL: <your database URL>,
    projectId: <your project ID>,
    storageBucket: <your storage bucket>,
    messagingSenderId: <your message sender id>,
    appId: <your app id>,
    measurementId: <your measurement id>
});

const db = firebaseApp.firestore();

export default db;
