const Discord = require('discord.js')
const config = require('./config.json');
const client = new Discord.Client();


client.on('message', (msg) => {
	// 	reminderbot
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

	if (bool == true) {
		let convTime = time * timescale[unit];
		let reminderMsg = arr[3];
		const reminder = () => {
			msg.reply(`Here is your reminder after ${time}${unit}: ${reminderMsg}`);
		}
		setTimeout(reminder, convTime);
	}
	  const re2 = /^(?:#clap)/;
	let bool2 = re2.test(convMsg);
	let arr2 = convMsg.split(' ');
	let msgArr = [];
	let clapMsg = [];
	let finalMsg;
	arr2.forEach(function(word){msgArr.push(word)})
	if (bool2 == true ) {
    msgArr.splice(0,1)
		msgArr.forEach(function(word){clapMsg.push(word)})
		finalMsg = clapMsg.join('  ')
		msg.reply(finalMsg)
	}
});

client.login(config.token);

//set up prefixing, set up topic bot for search feature and discussion