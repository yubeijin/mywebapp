import React from 'react';
import FirstBox from '@/components/firstBox'
import SecondBox from '@/components/secondBox'
import './App.css';
function App() {
  return (
    <div className='overflow-hidden'>
      <FirstBox>
      </FirstBox> 
      <SecondBox />
    </div>
  );
}

export default App;
