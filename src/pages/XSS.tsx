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

    // Required XSS vector: SVG onload execution
    if (payload.toLowerCase().includes("<svg") && payload.toLowerCase().includes("onload")) {
      setSolved(true)
    }
  }

  return (
    <div className="center">
      <h2>XSS</h2>

      <input
        placeholder="say the magical words"
        value={payload}
        onChange={e => setPayload(e.target.value)}
      />

      <button onClick={handleSubmit} style={{ marginTop: "12px" }}>
        Submit
      </button>

      {/* Render user input only after submit */}
      {submitted && (
        <div
          style={{ marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: payload }}
        />
      )}

      {solved && (
        <pre style={{ marginTop: "20px" }}>
{`flag{xss_is_not_a_bug_its_a_feature}`}
        </pre>
      )}
    </div>
  )
}
