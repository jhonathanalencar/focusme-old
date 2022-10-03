import { Pomodoro } from "../reducers/pomodoro/types";

export function sortPomodorosByMostRecent(pomodoros: Pomodoro[]){
  const orderedPomodoros = pomodoros.slice().sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return orderedPomodoros;
}