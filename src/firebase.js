import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCBguF7oZ4hgO-r5wFpeoOZLBfGy9vtV2Q",
  authDomain: "react-auth-101-d57db.firebaseapp.com",
  projectId: "react-auth-101-d57db",
  storageBucket: "react-auth-101-d57db.appspot.com",
  messagingSenderId: "451503083819",
  appId: "1:451503083819:web:5cb107a7bff04574ecf56e",
  measurementId: "G-0J4HYJW7KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
