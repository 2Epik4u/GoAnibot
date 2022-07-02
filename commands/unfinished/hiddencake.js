const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hiddencake')
		.setDescription('Replies with HIDDEN CAKE!'),
	async execute(interaction) {
		await interaction.reply('HIDDEN CAKE!');
	},
};