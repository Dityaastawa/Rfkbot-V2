let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://api.lolhuman.xyz/api/textprome2/wallgravity?apikey=bca5b104e231d4708ce6dfa8&text1=LoL&text2=Human`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Kakk`, m, false)
}
handler.help = ['wallgravity'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']

handler.command = /^(wallgravity)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
