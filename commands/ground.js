const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ground')
		.setDescription('want to FUCK someone over? ground them and watch them cry.'),
	async execute(interaction) {
		await interaction.reply('SOON!');
	},
};