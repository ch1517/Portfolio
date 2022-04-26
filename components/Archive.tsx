
import styled from "styled-components";
import { Section } from "../styles/common";
import { ArchiveBoard } from "./items/ArchiveBoard";
const ArchiveSection = styled(Section)`
  background-color: #413659;
  align-items: center;
  &>.title{
    color:white;
  }
  &>.contents{
    flex-direction: row;
    flex-wrap: nowrap;
  }
  // mobile
  @media screen and (max-width:899px) {
    &>.contents{
      width: 50%;
      flex-wrap: wrap;
    }
  }
`;
export const Archive = (): JSX.Element => {
  return (
    <ArchiveSection>
      <h1 className="title">Archive</h1>
      <div className="contents">
        <ArchiveBoard name="Blog" url="https://doqtqu.tistory.com" contents={["헷갈리는 전공 개념 정리", "실무 지식 정리", "발생한 오류 정리", "알고리즘 문제풀이"]} />
        <ArchiveBoard name="Github" url="https://github.com/ch1517" contents={["개인 프로젝트 정리", "프로젝트 소스코드 관리", "업무 협업용"]} />
        <ArchiveBoard name="Linkedin" url="https://www.linkedin.com/in/suhyeon-jeong-839b80155" contents={["기술 및 스펙정리", "개발자 커뮤니티"]} />
      </div>
    </ArchiveSection>
  )
}