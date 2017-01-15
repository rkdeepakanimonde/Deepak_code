var APPID ="c4fb67394c47233eb2aaaa907d861bae";
var temp;
var icon;
var loc;
var humidity;
var wind;
var direction;

function updatByZip(zip){
    var url ="http://api.openweathermap.org/data/2.5/weather?"+
        "zip="+zip+
        "&APPID"+APPID;
        sendRequest(url);
     
}

function sendRequest(url){
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather= {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.loc = data.name;
            weather.temp = data.main.temp;
            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

function update(weather){
    wind.innerHTML=weather.wind;
    temp.innerHTML=weather.temp;
    loc.innerHTML =weather.loc;
    humidity.innerHTML=weather.humidity;
    icon.src ="image/"+weather.icon+".png";
    
}


window.onload=function(){
    temp =document.getElementById('temp');
    loc  =document.getElementById('city');
    icon  =document.getElementById('icon');
    humidity =document.getElementById('humidity');
    wind  =document.getElementById('windSpeed');
    
    updatByZip(87710);   
}