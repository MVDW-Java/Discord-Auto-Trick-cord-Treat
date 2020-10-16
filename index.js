//settings
const token = "YOUR_TOKEN_HERE";
const channels = ["CHANNEL_ID_HERE", "ANOTHER_CHANNEL_ID_HERE"];
var delay = 0; //ms
const random_delay = true;
const delay_min = 1000; //ms (Only if random_delay is true)
const delay_max = 1000; //ms (Only if random_delay is true)


//bot stuff
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	if(!channels.includes(msg.channel.id)){
		return;
	}
	if(msg.author.id !== '755580145078632508'){
		return;
	}
	if(random_delay){
		delay = Math.floor(Math.random() * Math.floor(delay_max) + delay_min);
	}
	
	if(msg.embeds[0].description.includes("h!trick")){
		msg.channel.startTyping();
		setTimeout(AutoClaim, delay, 'trick');
	} else if(msg.embeds[0].description.includes("h!treat")){
		msg.channel.startTyping();
		setTimeout(AutoClaim, delay, 'treat');
	}
	function AutoClaim(type) {
		msg.channel.send("h!" + type);
		msg.channel.stopTyping();
	}
});

client.login(token);