document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault();

  const input = document.querySelector('#search-input').value;

  if (input) {
    clearInfo();
    showWarning('Carregando...');
    const results = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`,
    );
    const json = await results.json();

    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windDeg: json.wind.deg,
      });
    } else {
      clearInfo();
      showWarning('Não encontramos está localização.');
    }
  } else {
    clearInfo();
  }
});

function showInfo(json) {
  showWarning('');
  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.temp-info').innerHTML = `${json.temp} <sup>ºC</sup>`;
  document.querySelector('.vento-info').innerHTML =
    `${json.windSpeed} <span>km/h</span>`;
  document.querySelector('.vento-ponto').style.transform =
    `rotate(${json.windDeg - 90}deg)`;
  document
    .querySelector('.temp img')
    .setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`,
    );
  document.querySelector('.resultado').style.display = 'block';
}

function clearInfo() {
  showWarning('');
  document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}
