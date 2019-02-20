module.exports.startCycle = startCycle;
const dayMillseconds = 1000 * 60 * 60 * 24;
var discordClient;

function startCycle(client) {
	discordClient = client;
	
	var time = initTime();	
	console.log("next clear in " + time);
		
    setTimeout(function () {
        clear();
        setInterval(function () {
            clear();
        }, dayMillseconds);
    }, time);
}

async function clear() {
	console.log("clearing");
    var LFGchannel = discordClient.channels.get("544552594757124119");
    var fetched;
    do {
        fetched = await LFGchannel.fetchMessages({ limit: 100 });
        LFGchannel.bulkDelete(fetched);
		console.log("deleted " + fetched.size + " messages");
    }
    while (fetched.size > 0);
}

function initTime() {
    var date = new Date();
	var time = (-date + date.setHours(5, 0, 0, 0));
    if(time < 0)
	{
		time = time + dayMillseconds;
	}
	return time;
}