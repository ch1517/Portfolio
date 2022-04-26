import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 0;
  &>.title{
    margin:0;
    margin-bottom: 6rem;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    color: black;
  }
  &>.contents{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  // mobile
  @media screen and (max-width:899px) {
    &>.title{
    font-size: 7.5rem;
    }
  }
`;