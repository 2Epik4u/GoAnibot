const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with SCARY LEMON WTF!!!'),
	async execute(interaction) {
		await interaction.reply('CYANAscaryNIMATE!');
	},
};