const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args, Discord) => {
    const AdminEmbed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField(`**Admin**
    $addrole [user] [role] - Add a role to a user on your server, in order to assign a role the bot role must be above the other.
    $ban [user] [reason] - Ban a user from the server.
    $deletemsg [number] - Delete an amount of messages, the number must be between 2 and 100.
    $kick [user] [reason] - Kick a user from the server.
    $mute [user] [ms] - Mute a user for a specific amount of time, you have to create a new role called mute to make the command work.
    $removerole [user] [role] - Remove a role of a user.
    $setbotname [name] - Set a name for the bot.
    $setbotstatus [status] - Set bot status.`);
message.channel.send(AdminEmbed);     
}

