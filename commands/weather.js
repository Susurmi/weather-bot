const { default: axios } = require('axios');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');
moment.locale('en');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('weather')
    .setDescription('shows the wather for a location.')
    .addStringOption((option) =>
      option
        .setName('city')
        .setDescription('which city do you want to know the weather of?')
        .setRequired(true)
    ),
  async execute(interaction) {
    function degToText(degree) {
      if (degree > 337.5) return 'Northerly';
      if (degree > 292.5) return 'North Westerly';
      if (degree > 247.5) return 'Westerly';
      if (degree > 202.5) return 'South Westerly';
      if (degree > 157.5) return 'Southerly';
      if (degree > 122.5) return 'South Easterly';
      if (degree > 67.5) return 'Easterly';
      if (degree > 22.5) {
        return 'North Easterly';
      }
      return 'Northerly';
    }
    const city = interaction.options.getString('city');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    axios({
      method: 'get',
      url: apiUrl,
    }).then(async (response) => {
      console.log(response.data);
      const embed = new EmbedBuilder()
        .setTitle(`Weather in ${response.data.name}`)
        .setColor('Random')
        .setThumbnail(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        )
        .addFields(
          {
            name: 'Degrees',
            value: `${Math.floor(response.data.main.temp)}°C`,
            inline: true,
          },
          {
            name: 'Weather',
            value: `${response.data.weather[0].main}`,
            inline: true,
          },
          {
            name: 'Humidity',
            value: `${response.data.main.humidity}%`,
            inline: true,
          }
        )
        .addFields(
          {
            name: 'Wind Speed',
            value: `${response.data.wind.speed} meter/sec`,
            inline: true,
          },
          {
            name: 'Wind Direction',
            value: `${degToText(response.data.wind.deg)}`,
            inline: true,
          },
          {
            name: 'Measured',
            value: `${moment
              .unix(response.data.dt)
              .utcOffset(+1)
              .format('dddd DD-MMMM-YYYY HH:mm')}`,
            inline: true,
          }
        );
      await interaction.reply({ embeds: [embed] });
    });
  },
};
