const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/scan/:ip', (req, res) => {
  const ip = req.params.ip;
  exec(`nmap -sV ${ip}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${stderr}`);
    } else {
      res.status(200).json({ result: stdout });
    }
  });
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
