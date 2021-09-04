const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: false,
    description: 'make gotest dance if you want',
    minArgs: 0,
    expectedArgs: '0',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('gotest dancing.... kinda cringe ngl...').setImage('https://cdn.discordapp.com/attachments/733896428476432394/818553351783317524/gotest.gif').setDescription('gotest when finishes a new video').setColor(0xE26F00)

        if (message) {
            message.reply('', { embed, attachFiles })
        }

        return embed
    },
}