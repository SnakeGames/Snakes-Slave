const Discord = require("discord.js")
const Client  = new Discord.Client();
const prefix = "-"

Client.on('Ready', ()=>{
    console.log("The bot is online");
})

Client.on('message', (message)=>{
    if(-message.content.startsWith.apply(prefix)) return;
    if(message.author.bot) return;


    if(message.content.startsWith(prefix + "ip"))
        message.reply("Currently there is no IP for the server. We are working on the server!");

    if(message.content.startsWith(prefix + "help"))
        message.reply("The commands are (CHANGE THIS AFTER YOU MAKE THE BOT)");

    if(message.content.startsWith(prefix + "version"))
        message.reply("The server version is, 1.8.8 (1.8.9 also works)");

    if(message.content.startsWith(prefix + "apply"))
        message.author.send("Hello! Thank you for considering to apply, but unfortunatly the staff applications are closed. There will be an announcement when the staff applications are open! Good luck!");





})


Client.login("Njc5ODE3NTEyNTMxMDAxMzU5.Xk23bg.AkBlMlruanYlsczayC-eJLU7iJQ")
