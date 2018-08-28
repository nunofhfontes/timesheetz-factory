//require express
const express = require('express');
//require file system
var fileSystem = require('fs');

//initialize express
const app = express();
const port = process.env.PORT || 5000;

//routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//first page
app.get('/login', (req, res) => {
  fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('Error');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(fileContent);
			res.end();
		}
	});
});

//Listening to requests
app.listen(port, () => console.log(`Listening on port ${port}`));
