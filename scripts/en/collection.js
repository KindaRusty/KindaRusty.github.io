document.addEventListener('DOMContentLoaded', function() {
    // Sample data - Updated with English content and corrected paths
    const collections = [
        {
            title: "Tra Kieu Exhibition Hall",
            img: "../../media/Phong_Tra_Kieu.jpg",
            description: "The Tra Kieu relic site is located in Duy Son commune, Duy Xuyen district, Quang Nam province; 50 km south of Da Nang city center. In the late 19th and early 20th centuries, collectors found in this area some stone sculptures belonging to Champa culture, including fragments of altars, a linga and decorative reliefs. During 1927-1928, the French School of the Far East conducted excavations at Tra Kieu, discovering many sculptures along with temple foundations and traces of city walls. Comparing archaeological findings with records in ancient geographical documents, some researchers determined that Tra Kieu was once the capital of the Champa kingdom, corresponding to the name Simhapura mentioned in some Cham inscriptions.",
            artifacts: [
                { name: "Shiva Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/shiva.jpg", desc: "Outstanding Shiva statue from Tra Kieu." },
                { name: "Goddess Head Sculpture", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/nu-than.jpg", desc: "Goddess head sculpture made of sandstone." }
            ]
        },
        {
            title: "My Son Exhibition Hall",
            img: "../..//media/Phong_My_Son.jpg",
            description: "My Son was an important religious center of the Champa kingdom, located in present-day Quang Nam province, about 30km west of the Tra Kieu relic - one of Champa's former capitals. In the solemn space of a valley surrounded by small mountains, there are over 70 towers here, most built to worship the god Shiva. Through the first excavations and research in 1903-1904, Henri Parmentier and Charles Capeaux arranged the towers at My Son into groups, using letters to name the tower groups and numbers to name each tower in the group.",
            artifacts: [
                { name: "Vishnu Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/vishnu.jpg", desc: "Stone Vishnu statue." }
            ]
        },
        {
            title: "Dong Duong Exhibition Hall",
            img: "../../media/Phong_Dong_Duong.jpg",
            description: "Dong Duong was a Buddhist center of Champa, located in the plains, about 20km south of My Son valley. According to inscriptions, in 875, King Indravarman II had a complex built at Dong Duong consisting of monasteries and temples to worship Bodhisattva Laksmindra Lokesvara, a form of Avalokiteshvara. The architectures were surrounded by rectangular citadels, connecting along the east-west axis. Each citadel had a gate tower opening to the east, with guardian deity statues on both sides of the gate.",
            artifacts: [
                { name: "Bodhisattva Tara Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/tara.jpg", desc: "Outstanding Bodhisattva Tara statue." }
            ]
        },
        {
            title: "Thap Mam Exhibition Hall",
            img: "../../media/Phong_Thap_Mam.jpg",
            description: "Thap Mam is the name of a ruined Cham relic, located in Nhon Thanh commune, An Nhon district, Binh Dinh province. A large-scale excavation was conducted at this location in 1934, discovering the foundation of a complex of many towers in an area surrounded by walls. The dating of the Thap Mam relic was determined to be around the 12th-13th centuries. The volume of artifacts collected in the 1934 excavation reached 58 tons, including large statues and many stone architectural decorative parts.",
            artifacts: [
                { name: "Elephant Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/voi.jpg", desc: "Large stone elephant statue." }
            ]
        },
        {
            title: "Quang Binh, Quang Tri, Thua Thien - Hue Exhibition Hall",
            img: "../../media/Phong_Quang_Binh_Quang_Tri_Thua_Thien_Hue.jpg",
            description: "The provinces of Quang Binh, Quang Tri and Thua Thien-Hue are located north of Hai Van Pass, the northernmost region of the ancient Champa kingdom. In this area, there is still a small Cham tower, discovered in 2001 in My Khanh hamlet, Phu Dien commune, Phu Vang district, Thua Thien Hue province. Although there are not many temples and towers still standing on the ground, many foundation traces, sculptural artifacts and some inscriptions can still be found in the northern Champa area.",
            artifacts: [
                { name: "Ancient Ceramic Jar", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/binh-gom.jpg", desc: "Ancient Cham ceramic jar." }
            ]
        },
        {
            title: "Da Nang Exhibition Hall",
            img: "../../media/Phong_Da_Nang.jpg",
            description: "The Da Nang collection includes many artifacts collected before 1975 from the Phong Le, Qua Giang, and Xuan Duong relics. Surveys in the past 40 years, after 1975, have discovered more artifacts and architectural traces belonging to the Champa period in other localities of Da Nang city, such as the An Son, Khue Trung, and Go Dui relics. Archaeological excavations from 2012-2014 at Phong Le and Cam Mit relics discovered artifacts with religious significance in Cham tower chambers deep underground.",
            artifacts: [
                { name: "Lion Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/su-tu.jpg", desc: "Stone lion statue." }
            ]
        },
        {
            title: "Quang Nam Exhibition Hall",
            img: "../../media/Phong_Quang_Nam.jpg",
            description: "Quang Nam province was an important center of the Champa kingdom. Many large relic complexes have been found in localities of Quang Nam, including the Tra Kieu citadel, My Son sanctuary, and Dong Duong Buddhist monastery. The number of artifacts collected at these sites is very large and are displayed independently in the Tra Kieu, My Son and Dong Duong Halls. In addition, Quang Nam has many other relics; some have been surveyed and studied since the early 20th century.",
            artifacts: [
                { name: "Deity Head Sculpture", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/dau-than.jpg", desc: "Stone deity head sculpture." }
            ]
        },
        {
            title: "Quang Ngai Exhibition Hall",
            img: "../../media/Phong_Quang_Ngai.jpg",
            description: "In present-day Quang Ngai province, Cham towers like those in the two neighboring provinces of Quang Nam and Binh Dinh are no longer visible. But since the early 20th century, archaeologists have surveyed and discovered Cham relics in localities of Quang Ngai province, such as in Dong Phuc, Phu Tho, Co Luy, and Chau Sa. In particular, the 1904 excavation at the Chanh Lo relic (now in Quang Ngai town) discovered traces of a large temple complex, dating to around the 11th century along with many artifacts.",
            artifacts: [
                { name: "Small Elephant Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/voi-nho.jpg", desc: "Small stone elephant statue." }
            ]
        },
        {
            title: "Binh Dinh - Kon Tum Exhibition Hall",
            img: "../../media/Phong_Binh_Dinh_Kon_Tum.jpg",
            description: "Binh Dinh province is about 300 km south of Da Nang city. Many researchers believe that present-day Binh Dinh province was once an important center of the Champa kingdom, mentioned in some inscriptions with the name Vijaya. In Binh Dinh there are Cham towers that still stand firmly today, including the Canh Tien, Thu Thien, Duong Long, Binh Lam, and Hung Thanh tower groups. Most artifacts collected from Binh Dinh date from the 12th century onwards.",
            artifacts: [
                { name: "Ganesha Statue", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/ganesha.jpg", desc: "Ganesha deity statue." }
            ]
        },
        {
            title: "Epigraphy Exhibition Hall",
            img: "../../media/Phong_Van_Khac.jpg",
            description: "Champa inscriptions have been found on some rock faces, on architectural decorative details, on deity statue pedestals and on metal or terracotta objects. However, important and detailed texts are mainly carved on stone steles. Stone steles are usually erected in front of towers worshipping Hindu or Buddhist deities, recording the construction and restoration of temples as well as the offering of land or assignment of caretakers for the temples.",
            artifacts: [
                { name: "Ancient Stone Stele", img: "https://chammuseum.danang.vn/wp-content/uploads/2020/07/bia-ky.jpg", desc: "Ancient stone inscription stele." }
            ]
        }
    ];

    // Render collection cards
    function renderCollections() {
        const grid = document.getElementById('collectionGrid');
        if (!grid) return;

        collections.forEach((col, idx) => {
            const card = document.createElement('div');
            card.className = 'collection-card';
            card.innerHTML = `
                <img src="${col.img}" alt="${col.title}" onerror="this.src='../../../media/placeholder.jpg'">
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

    function showArtifacts(idx) {
        const col = collections[idx];
        if (artifactsTitle) artifactsTitle.textContent = col.title;
        
        if (artifactsList) {
            artifactsList.innerHTML = `<div style="margin-bottom:20px;color:#666;line-height:1.6;">${col.description}</div>`;
            col.artifacts.forEach(art => {
                const artDiv = document.createElement('div');
                artDiv.className = 'artifact-card';
                artDiv.innerHTML = `
                    <img src="${art.img}" alt="${art.name}" onerror="this.src='../../../media/placeholder.jpg'">
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
