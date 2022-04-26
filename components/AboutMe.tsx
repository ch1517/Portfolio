import styled from "styled-components"
import { Section } from "../styles/common";

const AboutMeSection = styled(Section)`
  align-items: center;
  .contents{
    .privacy-info{
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      .profile{
        border: 5px solid #C9B6F2;
        margin-bottom: 2rem;
        width: 20rem;
        height: 20rem;
        border-radius: 10rem;
        cursor: pointer;
        &>img{
          height: 100%;
          margin-left: -0.75rem;
        }
      }
      .name{
        font-weight: 600;
        font-size: 2.5rem;
      }
    }
  }
  .blabla{
    width: 50%;
    font-size: 2rem;
    margin-left: 4rem;
    .b-title{
      width: fit-content;
      padding: 0 0.5rem;
      font-size: 2.5rem;
      font-weight: 600;
      margin-top: 2rem;
      background-color: #F2B705;
    }
  }

  // mobile
  @media screen and (max-width:899px) {
  .contents{
    width: 80%;
    .privacy-info{
      align-items: center;
      &>div{
        text-align: center;
        font-size: 3.5rem;
      }
      .name{
        font-size: 4rem;
      }
      margin-bottom: 5rem;
      font-size: 3.5rem;
    }
  }
    .blabla{
      width: 80%;
      font-size: 3.5rem;
      margin:0;
    }
  }
`;
export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeSection>
      <h1 className="title">About Me</h1>
      <div className="contents">
        <div className="privacy-info">
          <div className="profile"><img src='./images/introduce/about-me-profile.png' alt="profile" /></div>
          <div className="name">Jeong Su Hyeon, 정수현</div>
          <div>Front-end Developer, 프론트엔드 개발자</div>
          <div>Email : happyscdwd@gmail.com</div>
        </div>
        <div className="blabla">
          <span>현재 스타트업에서 기획 및 개발 직무를 담당하고 있는 <b>3년차 개발자</b>입니다. MSA 구조의 시스템에서 주로 React  라이브러리를 이용한 웹 클라이언트 파트 개발을 맡고 있습니다. 개발의 결과물과 지식은 많은 사람들과 공유할 수록 가치가 더해진다는 신념과 함께, 기록을 통해 성장하고자 끊임없이 노력합니다.</span>
          <div className="b-title">꾸준함과 성장</div>
          <span>2017년부터 운영하던 전공 블로그에 꾸준히 한 달에 2~3개의 게시물로 개발 시 발생한 오류나 부족한 개념을 정리하고 있습니다. 일일 평균 400~500명이 방문하는 블로그로 성장하여, 댓글로 달리는 질문에 답변을 하면서 과거에 정리한 지식들을 되짚어보고, 점검해보는 과정을 통해서 저 또한 블로그와 함께 성장하는 중입니다.</span>
          <div className="b-title">열정과 도전 정신</div>
          <span>현재에 머무르지 않고, 새로운 일에 도전하는 것을 좋아합니다. 매년 1~2개의 전공 관련 자격증을 취득하는 것을 목표로 업무 시간 이후에 다양한 분야의 전공 지식을 쌓기 위해 노력하고 있습니다. 또한, 개발에 있어서도 한 가지 기술 스택에 머무르기 보다는 새로운 기술을 접해보기 위해 개인 프로젝트에 다양한 기술 스택을 도입해보고 있습니다.</span>
        </div>
      </div>
    </AboutMeSection>
  )
}