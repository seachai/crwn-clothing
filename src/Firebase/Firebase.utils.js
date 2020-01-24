import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5_8aw8SLV2dsWIUisqJ-tgP-dN7s2bL4",
  authDomain: "crwn-db-32ba2.firebaseapp.com",
  databaseURL: "https://crwn-db-32ba2.firebaseio.com",
  projectId: "crwn-db-32ba2",
  storageBucket: "crwn-db-32ba2.appspot.com",
  messagingSenderId: "144802621857",
  appId: "1:144802621857:web:3270b8ff11b9b8a53143e0",
  measurementId: "G-P9F7MFS6BJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Google login
provider.setCustomParameters({ prompt: "select_account" }); // Google account prompt
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
