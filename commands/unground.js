const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unground')
		.setDescription('Reward your users!')
		.addUserOption(option => option.setName('target').setDescription('Select a user'))
		.addStringOption(option => option.setName('reason').setDescription('Enter a reason')),

	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle(`You're now Ungrounded! Enjoy!`)
		.setImage('https://cdn.discordapp.com/attachments/984665993580265496/995554289718136862/unknown.png')
		.setColor(0x0ACE00)
		await interaction.reply({ embeds: [GoEmbed] });
	}
};