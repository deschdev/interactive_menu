import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
		apiKey: "AIzaSyAsRiiiosK4jZl7k67DhV9pGL_h5P5k4-8",
		authDomain: "catch-of-the-day-norm.firebaseapp.com",
		databaseURL: "https://catch-of-the-day-norm-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());


//Named export
export { firebaseApp };
//this is a default export
export default base;