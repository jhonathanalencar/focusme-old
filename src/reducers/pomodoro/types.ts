export type Pomodoro = {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  finishDate?: Date;
  interruptDate?: Date;
}

export type PomodoroBreak = {
  minutesAmount: number;
  startDate: Date;
}

export interface PomodoroState{
  pomodoros: Pomodoro[];
  activePomodoro: Pomodoro | undefined;
  pomodoroBreak: PomodoroBreak | undefined;
}

export enum ActionTypes{
  START_NEW_POMODORO = 'START_NEW_POMODORO',
  INTERRUPT_ACTIVE_POMODORO = 'INTERRUPT_ACTIVE_POMODORO',
  MARK_CURRENT_POMODORO_AS_COMPLETED = 'MARK_CURRENT_POMODORO_AS_COMPLETED',
  SET_POMODORO_BREAK = 'SET_POMODORO_BREAK',
  RESET_POMODORO_CYCLE = 'RESET_POMODORO_CYCLE',
}

interface StartNewPomodoroAction{
  type: ActionTypes.START_NEW_POMODORO;
  payload: {
    newPomodoro: Pomodoro,
  };
}

interface InterruptCurrentPomodoroAction{
  type: ActionTypes.INTERRUPT_ACTIVE_POMODORO;
  payload: {
    activePomodoroId: string;
  };
}

interface MarkCurrentPomodoroAsCompletedAction{
  type: ActionTypes.MARK_CURRENT_POMODORO_AS_COMPLETED;
  payload: {
    activePomodoroId: string;
  }
}

interface SetPomodoroBreakAction{
  type: ActionTypes.SET_POMODORO_BREAK;
  payload: {
    pomodoroBreak: PomodoroBreak;
  }
}

interface ResetPomodoroCycleAction{
  type: ActionTypes.RESET_POMODORO_CYCLE;
}

export type Action = 
  StartNewPomodoroAction |
  InterruptCurrentPomodoroAction |
  MarkCurrentPomodoroAsCompletedAction |
  SetPomodoroBreakAction |
  ResetPomodoroCycleAction;