//require the Twilio module and create a REST client
var client = require('twilio')(process.env.twilio_sid, process.env.twilio_token);
// OR
// var client = require('twilio')
//var client = ('ACCOUNT_SID', 'AUTH_TOKEN');

//var client = require('twilio')
//var client = ('twilio_sid', 'twilio_token');

//Send an SMS text message
client.sendMessage({

    to:'+16507315606', // Any number Twilio can deliver to
    from: '+16506847030', // A number you bought from Twilio and can use for outbound communication
    body: 'word to your mothersss.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    } else {
      console.log(err);
    }
});
console.log('Finished')
