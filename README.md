# 🌦️ App Clima

Aplicação web simples que exibe informações climáticas em tempo real, como temperatura e vento, a partir da cidade informada pelo usuário. Os dados são fornecidos pela [OpenWeather API](https://openweathermap.org/).

## 🚀 Funcionalidades

- Buscar clima por nome da cidade.
- Mostrar temperatura atual (°C).
- Exibir velocidade e direção do vento.
- Ícone representando o clima atual.
- Interface responsiva e centrada na tela.
- Feedback visual para carregamento e erros.

## 💡 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)
- [OpenWeatherMap API](https://openweathermap.org/current)

## 🔧 Como usar

1. Clone este repositório:

```bash
git clone https://github.com/peandrade/clima.git
```

2. Abra o arquivo `index.html` em seu navegador.

> **Nota:** Para utilizar sua própria chave da API:
- Acesse [OpenWeatherMap](https://openweathermap.org/api) e crie uma conta.
- Substitua a chave no arquivo `script.js`:
  ```js
  const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=SUA_API_KEY&units=metric&lang=pt_br`);
  ```

## 🛡️ Aviso

A chave da API está exposta no front-end por simplicidade. Em produção, recomenda-se esconder isso utilizando um back-end ou variável de ambiente segura.

## 👤 Autor

- Pedro Andrade - [@peandrade](https://github.com/peandrade)

---

🧊 Sinta-se à vontade para contribuir ou sugerir melhorias!
