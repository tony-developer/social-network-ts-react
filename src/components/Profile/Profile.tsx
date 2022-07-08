import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {
    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            {/*<MyPosts id={props.posts} message={p} likesCount={ } />*/}
            <ProfileInfo/>
            {postsElements}
        </div>
    );
};

export default Profile;