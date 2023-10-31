import styled from "styled-components";
import DarkTheme from "../components/DarkTheme";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Where in the world?</Title>
      <DarkTheme />
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 80px 24px 81px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #111517;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
