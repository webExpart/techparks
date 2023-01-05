import React,{useState} from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
// import { LanguageContaxt } from '../../context/languageContext';

const Login = () => {
  const [IsBangla, setIsBangla] = useState(true);
  // const [angla] = useContext(LanguageContaxt)
  return (
    <div className='form-wrapper'>
      <form className='input-form'>
        <span className="home-btn"><Link to='/'>X</Link></span>
      <h2>{IsBangla ? 'লগইন' : 'Login'}</h2>
        <div className="input-group">
          <label htmlFor="gmail">{IsBangla ? 'আপনার জিমেইল' : 'Enter Your Gmail'}</label>
          <input type="gmail" placeholder='Enter Your Gmail' required />
        </div>
        <div className="input-group">
          <label htmlFor="password">{IsBangla ? 'আপনার পাসওয়ার্ড দিন' : 'Enter Your Password'}</label>
          <input type="password" placeholder={IsBangla ? 'আপনার পাসওয়ার্ড দিন' : 'Enter Your Password'} required />
        </div>
        <button>{IsBangla ? 'লগইন করুন' : 'Login Now'}</button>
          <span>{IsBangla ? 'আপনার অ্যাকাউন্ট নেই ?' : 'Don"t have any Account?'} <Link to='/register'>{IsBangla ? 'রেজিস্টার করুন' : 'Register Now'}</Link></span>
      </form>
    </div>
  )
}

export default Login;