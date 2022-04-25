import styled from "styled-components"
import { Section } from "../styles/common"
import { SkillTree } from "./items/SkillTree"

const SkillsSection = styled(Section)`
  background-color: #AABAF2;
  align-items: center;
  &.contents{
    justify-content: center;
  }
`;

export const Skills = (): JSX.Element => {
  const frontEnd = ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Recoil", "React Query"];
  const CICD = ["AWS S3", "AWS CloudFront", "Git Actions"];
  const BackEnd = ["Python", "Node.js", "AWS API Gateway", "AWS EC2"];
  const Cowork = ["Github", "MS Teams", "Confluence", "Trello"];
  const frontEndPosition = [[10, 25], [15, 60], [20, 25], [47, 75], [30, 65], [45, 10], [35, 20]];
  const backEndPosition = [[10, 25], [35, 10], [25, 30], [40, 55]]
  return (
    <SkillsSection>
      <h1 className="title">Skill Trees</h1>
      <div className="contents">
        <SkillTree index='1' items={frontEnd} treeName="FrontEnd" position={frontEndPosition} />
        <SkillTree index='2' items={CICD} treeName="CI&CD" position={frontEndPosition} />
        <SkillTree index='2' items={BackEnd} treeName="BackEnd" position={backEndPosition} />
        <SkillTree index='3' items={BackEnd} treeName="Cowork Tools" position={backEndPosition} />
      </div>
    </SkillsSection>
  )
}