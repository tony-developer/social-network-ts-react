import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    name: string,
    id: string
}
// type DialogItemPropsType = {
//     name: string,
//     id: number
// }
// type MessagePropsType = {
//     message: string
// }

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name:'Andrey'},
    {id: 3, name:'Sveta'},
    {id: 4, name:'Sasha'},
    {id: 5, name:'Viktor'},
    {id: 6, name:'Valera'}
]
let dialogsElements =  dialogsData.map(d =>
     <DialogItem name={d.name}  id={d.id}/>
)
//     [
//     <DialogItem name={dialogsData[0].name}  id={dialogsData[0].id}/>,
//     <DialogItem name={dialogsData[1].name}  id={dialogsData[1].id}/>,
//     <DialogItem name={dialogsData[2].name}  id={dialogsData[2].id}/>
// ]
let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message:"How are you?"},
    {id: 3, message:"Yo"},
    {id: 4, message:"Yo"},
    {id: 5, message:"Yo"}
]

let messageElements = messagesData.map(mes => <Message message={mes.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name}  id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name}  id={dialogsData[1].id}/>*/}

                {/*<DialogItem name='Sveta' id='3'/>*/}
                {/*<DialogItem name='Sasha' id='4'/>*/}
                {/*<DialogItem name='Viktor' id='5'/>*/}
                {/*<DialogItem name='Valera' id='6'/>*/}

                {/*<div className={`${s.dialog} + '' + ${s.active}`}>*/}
                {/*   <NavLink to="/dialogs/1">Dimych</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/2">Andrey</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/3">Sveta</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/4">Sasha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/5">Viktor</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/6">Valera</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                {messageElements}
                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}

                {/*<div className={s.message}>Hi!</div>*/}
                {/*<div className={s.message}>How are you?</div>*/}
                {/*<div className={s.message}>Yo</div>*/}
            </div>
        </div>
    )
}
export default Dialogs