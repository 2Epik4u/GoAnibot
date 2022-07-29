const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ground')
		.setDescription('Ground STUPID people...')
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
		var title = `Sorry bro. You're grounded for ${string}!`
		if (!string) var title = `Sorry bro. You're grounded!`

		const GoEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(`${user} is grounded grounded grounded grounded grounded for infinity years. Now ${user} Go to your room right now!`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554130137452574/unknown.png')
		.setColor(0xF44336)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};
