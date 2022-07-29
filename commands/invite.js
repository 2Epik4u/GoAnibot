const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require("discord.js")
const { exec } = require("child_process");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends a link to invite the bot to your server'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
					.addComponents(
					new ButtonBuilder()
						.setLabel('Click here to invite!')
						.setURL("https://discord.com/api/oauth2/authorize?client_id=628607192806981632&permissions=277025770496&scope=applications.commands%20bot")
						.setStyle(ButtonStyle.Link),
					);
		await interaction.reply({ components: [row] });
	}
};
