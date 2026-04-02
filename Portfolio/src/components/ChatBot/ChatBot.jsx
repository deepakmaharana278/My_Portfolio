import React, { useState, useRef, useEffect } from "react";
import { IoChatbubbleEllipses, IoClose, IoPaperPlane } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

let userName = null;
let lastTopic = null;

const withName = (text) =>
  userName ? text.replace("{name}", `, ${userName}`) : text.replace("{name}", "");

const getReply = (input) => {
  const msg = input.toLowerCase().trim();

  const nameMatch = input.match(
    /(?:my name(?:\s+is)?|call me|i(?:'m| am) (?:called|named)|i go by)\s+([A-Za-z]{2,})/i
  );
  if (nameMatch) {
    userName = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
    return {
      text: `Nice to meet you, ${userName}! 😊\n\nI'm Deepak's portfolio assistant. I can tell you all about his skills, projects, education, and more.\n\nWhat would you like to know, ${userName}?`,
      links: [],
    };
  }

  if (/(what'?s my name|what is my name|iam |do you (know|remember) my name|who am i)/i.test(msg)) {
    return userName
      ? { text: `Of course! Your name is ${userName}. 😄\n\nAnything else I can help you with?`, links: [] }
      : { text: `I don't know your name yet! 🤔\n\nTell me — say "My name is Alex" and I'll remember it!`, links: [] };
  }

  if (/(^hi$|^hey$|^hello$|^hii+$|^hlo$|^hola$|howdy|what'?s up|^sup$|good morning|good afternoon|good evening)/i.test(msg)) {
    const greet = /good morning/i.test(msg) ? "Good morning"
      : /good afternoon/i.test(msg) ? "Good afternoon"
      : /good evening/i.test(msg) ? "Good evening"
      : "Hey there";
    return {
      text: `${greet}${withName("{name}")}! 👋 Great to have you here!\n\nI'm Deepak's personal assistant. Ask me anything about his skills, projects, education, or how to reach him.\n\nWhat would you like to know?`,
      links: [],
    };
  }

  if (/(how are you|how'?s it going|you okay\??|are you good\??|how do you do)/i.test(msg)) {
    return {
      text: `I'm doing great${withName("{name}")}! Thanks for asking 😊\n\nAlways ready to chat about Deepak and his work. What can I help you with today?`,
      links: [],
    };
  }

  if (/^i'?m (good|fine|great|awesome|fantastic|okay|not bad|doing well)[\.\!]*$/i.test(msg)) {
    return {
      text: `That's wonderful to hear${withName("{name}")}! 😊\n\nSo, what brings you to Deepak's portfolio? I'm happy to tell you about his projects, skills, or experience!`,
      links: [],
    };
  }

  if (/^i'?m (tired|bored|sad|not great|not good|bad|stressed|busy)[\.\!]*$/i.test(msg)) {
    return {
      text: `Aww, hope you feel better soon${withName("{name}")}! 💙\n\nMaybe exploring some of Deepak's cool projects will cheer you up? 😄`,
      links: [],
    };
  }

  if (/(you'?re (cool|awesome|great|amazing|good|helpful|smart|nice|the best)|well done|good bot|nice bot)/i.test(msg)) {
    return {
      text: `Aww, thank you${withName("{name}")}! 😄 That really means a lot!\n\nI'll pass the compliment on to Deepak who built me. What else can I help you with? 🚀`,
      links: [],
    };
  }

  if (/(tell me a joke|^joke$|make me laugh|something funny)/i.test(msg)) {
    const jokes = [
      "Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛😂",
      "Why did the developer go broke?\n\nBecause he used up all his cache! 💸😂",
      "A SQL query walks into a bar and says to two tables...\n\n\"Can I JOIN you?\" 😂",
      "Why do Java developers wear glasses?\n\nBecause they don't C#! 👓😂",
    ];
    return {
      text: `Here's one for you${withName("{name}")} 😄\n\n${jokes[Math.floor(Math.random() * jokes.length)]}`,
      links: [],
    };
  }

  if (/(who (made|built|created|coded) you|who are you|what are you|your name|are you (a )?(bot|ai|robot|human))/i.test(msg)) {
    return {
      text: `I'm an AI assistant built by Deepak Maharana for his portfolio! 🤖\n\nI'm here to answer questions about Deepak — his projects, skills, education, and more.\n\nWhat would you like to know${withName("{name}")}?`,
      links: [],
    };
  }

  if (/(who is deepak|about deepak|tell me about (deepak|him)|introduce|deepak maharana)/i.test(msg)) {
    return {
      text: `👨‍💻 Deepak Maharana is a passionate Computer Science & Engineering student at ABIT, Cuttack (2022–2026).\n\nHis top skill is Python, which he uses for web development, AI/ML, and computer vision. He has built 9+ full-stack projects and is actively available for work! 🚀`,
      links: [],
    };
  }

  if (/(qualification|study|studies|background|academic)/i.test(msg)) {
    return {
      text: `🎓 Deepak's Academic Background:\n\n• B.Tech CSE — ABIT, Cuttack (2022–2026) under BPUT\n• Class XII (Science) — Parama Nanda HSS, Bolgarh\n• Class X — Daspalla High School\n\nCurrently in his final year of B.Tech!`,
      links: [],
    };
  }

  if (/(how many project|number of project|total project|count of project)/i.test(msg)) {
    return {
      text: `Deepak has built 9+ impressive projects! 🚀\n\nThey include full-stack web apps, AI/ML tools, and more. Check them out on GitHub:`,
      links: [{ label: "View All Projects", url: "https://github.com/deepakmaharana278" }],
    };
  }

  if (/(project|portfolio|show me what|what has he built)/i.test(msg)) {
    lastTopic = "projects";
    return {
      text: `💼 Deepak's Projects:\n\n🍕 Food Ordering System\n🛒 E-commerce Platform\n💰 Finance Tracker\n👁️ Face Detection System\n🤖 Deepak-GPT (AI Chatbot)\n🏥 Hospital Management System\n🎮 Gaming Website\n👥 Employee Management\n\nAsk about any one for details + live links! 🔗`,
      links: [{ label: "GitHub Profile", url: "https://github.com/deepakmaharana278" }],
    };
  }


  if (/(skill|tech stack|framework|language|tool|expertise)/i.test(msg)) {
    lastTopic = "skills";
    return {
      text: `🛠️ Deepak's Tech Stack:\n\n🐍 Languages: Python, JavaScript, C, Java\n🎨 Frontend: React, HTML, CSS, Tailwind, Bootstrap\n⚙️ Backend: Django, Node.js, Express\n🗄️ Database: MySQL, SQLite, MongoDB\n🔧 Tools: Git, GitHub, VS Code, Postman, Figma, Vercel, Netlify`,
      links: [],
    };
  }


  if (/\bpython\b/i.test(msg))
    return { text: `🐍 Python is Deepak's #1 skill!\n\nHe uses it for:\n• Web dev with Django\n• AI/ML (NumPy, Pandas, Scikit-learn)\n• Computer Vision (OpenCV)\n• Data Analysis`, links: [] };


  if (/(frontend|front.?end|\breact\b|\bhtml\b|\bcss\b|tailwind)/i.test(msg))
    return { text: `🎨 Frontend Skills:\n\n• React (primary framework)\n• HTML5 & CSS3\n• Tailwind CSS\n• Bootstrap\n• Responsive & Mobile-first Design`, links: [] };


  if (/(backend|back.?end|\bdjango\b|\bnode(\.js)?\b|server|\bapi\b|\bexpress\b)/i.test(msg))
    return { text: `⚙️ Backend Skills:\n\n• Django (Python)\n• Node.js + Express\n• REST API Development\n• MySQL, SQLite, MongoDB`, links: [] };

  if (/(food|restaurant|ordering)/i.test(msg))
    return { text: `🍕 Food Ordering System\n\nFull-stack app for restaurant management & ordering.\n\n🔧 Tech: Python, Django, React, SQLite, Bootstrap`, links: [{ label: "Live Demo", url: "https://food-ordering-system-1-mfnt.onrender.com/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/Food-Ordering-System" }] };

  if (/(ecommerce|e.?commerce|shop|store|\bmern\b)/i.test(msg))
    return { text: `🛒 E-commerce Platform\n\nFull-stack MERN app with auth, product management & payments.\n\n🔧 Tech: React, Node.js, MongoDB, Tailwind CSS`, links: [{ label: "Live Demo", url: "https://e-commerce-website-ts3p.vercel.app/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/E-Commerce-Website" }] };

  if (/(finance|expense|money tracker|budget)/i.test(msg))
    return { text: `💰 Finance Tracker\n\nDjango app to track finances & visualize spending habits.\n\n🔧 Tech: Python, Django, SQLite, Tailwind CSS`, links: [{ label: "Live Demo", url: "https://financetracker-0jxl.onrender.com/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/FinanceTracker" }] };

  if (/(face.?detect|opencv|computer vision)/i.test(msg))
    return { text: `👁️ Face Detection System\n\nAI-powered real-time face detection web app.\n\n🔧 Tech: Python, OpenCV, Deep Learning`, links: [{ label: "Source Code", url: "https://github.com/deepakmaharana278/Face_Detection" }] };

  if (/(deepak.?gpt|\bgpt\b|openai|chat.?bot)/i.test(msg))
    return { text: `🤖 Deepak-GPT\n\nFull-stack AI chatbot powered by OpenAI GPT API.\n\n🔧 Tech: Python, Django, React, Tailwind CSS, OpenAI`, links: [{ label: "Live Demo", url: "https://mini-chat-bot-5.onrender.com/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/Mini-Chat-Bot" }] };

  if (/(hospital|medical|\bhms\b)/i.test(msg))
    return { text: `🏥 Hospital Management System\n\nFull-stack HMS with patient & doctor management.\n\n🔧 Tech: Python, Django, React, Bootstrap`, links: [{ label: "Live Demo", url: "https://hospital-management-system-1-fbpb.onrender.com" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/Hospital-Management-System" }] };

  if (/(gaming website|game website|\bgaming\b)/i.test(msg))
    return { text: `🎮 Gaming Website\n\nFull-stack gaming site with third-party API integration.\n\n🔧 Tech: Python, Django, React, Tailwind CSS`, links: [{ label: "Live Demo", url: "https://gaming-website-lad.vercel.app/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/Gaming-Website--LAD" }] };

  if (/(employee|attendance|staff)/i.test(msg))
    return { text: `👥 Employee Management System\n\nReact app for managing employee records & attendance.\n\n🔧 Tech: React, Context API, Tailwind CSS`, links: [{ label: "Live Demo", url: "https://employeeemanagementt.netlify.app/" }, { label: "Source Code", url: "https://github.com/deepakmaharana278/Employee-Management" }] };


  if (/(machine learning|\bml\b|artificial intelligence|deep learning)/i.test(msg))
    return { text: `🤖 Deepak's AI/ML Experience:\n\n• Python-based ML projects\n• Libraries: NumPy, Pandas, Scikit-learn\n• Computer Vision with OpenCV\n• Real-time Face Detection System\n• Integrated OpenAI API in Deepak-GPT`, links: [] };


  if (/(education|college|school|degree|\bbtech\b|b\.?tech|\babit\b|\bbput\b|university)/i.test(msg))
    return { text: `🎓 Deepak's Education:\n\n• B.Tech CSE — ABIT, Cuttack (2022–2026) under BPUT\n• Class XII (Science) — Parama Nanda HSS, Bolgarh\n• Class X — Daspalla High School`, links: [] };


  if (/(contact|hire|available|reach out|connect|opportunity|freelance|internship)/i.test(msg))
    return { text: `📬 Deepak is actively available for work${withName("{name}")}!\n\nFeel free to reach out through the Contact section on this page, or connect via GitHub:`, links: [{ label: "GitHub Profile", url: "https://github.com/deepakmaharana278" }] };


  if (/(resume|\bcv\b|download)/i.test(msg))
    return { text: `📄 You can download Deepak's CV here.\n\nIt includes his education, skills, projects, and experience:`, links: [{ label: "Download CV", url: "https://drive.google.com/file/d/1JUIfetCwgZeRVwyyx9rX1OMXz-6yaZE-/view?usp=drivesdk" }] };

  if (/(github|source code|\brepo\b|repository)/i.test(msg))
    return { text: `⭐ All of Deepak's project source codes are publicly available on GitHub:`, links: [{ label: "GitHub Profile", url: "https://github.com/deepakmaharana278" }] };


  if (/(experience|how long|since when|years of)/i.test(msg))
    return { text: `💪 Deepak has 2+ years of hands-on coding experience.\n\nDuring this time he has:\n• Built 9+ full-stack projects\n• Worked with Python, Django, React\n• Explored AI/ML and Computer Vision`, links: [] };


  if (/(achiev|award|certificate|accomplishment)/i.test(msg))
    return { text: `🏆 Deepak's Achievements:\n\n• 9+ full-stack production-ready projects\n• Proficient in both frontend & backend\n• Hands-on AI/ML & Computer Vision experience\n• Actively building while completing his B.Tech`, links: [] };


  if (/(hobby|hobbies|interest|passion|free time|like to do|love to)/i.test(msg))
    return { text: `🎯 Beyond coding, Deepak is passionate about:\n\n• Exploring new technologies & frameworks\n• AI/ML research & experimentation\n• Building side projects that solve real problems\n• Open-source development`, links: [] };

  if (/(fav(ou?rite)?|best|top|coolest).{0,10}project/i.test(msg))
    return { text: `✨ Some of Deepak's standout projects:\n\n🤖 Deepak-GPT — AI-powered chatbot\n👁️ Face Detection — real-time computer vision\n🛒 E-commerce Platform — full MERN stack\n\nWant details on any of these?`, links: [] };

  if (/(tell me more|more info|elaborate|explain more|more about)/i.test(msg)) {
    if (lastTopic === "projects")
      return { text: `Sure! Which project interests you?\n\n🍕 Food Ordering System\n🛒 E-commerce Platform\n💰 Finance Tracker\n👁️ Face Detection\n🤖 Deepak-GPT\n🏥 Hospital Management\n🎮 Gaming Website\n👥 Employee Management\n\nJust name it!`, links: [{ label: "GitHub Profile", url: "https://github.com/deepakmaharana278" }] };
    if (lastTopic === "skills")
      return { text: `Deepak's core strengths:\n\n🐍 Python — his #1 language\n⚛️ React — go-to frontend\n🌐 Django — backend of choice\n🤖 AI/ML — NumPy, Pandas, OpenCV\n\nWant details on a specific skill?`, links: [] };
    return { text: `I'd love to tell you more${withName("{name}")}! Could you be a bit more specific?\n\nYou can ask about:\n• A specific project\n• A skill or technology\n• His education or experience`, links: [] };
  }

  if (/(what can you|capabilities|what do you do|what can i ask)/i.test(msg))
    return { text: `🤖 I can answer questions about:\n\n• 🛠️ Skills & Tech Stack\n• 💼 Projects (with live links!)\n• 🎓 Education & Background\n• 📬 Contact & Availability\n• 📄 Resume / CV\n• ⭐ GitHub Profile\n• 🏆 Achievements & Interests\n\nJust type your question${withName("{name}")}!`, links: [] };

  if (/(^thanks?$|^thx$|thank you|appreciate|cheers)/i.test(msg))
    return { text: `You're welcome${withName("{name}")}! 😊\n\nFeel free to ask anything else about Deepak. I'm always here to help! 🤝`, links: [] };

  if (/(bye|goodbye|see you|\bcya\b|take care|gotta go|later)/i.test(msg))
    return { text: `Goodbye${withName("{name}")}! 👋\n\nThanks for visiting Deepak's portfolio. Hope to see you again soon! 😊`, links: [] };

  return {
    text: `🤔 Hmm, I'm not sure about that${withName("{name}")}.\n\nI can help you with:\n• Skills or tech stack\n• Projects (with live demos!)\n• Education & background\n• How to contact Deepak`,
    links: [],
  };
};

const TypingIndicator = () => (
  <div className="flex justify-start items-end gap-2">
    <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
      <RiRobot2Fill size={12} color="white" />
    </div>
    <div className="bg-purple-950/50 border border-purple-900/40 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms" }} />
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }} />
      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  </div>
);

const Message = ({ msg }) => (
  <div className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    {msg.role === "assistant" && (
      <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mb-1"
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
        <RiRobot2Fill size={12} color="white" />
      </div>
    )}
    <div className="flex flex-col gap-2 max-w-[75%]">
      <div
        className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words whitespace-pre-line ${
          msg.role === "user"
            ? "text-white rounded-br-sm"
            : "text-gray-200 bg-purple-950/50 border border-purple-900/40 rounded-bl-sm"
        }`}
        style={msg.role === "user" ? { background: "linear-gradient(135deg, #7c3aed, #a855f7)" } : {}}
      >
        {msg.content.text}
      </div>
      {msg.content.links && msg.content.links.length > 0 && (
        <div className="flex flex-wrap gap-2 ml-1">
          {msg.content.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/60 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-400 transition-all duration-200"
            >
              🔗 {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
    {msg.role === "user" && (
      <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mb-1 bg-purple-800/60">
        <FaUser size={10} color="white" />
      </div>
    )}
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: { text: "Hi! I'm Deepak's portfolio assistant 👋\nAsk me about his skills, projects, or experience!", links: [] },
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const userInput = (text ?? input).trim();
    if (!userInput || isTyping) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: { text: userInput, links: [] } },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(userInput);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = ["About", "Skills", "Projects", "Education", "Contact", "Resume"];

  return (
    <>
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.6)] hover:scale-110 transition-all duration-300"
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
      >
        {isOpen ? <IoClose size={24} color="white" /> : <IoChatbubbleEllipses size={24} color="white" />}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[390px] flex flex-col rounded-2xl overflow-hidden border border-purple-900/60 shadow-[0_8px_40px_rgba(100,0,180,0.4)]"
          style={{ height: "530px", background: "#0f0018" }}
        >

          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-purple-900/40"
            style={{ background: "linear-gradient(135deg, #7c3aed22, #a855f711)" }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
              <RiRobot2Fill size={18} color="white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-white">Deepak's Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400">
                  {isTyping ? "Typing..." : "Always Online"}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                userName = null;
                lastTopic = null;
                setMessages([{
                  role: "assistant",
                  content: { text: "Hi! I'm Deepak's portfolio assistant 👋\nAsk me about his skills, projects, or experience!", links: [] },
                }]);
              }}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded-lg hover:bg-purple-900/30"
            >
              Clear
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <Message key={i} msg={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                disabled={isTyping}
                className="text-xs px-3 py-1 rounded-full border border-purple-800/50 bg-purple-950/40 text-purple-300 hover:bg-purple-900/50 hover:border-purple-500 transition-all duration-200 disabled:opacity-40"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-purple-900/40 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Deepak..."
              disabled={isTyping}
              className="flex-1 px-4 py-2.5 rounded-xl bg-purple-950/40 text-white text-sm border border-purple-900/50 focus:outline-none focus:border-purple-500 placeholder-gray-500 transition-colors duration-200 disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
            >
              <IoPaperPlane size={16} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;