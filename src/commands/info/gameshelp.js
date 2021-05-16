const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args, Discord) => {
    const ghembed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField(`**Games**
    $csgo [MySteamID] - Get csgo stats for a user given by STEAMID64.
    $csgofloat [inspect Url] - Get informations about a skin or a weapon.
    $lolcprot - Display the current champion rotation in EU West.
    $loltopfive [SummonerID] - Display the top 5 played champions of a summoner, based on the SummonerID. You can find your SummonerID at http://www.lolking.net/
    Info
    $help or $help [commandName] - Display the list of commands if you just type $help or if you type $help commandName display the current command info.
    $serverinfo - Get server info.
    $serverinvite [ChannelID] - Get an invite for the server, but you must type the channelID to get the command work.
    $uptime - Get bot uptime.
    $userinfo - Get your user info.`);
message.channel.send(ghembed);     
}

