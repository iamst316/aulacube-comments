

export default function(props){
    const {postId, id, name, email, body} = props.post;
    return <>
        <div className="post-name">{name}</div>
        <div className="post-body">{body}</div>
    </>
}