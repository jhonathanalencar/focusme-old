import styled from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    width: fit-content;
    gap: 0.5rem;
    color: ${({theme}) => theme['gray-300']};
    transition: color 0.3s ease;

    &:hover{
      color: ${({theme}) => theme['blue-400']};
    }

    svg{
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const HistoryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  color: ${({theme}) => theme['gray-100']};

  @media (min-width: 45em){
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const HistoryList = styled.div`
  table{
    border-collapse: collapse;
    background: ${({theme}) => theme['gray-600']};
    color: ${({theme}) => theme['gray-400']};
    width: 100%;
    border-radius: 0.25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;

    thead{
      width: 100%;

      > tr{
        display: flex;

        th{
          width: 100%;
          flex: 1;
          text-align: left;
          font-weight: bold;
          color: ${({theme}) => theme['gray-200']};
        }
        th:nth-child(1){
          padding-left: 0.5rem;
          min-width: 45%;
        }
        th:nth-child(2){
          display: none;
        }
        th:nth-child(3){
          display: none;
        }

        @media (min-width: 25em){
          th:nth-child(2){
            display: table-cell;
          }
        }
        @media (min-width: 45em){
          th:nth-child(3){
            display: table-cell;
          }
        }
      }
    }

    tbody{
      width: 100%;

      >tr{
        overflow: hidden;
        display: flex;
        background-color: ${({theme}) => theme['gray-800']};
        padding-block: 0.75rem;
        font-size: 1rem;
        font-size: 0.875rem;
        border-radius: 0.25rem;
        border-top: 0.5rem solid ${({theme}) => theme['gray-600']};
        
        td{
          flex: 1;
        }

        td:nth-child(1){
          padding-left: 0.5rem;
          min-width: 45%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        td:nth-child(2){
          display: none;
        }
        td:nth-child(3){
          display: none;
        }

        @media (min-width: 25em){
          td:nth-child(2){
            display: table-cell;
          }
        }
        @media (min-width: 45em){
          td:nth-child(3){
            display: table-cell;
          }
        }
      }
    }
  }
`;

export const EmptyListText = styled.span`
  color: ${({theme}) => theme['gray-400']};
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  display: block;
  margin-top: 1rem;

  @media (min-width: 45em){
    font-size: 1.5rem;
  }
`;

const STATUS_COLOR = {
  complete: 'green-400',
  interrupt: 'red-400',
  inProgress: 'yellow-600',
} as const;

export const Status = styled.span<{statusColor:  keyof typeof STATUS_COLOR}>`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  
  &::before{
    content: '';
    left: 0;
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: red;
    background-color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`;