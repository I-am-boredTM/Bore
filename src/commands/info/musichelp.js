exports.run = (client, message, args, Discord) => {
            const membed = new Discord.MessageEmbed()
            .setColor("#FF4500")
            .addField(`**Music**
            $deletetrack [PositionNumberInQueue] - Delete a song from the queue, if you want know your current queue, just type $queue and you will get the songs.
            $joinchannel - Make the bot join in a voice channel, you must be in a voice channel.
            $nowplaying - Show the currently playing song.
            $pause - Pause the currently playing song.
            $resume - Resume the currently playing song.
            $playother [StreamUrl] - Play a stream url.
            $playtube [youtubeUrl] - Play an youtube video.
            $queue - List the songs in queue.
            $skip - Skip the current playing song.
            $stop - The bot leaves the voice channel.
            $volume [Number] - Set bot volume in the voice channel, you must type a number between 0-200.
            $ytsearch [SongName] hit enter then type a number - Search for a song on youtube, then type a number between 1-20 (or less).`);
        message.channel.send(membed);     
        }
        
        