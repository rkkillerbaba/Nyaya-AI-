import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [caseDetail, setCaseDetail] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/cases/${id}`).then(res => setCaseDetail(res.data));
    }
  }, [id]);

  if (!caseDetail) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{caseDetail.title}</h1>
      <p>{caseDetail.description}</p>
    </div>
  );
}
