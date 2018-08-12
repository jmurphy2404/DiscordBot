const Discord = require('discord.js')
const config = require('./config.json');
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

client.login(config.token);

//set up prefixing, set up topic bot for search feature and discussion
