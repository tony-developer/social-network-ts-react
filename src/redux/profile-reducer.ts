import {PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default: return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (updateNewPostText: string) => {
    return {
        // type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText
        type: 'UPDATE-NEW-POST-TEXT',
        newText: updateNewPostText
    } as const
}

export default profileReducer