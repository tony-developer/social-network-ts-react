import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

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
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;