import Rebase from 're-base';
import firebase from 'firebase';

let app = firebase.initializeApp({
  apiKey: "AIzaSyByxNYpAs_ZZo7V8xMcyBsfsZ4N2df4iLE",
  authDomain: "my-pwa-8e1f1.firebaseapp.com",
  databaseURL: "https://my-pwa-8e1f1.firebaseio.com",
  projectId: "my-pwa-8e1f1"
})
const base = Rebase.createClass(app.database());

export default base;