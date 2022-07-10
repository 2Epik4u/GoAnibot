const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with CYANANIMATE Dancing!'),
	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle('CyanAnimate dancing very nice')
		.setImage('https://cdn.discordapp.com/attachments/740797420744474734/746522631926448168/cyan.gif')
		.setDescription('cyan more like tom from eddsworld')
		.setColor(0xFC8C06)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};