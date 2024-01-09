import {useState, useEffect} from 'react'
import {diffTime} from '../utils/time'
export default function useSecondBox() {
  const [day, setDay] =  useState(0)
  const [hour, setHour] =  useState(0)
  const [min, setMin] =  useState(0)
  const [second, setSecond] =  useState(0)
  const updateTime = () => {
    const {days, hours, minutes, seconds} = diffTime('2021-2-21 20:00:00')
    setDay(days)
    setHour(hours)
    setMin(minutes)
    setSecond(seconds)
  }
  useEffect(() => {
    let timer = setInterval(() => {
      updateTime()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div className="in-love flex justify-center items-center h-screen w-screen">
      <div>
        We have been in love for {day} days, {hour} hours, {min} minutes, and {second} seconds.
      </div>
    </div>
  )
}