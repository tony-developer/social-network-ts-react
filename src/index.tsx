import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

type PropsType = {
    state: RootStateType
}
addPost('Yo JS!')
ReactDOM.render(
    // <App posts ={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
<BrowserRouter>
    <App state={state} addPost={addPost}/>
</BrowserRouter>, document.getElementById('root')
);
