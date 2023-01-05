import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
import {robot, socal01,socal02, android, css3, html5, js, model,robot02,robot03, python} from '../../assets/index'
import { LanguageContaxt } from '../../context/LanguageContext'

const Hero = () => {
  const {IsBangla} = useContext(LanguageContaxt);
  return (
    <div className='hero-wrapper'>
      <div className="fetu-circle">
              <span className='fetu-one pulse'>
                <img src={html5} alt="html5" />
              </span>
              <span className='fetu-two pulse'>
              <img src={css3} alt="html5" />
              </span>
              <span className='fetu-three pulse'>
              <img src={js} alt="html5" />
              </span>
              <span className='fetu-four pulse'>
              <img src={python} alt="html5" />
              </span>
              <span className='fetu-five pulse'>
              <img src={android} alt="html5" />
              </span>
        </div>
        <div className="hero-left shake">
          <h1 className="hero-headding">
          {IsBangla ? `নিজের মত শিখুন,আত্মবিশ্বাস গড়ুন!` : 'learn on your own,Build confidence!'}
          
          </h1>
          <h4 className="hero-subheadding">
          {IsBangla ? `পছন্দের ক্যারিয়ার ট্র্যাক প্রোগ্রামে ভর্তি হয়ে বর্তমান সময়ের সবচেয়ে গুরুত্বপুর্ণ দক্ষতাগুলো অর্জন করুন।` : 'Current enrollment in the preferred career track program Acquire the most important skills.'}
         
          </h4>
          <Link to="/Course" className='pulse'>{IsBangla ? 'কোর্সগুলো দেখুন' : 'View courses'}</Link>
        </div>
        <div className="hero-right">
          <div className="hero-right-fetures">
              <img className='socail-image shake' src={socal02} alt="Fetu Circle" />
              <img className='robot-image' src={robot03} alt="Fetu Circle" />
          </div>
        </div>
    </div>
  )
}

export default Hero