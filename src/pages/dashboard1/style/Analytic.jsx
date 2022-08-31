import styled from 'styled-components'
import { cardStyles } from "../components/ReusableStyles";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  .analytic {
    ${cardStyles};
    padding: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    color:  black;
    &:hover {
      background-color: #20c997;
      color: white; 
      svg {
        color: white;
      }
    }
    .logo {
      background-color: #0d6efd;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;