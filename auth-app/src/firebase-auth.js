import firebase from 'firebase/app'
import "firebase/auth"

// Your web app's Firebase configuration
/*var firebaseConfig = {
    apiKey: "AIzaSyAaCsBrAXCmV5vl9EsXqmn5X3ow96zpggI",
    authDomain: "bikes-planet.firebaseapp.com",
    projectId: "bikes-planet",
    storageBucket: "bikes-planet.appspot.com",
    messagingSenderId: "559352553240",
    appId: "1:559352553240:web:a1b7cc70e23498a552c86d"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);*/

  const app = firebase.initializeApp({
    apiKey: "AIzaSyBdUjn10kFdKFpsgi7tUxfaoyu3LFheNEU",
    authDomain: "fir-auth-tutorial-b9fed.firebaseapp.com",
    projectId: "fir-auth-tutorial-b9fed",
    storageBucket: "fir-auth-tutorial-b9fed.appspot.com",
    messagingSenderId: "1039147163604",
    appId: "1:1039147163604:web:7f36cd795c6f08d7c5c041"
  })

  export const auth = app.auth()
  export default app