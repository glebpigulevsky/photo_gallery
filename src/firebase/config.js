import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDg_1QIkk8xunIk8gUBpJSYdmQip7v0A44',
  authDomain: 'bookgram-b1c0a.firebaseapp.com',
  databaseURL: 'https://bookgram-b1c0a.firebaseio.com',
  projectId: 'bookgram-b1c0a',
  storageBucket: 'bookgram-b1c0a.appspot.com',
  messagingSenderId: '598449056980',
  appId: '1:598449056980:web:312aa6384a7fc45a979f41',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
