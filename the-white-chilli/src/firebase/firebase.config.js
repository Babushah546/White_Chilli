import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgJpS-cAUBnnxU95Gtc68x9N7pJFbQ2dw",
  authDomain: "fir-white-chilli.firebaseapp.com",
  projectId: "fir-white-chilli",
  storageBucket: "fir-white-chilli.appspot.com",
  messagingSenderId: "1048829576831",
  appId: "1:1048829576831:web:30cf5c350738eb895aa14a",
};
// console.log(firebaseConfig.appId);

const app = initializeApp(firebaseConfig);

export default app;

