const Discord = require('discord.js')
const client = new Discord.Client();

client.on('message', (msg) => {
	if(msg == 'ping'){
		msg.reply('pong');
	}	
});

client.login('NDc3OTkxNjkwNzkyMzM3NDA4.DlEMKg.BrKk6QL0QBkvZLYI1MOVOQu26_0');