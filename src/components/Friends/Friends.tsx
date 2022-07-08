import React from 'react';
import Friend, {FriendPropsType} from "./Friend/Friend";
import {SidebarType} from "../../redux/state";



export type PropsType = {
    sidebar: SidebarType
}
const Friends = (props: PropsType ) => {
    let friendElement = props.sidebar.friends.map(f =><Friend id={f.id} name={f.name}/>)
    return (
        <div >
            {friendElement}
        </div>
    );
};

export default Friends;