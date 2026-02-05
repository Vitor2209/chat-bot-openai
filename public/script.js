async function sendMessage() {
  const messageInput = document.getElementById("message");
  const chat = document.getElementById("chat");

  const message = messageInput.value;
  if (!message) return;

  chat.innerHTML += `<div class="message user"><strong>Você:</strong> ${message}</div>`;
  messageInput.value = "";

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  chat.innerHTML += `<div class="message bot"><strong>Bot:</strong> ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

