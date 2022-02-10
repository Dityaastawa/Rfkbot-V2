let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
conn.sendFile(m.chat, global.API('bca5b104e231d4708ce6dfa8', '/attp', { file: '', text: teks }), 'attp.webp', '', m, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler
