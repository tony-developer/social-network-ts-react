import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {DialogsPageType} from "../../redux/state";

export type PropsType = {
    dialogsPage: DialogsPageType
    addPost: (postMessage: string) => void
}

const Dialogs = (props: PropsType) => {
    let messageElements = props.dialogsPage.messages.map(mes => <Message id={mes.id} message={mes.message}/>)
    let dialogsElements =  props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name}  id={d.id}/>
    )

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addNewMessage =()=> {
        // if (newMessageElement.current ){
        //     let newMessage = newMessageElement.current.value
        //     alert(newMessage)
        // }
        // alert(newMessageElement.current && newMessageElement.current.value)
        if(newMessageElement.current) {
            props.addPost(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addNewMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs