import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>Free DogGo</StyledHeader>
    </>
  );
}

const StyledHeader = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  text-align: center;
  border-bottom: 1px solid black;
  z-index: 10;
  margin: 0;
  padding: 20px;
  background-color: #999999;
  color: #800020;
  font-size: 50px;
`;