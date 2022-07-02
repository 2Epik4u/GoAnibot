const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gotestdance')
		.setDescription('Replies with Gotest Dancing!'),
	async execute(interaction) {
		await interaction.reply('go TEST!');
	},
};