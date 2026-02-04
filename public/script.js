const sendBtn = document.getElementById("send");
const messageInput = document.getElementById("message");
const reply = document.getElementById("reply");

sendBtn.addEventListener("click", async () => {
  const message = messageInput.value.trim();

  if (!message) return;

  reply.textContent = "Thinking...";

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    reply.textContent = data.reply;
  } catch (error) {
    reply.textContent = "Error connecting to server.";
  }
});
