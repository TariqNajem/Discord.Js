module.exports = {
    name: "clear",
    aliases: ["clear"],
    description: "Deletes an amount of messages from a channel!",
    authorPermission: "MANAGE_MESSAGES",
    run: async(client, message, args) => {
        const amount = args[0]
        if(!amount) return message.reply("! عطني رقم ")
        if(isNaN(amount)) return message.reply("! لازم رقم ")
        if(parseInt(amount) > 99) return message.reply("! اعلي رقم 99")
        await message.channel.bulkDelete(parseInt(amount)+1)
        message.channel.send(`تم مسح ${amount} رسالة`)
        .then(m => m.delete({timeout:5000}))
        console.log(`Chat Cleared By: ${message.author.username }`);
    }
}


//Clear Chat - مسح المحادثة