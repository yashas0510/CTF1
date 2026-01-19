import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

const fs: Record<string, string> = {
  "/etc/passwd": "root:x:0:0",
  "/var/log/app.log": "see ../backup/flag.txt",
  "/backup/flag.txt": "flag{crypto_is_layered}"
}

export default function LFI() {
  const [path, setPath] = useState("")

  useEffect(() => {
    disableDevTools()
  }, [])

  return (
    <div className="center">
      <input onChange={e => setPath(e.target.value)} />
      <pre>{fs[path]}</pre>
    </div>
  )
}
