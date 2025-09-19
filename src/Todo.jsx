export default function Todo({todo}){
    const {id, title} = todo;
    return(
        <div className="users">
            <h3>ID: {id}</h3>
            <h3>Title: {title}</h3>
        </div>
    )
}