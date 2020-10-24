import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDHyr4R7C2aPz3xLQ56bEp_g3Rfa8E1Qvk",
  authDomain: "netflix-india-react.firebaseapp.com",
  databaseURL: "https://netflix-india-react.firebaseio.com",
  projectId: "netflix-india-react",
  storageBucket: "netflix-india-react.appspot.com",
  messagingSenderId: "232877257415",
  appId: "1:232877257415:web:b114f763a02b8c4550c4e2",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
