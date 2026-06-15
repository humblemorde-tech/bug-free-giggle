const axios = require("axios");

module.exports = {
    name: "quote",
    description: "Fetches a random inspirational quote.",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        try {
            const response = await axios.get("https://api.quotable.io/random");
            const quote = response.data;
            await sock.sendMessage(from, { text: `"${quote.content}"\n\n— ${quote.author}` });
        } catch (error) {
            console.error("Error fetching quote:", error);
            await sock.sendMessage(from, { text: "Failed to fetch a quote at the moment." });
        }
    }
};
