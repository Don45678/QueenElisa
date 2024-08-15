const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QUU5md2Y2cy02bxYHbqF1dyhHONRER3EkY4x0NmdjU2UHMtYUb5dURJFkNjEkaBJEbjJUTpwd=799364107329',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

 𝐕𝐈𝐒𝐇𝐀𝐋 𝐌𝐃`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: '', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐕𝐈𝐒𝐇𝐀𝐋 𝐌𝐃',
  OWNER_NAME: 'ᴍ ʀ  ᴠ ɪ ꜱ ʜ ᴀ ʟ',
  OWNER_NUMBER: '263710299896',
  SUDO: '263710299896',
  WORK_TYPE: 'public',
  WORK_MODE: 'all',
  TIME_ZONE: 'Asia/Karachi',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠɪꜱʜᴀʟ ᴍᴅ',
  STICKER_AUTHOR: 'ᴠɪꜱʜᴀʟ ᴍᴅ',
  STICKER_PACK: 'ᴍʀ ᴠɪꜱᴜᴀʟ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👨‍💻',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'audio', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'video', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      'BLOCK !!!'
  },
  BOT_RULES:
    "*⚖️ 𝚅𝙸𝚂𝙷𝙰𝙻 𝙼𝙳 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
