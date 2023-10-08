import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function lebel() {

    const dispatch = useDispatch()

    const handleShowLabel = (evt)=> {
        const checkboxvalue = evt.target.checked
        dispatch({
            type:"show-lebal",
            payload:checkboxvalue
        })
    }

    const val = useSelector((state) => state.showLebal)

  return (
    <>
    <div className="">
    <input  type="checkbox" checked={val} onChange={handleShowLabel}
     className='border-[2px]  m-auto' />show Label

    </div>
        
    </>
  )
}

export default lebel