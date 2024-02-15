newFunction();

function newFunction() {
    module.exports = {
        name: "dm",
        run: async (client, message, args) => {
            if (!args[0])
                return message.channel.send("Please provide a user!");
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user)
                return message.channel.send("No user found.");
            const reason = args.slice(1).join(" ");
            if (!reason)
                return message.channel.send("Please provide a message!");
            try {
                await user.send(reason);
                return message.channel.send("sent");
            } catch {
                return message.channel.send("Can't DM");
            }
        }
    };
}


//Send Direct Message Only Owner can use This Command - إرسال رسالة خاصة  فقط المالك يقدر يستخدم هذا الكوماند