//Finding the IP address of the device

const ipAddress = document.getElementById('ip-address');

function getIP(json) {
    ipAddress.innerHTML = `Device IP address is ${json.ip}`;
}

//Geolocating the IP Address and other data

const ipData = document.getElementById('ip-data');
const url = 'http://ip-api.com/json/';

ipData.innerHTML = `<a href='${url}'> View IP Address Data </a>`;

//Search up IP Addresses

//Thanks to the Ipify API and the IP-API!
