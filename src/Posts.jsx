import { use } from "react"
import Post from './Post'

export default function Posts({postPromise}) {
    const posts = use(postPromise)
    console.log(posts);
    
    
    return(
        <div className="users">
            <h3>All Post Here: {}</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}