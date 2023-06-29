import * as dotenv from "dotenv";
dotenv.config();

import { REST, Routes } from "discord.js";
import * as when from "./commands/when"

const commands = [when.data.toJSON()];

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.log(error);
  }
})();
