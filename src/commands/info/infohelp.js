exports.run = (client, message, args, Discord) => {
    const ihembed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField(`**info**
    $adminhelp - Sends the help command for admins
    $gameshelp - Sends the help command for games
    $info - Info
    $help - Normal help command
    $infohelp - Sends this
    $musichelp - Sends the help command for music
    $randomstuffhelp - Sends the help command for random stuff
    $serverinfo - Sends the serverinfo
    $serverinvite - Creates an invite to the server.
    $uptime - The bot's uptime
    $userinfo - Sends information about a user`);
message.channel.send(ihembed);     
}

