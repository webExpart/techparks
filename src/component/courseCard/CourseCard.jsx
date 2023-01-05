import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContaxt } from '../../context/LanguageContext'
import { TbCurrencyTaka } from 'react-icons/tb';

const CourseCard = (props) => {
    const {IsBangla} = useContext(LanguageContaxt);
    return (
        <div className="live-course-item">
            <div className="course-image">
                <img src={props.Image} alt="" />
            </div>
            <div className="course-info">
                <h2><span className='live'>{props.status}</span> {props.title}</h2>
                <span><TbCurrencyTaka />{props.courseFee}</span>
            </div>
            <Link to={`single/${props.status}/${props.id}`} className='pulse'>{IsBangla ? 'কোর্সে ভর্তি হোন' : 'Addmission Now'}</Link>
        </div>
    )
}

export default CourseCard