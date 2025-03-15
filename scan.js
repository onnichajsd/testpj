const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/scan/:ip', (req, res) => {
  const ip = req.params.ip;
  // เพิ่มตัวเลือก -Pn เพื่อข้ามการตรวจสอบ ping
  exec(`nmap -sV -Pn ${ip}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${stderr}`);
    } else {
      res.status(200).json({ result: stdout });
    }
  });
});


app.listen(port, 'localhost', () => {
  console.log(`Backend is running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
  res.send('Welcome to the IoT Threat Simulator');
});
