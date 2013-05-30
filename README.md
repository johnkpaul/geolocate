# geolocate

Use geolocation services to get lat long.  Currently only works on OSX Snow Leopard or greater, but I'd love contributions for other platforms.


```javascript

var geolocate = require('geolocate');
geolocate(function(latLong){
   var latitude = latLong[0];
   var longitude = latLong[1];
});

```

Thanks to https://github.com/robmathers/WhereAmI for the actual heavy lifting!
