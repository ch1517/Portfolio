import styled from "styled-components";
import { SkillBadge } from "./SkillBadge";

interface SkillTreeProps {
  index: string;
  treeName: string;
  items: string[];
  position: any[];
}
const SkillTreeDiv = styled.div`
  width: 50%;
  position:relative;
  &>img{
    width: 100%;
  }
  &>.tree-name{
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    display: flex;
    justify-content: center;
    left: 40%;
    bottom: 3rem;
    background-color: #F2E205;
    width:30%;
    padding:0.5rem 0;
    border: 5px solid #F2B705;
    border-radius: 1rem;
  }
`;
export const SkillTree = ({ index, treeName, items, position }: SkillTreeProps): JSX.Element => {
  return (
    <SkillTreeDiv>
      <img src={`./images/skillIcons/skill-tree${index}.png`} />
      {items.map((item, index) => <SkillBadge key={index} skillName={item} position={position[index]} />)}
      <div className="tree-name">{treeName}</div>
    </SkillTreeDiv>
  );
}