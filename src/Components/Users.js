import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, )

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                if (result.status === 200) {
                    setUsers(result?.data);
                    console.log(users);
                }
            }) // Fulfilled
            .catch((error) => {
                console.log('Rejected');
                console.log(error);
            }) // Rejected
    }

    return (
        <div>
            <h3>List of Users</h3> <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={1}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to="/user-detail" className="btn btn-secondary">View Detail</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Users;