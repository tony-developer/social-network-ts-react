import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";

// export type PostPropsType={
//     id: number
//     message: string
//     likesCount: number
// }
// export type PostsType ={
//     id: number,
//     message: string,
//     likesCount: number
// }
// export type MessagePropsType = {
//     id: number
//     message: string
// }
type ProfilePageType = {
    posts: Array<PostPropsType>
}
type DialogsPropsType ={
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPropsType
    sidebar:SidebarType
}

export let state:RootStateType = {
    profilePage: {
        posts : [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message:'Is \'s my first post!', likesCount: 11},
        ]
    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Dimych'},
            {id: 2, name:'Andrey'},
            {id: 3, name:'Sveta'},
            {id: 4, name:'Sasha'},
            {id: 5, name:'Viktor'},
            {id: 6, name:'Valera'}
        ],
        messages : [
            {id: 1, message: "Hi!"},
            {id: 2, message:"How are you?"},
            {id: 3, message:"Yo"},
            {id: 4, message:"Yo"},
            {id: 5, message:"Yo"}
        ]
    },
    sidebar:{}
}

