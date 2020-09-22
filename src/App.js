import {IconButton, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './Component/firebase';
import Message from './Component/Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import web from "../src/Component/Images/pic.png";

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
  useEffect(()=>{
db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
})
  },[]);
  useEffect(() => {
    setUsername(prompt("enter userName"));
  }, [])
  const showMessage = e=>{
    e.preventDefault();
    // setMessages([...messages,{username:username,message:input}]);
    db.collection('messages').add({username:username,message:input,  timestamp:firebase.firestore.FieldValue.serverTimestamp()})
    setInput("");
  }
  
  return (
    <>
    <div className="App">
      <img src={web} alt="pic"/>
  <h1>Facebook-Messenger</h1>
  <h2>Welcome {username}</h2>
  <form className="app_form">
  <FormControl className="app_formControl">
  <InputLabel htmlFor="my-input">type message</InputLabel>
  <Input className="app__input"  placeholder="enter a message" onChange={e=>setInput(e.target.value)} value={input} />
  <IconButton className="app__IconButton" disabled={!input}  type="submit" onClick={showMessage} variant="contained" color="secondary">
  <SendIcon />
</IconButton>
</FormControl >
  </form>
  <FlipMove>
  {messages.map(({id,message})=><Message key={id} username={username} message={message} />)}
  </FlipMove>
    </div>
    </>
  );
}

export default App;
