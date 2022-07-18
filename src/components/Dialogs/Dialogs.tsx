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

export type PropsType = {
    // dialogsPage: DialogsPageType
    addPost?: (postMessage: string) => void
    // dispatch:(action:ActionsTypes)=>void
    store:StoreType
}

const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage
    let dialogsElements =  state.dialogs.map(d => <DialogItem name={d.name}  id={d.id}/>)
    let messageElements = state.messages.map(mes => <Message  message={mes.message} id={mes.id}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = ()=> {
    props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea placeholder="Enter your message" value={newMessageBody} onChange={(event) => onNewMessageChange(event)}></textarea></div>
                    <div><button  onClick={onSendMessageClick}>Send</button></div>
                </div>
                {/*<textarea ref={newMessageElement}></textarea>*/}
                {/*<div>*/}
                {/*    <button onClick={addNewMessage}>add message</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Dialogs