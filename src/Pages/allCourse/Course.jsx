import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { LiveCourse, recodedCourse, UpcomingCourseData } from '../../../data/allCourse';
import AllCourseHero from '../../component/allCourseHero/AllCourseHero';
const Course = () => {
  return (
    <div className='all__course__wrapper'>
        <AllCourseHero/>
    </div>
  )
}

export default Course