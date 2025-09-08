import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('Citizen');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const requestOtp = async () => {
    await axios.post('http://localhost:5000/api/auth/request-otp', { aadhaar, mobile, role });
    alert('Mock OTP sent! Use 123456');
    setStep(2);
  };

  const verifyOtp = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { aadhaar, mobile, otp, role });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    window.location.href = `/dashboard?role=${res.data.role}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Signup / Login</h1>
      {step === 1 && (
        <div>
          {role === 'Citizen' ? (
            <input placeholder="Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value)} />
          ) : (
            <input placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
          )}
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option>Citizen</option>
            <option>Lawyer</option>
            <option>Judge</option>
            <option>Court_Employee</option>
          </select>
          <button onClick={requestOtp}>Request OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
}
