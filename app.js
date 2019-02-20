const Discord = require('discord.js');
const client = new Discord.Client();
const cleaning = require('./cleaning');

bot_secret_token = "NTQ1OTUxNjYxNjcyMzY2MTEw.D07SUw.ViNptuZaqZigtvbit4fdDH9Gee8"
client.login(bot_secret_token)

//client.login(process.env.bot_secret_token);

client.on('ready', () => {
	console.log("connected");	
	cleaning.startCycle(client);
})