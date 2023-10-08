import React from 'react'
import { connect } from 'react-redux'

function settings(props) {

//   const {
//     value,
//     dispatch
//   } = props

            const {
                value,
                myIncrement,
                myDecrement
            } = props

    {console.log(props)}
  return (
    <>
    
<h3 className='text-center font-bold my-[29px]'>REDUX In Class Components</h3>
    <div className="flex justify-center items-center">
        
    <button className='w-9 h-9 bg-slate-600 text-center flex  justify-center items-center' 
     onClick={()=>{
        myIncrement()
     
     }}>+</button>
  
  <div className="">
   
    {/*  */}
    <div className=" justify-center items-center w-[100px] border my-7 bg-[green] rounded-2xl flex h-[100px] " >
      <span className="text-white" >{value}</span>

    </div>

    {/*  */}

  </div>
  {/*  */}
  <div className="  justify-center items-center">
    <button className='w-9 h-9 bg-slate-600 text-center flex  justify-center items-center font-bold'
     onClick={()=>{
        myDecrement()
     }} >-</button>
  </div>
  </div>
  </>
  )

}
const mapStateToProps = (state) => {
    return {
        value: state.value,
    }
}

const myDispatchToProps = (dispatch) =>{
    return {
        myIncrement: () => {
            dispatch({
                type:"increment"
              })
        },
        myDecrement:()=> {
            dispatch({
                type:"decrement"
            })
        }
    }
}

export default connect(mapStateToProps, myDispatchToProps)(settings)