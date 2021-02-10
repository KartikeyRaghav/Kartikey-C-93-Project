import firebase from 'firebase'
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBB8MWul-RoL5_LOoqGcVvirOYpve8xR50",
    authDomain: "kartikey-attendance-app.firebaseapp.com",
    projectId: "kartikey-attendance-app",
    storageBucket: "kartikey-attendance-app.appspot.com",
    messagingSenderId: "616205286547",
    appId: "1:616205286547:web:3319f39f6bd2bf900e6166"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()