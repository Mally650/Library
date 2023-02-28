import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate, Link } from 'react-router-dom';


const schema = yup.object({
  password: yup.string().required(),
  id: yup.number().positive().integer().required(),
}).required();

export default function Login({ logedin, type }) {
  console.log(type)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data)
    await fetch(`http://localhost:3003/api/customer/login`, {
      method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        id: data.id,
        password: data.password,
        type: type
      })
    })
      .then(response => response.json())
      .then(data => {
        if (type != 3) if (data[0].id_Type == 1) { logedin(data[0]); alert('שלום ' + data[0].name + "אתה לאזור מנהל"); navigate('/manager') }
        else if (data[0].id_Type == 2) { logedin(data[0]); alert('שלום ' + data[0].name + "אתה לאזור עובד"); navigate('/employee') }
        else alert('פרטי עובד שגויים')
        else if (data[0].id_Type == 3) {
          logedin(data[0]);
          navigate('/customer')
        } else
          alert('נא הרשם, -פרטי לקוח שגויים')
      })
      .catch((err) => {
        alert('failed to connect to the server ')
      })

  };

  return (
    <div>
      <div className='header-section'>
        <img className='logo-image' src='../images/small-logo.png'></img>
        <div className="back-icon" title="back" onClick={() => navigate("/")}></div>
      </div>



      <form onSubmit={handleSubmit(onSubmit)} className="enter-form">
        {(type == 3) ? <h3>כניסת לקוח</h3> : <h3>כניסת עובד</h3>}
        <input  {...register("id")} placeholder="id" />
        <p className='error-label'>{errors.id?.message}</p>

        <input {...register("password")} type="password" placeholder="Password" />
        <p className='error-label'>{errors.password?.message}</p>

        <input type="submit" id="toSubmitEnter" />
        <Link to="/signin/login">Back</Link>

        {(type === 3) ?
          <Link to="/signin/customer">לקוח חדש? הרשם</Link> : ""
        }
      </form>

    </div>

  );
}