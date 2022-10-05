import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { differenceInSeconds } from "date-fns";

import { interruptActivePomodoroAction, markCurrentPomodoroAsCompletedAction, resetPomodoroCycleAction, setPomodoroBreakAction, startNewPomodoroAction } from "../reducers/pomodoro/actions";
import { pomodoroReducer } from "../reducers/pomodoro/reducer";
import { Pomodoro, PomodoroBreak, PomodoroState } from "../reducers/pomodoro/types";

import notificationSound from '../assets/notification.mp3';

interface PomodoroContextData{
  pomodoros: Pomodoro[];
  activePomodoro: Pomodoro | undefined;
  pomodoroBreak: PomodoroBreak | undefined;
  minutesPassed: number;
  changeMinutesPassed: (minutes: number) => void;
  startNewPomodoroCycle: (task: string, minutesAmount: number) => void;
  interruptActivePomodoro: (activePomodoroId: string) => void;
  markCurrentPomodoroAsCompleted: (activePomodoroId: string) => void;
  setPomodoroBreak: (pomodoroBreak: PomodoroBreak) => void;
  resetPomodoroCycle: () => void;
}

interface PomodoroContextProviderProps{
  children: ReactNode;
}

export const PomodoroContext = createContext({} as PomodoroContextData);

const initialState: PomodoroState = {
  pomodoros: [],
  activePomodoro: undefined,
  pomodoroBreak: undefined,
}

export function PomodoroContextProvider({ children }: PomodoroContextProviderProps){
  const [state, dispatch] = useReducer(
    pomodoroReducer, 
    initialState,
    () =>{
      const storedState = localStorage.getItem('@focusMe:0.0.1');
      
      if(storedState){
        return JSON.parse(storedState);
      }else{
        return initialState;
      }
    }
  );

  const { pomodoros, activePomodoro, pomodoroBreak } = state;

  const notificationAudio = new Audio(notificationSound); 

  const [minutesPassed, setMinutesPassed] = useState(()=>{
    if(activePomodoro){
      return differenceInSeconds(new Date(), new Date(activePomodoro.startDate));
    }

    return 0;
  });

  function changeMinutesPassed(minutes: number){
    setMinutesPassed(minutes);
  }

  function startNewPomodoroCycle(task: string, minutesAmount: number){
    dispatch(startNewPomodoroAction({
      id: new Date().getTime() + '',
      task,
      minutesAmount,
      startDate: new Date(),
    }));
  }

  function interruptActivePomodoro(activePomodoroId: string){
    dispatch(interruptActivePomodoroAction(activePomodoroId));

    setMinutesPassed(0);
  }

  function markCurrentPomodoroAsCompleted(activePomodoroId: string){
    dispatch(markCurrentPomodoroAsCompletedAction(activePomodoroId));

    setMinutesPassed(0);
    notificationAudio.play();
  }

  function setPomodoroBreak(pomodoroBreak: PomodoroBreak){
    dispatch(setPomodoroBreakAction(pomodoroBreak));
  }

  function resetPomodoroCycle(){
    dispatch(resetPomodoroCycleAction());

    setMinutesPassed(0);
    notificationAudio.play();
  }

  useEffect(() =>{
    const stateJSON = JSON.stringify(state);

    localStorage.setItem('@focusMe:0.0.1', stateJSON);
  }, [state]);

  return(
    <PomodoroContext.Provider value={{
      pomodoros,
      activePomodoro,
      pomodoroBreak,
      startNewPomodoroCycle,
      minutesPassed,
      changeMinutesPassed,
      interruptActivePomodoro,
      markCurrentPomodoroAsCompleted,
      setPomodoroBreak,
      resetPomodoroCycle,
    }}>
      {children}
    </PomodoroContext.Provider>
  )
}