import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
import FixBookPopup from "../Popups/FixBookPopup";

export default function EmployeeTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3003/api/employee/tasks`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setTasks(data);
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [])
    const fixBook = (id, status) => {
        fetch(`http://localhost:3003/api/employee/tasks`, {
            method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                id: id,
                status: status
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const tasksnew = tasks.filter(x => x.id !== id);
                    alert('ביטלת המתנה לספר')
                    setTasks(tasksnew)
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('you er got problem in your details ')
            })
    }
    const removeTask = (id) => {
        let newTask = tasks.filter(t => t.id != id)
        setTasks(newTask)
    }
    return <div id="tasks">
        <h3>הספרים הממתינים לטיפול</h3>
        <div className='book-list'>
            {

                tasks.map(e =>
                    <div key={e.id}>
                        <img className="book-image" src={require(`../../../public/images/${e.imageName}.jpg`)} />
                        <span>שם ספר: {e.book_name}</span>
                        <span>מצב נוכחי: {e.status_name}</span>
                        <span>
                            <button onClick={() => removeTask(e.id)}>X</button>
                            <FixBookPopup book_id={e.id} finish={() => removeTask(e.id)} />
                        </span>
                    </div>
                )
            }
        </div>

    </div>
}