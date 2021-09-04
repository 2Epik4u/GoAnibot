const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: false,
    description: 'make mj dance (very epik moment)',
    minArgs: 0,
    expectedArgs: '0',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('Here is mj Dancing!').setImage('https://cdn.discordapp.com/attachments/723742491433500782/814524663597498368/60fpsmj-4x-RIFE.gif').setDescription('how dance to smooth?').setColor(0x1653C1)

        if (message) {
            message.reply('', { embed, attachFiles })
        }

        return embed
    },
}