document.addEventListener('DOMContentLoaded', function() {
    // Sample data
    const collections = [
        {
            title: "Phòng trưng bày Trà Kiệu",
            img: "../../media/Phong_Tra_Kieu.jpg",
            description: "Di tích Trà Kiệu thuộc xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam; cách trung tâm thành phố Đà Nẵng 50 km về phía nam. Những năm cuối thế kỷ XIX và đầu thế kỷ XX, các nhà sưu tầm đã tìm thấy ở khu vực này một số hiện vật điêu khắc đá thuộc văn hóa Champa, bao gồm các mảnh vỡ của đài thờ, một chiếc linga và những phù điêu trang trí. Trong hai năm 1927-1928, Trường Viễn Đông Bác Cổ Pháp đã tiến hành khai quật tại Trà Kiệu, phát hiện nhiều hiện vật điêu khắc cùng với nền móng các đền tháp và dấu vết các tường thành. Đối chiếu những phát hiện khảo cổ với ghi chép trong tài liệu địa chí xưa, một số nhà nghiên cứu xác định Trà Kiệu từng là kinh đô của vương quốc Champa, tương ứng với tên gọi Simhapura được nhắc đến trong một vài văn bia Chăm. Phần lớn hiện vật trong bộ sưu tập Trà Kiệu được xác định niên đại vào khoảng thế kỷ X - XI, nhưng cũng có hiện vật được số đông các nhà nghiên cứu xác định vào thế kỷ V - VI (Yaksa, BTC 136 - 20.2 ) hoặc cũng có hiện vật đang còn những ý kiến xác định niên đại khác xa nhau đến 3 - 4 thế kỷ (Đài thờ, BTC 95 - 22.5). Đặc điểm nghệ thuật của hiện vật Trà Kiệu có nét chung là tính mềm mại, sống động, và cũng hết sức đa dạng về trang phục, trang sức, động tác.",
            artifacts: [
                { name: "Tượng thần Shiva", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/shiva.jpg", desc: "Tượng thần Shiva nổi bật của Trà Kiệu." },
                { name: "Đầu tượng nữ thần", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/nu-than.jpg", desc: "Đầu tượng nữ thần bằng đá sa thạch." }
            ]
        },
        {
            title: "Phòng trưng bày Mỹ Sơn",
            img: "../../media/Phong_My_Son.jpg",
            description: "Mỹ Sơn từng là một trung tâm tín ngưỡng quan trọng của vương quốc Champa, thuộc địa phận tỉnh Quảng Nam ngày nay, cách di tích Trà Kiệu – một trong những kinh đô của Champa trước đây – khoảng 30km về phía tây. Trong không gian thâm nghiêm của một thung lũng bao bọc bởi những ngọn núi nhỏ, tại đây có trên 70 ngôi tháp, phần lớn được xây dựng để thờ thần Siva. Qua các đợt khai quật và nghiên cứu đầu tiên vào những năm 1903 – 1904, Henri Parmentier và Charles Capeaux đã sắp xếp các ngôi tháp ở Mỹ Sơn thành các nhóm, dùng chữ cái đặt tên cho các nhóm tháp và chữ số đặt tên cho từng ngôi tháp trong nhóm, ví dụ ngôi tháp trung tâm của nhóm tháp chính được gọi tên là tháp A1. Theo văn bia, tại Mỹ Sơn có thể đã có những ngôi tháp đầu tiên xây dựng từ khoảng thế kỷ IV hoặc V, nhưng đến nay chỉ còn lại các công trình kiến trúc có niên đại sớm nhất là khoảng thế kỷ VII (như nhóm tháp E). Đa số các công trình được bảo tồn tốt nhất có niên đại từ thế kỷ X đến XI (các nhóm A, B, C, Đ). Những ngôi tháp được xây dựng muộn nhất tại Mỹ Sơn là vào khoảng thế kỷ XI đến thế kỷ XIII (nhóm tháp G và tháp trung tâm của nhóm B). Những hiện vật trưng bày tại phòng Mỹ Sơn tiêu biểu cho nhiều phong cách trong quá trình phát triển của nghệ thuật điêu khắc Chăm.",
            artifacts: [
                { name: "Tượng thần Vishnu", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/vishnu.jpg", desc: "Tượng thần Vishnu bằng đá." }
            ]
        },
        {
            title: "Phòng trưng bày Đồng Dương",
            img: "../../media/Phong_Dong_Duong.jpg",
            description: "Đồng Dương là một trung tâm Phật giáo của Champa, nằm ở vùng đồng bằng, cách thung lũng Mỹ Sơn khoảng 20km về phía nam. Theo văn bia, năm 875, vua Indravarman II đã cho xây dựng ở Đồng Dương một công trình gồm tu viện và đền tháp để thờ Bồ tát Laksmindra Lokesvara, một dạng của Bồ tát Quán thế âm. Các kiến trúc được bao bọc bởi những vòng thành hình chữ nhật, nối tiếp nhau theo trục đông - tây. Mỗi vòng thành có một tháp cổng mở về hướng đông, hai bên cổng có các tượng thần hộ pháp canh giữ. Các tác phẩm điêu khắc Phật giáo tại Đồng Dương cho thấy sự phát triển của Phật giáo Đại thừa tại Champa. Mặc dù có một số nét ảnh hưởng từ Trung Hoa, Ấn Độ và các nước lân cận, kiến trúc và điêu khắc Đồng Dương mang đậm yếu tố bản địa, đã tạo nên một phong cách độc đáo, giàu ấn tượng trong nghệ thuật Chăm. Khu di tích này được Henri Parmentier và Charles Carpeaux nghiên cứu và khai quật vào mùa thu năm 1902. Đến nay, di tích Đồng Dương hầu như đã bị hủy hoại hoàn toàn bởi thời gian và chiến tranh, nhưng những hiện vật trưng bày ở đây cho ta hình dung phần nào sự nguy nga, tráng lệ của khu đền tháp và Phật viện này.",
            artifacts: [
                { name: "Tượng Bồ tát Tara", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/tara.jpg", desc: "Tượng Bồ tát Tara nổi bật." }
            ]
        },
        {
            title: "Phòng trưng bày Tháp Mẫm",
            img: "../../media/Phong_Thap_Mam.jpg",
            description: "Tháp Mẫm là tên gọi một di tích Chăm đã đổ nát, nằm ở xã Nhơn Thành, huyện An Nhơn, tỉnh Bình Định. Một cuộc khai quật quy mô lớn đã được tiến hành tại vị trí này vào năm 1934, phát hiện nền móng một quần thể nhiều tháp trong một khu vực có tường bao quanh. Niên đại của di tích Tháp Mẫm được xác định vào khoảng thế kỷ XII - XIII. Khối lượng hiện vật thu thập được trong cuộc khai quật năm 1934 lên đến 58 tấn, bao gồm những tượng kích thước lớn và nhiều bộ phận trang trí kiến trúc bằng đá. Một cuộc khai quật khác được tiến hành tại đây vào năm 2011 và cũng phát hiện thêm một số hiện vật tương tự. Phong cách nghệ thuật của các hiện vật thu thập từ di tích Tháp Mẫm có nét chung ở tính phức tạp, tỉ mỉ, nhưng rơi vào khuôn mẫu, thiếu vẻ mềm mại, linh hoạt. Danh xưng 'Tháp Mẫm' sau đó đã được dùng để đặt tên cho một phong cách nghệ thuật Chăm có cùng đặc trưng với nhóm hiện vật này. Sau giai đoạn Tháp Mẫm, nghệ thuật điêu khắc Chăm từng bước suy thoái dần.",
            artifacts: [
                { name: "Tượng voi", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/voi.jpg", desc: "Tượng voi đá lớn." }
            ]
        },
        {
            title: "Phòng trưng bày Quảng Bình, Quảng Trị, Thừa Thiên - Huế",
            img: "../../media/Phong_Quang_Binh_Quang_Tri_Thua_Thien_Hue.jpg",
            description: "Các tỉnh Quảng Bình, Quảng Trị và Thừa Thiên- Huế nằm về phía bắc đèo Hải Vân, là vùng cực bắc của vương quốc Champa xưa. Ở khu vực này hiện còn một ngôi tháp Chăm nhỏ, được phát hiện vào năm 2001 tại thôn Mỹ Khánh, xã Phú Diên, huyện Phú Vang, tỉnh Thừa Thiên Huế. Mặc dù không có nhiều đền tháp còn đứng vững trên mặt đất, nhưng vẫn còn tìm thấy ở khu vực bắc Champa nhiều dấu tích nền móng, hiện vật điêu khắc và một số văn bia. Các văn bia có niên đại từ thế kỷ 6 đến thế kỷ 10 nói đến việc xây dựng các đền tháp thờ thần Siva cũng như các công trình Phật Giáo. Phong cách nghệ thuật của điêu khắc cho thấy tính thống nhất của khu vực này với vùng lân cận phía nam, Đà Nẵng và Quảng Nam, trong các thế kỷ IX - X.",
            artifacts: [
                { name: "Bình gốm cổ", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/binh-gom.jpg", desc: "Bình gốm cổ Chăm." }
            ]
        },
        {
            title: "Phòng trưng bày Đà Nẵng",
            img: "../../media/Phong_Da_Nang.jpg",
            description: "Bộ sưu tập Đà Nẵng gồm nhiều hiện vật được sưu tầm trước năm 1975 từ các di tích Phong Lệ, Quá Giáng, Xuân Dương. Những cuộc khảo sát trong 40 năm qua, sau 1975, đã phát hiện thêm nhiều hiện vật và dấu vết kiến trúc thuộc thời kỳ Champa ở các địa phương khác của thành phố Đà Nẵng, như các di tích An Sơn, Khuê Trung, Gò Đùi. Đặc biệt các cuộc khai quật khảo cổ trong các năm 2012- 2014 tại di tích Phong Lệ và Cấm Mít đã phát hiện những hiện vật mang ý nghĩa tín ngưỡng tại các lòng tháp Chăm sâu dưới mặt đất. Những hiện vật điêu khắc, văn bia và dấu vết kiến trúc cho thấy khu vực Đà Nẵng là một vùng phát triển về kinh tế và giao thương của vương quốc Champa trong các thế kỷ IX đến XIII.",
            artifacts: [
                { name: "Tượng sư tử", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/su-tu.jpg", desc: "Tượng sư tử đá." }
            ]
        },
        {
            title: "Phòng trưng bày Quảng Nam",
            img: "../../media/Phong_Quang_Nam.jpg",
            description: "Địa bàn tỉnh Quảng Nam là một trung tâm quan trọng của vương quốc Champa. Nhiều khu di tích lớn đã được tìm thấy tại các địa phương của Quảng Nam, gồm kinh thành Trà Kiệu, thánh địa Mỹ Sơn, Phật viện Đồng Dương. Số lượng hiện vật thu thập được tại các di tích này rất lớn và được trưng bày độc lập tại các Phòng Trà Kiệu, Phòng Mỹ Sơn và Phòng Đồng Dương. Ngoài ra, ở Quảng Nam còn có nhiều di tích khác; một số di tích đã được khảo sát, nghiên cứu từ đầu thế kỷ XX, một số được phát hiện và tiếp tục khai quật sau năm 1975, bao gồm các di tích Khương Mỹ, An Mỹ, Phú Hưng, Chiên Đàn. Các bộ sưu tập từ các di tích này thể hiện bức tranh đa dạng về nghệ thuật điêu khắc Chăm với nhiều phong cách nghệ thuật phát triển tập trung tại một địa bàn qua nhiều thời kỳ của vương quốc Champa.",
            artifacts: [
                { name: "Đầu tượng thần", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/dau-than.jpg", desc: "Đầu tượng thần bằng đá." }
            ]
        },
        {
            title: "Phòng trưng bày Quảng Ngãi",
            img: "../../media/Phong_Quang_Ngai.jpg",
            description: "Trên địa bàn tỉnh Quảng Ngãi ngày nay không còn thấy các tháp Chăm như ở hai tỉnh lân cận Quảng Nam và Bình Định. Nhưng từ đầu thế kỷ XX, các nhà khảo cổ đã khảo sát và phát hiện những di tích Chăm ở các địa phương của tỉnh Quảng Ngãi, như ở Đông Phúc, Phú Thọ, Cổ Lũy, Châu Sa. Đặc biệt, cuộc khai quật năm 1904 tại di tích Chánh Lộ (nay thuộc thị xã Quảng Ngãi) đã phát hiện dấu vết một khu đền tháp lớn, có niên đại vào khoảng thế kỷ XI cùng với nhiều hiện vật. Đầu năm 2017, một nền móng tháp Chăm được phát hiện ở núi Thiên Bút, gần với di tích Chánh Lộ.",
            artifacts: [
                { name: "Tượng voi nhỏ", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/voi-nho.jpg", desc: "Tượng voi nhỏ bằng đá." }
            ]
        },
        {
            title: "Phòng trưng bày Bình Định - Kon Tum",
            img: "../../media/Phong_Binh_Dinh_Kon_Tum.jpg",
            description: "Tỉnh Bình Định cách thành phố Đà Nẵng khoảng 300 km về phía nam. Nhiều nhà nghiên cứu cho rằng địa bàn tỉnh Bình Định ngày nay từng là một trung tâm quan trọng của vương quốc Champa, được nhắc đến trong một số văn bia với tên gọi Vijaya. Tại Bình Định có những ngôi tháp Chăm còn đứng vững cho đến ngày nay, gồm các nhóm tháp Cánh Tiên, Thủ Thiện, Dương Long, Bình Lâm, Hưng Thạnh. Ngoài ra tại Bình Định còn có nhiều phế tích Chăm, trong đó phế tích Tháp Mẫm đã được khai quật vào các năm 1934 và 2011, phát hiện nhiều tượng thần và tượng vật linh kích thước lớn. Bên cạnh gian trưng bày dành riêng cho bộ sưu tập Tháp Mẫm, các hiện vật từ các di tích khác thuộc tỉnh Bình Định được trưng bày chung trong gian trưng bày Bình Định – Kon Tum. Hầu hết các hiện vật sưu tầm từ Bình Định đều có niên đại từ thế kỷ XII về sau. Hiện vật từ địa bàn Kon Tum (BTC 167 – 3.16) có niên đại muộn nhất trong bộ sưu tập điêu khắc đá của Bảo tàng Chăm (thế kỷ XIV - XV).",
            artifacts: [
                { name: "Tượng thần Ganesha", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/ganesha.jpg", desc: "Tượng thần Ganesha." }
            ]
        },
        {
            title: "Phòng trưng bày Văn khắc",
            img: "../../media/Phong_Van_Khac.jpg",
            description: "Văn khắc Champa đã được tìm thấy tại một số vách đá, trên các chi tiết trang trí kiến trúc, trên các bệ tượng thần và trên các vật dụng bằng kim loại hoặc bằng đất nung. Tuy nhiên các bản văn quan trọng và chi tiết chủ yếu được khắc trên các tấm bia đá. Bia đá thường được dựng trước các ngôi tháp thờ các vị thần Hindu giáo hoặc Phật giáo, ghi lại việc xây dựng, trùng tu đền tháp cũng như việc dâng cúng đất đai hoặc giao người trông coi các ngôi đền tháp. Các văn bản khắc trên bia thường nhân danh các vị vua, các người trong hoàng tộc hoặc quan lại cao cấp; nội dung văn bia cho chúng ta biết những thông tin về đời sống xã hội và tín ngưỡng của vương quốc Champa cũng như mối quan hệ của Champa với các nước láng giềng. Niên đại ghi trên các văn bia là cơ sở quan trọng để xác định thời kỳ xây dựng các ngôi tháp cũng như giúp suy đoán niên đại của các hiện vật điêu khắc gắn liền với các công trình kiến trúc. Các văn bia trước thế kỷ X sử dụng tiếng Sanskrit và dùng hệ thống chữ viết Brahmi (chữ Phạn). Từ thế kỷ X về sau, tiếng Chăm cổ được sử dụng thay thế dần cho tiếng Sanskrit trên các văn bia.",
            artifacts: [
                { name: "Bia ký cổ", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/bia-ky.jpg", desc: "Bia ký cổ bằng đá." }
            ]
        }
    ];

    // Render collection cards
    // Fix the renderCollections function
    function renderCollections() {
        const grid = document.getElementById('collectionGrid');
        if (!grid) return;

        collections.forEach((col, idx) => {
            const card = document.createElement('div');
            card.className = 'collection-card';
            card.innerHTML = `
                <img src="${col.img}" alt="${col.title}" onerror="this.src='../../media/placeholder.jpg'">
                <div class="collection-card-title">${col.title}</div>
                <div class="collection-card-description">${col.description.substring(0, 150)}...</div>
            `;
            card.onclick = () => showArtifacts(idx);
            grid.appendChild(card);
        });
    }

    // Modal logic
    const modal = document.getElementById('artifactsModal');
    const closeBtn = document.getElementById('closeArtifacts');
    const artifactsTitle = document.getElementById('artifactsTitle');
    const artifactsList = document.getElementById('artifactsList');

    // Also fix the showArtifacts function
    function showArtifacts(idx) {
        const col = collections[idx];
        if (artifactsTitle) artifactsTitle.textContent = col.title;
        
        if (artifactsList) {
            artifactsList.innerHTML = `<div style="margin-bottom:20px;color:#666;line-height:1.6;">${col.description}</div>`;
            col.artifacts.forEach(art => {
                const artDiv = document.createElement('div');
                artDiv.className = 'artifact-card';
                artDiv.innerHTML = `
                    <img src="${art.img}" alt="${art.name}" onerror="this.src='../../media/placeholder.jpg'">
                    <div class="artifact-info">
                        <div class="artifact-name">${art.name}</div>
                        <div class="artifact-description">${art.desc || ""}</div>
                    </div>
                `;
                artifactsList.appendChild(artDiv);
            });
        }
        
        if (modal) modal.classList.add('active');
    }

    // Event listeners
    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.remove('active');
    }
    
    if (modal) {
        modal.onclick = (e) => { 
            if (e.target === modal) modal.classList.remove('active'); 
        };
    }

    // Initialize
    renderCollections();

    // Export for global access
    window.CollectionModule = {
        collections,
        renderCollections,
        showArtifacts
    };
});
