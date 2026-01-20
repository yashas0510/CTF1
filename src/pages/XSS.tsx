import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function XSS() {
  const [payload, setPayload] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    disableDevTools()
  }, [])

  const handleSubmit = () => {
    setSubmitted(true)

    const p = payload.toLowerCase()

    // Medium-difficulty XSS requirement:
    // - must inject an <img> tag
    // - must use onerror
    // - must execute javascript (alert / console / document)
    if (
      p.includes("<img") &&
      p.includes("onerror") &&
      (p.includes("alert") || p.includes("console") || p.includes("document"))
    ) {
      setSolved(true)
    }
  }

  return (
    <div className="center">
      <h2>NEXT CHALLENGE AWAITS</h2>

      <input
        placeholder="say the magical words"
        value={payload}
        onChange={e => setPayload(e.target.value)}
      />

      <button onClick={handleSubmit} style={{ marginTop: "12px" }}>
        Submit
      </button>

      {submitted && (
        <div
          style={{ marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: payload }}
        />
      )}

      {solved && (
        <pre style={{ marginTop: "20px" }}>
{`/flag{xss_gate_opened}`}
        </pre>
      )}
    </div>
  )
}
