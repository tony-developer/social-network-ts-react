import {ActionsTypes, SidebarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: "Ann"},
        {id: 2, name: "Jack"},
        {id: 3, name: "Bob"},
    ]
}

const sidebarReducer =(state: SidebarType = initialState, action:ActionsTypes)=> {
return state
}

export default sidebarReducer