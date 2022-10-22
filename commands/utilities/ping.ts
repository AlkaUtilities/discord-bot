import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Replies with \"pong!\""),
    execute(interaction:ChatInputCommandInteraction, client:Client) {
        interaction.reply({ content: "pong!", ephemeral:true });
    }
}