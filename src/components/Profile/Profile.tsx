import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from "./MyPosts/Post/Post";


let posts= [
    {id: 1, message: 'Hi! How are you?', likesCount: 12},
    {id: 2, message:'Is \'s my first post!', likesCount: 11},
]
 let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts/>*/}
            {postsElements}
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Ava + description*/}
            {/*</div>*/}
        </div>
    );
};

export default Profile;