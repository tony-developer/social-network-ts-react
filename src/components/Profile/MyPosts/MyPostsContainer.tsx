import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}
// let postsElements = store.getState().profilePage.posts.map(p => <Post key={p.id} id={p.id}
//                                                                       message={p.message}
//                                                                       likesCount={p.likesCount}
//
//                                                                       addPost={addPost}/>)

type MapStateToPropsType ={
    posts:Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType ={
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text:string) => {
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