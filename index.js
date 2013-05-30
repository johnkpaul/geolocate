var sys = require('sys')
var exec = require('child_process').exec;

exports = module.exports = function geolocate(callback){

exec(__dirname + "/bin/whereami | head -n2 | sed 's/Latitude: //' | sed 's/Longitude: //'", function (error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error);
  }

  //calls callback with [LAT, LONG]
  callback(stdout.split('\n').map(parseFloat).splice(0,2));
}); 
}
