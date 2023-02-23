import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Manager from "./Employee/Manager/lobby";
import Open from "./Homepage/homepage";
import Signin from "./Homepage/register/Signin";
import Login from "./Homepage/register/Login";
import Customer from "./Customer/lobby";
import Search from "./Homepage/components/Search";
import Employee from "./Employee/lobby";
import NewBook from "./Employee/Components/Addbook";

function App() {
  const [userExists, setUserExsists] = useState(false);
  const [user, setUser] = useState({});

  const sign = (u) => { entry(); setUser(u) }
  const Logout = () => { setUserExsists(false); setUser(null) }
  const entry = () => { setUserExsists(true); }

  return (
    <div className='App'>
      {(!userExists) ?
        <Routes>
          <Route path='/' element={<Open />} ></Route>
          <Route path='/login/customer' element={<Login type={3} logedin={(u) => sign(u)} />}></Route>
          <Route path="/login/employee" element={<Login type={2} logedin={(u) => sign(u)} />}></Route>
          <Route path="/signin/customer" element={<Signin type={3} signin={(u) => sign(u)} />}></Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
        :
        <Routes>
          <Route path="/customer" element={<Customer customer={user} logout={() => Logout()} />}></Route>
          <Route path="/employee" element={<Employee employee={user} logout={() => Logout()} />}></Route>
          <Route path="/manager" element={<Manager manager={user} logout={() => Logout()} />}></Route>
          <Route path="/customer/search" element={<Search customerId={user.id} type={1} />}></Route>
          <Route path="/employee/addBook" element={<NewBook />}></Route>
          <Route path="/employee/search" element={<Search customerId={user.id} type={2} />}></Route>
          <Route path="/manager/addemployee" element={<Signin type={2} signin={(u) => entry()} />}></Route>
          <Route path="/manager/addBook" element={<NewBook />}></Route>
          <Route path="/manager/search" element={<Search />}></Route>
          <Route path="/login/customer" element={<Navigate to='/customer' />} />
          <Route path="/login/employee" element={user.id_Type === 1 ? <Navigate to='/manager' /> : <Navigate to='/employee' />} />:
          {user.id_Type === 1 ?
            <Route path="/" element={<Navigate to='/manager' />} /> :
            user.id_Type === 2 ? <Route path="/" element={<Navigate to='/employee' />} /> :
              <Route path="/" element={<Navigate to='/customer' />} />
          }
        </Routes>
      }
    </div>
  );
}

export default App;
