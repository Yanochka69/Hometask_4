import { useState, useEffect } from 'react'
import style from '../css/CountdownTimer.module.css'

function CountdownTimer() {
  const [seconds, setSeconds] = useState(10)
  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {clearInterval(interval)}; 
      }
    }, [seconds]);

  return (
    <div className={style.timer}>
        <p>Таймер</p>
        <p>Осталось {seconds} секунд(ы)</p>
    </div>
  )
}

export default CountdownTimer
