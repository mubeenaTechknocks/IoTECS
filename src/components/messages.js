import React, { useState } from 'react';
import firebase from "../connect/firebases";

export default function Messages() {
   const [ title, setTitle ] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createTodo = () => {
        const todoref = firebase.database().ref("Todo")
        const todo = {
            title,
            complete: false,
        };
        todoref.push(todo);
    };

    return (
        <div>
            
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createTodo}> Send Message </button>
         </div>
    );
}