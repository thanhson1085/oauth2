var Server = require('koor').getServer();
var app = require('koor').getApp();
var logger = require('koor').getLogger();

var databaseUri = process.env.DATABASE_URI || process.env.MONGOLAB_URI;

var api = new Server({
    databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
    appId: process.env.APP_ID || 'myAppId',
    masterKey: process.env.MASTER_KEY || '',
    serverURL: process.env.SERVER_URL || 'http://localhost:1337'
});

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/koor';
app.use(mountPath, api);

var port = process.env.PORT || 1337;
app.listen(port, function() {
    logger.info('parse-server-example running on port ' + port + '.');
});
