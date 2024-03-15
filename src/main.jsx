import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClcPECk-m7AzBeyckU0OayHnO3KafgPqQ",
  authDomain: "web1-e91b8.firebaseapp.com",
  projectId: "web1-e91b8",
  storageBucket: "web1-e91b8.appspot.com",
  messagingSenderId: "701933160729",
  appId: "1:701933160729:web:0bcb4ffce5fe8b2b6d9d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
