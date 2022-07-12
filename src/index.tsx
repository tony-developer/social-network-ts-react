import React from 'react';
import './index.css';
import { store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsAppType} from './App';
import {RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

 let rerenderEntireTree=(state:PropsAppType)=>{
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>*/}
            {/*<App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree )
