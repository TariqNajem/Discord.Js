const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes a given channel",
    authorPermission: "ADMINISTRATOR",
    run: async(client, message, args) => {
        let reason = args.join(" ") || "بدون سبب"
        if(!message.channel.deletable) {
            return message.reply("لايمكن مسح هذا الشات")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("تم مسح الشات")
        .setDescription(reason)
        console.log(`Channel Nuke By : ${message.author.username }`);
        await newchannel.send(embed)
    }
}

//Nuke Chat - حذف المحادثة كاملة 