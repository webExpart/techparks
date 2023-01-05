import React, {useContext} from 'react'
import './liveCourseWrapper.css'
import {LanguageContaxt} from '../../context/LanguageContext'
import CourseCard from '../courseCard/CourseCard';
import { LiveCourse } from '../../../data/allCourse';


const LiveCourseWrapper = () => {
    const {IsBangla} = useContext(LanguageContaxt);
  return (
    <div className='liveCourseWrapper'>
        <h1>{IsBangla ? 'লাইভ কোর্স' : 'Live Course'}</h1>
        <div className="live-course-items">
            {
                LiveCourse.map((item)=>(
                    <CourseCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    Image={item.ImageUrl}
                    status={item.status}
                    courseFee={item.courseFee}
                    admissionLink={item.admissionLink}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LiveCourseWrapper