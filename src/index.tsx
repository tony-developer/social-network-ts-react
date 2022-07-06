import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";


ReactDOM.render(
    // <App posts ={state.posts} dialogs={state.dialogs} messages={state.messages}/>,

    <App dialogsPage={state.dialogsPage} profilePage={state.profilePage}  sidebar={state.sidebar}    />,
  document.getElementById('root')
);