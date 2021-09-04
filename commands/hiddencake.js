const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: false,
    description: 'Find the hidden cake!',
    minArgs: 0,
    expectedArgs: '0',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('You found the hidden cake!!').setImage('https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png').setDescription('nice. but its not a real cake so dont eat it!').setColor(0x0092b0)

        if (message) {
            message.reply('', { embed, attachFiles })
        }

        return embed
    },
}
