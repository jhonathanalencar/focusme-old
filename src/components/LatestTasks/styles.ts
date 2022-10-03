import { Link } from "react-router-dom";
import styled from "styled-components";

export const LatestTasksContainer = styled.aside`
  background-color: ${({theme}) => theme['gray-700']};
  color: ${({theme}) => theme['gray-100']};
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0.1rem 0.1rem 0.25rem ${({theme}) => theme['gray-700']};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2{
    color: ${({theme}) => theme['gray-300']};
    font-size: 1.125rem;
    font-weight: bold;
    border-bottom: 0.1rem solid ${({theme}) => theme['gray-500']};
  }

  @media (min-width: 45em){
    width: 20rem; 

    h2{
      font-size: 1rem;
    }
  }
`;

export const ViewAllLink = styled(Link)`
  color: ${({theme}) => theme['gray-200']};
  font-size: 1.125rem;
  text-transform: capitalize;
  align-self: center;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover{
    color: ${({theme}) => theme['blue-500']};
    text-decoration: underline;
  }

  @media (min-width: 45em){
    font-size: 1rem;
  }
`;

// Prevent aside from growing infinitely
export const PreventGrowDiv = styled.div`
  flex: 1;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 0.75rem;
  }
  
  &::-webkit-scrollbar-track{
    margin-block: 0.5rem;
    background: ${({theme}) => theme['gray-900']};
    border-radius: 100vw;
  }
  
  &::-webkit-scrollbar-thumb{
    background-color: ${({theme}) => theme['blue-900']};;
    border: 0.2rem solid ${({theme}) => theme['gray-700']};
    border-radius: 100vw;
  }
`;

export const TasksWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme['gray-600']};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  
  @media (min-width: 45em){
    padding: 0.5rem;
    padding-bottom: 4rem;
    
    // Prevent aside from growing infinitely
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong{
    color: ${({theme}) => theme['gray-300']};
    font-weight: bold;
    font-size: 1.125rem;
  }

  span{
    color: ${({theme}) => theme['gray-400']};
    font-size: 1rem;
  }

  @media (min-width: 45em){
    strong{
      font-size: 1.25rem;
    }

    span{
      font-size: 1.125rem;
    }
  }
`;