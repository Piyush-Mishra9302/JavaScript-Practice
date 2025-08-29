import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChange } from './colorSlice';

const App = () => {
  const bgColor = useSelector(state => state.myColor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome !</h1>
      <button onClick={() => dispatch(colorChange())}>Click Here</button>
      <div 
        style={{
          width: "500px", 
          height: "200px", 
          backgroundColor: bgColor
        }}
      >
      </div>
    </>
  )
}

export default App

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';

// const App = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Welcome to My Redux App</h1>
//       <h2>Count: {count}</h2>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default App;
