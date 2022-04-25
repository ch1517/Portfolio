import styled from "styled-components"
interface SkillBadgeProps {
  skillName?: string
  position: any[];
}
const Badge = styled.div<SkillBadgeProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  position: absolute;
  top:${props => `${props.position[0]}%`} ;
  left:${props => `${props.position[1]}%`} ;
  background-color: white;
  padding:0.5rem;
  margin:0.5rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 5px -5px #000;
  cursor: pointer;
  .icon{
    height: 40px;
    margin-right: 1rem;
  }
  .name{
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-weight: bold;
  }
  &:hover{
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
  }
`;
export const SkillBadge = ({ skillName, position }: SkillBadgeProps): JSX.Element => {
  let iconUrl = null;
  switch (skillName) {
    case 'React':
      iconUrl = './images/skillIcons/front-end/react.svg'
      break;
    case 'HTML5':
      iconUrl = './images/skillIcons/front-end/html5.svg'
      break;
    case 'CSS3':
      iconUrl = './images/skillIcons/front-end/css3.svg'
      break;
    case 'JavaScript':
      iconUrl = './images/skillIcons/front-end/javascript.svg'
      break;
    case 'TypeScript':
      iconUrl = './images/skillIcons/front-end/typescript.svg'
      break;
    case 'Recoil':
      iconUrl = './images/skillIcons/front-end/recoil.svg'
      break;
    case 'React Query':
      iconUrl = './images/skillIcons/front-end/react-query.svg'
      break;
    case 'Python':
      iconUrl = './images/skillIcons/back-end/python.svg'
      break;
    case 'Node.js':
      iconUrl = './images/skillIcons/back-end/nodejs.svg'
      break;
    case 'AWS API Gateway':
      iconUrl = './images/skillIcons/back-end/aws-api-gateway.svg'
      break;
    case 'AWS EC2':
      iconUrl = './images/skillIcons/back-end/aws-ec2.svg'
      break;
    case 'AWS CloudFront':
      iconUrl = './images/skillIcons/ci-cd/aws-cloudfront.svg'
      break;
    case 'AWS S3':
      iconUrl = './images/skillIcons/ci-cd/aws-s3.svg'
      break;
    case 'Git Actions':
      iconUrl = './images/skillIcons/ci-cd/git-actions.svg'
      break;
  }
  if (iconUrl)
    return (
      <Badge position={position}>
        <img className="icon" src={iconUrl} />
        <span className="name">{skillName}</span>
      </Badge>
    )
  else
    return <></>
}