import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCN4h39r1PypwyLoDRh9C7dGIXQeu7k1gI",
    authDomain: "thedojosite-f1eb6.firebaseapp.com",
    projectId: "thedojosite-f1eb6",
    storageBucket: "thedojosite-f1eb6.appspot.com",
    messagingSenderId: "881347925063",
    appId: "1:881347925063:web:943a0dbd404153e9fdcd62"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp 
  const timestamp = firebase.firestore.Timestamp

  export  { projectFirestore, projectAuth, projectStorage, timestamp }