import React, { useState } from 'react'
import { produce } from 'immer';


const initialState = [
    {
        name:'House',
        rooms:[
            {
                name:'room1',
                text:'Room1'
            }
        ]
    },
    {
        name:'car',
        text:'i20'
    }
]



function RoomName(props) {
    const {
        data,
        onChange
    } = props;
  return (
    <div className='my-5'>
        <div className="font-bold">Update Room name</div>
        <input className='border-[4px]' value={data.text} onChange={onChange}/>
        </div>
  )
}

function CarName(props) {

    const {
        data,
        onChange
    } = props;

    return (
      <div className='my-5'>
        <div className="font-bold">Update Car name</div>
        <input className='border-[4px]' value={data.text} onChange={onChange}/>


        </div>
    )
  }



function test() {

    const [info, setInfo]=useState(initialState);

    const onRoomChange = (evt) =>{
        setInfo((state)=>{

                const newState =produce(state, (draft)=>{
                    draft[0].rooms[0].text = evt.target.value
                })

            // shallow copy>>>
            // const newState = [
            //     {
            //         ...state[0],
            //         rooms:[
            //             {
            //                 ...state[0].rooms[0],
            //                 text:evt.target.value
            //             }
            //         ]
            //     },
            //     state[1]
            
            // ];

            // Deep copy>><
            // const newState = JSON.parse(JSON.stringify(state))
            // newState[0].rooms[0].text = evt.target.value
            return newState
        })
    }

    const onCarChange = (evt) => {
        setInfo((state) => {
            
            const newState =produce(state, (draft)=>{
                draft[1].text = evt.target.value
            })
            // const newState = [
            //     state[0],
            //     {
            //         ...state[1],
            //         text:evt.target.value
            //     }
            // ];
             // Deep copy>><
            //  const newState = JSON.parse(JSON.stringify(state))
            //  newState[1].text = evt.target.value
            return newState
        })
    }
console.log(info);
  return (
    <div className='flex justify-center items-center mt-[50px]'>
        <div className="border p-4 rounded justify-center">
        <strong className='my-3 text-center'>Immer-With Shallow&Deep copy</strong>
        <RoomName className="mb-5 " data={info[0].rooms[0]} onChange={onRoomChange}/>
        <CarName className="mb-4" data={info[1]} onChange={onCarChange} />
        </div>
     

    </div>
  )
}

export default test