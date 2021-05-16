const googleResults = require(__dirname+'/../../../libs/google.js');
const fs = require('fs');

exports.run = (client, message, args) =>{
    const query = message.content.split(' ');

    try{
        fs.readFile(__dirname + '/../../../config/googleConfig.json', (err, data) => {  
            if (err) throw err;
            let apiKeyCX = JSON.parse(data);		
           
            const options = {
                q: query[1],
                apiKey: apiKeyCX.apiKey,
                cx: apiKeyCX.cx
            };		
            googleResults.runSample(options);
            var poem = fs.readFileSync(__dirname + '/../../../config/googleResults.json', 'utf8');
            
            message.channel.send(poem);
            
        });
    }

    catch(error){
        message.channel.send(`You did not provide the informations needed to make the google search work correctly`);
    }
}


 