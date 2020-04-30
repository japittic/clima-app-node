const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=439d4b804bc8187953eb36d2a8c26a02`);

    return respuesta.data.main.temp;
}

module.exports = {

    getClima
}