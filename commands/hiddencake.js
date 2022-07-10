const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hiddencake')
		.setDescription('Replies with HIDDEN CAKE!'),
	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle('You found the hidden cake!')
		.setImage('https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png')
		.setDescription('nice. but its not a real cake so dont eat it!')
		.setColor(0x0092b0)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};