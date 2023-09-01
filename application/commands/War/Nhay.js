const config = {
    name: "Nhây",
    aliases: ["nhây"],
    description: "Nhây với mấy đứa xúc vật",
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

async function onCall({
    message,
    args,
    getLang,
    extra,
    data,
    userPermissions,
    prefix
}) {
    const mention = Object.keys(message.mentions)[0];
    var arraytag = [];
    var name = message.mentions[mention];
    arraytag.push({
        id: mention,
        tag: name
    });
    const Nhatvu = (data) => {
        message.send(data);
    }

    Nhatvu("Code bởi Nhật Ngáo\n Mọi chi tiết vui lòng liên hệ: https://www.facebook.com/vuminhnhat10092003");
    if (mention) {
        const NhatvuMention = (msg) => {
            Nhatvu({
                body: msg + name,
                mentions: arraytag
            })
        }
        setTimeout(() => {
            setInterval(() => {
                setTimeout(() => {
                    NhatvuMention("VÔ DANH SỐNG DƯỚI ĐÁY XÃ HỘI LÊN ĐÂY ĐÚ ỬA VỚI MÁ HẢ CON CHÓ !!! ");
                }, 3000);
                setTimeout(() => {
                    NhatvuMention("CON RANH NGOI LÊN ĐÂY SỦA VỚI MÁ NÈ ");
                }, 4500);
                setTimeout(() => {
                    NhatvuMention("NGHÈO MÀ RA DẺ VỚI TAO À ? ");
                }, 6000);
                setTimeout(() => {
                    NhatvuMention("Gà mà xạo lồn với tao à ? ");
                }, 7500);
                setTimeout(() => {
                    NhatvuMention("CON NGU LỒN");
                }, 9000);
                setTimeout(() => {
                    NhatvuMention("MÀY GÀ MÀ CON :)) ");
                }, 10500);
                setTimeout(() => {
                    NhatvuMention("MÁ BÁ MÀ SAO CON LẠI ĐỦ HẢ CON ? ");
                }, 12000);
                setTimeout(() => {
                    NhatvuMention("ĐĨ LỒN ĐÚ ĐỠN VỚI MÁ HẢ? ");
                }, 13500);
                setTimeout(() => {
                    NhatvuMention("Hăng lên , mạnh nữa lên");
                }, 15000)
                setTimeout(() => {
                    NhatvuMention("Hăng lên như cái cách bố đụ con đĩ mẹ mày ấy 👉👈 ");
                }, 16500);
                setTimeout(() => {
                    NhatvuMention("Mày gà mà đú hả mày? ");
                }, 18000)
                setTimeout(() => {
                    NhatvuMention("Sao dọ? ");
                }, 19500);
                setTimeout(() => {
                    NhatvuMention("Sao con lại câm? ");
                }, 21000)
                setTimeout(() => {
                    NhatvuMention("Tao cho mày câm chưa hả đĩ lồn? ");
                }, 22500)
                setTimeout(() => {
                    NhatvuMention("Con đĩ hăng nữa đi , tao xem nè? ");
                }, 24000);
                setTimeout(() => {
                    NhatvuMention("Hăng đi con đi con đú ");
                }, 25500)
                setTimeout(() => {
                    NhatvuMention("Sao mày câm rồi vậy hả con đĩ? ");
                }, 27000);
                setTimeout(() => {
                    NhatvuMention("Con lồn hăng lẹ");
                }, 28500);
                setTimeout(() => {
                    NhatvuMention("Đĩ mới nhú, đú thấy rõ kk ");
                }, 30000)
                setTimeout(() => {
                    NhatvuMention("Sao mày lại núp rồi vậy? ");
                }, 31500)
                setTimeout(() => {
                    NhatvuMention("Mày cay tao à ? ");
                }, 33000)
                setTimeout(() => {
                    NhatvuMention("Cắn ớt rồi kìa kk ");
                }, 34500)
                setTimeout(() => {
                    NhatvuMention("Cay cha chưa con đĩ");
                }, 36000);
                setTimeout(() => {
                    NhatvuMention("Má mãi win nhá");
                }, 37000)
            }, 41000);
        }, 2000);
    } else {
        setTimeout(() => {
            setInterval(() => {
            setTimeout(() => {
                    Nhatvu("VÔ DANH SỐNG DƯỚI ĐÁY XÃ HỘI LÊN ĐÂY ĐÚ ỬA VỚI MÁ HẢ CON CHÓ !!! ");
                }, 3000);
                setTimeout(() => {
                    Nhatvu("CON RANH NGOI LÊN ĐÂY SỦA VỚI MÁ NÈ ");
                }, 4500);
                setTimeout(() => {
                    Nhatvu("NGHÈO MÀ RA DẺ VỚI TAO À ? ");
                }, 6000);
                setTimeout(() => {
                    Nhatvu("Gà mà xạo lồn với tao à ? ");
                }, 7500);
                setTimeout(() => {
                    Nhatvu("CON NGU LỒN");
                }, 9000);
                setTimeout(() => {
                    Nhatvu("MÀY GÀ MÀ CON :)) ");
                }, 10500);
                setTimeout(() => {
                    Nhatvu("MÁ BÁ MÀ SAO CON LẠI ĐỦ HẢ CON ? ");
                }, 12000);
                setTimeout(() => {
                    Nhatvu("ĐĨ LỒN ĐÚ ĐỠN VỚI MÁ HẢ? ");
                }, 13500);
                setTimeout(() => {
                    Nhatvu("Hăng lên , mạnh nữa lên");
                }, 15000)
                setTimeout(() => {
                    Nhatvu("Hăng lên như cái cách bố đụ con đĩ mẹ mày ấy 👉👈 ");
                }, 16500);
                setTimeout(() => {
                    Nhatvu("Mày gà mà đú hả mày? ");
                }, 18000)
                setTimeout(() => {
                    Nhatvu("Sao dọ? ");
                }, 19500);
                setTimeout(() => {
                    Nhatvu("Sao con lại câm? ");
                }, 21000)
                setTimeout(() => {
                    Nhatvu("Tao cho mày câm chưa hả đĩ lồn? ");
                }, 22500)
                setTimeout(() => {
                    Nhatvu("Con đĩ hăng nữa đi , tao xem nè? ");
                }, 24000);
                setTimeout(() => {
                    Nhatvu("Hăng đi con đi con đú ");
                }, 25500)
                setTimeout(() => {
                    Nhatvu("Sao mày câm rồi vậy hả con đĩ? ");
                }, 27000);
                setTimeout(() => {
                    Nhatvu("Con lồn hăng lẹ");
                }, 28500);
                setTimeout(() => {
                    Nhatvu("Đĩ mới nhú, đú thấy rõ kk ");
                }, 30000)
                setTimeout(() => {
                    Nhatvu("Sao mày lại núp rồi vậy? ");
                }, 31500)
                setTimeout(() => {
                    Nhatvu("Mày cay tao à ? ");
                }, 33000)
                setTimeout(() => {
                    Nhatvu("Cắn ớt rồi kìa kk ");
                }, 34500)
                setTimeout(() => {
                    Nhatvu("Cay cha chưa con đĩ");
                }, 36000);
                setTimeout(() => {
                    Nhatvu("Má mãi win nhá");
                }, 37000)
            })
        }, 41000)
    }

}

export default {
    config,
    onCall
}