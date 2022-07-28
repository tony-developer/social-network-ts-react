import {ActionsTypes, DialogsPageType, PostType} from "./store";
import exp from "constants";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ] as Array<MessageType>,
    newMessageBody: " "
}

// export type InitialStateType = typeof initialState

const dialogsReducer = (state:DialogsPageType = initialState, action:ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = (newPostText: string) => {
    return {
        type: SEND_MESSAGE,
        postText: newPostText
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        // type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer