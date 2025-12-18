const chat = document.getElementById("chat")
const input = document.getElementById("input")

function addMessage(role, text) {
  const div = document.createElement("div")
  div.innerText = `${role}: ${text}`
  chat.appendChild(div)
}

async function send() {
  const text = input.value
  if (!text) return

  addMessage("You", text)
  input.value = ""

  // MOCK AI RESPONSE (SAFE START)
  setTimeout(() => {
    addMessage("AI", "This is where AI response will appear.")
  }, 500)
}
