import React, {useContext} from 'react'
import {LanguageContaxt} from '../../context/LanguageContext'
import CourseCard from '../courseCard/CourseCard';
import { UpcomingCourseData } from '../../../data/allCourse';


const UpcomingCourse = () => {
    const {IsBangla} = useContext(LanguageContaxt);
  return (
    <div className='liveCourseWrapper'>
        <h1>{IsBangla ? 'আপকামিং কোর্স' : 'Upcoming Course'}</h1>
        <div className="live-course-items">
            {
                UpcomingCourseData.map((item)=>(
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

export default UpcomingCourse