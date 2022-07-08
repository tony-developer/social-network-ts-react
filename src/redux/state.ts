export type PostType = {
    id:  number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType ={
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
    addPost:(postMessage: string)=>void
}

export let state: RootStateType = {
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
    sidebar:{
        friends : [
            {id: 1, name: "Ann"},
            {id: 2, name: "Jack"},
            {id: 3, name: "Bob"},
        ]
    },
    addPost(postMessage: string) {

    }
}

export let addPost = (postMessage: string) =>{
    const newPost: PostType = {
        id: new Date().getTime() ,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
}
