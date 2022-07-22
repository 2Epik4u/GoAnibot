const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

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
				.setDescription('Enter a reason')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const string = interaction.options.getString('reason');

		const GoEmbed = new MessageEmbed()
		.setTitle(`You're now Ungrounded for ${string}! Enjoy!`)
		.setDescription(`${user} is ungrounded 😃😃😃`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554289718136862/unknown.png')
		.setColor(0x0ACE00)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};