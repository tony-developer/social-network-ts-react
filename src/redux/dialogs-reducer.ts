import {PostType} from "./state";
import exp from "constants";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case "SEND-MESSAGE":
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
        type: "SEND-MESSAGE",
        postText: newPostText
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        // type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export default dialogsReducer