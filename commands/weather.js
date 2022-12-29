const { default: axios } = require('axios');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

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
    const city = interaction.options.getString('city');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    axios({
      method: 'get',
      url: apiUrl,
    }).then(async (response) => {
      const embed = new EmbedBuilder()
        .setTitle(`Weather in ${response.data.name}`)
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
        .setImage(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
      await interaction.reply({ embeds: [embed] });
    });
  },
};
