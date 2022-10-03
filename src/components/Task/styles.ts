import styled from "styled-components";

const STATUS_COLOR = {
  completed: 'green-400',
  interrupted: 'red-400',
  inProgress: 'yellow-600',
  idle: 'yellow-700',
} as const;

export const TaskContainer = styled.div<{statusColor: keyof typeof STATUS_COLOR, taskProgress: number}>`
  background-color: ${({theme}) => theme['yellow-100']};
  padding-top: 0.15rem;
  border-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({taskProgress}) => taskProgress + '%'};
    background-color: ${({theme, statusColor}) => theme[STATUS_COLOR[statusColor]]};
    z-index: -1;
    transition: width 0.1s linear;
  }
`;

export const TaskContent = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${({theme}) => theme['gray-300']};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  span{
    font-size: 1rem;
    color: ${({theme}) => theme['gray-700']};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p{
    color: ${({theme}) => theme['gray-500']};
    font-size: 0.875rem;
    font-weight: bold;
  }

  @media (min-width: 45em){
    padding: 0.75rem 0.5rem;
  }
`;