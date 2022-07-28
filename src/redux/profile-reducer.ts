import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'Is \'s my first post!', likesCount: 11},
    ],
    newPostText: " "}

const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            // stateCopy.posts.push(newPost)
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT :
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy
        default: return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (updateNewPostText: string) => {
    return {
        // type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText
        type: UPDATE_NEW_POST_TEXT,
        newText: updateNewPostText
    } as const
}

export default profileReducer