require("dotenv").config();
const when = require("./commands/when.js");

const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  interaction.reply("NOW");
});

client.login(process.env.DISCORD_TOKEN);
