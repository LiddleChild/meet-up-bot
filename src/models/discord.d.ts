import {
  ChatInputCommandInteraction,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

export type CommandExecuteFunction = (a: ChatInputCommandInteraction) => void;
export interface Command {
  data: SlashCommandBuilder;
  execute: CommandExecuteFunction;
}

export interface Event {
  name: string;
  once: boolean;
  execute: unknown;
}

declare module "discord.js" {
  export interface Client {
    commands: Collection<string, Command>;
  }
}
