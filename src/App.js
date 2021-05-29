import React from 'react';

function App() {
  const afterClick = (e) => {
    // console.log(e);
    console.log(e.target.value);
  };

  return (
    <>
      <p>Some Text</p>
      {/* in JS: document.getElementById('btn').addEventListener('click',
  afterClick); */}
      <button id='btn' onClick={afterClick}>
        Click Me
      </button>
      <select onChange={afterClick}>
        <option>Apple</option>
        <option>Banana</option>
        <option>Orange</option>
      </select>
      <button onMouseEnter={afterClick}>Click Me 2</button>
      <input type='text' onChange={afterClick} />
    </>
  );
}

export default App;
