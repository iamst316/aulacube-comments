import { useEffect, useState } from "react"
import axios from 'axios';
import Post from "./Post";
import Comment from "./Comment";

export default function(){

    const [posts, setPosts] = useState([]);
    const [data,setData] = useState([]);
    const [comments, setComments] = useState([]);

    function ShowComments(num){
        // alert("ji")
        const filter = data.filter(i=>i.postId==num)
        setComments(filter);
        console.log("comments",comments);
    }

    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/comments";
        axios.get(url)
            .then(response => {
                // console.log('Data received:', response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        
        
    },[])

    useEffect(()=>{
        const filter = data.filter(i=>i.id%5==1)
        setPosts(filter);
    },[data])

    // useEffect(()=>{

    // },[comments])
    
    return(<>

        <div className="posts-main">
            <h1>Posts</h1>
            <div className="filter">
                
                <input type="number" className="filter-input" placeholder="Enter Post ID to Filter" />

                <button>Filter</button>

            </div>

            <div className="post-display">
                {posts.map((i)=>{
                    return <button onClick={()=>ShowComments(i.postId)}><Post post={i} /></button>
                })}
            </div>
        </div>

        <div className="comments-main">
            <h1>Comments</h1>
            
            <div className="comment-display">{comments.length>0 ? comments.map((comment)=>{
                return <Comment comment={comment} />
            }):
            <h1>No Comments Here!</h1>
            }</div>
        </div>

    </>)
}