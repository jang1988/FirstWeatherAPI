fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Kamenskoe&appid=d4ca7b13602aa807403d0ca2c7f303da'
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector('.package__name').textContent = data.name;
    document.querySelector('.package__price').innerHTML =
      Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.disclaimer').textContent =
      data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = 
    `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function () {
    // catch any errors
  });
