import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2plNRYe6H4kJQY_3PPmPUfGuP_RnwkhU",
  authDomain: "fashion-website-c2c40.firebaseapp.com",
  projectId: "fashion-website-c2c40",
  storageBucket: "fashion-website-c2c40.appspot.com",
  messagingSenderId: "121605348251",
  appId: "1:121605348251:web:1f2e7835a75a2021ad1f3e"
};

const app = initializeApp(firebaseConfig);
export default app;