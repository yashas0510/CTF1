import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function XSS() {
  const [payload, setPayload] = useState("")

  useEffect(() => {
    disableDevTools()
  }, [])

  return (
    <div className="center">
      <input
        placeholder="say something"
        onChange={e => setPayload(e.target.value)}
      />
      <div dangerouslySetInnerHTML={{ __html: payload }} />
    </div>
  )
}
