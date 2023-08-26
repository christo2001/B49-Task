document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.classList.add("container");
  
    // title name 
    const title = document.createElement("h1");
    title.id = "title";
    title.classList.add("text-center");
    title.textContent = "Country Details";
  
    container.appendChild(title);
  
    // Create a row div
    const row = document.createElement("div");
    row.classList.add("row");
  



    //fetch api
    const apiurl = "https://restcountries.com/v3.1/all";
  
    fetch(apiurl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((countries) => {
        // Loop to create cards for each country
        for (var i = 8; i < 11; i++) {
          //adding col and its classes
          const column = document.createElement("div");
          column.classList.add("col-lg-4", "col-sm-12");
  
          // creating a card with bootstrap classes
          const card = document.createElement("div");
          card.classList.add("card");
  
          const cardHeader = document.createElement("div");
          cardHeader.classList.add("card-header");
  
          const cardImage = document.createElement("img");
          cardImage.classList.add("card-img-top");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const cardText = document.createElement("div");
          cardText.classList.add("card-text");
  
          cardBody.appendChild(cardText);
         
        //crating a button to display weather in the console
          
          const country = countries[i];
          var lat = country.latlng[0];
          var long = country.latlng[1];
          
          const anchor = document.createElement("a");
          const button = document.createElement("button");
          
          button.classList.add("btn", "btn-primary");
          button.textContent = "Click to check weather"; 
          
          // Attach lat and long as custom attributes to the button
          button.setAttribute("data-lat", lat);
          button.setAttribute("data-long", long);
          
          anchor.appendChild(button); 
          cardBody.appendChild(anchor);
          
          anchor.onclick = (event) => {
            const clickedButton = event.currentTarget.querySelector("button");
            const clickedLat = clickedButton.getAttribute("data-lat");
            const clickedLong = clickedButton.getAttribute("data-long");
            
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${clickedLat}&lon=${clickedLong}&appid=a65ac434702dde62ec733141face8c6c`;
          
            // Make an API request for weather
            fetch(url)
              .then(response => response.json())
              .then(data => {
                // Log weather data to the console
                console.log("Weather Data:", data);
              })
              .catch(error => {
                console.error('Error fetching weather data:', error);
              });
          };
          

          
          
          


          //adding images to the card
          cardHeader.textContent = country.name.common;
          cardImage.src = country.flags.png;
  
          // Add more details as needed
          const details = [
            `Region: ${country.region}`,
            `Capital: ${country.capital}`,
            `Population: ${country.population}`,
            `country code:${country.fifa}`
          ];
  
          details.forEach((detail) => {
            const detailParagraph = document.createElement("p");
            detailParagraph.textContent = detail;
            cardText.appendChild(detailParagraph);
          });
  
          card.appendChild(cardHeader);
          card.appendChild(cardImage);
          card.appendChild(cardBody);
  
          column.appendChild(card);
          row.appendChild(column);
        }
  
        container.appendChild(row);
        document.body.appendChild(container);
      })
      .catch((err) => {
        console.log("error", err);
      });
  });
  