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
        <table>
            <tr><th>שם ספר</th><th>מצב נוכחי</th><th></th></tr>
        {

            tasks.map(e =>
                <tr key={e.id}>
                    <td>{e.book_name}</td><td> {e.status_name}</td>
                    <td>
                    <button onClick={() => removeTask(e.id)}>X</button>
                    <FixBookPopup book_id={e.id} finish={() => removeTask(e.id)} />
              </td>  </tr>
            )
        }
        </table>

    </div>
}