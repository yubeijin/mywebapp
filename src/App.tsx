import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Home from './home/index'
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState('渊 明')
  const [datas] = useState('89')
  const clicks = () => {
    setData('Yuan Ming')
  }
  const doms = useRef(null)
  useEffect(() => {
    return () => {
      console.log('watch')
      console.log(doms.current)
    }
  }, [data])
  useEffect(() => {
    return () => {
      console.log('watch2')
    }
  }, [datas])
  return (
    <>
      <div ref={doms} onClick={clicks}>55</div>
      <Routes>
        <Route path='/' element={<Home data={data} />}  />
      </Routes>
    </>

  );
}

export default App;
