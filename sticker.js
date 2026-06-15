const { downloadMediaMessage, getRandom } = require("../lib/utils");
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

module.exports = {
    name: "sticker",
    description: "Converts an image or video to a sticker.",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid;
        const quotedMessage = msg.message.extendedTextMessage?.contextInfo?.quotedMessage;
        const isQuotedImage = quotedMessage?.imageMessage;
        const isQuotedVideo = quotedMessage?.videoMessage;
        const isImage = msg.message?.imageMessage;
        const isVideo = msg.message?.videoMessage;

        let mediaBuffer;
        let mediaType;

        if (isImage) {
            mediaBuffer = await downloadMediaMessage(msg.message.imageMessage, "image");
            mediaType = "image";
        } else if (isVideo) {
            mediaBuffer = await downloadMediaMessage(msg.message.videoMessage, "video");
            mediaType = "video";
        } else if (isQuotedImage) {
            mediaBuffer = await downloadMediaMessage(quotedMessage.imageMessage, "image");
            mediaType = "image";
        } else if (isQuotedVideo) {
            mediaBuffer = await downloadMediaMessage(quotedMessage.videoMessage, "video");
            mediaType = "video";
        }

        if (mediaBuffer) {
            const tempDir = path.join(__dirname, "..", "temp");
            if (!fs.existsSync(tempDir)) {
                fs.mkdirSync(tempDir);
            }

            const inputFileName = getRandom(".tmp");
            const inputFilePath = path.join(tempDir, inputFileName);
            fs.writeFileSync(inputFilePath, mediaBuffer);

            const outputFileName = getRandom(".webp");
            const outputFilePath = path.join(tempDir, outputFileName);

            let ffmpegCommand;
            if (mediaType === "image") {
                ffmpegCommand = `ffmpeg -i ${inputFilePath} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${outputFilePath}`;
            } else if (mediaType === "video") {
                ffmpegCommand = `ffmpeg -i ${inputFilePath} -vcodec libwebp -filter:v fps=fps=10 -vf scale=512:512:force_original_aspect_ratio=decrease,format=yuva420p,pad=512:512:(ow-iw)/2:(oh-ih)/2[v0];[v0]scale=\'min(512,iw)\':min\'(512,ih)\' ${outputFilePath}`;
            }

            exec(ffmpegCommand, async (err) => {
                if (err) {
                    console.error("FFmpeg error:", err);
                    await sock.sendMessage(from, { text: "Failed to create sticker. Make sure FFmpeg is installed and the media is valid." });
                    // Cleanup temp files
                    fs.unlinkSync(inputFilePath);
                    return;
                }

                await sock.sendMessage(from, { 
                    sticker: fs.readFileSync(outputFilePath)
                });

                // Cleanup
                fs.unlinkSync(inputFilePath);
                fs.unlinkSync(outputFilePath);
            });
        } else {
            await sock.sendMessage(from, { text: "Please send or reply to an image/video with !sticker." });
        }
    }
};
              
