import styled from "styled-components";
import { useThemeStore } from "./themeStore";
import axios from "axios";

function FlagsCard() {
  const getData = async () => {
    try {
      const responce = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responce.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getData();
  return <ContainerFlags>I am flag</ContainerFlags>;
}

export default FlagsCard;

const ContainerFlags = styled.div`
  padding: 23px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
