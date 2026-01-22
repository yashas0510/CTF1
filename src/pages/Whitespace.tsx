import { useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function Whitespace() {
  useEffect(() => {
    disableDevTools()
  }, [])

  const hidden =
    "Inspired by fairytale trolls, King conceived of a shapeshifting entity living in the sewers that could embody whatever frightened its target most."

  return (
    <div className="center">
      <h2>The Last Illusion</h2>

      <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
        {hidden}
      </p>

      <p style={{ marginTop: "20px", opacity: 0.75 }}>
        Not everything you copy is visible.
      </p>

      <p>You reached the end.</p>
    </div>
  )
}
