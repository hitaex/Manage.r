require('dotenv').config();
const {token} = process.env;
const {Client, Collection, GatewayIntentBits} = require('discord.js');
const {fs} = require('fs');
const client = Client({intents: GatewayIntentBits.Guilds});
client.commands = new Collection();
const functionFolder = fs.readdirSync('./src/functions');
for(const folder of functionFolder){
    const functionFiles = fs.readdirSync(`./src/functions/$(folder)`).filter(file => file.file.endsWith(".js"));
}