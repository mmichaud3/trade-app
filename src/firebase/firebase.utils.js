import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6-fSVYlS1dGlYA4v00sjARllhbwYZVF4",
  authDomain: "trade-app-e67bb.firebaseapp.com",
  databaseURL: "https://trade-app-e67bb.firebaseio.com",
  projectId: "trade-app-e67bb",
  storageBucket: "trade-app-e67bb.appspot.com",
  messagingSenderId: "956102702139",
  appId: "1:956102702139:web:d7ba62b44678db7009181e",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
