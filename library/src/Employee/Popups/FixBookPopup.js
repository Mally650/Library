import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function FixBookPopup({ book_id, finish }) {
    const selectedRadio = (e) => {
        fetch(`http://localhost:3003/api/employee/tasks`, {
            method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                id: book_id,
                status: e.currentTarget.value,
            })
        })
            .then(response => response.json())
            .then(data => {
                finish()
            })
            .catch((err) => {
                alert('failed to connect to the server ')
            })
    };

    return (
        <Popup trigger={<button type='button'>עדכון מצב ספר</button>} position="right center">
            {close => (
                <div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <label>בחירת מצב הספר</label> <br />
                    <input type="radio" onChange={selectedRadio} id="1" name="status" value="1" /><label>חדש</label> <br />
                    <input type="radio" onChange={selectedRadio} id="2" name="status" value="2" /><label>במצב טוב</label> <br />
                    <input type="radio" onChange={selectedRadio} id="3" name="status" value="3" /><label>קרוע</label> <br />
                </div>
            )}
        </Popup>)
}