import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBT7LLyfkmEHD867XYD_MoKZInxUXm1UNk",
    authDomain: "ifiregram.firebaseapp.com",
    databaseURL: "https://ifiregram.firebaseio.com",
    projectId: "ifiregram",
    storageBucket: "ifiregram.appspot.com",
    messagingSenderId: "860580745636",
    appId: "1:860580745636:web:712f96c22388644e0b3131"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const store = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, store, timestamp };