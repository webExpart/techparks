import React, {useContext} from 'react'
import {LanguageContaxt} from '../../context/LanguageContext'
import CourseCard from '../courseCard/CourseCard';
import { recodedCourse } from '../../../data/allCourse';


const RecodedCourse = () => {
    const {IsBangla} = useContext(LanguageContaxt);
  return (
    <div className='liveCourseWrapper'>
        <h1>{IsBangla ? 'রের্কডেড কোর্স' : 'Recoded Course'}</h1>
        <div className="live-course-items">
            {
                recodedCourse.map((item)=>(
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

export default RecodedCourse