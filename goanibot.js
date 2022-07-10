const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');
const token = require('./token.json');

function simpleembed(title, img, desc, color, message) {
	const GoEmbed = new MessageEmbed()	  
	.setTitle(title)
	.setImage(img)
	.setDescription(desc)
	.setColor(color)
	message.channel.send({ embeds: [GoEmbed] });
}

client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(config.status), { type: 'PLAYING' }
})


client.on('messageCreate', message => {  
	if (message.author.bot) return;  
	if (message.content.includes("@here") || message.content.includes("@everyone")) return;
	if (!message.content.startsWith(config.prefix)) return;
	var msgarray = message.content.toLowerCase().split(" ");
	var cmd = msgarray[1];
	switch(cmd) {
		case 'ragecookie':
			simpleembed(
				'this is what development looks like xdd', 
				'https://cdn.discordapp.com/attachments/571483118062796822/765585880005869598/Screen_Shot_2020-09-10_at_3.52.37_PM.png',
				'EGS DE TOTAL NOT RIP OFF',
				0xFF0000,
				message
			)
			break;
		case 'gotestdance':
			simpleembed(
				'GoTest344 Dancing', 
				'https://cdn.discordapp.com/attachments/740797420744474734/747367509509799946/gotest.gif',
				'nice.',
				0xFF0000,
				message
			)
			break;
		case 'hiddencake':
			simpleembed(
				'You found the hidden cake!', 
				'https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png',
				'nice. but its not a real cake so dont eat it!',
				0x0092b0,
				message
			)
			break;
		case 'hiddencake':
			simpleembed(
				'You found the hidden cake!', 
				'https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png',
				'nice. but its not a real cake so dont eat it!',
				0x0092b0,
				message
			)
			break;
		case 'epikdance':
			simpleembed(
				'Here is 2Epik4u Dancing!', 
				'https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif',
				'😎😎😎!',
				0x1653C1,
				message
			)
			break;
		case 'poggerdance':
			simpleembed(
				'Cushion Poggers Dancing!!!!', 
				'https://cdn.discordapp.com/attachments/736381316039180350/783769510255001620/lemondance.gif',
				'oh no hes not poggers',
				0xFE0000,
				message
			)
			break;
		case 'lemondance':
			simpleembed(
				'wtf?????????? so scary!!!!! 😭😭😭😭', 
				'https://cdn.discordapp.com/attachments/736381316039180350/783769510255001620/lemondance.gif',
				'ok',
				0xFE0000,
				message
			)
			break;
		case 'mjdance':
			simpleembed(
				'Woah is that MJ the spirit dancing', 
				'https://cdn.discordapp.com/attachments/723742491433500782/814524663597498368/60fpsmj-4x-RIFE.gif',
				'how does he dance so smooth 😳😳',
				0xFC8C06,
				message
			)
			break;
		case 'cyandance':
			simpleembed(
				'Pedophile dancing very bad', 
				'https://cdn.discordapp.com/attachments/740797420744474734/746522631926448168/cyan.gif',
				'cyan more like have sex with children and kill them',
				0x0FF0FF,
				message
			)
			break;
		case 'ground':
			var user = message.mentions.users.first();
			if (user == message.author) return;
			if (!user) {
				message.reply('mention who you are grounding you cant ground nobody'); 
				return;
			}
			var getafter = message.content.split(" ").filter(a=> a != `${config.prefix.replace(/\s+/g, '')}` ).filter(b=> b != `ground` ).filter(c=> c != `<@${user.id}>` ).join(" ");
			if (getafter == "") {
				var title = `Sorry bro. You're grounded!`;
			} else {
				var title = `Sorry bro. You're grounded for ${getafter}!`;
			}
			simpleembed(
				title, 
				'https://cdn.discordapp.com/attachments/984665993580265496/995554130137452574/unknown.png',
				`<@${user.id}> is grounded grounded grounded grounded grounded for infinity years. Now <@${user.id}> Go to your room right now!`,
				0xF44336,
				message
			)
			break;
		case 'unground':
			var user = message.mentions.users.first();
			if (user == message.author) return;
			if (!user) {
				message.reply('mention who you are ungrounding you cant unground nobody'); 
				return;
			}
			var getafter = message.content.split(" ").filter(a=> a != `${config.prefix.replace(/\s+/g, '')}` ).filter(b=> b != `unground` ).filter(c=> c != `<@${user.id}>` ).join(" ");
			if (getafter == "") {
				var title = `You're now Ungrounded! Enjoy!`;
			} else {
				var title = `You're now Ungrounded for ${getafter}! Enjoy!`;
			}
			simpleembed(
				title, 
				'https://cdn.discordapp.com/attachments/984665993580265496/995554289718136862/unknown.png',
				`<@${user.id}> is ungrounded 😃😃😃`,
				0x0ACE00,
				message
			)
			break;
		case 'help':
			const GoEmbed = new MessageEmbed()
			.setTitle('GoAnibot V2.1.3')
			.setColor('RANDOM')
			.setDescription('Welcome to GoAnibot')
			.addFields(
				{ name: config.prefix + 'epikdance', value: 'Makes 2Epik4u Dance' },
				{ name: config.prefix + 'mjdance', value: 'Shows MJ Dancing', inline: true },
				{ name: config.prefix + 'hiddencake', value: 'Gives you a free hidden cake!', inline: true },
				{ name: config.prefix + 'poggerdance', value: 'dancing pogger man O_O' },
				{ name: config.prefix + 'lemondance', value: 'dancing lemon man O_O' },
				{ name: config.prefix + 'ground', value: 'Ground people', inline: true },
				{ name: config.prefix + 'hiddencake', value: 'Gives you a free hidden cake!', inline: true },
				{ name: config.prefix + 'gotestdance', value: 'GoTest dancing', inline: true }
			)
			message.reply({ embeds: [GoEmbed] });
			break;
		case 'say':
			var newmsg = message.content.split(" ").filter(a=> a != `${config.prefix.replace(/\s+/g, '')}`).filter(a=> a != `say`).join(" ");
			message.channel.send(newmsg);
			break;
		default:
			if (message.mentions.has(client.user.id)) {
				message.channel.send(`prefix is "${config.prefix}"`);
			}
			break;
	}
});
	
// bot token login
client.login(token.token)