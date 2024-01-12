import {useState} from 'react'
type way = 'up' | 'down'
export const useScroll = (type: way) => {
  const [step, setStep] = useState(0)
  const classList = ['first-box', 'in-love']

  if (step >= 0 && step >= classList.length - 2) {
    setStep(type === 'up' ? step + 1 : step -1)
  }
  document.getElementsByClassName(classList[step])[0].scrollIntoView({behavior: 'smooth'})
}