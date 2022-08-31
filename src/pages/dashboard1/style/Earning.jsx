import styled from 'styled-components'
import { cardStyles } from "../components/ReusableStyles";
export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 20rem;
${cardStyles}
padding: 2rem 0 0 0;
.top {
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    h1 {
      font-size: 2rem;
    }
    .growth {
      background-color: #0A2640;;
      padding: 0.5rem;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }
      span { 
        color: #ffc107;
      }
    }
  }
}
.chart {
  height: 70%;
  .recharts-default-tooltip {
    background-color: black !important;
    border-color: black !important;
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
}
`;
