import { formatDistanceToNow } from 'date-fns';

import { usePomodoro } from '../../hooks/usePomodoro';

import {
  TaskContainer,
  TaskContent,
} from './styles';

interface TaskProps{
  task: string;
  startedDate: Date;
  pomodoroId: string;
}

export function Task({ task, startedDate, pomodoroId }: TaskProps){
  const { activePomodoro, pomodoros, minutesPassed} = usePomodoro();

  const existingPomodoro = pomodoros.find((pomodoro) => pomodoro.id === pomodoroId);
  let status: "idle" | "completed" | "interrupted" | "inProgress" = 'idle';
  let taskProgress: number = 0; 

  if(existingPomodoro){
    if(existingPomodoro.finishDate){
      status = 'completed';
      taskProgress = 100;
    }else if(existingPomodoro.interruptDate){
      status = 'interrupted';
      taskProgress = 100;
    }else if(activePomodoro && existingPomodoro.id === activePomodoro.id){
      status = 'inProgress';
      const totalDuration = existingPomodoro.minutesAmount * 60;
      taskProgress =  (minutesPassed / totalDuration) * 100;
    }
  }

  return(
    <TaskContainer statusColor={status} taskProgress={taskProgress}>
      <TaskContent>
        <span>{task}</span>
        <p>{formatDistanceToNow(new Date(startedDate), { addSuffix: true })}</p>
      </TaskContent>
    </TaskContainer>
  )
}