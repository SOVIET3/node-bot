const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "USER"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '!수종봇 병신') {
    return message.reply('너도 ?');
  }
  
  if(message.content == '!수종봇') {
    return message.reply('');
  }
 
  if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
   if(message.content == '!수종봇') {
    return message.reply('');
  }
  
  if(message.content == '!수종봇') {
    return message.reply('');
  }
 
  if(message.content == '!수종봇') {
    return message.reply('	Ｙｅｓ ｙｅｓ ｄｉｄ ｙｏｕ ｃａｌｌ ？(부르셨나요 ?)');
  }
 
  if(message.content == '!서버') {
    let img = 'https://discordapp.com/channels/718833869331365939/718833869331365942/736181244815081483';
    let embed = new Discord.RichEmbed()
      .setTitle('ＧＡＭＥ ＳＥＲＶＥＲ')
      .setURL('https://discordapp.com/channels/718833869331365939/718833869331365942/736181244815081483')
      .setAuthor('ＧＡＭＥ ＳＥＲＶＥＲ', img, 'https://discordapp.com/channels/718833869331365939/718833869331365942/736181244815081483')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('ＧＡＭＥ ＳＥＲＶＥＲ', img)

    message.channel.send(embed)
  } else if(message.content == '!HELP 수종봇') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!수종봇', desc: ''},
      {name: '서버', desc: '방 정보나옴'},
      {name: 'HELP 수종봇', desc: '지금보고있는거 나옴(help)'},
      {name: '!수종봇 병신', desc: '?'},
      {name: '', desc: ''},
      {name: '', desc: ''},  
      {name: '', desc: ''},
      {name: '', desc: ''},
      {name: '', desc: ''},
      {name: '', desc: ''},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 수종봇', helpImg)
      .setColor('#186de6')
      .setFooter(`수종봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('https://www.bing.com/images/search?view=detailV2&ccid=F34I1qGy&id=FAF589BD58F20CAE578F3C7354E907DD418FF6B5&thid=OIP.F34I1qGykn_-Odb82UGoFgHaEK&mediaurl=http%3a%2f%2fcs1.gtaall.com%2fscreenshots%2f4dc09%2f2015-09%2foriginal%2fc7307a46de5a3d3015696b1ec3ea20cd52df7844%2f297041-gta-sa-2015-09-30-22-05-15-371.jpg&exph=1080&expw=1920&q=gta&simid=608009803830788827&ck=1E5BBD4786D3EC9BB603B66CAEA5ECFA&selectedIndex=140');
    } else {
      return message.reply('https://www.bing.com/images/search?view=detailV2&ccid=F34I1qGy&id=FAF589BD58F20CAE578F3C7354E907DD418FF6B5&thid=OIP.F34I1qGykn_-Odb82UGoFgHaEK&mediaurl=http%3a%2f%2fcs1.gtaall.com%2fscreenshots%2f4dc09%2f2015-09%2foriginal%2fc7307a46de5a3d3015696b1ec3ea20cd52df7844%2f297041-gta-sa-2015-09-30-22-05-15-371.jpg&exph=1080&expw=1920&q=gta&simid=608009803830788827&ck=1E5BBD4786D3EC9BB603B66CAEA5ECFA&selectedIndex=140');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
       
