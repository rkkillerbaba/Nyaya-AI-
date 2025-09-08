import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Nyaya-AI</h1>
      <button onClick={() => router.push('/signup')}>Signup / Login</button>
    </div>
  );
}
