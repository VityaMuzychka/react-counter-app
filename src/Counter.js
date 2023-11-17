import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count * 0)}>Set To 0</button>
        </div>
    )
}