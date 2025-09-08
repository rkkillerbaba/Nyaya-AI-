import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const searchCases = async () => {
    const res = await axios.get(`http://localhost:5000/api/cases/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Case Search</h1>
      <input placeholder="Search by title or ID" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={searchCases}>Search</button>
      <ul>
        {results.map(r => (
          <li key={r.id} onClick={() => router.push(`/case/${r.id}`)}>
            {r.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
