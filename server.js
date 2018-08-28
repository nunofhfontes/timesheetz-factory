//require express
const express = require('express');
//require file system
var fileSystem = require('fs');
//require mongoose for mongodb
const mongoose = require('mongoose');


//initialize express
const app = express();
const port = process.env.PORT || 8090;

//initialize db url
const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

/** connect to MongoDB datastore */
try {
    mongoose.connect(dbUrl, {
		//useMongoClient: true
	});
	console.log("Mongo DB is available");    
} catch (error) {
    console.log("Mongo DB not available");
}

// app.use(express.static(path.join(__dirname, "server")));

//routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//first page
app.get('/login', (req, res) => {
  fileSystem.readFile('./server/index.html', function(error, fileContent){
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

app.get('/login1', function (req, res) {
	res.sendFile(__dirname + '/server/index.html');
});

//Listening to requests
app.listen(port, () => console.log(`Listening on port ${port}`));
// app.listen(8090, () => console.log('Listening on port 8090'));