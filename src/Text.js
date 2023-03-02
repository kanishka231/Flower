import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

import { useState, useEffect } from "react";
import './Text.css';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByrVU4vIpVmiCbKyKE6jztrdCQJoPD-NM",
    authDomain: "happy-457cb.firebaseapp.com",
    projectId: "happy-457cb",
    storageBucket: "happy-457cb.appspot.com",
    messagingSenderId: "678252432810",
    appId: "1:678252432810:web:83f52d8c4d55912044efd3",
    measurementId: "G-ZDSXZLDW70"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Text = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const newMessages = [];
        querySnapshot.forEach((doc) => {
          newMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(newMessages);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text">
        
        <form onSubmit={handleSubmit}>
        <h1>Text Screen</h1>
            <input type="text" value={text} onChange={handleChange} />
        <div>
        <button type="submit">Send</button>
        </div>
      </form>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Text