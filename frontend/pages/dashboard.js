import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>{role} Dashboard</h1>
      {role === 'Citizen' && (
        <div>
          <button onClick={() => router.push('/search')}>Case Search</button>
          <button onClick={() => router.push('/notebook')}>Notebook</button>
        </div>
      )}
      {role === 'Lawyer' && <p>Case Library, Evidence Upload, Drafting Assistant</p>}
      {role === 'Judge' && <p>Case Queue, Draft Judgment, Confidential Analysis</p>}
      {role === 'Court_Employee' && <p>Filing Upload, Docket Management, Blockchain Anchoring</p>}
    </div>
  );
}
