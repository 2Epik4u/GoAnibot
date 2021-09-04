const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: false,
    description: 'help!!!',
    minArgs: 0,
    expectedArgs: '0',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('GoAnibot V2').setColor('RANDOM').setURL('https://discord.com/oauth2/authorize?client_id=628607192806981632&scope=bot&permissions=6041').setAuthor('GoAnibot', 'https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png', 'https://2epik4u.xyz').setDescription('Welcome to GoAnibot').addFields(
            { name: 'epikdance', value: 'Makes 2Epik4u Dance' },
            { name: 'mjdance', value: 'Shows MJ Dancing', inline: true },
            { name: 'hiddencake', value: 'Gives you a free hidden cake!', inline: true },
            { name: 'poggerdance', value: 'dancing pogger man O_O' },
            { name: 'lemondance', value: 'dancing lemon man O_O' },
            { name: 'ground', value: 'Ground people', inline: true },
            { name: 'hiddencake', value: 'Gives you a free hidden cake!', inline: true }
        ).addField('gotestdance', 'GoTest dancing', true).setTimestamp().setFooter('Made by 2Epik4u', 'https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png');


        if (message) {
            message.reply('', { embed })
        }

        return embed
    },
}