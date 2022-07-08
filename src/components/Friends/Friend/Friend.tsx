import React from 'react';
import s from './../Friends.module.css'

export type FriendPropsType = {
    id: number
    name: string
}
const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.friend}>
            Friends
            <img src='https://static.vecteezy.com/system/resources/thumbnails/001/546/003/small/indian-woman-s-face-avatar-free-vector.jpg'/>
        </div>
    );
};

export default Friend;