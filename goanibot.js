const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');
const token = require('./token.json');


client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(config.status), { type: 'PLAYING' }
})


client.on('message', message => {  
	if (message.content.toLowerCase().startsWith(config.prefix + "ragecookie")) {
		const GoEmbed = new MessageEmbed()	  
		.setTitle('this is what development looks like xdd')
		.setImage('https://cdn.discordapp.com/attachments/571483118062796822/765585880005869598/Screen_Shot_2020-09-10_at_3.52.37_PM.png')
		.setDescription('EGS DE TOTAL NOT RIP OFF')
		.setColor(0xFF0000)
		message.channel.send({ embeds: [GoEmbed] });
	}
  })





  // gotest dance
  client.on('message', message => {
	  
	  
	if (message.content.toLowerCase().startsWith(config.prefix + "gotestdance")) {
		const GoEmbed = new MessageEmbed()
		  .setTitle('GoTest344 Dancing')
		  .setImage('https://cdn.discordapp.com/attachments/740797420744474734/747367509509799946/gotest.gif')
		  .setDescription('nice.')
		  .setColor(0xFF0000)
		  message.channel.send({ embeds: [GoEmbed] });
	  }
	})
  
  client.on('message', message => {
	if (message.content.toLowerCase().startsWith(config.prefix + "hiddencake")) {
		const GoEmbed = new MessageEmbed()
		  .setTitle('You found the hidden cake!')
		  .setImage('https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png')
		  .setDescription('nice. but its not a real cake so dont eat it!')
		  .setColor(0x0092b0)
		  message.channel.send({ embeds: [GoEmbed] });
	  }
	})
  
	//epik dancing
	client.on('message', message => {
		if (message.content.toLowerCase().startsWith(config.prefix + "epikdance")) {
		const GoEmbed = new MessageEmbed()
		  .setTitle('Here is 2Epik4u Dancing!')
		  .setImage('https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif')
		  .setDescription('😎😎😎!')
		  .setColor(0x1653C1)
		  message.channel.send({ embeds: [GoEmbed] });
	  }
	})
	client.on('message', message => {
		if (message.content.toLowerCase().startsWith(config.prefix + "poggerdance")) {
			const GoEmbed = new MessageEmbed()
			.setTitle('Cushion Poggers Dancing!!!!')
			.setImage('https://cdn.discordapp.com/attachments/736381316039180350/783769510255001620/lemondance.gif')
			.setDescription('oh no hes not poggers')
			.setColor(0xFE0000)
		  message.channel.send(GoEmbed);
		}
	  })
  	client.on('message', message => {
		if (message.content.toLowerCase().startsWith(config.prefix + "lemondance")) {
			const GoEmbed = new MessageEmbed()
			.setTitle('wtf?????????? so scary!!!!! 😭😭😭😭')
			.setImage('https://cdn.discordapp.com/attachments/799889523231555586/816681680382197770/static-assets-upload6072567890192608323.gif')
			.setDescription('ok')
			.setColor(0xFE0000)
			message.channel.send({ embeds: [GoEmbed] });
		}
	  })
  
  
  //mj dancing
  client.on('message', message => {
	if (message.content.toLowerCase().startsWith(config.prefix + "mjdance")) {
		const GoEmbed = new MessageEmbed()
		  .setTitle('Woah is that MJ the spirit dancing')
		  .setImage('https://cdn.discordapp.com/attachments/723742491433500782/814524663597498368/60fpsmj-4x-RIFE.gif')
		  .setDescription('how does he dance so smooth 😳😳')
		  .setColor(0xFC8C06)
		  message.channel.send({ embeds: [GoEmbed] });
	  }
	})
  
  
  
	//cyan dance
	client.on('message', message => {
		if (message.content.toLowerCase().startsWith(config.prefix + "cyandance")) {
		const GoEmbed = new MessageEmbed()
		  .setTitle('CyanAnimate dancing very nice')
		  .setImage('https://cdn.discordapp.com/attachments/740797420744474734/746522631926448168/cyan.gif')
		  .setDescription('cyan more like tom from eddsworld')
		  .setColor(0xFC8C06)
		  message.channel.send({ embeds: [GoEmbed] });
	  }
	})
  
  



client.on('message', message => {
	if (message.content.toLowerCase().startsWith(config.prefix + "ground")) {
	if (message.author.bot) return;  
	  const user = message.mentions.users.first();
	  if (user) {
		const member = message.guild.member(user);
		if (member) {

		  message.channel.send(`${user.tag} is grounded grounded grounded grounded grounded for infinity years. Now ${user.tag} Go to your room right now! `).then(() => {

			
		  }).catch(err => {

			message.reply('i cant ground him');

			console.error(err);
		  });
		} else {
		
		  message.reply('That user isn\'t in this guild!');
		}
	
	  } else {
		message.reply('mention who you are grounding you cant ground nobody');
	  }
	}
  });
  
  client.on('message', message => {
	if (message.content.startsWith(config.prefix + "unground")) {
	const user = message.mentions.users.first();
	if (user) {
	  const member = message.guild.member(user);
	  if (member) {
		message.channel.send(`${user.tag} is ungrounded 😃😃😃`).then(() => {
		  
		}).catch(err => {

		  message.reply('I was unable to ground the member');

		  console.error(err);
		});
	  } else {
	  
		message.reply('That user isn\'t in this guild!');
	  }
  
	} else {
	  message.reply('mention who you are ungrounding you cant ground nobody');
	}
  }
});








//discord help command
client.on('message', message => {
		if (message.content.toLowerCase().startsWith(config.prefix + "help")) {
		const GoEmbed = new MessageEmbed()
		.setTitle('GoAnibot V2')
		.setColor('RANDOM')
		.setURL('https://discord.com/oauth2/authorize?client_id=628607192806981632&scope=bot&permissions=6041')
		.setDescription('Welcome to GoAnibot')
		.addFields(
			{ name: 'ga epikdance', value: 'Makes 2Epik4u Dance' },
			{ name: 'ga mjdance', value: 'Shows MJ Dancing', inline: true },
			{ name: 'ga hiddencake', value: 'Gives you a free hidden cake!', inline: true },
			{ name: 'ga poggerdance', value: 'dancing pogger man O_O' },
			{ name: 'ga lemondance', value: 'dancing lemon man O_O' },
			{ name: 'ga ground', value: 'Ground people', inline: true },
			{ name: 'ga hiddencake', value: 'Gives you a free hidden cake!', inline: true }
		)
		.addField('gotestdance', 'GoTest dancing', true)
		.setTimestamp()
	  // Send the embed to the same channel as the message
	  message.channel.send({ embeds: [GoEmbed] });

	}
  });





// respond if pinged
client.on('message', message => {	
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id)) {
        message.channel.send('prefix is "ga " with a space.');
    }
});
	 
// make bot say a thing
 client.on("message", async message => {
    if (message.author.bot) return;
	if (message.content.toLowerCase().startsWith(config.prefix + "say")) {		
        message.channel.send(message.content.slice(6, message.content.length));
    }
});
// bot token login
client.login(token.token)
