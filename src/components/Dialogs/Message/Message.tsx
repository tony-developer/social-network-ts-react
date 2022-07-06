import s from './../Dialogs.module.css'

export type MessagePropsType = {
    id: number
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message