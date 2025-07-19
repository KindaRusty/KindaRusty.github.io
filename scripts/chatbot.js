const LANGS = {
  vi: {
    chatHeader: "Hỏi AI",
    botWelcome: "Xin chào! Bạn muốn biết gì về nghệ thuật, lịch sử Chăm hoặc muốn phân tích ảnh?",
    inputPlaceholder: "Nhập câu hỏi hoặc mô tả về ảnh...",
    sendBtn: '<i class="fa fa-paper-plane"></i> Gửi',
    openTitle: "Chat với AI",
    answeringText: "Đang trả lời...",
    systemContent: "Chỉ trả lời dựa trên nội dung website được cung cấp và ghi rõ nguồn. Trả lời ngắn gọn, chính xác bằng tiếng Việt nếu có thể.",
    getWebsite: () => "https://kindarusty.github.io"
  },
  en: {
    chatHeader: "Ask AI",
    botWelcome: "Hello! What would you like to know about Cham art, history, or would you like me to analyze an image?",
    inputPlaceholder: "Enter your question or describe the image...",
    sendBtn: '<i class="fa fa-paper-plane"></i> Send',
    openTitle: "Chat with AI",
    answeringText: "Answering...",
    systemContent: "Only answer based on the provided website and clearly cite sources. Respond concisely and accurately in English if possible.",
    getWebsite: () => "https://kindarusty.github.io"
  }
};

document.addEventListener('DOMContentLoaded', function() {
    // ---- Cài đặt ----
    const API_KEY = "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";
    // Đọc ngôn ngữ hiện tại từ hidden input hoặc mặc định
    const langSwitcher = document.getElementById("lang-switcher");
    function getLang() {
      return langSwitcher ? langSwitcher.value : 'vi';
    }
    // ---- DOM ----
    const openBtn = document.getElementById("openChatBtn");
    const closeBtn = document.getElementById("closeChatBtn");
    const chatWindow = document.getElementById("chatWindow");
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const headerText = document.getElementById("chat-header-text");
    const welcomeMsg = document.getElementById("bot-welcome-message");

    // Đặt lại UI theo ngôn ngữ
    function setLanguage(lang) {
      const t = LANGS[lang] || LANGS.vi;
      if (headerText) headerText.textContent = t.chatHeader;
      if (welcomeMsg) welcomeMsg.textContent = t.botWelcome;
      if (chatInput) chatInput.placeholder = t.inputPlaceholder;
      if (sendBtn) sendBtn.innerHTML = t.sendBtn;
      if (openBtn) openBtn.title = t.openTitle;
    }
    setLanguage(getLang());

    if(openBtn && closeBtn && chatWindow) {
        openBtn.onclick = () => {
            chatWindow.classList.add("open");
            openBtn.style.display = 'none';
        };
        closeBtn.onclick = () => {
            chatWindow.classList.remove("open");
            openBtn.style.display = 'flex';
        };
    }
    if(sendBtn && chatInput) {
        sendBtn.onclick = sendPrompt;
        chatInput.addEventListener("keydown", function(e){
            if (e.key === "Enter") sendPrompt();
        });
    }

    function appendMessage(content, sender="bot", isHtml=false) {
        const div = document.createElement("div");
        div.className = "message " + (sender === "user" ? "user-message" : "bot-message");
        if (isHtml) {
            div.innerHTML = content;
        } else {
            div.textContent = content;
        }
        if (chatMessages) chatMessages.appendChild(div);
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function boldifyMarkdown(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    }
    function linkifyCitation(content, sources) {
        if (!sources || !Array.isArray(sources) || sources.length === 0) return content;
        return content.replace(/\[(\d+)\]/g, function(_, n) {
            n = Number(n);
            const source = sources.find(s =>
                (s.id && s.id === n) ||
                (s.number && s.number === n) ||
                (s.index && s.index === n)
            );
            if (source && source.url)
                return `<a href="${source.url}" target="_blank">[${n}]</a>`;
            return `[${n}]`;
        });
    }

    async function sendPrompt() {
        const lang = getLang();
        const t = LANGS[lang] || LANGS.vi;
        const userRaw = chatInput.value.trim();
        if (!userRaw) return;
        appendMessage(userRaw, "user");
        chatInput.value = "";
        appendMessage(t.answeringText, "bot");
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;

        const DEFAULT_WEBSITE = t.getWebsite();

        const compositePrompt = lang === 'vi'
          ? `Câu hỏi: ${userRaw} (ưu tiên trả lời dựa trên dữ liệu trang web sau: ${DEFAULT_WEBSITE})\nTrang web cần truy cập: ${DEFAULT_WEBSITE}`
          : `Question: ${userRaw} (please answer based on the following website: ${DEFAULT_WEBSITE})\nWebsite to access: ${DEFAULT_WEBSITE}`;

        const url = "https://api.perplexity.ai/chat/completions";
        const payload = {
            model: "sonar",
            messages: [
                {role: "system", content: t.systemContent},
                {role: "user", content: compositePrompt}
            ],
            max_tokens: 300,
            temperature: 0.2
        };
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + API_KEY,
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();
            const loading = document.querySelectorAll(".bot-message");
            if (loading.length) loading[loading.length-1].remove();
            let answer = data.choices[0].message.content.trim();

            let sources =
                data.choices[0].message.sources ||
                data.choices[0].message.citations ||
                (data.choices[0].sources ? data.choices[0].sources : null);

            answer = boldifyMarkdown(answer);
            if (sources && Array.isArray(sources) && sources.length > 0) {
                answer = linkifyCitation(answer, sources);
                appendMessage(answer, "bot", true);
            } else {
                appendMessage(answer, "bot", true);
            }
        } catch (e) {
            const loading = document.querySelectorAll(".bot-message");
            if (loading.length) loading[loading.length-1].remove();
            appendMessage(
              (lang==='vi' ? "Lỗi khi gọi API: " : "API error: ") + e.message, "bot", false
            );
        }
    }

    // Nếu bạn muốn thay đổi ngôn ngữ động bằng code khác, dùng:
    // document.getElementById("lang-switcher").value = "en";
    // document.getElementById("lang-switcher").dispatchEvent(new Event("change"));
    // Thêm sự kiện cho hidden input nếu đổi trong runtime
    if(langSwitcher) {
      langSwitcher.addEventListener("change", function() {
        setLanguage(getLang());
      });
    }
});
