import { useParams } from "react-router-dom";

function UserDetail() {
    let { id } = useParams();
    return (
        <div>
            <h3>User Detail Here</h3>
            <p>{id}</p>
        </div>
    )
}

export default UserDetail;