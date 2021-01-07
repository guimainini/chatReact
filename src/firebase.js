import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBFEN6uRUrMJrp5mZFfjLDUQXv4nYNxe8s",
    authDomain: "chatreact-8c123.firebaseapp.com",
    projectId: "chatreact-8c123",
    storageBucket: "chatreact-8c123.appspot.com",
    messagingSenderId: "621514421192",
    appId: "1:621514421192:web:ab766d229b2f147ffe06fd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}