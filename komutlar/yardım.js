const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `c!banned = Dene ve Gör! \c!avatarım = Avatarınınızı Gösterir. \c!herkesebendençay = Herkese Çay Alırsınız. \c!koş = Koşarsınız. \c!çayiç = Çay İçersiniz. \!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \c!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \c!sunucuresmi = BOT Sunucunun Resmini Atar. \c!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \c!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \c!wwegif = wwegifi atar. \c!intihar-et = İntihar Edersin`)
  .addField("**Yetkili Komutları**", `c!ban = İstediğiniz Kişiyi Sunucudan Banlar. \c!kick  = İstediğiniz Kişiyi Sunucudan Atar. \c!unban = İstediğiniz Kişinin Yasağını Açar.  \c!oylama = Oylama Açar. \c!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \c!link-engelle [aç-kapat]= Link Paylaşılmasını Engeller \c!sunucu-kur= 15 Saniye İçinde Sunucu Kurar \c!küfür-engelle [aç-kapat]= Küfür Engeller `)
  .addField("**Ana Komutlar**", "c!yardım = BOT Komutlarını Atar. \c!bilgi = BOT Kendisi Hakkında Bilgi Verir. \c!ping = BOT Gecikme Süresini Söyler. \c!davet = BOT Davet Linkini Atar. \c!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **EZ?** ")
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
