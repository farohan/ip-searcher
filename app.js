//Created by Farohan

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

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const submit = document.getElementById('submit');
const result = document.getElementById('searched-ip');

function formHandler(event) {
    event.preventDefault();
}

searchForm.addEventListener('submit', formHandler);

function getIPData() {
    let addr = searchBar.value;
    let newURL = `http://ip-api.com/json/${addr}`;
    result.innerHTML = `<a href="${newURL}"> View Searched IP Address Data </a>`;
}

submit.addEventListener('click', getIPData);

//Thank you to the Ipify API and the IP-API!
