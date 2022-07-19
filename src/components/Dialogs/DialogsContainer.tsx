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
import {connect} from "react-redux";

export type PropsType = {
    // dialogsPage: DialogsPageType
    addPost?: (postMessage: string) => void
    // dispatch:(action:ActionsTypes)=>void
    store: StoreType
}

let mapStateToProps  = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:()=> {
            dispatch(sendMessageCreator('newPostText'))
        },
        sendMessage:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer