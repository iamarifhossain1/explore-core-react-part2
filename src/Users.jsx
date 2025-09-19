import { use } from "react";

export default function Users({fetch}) {
    const users = use(fetch)
    console.log(users);
    
    return(
        <div className="users">
            <h3>Users: {users.length}</h3>
        </div>
    )
}