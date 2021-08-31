import React from 'react'
import Counter from '../components/counter'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../modules/counter'

function CounterContainer() {
    const number = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increase())
    }

    const onDecrease = () => {
        dispatch(decrease())
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onIncrease}></Counter>
    )
}

export default CounterContainer
