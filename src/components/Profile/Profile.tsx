import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";
import {addPost, ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = (props: PropsType) => {
    // let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} addPost={addPost}/>)

    return (
        <div>
            {/*<MyPosts id={props.posts} message={p} likesCount={ } />*/}
            <ProfileInfo/>
            {/*{postsElements}*/}
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;