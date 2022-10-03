import { useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

import { usePomodoro } from '../../hooks/usePomodoro';
import { CountdownContainer, Separator } from './styles';

export function Countdown(){
  const { 
    activePomodoro, 
    pomodoroBreak,
    changeMinutesPassed,
    minutesPassed,
    markCurrentPomodoroAsCompleted,
    setPomodoroBreak,
    resetPomodoroCycle,
  } = usePomodoro();

  const totalMinutes = activePomodoro ? activePomodoro.minutesAmount * 60 : 0;

  useEffect(() =>{
    const interval = setInterval(() =>{
      if(activePomodoro && minutesPassed < totalMinutes){
        const timePassed = differenceInSeconds(new Date(), new Date(activePomodoro.startDate));
        changeMinutesPassed(timePassed);
      }else if(activePomodoro){
        changeMinutesPassed(totalMinutes);

        markCurrentPomodoroAsCompleted(activePomodoro.id);
        setPomodoroBreak({
          minutesAmount: 5,
          startDate: new Date(),
        });
      }

      if(!activePomodoro && pomodoroBreak && minutesPassed < 300){
        const timePassed = differenceInSeconds(new Date(), new Date(pomodoroBreak.startDate));
        changeMinutesPassed(timePassed);
        
      }else if(!activePomodoro && pomodoroBreak){
        resetPomodoroCycle();
      }
    }, 1000);

    return () =>{
      clearInterval(interval);
    }
  }, [activePomodoro, minutesPassed, pomodoroBreak]);

  const currentTime = activePomodoro ? totalMinutes - minutesPassed : pomodoroBreak && pomodoroBreak.minutesAmount * 60 - minutesPassed || 0;

  const minutesAmount = Math.floor(currentTime / 60);
  const secondsAmount = currentTime % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() =>{
    if(activePomodoro){
      document.title = `FocusMe - ${minutes}:${seconds}`;
    }else if(!activePomodoro && pomodoroBreak){
      document.title = `Take a break - ${minutes}:${seconds}`;
    }else{
      document.title = `FocusMe - Pomodoro timer`;
    }
  }, [activePomodoro, pomodoroBreak, minutesPassed]);

  return(
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}