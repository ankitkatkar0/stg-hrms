const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/"material-dashboard-angular'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/"material-dashboard-angular/index.html');
    res.sendFile(fullPath);
})
