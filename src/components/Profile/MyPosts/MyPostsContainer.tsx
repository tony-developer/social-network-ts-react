import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = () => {
    // let state = props.store.getState()



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let postsElements = store.getState().profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}
                                                                                          addPost={addPost}/>)
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (text) => {
                        let action: ActionsTypes = updateNewPostTextActionCreator(text);
                        text && store.dispatch(action)
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={store.getState().profilePage.posts}
                                    newPostText={store.getState().profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;