import firebase from 'firebase'

export default function FirebaseConnectivity() {
var firebaseConfig = {
  apiKey: "AIzaSyDxPf7TonNNWAEDN8k7I5c2yGRt36bF9YM",
  authDomain: "showbox-8022c.firebaseapp.com",
  databaseURL: "https://showbox-8022c.firebaseio.com",
  projectId: "showbox-8022c",
  storageBucket: "showbox-8022c.appspot.com",
  messagingSenderId: "92655469642",
  appId: "1:92655469642:web:5894c5c8ed4e1e4c14d2b3",
  measurementId: "G-7J3HXSQEZ5"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
}