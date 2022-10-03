import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { usePomodoro } from '../../../../hooks/usePomodoro';

import {
  FormContainer,
  TaskField,
  MinutesField,
  StartButton,
  StopButton,
  BreakMessage,
} from './styles';

const pomodoroFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Provide a task'),
  minutes: zod.number(),
});

type PomodoroFormData = zod.infer<typeof pomodoroFormValidationSchema>;

export function PomodoroForm(){
  const { 
    register, 
    reset, 
    handleSubmit, 
    formState: { isSubmitting }, 
    watch, 
    setFocus 
  } = useForm<PomodoroFormData>({
    resolver: zodResolver(pomodoroFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 25,
    },
  });

  const { 
    startNewPomodoroCycle, 
    activePomodoro, 
    interruptActivePomodoro,
    pomodoroBreak,
  } = usePomodoro();

  const canStart = watch().task.trim().length > 0;

  function handleOnSubmited(data: PomodoroFormData){
    startNewPomodoroCycle(data.task, data.minutes);

    reset();
  }

  function handleInterruptActivePomodoro(activePomodoroId: string){
    interruptActivePomodoro(activePomodoroId);
  }

  useEffect(() =>{
    setFocus('task');
  }, []);

  return(
    <FormContainer>
      <datalist id="task-suggestions">
        <option value="Work on project 1">Work on project 1</option>
        <option value="Read a book">Read a book</option>
        <option value="Learn react">Learn react</option>
      </datalist>  

      <form onSubmit={handleSubmit(handleOnSubmited)}>
        <TaskField>
          <label htmlFor="taskTitle">Task</label>
          <input 
            type="select" 
            list="task-suggestions"
            id="taskTitle" 
            autoComplete="off"
            placeholder="What are you working on?" 
            {...register('task')}
            disabled={!!activePomodoro || !!pomodoroBreak}
          />
        </TaskField>
        <MinutesField>
          <label htmlFor="taskDuration">Duration</label>
          <input 
            type="number" 
            min={1} 
            max={60} 
            {...register('minutes', { valueAsNumber: true })} 
            disabled={!!activePomodoro || !!pomodoroBreak}
          />
          <span>minutes</span>
        </MinutesField>
        {!activePomodoro && !pomodoroBreak ? (
          <StartButton
            type="submit"
            disabled={!canStart || isSubmitting}
          >
            Start
          </StartButton>
        ) : (
          <StopButton
            type="button"
            onClick={() => activePomodoro && handleInterruptActivePomodoro(activePomodoro.id)}
            disabled={!!pomodoroBreak}
          >
            Stop
          </StopButton>
        )}
      </form>
      {pomodoroBreak && (
        <BreakMessage>Take a short break</BreakMessage>
      )}
    </FormContainer>
  )
}