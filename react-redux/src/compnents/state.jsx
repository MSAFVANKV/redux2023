import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function State() {

  const value = useSelector((state) =>{
    return state.value
  });

  const dispatch = useDispatch()



  return (
    <>
    <h3 className='text-center font-bold my-[29px]'>REDUX In Functional Components</h3>
      <div className="flex justify-center items-center">
        <button className='w-9 h-9 bg-slate-600 text-center flex  justify-center items-center' 
         onClick={()=>{
          dispatch({
            type:"increment"
          })
         }}>+</button>
      
      <div className="">
       
        {/*  */}
        <div className=" justify-center items-center w-[100px] border my-7 bg-black rounded-2xl flex h-[100px] " >
          <span className="text-white" >{value}</span>

        </div>

        {/*  */}

      </div>
      {/*  */}
      <div className="  justify-center items-center">
        <button className='w-9 h-9 bg-slate-600 text-center flex  justify-center items-center font-bold'
         onClick={()=>{
          dispatch({
            type:"decrement"
          })
         }} >-</button>
      </div>
      </div>
    </>
  )
}

export default State