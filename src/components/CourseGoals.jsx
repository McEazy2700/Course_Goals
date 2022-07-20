import React from 'react'
import { useState } from 'react'
import CourseGoalForm from './CourseGoalForm'
import CourseGoalItem from './CourseGoalItem'
import './CourseGoals.scss';

const CourseGoals = () => {
    let courseGoalsList = []
    const [courseGoals, setCourseGoals] = useState(courseGoalsList)

    const updateCourseGoals = (colectedGoals) => {
        setCourseGoals((prevGoals) => [colectedGoals, ...prevGoals])
    }
  return (
    <div className='courseGoal'>
        <div className='courseGoal__items'>
            <CourseGoalForm onAddGoal={updateCourseGoals}/>
            {courseGoals.length > 0 ? 
            courseGoals.map((goal) => <CourseGoalItem key={goal.id} goal={goal.goal} />)
            : <h3>You Did not enter a Goal Yet.</h3>}
        </div>
    </div>
  )
}

export default CourseGoals