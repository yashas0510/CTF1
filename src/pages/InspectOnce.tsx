import { useEffect, useState } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function InspectOnce() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    disableDevTools()
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      {visible ? (
        <pre>flag{"{dom_whisperer}"}</pre>
      ) : (
        <p>You were too late.</p>
      )}
    </div>
  )
}
