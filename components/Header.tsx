import styled from "styled-components"

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #7141D9;
  color:white;
`;
const LogoDiv = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  margin-left: 3rem;
`;
const MenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 3rem;
  width: 40%;
  height: fit-content;
  li{
    list-style: none;
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const Header = (): JSX.Element => {
  return (
    <HeaderDiv>
      <LogoDiv>SuHyeon`s Portfoilo</LogoDiv>
      <MenuUl>
        <li>About Me</li>
        <li>Skill Trees</li>
        <li>Archive</li>
        <li>Project</li>
        <li>Project</li>
      </MenuUl>
    </HeaderDiv>
  );
}