const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Aktifkan CORS untuk semua origin
app.use(cors());

// Folder build (misalnya hasil dari Vue CLI)
const distPath = path.join(__dirname, 'public/dist');
app.use(express.static(distPath));

// Fallback route untuk SPA
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(3001, function () {
  console.log("✅ Server running on http://localhost:3001");
});
