import { usePomodoro } from '../../hooks/usePomodoro';
import { sortPomodorosByMostRecent } from '../../utils/sortPomodorosByMostRecent';

import { Task } from '../Task';

import { 
  LatestTasksContainer,
  PreventGrowDiv,
  TasksWrapper,
  EmptyList,
  ViewAllLink,
} from './styles';

export function LatestTasks(){
  const { pomodoros } = usePomodoro();

  const orderedPomodoros = sortPomodorosByMostRecent(pomodoros).slice(0, 10);

  return(
    <LatestTasksContainer>
      <h2>Latest Tasks</h2>
      <PreventGrowDiv>
        <TasksWrapper>
          {orderedPomodoros.length > 0 ? (
            orderedPomodoros.map((pomodoro) => {
              return(
                <Task 
                  key={pomodoro.id}
                  pomodoroId={pomodoro.id}
                  task={pomodoro.task}
                  startedDate={pomodoro.startDate}
                />
              )
            })
          ) : (
            <EmptyList>
              <strong>No tasks yet</strong>
              <span>Start a new task</span>
            </EmptyList>
          )}
        </TasksWrapper>
      </PreventGrowDiv>
      <ViewAllLink to='/history'>View All</ViewAllLink>
    </LatestTasksContainer>
  )
}