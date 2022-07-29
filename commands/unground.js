const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unground')
		.setDescription('Reward your users!')
		.addUserOption(option => 
			option.setName('user')
				.setDescription('Select a user')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('reason')
				.setDescription('Enter a reason')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const string = interaction.options.getString('reason');
		var title = `You're now Ungrounded for ${string}! Enjoy!`;
		if (!string) title = `You're now Ungrounded! Enjoy!`

		const GoEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(`${user} is ungrounded 😃😃😃`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554289718136862/unknown.png')
		.setColor(0x0ACE00)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};
