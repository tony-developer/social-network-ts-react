import React from 'react';
import s from './Post.module.css'

export type PostPropsType={
    id: number
    message: string
    likesCount: number
}

const Post = (props:PostPropsType) => {

    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvYBi8HjWwL2ILkUP3iSr26KrR6CJWnqK6w&usqp=CAU'/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;