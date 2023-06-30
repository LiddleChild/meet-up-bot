import * as dotenv from "dotenv";
dotenv.config();

import {
  ChatInputCommandInteraction,
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} from "discord.js";
import { when } from "./commands/when";
import { Command } from "./models/discord";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection<string, Command>();
client.commands.set(when.data.name, when);

client.once(Events.ClientReady, (client: Client) => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(
  Events.InteractionCreate,
  (interaction: ChatInputCommandInteraction) => {
    if (!interaction.isCommand) return;

    interaction.client.commands
      .get(interaction.commandName)
      .execute(interaction);
  }
);

client.login(process.env.DISCORD_TOKEN);
