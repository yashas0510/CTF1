import { useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function Base64() {
  useEffect(() => {
    disableDevTools()
  }, [])

  return (
    <div className="center">
      <p>You know where to look.</p>

      {/* ZmxhZ3twaXhlbHNfZG9udF9saWV9 */}

      <pre data-hidden="ZmxhZ3twaXhlbHNfZG9udF9saWV9">
        const answer = "not this"
      </pre>
    </div>
  )
}
