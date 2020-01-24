const axios = require("axios");

const getClima = async (lat, lng) => {

  const token = 'ce6137bfd8e183c2220779de247226ce';

 const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${token}&units=metric`  );

 return resp.data.main.temp;

};

module.exports = {
  getClima
};
