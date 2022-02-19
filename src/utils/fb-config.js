import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsXeVWOV7TXO9dazRuIvYExUK8AKszjmQ",
  authDomain: "g6-delivery-food.firebaseapp.com",
  databaseURL: "https://g6-delivery-food-default-rtdb.firebaseio.com",
  projectId: "g6-delivery-food",
  storageBucket: "g6-delivery-food.appspot.com",
  messagingSenderId: "842567534778",
  appId: "1:842567534778:web:bf393f07f93cac6ac45a83"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
