import styled from "styled-components";

export const CountdownContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-inline: auto;
  max-width: 18.75rem;
  background-color: ${({theme}) => theme['gray-600']};
  border-radius: 0.25rem;
  padding: 0.5rem;

  span{
    flex: 1;
    text-align: center;
    font-size: 4rem;
    font-weight: 500;
    font-family: var(--ff-secondary);

    @media (min-width: 40em){
      font-size: 8rem;
    }
  }

  @media (min-width: 40em){
    max-width: 25rem;
  }
`;

export const Separator = styled.span`
  color: ${({theme}) => theme['blue-500']};
`;