import React from 'react';
import FirstBox from '@/components/firstBox'
import SecondBox from '@/components/secondBox'
import './App.css';
import {throttle} from 'lodash'
function App() {
  let currentStep: number = 0
  const scrollFunc = function(e: any) {
    var e = e || window.event;
    if (e.wheelDelta) {
      if (e.wheelDelta > 0) { //当鼠标滚轮向上滚动时
        if (currentStep > 0) currentStep--
      }
      if (e.wheelDelta < 0) { //当鼠标滚轮向下滚动时
        if (currentStep < 2) currentStep++
      }
    } else if (e.detail) {
      if (e.detail < 0) { //当鼠标滚轮向上滚动时
        if (currentStep > 0) currentStep--
      }
      if (e.detail > 0) { //当鼠标滚轮向下滚动时
        if (currentStep < 2) currentStep++
      }
    }
    console.log('滑动')
    if (currentStep === 0) {
      console.log('上')
      console.log(document.getElementsByClassName('first-box')[0])
      setTimeout(() => {
        document.getElementsByClassName('first-box')[0].scrollIntoView({behavior: 'smooth'})
      }, 300)
      document.getElementsByClassName('first-box')[0].scrollIntoView({behavior: 'smooth'})
    }
    if (currentStep === 1) {
      console.log('下')
      document.getElementsByClassName('in-love')[0].scrollIntoView({behavior: 'smooth'})
    }
  }
  window.addEventListener("DOMMouseScroll", scrollFunc)
  window.addEventListener("mousewheel", scrollFunc)
  return (
    <div className='overflow-hidden'>
      <FirstBox />
      <SecondBox />
    </div>
  );
}

export default App;
