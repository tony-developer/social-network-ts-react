import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    profilePage: ProfilePageType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;