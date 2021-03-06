import { useState } from "react"


export const useCounter = (initialState) => {
  
const [state, setState] = useState(initialState)
const increment = () => {
  setState(state + 1);
}

const decrement = () =>
setState(state -1);

const reset = () =>
setState(10);


return{
 state,
 increment,
 decrement,
 reset
};

}
