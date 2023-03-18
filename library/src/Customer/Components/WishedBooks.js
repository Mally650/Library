import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Wishedbooks({ customerId }) {
    const [wishedbooks, setwishedbooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3003/api/customer/mywishedbooks/${customerId}/5`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setwishedbooks(data);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [])
    const canceling = (id) => {
        fetch(`http://localhost:3003/api/customer/deletewish/${id}`, { method: "DELETE" })
            .then(response => response.json())
            .then(data => {
                const copybook = wishedbooks.filter(x => x.id !== id);
                alert('ביטלת המתנה לספר')
                setwishedbooks(copybook);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })

    }
    return <div id="WisheddBooks" className="wishes-books-frame">
        <h3>ספרים שאתה ממתין להשאיל</h3>
        <div className='book-list'>
            {
                wishedbooks.map(e =>
                    <div className="book-card" key={e.id}>
                        <img className="book-image" src={require(`../../../public/images/${e.imageName}.jpg`)} />
                        <span>{e.name}</span>
                        <span>תאריך בקשה: </span>
                        <span> {format(new Date(e.Date_required), "dd-MM-yyyy")} </span>
                        <span>
                            <button className="trash-icon" onClick={() => canceling(e.id)}>ביטול המתנה</button>
                        </span>
                    </div>
                )
            }
        </div>
    </div>
}