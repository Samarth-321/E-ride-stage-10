import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAkXLaiJmrRw8IFyomhIHsNTaBULTAFcsg",
  authDomain: "e-ride-749eb.firebaseapp.com",
  projectId: "e-ride-749eb",
  storageBucket: "e-ride-749eb.appspot.com",
  messagingSenderId: "632592340134",
  appId: "1:632592340134:web:ad4a1bbb33739d9db0d067"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
