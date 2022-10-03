import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { CaretDoubleLeft } from 'phosphor-react';

import { usePomodoro } from '../../hooks/usePomodoro';
import { sortPomodorosByMostRecent } from '../../utils/sortPomodorosByMostRecent';

import {
  HistoryContainer,
  HistoryTitle,
  HistoryList,
  EmptyListText,
  Status,
} from './styles';

export function History(){
  const { pomodoros } = usePomodoro();

  return(
    <HistoryContainer>
      <Link to="/">
        <CaretDoubleLeft />
        Back home
      </Link>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortPomodorosByMostRecent(pomodoros).map((pomodoro) =>{
              return(
                <tr key={pomodoro.id}>
                  <td>{pomodoro.task}</td>
                  <td>{pomodoro.minutesAmount} minutes</td>
                  <td>{formatDistanceToNow(new Date(pomodoro.startDate), { addSuffix: true })}</td>
                  <td>{pomodoro.finishDate ? (
                    <Status statusColor="complete">Completed</Status>
                  ) : pomodoro.interruptDate ? (
                    <Status statusColor="interrupt">Interrupted</Status>
                  ) : (
                    <Status statusColor="inProgress">In progress</Status>
                  )
                  }</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {pomodoros.length === 0 && (
          <EmptyListText>No tasks found</EmptyListText>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}