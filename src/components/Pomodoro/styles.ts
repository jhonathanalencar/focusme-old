import styled from "styled-components";

export const PomodoroContainer = styled.section`
  background-color: ${({theme}) => theme['gray-700']};
  color: ${({theme}) => theme['gray-100']};
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0.1rem 0.1rem 0.25rem ${({theme}) => theme['gray-700']};
  width: 100%;
`;

export const Heading = styled.h2`
  font-weight: 900;
  font-size: 1.125rem;
  color: ${({theme}) => theme['blue-500']};
  border-bottom: 0.1rem solid ${({theme}) => theme['gray-500']};
  margin-bottom: 2rem;
  padding-bottom: 1rem;

  span{
    color: ${({theme}) => theme['red-500']};
  }

  @media (min-width: 40em){
    font-size: 1.75rem;
  }
`;