const { Client, Collection } = require("discord.js");
const { token } = require("./token")
const {

  devs
} = require('./token');




const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();


["command","event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



var statuss = ["Dev By","Tariq"];
var secound = 2;
client.on("ready", () =>{
  var timeing = Math.floor(secound*1000);
  setInterval(function(){
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], {type: 'LISTENING'})
  }, timeing)

    // types: PLAYING - WATCHING - LISTENING - STREAMING - -  هادا كود الحالة المتغيرة كل شوي 


  // Display Bot status

}); 







client.on('message', async message => {

  if (message.content === 'devs') {
      let usr = message.mentions.users.first();
      
      message.channel.send(`My Developer is <@${devs}>`)

      

  }

  // Bot Developer

});









client.on('message', async message => {
  if (message.content == "hi") {message.channel.send("hello")}
  if (message.content == "how are you") {message.channel.send("fine thanks, how about you?")}
  if (message.content == "test") {message.channel.send("Ready")}
  if (message.content == "help") {message.channel.send("under development")}


// bot replay chat
})





// (


//  Send Direct Message (only when run bot 1 time ) - إرسال رسالة في الخاص فقط عند تشغيل البوت لمرة واحدة

// client.on('ready', () => {
//     console.log('Message sent DM')
  
  
//     client.users.fetch('294782716971319298').then((user) => {
//       user.send('hiiii')
//     })
//   })

// )




client.on("ready",()=> {

  console.log("=========> Bot online <=========")
  
  console.log("Bot online 24/7");
  });
  
  client.on('ready', () => {
      console.log(`Logged in as : ${client.user.tag}!`);
  
      console.log(`Servers : [ " ${client.guilds.cache.size} " ]`);
  
      console.log(`Users : [ " ${client.users.cache.size} " ]`);
  
      console.log(`Channels : [ " ${client.channels.cache.size} " ]`)
  });
  

client.login(token);

// Display in console who run the bot and how many (servers-users-channels) - عرض من شغل البوت في الكونسول و عرض عدد السيرفرات و المستخدمين و الرومات 