import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import postsElements from "../Profile";

let newPostElement = React.createRef<HTMLTextAreaElement>()
let addPost = () => {
    let text = newPostElement.current?.value
    alert(text)
}


const MyPosts = (props: PostPropsType) => {

    // let posts= [
    //     {id: 1, message: 'Hi! How are you?', likesCount: 12},
    //     {id: 2, message:'Is \'s my first post!', likesCount: 11},
    // ]
    // let postsElements = props.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;