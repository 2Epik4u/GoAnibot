const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with CYANANIMATE Dancing!'),
	async execute(interaction) {
		await interaction.reply('CYANANIMATE!');
	},
};