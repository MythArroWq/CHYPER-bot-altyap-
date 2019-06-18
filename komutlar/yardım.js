const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `f!banned = Dene ve Gör! \f!avatarım = Avatarınınızı Gösterir. \f!herkesebendençay = Herkese Çay Ismarlarsınız. \f!koş = Koşarsınız. \f!çayiç = Çay İçersiniz. \f!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \f!sunucuresmi = BOT Sunucunun Resmini Atar. \f!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \f!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \f!wwegif = wwegifi atar. \f!intihar-et = İntihar Edersin`)
  .addField("**Yetkili Komutları**", `f!ban = İstediğiniz Kişiyi Sunucudan Banlar. \f!kick  = İstediğiniz Kişiyi Sunucudan Atar. \f!unban = İstediğiniz Kişinin Yasağını Açar.  \f!oylama = Oylama Açar. \f!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \f!link-engelle [aç-kapat]= Link Paylaşılmasını Engeller \f!sunucu-kur= 15 Saniye İçinde Sunucu Kurar \f!küfür-engelle [aç-kapat]= Küfür Engeller `)
  .addField("**Ana Komutlar**", "f!yardım = BOT Komutlarını Atar. \f!bilgi = BOT Kendisi Hakkında Bilgi Verir. \f!ping = BOT Gecikme Süresini Söyler. \f!davet = BOT Davet Linkini Atar. \f!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Yağız Amca** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
