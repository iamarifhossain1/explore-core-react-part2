export default function Post({post}) {
    const {id, title} = post
    return(
        <div className="users">
            <h4>ID: {id}</h4>
            <h4>Title: {title}</h4>
        </div>
    )
}