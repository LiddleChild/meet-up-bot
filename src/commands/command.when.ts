import * as dotenv from "dotenv";
dotenv.config();

import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "../discord";
import { createEvent } from "../databases/db.event";

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
    const author = interaction.member.user.id;

    const eventId = await createEvent(name, author);
    const embedded = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("[ Click to complete event information! ]")
      .setDescription("Please complete within 15 minutes")
      .setURL(`http://${process.env.FRONTEND_ADDRESS}/create/${eventId}`);

    await interaction.followUp({
      ephemeral: true,
      embeds: [embedded],
    });
  },
};
