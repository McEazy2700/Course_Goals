import React from 'react'
import { useState } from 'react'
import './CourseGoalForm.scss';

const CourseGoalForm = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const formInputChangeHandler = (event) => {
        setEnteredGoal(event.target.value)
    }

    const goalSubmitHandler = (event) => {
        event.preventDefault()
        const newGoal = {goal:enteredGoal, id:Math.random().toString()}
        props.onAddGoal(newGoal)
        setEnteredGoal('');
    }
  return (
    <div className='courseGoal__form'>
        <form className='courseGoal__form-control' onSubmit={goalSubmitHandler}>
            <div className="courseGoal__form-control_input">
                <label htmlFor='goal_input'>Course Goal</label>
                <input value={enteredGoal} onChange={formInputChangeHandler} type="text" id='goal_input'/>
            </div>
            <div className="courseGoal__form-control_cta">
                <button type="submit">Add Goal</button>
            </div>
        </form>
    </div>
  )
}

export default CourseGoalForm