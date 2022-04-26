import styled from "styled-components";

interface BGLElementProps {
  name: string
}
const BGLDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  margin:1rem;
  padding:0.75rem;
  width: 80px;
  height: fit-content;
  background-color: white;
  &>img{
    width: 90%;
  }   
`;
export const BGLElement = ({ name }: BGLElementProps): JSX.Element => {
  let imgUrl = null;
  switch (name) {
    case "Blog":
      imgUrl = './images/archive/tistory.svg';
      break;
    case "Github":
      imgUrl = './images/archive/github.svg';
      break;
    case "Linkedin":
      imgUrl = './images/archive/linkedin.svg';
      break;
  }
  if (imgUrl)
    return <BGLDiv className="logo"><img src={imgUrl} /></BGLDiv>
  else
    return <></>
}