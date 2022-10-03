import { LatestTasks } from "../../components/LatestTasks";
import { Pomodoro } from "../../components/Pomodoro"

import { HomeContainer } from './styles';

export function Home(){
  return(
    <HomeContainer>
      <Pomodoro />
      <LatestTasks />
    </HomeContainer>
  )
}