import { produce } from 'immer';

import { Action, ActionTypes, PomodoroState } from "./types";

export function pomodoroReducer(state: PomodoroState, action: Action){
  switch(action.type){
    case ActionTypes.START_NEW_POMODORO:{
      return produce(state, (draft) =>{
        draft.pomodoros.push(action.payload.newPomodoro);
        draft.activePomodoro = action.payload.newPomodoro;
      });
    }
    case ActionTypes.INTERRUPT_ACTIVE_POMODORO:{
      const tempPomodoros = state.pomodoros.map((pomodoro) => {
        if(pomodoro.id === action.payload.activePomodoroId){
          return{
            ...pomodoro,
            interruptDate: new Date(),
          }
        }

        return pomodoro;
      });

      return produce(state, (draft) =>{
        draft.pomodoros = tempPomodoros;
        draft.activePomodoro = undefined;
      });
    }
    case ActionTypes.MARK_CURRENT_POMODORO_AS_COMPLETED:{
      const tempPomodoros = state.pomodoros.map((pomodoro) =>{
        if(pomodoro.id === action.payload.activePomodoroId){
          return{
            ...pomodoro,
            finishDate: new Date(),
          }
        }

        return pomodoro;
      });

      return produce(state, (draft) => {
        draft.pomodoros = tempPomodoros;
        draft.activePomodoro = undefined;
      });
    }
    case ActionTypes.SET_POMODORO_BREAK:{
      return produce(state, (draft) =>{
        draft.pomodoroBreak = action.payload.pomodoroBreak; 
      });
    }
    case ActionTypes.RESET_POMODORO_CYCLE:{
      return produce(state, (draft) =>{
        draft.pomodoroBreak = undefined;
      });
    }
    default:
      return state;
  }
}