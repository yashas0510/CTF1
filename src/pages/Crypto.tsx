import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function Crypto() {
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    disableDevTools()
  }, [])

  const handleSubmit = () => {
    setSubmitted(true)

    if (answer.trim() === "/flag{spaces_talk_worth}") {
      setSolved(true)
    }
  }

  return (
    <div className="center">
      <h2>Cryptography Challenge</h2>

      {/* Cipher image */}
      <img
        src="https://res.cloudinary.com/dfoqpwkck/image/upload/v1768997927/crypto_egn7wl.png" 
        alt="Cipher Wheel"
        width={520}
        height={520}
        style={{
          border: "1px solid #3b82f6",
          marginBottom: "20px",
          objectFit: "contain"
        }}
      />

      <input
        placeholder="enter the decoded flag"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <button onClick={handleSubmit} style={{ marginTop: "12px" }}>
        Submit
      </button>

      {submitted && !solved && (
        <p style={{ marginTop: "16px", color: "#93c5fd" }}>
          That pattern does not align.
        </p>
      )}

      {solved && (
        <pre style={{ marginTop: "20px" }}>
{`Valid}`}
        </pre>
      )}
    </div>
  )
}
