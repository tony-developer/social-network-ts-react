import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts= [
    {id: 1, message: 'Hi! How are you?', likesCount: 12},
    {id: 2, message:'Is \'s my first post!', likesCount: 11},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name:'Andrey'},
    {id: 3, name:'Sveta'},
    {id: 4, name:'Sasha'},
    {id: 5, name:'Viktor'},
    {id: 6, name:'Valera'}
]
let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message:"How are you?"},
    {id: 3, message:"Yo"},
    {id: 4, message:"Yo"},
    {id: 5, message:"Yo"}
]

ReactDOM.render(
    <App posts ={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);