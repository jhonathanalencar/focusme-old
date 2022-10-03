import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 45em){
    flex-direction: row;
    gap: 1rem;
  }
`;