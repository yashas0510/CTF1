export function disableDevTools() {
  document.addEventListener("keydown", e => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
    ) {
      e.preventDefault()
    }
  })

  setInterval(() => {
    if (window.outerWidth - window.innerWidth > 160) {
      document.body.innerHTML =
        "<h1 style='color:white;background:black;padding:40px'>DevTools detected</h1>"
    }
  }, 1000)
}
