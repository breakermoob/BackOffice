var express = require('express');
app = express();

app.use(express.static('dist'))

var port = 80;

app.listen(port, function(){
    console.log('server started '+ port);
});