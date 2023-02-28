import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function LendedBooks({ customerId }) {
    const [lendedBooks, setlendedBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3003/api/customer/mylendedbooks/${customerId}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setlendedBooks(data);
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [])
    const returnBook = (id) => {
        fetch(`http://localhost:3003/api/customer/returnbook`, {
            method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                id: id,
                date: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const copybook = lendedBooks.filter(x => x.id != id);
                alert('הספר הוחזר בהצלחה')
                setlendedBooks(copybook)

            })
            .catch((err) => {
                alert('you er got problem in your details ')
            })

    }
    return <div className="lended-books-frame" id="LendedBooks">
        <h3>ספרים מושאלים</h3>
        <table>
            <tr><th>שם ספר</th><th>תאריך השאלה</th><th></th></tr>
        {
            
            lendedBooks.map(e =>
                <tr key={e.id}>
                    <td>{e.name}</td><td>{format(new Date(e.Date_Lended), "dd-MM-yyyy")}  </td>  <td>
                    <button onClick={() => returnBook(e.id)}>להחזרה</button> 
               </td> </tr>
            )
        }</table>

    </div>
}