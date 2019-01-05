const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready',function() {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Représente La Team Fraternel',
            type: "STREAMING",
            url: "https://twitch.tv/spykatra"
        }
    )} 
    console.log('Je suis pret !')   
})

bot.on('message', function (message){
    if (message.content === 'Facebook') {
        message.channel.send('**Lache un j´aime, https://www.facebook.com/lateamfraternels**')
    }
})

bot.login('NTI4Njg0NzQwMjQ1NzE3MDAy.DxGknA.ihaV4X3yIqvL4_-ONUQhXGiA1RA')
