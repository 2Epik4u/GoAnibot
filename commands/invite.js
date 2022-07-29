const { SlashCommandBuilder } = require('@discordjs/builders');
const { exec } = require("child_process");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends a link to invite the bot to your server'),
	async execute(interaction) {
		await interaction.reply({ content: 'https://discord.com/api/oauth2/authorize?client_id=628607192806981632&permissions=277025770496&scope=applications.commands%20bot' });
	}
};
