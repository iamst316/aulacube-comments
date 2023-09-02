

export default function(props){
    const {postId, id, name, email, body} = props.comment;

    return(<>
        <div className="comment-name">{name}</div>
        <div className="comment-email">{email}</div>
        <div className="comment-body">{body}</div>
    </>)
}