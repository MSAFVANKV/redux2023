const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/css',express.static(path.resolve(__dirname, "assets/css")));
app.use('/js',express.static(path.resolve(__dirname, "assets/js")));
// This allows you to access node_modules via /node_modules on your server.
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
