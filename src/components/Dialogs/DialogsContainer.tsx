import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent, FormEvent, FormEventHandler} from "react";
import {
    ActionsTypes,
    DialogsPageType,
    StoreType,
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export type PropsType = {
    // dialogsPage: DialogsPageType
    addPost?: (postMessage: string) => void
    // dispatch:(action:ActionsTypes)=>void
    store: StoreType
}

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator('newPostText'))
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer