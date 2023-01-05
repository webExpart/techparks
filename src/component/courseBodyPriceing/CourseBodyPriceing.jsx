import React from 'react'
import { Link } from 'react-router-dom'
import './courseBodyPriceing.css'
import { TbCurrencyTaka } from 'react-icons/tb';

const CourseBodyPriceing = (props) => {
  return (
    <div className='course__body__priceing'>
        <div className="course__features__items item1">
            <span><TbCurrencyTaka/> {props.courseFee}</span>
            <p><TbCurrencyTaka/>TK. 12000</p>
        </div>
        <div className="course__features__items item2">
          <span>{props.courseDuration}</span>
            <p><strike>Total Hours</strike></p>
        </div>
        <div className="course__features__items item2">
            <span>{props.courseLavel}</span>
            <p>Course Level</p>
        </div>
        <div className="course__features__items">
            <Link className='pulse' to={`/enroll/${props.id}`}>Enroll Now</Link>
        </div>
    </div>
  )
}

export default CourseBodyPriceing