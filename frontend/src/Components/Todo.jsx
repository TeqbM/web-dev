import React, { useEffect, useReducer, useState } from 'react'


const initialState = [
     {
          id: Date.now(),
          name: 'Todos',
          completed: false,
     }
];

const reducer = (state, action) => {

     switch (action.type) {
          case "ADD":
               return [...state, action.payload];
          case "toggle":
               return state.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
               );
          case "DELETE":
               return state.filter(td => td.id !== action.payload);
          default:
               throw new Error(`Unknown action: ${action.type}`);
     }
}
export default function Todo() {

     const [state, dispatch] = useReducer(reducer, initialState);
     const [todol, setTodol] = useState('');


     const addTodo = () => {
          const todo = {
               id: Date.now(),
               name: todol,
               completed: false,
          }
          if (todol) {
               dispatch({ type: "ADD", payload: todo });
               setTodol('')
          }
     }

     const deleteItm = (id) => {
          dispatch({ type: "DELETE", payload: id });
     }

     return (
          <>
               <div className='mb-7'>
                    <input type="text" className='inp' value={todol} onChange={e => setTodol(e.target.value)} placeholder='Enter name' />
                    <button className='btn ml-2' onClick={addTodo}>add list</button>
               </div>

               <ul className='grid grid-cols-5 gap-5'>

                    {state ? state.map(itm =>
                         <li className='card' key={itm.id}>
                              <div className="flex justify-between">
                                   <span style={{ textDecoration: itm.completed ? "line-through" : "none" }}
                                        onClick={() => dispatch({ type: "toggle", payload: itm.id })}
                                   >{itm.name}</span>
                                   <button className='delete-btn' onClick={() => deleteItm(itm.id)}>delete</button>
                              </div>
                         </li>

                    ) :
                         (
                              <div className='text-center'>
                                   <span className='animate-spin	inline-block border-4 rounded-full border-slate-300 spin- h-10 w-10 border-t-sky-600'></span>
                                   <br />
                                   Loading...
                              </div>
                         )

                    }
               </ul>
          </>
     )
}
