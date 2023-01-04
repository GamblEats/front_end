// Here is an example of a reusable useState hook
// that allows you to specify the names of the state variables:

import { useState } from 'react';

function useState(initialState, stateName, setStateName) {
    const [state, setState] = useState(initialState);

    const handleChange = (name, value) => {
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return [state, handleChange];
}

export default useState;

// You can use this hook in your React components like this:

// import useState from './useState';

// function MyComponent() {
//   const [myState, setMyState] = useState({
//     value: 'initial value'
//   }, 'myState', 'setMyState');

//   const handleChange = (event) => {
//     setMyState('value', event.target.value);
//   };

//   return (
//     <input type="text" value={myState.value} onChange={handleChange} />
//   );
// }
