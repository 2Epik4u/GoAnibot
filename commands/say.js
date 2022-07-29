const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Make the bot say something!')
		.addStringOption(option => 
			option.setName('text')
				.setDescription('Text for the bot to say')
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('text');
		await interaction.reply({ content: string });
	}
};
