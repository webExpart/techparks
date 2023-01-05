import React from 'react'
import './courseCategory.css'
import { MdOutlineDesignServices } from 'react-icons/md';
import { SiXdadevelopers } from 'react-icons/si';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { AiFillDatabase } from 'react-icons/ai';
import { useContext } from 'react'
import {LanguageContaxt} from '../../context/LanguageContext'

const CourseCategory = () => {
    const {IsBangla} = useContext(LanguageContaxt);
  return (
    <div className='Top-Category-wrapper'>
        <h2 className='Top-Category-title'>{IsBangla ? 'শীর্ষ বিভাগ' : 'Top Category'}</h2>
        <div className='Top-Category-list'>
            <div className='Top-Category-list-item shake'>
                <MdOutlineDesignServices/>
                {IsBangla ? 'আর্ট & ডিজাইন' : 'Art & Design'}
                
            </div>
            <div className='Top-Category-list-item pulse'>
                <SiXdadevelopers/>
                {IsBangla ? 'ওয়েব ডেভেলপমেন্ট' : ' Web Development'}
               
            </div>
            <div className='Top-Category-list-item shake'>
                <SiXdadevelopers/>
                {IsBangla ? 'ওয়েব ডিজাইন' : 'Web Design'}
            </div>
            <div className='Top-Category-list-item pulse'>
                <HiOutlineSpeakerphone/>
                {IsBangla ? 'ডিজিটাল মার্কেটিং' : 'Digital Marketing'}
                
            </div>
            <div className='Top-Category-list-item shake'>
                <AiFillDatabase/>
                {IsBangla ? 'ডেটা সায়েন্স' : 'Data Science'}
                
            </div>
        </div>
    </div>
  )
}

export default CourseCategory