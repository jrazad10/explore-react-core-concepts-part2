import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(15)

    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const reducePlayer = () =>{
        const newTeam = team - 1;
        setTeam(newTeam)
    }

    const teamStyle = {
        border: "2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px"
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={reducePlayer}>Reduce</button>
        </div>
    )
}