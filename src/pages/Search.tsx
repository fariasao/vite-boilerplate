// digitar o cep num input
// quando clicar botão fazer a busca na api
// mostrar o resultado num componente filho
import { SearchForm } from "../components/SearchForm";
import { useState } from "react";

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

  // useEffect(() => {
  //   fetch(`https://brasilapi.com.br/api/cep/v2/${cep}}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setSearchData(data);
  //     });
  // }, [cep]);

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleClick}>Buscar</button>
      <SearchForm SearchData={searchData} />

      {/* <SearchForm searchData={searchData} /> */}
    </div>
  );
};
