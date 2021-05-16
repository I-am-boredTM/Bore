exports.run = (client, message, args, Discord) => {
    const rsembed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField(`Random stuff
    $distance [latitude1] [longitude1] [latitude2] [longitude2] - Get the distance between the sets of coordinates
    $dogs - Find some cute dog pictures.
    $flipcoin - Flip a coin.
    $google [query] - Get 3 search queries from Google Custom Search, you need to provide in the json file called googleConfig, your Custom Search Api Key and your CX.
    $ping - Ping the bot.
    $randomcolor - Generates a random hex color with preview.
    $rolldice - Roll a dice.
    $setafk [status] - Set your status afk or notafk.
    $weather [location] - Get the forecast information for a location.`);
message.channel.send(rsembed);     
}

