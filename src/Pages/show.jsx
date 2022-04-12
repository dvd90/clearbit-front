import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Show() {
  let { id } = useParams();
  const [data, dataSet] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get('http://localhost:8000/companies/' + id);

      dataSet(data);
    }
    fetchMyAPI();
  }, []);

  return (<div>
    {data && (<div>
       <img src={data.logo} alt="logo" />
      <h1>Name: {data.name}</h1>
      <h2>Domain: {data.domain}</h2>
      <h2>Description: {data.description}</h2>
      <h4>Type: {data.type}</h4>
      <p>Industry: {data.industry}</p>
      <p>Money Raised: {data.moneyRaised}</p>
      <p>Market Cap: {data.marketCap}</p>
      <p>Annual Revenue: {data.annualRevenue}</p>
      <p>Location: {data.location}</p>
      <p>numberOfEmployees: {data.numberOfEmployees}</p>
    </div>)}</div>
  );
}

export default Show;
