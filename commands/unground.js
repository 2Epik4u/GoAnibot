const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ground')
		.setDescription('regret grouding someone? just wanna undo it? then unground someone lol'),

	async execute(interaction) {
		const user = message.mentions.users.first();
		if (user) {
			const user = interaction.options.getUser('target');
		}
		if (member) {
			interaction.reply(`${user.tag} is ungrounded 😃😃😃`).then(() => {
			}).catch(err => {

				interaction.reply('I was unable to ground the member');
	  
				console.error(err);
			  });
			}
	},
};