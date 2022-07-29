const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	data: new ContextMenuCommandBuilder()
	.setName('Unground User')
	.setType(ApplicationCommandType.User),
	async execute(interaction) {
		const user = interaction.targetUser;
		var title = `You're now Ungrounded! Enjoy!`

		const GoEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(`${user} is ungrounded 😃😃😃`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554289718136862/unknown.png')
		.setColor(0x0ACE00)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};
