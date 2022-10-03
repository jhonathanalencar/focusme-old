import { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";

export function usePomodoro(){
  return useContext(PomodoroContext);
}