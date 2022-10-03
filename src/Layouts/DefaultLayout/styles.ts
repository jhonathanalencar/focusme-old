import styled from "styled-components";

export const LayoutContainer = styled.main`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme['gray-900']};
  padding-block: 4rem;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: min(75rem, calc(100% - 1rem * 2));
  margin-inline: auto;
`;