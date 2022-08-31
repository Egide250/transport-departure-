import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
color:  black;
.title {
  h3 {
    span {
      margin-left: 0.5rem;
      color: #20c997;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.2rem;
    }
  }
}
.search {
  background-color: #20c997;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 1rem;
  svg {
    color: #fff;
  }
  input {
    background-color: transparent;
    border: none;
    color: #000;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #000;
      font-family: "Permanent Marker", cursive;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  flex-direction: column;
  .title {
    h1 {
      span {
        display: block;

        margin: 1rem 0;
        /* letter-spacing: 0; */
      }
    }
  }
}
`;
