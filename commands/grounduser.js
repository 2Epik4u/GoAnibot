const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	data: new ContextMenuCommandBuilder()
	.setName('Ground User')
	.setType(ApplicationCommandType.User),
	async execute(interaction) {
		const user = interaction.targetUser;
		var title = `Sorry bro. You're grounded!`

		const GoEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(`${user} is grounded grounded grounded grounded grounded for infinity years. Now ${user} Go to your room right now!`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554130137452574/unknown.png')
		.setColor(0xF44336)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};
