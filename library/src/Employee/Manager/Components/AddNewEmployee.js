import React, { component } from 'react';
import Signin from './Signin';

function NewEmployee() {
    const entry = (u) => { setUserExsists(true); setUser(u) }
    return (
        <div>
            <Signin type={3} signin={(u) => entry(u)} />
        </div>)
}
export default NewEmployee;