import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6rem 0;
  .title{
    text-align: center;
    font-size: 5rem;
    color: black;
  }
  .contents{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;