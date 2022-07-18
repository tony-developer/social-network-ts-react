import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    profilePage: ProfilePageType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsTypes)=>void
    store: StoreType
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;