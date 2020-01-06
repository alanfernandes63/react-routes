import React, { useState } from 'react';

export default function Login(){

    const [password,changePassword] = useState("");
    const [username, changeUsername] = useState("");


    function handlechangePassword(e){
        changePassword(e.target.value);
    }

    function handlechangeUsername(e){
        changeUsername(e.target.value);
    }

    return (
        <div>
                <label>Username: </label>
                <input  type="text" onChange={ handlechangeUsername }></input>
                <label>Password: </label>
                <input type="password" onChange={ handlechangePassword } ></input>
                <button>Enter</button> 
        </div>
    );
}