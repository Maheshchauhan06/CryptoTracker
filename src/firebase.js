import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBdNdevxD20fAMY7u3vcz1WVp-hwNyGHkE",
  authDomain: "crypto-tracker-7788b.firebaseapp.com",
  projectId: "crypto-tracker-7788b",
  storageBucket: "crypto-tracker-7788b.appspot.com",
  messagingSenderId: "1093867281445",
  appId: "1:1093867281445:web:ea7871fba1cc485c3473cc",
  measurementId: "G-EYH9PWPN6P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);