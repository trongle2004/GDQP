// ==========================================================================
// GDQP PRESENTATION DATA
// Nhóm 2: Nghệ thuật Quân sự trong Ba lần Kháng chiến chống Nguyên–Mông (TK XIII)
// ==========================================================================
const slides = [
    // =====================================================================
    // SLIDE 1: TRANG BÌA
    // =====================================================================
    {
        id: "slide-1",
        category: "Giáo dục Quốc phòng – An ninh",
        title: "NGHỆ THUẬT QUÂN SỰ TRONG BA LẦN KHÁNG CHIẾN CHỐNG QUÂN NGUYÊN–MÔNG XÂM LƯỢC",
        subtitle: "Thế kỷ XIII (1258 – 1288)",
        layout: "cover",
        image: "images/tran_vs_mongol_battle.jpg",
        content: {
            members: [
                { name: "Lê Văn Mẫn", studentId: "25TX810046", role: "Nhóm trưởng" },
                { name: "Ngô Đức Phú", studentId: "25TX810052" },
                { name: "Lại Trần Phương Thái", studentId: "25TX810056" },
                { name: "Trương Văn Mạnh", studentId: "25TX810048" },
                { name: "Lê Huy Trọng", studentId: "25TX810061" },
                { name: "Trần Nguyễn Trung Kiên", studentId: "25TX610010" },
                { name: "Nguyễn Minh Thuận", studentId: "25TX810059" },
                { name: "Trần Minh Mẫn", studentId: "25TX810047" }
            ],
            lecturer: "Đỗ Quang Trực",
            group: "Nhóm 2"
        },
        speakerNotes: "<strong>[Trang bìa – Thuyết trình tự tin, giọng trầm hùng]</strong><br><br>Kính thưa thầy/cô và các bạn!<br>Trong lịch sử dân tộc Việt Nam, ba lần kháng chiến chống quân Nguyên–Mông thế kỷ XIII là những trang sử vàng chói lọi nhất. Đây là đế quốc hùng mạnh nhất thế giới lúc bấy giờ – đã chinh phục cả châu Á và châu Âu – nhưng lại ba lần thất bại nhục nhã trước quân dân Đại Việt.<br>Hôm nay, Nhóm 2 chúng em xin trình bày chuyên đề: <strong>'Nghệ thuật Quân sự trong Ba lần Kháng chiến chống quân Nguyên–Mông xâm lược (Thế kỷ XIII)'</strong> – phân tích, làm rõ những nét đặc sắc làm nên những chiến thắng vang dội đó."
    },
    // =====================================================================
    // SLIDE 2: BỐI CẢNH LỊCH SỬ
    // =====================================================================
    {
        id: "slide-2",
        category: "Phần I: Bối cảnh lịch sử",
        title: "Bối cảnh lịch sử & Thực lực của quân Nguyên–Mông",
        subtitle: "Đế quốc hùng mạnh nhất thế giới thế kỷ XIII",
        layout: "stat-grid",
        content: {
            stats: [
                { number: "3 lần", label: "Số lần quân Nguyên–Mông xâm lược Đại Việt: 1258, 1285, 1287–1288" },
                { number: "50 vạn", label: "Quân số lần xâm lược thứ hai (1285) do Thái tử Thoát Hoan chỉ huy" },
                { number: "30 vạn", label: "Quân số lần xâm lược thứ ba (1287–1288) kèm hạm đội thuyền lương" },
                { number: "3 vạn", label: "Quân kỵ binh tinh nhuệ xâm lược lần đầu từ Vân Nam (1258)" }
            ]
        },
        speakerNotes: "<strong>[Bối cảnh – Nhấn mạnh thực lực đối phương]</strong><br><br>Để hiểu được tầm vóc của những chiến thắng này, chúng ta cần nhìn vào thực lực khủng khiếp của đế chế Nguyên–Mông. Đây là đế quốc đã tiêu diệt nhà Tống hùng mạnh, đánh bại Ba Tư và Nga, khiến cả châu Âu khiếp sợ. Vậy mà trước quân dân Đại Việt, họ đã phải nếm mùi thất bại cay đắng tới ba lần."
    },
    // =====================================================================
    // SLIDE 3: CẤU TRÚC NỘI DUNG
    // =====================================================================
    {
        id: "slide-3",
        category: "Phần I: Bối cảnh lịch sử",
        title: "Cấu trúc nội dung bài thuyết trình",
        subtitle: "3 cuộc kháng chiến & 5 nghệ thuật quân sự cốt lõi",
        layout: "bullets",
        content: {
            bullets: [
                "<strong>Phần I: Bối cảnh lịch sử</strong> – Thực lực đế quốc Nguyên–Mông và ý nghĩa của ba lần chiến thắng.",
                "<strong>Phần II: Diễn biến 3 cuộc kháng chiến</strong> – Trình bày theo trật tự lịch sử: 1258, 1285, 1287–1288.",
                "<strong>Phần III: 5 Nghệ thuật Quân sự đặc sắc</strong> – Phân tích chi tiết từng chiến lược, chiến thuật làm nên thắng lợi.",
                "<strong>Kết luận & Ý nghĩa</strong> – Bài học lịch sử và giá trị trường tồn của nghệ thuật quân sự Việt Nam."
            ]
        },
        speakerNotes: "<strong>[Cấu trúc bài – Hướng dẫn người nghe]</strong><br><br>Bài thuyết trình được chia làm các phần rõ ràng. Chúng ta sẽ đi vào từng diễn biến cụ thể của ba cuộc kháng chiến trước, sau đó tổng hợp lại 5 nghệ thuật quân sự cốt lõi xuyên suốt để thấy rõ tư duy chiến lược nhất quán của quân dân nhà Trần."
    },
    // =====================================================================
    // SLIDE 4: KHÁNG CHIẾN LẦN 1 - BỐI CẢNH
    // =====================================================================
    {
        id: "slide-4",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Cuộc kháng chiến lần thứ nhất (1258)",
        subtitle: "Chiến thắng đầu tiên trước đế quốc hùng mạnh nhất thế giới",
        layout: "bullets",
        image: "images/strategic_retreat.jpg",
        content: {
            bullets: [
                "<strong>Bối cảnh & Lực lượng địch:</strong> Tướng Mông Cổ Ngột Lương Hợp Thai chỉ huy khoảng <em>3 vạn quân kỵ binh và bộ binh tinh nhuệ</em> từ Vân Nam tiến vào Đại Việt, nhằm thực hiện chiến lược 'gọng kìm' tiêu diệt Nam Tống từ phía Nam.",
                "<strong>Trận Bình Lệ Nguyên (tháng 1/1258):</strong> Vua Trần Thái Tông trực tiếp chỉ huy phòng tuyến. Nhận thấy kỵ binh Mông Cổ quá mạnh, quân Trần <em>chủ động rút lui</em> để bảo toàn lực lượng.",
                "<strong>Kế Vườn không nhà trống:</strong> Vua tôi nhà Trần xuôi thuyền theo sông Hồng về vùng Thiên Mạc (Hà Nam). Quân Mông Cổ tiến vào Thăng Long nhưng không tìm được lương thực, quân lính dần đói khát, suy giảm nhuệ khí."
            ]
        },
        speakerNotes: "<strong>[Lần 1 – Trình bày diễn biến rõ ràng]</strong><br><br>Chúng ta đến với cuộc kháng chiến đầu tiên năm 1258. Đây là lần đầu tiên quân Nguyên–Mông đụng phải một đối thủ không chịu đánh trận trực tiếp theo kiểu của họ. Vua Trần Thái Tông, sau khi thấy rõ sức mạnh của kỵ binh Mông Cổ tại Bình Lệ Nguyên, đã quyết định rút lui chiến lược – một quyết định dũng cảm và sáng suốt mà không phải ai cũng có đủ bản lĩnh để làm."
    },
    // =====================================================================
    // SLIDE 5: KHÁNG CHIẾN LẦN 1 - PHẢN CÔNG
    // =====================================================================
    {
        id: "slide-5",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Kháng chiến lần I – Phản công & Kết quả",
        subtitle: "Tổng phản công Đông Bộ Đầu – Chiến thắng vang dội (29/1/1258)",
        layout: "timeline",
        image: "images/tran_vs_mongol_battle.jpg",
        content: {
            events: [
                {
                    year: "Tháng 1/1258",
                    title: "Quân Nguyên vào Thăng Long – Thành trống rỗng",
                    desc: "Quân Mông Cổ chiếm Thăng Long nhưng chỉ tìm thấy tòa thành trống. Đói khát, dịch bệnh hoành hành, nhuệ khí suy giảm nhanh."
                },
                {
                    year: "29/1/1258",
                    title: "Tổng phản công bến Đông Bộ Đầu",
                    desc: "Quân Trần ngược dòng sông Hồng, mở cuộc tổng phản công quyết định tại bến Đông Bộ Đầu (Hà Nội ngày nay). Quân Mông Cổ đại bại."
                },
                {
                    year: "Kết quả",
                    title: "Quân Mông Cổ vội vã tháo chạy",
                    desc: "Trên đường rút chạy về Vân Nam, quân giặc bị dân binh địa phương chặn đánh liên tục, bị dân chúng mỉa mai gọi là 'giặc Phật' vì không dám cướp phá."
                }
            ]
        },
        speakerNotes: "<strong>[Lần 1 – Kết quả phản công]</strong><br><br>Chỉ chưa đầy nửa tháng sau khi rút lui, quân Trần đã chớp đúng thời cơ khi giặc suy yếu và mở cuộc tổng phản công tại Đông Bộ Đầu ngày 29/1/1258. Kết quả là 3 vạn kỵ binh tinh nhuệ nhất thế giới phải bỏ chạy về nước, bị dân gian chế nhạo là 'giặc Phật'."
    },
    // =====================================================================
    // SLIDE 6: KHÁNG CHIẾN LẦN 2 - BỐI CẢNH
    // =====================================================================
    {
        id: "slide-6",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Cuộc kháng chiến lần thứ hai (1285)",
        subtitle: "50 vạn đại quân – thế trận gọng kìm từ hai phía",
        layout: "bullets",
        image: "images/mongol_army.jpg",
        content: {
            bullets: [
                "<strong>Lực lượng địch khổng lồ:</strong> Sau khi tiêu diệt hoàn toàn Nam Tống, Hốt Tất Liệt hạ lệnh cho Thái tử <em>Thoát Hoan</em> dẫn <em>khoảng 50 vạn quân</em> đánh thẳng vào Đại Việt để rửa hận.",
                "<strong>Thế trận gọng kìm:</strong> Quân Nguyên đánh từ hai mặt – Thoát Hoan tiến qua Lạng Sơn từ phía Bắc; Toa Đô từ Chiêm Thành đánh thốc lên từ phía Nam.",
                "<strong>Rút lui chiến lược:</strong> Hưng Đạo Vương Trần Quốc Tuấn cho quân rút khỏi các ải biên giới, bỏ phòng tuyến Vạn Kiếp, rút về Thăng Long rồi tiếp tục bỏ ngỏ kinh thành rút về Thiên Trường (Nam Định)."
            ]
        },
        speakerNotes: "<strong>[Lần 2 – Áp lực gấp bội lần 1]</strong><br><br>Cuộc kháng chiến lần thứ hai năm 1285 là thử thách lớn nhất. 50 vạn quân – gấp hơn 15 lần lần đầu – được tổ chức thành thế gọng kìm từ hai phía Bắc và Nam. Thế nhưng Hưng Đạo Vương vẫn bình tĩnh áp dụng đúng chiến thuật cũ: rút lui chiến lược để bảo toàn lực lượng."
    },
    // =====================================================================
    // SLIDE 7: KHÁNG CHIẾN LẦN 2 - PHẢN CÔNG
    // =====================================================================
    {
        id: "slide-7",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Kháng chiến lần II – Phản công & Kết quả",
        subtitle: "Hàm Tử, Chương Dương, Tây Kết – Đại phá 50 vạn quân (5/1285)",
        layout: "timeline",
        image: "images/tran_vs_mongol_battle.jpg",
        content: {
            events: [
                {
                    year: "Tháng 5/1285",
                    title: "Thời cơ: Địch cạn lương, kiệt sức vì nắng nóng",
                    desc: "Quân Nguyên lâm vào tình thế cạn kiệt lương thực và kiệt sức vì khí hậu nắng nóng miền nhiệt đới. Quân Trần tổng phản công."
                },
                {
                    year: "Trận Hàm Tử",
                    title: "Trần Nhật Duật đánh thắng, giải phóng phía Đông",
                    desc: "Trần Nhật Duật đánh thắng trận Hàm Tử; Trần Quốc Toản và Nguyễn Khoái đánh bại giặc ở bến Chương Dương, giải phóng Thăng Long."
                },
                {
                    year: "Trận Tây Kết",
                    title: "Trần Quốc Tuấn chém chết tướng Toa Đô",
                    desc: "Cánh quân phía Nam bị tiêu diệt, tướng Toa Đô bị chém chết tại Tây Kết. Thoát Hoan hoảng sợ chui vào ống đồng để lính kéo chạy trốn tên bắn."
                }
            ]
        },
        speakerNotes: "<strong>[Lần 2 – Chi tiết phản công]</strong><br><br>Đến tháng 5/1285, khi giặc đã kiệt sức, quân Trần phản công trên toàn mặt trận. Chi tiết thú vị là Thoát Hoan – thái tử của đế quốc hùng mạnh nhất thế giới – phải chui vào ống đồng để lính khênh chạy trốn tên bắn."
    },
    // =====================================================================
    // SLIDE 8: KHÁNG CHIẾN LẦN 3 - BỐI CẢNH
    // =====================================================================
    {
        id: "slide-8",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Cuộc kháng chiến lần thứ ba (1287–1288)",
        subtitle: "Địch rút kinh nghiệm – Kèm theo hạm đội thuyền lương",
        layout: "bullets",
        image: "images/strategic_retreat.jpg",
        content: {
            bullets: [
                "<strong>Lý do xâm lược lần 3:</strong> Hốt Tất Liệt tức giận vì thất bại nhục nhã, đình chỉ kế hoạch đánh Nhật Bản, dồn lực khoảng <em>30 vạn quân</em> giao cho Thoát Hoan tiến vào Đại Việt lần thứ ba.",
                "<strong>Bài học hậu cần được rút ra:</strong> Nhà Nguyên cử tướng <em>Trương Văn Hổ</em> chỉ huy hạm đội thuyền chở hàng vạn thạch lương thực đi theo đường biển để tiếp ứng – khắc phục điểm yếu chí mạng về hậu cần.",
                "<strong>Quân Trần chủ động rút lui:</strong> Quân bộ của Thoát Hoan tiến vào Thăng Long dễ dàng do quân Trần tiếp tục áp dụng chiến lược rút lui – để dành lực lượng cho trận quyết chiến."
            ]
        },
        speakerNotes: "<strong>[Lần 3 – Địch đã chuẩn bị kỹ hơn nhưng vẫn thất bại]</strong><br><br>Cuộc xâm lược lần thứ ba 1287–1288 thể hiện rõ rằng kẻ địch đã học bài học từ lần trước. Họ cử hẳn một hạm đội thuyền lương để giải quyết vấn đề hậu cần. Nhưng chính điều này đã tạo ra một mục tiêu mới cho quân Trần."
    },
    // =====================================================================
    // SLIDE 9: KHÁNG CHIẾN LẦN 3 - VÂN ĐỒN & BẠCH ĐẰNG
    // =====================================================================
    {
        id: "slide-9",
        category: "Phần II: Ba cuộc Kháng chiến",
        title: "Kháng chiến lần III – Vân Đồn & Bạch Đằng",
        subtitle: "Hai đòn quyết định chấm dứt mộng xâm lăng của đế chế Nguyên",
        layout: "timeline",
        image: "images/bach_dang_battle.jpg",
        content: {
            events: [
                {
                    year: "Cuối 1287",
                    title: "Trận Vân Đồn – Triệt hạ toàn bộ thuyền lương",
                    desc: "Tướng Trần Khánh Dư phục kích tại Vân Đồn (Quảng Ninh), đánh chìm và tiêu diệt hoàn toàn đoàn thuyền lương do Trương Văn Hổ chỉ huy. Đại quân Thoát Hoan lâm vào cảnh đói khát trầm trọng."
                },
                {
                    year: "Tháng 4/1288",
                    title: "Trận Bạch Đằng – Kiệt tác quân sự lịch sử",
                    desc: "Cọc nhọn bịt sắt đóng sẵn dưới lòng sông + thủy triều + hỏa công + quân mai phục = tiêu diệt hoàn toàn thủy quân Nguyên, bắt sống Ô Mã Nhi."
                },
                {
                    year: "Kết quả",
                    title: "Nhà Nguyên từ bỏ hoàn toàn mộng thôn tính Đại Việt",
                    desc: "Cánh quân bộ Thoát Hoan trên đường rút qua Lạng Sơn cũng bị mai phục đánh tan. Nhà Nguyên từ bỏ hoàn toàn mộng xâm lăng, mở ra thời kỳ hòa bình lâu dài."
                }
            ]
        },
        speakerNotes: "<strong>[Lần 3 – Kết thúc hào hùng]</strong><br><br>Hai cú đấm liên tiếp tại Vân Đồn và Bạch Đằng đã kết thúc mọi tham vọng của đế chế Nguyên. Tướng giặc Ô Mã Nhi bị bắt sống. Đây là lần thứ ba và cũng là lần cuối cùng quân Nguyên cố xâm lược Đại Việt."
    },
    // =====================================================================
    // SLIDE 10: NGHỆ THUẬT 1
    // =====================================================================
    {
        id: "slide-10",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "1. Tránh chỗ mạnh, đánh chỗ yếu",
        subtitle: "Chủ động rút lui chiến lược – bảo toàn lực lượng để phản công",
        layout: "bullets",
        image: "images/strategic_retreat.jpg",
        content: {
            bullets: [
                "<strong>Điểm mạnh của địch:</strong> Quân Nguyên–Mông sở hữu kỵ binh cực kỳ tinh nhuệ, sức đột phá lớn trên địa hình bằng phẳng.",
                "<strong>Bảo toàn lực lượng:</strong> Quân Trần <em>chủ động rút lui chiến lược</em> khỏi kinh thành Thăng Long cả ba lần – không phải hèn nhát mà là kéo giãn đội hình địch, tránh những mũi nhọn tấn công khi nhuệ khí của chúng đang ở đỉnh cao.",
                "<strong>Chờ thời cơ:</strong> Khi quân giặc mệt mỏi, phân tán lực lượng và không quen với khí hậu nhiệt đới khắc nghiệt, quân Trần mới chuyển từ phòng ngự sang phản công quyết liệt."
            ]
        },
        speakerNotes: "<strong>[Nghệ thuật 1 – Giải thích tư duy chiến lược]</strong><br><br>Nghệ thuật đầu tiên và quan trọng nhất là 'Tránh chỗ mạnh, đánh chỗ yếu'. Thay vì dàn quân nghênh chiến trực diện với kỵ binh Mông Cổ – điều này đồng nghĩa với thất bại – quân Trần đã chủ động bỏ Thăng Long, kéo giãn tuyến hậu cần của địch, đợi cho chúng suy yếu rồi mới ra đòn quyết định."
    },
    // =====================================================================
    // SLIDE 11: NGHỆ THUẬT 2
    // =====================================================================
    {
        id: "slide-11",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "2. Kế sách Vườn không nhà trống (Thanh dã)",
        subtitle: "Khoét sâu vào tử huyệt hậu cần của đế quốc Mông Cổ",
        layout: "bullets",
        content: {
            bullets: [
                "<strong>Điểm yếu chí mạng của địch:</strong> Hệ thống hậu cần quân Mông Cổ phụ thuộc nhiều vào <em>cướp bóc lương thực tại chỗ</em> – không vận chuyển đủ lương thực từ xa.",
                "<strong>Triệt nguồn sống của địch:</strong> Nhân dân ở các làng mạc và kinh thành Thăng Long được lệnh mang theo toàn bộ lương thực, tài sản sơ tán đi nơi khác – thực hiện chính sách 'Thanh dã' (đồng không mông quạnh).",
                "<strong>Hệ quả tất yếu:</strong> Quân Nguyên tiến vào Thăng Long nhưng chỉ thấy một tòa thành trống rỗng. Đói khát, thiếu quân nhu khiến thể lực và tinh thần của quân giặc suy sụp nhanh chóng, đẩy chúng vào thế bị động hoàn toàn."
            ]
        },
        speakerNotes: "<strong>[Nghệ thuật 2 – Phân tích kế sách hậu cần]</strong><br><br>Kế sách thứ hai là 'Vườn không nhà trống' – hay còn gọi là 'Thanh dã'. Người Mông Cổ quen đánh nhanh thắng nhanh, sống nhờ cướp bóc lương thực tại địa phương. Nhà Trần đã nhận ra điểm yếu tử huyệt này và khoét sâu vào nó. Kết quả là 50 vạn quân hùng mạnh nhất thế giới dần trở thành một đám đói khát, mất nhuệ khí."
    },
    // =====================================================================
    // SLIDE 12: NGHỆ THUẬT 3
    // =====================================================================
    {
        id: "slide-12",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "3. Nghệ thuật Chiến tranh Nhân dân – Toàn dân đánh giặc",
        subtitle: "Sức mạnh tổng hợp từ quân chủ lực đến dân binh khắp nơi",
        layout: "bullets",
        image: "images/dien_hong_assembly.jpg",
        content: {
            bullets: [
                "<strong>Sức mạnh không chỉ ở quân chủ lực:</strong> Quân dân binh rộng khắp các hương, ấp liên tục tập kích, quấy rối quân giặc ở mọi lúc, mọi nơi – khiến chúng luôn căng thẳng, đi đến đâu cũng bị bủa vây.",
                "<strong>Đại đoàn kết dân tộc:</strong> Hội nghị <em>Bình Than</em> (phân công các vương hầu) và Hội nghị <em>Diên Hồng</em> (trưng cầu dân ý bô lão) đã tạo ra một khối đại đoàn kết vững chắc từ trên xuống dưới.",
                "<strong>Ý chí quyết chiến:</strong> Khẩu hiệu <em>'Sát Thát'</em> (Giết quân Thát – tức quân Mông Cổ) thích trên cánh tay binh sĩ minh chứng cho ý chí chiến đấu không thể lay chuyển của toàn dân."
            ]
        },
        speakerNotes: "<strong>[Nghệ thuật 3 – Nhấn mạnh ý chí toàn dân]</strong><br><br>Điều thứ ba làm nên sức mạnh của nhà Trần là nghệ thuật Chiến tranh Nhân dân. Từ Hội nghị Diên Hồng nơi các cụ bô lão đồng thanh hô 'Đánh!', đến những người dân tự nguyện thích chữ 'Sát Thát' lên tay – điều đó tạo ra một sức mạnh tinh thần vô song."
    },
    // =====================================================================
    // SLIDE 13: NGHỆ THUẬT 4
    // =====================================================================
    {
        id: "slide-13",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "4. Chủ động đánh vào yết hầu hậu cần",
        subtitle: "Trận Vân Đồn (1287) – Đòn chí mạng vào đoàn thuyền lương",
        layout: "bullets",
        content: {
            bullets: [
                "<strong>Nhận thức chiến lược:</strong> Hậu cần là 'gót chân Achilles' của quân giặc – nhà Trần đã có những đòn đánh quyết định vào đoàn thuyền lương ngay khi chúng vừa vào Đại Việt.",
                "<strong>Trận Vân Đồn (1287):</strong> Tướng <em>Trần Khánh Dư</em> chỉ huy quân phục kích, tiêu diệt hoàn toàn đoàn thuyền lương nặng nề của Trương Văn Hổ.",
                "<strong>Hệ quả quyết định:</strong> Mất toàn bộ quân nhu ngay khi vừa tiến vào Đại Việt đã giáng một đòn chí mạng, buộc Thoát Hoan phải sớm hạ lệnh rút quân trong cuộc xâm lược lần thứ ba."
            ]
        },
        speakerNotes: "<strong>[Nghệ thuật 4 – Phân tích tầm nhìn chiến lược về hậu cần]</strong><br><br>Nghệ thuật thứ tư thể hiện tầm nhìn chiến lược sắc bén: tấn công hậu cần của địch. Tướng Trần Khánh Dư đã phục kích và tiêu diệt hoàn toàn đoàn thuyền lương tại Vân Đồn. Kết quả là 30 vạn đại quân của Thoát Hoan phải nhịn đói ở Thăng Long."
    },
    // =====================================================================
    // SLIDE 14: NGHỆ THUẬT 5
    // =====================================================================
    {
        id: "slide-14",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "5. Nghệ thuật Phản công & Thủy chiến đỉnh cao",
        subtitle: "Trận Bạch Đằng 1288 – Kiệt tác quân sự muôn đời",
        layout: "bullets",
        image: "images/bach_dang_battle.jpg",
        content: {
            bullets: [
                "<strong>Tận dụng địa thế & thủy triều:</strong> Trần Quốc Tuấn nghiên cứu kỹ quy luật thủy triều, cho đóng bãi cọc nhọn bằng gỗ lim bịt sắt xuống lòng sông Bạch Đằng.",
                "<strong>Bố trí trận địa mai phục:</strong> Dùng thuyền nhẹ khiêu chiến rồi <em>vờ thua chạy</em> để nhử hạm đội của Ô Mã Nhi lọt vào trận địa cọc lúc nước triều dâng cao.",
                "<strong>Đòn quyết định:</strong> Khi nước rút, cọc nhô lên đâm thủng thuyền giặc, kết hợp quân mai phục hai bên bờ lao ra tấn công bằng hỏa công và tên nỏ – <em>tiêu diệt hoàn toàn thủy quân Nguyên, bắt sống Ô Mã Nhi</em>."
            ]
        },
        speakerNotes: "<strong>[Nghệ thuật 5 – Trình bày với giọng hào hùng nhất]</strong><br><br>Và đây là đỉnh cao của nghệ thuật quân sự Việt Nam – Trận Bạch Đằng năm 1288. Trần Quốc Tuấn đã kết hợp hoàn hảo địa thế hiểm yếu, quy luật tự nhiên của thủy triều, mưu kế nhử địch và đòn phản công tổng lực."
    },
    // =====================================================================
    // SLIDE 15: TỔNG KẾT 5 NGHỆ THUẬT
    // =====================================================================
    {
        id: "slide-15",
        category: "Phần III: Nghệ thuật Quân sự",
        title: "Tổng kết 5 Nghệ thuật Quân sự đặc sắc",
        subtitle: "Sự kết tinh tư duy chiến lược của quân dân nhà Trần",
        layout: "matrix",
        content: {
            columns: [
                {
                    icon: "⚔",
                    title: "Chiến lược",
                    items: [
                        "Tránh chỗ mạnh, đánh chỗ yếu",
                        "Chủ động rút lui bảo toàn lực lượng",
                        "Chờ thời cơ phản công quyết định"
                    ]
                },
                {
                    icon: "🏰",
                    title: "Chiến thuật",
                    items: [
                        "Vườn không nhà trống (Thanh dã)",
                        "Đánh vào hậu cần – trận Vân Đồn",
                        "Thủy chiến Bạch Đằng (cọc + thủy triều)"
                    ]
                },
                {
                    icon: "🔥",
                    title: "Sức mạnh nhân dân",
                    items: [
                        "Chiến tranh nhân dân toàn dân đánh giặc",
                        "Hội nghị Diên Hồng – tinh thần đoàn kết",
                        "Khẩu hiệu 'Sát Thát' – ý chí quyết chiến"
                    ]
                }
            ]
        },
        speakerNotes: "<strong>[Tổng kết nghệ thuật – Khép lại Phần III]</strong><br><br>Nhìn lại 5 nghệ thuật quân sự đặc sắc này, chúng ta thấy rõ một hệ thống tư duy chiến lược hoàn chỉnh, nhất quán xuyên suốt ba lần kháng chiến. Không phải ngẫu nhiên mà quân dân nhà Trần ba lần chiến thắng – đó là kết quả của sự kết hợp nhuần nhuyễn giữa chiến lược sắc bén, chiến thuật linh hoạt và sức mạnh toàn dân."
    },
    // =====================================================================
    // SLIDE 16: Ý NGHĨA VÀ BÀI HỌC LỊCH SỬ
    // =====================================================================
    {
        id: "slide-16",
        category: "Kết luận",
        title: "Ý nghĩa lịch sử & Bài học muôn đời",
        subtitle: "Giá trị trường tồn của nghệ thuật quân sự Việt Nam",
        layout: "bullets",
        content: {
            bullets: [
                "<strong>Kỳ tích lịch sử vô tiền khoáng hậu:</strong> Là quốc gia duy nhất trên thế giới ba lần đánh bại đế chế Nguyên–Mông – thế lực quân sự hùng mạnh nhất thế kỷ XIII, từng chinh phục cả Á-Âu.",
                "<strong>Bài học về 'lấy ít địch nhiều':</strong> Không cần đông quân, chỉ cần tư duy chiến lược sắc bén: biết điểm yếu của địch, biết khai thác địa lợi nhân hòa, kiên nhẫn chờ thời cơ.",
                "<strong>Sức mạnh đoàn kết dân tộc:</strong> Sức mạnh của chiến tranh nhân dân – toàn dân đánh giặc – là bài học sống còn không bao giờ cũ trong lịch sử giữ nước của dân tộc Việt Nam."
            ]
        },
        speakerNotes: "<strong>[Ý nghĩa – Tổng kết sâu sắc]</strong><br><br>Nhìn lại ba lần kháng chiến, điều đáng học nhất không phải là các trận đánh cụ thể, mà là tư duy chiến lược tổng thể: biết mình biết ta, biến điểm yếu thành điểm mạnh, biến bất lợi thành lợi thế."
    },
    // =====================================================================
    // SLIDE 17: QUOTE - HƯNG ĐẠO VƯƠNG
    // =====================================================================
    {
        id: "slide-17",
        category: "Kết luận",
        title: "Lời di huấn của Hưng Đạo Vương Trần Quốc Tuấn",
        subtitle: "Bài học muôn đời về giữ nước",
        layout: "quote",
        image: "images/tran_quoc_tuan.jpg",
        content: {
            quote: "\"Phải khoan thư sức dân để làm kế sâu rễ bền gốc, đó là thượng sách giữ nước.\"",
            author: "— Hưng Đạo Đại Vương Trần Quốc Tuấn",
            context: "Trả lời vua Trần Anh Tông khi được hỏi về kế sách giữ nước"
        },
        speakerNotes: "<strong>[Quote – Đọc chậm rãi, nhấn mạnh từng chữ]</strong><br><br>Kính thưa thầy/cô và các bạn, chúng em xin kết thúc bài trình bày bằng lời di huấn bất hủ của Hưng Đạo Vương Trần Quốc Tuấn. Câu nói này cho thấy vị đại tướng thiên tài không chỉ là nhà quân sự xuất chúng mà còn là một nhà chính trị sâu sắc. Sức dân là gốc rễ của mọi chiến thắng."
    },
    // =====================================================================
    // SLIDE 18: KẾT THÚC - CẢM ƠN
    // =====================================================================
    {
        id: "slide-18",
        category: "Kết luận",
        title: "Cảm ơn thầy/cô và các bạn đã lắng nghe!",
        subtitle: "Nhóm 2 – Môn Giáo dục Quốc phòng – An ninh",
        layout: "cover",
        image: "images/tran_quoc_tuan.jpg",
        content: {
            members: [
                { name: "Lê Văn Mẫn", studentId: "25TX810046", role: "Nhóm trưởng" },
                { name: "Ngô Đức Phú", studentId: "25TX810052" },
                { name: "Lại Trần Phương Thái", studentId: "25TX810056" },
                { name: "Trương Văn Mạnh", studentId: "25TX810048" },
                { name: "Lê Huy Trọng", studentId: "25TX810061" },
                { name: "Trần Nguyễn Trung Kiên", studentId: "25TX610010" },
                { name: "Nguyễn Minh Thuận", studentId: "25TX810059" },
                { name: "Trần Minh Mẫn", studentId: "25TX810047" }
            ],
            lecturer: "Đỗ Quang Trực",
            group: "Nhóm 2",
            closing: true
        },
        speakerNotes: "<strong>[Kết thúc – Tự tin, lịch sự, mở câu hỏi]</strong><br><br>Kính thưa thầy/cô và các bạn!<br>Nhóm 2 chúng em vừa trình bày xong chuyên đề về Nghệ thuật Quân sự trong Ba lần Kháng chiến chống quân Nguyên–Mông. Qua đó, chúng ta thấy rõ rằng những chiến thắng đó không phải ngẫu nhiên, mà là kết quả của tư duy chiến lược sắc bén, nghệ thuật quân sự tài tình và sức mạnh đại đoàn kết toàn dân tộc.<br>Chúng em rất mong nhận được ý kiến nhận xét của thầy/cô. Xin cảm ơn!"
    }
];

// ==========================================================================
// APPLICATION STATE
// ==========================================================================
let currentSlideIndex = 0;
let isPresenterOpen = false;
let isSidebarCollapsed = false;
let timerInterval = null;
let timerSeconds = 0;
let currentFontSize = 16;
let currentTheme = 'dark';

// ==========================================================================
// SLIDE RENDERING ENGINE
// ==========================================================================
function renderSlide(slideData, direction = 'none') {
    const viewer = document.getElementById('slide-viewer');
    
    if (direction !== 'none') {
        viewer.classList.add(direction === 'next' ? 'slide-exit-left' : 'slide-exit-right');
    }

    setTimeout(() => {
        viewer.className = 'slide-card';
        viewer.innerHTML = buildSlideHTML(slideData);

        if (direction !== 'none') {
            viewer.classList.add(direction === 'next' ? 'slide-enter-right' : 'slide-enter-left');
        }

        updateSpeakerNotes(slideData.speakerNotes || '');
        updateSlideListUI();
        updateProgress();
        updateCounter();
        updateNavButtons();

        setTimeout(() => { viewer.classList.remove('slide-enter-right', 'slide-enter-left'); }, 350);
    }, direction !== 'none' ? 260 : 0);
}

function buildSlideHTML(slide) {
    switch (slide.layout) {
        case 'cover':   return buildCoverLayout(slide);
        case 'bullets': return buildBulletsLayout(slide);
        case 'timeline': return buildTimelineLayout(slide);
        case 'stat-grid': return buildStatGridLayout(slide);
        case 'matrix': return buildMatrixLayout(slide);
        case 'quote': return buildQuoteLayout(slide);
        default:        return buildBulletsLayout(slide);
    }
}

function buildCoverLayout(slide) {
    const c = slide.content;
    const isClosing = c.closing;
    
    let membersHTML = '';
    if (c.members && c.members.length) {
        membersHTML = `<ul class="cover-members" style="list-style:none; padding-left:0;">
            ${c.members.map(member => `<li><i class="fa-solid fa-user-shield" aria-hidden="true"></i><span class="cover-member-details"><span class="cover-member-name">${member.name}${member.role ? ` (${member.role})` : ''}</span><span class="cover-member-id">MSSV: ${member.studentId}</span></span></li>`).join('')}
        </ul>`;
    }

    const visualContent = slide.image ? `
        <img src="${slide.image}" alt="${slide.title}" class="slide-image-contained cover-img" loading="lazy" decoding="async"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="cover-visual-placeholder" style="display:none;">${isClosing ? '🏆' : '⚔️'}</div>
    ` : isClosing ? `
        <div class="cover-visual-placeholder">🏆</div>
        <div class="cover-visual-text">Ba lần chiến thắng<br>Đế chế Nguyên–Mông</div>
    ` : `
        <div class="cover-visual-placeholder">⚔️</div>
        <div class="cover-visual-text">Trận Bạch Đằng 1288<br>Hưng Đạo Vương Trần Quốc Tuấn</div>
    `;

    return `<div class="cover-layout">
        <div class="cover-container">
            <div class="cover-info">
                <span class="cover-badge">${slide.category}</span>
                <h1 class="cover-title">${isClosing ? slide.title : `<span>${slide.title}</span>`}</h1>
                <div class="cover-meta">
                    ${!isClosing ? `<p><i class="fa-solid fa-calendar" style="color:var(--accent-gold);margin-right:8px;"></i>${slide.subtitle}</p>` : ''}
                    <p><strong><i class="fa-solid fa-users" style="margin-right:8px;"></i>${c.group}</strong>${membersHTML}</p>
                    <p><i class="fa-solid fa-chalkboard-teacher" style="margin-right:8px;color:var(--accent-gold);"></i><strong>Giảng viên:</strong> ${c.lecturer}</p>
                    ${isClosing ? '<p style="margin-top:16px;font-size:18px;font-style:italic;color:var(--accent-gold);">Xin trân trọng cảm ơn!</p>' : ''}
                </div>
            </div>
            <div class="cover-visual">${visualContent}</div>
        </div>
    </div>`;
}

function buildBulletsLayout(slide) {
    const bullets = slide.content.bullets || [];
    const bulletsHTML = bullets.map(b => `<li>${b}</li>`).join('');
    
    if (slide.image) {
        return `<div class="slide-content-wrapper">
            <div class="slide-header">
                <div>
                    <p class="slide-category">${slide.category}</p>
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-subtitle">${slide.subtitle || ''}</p>
                </div>
            </div>
            <div class="slide-body slide-body-with-image">
                <div class="slide-text-section">
                    <ul class="slide-bullets">${bulletsHTML}</ul>
                </div>
                <div class="slide-image-section">
                    <img src="${slide.image}" alt="${slide.title}" class="slide-image-contained slide-illus-img" loading="lazy" decoding="async"
                         onerror="this.parentElement.style.display='none'" />
                </div>
            </div>
        </div>`;
    }
    
    return `<div class="slide-content-wrapper">
        <div class="slide-header">
            <div>
                <p class="slide-category">${slide.category}</p>
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-subtitle">${slide.subtitle || ''}</p>
            </div>
        </div>
        <div class="slide-body">
            <div class="slide-text-section">
                <ul class="slide-bullets">${bulletsHTML}</ul>
            </div>
        </div>
    </div>`;
}

function buildTimelineLayout(slide) {
    const events = slide.content.events || [];
    const eventsHTML = events.map(e => `
        <div class="timeline-item">
            <div class="timeline-badge">${e.year}</div>
            <div class="timeline-connector"></div>
            <div class="timeline-content">
                <h5>${e.title}</h5>
                <p>${e.desc}</p>
            </div>
        </div>
    `).join('');

    if (slide.image) {
        return `<div class="slide-content-wrapper">
            <div class="slide-header">
                <div>
                    <p class="slide-category">${slide.category}</p>
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-subtitle">${slide.subtitle || ''}</p>
                </div>
            </div>
            <div class="slide-body slide-body-with-image">
                <div class="slide-text-section">
                    <div class="timeline-container">${eventsHTML}</div>
                </div>
                <div class="slide-image-section">
                    <img src="${slide.image}" alt="${slide.title}" class="slide-image-contained slide-illus-img" loading="lazy" decoding="async"
                         onerror="this.parentElement.style.display='none'" />
                </div>
            </div>
        </div>`;
    }

    return `<div class="slide-content-wrapper">
        <div class="slide-header">
            <div>
                <p class="slide-category">${slide.category}</p>
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-subtitle">${slide.subtitle || ''}</p>
            </div>
        </div>
        <div class="slide-body">
            <div class="timeline-container">${eventsHTML}</div>
        </div>
    </div>`;
}

function buildStatGridLayout(slide) {
    const stats = slide.content.stats || [];
    const statsHTML = stats.map(s => `
        <div class="stat-card">
            <div class="stat-number">${s.number}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');

    return `<div class="slide-content-wrapper">
        <div class="slide-header">
            <div>
                <p class="slide-category">${slide.category}</p>
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-subtitle">${slide.subtitle || ''}</p>
            </div>
        </div>
        <div class="slide-body">
            <div class="stat-grid">${statsHTML}</div>
        </div>
    </div>`;
}

function buildMatrixLayout(slide) {
    const cols = slide.content.columns || [];
    const colsHTML = cols.map(col => `
        <div class="matrix-card">
            <div class="matrix-title">${col.icon} ${col.title}</div>
            <ul>${col.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
    `).join('');

    return `<div class="slide-content-wrapper">
        <div class="slide-header">
            <div>
                <p class="slide-category">${slide.category}</p>
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-subtitle">${slide.subtitle || ''}</p>
            </div>
        </div>
        <div class="slide-body">
            <div class="matrix-container">${colsHTML}</div>
        </div>
    </div>`;
}

function buildQuoteLayout(slide) {
    const c = slide.content;
    const imgHTML = slide.image ? `
        <div class="quote-image-wrap">
            <img src="${slide.image}" alt="${slide.title}" class="slide-image-contained quote-portrait" loading="lazy" decoding="async"
                 onerror="this.parentElement.style.display='none'" />
        </div>
    ` : '';

    return `<div class="quote-layout">
        <div class="quote-container ${slide.image ? 'quote-with-image' : ''}">
            ${imgHTML}
            <div class="quote-text-block">
                <div class="slide-category">${slide.category}</div>
                <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
                <p class="quote-text">${c.quote}</p>
                <p class="quote-author">${c.author}</p>
                <p class="slide-subtitle">${c.context || ''}</p>
            </div>
        </div>
    </div>`;
}

// ==========================================================================
// UI HELPERS
// ==========================================================================
function updateSlideListUI() {
    const list = document.getElementById('slide-list');
    list.innerHTML = '';
    slides.forEach((slide, index) => {
        const li = document.createElement('li');
        li.className = `slide-item ${index === currentSlideIndex ? 'active' : ''}`;
        li.innerHTML = `<span class="slide-item-num">${index + 1}</span><span class="slide-item-title">${slide.title}</span>`;
        li.addEventListener('click', () => goToSlide(index));
        list.appendChild(li);
    });
}

function updateProgress() {
    const bar = document.getElementById('progress-bar');
    bar.style.width = `${((currentSlideIndex + 1) / slides.length) * 100}%`;
}

function updateCounter() {
    document.getElementById('slide-counter').textContent = `Slide ${currentSlideIndex + 1} / ${slides.length}`;
}

function updateNavButtons() {
    document.getElementById('prev-btn').disabled = currentSlideIndex === 0;
    document.getElementById('next-btn').disabled = currentSlideIndex === slides.length - 1;
}

function updateSpeakerNotes(notes) {
    const el = document.getElementById('speaker-script');
    el.innerHTML = notes || '<em style="color:var(--text-muted)">Chưa có kịch bản cho slide này.</em>';
}

// ==========================================================================
// NAVIGATION
// ==========================================================================
function goToNextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderSlide(slides[currentSlideIndex], 'next');
    }
}

function goToPrevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide(slides[currentSlideIndex], 'prev');
    }
}

function goToSlide(index) {
    if (index < 0 || index >= slides.length || index === currentSlideIndex) return;
    const direction = index > currentSlideIndex ? 'next' : 'prev';
    currentSlideIndex = index;
    renderSlide(slides[currentSlideIndex], direction);
}

// ==========================================================================
// KEYBOARD NAVIGATION
// ==========================================================================
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            goToNextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            goToPrevSlide();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(slides.length - 1);
            break;
    }
});

// ==========================================================================
// SIDEBAR TOGGLE
// ==========================================================================
function toggleSidebar() {
    isSidebarCollapsed = !isSidebarCollapsed;
    const sidebar = document.getElementById('sidebar');
    const expandBtn = document.getElementById('expand-sidebar-btn');
    const toggleBtn = document.getElementById('toggle-sidebar-btn');
    
    if (isSidebarCollapsed) {
        sidebar.classList.add('collapsed');
        expandBtn.classList.remove('hidden');
        toggleBtn.querySelector('i').className = 'fa-solid fa-chevron-right';
    } else {
        sidebar.classList.remove('collapsed');
        expandBtn.classList.add('hidden');
        toggleBtn.querySelector('i').className = 'fa-solid fa-chevron-left';
    }
}

document.getElementById('toggle-sidebar-btn').addEventListener('click', toggleSidebar);
document.getElementById('expand-sidebar-btn').addEventListener('click', toggleSidebar);

// ==========================================================================
// NAVIGATION BUTTONS
// ==========================================================================
document.getElementById('next-btn').addEventListener('click', goToNextSlide);
document.getElementById('prev-btn').addEventListener('click', goToPrevSlide);

// ==========================================================================
// PRESENTER PANEL
// ==========================================================================
function togglePresenter() {
    isPresenterOpen = !isPresenterOpen;
    const panel = document.getElementById('presenter-panel');
    panel.classList.toggle('collapsed', !isPresenterOpen);
    
    if (isPresenterOpen && !timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
            const secs = String(timerSeconds % 60).padStart(2, '0');
            document.getElementById('presenter-timer').textContent = `${mins}:${secs}`;
        }, 1000);
    }
}

document.getElementById('presenter-btn').addEventListener('click', togglePresenter);
document.getElementById('close-presenter-btn').addEventListener('click', () => {
    isPresenterOpen = false;
    document.getElementById('presenter-panel').classList.add('collapsed');
});

document.getElementById('timer-reset-btn').addEventListener('click', () => {
    timerSeconds = 0;
    document.getElementById('presenter-timer').textContent = '00:00';
});

document.getElementById('font-inc-btn').addEventListener('click', () => {
    if (currentFontSize < 30) {
        currentFontSize += 2;
        document.getElementById('speaker-script').style.fontSize = currentFontSize + 'px';
        document.getElementById('font-size-display').textContent = currentFontSize + 'px';
    }
});

document.getElementById('font-dec-btn').addEventListener('click', () => {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.getElementById('speaker-script').style.fontSize = currentFontSize + 'px';
        document.getElementById('font-size-display').textContent = currentFontSize + 'px';
    }
});

// ==========================================================================
// THEME
// ==========================================================================
const themeModal = document.getElementById('theme-modal');

document.getElementById('theme-btn').addEventListener('click', () => {
    themeModal.classList.toggle('hidden');
});

document.getElementById('close-theme-modal-btn').addEventListener('click', () => {
    themeModal.classList.add('hidden');
});

themeModal.addEventListener('click', (e) => {
    if (e.target === themeModal) themeModal.classList.add('hidden');
});

document.querySelectorAll('.theme-option-card').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        document.body.className = theme + '-theme';
        currentTheme = theme;
        document.querySelectorAll('.theme-option-card').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        themeModal.classList.add('hidden');
    });
});

// ==========================================================================
// FULLSCREEN
// ==========================================================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        document.getElementById('fullscreen-btn').innerHTML = '<i class="fa-solid fa-compress"></i><span class="btn-text">Thu nhỏ</span>';
    } else {
        document.exitFullscreen();
        document.getElementById('fullscreen-btn').innerHTML = '<i class="fa-solid fa-expand"></i><span class="btn-text">Toàn màn hình</span>';
    }
}

document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);

// ==========================================================================
// PRINT FUNCTIONS
// ==========================================================================
function printSlidesPDF() {
    window.print();
}

function printScriptPDF() {
    const printWin = window.open('', '_blank');
    const scriptContent = slides.map((slide, i) => {
        const notes = slide.speakerNotes ? slide.speakerNotes.replace(/<br>/g, '\n').replace(/<[^>]+>/g, '') : 'Chưa có kịch bản.';
        return `<div style="page-break-inside:avoid;margin-bottom:30px;border-bottom:2px solid #ccc;padding-bottom:20px;">
            <h3 style="color:#8b0000;font-size:16px;">Slide ${i+1}: ${slide.title}</h3>
            <p style="white-space:pre-wrap;font-size:14px;line-height:1.8;color:#333;">${notes}</p>
        </div>`;
    }).join('');
    
    printWin.document.write(`<!DOCTYPE html><html><head>
        <title>Kịch bản thuyết trình GDQP – Nhóm 2</title>
        <meta charset="UTF-8">
        <style>
            body { font-family: 'Times New Roman', serif; margin: 40px; color: #000; }
            h1 { color: #8b0000; text-align: center; margin-bottom: 8px; }
            .subtitle { text-align: center; font-style: italic; margin-bottom: 30px; color: #555; }
        </style>
    </head><body>
        <h1>Kịch bản Thuyết trình</h1>
        <div class="subtitle">Nghệ thuật Quân sự trong Ba lần Kháng chiến chống Nguyên–Mông (TK XIII) – Nhóm 2</div>
        ${scriptContent}
    </body></html>`);
    printWin.document.close();
    printWin.print();
}

document.getElementById('print-btn').addEventListener('click', printSlidesPDF);
document.getElementById('print-script-btn').addEventListener('click', printScriptPDF);
document.getElementById('print-script-btn-presenter').addEventListener('click', printScriptPDF);

// ==========================================================================
// TOUCH/SWIPE SUPPORT
// ==========================================================================
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('slide-viewer').addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById('slide-viewer').addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        diff > 0 ? goToNextSlide() : goToPrevSlide();
    }
}, { passive: true });

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(max-width: 600px)').matches) toggleSidebar();
    updateSlideListUI();
    renderSlide(slides[0]);
});
