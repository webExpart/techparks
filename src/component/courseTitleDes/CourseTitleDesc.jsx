import React from 'react'
import './courseTitleDesc.css'

const CourseTitleDesc = (props) => {
  return (
    <div className='course__title__des'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
    </div>
  )
}

export default CourseTitleDesc