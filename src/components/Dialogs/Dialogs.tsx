import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

export type DialogsDataPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}

const Dialogs = (props:DialogsDataPropsType) => {
    let messageElements = props.messages.map(mes => <Message id={mes.id} message={mes.message}/>)
    let dialogsElements =  props.dialogs.map(d =>
        <DialogItem name={d.name}  id={d.id}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs