const Discord = require('discord.js')
const client = new Discord.Client();

client.on('message', (msg) => {
	// if(msg == 'test'){
	// 	msg.reply('pong');
	const re = /^(?:#remind)/;
	let convMsg = msg.toString();
	let bool = re.test(convMsg);
	if (bool === true) {
		msg.reply('confirmed');
	}
});

client.login('NDc3OTkxNjkwNzkyMzM3NDA4.DlEMKg.BrKk6QL0QBkvZLYI1MOVOQu26_0');