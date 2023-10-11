import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function User() {
    const {username} = useParams()
    const [userData, setUserdata] = useState({})

    useEffect(() => {
        fetch('/Users.json').then(data => {
            return data.json()
        }).then(data => {
            setUserdata(data[username])
        })
    }, [username])


    return <div>
        <h1>User Profile of {username}</h1>
        <p>name = {userData?.name}</p>
        <p>age = {userData?.age}</p>
    </div>
}

export default User 