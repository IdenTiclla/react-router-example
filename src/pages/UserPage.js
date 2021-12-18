import { useParams } from "react-router-dom";

export default function UserPage() {
    const { id } = useParams();
    
    return (
        <div>
            <h1>User Page</h1>
            <h1>{id}</h1>
        </div>
    );
}