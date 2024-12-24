import { useState } from "react"

export default function Counter() {
  const [num, setNum] = useState(1)

  const Decrement = () => {
    num > 1 ? setNum(num - 1) : alert("0 not allowed")

  }
  const Increment = () => {
    num < 10 ? setNum(num + 1) : alert("10 greater is not allowed")
  }
  return (
    <div>
      <button className="btn" onClick={Decrement}>Decrement</button>
      <input className="mx-3 border rounded-md inline-block py-2 px-5" type="number" name=""
        id="" value={num}/>
      <button className="btn" onClick={Increment}>Increment</button>
    </div>
  )
}
