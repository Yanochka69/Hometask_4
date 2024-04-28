import { useState, useEffect } from "react";
import style from '../css/UserList.module.css'

function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return(
        <div className={style.list}>
            {data && 
            <ul>{data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>}
        </div>
    )
}

export default UserList