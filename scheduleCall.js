var cron = require('node-cron');
var stocks = require('./stockQuotes');

//'* * * * * *' - runs every second
//'*/5 * * * * *' - runs every 5 seconds
//'10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
//'0 * * * * *' - runs every minute
//'0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)

//configured to run every 5 seconds
var cronJob = cron.schedule('*/5 * * * * *', function(){
    // perform operation e.g. GET request http.get() etc.
    console.info('cron job running');
    //stocks.getData();
});
cronJob.start();
