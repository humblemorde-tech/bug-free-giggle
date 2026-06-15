const axios = require("axios");
const fs = require("fs");
const path = require("path");

const getBuffer = async (url, options) => {
    try {
        options = options || {};
        const res = await axios({
            method: "get",
            url,
            headers: {
                "DNT": 1,
                "Upgrade-Insecure-Request": 1
            },
            ...options,
            responseType: "arraybuffer"
        });
        return res.data;
    } catch (e) {
        console.error(`Error fetching buffer from ${url}: ${e.message}`);
        return null;
    }
};

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 100000)}${ext}`;
};

const getMessageType = (msg) => {
    if (!msg || !msg.message) return null;
    return Object.keys(msg.message)[0];
};

const getMessageContent = (msg) => {
    const type = getMessageType(msg);
    switch (type) {
        case "conversation":
            return msg.message.conversation;
        case "extendedTextMessage":
            return msg.message.extendedTextMessage.text;
        case "imageMessage":
            return msg.message.imageMessage.caption;
        case "videoMessage":
            return msg.message.videoMessage.caption;
        default:
            return "";
    }
};

const isQuotedType = (msg, type) => {
    const messageType = getMessageType(msg);
    return messageType === "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.quotedMessage && Object.keys(msg.message.extendedTextMessage.contextInfo.quotedMessage)[0] === type;
};

const downloadMediaMessage = async (msg, type) => {
    const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
    try {
        const stream = await downloadContentFromMessage(msg, type);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    } catch (error) {
        console.error("Error downloading media:", error);
        return null;
    }
};

module.exports = {
    getBuffer,
    getRandom,
    getMessageType,
    getMessageContent,
    isQuotedType,
    downloadMediaMessage
};
  
