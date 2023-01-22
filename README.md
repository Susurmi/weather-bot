<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/susurmi/weather-bot">
    <img src="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Sunny-64.png" alt="Weather Bot Logo" width="80" height="80">
  </a>

<h3 align="center">Discord Weather Bot</h3>

  <p align="center">
    a simple discord bot to request and show the weather of a location provided by users.<br />
    feel free to use any parts of the code for you're own project.
    <br />
    <br />
    <a href="https://github.com/susurmi/weather-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/susurmi/weather-bot/issues">Request Feature</a>
  </p>
</div>

<!-- GETTING STARTED -->

<br><br>

## Getting Started

With the following steps you can set this bot up for yourself.

### Prerequisites

First up you need your own discord bot user. You can set one up on [Discord's Developer Portal](https://discord.com/developers/applications).<br>
You also need to have [NodeJS](https://nodejs.org/en/) (Version 16.19.0 and above) installed.<br>
As the last prerequisite go over to [OpenWeatherMap](https://openweathermap.org/) and signUp to get a free tier API Key.

### Installation

1. Clone the repo / or download the .zip file from this page.
   ```sh
   git clone https://github.com/Susurmi/weather-bot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file and put following credentials into it:

   ```env
   BOT_TOKEN=<DISCORD_BOT_TOKEN>
   CLIENT_ID=<DISCORD_BOT_APPLICATION_ID>
   GUILD_ID=<ID_OF_YOUR_GUILD>
   WEATHER_API_KEY=<OPEN_WEATHER_MAP_API_KEY>
   ```

4. Open a terminal in the bot folder and run:

   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Go into your discord server and type

```md
/weather
```

then type the city name of choice into the (required!) city text field.
<br>

![ScreenShot](https://raw.githubusercontent.com/susurmi/weather-bot/master/images/weather_embed.JPG)

after executing the command you should be seeing an embed with all the infos:
<br>

![ScreenShot](https://raw.githubusercontent.com/susurmi/weather-bot/master/images/weather_command.JPG)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/Susurmi/weather-bot/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/)
- [Discord](https://discord.com)
- [DiscordJS](https://discord.js.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Susurmi/weather-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/Susurmi/weather-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Susurmi/weather-bot.svg?style=for-the-badge
[forks-url]: https://github.com/Susurmi/weather-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/Susurmi/weather-bot.svg?style=for-the-badge
[stars-url]: https://github.com/Susurmi/weather-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/Susurmi/weather-bot.svg?style=for-the-badge
[issues-url]: https://github.com/Susurmi/weather-bot/issues
[license-shield]: https://img.shields.io/github/license/Susurmi/weather-bot.svg?style=for-the-badge
[license-url]: https://github.com/Susurmi/weather-bot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
