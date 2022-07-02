const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('epikdance')
		.setDescription('Replies with 2 EPIK 4 U!!! Dancing!'),
	async execute(interaction) {
		const GoEmbed = new MessageEmbed()
		.setTitle('Here is 2Epik4u Dancing!')
		.setImage('https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif')
		.setDescription('😎😎😎!')
		.setColor(0x1653C1)
		await interaction.reply({ embeds: [GoEmbed] });
	},
};