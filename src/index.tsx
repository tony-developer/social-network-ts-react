import React from 'react';
import './index.css';
import {StoreType} from "./redux/store";
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsAppType} from './App';
import {RootStateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
// import {Provider} from "react-redux";
import {Provider} from "./StoreContext";

let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
            {/*<App state={state} dispatch={store.dispatch.bind(store)}/>*/}
            <Provider store= {store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}


// store.subscribe(() => rerenderEntireTree(store))
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
rerenderEntireTree(store.getState());
