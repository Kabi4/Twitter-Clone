import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLnZsG1TpIC1gsFiml_ZBuzO4RRjuHJHU",
    authDomain: "twitter-clone-3f55d.firebaseapp.com",
    databaseURL: "https://twitter-clone-3f55d.firebaseio.com",
    projectId: "twitter-clone-3f55d",
    storageBucket: "twitter-clone-3f55d.appspot.com",
    messagingSenderId: "227513332982",
    appId: "1:227513332982:web:c76a57c92db26c2954a8d7",
    measurementId: "G-41B7880B8S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.TwitterAuthProvider();

export {auth,storage,provider};
export default db;