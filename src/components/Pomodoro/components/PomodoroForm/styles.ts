import styled from "styled-components";
import { lighten } from 'polished';

export const FormContainer = styled.div`
 width: 100%;
 max-width: 400px;
 margin: 2rem auto;
  
  form{
    width: 100%;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TaskField = styled(FieldContainer)`
  display: flex;
  width: 100%;
  flex: 1;

  label{
    font-size: 1rem;
  }

  input{
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 0.1rem solid ${({theme}) => theme['blue-600']};
    padding: 0 0.25rem;
    color: ${({theme}) => theme['gray-400']};
    text-align: center;

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }

  @media (min-width: 40em){
    gap: 2rem;

    label{
      font-size: 1.125rem;
    }
  }
`;

export const MinutesField = styled(FieldContainer)`
  margin-top: 1rem;

  input{
    margin-left: auto;
    padding: 0.25rem;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    background: ${({theme}) => lighten(0.01, theme['gray-600'])};
    color: ${({theme}) => theme['gray-300']};
  }

  span{
    margin-left: 0.5rem;
    color: ${({theme}) => theme['gray-400']};
  }
`;

const BaseButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  color: ${({theme}) => theme['gray-200']};
  transition: background-color 0.3s ease;

  &:disabled{
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const StartButton = styled(BaseButton)`
  background-color: ${({theme}) => theme['blue-700']};

  &:is(:hover, :focus):not(:disabled){
    background-color: ${({theme}) => theme['blue-900']};
  }
`;

export const StopButton = styled(BaseButton)`
  background-color: ${({theme}) => theme['red-300']};

  &:is(:hover, :focus):not(:disabled){
    background-color: ${({theme}) => theme['red-500']};
  }
`;

export const BreakMessage = styled.span`
  margin-top: 1rem;
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1.125rem;
`;