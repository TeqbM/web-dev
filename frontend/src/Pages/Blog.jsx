import React, { useState } from 'react'

export default function Blog() {
     const [num,setNum] = useState(0)
  return (
    <div>
     {num}
     <button className='btn' onClick={()=> setNum(num+1)}>increment</button>
    </div>
  )
}
