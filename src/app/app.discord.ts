import * as dotenv from "dotenv";
dotenv.config();

import {
  ChatInputCommandInteraction,
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} from "discord.js";
import { when } from "../commands/command.when";
import { Command } from "../discord";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection<string, Command>();
client.commands.set(when.data.name, when);

client.on(
  Events.InteractionCreate,
  (interaction: ChatInputCommandInteraction) => {
    if (!interaction.isCommand) return;

    interaction.client.commands
      .get(interaction.commandName)
      .execute(interaction);
  }
);

export default client as Client;
