import styled from "styled-components";
import { Section } from "../styles/common";
import { Header } from "./Header"

const IntroduceSection = styled(Section)`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding:0;
  background-color: #7141D9;
  color:white;
`;
const IntroduceDiv = styled.div`
  flex:1;
  position:relative;
  display: flex;
  align-items: center;
  margin: 5rem;
  .profile-emoji{
    width: 25rem;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
    border-radius: 15rem;
    background-color: white;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    z-index: 2;
    &:hover{
      transform: translateY(-1rem);
      -webkit-transform: translateY(-1rem);
      -moz-transform: translateY(-1rem);
      -ms-transform: translateY(-1rem);
      -o-transform: translateY(-1rem);
      .profile-deco{
        display: flex;
      }
    }
    &>.profile{
      height: 80%;
    }
    &>.profile-deco{
      width: 100%;
      position: absolute;
      display: none;
      top:-35%;
      left: 50%;
    }
  }
  .discription{
    position: absolute;
    bottom: 5rem;
    right: 10rem;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color:black;
    font-weight: 600;
    padding: 0 0.5rem;
    background-color: #F2B705;
    z-index: 2;
  }
  .title{
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 5rem;
    font-weight: bold;
    color:white;
    z-index: 2;
  }
  .profile-background{
    width: 65%;
    top:0;
    right: 0;
    position: absolute;
  }
`;
export const Introduce = (): JSX.Element => {
  return (
    <IntroduceSection>
      <Header />
      <IntroduceDiv>
        <div className="profile-emoji">
          <img className="profile" src='./images/introduce/profile-emoji.png' alt="profile-emoji" />
          <img className="profile-deco" src='./images/introduce/profile-deco.gif' alt="profile-deco" />
        </div>
        <span className="discription">기록을 통해 성장하는 개발자</span>
        <span className="title">정수현의 포트폴리오</span>
        <img className="profile-background" src='./images/introduce/profile-background.png' alt="profile-background" />
      </IntroduceDiv>
    </IntroduceSection>
  )
}