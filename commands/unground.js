const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ground')
		.setDescription('regret grouding someone? just wanna undo it? then unground someone lol'),
	async execute(interaction) {
		await interaction.reply('UNGROUND!');
	},
};