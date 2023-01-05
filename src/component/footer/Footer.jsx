import React, { useContext } from 'react'
import './footer.css';
import { LanguageContaxt } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { BiMailSend } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
    const {IsBangla} = useContext(LanguageContaxt);
  return (
    <>
    <div className='footer-wrapper'>
        <div className="footer-left">
            <h1>{IsBangla ? 'আমাদের সম্পর্কে' : 'About Us'}</h1>
            <p>
                {IsBangla ? 'TechParks.org একটি অনলাইন প্রশিক্ষন সেন্টার। আপনি আপনার পছন্দের কোর্সটি TechParks.org থেকে খুব সহজে এবং দক্ষ প্রশিক্ষক এর সহযোগিতায় প্রশিক্ষন নিতে পারবেন।' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi odit quos suscipit assumenda voluptatum mollitia fuga exercitationem sunt est quidem impedit, culpa, obcaecati quam deserunt aliquam? Blanditiis, eveniet laudantium. Ea.' }
            </p>
        </div>
        <div className="footer-center">
            <h1>{IsBangla ? 'প্রয়োজনিয় লিঙ্ক' : 'Use Full Links'}</h1>
            <div className="nav-link">
            <Link to='/' className='nav-item'>{IsBangla ? 'হোম' : 'Home'}</Link>
            <Link to='/liveCourse' className='nav-item'>{IsBangla ? 'লাইভ কোর্স' : 'Live Course'}</Link>
            <Link to='/Course' className='nav-item'>{IsBangla ? 'সব কোর্স' : 'All Course'}</Link>
            <Link to='/freeCourse' className='nav-item'>{IsBangla ? 'ফ্রি কোর্স' : 'Free Courses'}</Link>
            <Link to='/seminer' className='nav-item'>{IsBangla ? 'সেমিনার' : 'Next Seminer'}</Link>
            <Link to='/teachers' className='nav-item'>{IsBangla ? 'শিক্ষক' : 'Teachers'}</Link>
            <Link to='/studentProject' className='nav-item'>{IsBangla ? 'শিক্ষাথীদের কাজ' : 'Student Projects'}</Link>
            <Link to='/devTools' className='nav-item'>{IsBangla ? 'ডেভ টুল' : 'Dev Tools'}</Link>
            </div>
        </div>
        <div className="footer-right">
            <h1>{IsBangla ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}</h1>
            <div className="contact-items">
                <span><BsFillTelephoneFill/><a href="tel:+8801306184658">+8801306184658</a></span>
                <span><BiMailSend/><a href="support@techparks.org">support@techparks.org</a></span>
            </div>
        </div>
    </div>
    <footer>
        <span>© All rights reserved.</span>
    </footer>
    </>
  )
}

export default Footer