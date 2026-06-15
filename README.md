# 🚀 WhatsApp Baileys Bot - The Ultimate Multi-Command Powerhouse 🚀

Welcome to the next generation of WhatsApp automation! This bot, built with the robust `@whiskeysockets/baileys` library, is packed with over 100 commands and designed for seamless integration and powerful functionality. Get ready to transform your WhatsApp experience! ✨

## 🌟 Features at a Glance

-   **Pairing Code Authentication**: Say goodbye to QR codes! Connect securely using an 8-digit pairing code. 📱
-   **Massive Command Library**: Explore over 100 diverse commands for utility, fun, group management, media, and more. 🛠️🎮🖼️
-   **Modular & Extensible**: Easily add your own commands thanks to its clean, modular architecture. 🧩
-   **Persistent Sessions**: Your connection stays active even after restarts, ensuring uninterrupted service. 🔄
-   **Advanced Media Processing**: Convert images and videos into WhatsApp stickers with ease (FFmpeg required). 📸➡️✨

## 📊 Interactive Pairing Dashboard

Experience a smooth and interactive pairing process. Click the button below to launch the dedicated pairing dashboard and link your WhatsApp account. 💫

[![PAIR BOT](https://img.shields.io/badge/PAIR%20BOT-667eea?style=for-the-badge&logo=whatsapp&logoColor=white)](./dashboard.html)

_Click the button above to open the interactive pairing dashboard in your browser._

## 🚀 Deploy Your Bot with Ease

Ready to get your bot online? Deploy it effortlessly to your favorite cloud platforms! Click one of the buttons below to get started. Remember to configure your repository and environment variables on the chosen platform. 🌐

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/YOUR_GITHUB_USERNAME/bug-free-giggle)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR_GITHUB_USERNAME/bug-free-giggle)

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/YOUR_GITHUB_USERNAME/bug-free-giggle)

_**Important**: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in the deployment links above after forking this repository._

## 💖 Support & Community - Follow Before You Deploy! 💖

Before deploying your bot, we kindly ask you to support the creator and join our community! Your engagement helps us grow and improve. Click the buttons below to connect! 👇

| Platform | Link |
| :------- | :--- |
| YouTube | [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@mordecaikiplangat?si=6olktnbb-r52fXvx) |
| WhatsApp Channel | [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029VbCvxDY3QxRwAtJ5XK0v) |
| Facebook | [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/Morde123) |
| TikTok | [![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@morde591?_r=1&_t=ZS-97E6BGJakVA) |

## 🛠️ Installation Guide

To get your bot up and running, follow these simple steps:

1.  **Clone the Repository**: Download all project files to your local machine.
2.  **Install Dependencies**:
    Navigate to the bot's root directory in your terminal and run:
    ```bash
    npm install
    ```
3.  **Install FFmpeg (Crucial for Sticker Commands)**:
    FFmpeg is a powerful tool required for converting media to stickers. Install it based on your OS:
    -   **Ubuntu/Debian**: `sudo apt update && sudo apt install ffmpeg`
    -   **macOS**: `brew install ffmpeg` (using Homebrew)
    -   **Windows**: Download from [ffmpeg.org](https://ffmpeg.org/download.html) and add it to your system's PATH.

## 🚀 How to Use

1.  **Start the Bot**:
    In your terminal, from the bot's root directory, execute:
    ```bash
    node index.js
    ```
2.  **Pairing**: Follow the on-screen instructions for pairing using the 8-digit code. Your phone number `0731070008` is pre-configured for this process. 🔒

## 📚 Commands Overview

With over 100 commands, your bot is ready for anything! Type `!menu` in your WhatsApp chat with the bot to see a dynamic, up-to-date list of all available commands. Here are some highlights:

-   **Utility**: `!ping`, `!menu`, `!help`, `!info`, `!owner`
-   **Fun**: `!joke`, `!quote`, `!fact`, `!8ball`, `!coinflip`
-   **Media & Tools**: `!sticker`, `!image <query>`, `!video <query>`, `!ytmp3 <url>`, `!ytmp4 <url>`
-   **Group Management**: `!kick <mention>`, `!add <number>`, `!promote <mention>`, `!demote <mention>`, `!tagall`
-   **Search**: `!google <query>`, `!bing <query>`, `!pinterest <query>`

## 📁 Project Structure

```
whatsapp-bot/
├── node_modules/             # Node.js dependencies
├── auth_info/                # Stores WhatsApp session data
├── commands/                 # Directory for all individual command files
│   ├── menu.js
│   ├── ping.js
│   ├── sticker.js
│   ├── quote.js
│   ├── wiki.js
│   └── ... (100+ command files)
├── lib/                      # Utility functions and helper modules
│   └── utils.js
├── config.js                 # Bot configuration (prefix, owner number, etc.)
├── index.js                  # Main bot entry point, connection, and message handler
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact dependency versions
├── README.md                 # This documentation file
└── dashboard.html            # Interactive pairing dashboard
```

## 📜 License

This project is proudly open-source under the MIT License. See the `LICENSE` file for full details. 📄
