const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mjdance')
		.setDescription('Replies with pedophile I MEAN mj Dancing!'),
	async execute(interaction) {
		const GoEmbed = new EmbedBuilder()
		.setTitle('Woah is that MJ the spirit dancing')
		.setImage('https://media.discordapp.net/attachments/740797420744474734/791857031111901204/ezgif-5-3af8a77a80ce.gif')
		.setDescription('how does he dance so smooth 😳😳')
		.setColor(0xFC8C06)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};
