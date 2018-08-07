var express = require('express');
var request = require('request');
var elasticsearch = require('elasticsearch');
var client = require('./elasticSearchConnection.js');
var app = express();

//vars for program flow
var stockQuotesWebsite = "https://www.alphavantage.co/query?";
var stockQuotesFunction = "";
var sotckQuotesSymbol = "";
var stockQuotesApiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=compact&apikey=1OT6J4YHUI0QOWB3";

//ping ElasticSearch
client.ping({
     requestTimeout: 30000,
 }, function(error) {
     if (error) {
         console.error('elasticsearch cluster is down!');
     } else {
         console.log('ElasticSearch is OK!!!');
     }
 });


client.cluster.health({},function(err,resp,status) {
   console.log("-- Client Health --",resp);
 });


//Get stock quotes for symbol X
request(stockQuotesApiUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Print the google web page.
    var apiResponse = body;
    console.log('typeof ----->> ',typeof apiResponse);
    console.log(apiResponse);
  }else{
    console.log("ERROR");
  }
})


//Server part that listens http requests
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   getQuoteData();

   console.log("Example app listening at http://%s:%s", host, port)
})

// listens http requests on http://localhost:8081/
app.get('/', function (req, res) {
   res.send('should send to stock quotes');
})

// REST endpoints
// get stock quotes for symbol X
// get stock quotes for all user's symbols
// get symbols
// add a symbol
// delete symbol



function getQuoteData(){


  console.log("managing quote data");
}
