const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField("Commands",`**Admin commands:** $adminhelp\n\n**Games commands:** $gameshelp\n\n**Music commands:** $musichelp\n\n**Info commands:** $infohelp\n\n**RandomStuff commands:** $randomstuffhelp`);
message.channel.send(embed);     
}

