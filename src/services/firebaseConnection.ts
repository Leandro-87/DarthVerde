import firebase from "firebase/app";
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyA43BhSyT_RRwoxU8Q0UVy0SSylbn7ozsQ",
    authDomain: "darth-verde.firebaseapp.com",
    databaseURL: "https://darth-verde-default-rtdb.firebaseio.com",
    projectId: "darth-verde",
    storageBucket: "darth-verde.appspot.com",
    messagingSenderId: "1043841982978",
    appId: "1:1043841982978:web:11becc91564e743ff7bd1b"
  };

  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase