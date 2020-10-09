import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCmts66uEUxCkkjrtW3ssG-pGZvhyJZfIU",
  authDomain: "fhelandingpage.firebaseapp.com",
  databaseURL: "https://fhelandingpage.firebaseio.com",
  projectId: "fhelandingpage",
  storageBucket: "fhelandingpage.appspot.com",
  messagingSenderId: "1045838672768",
  appId: "1:1045838672768:web:34790e08ecd45d0ffbc765",
  measurementId: "G-RFNYGV66CV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
