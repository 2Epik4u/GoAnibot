const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lemondance')
		.setDescription('Replies with cushion poggers lemon swag yolo Dancing!'),
	async execute(interaction) {
		await interaction.reply('lemon!');
	},
};