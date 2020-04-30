 const axios = require('axios');
 const clima = require('./clima/clima');


 const argv = require('./node_modules/yargs/').options({
     direccion: {
         alias: 'd',
         desc: 'Direccion de la ciudad para obtener el clima',
         demand: true

     }

 }).argv;

 //  clima.getClima(8.990000, -79.519997)
 //      .then(console.log);


 const getInfo = async(direccion) => {


     try {

         const temp = await clima.getClima(8.990000, -79.519997);
         console.log(temp);
         const respfinal = `El clima de ${direccion} es de ${temp} grados`;
         return respfinal;

     } catch (e) {
         return `No se pudo determinar el clima `;
     }

 }

 getInfo(argv.direccion)
     .then(console.log)
     .catch(console.log);


 // lugar.getLugarLatLng(argv.direccion).them(console.log());
 //  instance.get()
 //      .then(resp => {
 //          console.log(resp.data);

 //      })
 //      .catch(err => {
 //          console.log('ERRORRRRR!!!', err)
 //      });

 axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
         headers: {
             'x-rapidapi-key': '59248e767cmsh69ab85ed94578dep18eadajsnea98f6b866b7'
         },
         params: {
             location: argv.direccion
         }
     })
     .then(function(response) {
         //  console.log(response.data.Results[0]);
         const data = response.data.Results[0];
         console.log(argv.direccion);
         console.log(data.lat);
         console.log(data.lon);
     })
     .catch(function(error) {
         console.log(error);
     })



 // const getInfo = (direccion) =>{


 // }


 //  console.log(argv.direccion);



 //  const direccion = data.name;
 //  const lat = data.lat;
 //  const lng = data.lon;