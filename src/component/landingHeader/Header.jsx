import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { people01 } from '../../assets/index'
import { LanguageContaxt } from '../../context/LanguageContext';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import '../component.css';


const Header = () => {
  const {IsBangla, languageToggle} = useContext(LanguageContaxt)
  const [isUserLogged, setUserLogged] = useState(null);
  const [isIconToggle, setIconToggle] = useState(null);


  return (
    <>
    <div className='header'>
      <div className="site-logo">
        Tech
        <span className=''>Parks</span>
        .<span className=''>org</span>
      </div>
      <nav className={isIconToggle ? 'nav-menu Isactive' : 'nav-menu active'}>
        <Link to='/' className='nav-item'>{IsBangla ? 'হোম' : 'Home'}</Link>
        <div className="course">
        {IsBangla ? 'কোর্স' : 'Course'}
          <div className="course-item">
            <Link to='/Course/allCourse' className='nav-item'>{IsBangla ? 'সব কোর্স' : 'All Course'}</Link>
            <Link to='/Course/live' className='nav-item'>{IsBangla ? 'লাইভ কোর্স' : 'Live Course'}</Link>
            <Link to='/Course/recoded' className='nav-item'>{IsBangla ? 'রের্কডেড কোর্স' : 'Recoded Courses'}</Link>
            <Link to='/Course/upcomming' className='nav-item'>{IsBangla ? 'আপকামিং কোর্স' : 'Upcomming Courses'}</Link>
          </div>
        </div>
        <Link to='/seminer' className='nav-item'>{IsBangla ? 'সেমিনার' : 'Next Seminer'}</Link>
        <Link to='/teachers' className='nav-item'>{IsBangla ? 'শিক্ষক' : 'Teachers'}</Link>
        <Link to='/studentProject' className='nav-item'>{IsBangla ? 'শিক্ষাথীদের কাজ' : 'Student Projects'}</Link>
        <Link to='/devTools' className='nav-item'>{IsBangla ? 'ডেভ টুল' : 'Dev Tools'}</Link>
        {/* <Link to='/product' className='nav-item'>{IsBangla ? 'প্রডাক্টস' : 'Product'}</Link> */}
      </nav>
      <div className="header-right">
        {
          isUserLogged ?
            <div>
              <Link to="/dashboard" className='dash-btn'>
                {IsBangla ? 'ডাশবোর্ড' : 'Dashboard'}
              </Link>
              <img className='UserProfile' src={people01} alt="profile" />
            </div> :
            <div className="IsNotLogin">
              <Link to="/login" className='log-btn'>
                {IsBangla ? 'লগইন' : 'Login'}
              </Link>||
              <Link to="/register" className='sign-btn'>
                {IsBangla ? 'রেজিস্টার' : 'Register'}
              </Link>
            </div>
        }

        <div className='lang-btn'>
          <button onClick={languageToggle}>
            {IsBangla ? 'ENG' : 'বাংলা'}
          </button>
        </div>
        <div className='res-btn' onClick={()=>setIconToggle(prev => !prev)}>
          <span>{isIconToggle ? <GrClose/> : <HiOutlineMenuAlt3/>}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header