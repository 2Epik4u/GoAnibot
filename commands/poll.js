const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const path = require('path');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('create a poll')
		.addStringOption(option => 
			option.setName('why')
				.setDescription('why are you making a poll')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('hours')
				.setDescription('how many hours should this poll last')
				.setMinValue(1)
				.setMaxValue(24)
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('why');
		const time = interaction.options.getInteger('hours');
		const GoEmbed = new EmbedBuilder()
		.setTitle(`POLL: ${string} -- Started by ${interaction.user}`)
		.setDescription(`Yes: 0\nNo: 0`);
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('yes')
					.setLabel('Yes')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('no')
					.setLabel('No')
					.setStyle(ButtonStyle.Primary),
			);
		await interaction.channel.send({ embeds: [GoEmbed], components: [row] });
		interaction.reply({ content: 'poll created', ephemeral: true })
		interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
			setTimeout(() => {
				const NewEmbed = new EmbedBuilder()
					.setTitle(`(ENDED) ${lastMessage.embeds[0].data.title}`)
					.setDescription(`${lastMessage.embeds[0].data.description}\nThis poll has ended.`);
				messages[0].edit({ embeds: [GoEmbed] })
				var pollsjson = JSON.parse(fs.readFileSync(path.join('../', 'polls.json')));
				delete pollsjson[messages[0].id];
				fs.writeFileSync(path.join('../', 'polls.json'), JSON.stringify(pollsjson));
			}, time*3600000)
		})
.catch(console.error);
	}
};
