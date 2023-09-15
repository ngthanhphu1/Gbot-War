var _0x5f99=["\x73\x70\x61\x6D","\x73\x70\x61\x6D\x20\x73\x70\x61\x6D\x20\x73\x70\x61\x6D","\x5B\x4E\u1ED9\x69\x20\x64\x75\x6E\x67\x5D","\x4E\x68\u1EAD\x74\x20\x4E\x67\xE1\x6F"];
const config={name:_0x5f99[0],description:_0x5f99[1],usage:_0x5f99[2],cooldown:3,permissions:[2],credits:_0x5f99[3]}

if (!global.spam) {
  global.spam = [];
}

async function onCall( {
  message, args
}) {
  const isStop = args[0]?.toLowerCase() === "stop";
  if (isStop) {
    const index = global.spam.indexOf(message.threadID);
    if (index > -1) {
      global.spam.splice(index, 1);
      return message.reply("Dừng gáy");
    } else {
      return message.reply("Chưa gáy");
    }
  } else {
    const spam_content = args.join(" ");

    if (spam_content.length === 0) {
      return message.reply("spam đê");
    }

    if (global.spam.indexOf(message.threadID) > -1) {
      return message.reply("Mày bị óc lồn à ?");
    } else {
      global.spam.push(message.threadID);
      while (global.spam.indexOf(message.threadID) > -1) {
        message.send(spam_content).catch(e => {
          console.error(e)
        });
        await new Promise(resolve => setTimeout(resolve, 2000)); // delay 3000 mili giÃ¢y = 3 giÃ¢y
      }
    }
  }
}

export default {
  config,
  onCall
}