import { useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function Base64() {
  useEffect(() => {
    disableDevTools()
  }, [])

  return (
    <div className="center">
      <h2>Progress Checkpoint</h2>

      <p>All challenges completed successfully.</p>

      

      <p>Proceed forward.</p>
    </div>
  )
}
