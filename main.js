const Discord = require('discord.js')
const config = require('./config.json');
const client = new Discord.Client();


client.on('message', (msg) => {
	// if(msg == 'test'){
	// 	msg.reply('pong');
	const re = /^(?:#remind)/;
	let convMsg = msg.toString();
	let bool = re.test(convMsg);
	let arr = convMsg.split('/');
	let time = Number(arr[1]);
	let unit = arr[2];
	let timescale = {
		's': 1000,
		'm': 60000,
		'h': 3600000,
		'd': 86400000
	}
	let convTime = time * timescale[unit];
	let reminderMsg = arr[3];
	
	const reminder = () => {
		msg.reply(`Here is your reminder after ${time}${unit}: ${reminderMsg}`);
	}

	if (bool === true) {
		setTimeout(reminder, convTime);
	}
});

client.login(config.token);

//set up prefixing, set up topic bot for search feature and discussion