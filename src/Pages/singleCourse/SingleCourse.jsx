import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './singleCourse.css';
import CourseHero from '../../component/courseHero/CourseHero'
import {LiveCourse, recodedCourse, UpcomingCourseData} from '../../../data/allCourse';
import CourseTitleDesc from '../../component/courseTitleDes/CourseTitleDesc';
import CourseBodyPriceing from '../../component/courseBodyPriceing/CourseBodyPriceing';
import CourseMaterials from '../../component/courseMaterials/CourseMaterials';
import CourseCurriculum from '../../component/courseCurriculum/CourseCurriculum';

const SingleCourse = () => {
  let courseid = useParams();
  let courseItem= [];
  const [course, setCourse] = useState([]);
  // console.log(status.status);
  if(courseid.status == 'Live'){
    const outPut = LiveCourse.filter((x)=> x.id == courseid.id);
    courseItem.push(outPut[0]);
  }
  
  if(courseid.status == 'Recoded'){
    const outPut = recodedCourse.filter((x)=> x.id == courseid.id);
    courseItem.push(outPut[0]);

  }
  if(courseid.status == 'Upcoming'){
    const outPut = UpcomingCourseData.filter((x)=> x.id == courseid.id);
    courseItem.push(outPut[0]);

  }
  const {id,heroVideos, title, courseDescription, courseDuration, courseLavel,courseMaterials, ImageUrl,courseFee, curriulam,teacherName,teacherPicture, teacherDescription} = courseItem[0];


  return (
    <div className='single__Course__Wrapper'>
         <CourseTitleDesc
           title = {title}
           desc = {courseDescription}
           key={id}/>
        <CourseHero heroVideos = {heroVideos} key={id + 1}/>
        <CourseBodyPriceing
        courseDuration= {courseDuration}
        courseLavel = {courseLavel}
        courseFee = {courseFee}
        id = {id}
        key = {id + 3}
        />
        <CourseMaterials courseMaterials = {courseMaterials} desc = {courseDescription} key={id + 5}/>
        <CourseCurriculum curriulam = {curriulam} key={id + 6}/>
        
    </div>
  )
}

export default SingleCourse