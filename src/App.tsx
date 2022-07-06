import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";

type PropsAppType ={
    posts: Array<PostPropsType>
    dialogs: Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}

const App = (props:PropsAppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.posts}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                        <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




