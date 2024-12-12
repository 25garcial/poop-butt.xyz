async function playChess() {
  let doc = document.createElement("script")
  let script = await fetch(
    "https://raw.githubusercontent.com/Logan-Garcia-inc/browser-Chess/refs/heads/main/script.js",
  )
  script = await script.text()
  doc.textContent = script
  document.body.append(doc)
}
document.querySelector(".chessButton").addEventListener("click", () => {
  playChess()
})

for (let i of document.querySelectorAll("img")) {i.src = "https://github.com/25garcial/poop-butt.xyz/blob/main/" +i.src.slice("https://fiddle.jshell.net/_display".length,i.src.length)+"?raw=true"}

