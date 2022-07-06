import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, {PostPropsType} from "./MyPosts/Post/Post";

type PostsPropsType = {
    posts: Array<PostPropsType>
}

const Profile = (props:PostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <ProfileInfo/>
            {postsElements}
        </div>
    );
};

export default Profile;