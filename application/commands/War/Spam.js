const config = {
    name: "spam",
    aliases: ["spam"],
    description: "Spam tung lồn đứa sủa dơ",
    usage: "/spam [mention]",
    cooldown: 3,
    permissions: [2],
    isAbsolute: false,
    isHidden: false,
    credits: "Nhật Ngáo",
    extra: {
        // will be saved in config.plugins.json
        extraProp: "This is an extra property"
    }
}

async function onCall({
    message,
    args,
    getLang,
    extra,
    data,
    userPermissions,
    prefix
}) {
    // Do something
    const mention = Object.keys(message.mentions)[0];
    var arraytag = [];
    var name = message.mentions[mention];
    arraytag.push({
        id: mention,
        tag: name
    })
   
    const Nhatvu = (data) => {
        message.send(data);
    }
    
    const str = `Địt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\nĐịt mẹ chúng mày , Nhật Cân Hết\n                            `;
   
    setInterval(() => {
      message.send(str)
    },2000)

}

export default {
    config,
    onCall
}