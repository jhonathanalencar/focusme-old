import { Countdown } from '../Countdown';
import { PomodoroForm } from './components/PomodoroForm';

import { 
  PomodoroContainer,
  Heading,
} from './styles';

export function Pomodoro(){
  return(
    <PomodoroContainer>
      <Heading>Focus<span>Me</span></Heading>
      <Countdown />
      <PomodoroForm />
    </PomodoroContainer>
  )
}