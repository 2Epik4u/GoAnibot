const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with pedophile I MEAN mj Dancing!'),
	async execute(interaction) {
		await interaction.reply('j!');
	},
};