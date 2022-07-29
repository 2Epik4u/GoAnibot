const { SlashCommandBuilder } = require('@discordjs/builders');
const { exec } = require("child_process");
const path = require('path');
const fs = require('fs');
const https = require('https')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('annoy')
		.setDescription('plays a sound on the computer of the person hosting the bot')
		.addAttachmentOption(option =>
			option.setName('sound')
				.setDescription('sound for the bot to play (MUST BE MP3)')),
	async execute(interaction) {
		const file = interaction.options.getAttachment('sound');
		if (file && !file.name.endsWith('.mp3')) return;
		var command = 'cvlc https://cdn.discordapp.com/attachments/950096176739385485/1002413527069364244/loud.mp3';
		if (file) {
			command = 'cvlc ' + file.url;
		}
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			console.log(`annoy used`)
			return;
		});
		interaction.reply({ content: 'ok' });
	}
};
