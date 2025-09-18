import { useState } from "react"

export default function Player() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    const handleSingle = () => {
        const newRun = runs + 1;
        setRuns(newRun)
    }

    const handleFour = () => {
        const newRun = runs + 4;
        setRuns(newRun)
    }

    const handleSix = () => {
        const newRun = runs + 6;
        const countSix = sixes + 1;
        setSixes(countSix)
        
        setRuns(newRun)
    }

    return(
        <div>
            <h3>Team Name: Bangladesh</h3>
            <p>Total Sixes: {sixes}</p>
            {
                runs > 50 && <p>Congratulations! you score 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}