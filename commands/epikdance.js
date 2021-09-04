const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: false,
    description: 'make epik dance',
    minArgs: 0,
    expectedArgs: '0',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('Here is 2Epik4u Dancing!').setImage('https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif').setDescription('😎😎😎!').setColor(0x1653C1)

        if (message) {
            message.reply('', { embed, attachFiles })
        }

        return embed
    },
}