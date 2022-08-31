import styled from 'styled-components'
import { cardStyles } from "../components/ReusableStyles";
export const Section = styled.section`
${cardStyles};
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
.image {
  max-height: 10rem;
  overflow: hidden;
  border-radius: 20rem;
  img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    border-radius: 20rem;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
.title {
  text-align: center;
  h2,
  h5 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
  }
  h5 {
    letter-spacing: 0.2rem;
  }
}
.info {
  display: flex;
  gap: 1rem;
  .container {
    text-align: center;
  }
}
`;
