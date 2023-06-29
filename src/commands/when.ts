import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("when")
  .setDescription("WHEN?");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  if (!interaction.isChatInputCommand()) return;

  interaction.reply("NOW");
}