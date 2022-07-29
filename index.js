const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, InteractionType, EmbedBuilder, ButtonStyle } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const config = require('./config.json');
const { token } = require('./token.json')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(config.status), { type: 'PLAYING' }
})

client.on('interactionCreate', async interaction => {
	if (interaction.type === InteractionType.ApplicationCommand) {

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}

	} else if (interaction.type === InteractionType.MessageComponent) {
		var pollsjson = await JSON.parse(fs.readFileSync('polls.json'))
		if (!pollsjson[`${interaction.message.id}`]) {
			pollsjson[`${interaction.message.id}`] = {
				'yesvoters': [],
				'novoters': []
			};
		}
		basestr = interaction.message.embeds[0].data.description
		var endindex = basestr.indexOf('\n')
		var yesamount = basestr.substring(5, endindex);
		var noamount = basestr.substring(endindex+4);
		switch (interaction.customId) {
			case 'yes':
				if (pollsjson[interaction.message.id]["yesvoters"].indexOf(`${interaction.user.id}`) != -1) {
					interaction.reply({ content: 'You already voted "yes"!', ephemeral: true })
					var dnc = true;
					break;
				}
				if (pollsjson[interaction.message.id]["novoters"].indexOf(`${interaction.user.id}`) != -1) {
					--noamount
					pollsjson[interaction.message.id]["novoters"].splice(pollsjson[interaction.message.id]["novoters"].indexOf(`${interaction.user.id}`), 1)
				}
				yesamount++
				pollsjson[interaction.message.id]["yesvoters"].push(`${interaction.user.id}`);
				break;
			case 'no':
				if (pollsjson[interaction.message.id]["novoters"].indexOf(`${interaction.user.id}`) != -1) {
					interaction.reply({ content: 'You already voted "no"!', ephemeral: true })
					var dnc = true;
					break;
				}
				if (pollsjson[interaction.message.id]["yesvoters"].indexOf(`${interaction.user.id}`) != -1) {
					--yesamount;
					pollsjson[interaction.message.id]["yesvoters"].splice(pollsjson[interaction.message.id]["yesvoters"].indexOf(`${interaction.user.id}`), 1)
				}
				noamount++
				pollsjson[interaction.message.id]["novoters"].push(`${interaction.user.id}`);
				break;
		}
		if (!dnc) {
			const GoEmbed = new EmbedBuilder()
			.setTitle(interaction.message.embeds[0].data.title)
			.setDescription(`Yes: ${yesamount}\nNo: ${noamount}`);
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
			await fs.writeFileSync('polls.json', JSON.stringify(pollsjson));
			await interaction.message.edit({ embeds: [GoEmbed], components: [row] })
			interaction.reply({ content: 'Voted "' + interaction.customId + '"', ephemeral: true })
		}
	} else {
		return;
	}
});

// bot token login
client.login(token)
