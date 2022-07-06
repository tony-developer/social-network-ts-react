import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    // name: string,
    // id: string
    // message: string

}
export type DialogsDataPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}
// type DialogItemPropsType = {
//     name: string,
//     id: number
// }
// type MessagePropsType = {
//     message: string
// }

// let dialogsData = [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name:'Andrey'},
//     {id: 3, name:'Sveta'},
//     {id: 4, name:'Sasha'},
//     {id: 5, name:'Viktor'},
//     {id: 6, name:'Valera'}
// ]

//     [
//     <DialogItem name={dialogsData[0].name}  id={dialogsData[0].id}/>,
//     <DialogItem name={dialogsData[1].name}  id={dialogsData[1].id}/>,
//     <DialogItem name={dialogsData[2].name}  id={dialogsData[2].id}/>
// ]
// let messagesData = [
//     {id: 1, message: "Hi!"},
//     {id: 2, message:"How are you?"},
//     {id: 3, message:"Yo"},
//     {id: 4, message:"Yo"},
//     {id: 5, message:"Yo"}
// ]



const Dialogs = (props:DialogsDataPropsType) => {
    let messageElements = props.messages.map(mes => <Message message={mes.message}/>)
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