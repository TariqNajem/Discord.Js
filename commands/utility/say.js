const { RichEmbed } = require("discord.js");

  


module.exports = {
    name: "say",
    run: (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have permissions!");

     


        if (args.length < 0)
            return message.reply("WTF say something xD");


            
        
        if(message.author.id == "294782716971319298"){
          message.channel.send(args.join(" "));}
          else{message.channel.send(`only <@${294782716971319298n}> can use that!!`);}
            
            console.log(`say : ${message.author.username }`);
        }
    }

// give bot (text) to let him say it - إعطاء البوت محادثة ليرسلها