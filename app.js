var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Sweet World!');
});

app.get('/getTerpelMiles', function(req, res){
    console.log(req.query.id);
	var name = req.query.id;
    // Query to the DataBase Relation or not relational
	
	
    if(name === "123")
    {
      res.send('Tienes 2400 Puntos');
    }
   else if(name === "456")
    {
      res.send('Tienes 5800 Puntos');
    }
    else
     {
       res.send('Tienes 100 Puntos');
     }
});

app.get('/getTerpelLineamientos', function(req, res){
    console.log(req.query.codLineamiento);
	var name = req.query.codLineamiento;
    // Query to the DataBase Relation or not relational
	
	
    if(name === "DATOS")
    {
      res.send('Todas las bases de datos deben ser Microsoft SQL Server');
    }
   else if(name === "SEGURIDAD")
    {
      res.send('Todos los servicios Web deben protegerse usando HTTPS con certificado EV');
    }
    else
     {
       res.send('Sin documentar el lineamiento');
     }
});


app.post('/IngresarPQR', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});





app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
