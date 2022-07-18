import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import postsElements from "../Profile";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost:()=>void
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost  = () => {
        // let text = newPostElement.current?.value
        // props.dispatch(addPostActionCreator(props.newPostText))
        // props.updateNewPostText('')
        props.addPost()
    }
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}
                                                   addPost={onAddPost}/>)
    let onPostChange = () => {
        // let text = newPostElement.current?.value
        // const text = event.currentTarget.value
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // let action: ActionsTypes = {type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText};

        // let action: ActionsTypes = updateNewPostTextActionCreator(text);
        // text && props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;