import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCRudcWhRDbG8XlX98Tj0kFYLI34yUGoGw",
  authDomain: "react-native-app-7ded0.firebaseapp.com",
  databaseURL: "https://react-native-app-7ded0-default-rtdb.firebaseio.com",
  projectId: "react-native-app-7ded0",
  storageBucket: "react-native-app-7ded0.appspot.com",
  messagingSenderId: "106011657211",
  appId: "1:106011657211:web:55146be8139a0241b1015e",
  measurementId: "G-R20VQ104C9"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }
