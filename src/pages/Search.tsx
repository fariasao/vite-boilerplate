// digitar o cep num input
// quando clicar botão fazer a busca na api
// mostrar o resultado num componente filho
import { SearchForm } from "../components/SearchForm";
import { useState } from "react";
import { Container, Title } from "../styles/SearchPage.style";

export const Search = () => {
  const [searchData, setSearchData] = useState({});
  const [cep, setCep] = useState("");

  function handleClick() {
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
      });
  }

  return (
    <Container>
      <Title>Search</Title>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleClick}>Buscar</button>
      <SearchForm SearchData={searchData} />

      {/* <SearchForm searchData={searchData} /> */}
    </Container>
  );
};
