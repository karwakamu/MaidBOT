require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cleaning = require('./cleaning');

client.login(process.env.bot_secret_token);

client.on('ready', () => {
	console.log("connected");	
	cleaning.startCycle(client);
})