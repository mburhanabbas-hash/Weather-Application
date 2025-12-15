// Weather Icon Mapping 
const iconMapping = {
    Clouds: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 20 20"><path fill="#fff" d="M11 7c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763S16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237s1.286-2.763 2.872-2.763h.062C7.139 8.561 8.535 7 11 7M8.392 4c1.456 0 2.726.828 3.353 2.045A6 6 0 0 0 11 6C8.61 6 6.868 7.307 6.246 9.286l-.062.214l-.046.187l-.165.03a3.73 3.73 0 0 0-2.716 2.258a2.622 2.622 0 0 1 1.2-4.856l.222-.005A3.77 3.77 0 0 1 8.392 4" stroke-width="0.5" stroke="#000"/></svg>`,
    Rain: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56"><path fill="#fff" d="M12.262 36.098h29.086c7.43 0 13.172-5.625 13.172-12.82c0-7.29-6-12.75-13.946-12.68c-3-6.047-8.507-9.54-15-9.54c-8.648 0-15.937 6.82-16.617 15.563c-4.547 1.242-7.477 5.063-7.477 9.68c0 5.812 4.36 9.797 10.782 9.797m19.265 11.226l3.047-5.273c.422-.727.188-1.547-.515-1.946c-.703-.421-1.5-.187-1.922.54l-3.094 5.32c-.375.68-.187 1.5.54 1.922a1.43 1.43 0 0 0 1.944-.563m5.438 6.703l6.914-12c.422-.703.21-1.5-.469-1.922c-.656-.398-1.5-.187-1.945.516l-6.867 11.953c-.399.727-.211 1.547.492 1.969c.68.375 1.476.164 1.875-.516m-24.094-6.68l3.047-5.273c.422-.726.211-1.547-.492-1.945c-.727-.422-1.524-.188-1.946.539l-3.07 5.32c-.398.68-.187 1.5.516 1.899a1.403 1.403 0 0 0 1.945-.54m5.438 6.704l6.937-12c.399-.703.188-1.5-.469-1.922a1.4 1.4 0 0 0-1.945.516l-6.89 11.953c-.399.726-.188 1.547.515 1.968c.68.375 1.477.164 1.852-.515"/></svg>`,
    Snow: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19V5M9.953 3L12 5l2.047-2M9.953 21L12 19l2.047 2m-8.251-5.5l12.408-7m.749-2.732L18.204 8.5L21 9.232M3 14.768l2.796.732l-.75 2.732M21 14.768l-2.796.732l.75 2.732M5.047 5.768L5.796 8.5L3 9.232M5.796 8.5l12.408 7"/></svg>`,
    Clear: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path color= "yellow" fill="yellow" fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"/></svg>`
}
const dayMappings = {
    1: "Monday",
    2: "Tudesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
// Utils functions
function extractTime(millisecond) {
    if (!millisecond) return "00:00";

    console.log('millisecond', new Date(millisecond).toISOString());

    const showTime = new Date(millisecond);
    return showTime.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

const locations = [
    {
        name: "Banglore",
        lat: 12.9629,
        lon: 77.5775
    },
    {
        name: "Skardu",
        lat: 35.3247,
        lon: 75.5510
    },
    {
        name: "Gilgit",
        lat: 35.9202,
        lon: 74.3080
    },
    {
        name: "Islamabad",
        lat: 33.6996,
        lon: 73.0362
    },
    {
        name: "Karachi",
        lat: 24.8607,
        lon: 67.0011
    },
]

function clearDataMapping() {
    document.getElementById('current-time').innerHTML = ''
    document.getElementById('city-name').innerHTML = ''
    document.getElementById('city-temp').innerHTML = ''
    document.getElementById('upcoming-weather').innerHTML = ''
    document.getElementById('forecast-cart').innerHTML = ''
    document.getElementById("left-ico-change").innerHTML = ''
    document.getElementById('weather-condition').innerHTML = ''
}

let defaultcitylat = locations[1].lat;
let defaultciytlon = locations[1].lon;

// console.log("first ::" , selectedLat , selectedLon)

let dataPromise = null

function fetchone(){

let apiUrl = `https://api.api-ninjas.com/v1/weatherforecast?lat=${defaultcitylat}&lon=${defaultciytlon}`;
fetch(apiUrl, {
    headers: {
        'X-Api-Key': 'V3X5zpmBS6MA4YqIjiZPFA==xVbCYFH1sg0qh4FW'
    },
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(data => {

        const timestamp = data[0].timestamp;
        const dateObject = new Date(timestamp);
        const localTime = dateObject.toLocaleTimeString();
        console.log(localTime);
        const customTime = dateObject.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        new Date().toLocaleTimeString()


        // Left Section Mapping 
        document.getElementById('current-time').innerHTML = customTime
        document.getElementById('city-name').innerHTML = `${[locations[1].name]}`
        document.getElementById('city-temp').innerHTML = `${data[0].temp}`;


        document.getElementById("left-ico-change").innerHTML = ` ${iconMapping[data[0].weather]}`
        document.getElementById('weather-condition').innerHTML = `<div>${weathercondition(data[0].weather)}</div>`
        function weathercondition(weather) {
            switch (weather) {
                case "Rain":
                    return `<h1> Raining </h1>`
                    break;
                case "Clouds":
                    return `<h1> Mostly Cloudy </h1>`
                    break;
                case "Clear":
                    return `<h1> Clear Weather </h1>`
                    break;
                default:
                    return `<h1> Snowing </h1>`
                    break;
            }
        }
        weathercondition(data[0].weather);
        const day = new Date()
        let today = day.getDay()
        // Right Section Weather Mapping 
        function getHourAndMinutes() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            return {
                hour: hours,
                minute: minutes
            };
        }

        const time = getHourAndMinutes();
        (`Hour: ${time.hour}, Minutes: ${time.minute}`);



        for (let i = 0; i < 5; i++) {
            document.getElementById('upcoming-weather').innerHTML += `
        <div class="card-inside">
            ${i == 0 ?
                    `<div class="svg-mini-container">
                ${iconMapping[data[i].weather]}
            </div>`: `<div>  _ </div>`
                }
            <span id = "times" style="color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${i == 0 ? "Now" : time.hour + ":" + time.minute}</span>
            <div class="svg-container">${iconMapping[data[i].weather]}</div>
            <span class="" style="font-size: 12px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-top: 10px;">
                ${data[i].temp}<sup>&degc</sup>
            </span>
        </div>
        `
            time.hour++ && time.minute
        }

        for (i = 0; i < 5; i++) {
            document.getElementById('forecast-cart').innerHTML += ` 
        <div class="Forecast-cart">
            <p class="" style="color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            ${dayMappings[today]}
            </p>
            ${iconMapping[data[i].weather]}
            <span
                style="font-size: 16px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data[i].max_temp}<sup>&degc</sup></span>
            <div id="progressBarContainer"
                style="width: 100px; height: 5px; background-color: #e0e0e0;  border-radius: 5px; overflow: hidden;">
                <div id="progressBar"
                    style="width: 0%; height: 100%; background-color: red; border-radius: 2px;"></div>
            </div>
            <span
                style="font-size: 16px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data[i].min_temp}<sup>&degc</sup></span>
        </div>`
            today++
            if (today === 8) {
                today = 1
            }
        }

        // ================================Updating Background Image =================================
        function changeBackground(weather) {
            const bodyElement = document.getElementById('back-imgs');
            const hoursforbackimg = new Date().getHours();
            const weathertextcolorchange = document.getElementsByClassName("weather-text")
            if (weather === "Rain") {
                bodyElement.style.backgroundImage = "url('./imgs/rainyy.webp')";
            } else if (weather === "Clouds") {
                bodyElement.style.backgroundImage = "url('./imgs/clouds_sky_weather_173001_1600x900.jpg')";
            } else if (weather === 'Clear' && hoursforbackimg >= 6 && hoursforbackimg < 18) {
                bodyElement.style.backgroundImage = "url(./imgs/Sunny-Day-HD-Background-Wallpaper-25962.jpg)";
                const statuselement = document.getElementById('weather-condition').textContent.style.color = "black"
            } else {
                bodyElement.style.backgroundImage = "url('default-background.jpg')";
            }
            bodyElement.style.backgroundRepeat = "no-repeat";
            bodyElement.style.backgroundSize = "cover";
        }
        changeBackground(data[0].weather)
    })
    // break;
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return dataPromise;

}
fetchone();



function citydataMapping() {


    const mydiv = document.getElementById("myDropdown");

    for (let i = 0; i < locations.length; i++) {
        const newSpan = document.createElement("span");
        newSpan.textContent = locations[i].name;
        newSpan.className = "newspan";
        mydiv.appendChild(newSpan);
        newSpan.onclick = () => {
            selectedLat = locations[i].lat;
            selectedLon = locations[i].lon;
            document.getElementById('city-name').innerHTML = locations[i].name;
            let updatedApiUrl = (`https://api.api-ninjas.com/v1/weatherforecast?lat=${selectedLat}&lon=${selectedLon}`)
            fetch(updatedApiUrl, {
                headers: {
                    'X-Api-Key': 'V3X5zpmBS6MA4YqIjiZPFA==xVbCYFH1sg0qh4FW'
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {

                    const timestamp = data[0].timestamp;
                    const dateObject = new Date(timestamp);
                    const localTime = dateObject.toLocaleTimeString();
                    console.log(localTime);
                    const customTime = dateObject.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    });

                    new Date().toLocaleTimeString()


                    // Left Section Mapping 
                    document.getElementById('current-time').innerHTML = customTime
                    document.getElementById('city-name').innerHTML = `${[locations[i].name]}`
                    document.getElementById('city-temp').innerHTML = `${data[0].temp}`;


                    document.getElementById("left-ico-change").innerHTML = ` ${iconMapping[data[0].weather]}`
                    document.getElementById('weather-condition').innerHTML = `<div>${weathercondition(data[0].weather)}</div>`
                    function weathercondition(weather) {
                        switch (weather) {
                            case "Rain":
                                return `<h1> Raining </h1>`
                                break;
                            case "Clouds":
                                return `<h1> Mostly Cloudy </h1>`
                                break;
                            case "Clear":
                                return `<h1> Clear Weather </h1>`
                                break;
                            default:
                                return `<h1> Snowing </h1>`
                                break;
                        }
                    }
                    weathercondition(data[0].weather);
                    const day = new Date()
                    let today = day.getDay()
                    // Right Section Weather Mapping 
                    function getHourAndMinutes() {
                        const now = new Date();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        return {
                            hour: hours,
                            minute: minutes
                        };
                    }

                    const time = getHourAndMinutes();
                    (`Hour: ${time.hour}, Minutes: ${time.minute}`);



                    for (let i = 0; i < 5; i++) {
                        document.getElementById('upcoming-weather').innerHTML += `
                    <div class="card-inside">
                        ${i == 0 ?
                                `<div class="svg-mini-container">
                            ${iconMapping[data[i].weather]}
                        </div>`: `<div>  _ </div>`
                            }
                        <span id = "times" style="color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${i == 0 ? "Now" : time.hour + ":" + time.minute}</span>
                        <div class="svg-container">${iconMapping[data[i].weather]}</div>
                        <span class="" style="font-size: 12px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-top: 10px;">
                            ${data[i].temp}<sup>&degc</sup>
                        </span>
                    </div>
                    `
                        time.hour++ && time.minute
                    }

                    for (i = 0; i < 5; i++) {
                        document.getElementById('forecast-cart').innerHTML += ` 
                    <div class="Forecast-cart">
                        <p class="" style="color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                        ${dayMappings[today]}
                        </p>
                        ${iconMapping[data[i].weather]}
                        <span
                            style="font-size: 16px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data[i].max_temp}<sup>&degc</sup></span>
                        <div id="progressBarContainer"
                            style="width: 100px; height: 5px; background-color: #e0e0e0;  border-radius: 5px; overflow: hidden;">
                            <div id="progressBar"
                                style="width: 0%; height: 100%; background-color: red; border-radius: 2px;"></div>
                        </div>
                        <span
                            style="font-size: 16px; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data[i].min_temp}<sup>&degc</sup></span>
                    </div>`
                        today++
                        if (today === 8) {
                            today = 1
                        }
                    }

                    // ================================Updating Background Image =================================
                    function changeBackground(weather) {
                        const bodyElement = document.getElementById('back-imgs');
                        const hoursforbackimg = new Date().getHours();
                        const weathertextcolorchange = document.getElementsByClassName("weather-text")
                        if (weather === "Rain") {
                            bodyElement.style.backgroundImage = "url('./imgs/rainyy.webp')";
                        } else if (weather === "Clouds") {
                            bodyElement.style.backgroundImage = "url('./imgs/clouds_sky_weather_173001_1600x900.jpg')";
                        } else if (weather === 'Clear' && hoursforbackimg >= 6 && hoursforbackimg < 18) {
                            bodyElement.style.backgroundImage = "url(./imgs/Sunny-Day-HD-Background-Wallpaper-25962.jpg)";
                            const statuselement = document.getElementById('weather-condition').textContent.style.color = "black"
                        } else {
                            bodyElement.style.backgroundImage = "url('default-background.jpg')";
                        }
                        bodyElement.style.backgroundRepeat = "no-repeat";
                        bodyElement.style.backgroundSize = "cover";
                    }
                    changeBackground(data[0].weather)
                })
            clearDataMapping()
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        };
    }
}
citydataMapping();



function updateProgressBar(percentage) {
    const progressBar = document.querySelectorAll('#progressBar');

    progressBar.forEach((item) => {
        item.style.width = "70%"
        item.style.backgroundColor = "red"
        item.style.transition = "3s"
    })

}
let currentProgress = 0;
const interval = setInterval(() => {
    if (currentProgress < 70) {
        currentProgress += 5;
        updateProgressBar(currentProgress);
    }
}, 200);


// ============================Right Card Sections ==========================

document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.blur-card');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('is-visible');
        }, index * 200);
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.blur-card-bottom');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('is-visible');
        }, index * 200);
    });
});

// =======================Search Bar DropDown===================

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('#searchInput')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


