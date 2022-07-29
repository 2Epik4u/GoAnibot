const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with PEDOPHILE i mean CyanAnimate Dancing!'),
	async execute(interaction) {
		const GoEmbed = new EmbedBuilder()
		.setTitle('CyanAnimate dancing very nice')
		.setImage('https://cdn.discordapp.com/attachments/740797420744474734/746522631926448168/cyan.gif')
		.setDescription('cyan more like tom from eddsworld')
		.setColor(0xFC8C06)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};
