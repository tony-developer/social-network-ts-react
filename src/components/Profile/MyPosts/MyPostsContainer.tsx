import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}
// let postsElements = store.getState().profilePage.posts.map(p => <Post key={p.id} id={p.id}
//                                                                       message={p.message}
//                                                                       likesCount={p.likesCount}
//                                                                       addPost={addPost}/>)

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action: ActionsTypes = updateNewPostTextActionCreator(text);
            text && dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default DialogsContainer;