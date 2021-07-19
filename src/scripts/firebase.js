// Firebase app is always required and must be first
import firebase from "firebase/app";
// Add additional services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/storage";
import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'

// Flamelink app is always required
import flamelink from "flamelink/app";
// Add additional modules that you want to use
import "flamelink/content";
import "flamelink/storage";
// import 'flamelink/settings'
import 'flamelink/navigation'
// import 'flamelink/users'

const firebaseConfig = {
    apiKey: "AIzaSyCIXZD7S_wa-4EzxNEAssG0Nz-q1Y_I4hk",
    authDomain: "vob-react.firebaseapp.com",
    projectId: "vob-react",
    storageBucket: "vob-react.appspot.com",
    messagingSenderId: "159207270431",
    appId: "1:159207270431:web:7c382dff94898e8341cd2a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const app = flamelink({
	firebaseApp,
	locale: "en-US", // optional, defaults to `en-US`
	dbType: "cf", // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

export const getApp = async () => {
   console.log(await app.nav.get())
    try {
        const products = await app.content.get({ schemaKey: "article" });
        console.log("All of your products:", products);
    } catch (error) {
        console.log(error);
    }
};