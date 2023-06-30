import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../discord";

export const when: Command = {
  data: new SlashCommandBuilder()
    .setName("when")
    .setDescription("WHEN?")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("Name your upcoming event!")
        .setRequired(true)
    ),

  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!interaction.isChatInputCommand()) return;

    await interaction.deferReply({ ephemeral: true });

    const name = interaction.options.getString("name");

    await interaction.followUp({ content: "NOW", ephemeral: true });
  },
};
