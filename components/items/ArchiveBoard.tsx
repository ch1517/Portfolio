import styled from "styled-components"
import { BGLElement } from "./BGLElement";

const ArchiveBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
  border:5px solid white;
  border-radius: 1rem;
  width: 100%;
  height: 280px;
  margin:0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-1rem);
    -webkit-transform: translateY(-1rem);
    -moz-transform: translateY(-1rem);
    -ms-transform: translateY(-1rem);
    -o-transform: translateY(-1rem);
    &>.contents>a{
      display: flex;
    }
  }
  cursor: pointer;
  .header{
    display: flex;
    align-items: center;
    .title{
      color:white;
      font-size: 2.5rem;
    }
  }
  &>.contents{
    flex:1 1;
    color:white;
    font-size: 1.75rem;
    position: relative;
    ul{
      margin: 0;
    }
    a{
      position:absolute;
      display: none;
      right: 1rem;
      bottom: 1rem;
    }
  }
  // mobile
  @media screen and (max-width:899px) {
    margin: 3rem 0;
    height: fit-content;
    padding: 1rem;
    .header{
      .title{
        font-size: 5rem;
        margin: 0;
      }
    }
    &>.contents{
      font-size: 3rem;
    padding: 1rem;
    }
  }

`;
interface ArchiveBoardProps {
  name: string;
  url: string;
  contents: string[];
}
export const ArchiveBoard = ({ name, url, contents }: ArchiveBoardProps): JSX.Element => {
  return (
    <ArchiveBoardDiv onClick={() => window.open(url)}>
      <div className="header">
        <BGLElement name={name} />
        <h1 className="title">{name}</h1>
      </div>
      <div className="contents">
        <ul>
          {contents.map((content, key) => <li key={key}>{content}</li>)}
        </ul>
        <a>➝ 보러가기</a>
      </div>
    </ArchiveBoardDiv>
  );
}