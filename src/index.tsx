import React from 'react';
import './index.css';
import {store, StoreType} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsAppType} from './App';
import {RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

 let rerenderEntireTree=(store: StoreType)=>{
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
            {/*<App state={state} dispatch={store.dispatch.bind(store)}/>*/}
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


store.subscribe(() => rerenderEntireTree(store))
rerenderEntireTree(store);
