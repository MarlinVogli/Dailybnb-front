import { useState, useEffect } from "react";
import API from "../api";


const GetUsers =() => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        const fetchUsers = async () => {
            try {
                const res = await API.get("/auth/users");
                setUsers(res.data);
            }catch(err) {
                console.error("Error fetching users:", err);
            }
        };
        fetchUsers();
    },[]);

    return(

        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>{user.email}</li>
                ))}
            </ul>
        </div>

    );
}

export default GetUsers;