import { useState, useEffect } from "react";
import axios from "axios";
import { useThemeStore } from "./themeStore";
import styled from "styled-components";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string[];
}

function FlagsCard() {
  const { darkMode } = useThemeStore();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData: Country[] = response.data;
        setCountries(countriesData);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <CardGrid>
      {countries.slice(0, 8).map((country: Country) => (
        <Card key={country.cca3} darkMode={darkMode}>
          <FlagImage src={country.flags.png} alt={country.name.common} />
          <InfoContainer>
            <h2>{country.name.common}</h2>
            <InfoText>
              Population: {country.population.toLocaleString()}
            </InfoText>
            <InfoText>Region: {country.region}</InfoText>
            <InfoText>Capital: {country.capital.join(", ")}</InfoText>
          </InfoContainer>
        </Card>
      ))}
    </CardGrid>
  );
}

export default FlagsCard;

const CardGrid = styled.div`
  display: grid;
  gap: 20px;
  width: 85%;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div<{ darkMode: boolean }>`
  width: 264px;
  height: 336px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${(props) => (props.darkMode ? "#333" : "#fff")};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const FlagImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 10px;
`;

const InfoText = styled.p`
  margin: 5px 0;
`;
