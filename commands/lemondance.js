const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lemondance')
		.setDescription('Replies with cushion poggers lemon swag yolo Dancing!'),
	async execute(interaction) {
		const GoEmbed = new EmbedBuilder()
		.setTitle('Cushion Poggers Dancing!!!!')
		.setImage('https://cdn.discordapp.com/attachments/736381316039180350/783769510255001620/lemondance.gif')
		.setDescription('oh no hes not poggers')
		.setColor(0xFE0000)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};
