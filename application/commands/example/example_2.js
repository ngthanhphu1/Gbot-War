const config = {
    name: "example",
    aliases: ["ex"],
    description: "This is an example command",
    usage: "[query]",
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

async function onCall({ message, args, getLang, extra, data, userPermissions, prefix }) {

if (!mention) return message.send(`Vui lòng tag đứa muốn chửi`, message.threadID, message.messageID);
    const Nhatvu = (data) => {
        message.send(data);
    }

}

export default {
    config,
    onCall
}
