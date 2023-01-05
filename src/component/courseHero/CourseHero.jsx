import React from 'react'
import './courseHero.css';

const CourseHero = (props) => {
  return (
    <div className='courseHero'>
        <video src={`../../${props.heroVideos}`} controls></video>
    </div>
  )
}

export default CourseHero