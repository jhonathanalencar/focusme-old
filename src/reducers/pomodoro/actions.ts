import { ActionTypes, Pomodoro, PomodoroBreak } from "./types";

export function startNewPomodoroAction(newPomodoro: Pomodoro):{
  type: ActionTypes.START_NEW_POMODORO;
  payload: {
    newPomodoro: Pomodoro,
  };
}{
  return{
    type: ActionTypes.START_NEW_POMODORO,
    payload: {
      newPomodoro,
    }
  }
}

export function interruptActivePomodoroAction(activePomodoroId: string):{
  type: ActionTypes.INTERRUPT_ACTIVE_POMODORO;
  payload: {
    activePomodoroId: string,
  };
}{
  return{
    type: ActionTypes.INTERRUPT_ACTIVE_POMODORO,
    payload: {
      activePomodoroId,
    }
  }
}

export function markCurrentPomodoroAsCompletedAction(activePomodoroId: string):{
  type: ActionTypes.MARK_CURRENT_POMODORO_AS_COMPLETED;
  payload: {
    activePomodoroId: string;
  }
}{
  return{
    type: ActionTypes.MARK_CURRENT_POMODORO_AS_COMPLETED,
    payload: {
      activePomodoroId,
    }
  }
}

export function setPomodoroBreakAction(pomodoroBreak: PomodoroBreak):{
  type: ActionTypes.SET_POMODORO_BREAK;
  payload: {
    pomodoroBreak: PomodoroBreak;
  }
}{
  return{
    type: ActionTypes.SET_POMODORO_BREAK,
    payload: {
      pomodoroBreak,
    }
  }
}

export function resetPomodoroCycleAction():{
  type: ActionTypes.RESET_POMODORO_CYCLE;
}{
  return{
    type: ActionTypes.RESET_POMODORO_CYCLE,
  }
}