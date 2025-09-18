import { useState } from "react"

export default function Bowler({name}) { 
    const [bowl, setBowl] = useState(6)
    const countBowl = () => { 
        const newCount = bowl - 1
        if(newCount < 0) {
            return 0;
        }
        setBowl(newCount)
    }

    const bowlerStyle = {
        border: '2px solid red',
        padding: '10px',
    }
    return(
        <div style={bowlerStyle}>
            {
                bowl < 1 && <p>Over !</p>
            }
            <h3>Bowler Name: {name}</h3>
            <h3>Bowl Count: {bowl}</h3>
            <button onClick={countBowl}>Bowl Count</button>
        </div>
    )
}