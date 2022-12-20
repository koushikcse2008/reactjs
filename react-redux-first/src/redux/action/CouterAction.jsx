import { INCREMENT, DECREMENT } from '../reducer/reducerType'

export const incriment=()=>{
    return{
        type:INCREMENT
    }
}

export const decriment=()=>{
    return {
        type:DECREMENT
    }
}