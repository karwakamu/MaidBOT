require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cleaning = require('./cleaning.js');
const jokes = require('./jokes.js');

client.login(process.env.bot_secret_token);

client.on('ready', () => {
	console.log("connected");
	cleaning.startCycle(client);
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    
    if (receivedMessage.content.startsWith(".")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == "joke") {
        jokes.tellJoke(client, receivedMessage, arguments)
    }
}