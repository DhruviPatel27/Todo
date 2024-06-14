import React, { useEffect, useState } from 'react'

export default function AlertInput() {
    const [state, setState] = useState('');

    useEffect(() => {
      const userInput = prompt("Enter your name");
      if (userInput !== null) {
        setState(userInput);
      }
    }, []);
  return (
    <div>
      <div>
       <p>{state}</p>
    </div>
    </div>
  )
}
