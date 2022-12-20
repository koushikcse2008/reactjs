import React from 'react'
import {connect} from 'react-redux'
import {incriment,decriment} from '../redux/action/CouterAction'

const Counter = ({incriment,decriment,count}) => {
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={()=>incriment()}>Incriment</button>
      <button onClick={()=>decriment()}>Decriment</button>
    </div>
  )
}
const mapStateToProps=(state)=>({
    count:state.CounterReducer.count
})
export default connect(mapStateToProps,{incriment,decriment})(Counter) 
