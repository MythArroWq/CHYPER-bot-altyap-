const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`c!yardım eğlence\` = Eğlence ve Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`c!yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`c!yardım kullanıcı\` = Kullanıcı Komutlarını Listeler.  `)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setDescription(`:white_small_square: \`c!avatarım\` = Avatarınızı Gösterir. \n:white_small_square: \`c!ara155\` = Polisi Arar. \n:white_small_square: \`c!ascii\` = Ascii olarak yazarsınız. \n:white_small_square: \`c!herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`c!çayiç\` = Çay İçersiniz. \n:white_small_square: \`c!çayaşekerat\` = Çaya Şeker Atarsınız. \n:white_small_square: \`c!yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`c!wwegif\` = WWE Gifi Atar. \n:white_small_square: \`c!stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`c!çekiç\` = İstediginiz Kişiye Çekiç Atarsınız. \n:white_small_square: \`c!koş\` = Koşarsınız. \n:white_small_square: \`c!yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`c!simit\` = Simit Yersiniz.   \n:white_small_square: \`c!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`c!fbi\` = FBI Gifi Atar. \n:white_small_square: \`c!wasted\` = Profilinize Wasted Efekti Ekler. \n:white_small_square: \`c!söv\` = Söver.  `)
  message.channel.send(embed)
  }
  if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setDescription(` :white_small_square: \`c!otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`c!sayaç-ayarla\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`c!ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`c!unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \`c!küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`c!link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller.  \n:white_small_square: \`c!oylama\` = Oylama Yapar. \n:white_small_square: \`c!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`c!temizle\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`c!çekiliş\` = Çekiliş Yaparsınız. \n:white_small_square: \`c!sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. \n:white_small_square: \`c!kayıt-sistemi\` = Kayıt Sistemini Atar. `)
      return message.channel.send(embed);
}
   if (arg === 'kullanıcı' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setDescription(`:white_small_square: \`c!yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız. \n:white_small_square: \`c!sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`c!nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`c!yetkilerim\` = Yetkilerinizi Gösterir. \n:white_small_square: \`c!kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`c!ping\` = Botun Pingini Gösterir.  \n:white_small_square: \`c!sunucubilgi\` = Sunucu Hakkında Bilgi Verir. \n:white_small_square: \`c!afk [sebep]\` = AFK Olursunuz. `)   
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardým Menüsü',
  usage: 'yardım'
};
