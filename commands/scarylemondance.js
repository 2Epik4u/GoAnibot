const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scarylemondance')
		.setDescription('Replies with SCARY LEMON WTF!!!'),
	async execute(interaction) {
		const GoEmbed = new EmbedBuilder()
		.setTitle('wtf?????????? so scary!!!!! 😭😭😭😭')
		.setImage('https://cdn.discordapp.com/attachments/799889523231555586/816681680382197770/static-assets-upload6072567890192608323.gif')
		.setDescription('ok')
		.setColor(0xFE0000)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};
