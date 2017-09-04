var Twit = require('twit');

var T = new Twit({
  consumer_key:         'PiCOkrDAuH6xPWFYcVpfzKeeJ',
  consumer_secret:      '016IYtUA8nLR57fWRz9YFuKVHER0WuyENRM3Hvk3OyYWTmpjQ9',
  access_token:         '825218879643406336-4QWOHM91GwESzQTQ6inJF3TKsnjXjSH',
  access_token_secret:  'qbef1NnzaHo2KURX1qKP14kyD4aLWP2oO8S9b9nmBR6ed',
});

setInterval(makeTweet, 1000*60);

makeTweet();
function makeTweet() {
	var strava = require('strava-v3');

	var getParams = {
		user_id: '825218879643406336',
		count: 1
	}

//T.get('statuses/user_timeline', getParams, getTweet);

	strava.athlete.listActivities({},function(err, payload, limits) {
		if(!err) {
			var tweet = {
				status: payload[0].name
			}	
			T.post('statuses/update', tweet, tweeted);
		}
		else {
    		console.log(err);

		}
		console.log('*****************************');
		for(var i = 0;i < payload.length; i++) {
			console.log(payload[i].name);
		}
		console.log('*****************************');

	});

	function tweeted(err, data, response) {
		if(err) {
			console.log("Error");
		}
	}

function getTweet(err, data, response) {
	console.log(data[0].text);
}

}
