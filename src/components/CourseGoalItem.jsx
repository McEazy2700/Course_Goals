import React from 'react'
import './CourseGoalItem.scss';

const CourseGoalItem = (props) => {
  return (
    <div className='courseGoal__item'>
        <p>{props.goal}</p>
    </div>
  )
}

export default CourseGoalItem