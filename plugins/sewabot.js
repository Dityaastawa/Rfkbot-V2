let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ 3 hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa (IM3): 085792429140 (+5.000)
Gopay: -
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '4 Minggu', description: "Rp15.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '3 Minggu', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: '2 Minggu', description: "Rp8.000\nSewa bot selama 3 hari.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
