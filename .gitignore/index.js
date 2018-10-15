const Discord =  require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

var prefix = "/";


client.login("NTAxMDcyMTY4NzYzOTE2MzE5.DqUYww.dPzgyYahf0y9nO5NbM_jYAAEqRQ");


client.on("ready", () =>{
    client.user.setActivity("Merci à Hunter ")
console.log("Je suis prêt ")

});


client.on(`message`, message => {
    
    
    if (message.content === "ping"){
        message.channel.send("pong :ping_pong: ");
        console.log(`${message.author.username} à utilisé la commande ping`)
    }
