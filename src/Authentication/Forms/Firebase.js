import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA6VDzRg8tSrvmmIkzlRqk1uDBwX8j31No",
  authDomain: "teachcom-aa9f4.firebaseapp.com",
  projectId: "teachcom-aa9f4",
  storageBucket: "teachcom-aa9f4.appspot.com",
  messagingSenderId: "1082406732738",
  appId: "1:1082406732738:web:8f5b3ca925dffa7a774c5b",
});
export const auth = app.auth()
export default app