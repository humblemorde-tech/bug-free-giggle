const fs = require("fs");
const path = require("path");
const { prefix } = require("../config");

module.exports = {
    name: "menu",
    description: "Displays a list of all available commands.",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        const commandFiles = fs.readdirSync(path.join(__dirname)).filter(file => file.endsWith(".js"));
        
        let menuText = "*Available Commands:*\n\n";
        for (const file of commandFiles) {
            const command = require(`./${file}`);
            if (command.name && command.description) {
                menuText += `*${prefix}${command.name}*: ${command.description}\n`;
            }
        }
        menuText += "\n_More commands will be added soon!_\n";
        await sock.sendMessage(from, { text: menuText });
    }
};
