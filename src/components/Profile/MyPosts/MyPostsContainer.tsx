import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}
                                                   addPost={addPost}/>)
    let onPostChange = (text) => {
        let action: ActionsTypes = updateNewPostTextActionCreator(text);
        text && props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>);

}
export default MyPostsContainer;