import React, { useState } from 'react';

function App() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState('');

  const handleScan = async () => {
    const response = await fetch(`http://<EC2_IP>:3000/scan/${ip}`);
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>IoT Threat Simulator</h1>
      <input 
        type="text" 
        value={ip} 
        onChange={(e) => setIp(e.target.value)} 
        placeholder="Enter IP to scan" 
      />
      <button onClick={handleScan}>Start Scan</button>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
