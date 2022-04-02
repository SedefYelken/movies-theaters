import { useEffect } from 'react';
import './style.css'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {

  const navigate = useNavigate();

  const { handleSubmit, handleChange,  values, errors}= useFormik({
    initialValues:{
      name:'',
      surname:'',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      surname: Yup.string().required()
    }),
    onSubmit: () => handleFormSubmit(),
  });

  const handleFormSubmit = () => {
    navigate('/movies');
  }

  useEffect(()=>{
    sessionStorage.setItem('username', values.name);
  },[values.name])

  useEffect(()=>{
    sessionStorage.setItem('usersurname', values.surname);
  },[values.surname])

  return (
    <form className='App App-header'  onSubmit={handleSubmit}>
        <img className='img mb2' src={require('../../img/profil.png')}/>
        <div>
          <input className='input-area'  name='name' placeholder='Enter Name' onChange={handleChange} value={values.name} ></input>
        {errors.name ? <div className='error-style'>*{errors.name}</div> : null }
        </div>
        <div> 
          <input className='input-area'  name='surname' placeholder='Enter Surname' onChange={handleChange} value={values.surname}></input>
          {errors.surname ? <div className='error-style'>*{errors.surname}</div> : null }
        </div>
        <div>
          <button type='submit' className='button mt3' name='btnLogin' >Giriş Yap</button>
        </div>
    </form>
  )
}

export default Login;