const apikey = "a65ac434702dde62ec733141face8c6c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        var data = await response.json();

        console.log(data)
    
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "https://cdn-icons-png.flaticon.com/512/414/414927.png?w=740&t=st=1690644843~exp=1690645443~hmac=f33f1f017fda36422b14a51eefd546eba3e55634dab229214e952edb1a67f95c"
        }
        else if(data.weather[0].main =="Clear"){
            weathericon.src = "https://cdn-icons-png.flaticon.com/512/1146/1146869.png?w=740&t=st=1690644886~exp=1690645486~hmac=e12a32ab7d2981b8787f709213c5135c46d7a2ae09b23b0f4a2960ecc34a5f13"
        }
        else if(data.weather[0].main =="Rain"){
            weathericon.src = "https://cdn-icons-png.flaticon.com/512/426/426824.png?w=740&t=st=1690644914~exp=1690645514~hmac=c39ed63892939bf4a2e5f7a1e935fd3c4d69fb6a93269723b1101005fafc36ef"
        }
        else if(data.weather[0].main =="Drizzle"){
            weathericon.src = "https://cdn-icons-png.flaticon.com/512/414/414936.png?w=740&t=st=1690644951~exp=1690645551~hmac=cd84fe10a052151e8851ce0ffcb34068f04479a4298f1a41bd86b96a47db92c7"
        }
        else if(data.weather[0].main =="Mist"){
            weathericon.src = "https://img.freepik.com/premium-vector/cloud-set-smoke-isolated-transparent-background_238578-151.jpg?w=740"
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display="none"
    }
   
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

