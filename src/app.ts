import * as dotenv from "dotenv";
dotenv.config();

import { Client, Events, GatewayIntentBits } from "discord.js";
import * as when from "./commands/when"

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

discordClient.once(Events.ClientReady, (client: Client) => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

discordClient.on(Events.InteractionCreate, when.execute);

discordClient.login(process.env.DISCORD_TOKEN);
