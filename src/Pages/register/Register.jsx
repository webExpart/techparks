import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [IsBangla, setIsBangla] = useState(true);



  return (
    <div className='form-wrapper'>
      {/* <div className="anim-wrapper">
        <span className='animation1'></span>
        <span className='animation2'></span>
        <span className='animation3'></span>
        <span className='animation4'></span>
        <span className='animation5'></span>
        <span className='animation6'></span>
        <span className='animation7'></span>
        <span className='animation8'></span>
      </div> */}
    
      <form className='input-form'>
        <span className="home-btn"><Link to='/'>X</Link></span>
      <h2>{IsBangla ? 'রেজিস্টার' : 'Register'}</h2>
      <div className="input-group">
          <label htmlFor="UserName">{IsBangla ? 'আপনার নাম' : 'Enter Your User Name'}</label>
          <input type="text" placeholder='Enter Your User Name' required />
        </div>
        <div className="input-group">
          <label htmlFor="gmail">{IsBangla ? 'আপনার জিমেইল' : 'Enter Your Gmail'}</label>
          <input type="gmail" placeholder='Enter Your Gmail' required />
        </div>
        <div className="input-group">
          <label htmlFor="password">{IsBangla ? 'আপনার পাসওয়ার্ড দিন' : 'Enter Your Password'}</label>
          <input type="password" placeholder='Enter Your Password' required />
        </div>
        <div className="input-group">
          <label htmlFor="password">{IsBangla ? 'আপনার কনফার্ম পাসওয়ার্ড দিন' : 'Enter Your confiremd Password'}</label>
          <input type="password" placeholder='Enter Your confiremd Password' required />
        </div>
        <button>{IsBangla ? 'রেজিস্টার করুন' : 'Register Now'}</button>
          <span>{IsBangla ? 'আপনার অ্যাকাউন্ট আছে ?' : 'Don"t have any Account?'} <Link to='/login'>{IsBangla ? 'লগইন করুন' : 'Login Now'}</Link></span>
      </form>
    </div>
  )
}

export default Register