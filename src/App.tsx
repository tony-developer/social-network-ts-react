import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/state";
import Friends from "./components/Friends/Friends";


export type PropsAppType = {
    // state: RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText:string)=> void
    store: StoreType
}

const App: React.FC<PropsAppType>=(props) => {
    const state = props.store.getState
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} addPost={props.store.addPost.bind(props.store)} />}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={props.dispatch} />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends sidebar={state.sidebar}/>}/>
            </div>
        </div>
    );
}

export default App;




