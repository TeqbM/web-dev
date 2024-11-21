import React, { useEffect, useReducer, useState } from 'react'


const initialTodos = [];
const reducer = (state,actio) => {
     if(actio.type === 'ADD'){
          return state.name
     }
     throw Error('Unknown action.');
}
export default function Todo() {

     const [state, dispatch] = useReducer(reducer, initialTodos);
     const [todol, setTodol] = useState('');

     useEffect(()=>{
          console.log(todo);
     },[])
     const deleteItm = () =>{
          console.log('delete');
     }

     return (
          <>
               <div className='mb-7'>
                    <input type="text" className='inp' value={todol} onChange={e=> setTodol(e.target.value)} placeholder='Enter name' />
                    <button className='btn ml-2' onClick={()=> dispatch({type:"ADD"})}>add list</button>
               </div>

               <ul className='grid grid-cols-5 gap-5'>
                    <li className='card'>
                         <div className="flex justify-between">
                              <span>list 1 </span>
                              <button className='delete-btn' onClick={deleteItm}>delete</button>     
                         </div>
                    </li>
               </ul>
          </>
     )
}
