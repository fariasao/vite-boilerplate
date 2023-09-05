// digitar o cep num input
// quando clicar botão fazer a busca na api
// mostrar o resultado num componente filho
// cep
// rua
// cidade
// estado
import { useEffect, useState } from "react";

interface SearchDataProp {
  SearchData: SearchData;
}

export const SearchForm = ({ SearchData }: SearchDataProp) => {
  const [postalCode, setPostalCode] = useState(SearchData.cep || '');
  const [streetName, setStreetName] = useState(SearchData.street || '');
  const [neighborhoodName, setNeighborhoodName] = useState(
    SearchData.neighborhood || ''
  );
  const [cityName, setCityName] = useState(SearchData.city || '');
  const [uf, setUf] = useState(SearchData.state || '');
  

  useEffect(() => {
    setPostalCode(SearchData.cep);
    setStreetName(SearchData.street);
    setNeighborhoodName(SearchData.neighborhood);
    setCityName(SearchData.city);
    setUf(SearchData.state);
  }, [SearchData]);

  return (
    <div>
      <div>
        <p>CEP: {postalCode}</p>
        <p>Rua: {streetName}</p>
        <p>Bairro: {neighborhoodName}</p>
        <p>Cidade: {cityName}</p>
        <p>Estado: {uf}</p>
      </div>
    </div>
  );
};
