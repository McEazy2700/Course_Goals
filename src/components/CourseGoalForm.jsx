import React from 'react'
import { useState } from 'react'
import './CourseGoalForm.scss';
import styled from 'styled-components';

const FormControl = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

& label {
    font-weight: bold;
    font-size: 1.1rem;
    color: ${props => props.invalid ? 'red': 'black'}
}

& input {
    padding: 0.5rem 1rem;
    border-radius: 7px;
    border: 1px solid ${props => props.invalid ? 'red': 'black'};
    outline: none;
    font-size: 1.05rem;
    color: ${props => props.invalid ? 'red' : 'black'};
    background: ${props => props.invalid ? 'rgb(255, 203, 203)' : 'transparent'};
    transition: all 0.2s ease;
}

& input:active, 
& input:focus {
    outline: 2px solid rgb(245, 54, 187);
    border-color: transparent;
}

`

const CourseGoalForm = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [isValid, setIsValid] = useState(true)


    const formInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
        setIsValid(true)
    }
        setEnteredGoal(event.target.value)
    }

    const goalSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredGoal.trim().length === 0) {
            setIsValid(false)
            return;
        }
        const newGoal = {goal:enteredGoal, id:Math.random().toString()}
        props.onAddGoal(newGoal)
        setEnteredGoal('');
    }

    let placeholder
    if (!isValid) {
        placeholder = 'You cannot add empty goal!';
    } else {
        placeholder = 'Enter your Goal'
    }
  return (
    <div className='courseGoal__form'>
        <form className='courseGoal__form-control' onSubmit={goalSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label htmlFor='goal_input'>Course Goal</label>
                <input placeholder={placeholder} required value={enteredGoal} onChange={formInputChangeHandler} type="text" id='goal_input'/>
            </FormControl>
            <div className="courseGoal__form-control_cta">
                <button type="submit">Add Goal</button>
            </div>
        </form>
    </div>
  )
}

export default CourseGoalForm