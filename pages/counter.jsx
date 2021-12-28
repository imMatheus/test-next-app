import React, { useState } from 'react'

export async function getStaticProps(context) {
    return {
        props: {
            shee: ['adam', 'sheep', 'pika', 'pop'],
        },
    }
}

export default function Counter({ shee }) {
    const [count, setCount] = useState(69)
    return (
        <div>
            hej
            <h2>{count}</h2>
            {shee.map((she) => (
                <h5 key={she}>{she}</h5>
            ))}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
