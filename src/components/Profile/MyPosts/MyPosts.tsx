import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import postsElements from "../Profile";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost:(text: string)=>void
    newPostText:string
    updateNewPostText: (newText:string)=> void
}

const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        // let text = newPostElement.current?.value
        props.dispatch({type:'ADD-POST'})
        // props.updateNewPostText('')
    }
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} addPost={addPost}/>)
    let onPostChange = () => {
        let text = newPostElement.current?.value
        let action = {type: 'UPDATE-NEW_POST-TEXT', newText: text };
        text && props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;