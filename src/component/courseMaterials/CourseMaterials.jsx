import React from 'react'
import './CourseMaterials.css'
import { AiOutlineCheck } from 'react-icons/ai';

const CourseMaterials = (props) => {
    return (
        <div className='course__materials__wrappers'>
            <h1 className="course__materials__main__header">What You’ll Learn</h1>
            <h4 className="course__materials__main__des">{props.desc}</h4>
            <div className='course__materials__Items_wrapper'>
                <h1 className="course__materials__header">Material Includes</h1>
                <div className="course__materials_items">
                    {
                        props.courseMaterials.map((item) => (
                            <div className="course__materials_item" key={item.id}>
                                <AiOutlineCheck/>
                                <span>{item.Items}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default CourseMaterials