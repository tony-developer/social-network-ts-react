 import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import postsElements from "../Profile";



const MyPosts = (props:PostPropsType) => {

    // let posts= [
    //     {id: 1, message: 'Hi! How are you?', likesCount: 12},
    //     {id: 2, message:'Is \'s my first post!', likesCount: 11},
    // ]
    // let postsElements = props.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;