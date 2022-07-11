import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decrementAction, incrementAction, incByValueAction } from '../redux/actions/actionCreators'

export default function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleIncreament = () => {
        dispatch(incrementAction())
    }
    const handleDecreament = () => {
        dispatch(decrementAction())
    }
    const handleIncByValue = (value) => {
        dispatch(incByValueAction(value))
    }

    return (
        <div className='my-counter'>
        <h1>Counter App</h1>
            <p>{count}</p>
            <div className='btns'>
                <button onClick={handleIncreament}>Increase</button>
                <button onClick={handleDecreament}>Decrease</button>
                <button onClick={() => handleIncByValue(10)}>Add 10</button>
            </div>
        </div>
    )
}
