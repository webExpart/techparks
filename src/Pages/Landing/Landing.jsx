import React from 'react'
import CourseCategory from '../../component/courseCategory/CourseCategory';
import Hero from '../../component/hero/Hero';
import LiveCourseWrapper from '../../component/liveCourse/LiveCourseWrapper';
import RecodedCourse from '../../component/recodedCourse/RecodedCourse';
import UpcomingCourse from '../../component/upcomingCourse/UpcomingCourse';
import './landingPage.css'


const Landing = () =>{
    return(
        <div className='landing-page-body'>
          <Hero/>
          <CourseCategory/>
          <LiveCourseWrapper/>
          <RecodedCourse/>
          <UpcomingCourse/>
        </div>
    )
}

export default Landing;