export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}

export type FriendType = {
    id: number
    name: string
}

export type SidebarType = {
    friends: FriendType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    addPost?: (postMessage: string) => void
}

export type StoreType = {
    _state: RootStateType
    // updateNewPostText: (newText: string) => void
    // addPost: (postText: string) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: 'Is \'s my first post!', likesCount: 11},
            ],
            newPostText: " "
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            newMessageBody: " "
        },
        sidebar: {
            friends: [
                {id: 1, name: "Ann"},
                {id: 2, name: "Jack"},
                {id: 3, name: "Bob"},
            ]
        }
    },
    getState() {
        return this._state
    },
    // addPost(postText: string) {
    //     const newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsTypes) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber()
        }
    }
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (updateNewPostText: string) => {
    return {
        // type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText
        type: 'UPDATE-NEW-POST-TEXT',
        newText: updateNewPostText
    } as const
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
