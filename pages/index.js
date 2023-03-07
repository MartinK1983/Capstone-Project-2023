import styled from "styled-components";
export default function Home() {
  return (
    <main>
      <Heading>🐋Capstone Whales Template🐋</Heading>
      <StyledWelcome>
        Bundesland
      </StyledWelcome>
    </main>
  );
}

const Heading = styled.h1`
text-align: center;`

const StyledWelcome = styled.p`
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  z-index: 2;
  position: relative;
  width: 340px;
  height: 184px;
  background: #eeeeee;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 80px;
`;