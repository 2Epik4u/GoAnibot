const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cyandance')
		.setDescription('Replies with pedophile I MEAN mj Dancing!'),
	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle('Woah is that MJ the spirit dancing')
		.setImage('https://cdn.discordapp.com/attachments/723742491433500782/814524663597498368/60fpsmj-4x-RIFE.gif')
		.setDescription('how does he dance so smooth 😳😳')
		.setColor(0xFC8C06)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};