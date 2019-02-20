module.exports.tellJoke = tellJoke;
const jokesJSON = require('./jokes.json');
const amount = Object.keys(jokesJSON).length;

var discordClient;

function tellJoke(client, receivedMessage, arguments) {
	discordClient = client;
	var joke;
	var i = arguments[0];
	if(arguments.length > 0 && i <= amount && i >= 0)
	{
		joke = jokesJSON["joke"+ i];
	}
	else
	{
		joke = getRandomJoke();
	}
	
	receivedMessage.channel.send(joke.setup);
	receivedMessage.channel.send(joke.punchline);
}

function getRandomJoke() {
	var j = Math.floor(Math.random() * Math.floor(amount));
	return jokesJSON["joke"+ j];
}