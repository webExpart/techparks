import React from 'react'
import './courseCurriculam.css'

const CourseCurriculum = (props) => {
    return (
        <div className='course__curriculum__wrapper'>
            <h1 className="course__curriculum__main__header">
                Course Curriculum
            </h1>
            <div className="course__curriculum__items">
                {
                    props.curriulam.map((items) => (
                        <div className="course__curriculum__item" key={items.id}>
                            <h3 className="course__curriculum__title">
                                {items.title}
                            </h3>
                            <div className="course__class__features__items">
                                <div className="course__class__features__item">
                                    <span>Topic</span>
                                    <span>{items.topic}</span>
                                </div>
                                <div className="course__class__features__item">
                                    <span>Lession</span>
                                    <span>{items.lession}</span>
                                </div>
                                <div className="course__class__features__item">
                                    <span>Class Durations</span>
                                    <span>{items.classTime}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default CourseCurriculum