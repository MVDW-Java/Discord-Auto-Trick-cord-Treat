//settings
const token = "YOUR_TOKEN_HERE";
const channels = ["CHANNEL_ID_HERE", "ANOTHER_CHANNEL_ID_HERE"];


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
	
	if(msg.embeds[0].description.includes("h!tricks")){
		msg.channel.send("h!tricks");
	} else if(msg.embeds[0].description.includes("h!treats")){
		msg.channel.send("h!treats");
	}

});

client.login(token);