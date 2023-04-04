const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e908b8841bmsh9aa852798777ca3p108c14jsnd9a560ebe8fa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getweather = (city)=>{ 
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((data)=>{
        console.log(data)

        Cloud_Pct.innerHTML = data.cloud_pct
        Feels_Like.innerHTML = data.feels_like
        Humidity.innerHTML = data.humidity
        Max_Temp.innerHTML = data.max_temp
        Min_Temp.innerHTML = data.min_temp
        // Sunrise.innerHTML = data.sunrise  
        // Sunset.innerHTML = data.sunset 
        Temp.innerHTML = data.temp
        Wind_Degrees.innerHTML = data.wind_degrees  
        Wind_Speed.innerHTML = data.wind_speed
    })
    .catch(err => console.error(err));
}


Submit.addEventListener('click',(a)=>{
    a.preventDefault()
    getweather(city.value)
})
getweather('City')

