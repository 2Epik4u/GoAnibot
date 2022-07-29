const { SlashCommandBuilder } = require('@discordjs/builders');
const { exec } = require("child_process");
const path = require('path');
const fs = require('fs');
const https = require('https')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('annoy')
		.setDescription('Plays a sound on the computer of the person hosting the bot')
		.addAttachmentOption(option =>
			option.setName('sound')
<<<<<<< HEAD
				.setDescription('Sound for the bot to play (MUST BE MP3)')),
=======
				.setDescription('sound for the bot to play')),
>>>>>>> 521ba98 (3.2 + i don't need nitpick shit epik)
	async execute(interaction) {
		interaction.reply({ content: 'ok' });
		const file = interaction.options.getAttachment('sound');
		var command = 'vlc https://cdn.discordapp.com/attachments/950096176739385485/1002413527069364244/loud.mp3';
		if (file) {
			command = 'vlc ' + file.url;
		}
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			console.log(`annoy used`)
			return;
		});
	}
};
