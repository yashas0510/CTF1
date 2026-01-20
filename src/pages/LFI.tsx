import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

const fs: Record<string, string> = {
  "/etc/passwd": "root:x:0:0",
  "/var/log/app.log": "Log rotated. Check old paths.\nHint: backups are rarely where you expect.",
  "../backup/flag.txt": "flag{crypto_is_layered}"
}

export default function LFI() {
  const [path, setPath] = useState("")
  const [output, setOutput] = useState("")

  useEffect(() => {
    disableDevTools()
  }, [])

  const handleRead = () => {
    if (fs[path]) {
      setOutput(fs[path])
    } else {
      setOutput("File not found.")
    }
  }

  return (
    <div className="center">
      <h2>Local File Inclusion</h2>

      <p style={{ maxWidth: "420px", opacity: 0.85 }}>
        Files exist.  
        Paths lie.  
        Sometimes you must step back before moving forward.
      </p>

      <input
        placeholder="enter file path"
        value={path}
        onChange={e => setPath(e.target.value)}
        style={{ marginTop: "16px" }}
      />

      <button onClick={handleRead} style={{ marginTop: "12px" }}>
        Read
      </button>

      {output && (
        <pre style={{ marginTop: "20px" }}>
{output}
        </pre>
      )}
    </div>
  )
}
