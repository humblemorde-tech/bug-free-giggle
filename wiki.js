const axios = require("axios");

module.exports = {
    name: "wiki",
    description: "Searches Wikipedia for a summary of the given topic.",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        const query = args.join(" ");
        if (!query) return await sock.sendMessage(from, { text: "Please provide a topic to search for." });

        try {
            const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
            const summary = response.data.extract;
            await sock.sendMessage(from, { text: `*Wikipedia: ${response.data.title}*\n\n${summary}` });
        } catch (error) {
            console.error("Wikipedia error:", error);
            await sock.sendMessage(from, { text: "Could not find any information on that topic." });
        }
    }
};
              
