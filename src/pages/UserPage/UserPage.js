import { useParams } from "react-router-dom"

export default function UserPage() {
    const {username} = useParams();
    return (
        <div>
            <h1>User page: {username}</h1>
        </div>
    )
}
