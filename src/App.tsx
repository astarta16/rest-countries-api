import FlagsCard from "./components/FlagsCard";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import styled from "styled-components";
import { useThemeStore } from "./components/themeStore";

const PageContainer = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#202C36" : "#FFF")};
  transition: background 0.3s;
  min-height: 100vh;
`;

function App() {
  const { darkMode } = useThemeStore();
  return (
    <PageContainer darkMode={darkMode}>
      <Header />
      <SearchFilter />
      <FlagsCard />
    </PageContainer>
  );
}

export default App;
