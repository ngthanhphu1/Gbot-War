const config = {
    name: "Chuidenchet",
    aliases: ["chuidenchet"],
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
    if (!mention) return message.send(`Vui lòng tag đứa muốn chửi`, message.threadID, message.messageID);
    const Nhatvu = (data) => {
        message.send(data);
    }

    Nhatvu("Xem Tao Chửi Cho Nghe Này!!");
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);

    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảo" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con cặc địt mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày vẫn đéo dám ra à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Trước đó cho tao xin nghỉ 1p nhé" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Xin phép mở đầu thì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con mẹ mày ra đây đi thằng lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn đi thằng mặt lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện ra bố mày xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con cặc địt mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);

    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng so sánh bọn tao với nó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì nó là chó còn tao là người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng bật cười khi nghe điều đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì cả mày và nó đều chó như nhau" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Xã hội đổi màu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống phải biết nghĩ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cứ soi gương nhiều vào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống – Là phải biết điều" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Có điều mày lên nhớ rằng….." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT CON MẸ!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con đéo nào cũng như con nào!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hài!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ má não cặc à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cái lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 157000);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ m ra đọc nè" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đĩ lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảo" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con cặc địt mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày vẫn đéo dám ra à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con mẹ mày ra đây đi thằng lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn đi thằng mặt lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện ra bố mày xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con cặc địt mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng 500 tật" + " " + name,
            mentions: arraytag
        })
    }, 207000);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng so sánh bọn tao với nó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì nó là chó còn tao là người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng bật cười khi nghe điều đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì cả mày và nó đều chó như nhau" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Xã hội đổi màu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống phải biết nghĩ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cứ soi gương nhiều vào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống – Là phải biết điều" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Có điều mày lên nhớ rằng….." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT CON MẸ!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con đéo nào cũng như con nào!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hài!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ má não cặc à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cái lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ m ra đọc nè" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đĩ lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảo" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày vẫn đéo dám ra à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh con chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn bố mày hỏi tội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nhanh ra chửi nhau với tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con mẹ mày ra đây đi thằng lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện hồn đi thằng mặt lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hiện ra bố mày xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con cặc địt mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng so sánh bọn tao với nó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì nó là chó còn tao là người" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Mày đừng bật cười khi nghe điều đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "vì cả mày và nó đều chó như nhau" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Xã hội đổi màu" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống phải biết nghĩ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cứ soi gương nhiều vào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Sống – Là phải biết điều" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Có điều mày lên nhớ rằng….." + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT CON MẸ!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Con đéo nào cũng như con nào!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Hài!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ má não cặc à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng mặt cặc" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng não lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Cái lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Đụ con đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thằng óc cức" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đụ đĩ mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt con mẹ mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ bố gọi đéo nghe à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt mẹ m ra đọc nè" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đĩ lồn" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "tạm biệt mày con đĩ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "bố mày đi làm việc có ích cho xã hội" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "đéo ở lại nói chuyện mới mấy đứa ngu như mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "cẩn thận tí acc fb mày đéo còn nhá" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "giờ thì bye" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "mày tưởng xong rồi á đéo có đâu năm mơ đi con tinh trùng khuyết tật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "địt cái lồn mẹ mày con chó súc sinh vật học này đéo ai dạy mày gặp người lớn phải lễ phép à" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "cái con đĩ đầu trâu mặt người này bố mày tương cái buồi vào mồm mày cho mày bớt nói nhé" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "à mà quên thứ súc vật như mày thì đéo có cửa mà ngậm cặc tao" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Dòng thứ ngu ngục mà cứ tỏ vẻ ta đây thượng đẳng, cẩn thận cái mồm không là đéo có cái răng nhai cơm" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "bố mẹ thì làm chết con đĩ mẹ đâu có biết con phò hà thiên lộn như mày ở nhà xàm cặc như này" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thứ của mày thì bớt lên mạng xàm lồn ở nhà dạng háng làm lồn công cộng kiếm tiền báo hiếu cha mẹ còn kịp con đĩ ạ" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "bà già mày vì một phút nứng lồn nhưng lại đéo có trách nhiệm mới lai sanh ra thứ như mày rồi đéo biết dạy mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thà ổng bả đẻ trứng gà trứng vịt ăn còn có ý nghĩa hơn là đau lồn đái ra thứ như mày" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Kiếm mối lộn người rồi nhe hong con hà bá súc vật quái thai" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Địt con mẹ lần sau còn hãm lồn như này thì bố mày lấy cu giả tát vào lồn cho mày tỉnh ngộ nghe chưa" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "cái lồn mẹ mày nói nhẹ nói khẽ thì đéo nghe phải dí cái lồn vào mặt mày thì mới chịu tỉnh" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "thứ âm binh đầu thai ma lai bú cặc ngựa" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Nứng lồn ít thôi nghe chưa con đĩ chó" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "Còn giờ thì tiễn vong về âm tào địa phủ đi súc vật" + " " + name,
            mentions: arraytag
        })
    }, 500);
    setTimeout(() => {
        Nhatvu({
            body: "BYE MÀY CON LỒNNNNNNNNMNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN" + " " + name,
            mentions: arraytag
        })
    }, 500);



}

export default {
    config,
    onCall
}