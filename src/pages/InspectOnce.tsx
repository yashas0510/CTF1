import { useEffect, useState } from "react"

export default function InspectOnce() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      <p>You know where to look.</p>

      {visible ? (
        <pre data-hint="ZmxhZ3tkb21fd2hpc3BlcmVyfQ==">
          Inspect the DOM.
        </pre>
      ) : (
        <p>You were too late.</p>
      )}
    console.log("This challenge rewards inspection over reaction.
        The hint exists even after the screen forgets it.
        ZmxhZ3tkb21fd2hpc3BlcmVyfQ==")
     
      
    </div>
  )
}
