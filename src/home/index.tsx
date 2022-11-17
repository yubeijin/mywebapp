import React, {useState} from 'react';
interface props {
  data: String
}
function App(props: props) {
  
  return (
    <div className="App">
      {props.data}
    </div>
  );
}

export default App;
