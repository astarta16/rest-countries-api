import { useThemeStore } from "./themeStore";
import MoonImage from "../assets/Group 3.svg";
import styled from "styled-components";

interface ButtonProps {
  darkMode: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? "black" : "transparent")};
  color: ${(props) => (props.darkMode ? "white" : "black")};
  border: none;
  outline: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export default function DarkTheme() {
  const { toggleDarkMode, isDarkMode } = useThemeStore();

  return (
    <div>
      <Button darkMode={isDarkMode} onClick={toggleDarkMode}>
        <Icon src={MoonImage} alt="Moon" />
      </Button>
    </div>
  );
}
