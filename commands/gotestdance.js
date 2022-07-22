const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gotestdance')
		.setDescription('Replies with Gotest Dancing!'),
	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle('GoTest344 Dancing')
		.setImage('https://cdn.discordapp.com/attachments/740797420744474734/747367509509799946/gotest.gif')
		.setDescription('nice.')
		.setColor(0xFF0000)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};