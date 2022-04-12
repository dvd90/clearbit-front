import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, dataSet] = useState([]);
  const [domain, domainSet] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get('http://localhost:8000/companies');

      dataSet(data);
    }

    fetchMyAPI();
  }, []);

  function ListItem(item) {
    item = item.value;

    return (
      <li>
        <img src={item.logo} alt="BigCo Inc. logo" /> Name: {item.name}, Type:{' '}
        {item.type}
      </li>
    );
  }

  function NumberList(items) {
    const listItems = items.map((item) => (
      <a href={`/companies/${item.company_id}`}>
        <ListItem key={item.company_id.toString()} value={item} />
      </a>
    ));
    return <ul>{listItems}</ul>;
  }

  function handleChange(input) {
    domainSet(input.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      axios
        .post('http://localhost:8000/companies', { domain })
        .then(({ data }) => {
          console.log(data);
          axios.get('http://localhost:8000/companies').then(({ data }) => {
            dataSet(data);
          });

          dataSet(data);
        })
        .catch(() => {
          alert('Domain Not Fount');
        });
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={domain}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>{data && data.length && NumberList(data)}</div>
    </div>
  );
}

export default Home;
