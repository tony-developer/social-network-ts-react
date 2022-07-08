import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

addPost('Yo JS!')
ReactDOM.render(
    // <App posts ={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
<BrowserRouter>
    <App state={state} />
</BrowserRouter>, document.getElementById('root')
);
