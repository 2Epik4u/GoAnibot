const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eikdance')
		.setDescription('Replies with 2 EPIK 4 U!!! Dancing!'),
	async execute(interaction) {
		await interaction.reply('2 EPIK 4U!');
	},
};