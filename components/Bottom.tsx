import styled from "styled-components"
import { BGLElement } from "./items/BGLElement";

const BottomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  height: 150px;
  color:white;
  .info-container{
    display: flex;
    &>.info>div{
      margin:0.5rem;
      width: 60px;
      cursor: pointer;
    }
  }
  .copyright{
    font-size:1.5rem;
    text-align: center;
    padding:0.5rem;
  }
  // mobile
  @media screen and (max-width:899px) {
    height: 200px;
    .info-container{
      &>.info>div{
        width: 100px;
      }
    }
    .copyright{
      font-size: 2.5rem;
    }
  }

`

export const Bottom = (): JSX.Element => {
  const infos: any = { "Blog": "https://doqtqu.tistory.com", "Github": "https://github.com/ch1517", "Linkedin": "https://www.linkedin.com/in/suhyeon-jeong-839b80155" };

  return (
    <BottomFooter>
      <div className="info-container">
        {Object.keys(infos).map((key: string) =>
          <div key={key} className="info" onClick={() => window.open(infos[key])}>
            <BGLElement name={key} />
          </div>
        )}
      </div>
      <div className="copyright">© 2022 Su Heyon,Jeong</div>
    </BottomFooter>
  )
}