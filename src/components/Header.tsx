import styled from "styled-components";
import DarkTheme from "./DarkTheme";
import { useThemeStore } from "./themeStore";

export default function Header() {
  const { darkMode } = useThemeStore();

  return (
    <HeaderContainer darkMode={darkMode}>
      <Title darkMode={darkMode}>Where in the world?</Title>
      <DarkTheme />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 80px 24px 81px;
  background: ${(props) => (props.darkMode ? "#000" : "#FFF")};
  color: ${(props) => (props.darkMode ? "#FFF" : "#111517")};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
}`;

const Title = styled.h1<{ darkMode: boolean }>`
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => (props.darkMode ? "#FFF" : "#111517")};
  @media (max-width: 768px) {
    font-size: 20px;
  }
}`;
