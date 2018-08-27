//require express
const express = require('express');

//initialize express
const app = express();
const port = process.env.PORT || 5000;

//routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//Listening to requests
app.listen(port, () => console.log(`Listening on port ${port}`));
