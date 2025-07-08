import { Navigate, useParams } from "react-router-dom"

type Params = {
    roomId: string
}

export function Room() {
    const { roomId } = useParams<Params>()

    if (!roomId) {
        return <Navigate to={"/"} />
    }

    return (
        <div>
            <h1>Room</h1>

            <p>{roomId}</p>
        </div>
    )
}