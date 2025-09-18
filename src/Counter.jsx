import { useState } from "react"

export default function Counter(){ 
    const [count, setCount] = useState(0)
    const handleClick = () => { 
        const newCount = count + 1;
        setCount(newCount)
    }

    const countStyle = {
        border: '2px solid goldenrod',
        marginLeft: '20px'
    }


    return(
        <div style={countStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Add Count</button>
        </div>
    )
}