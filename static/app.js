const messages = document.getElementById("messages");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const language = document.getElementById("language");
const status = document.getElementById("status");

const langCodes = { Tamil: "ta-IN", Telugu: "te-IN", Hindi: "hi-IN" };

function addMessage(text, who="bot") {
  const row = document.createElement("div");
  row.className = `message ${who}`;
  if (who === "bot") {
    row.innerHTML = `<div class="avatar">S</div><div class="bubble"></div>`;
    row.querySelector(".bubble").textContent = text;
  } else {
    row.innerHTML = `<div class="bubble"></div>`;
    row.querySelector(".bubble").textContent = text;
  }
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  return row;
}

async function ask(question) {
  const q = (question ?? input.value).trim();
  if (!q) return;
  input.value = "";
  addMessage(q, "user");
  status.textContent = "Thinking…";

  try {
    const res = await fetch("/api/chat", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:q, language:language.value})
    });
    const data = await res.json();
    const reply = data.reply || data.error || "Please try again.";
    addMessage(reply, "bot");
    speak(reply);
    status.textContent = "You can ask another question.";
  } catch {
    addMessage("I couldn't connect right now. Please try again.", "bot");
    status.textContent = "Connection problem.";
  }
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCodes[language.value] || "ta-IN";
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

sendBtn.onclick = () => ask();
input.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
});

document.querySelectorAll(".quick-actions button").forEach(btn => {
  btn.onclick = () => ask(btn.dataset.q);
});

let recognition;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    micBtn.classList.add("listening");
    status.textContent = `Listening in ${language.value}…`;
  };
  recognition.onend = () => {
    micBtn.classList.remove("listening");
  };
  recognition.onerror = () => {
    micBtn.classList.remove("listening");
    status.textContent = "I couldn't hear that. Please try again.";
  };
  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    ask(transcript);
  };

  micBtn.onclick = () => {
    recognition.lang = langCodes[language.value] || "ta-IN";
    recognition.start();
  };
} else {
  micBtn.disabled = true;
  status.textContent = "Voice input works best in Chrome. You can still type.";
}

language.addEventListener("change", () => {
  status.textContent = `Ready for ${language.value}.`;
});
