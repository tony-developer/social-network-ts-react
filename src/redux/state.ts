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
    dispatch: (action: ActionsTypes ) => void
}

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
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
    dispatch(action) {
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
        }
    }
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

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
