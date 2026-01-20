import { useEffect, useState } from "react"

export default function InspectOnce() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      {visible ? (
        <>
          <p>You know where to look.</p>

          {/* Inject REAL HTML comment into DOM */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
<!--
This will not stay long.
The DOM remembers what the UI forgets.

ZmxhZ3tkb21fd2hpc3BlcmVyfQ==
-->
`
            }}
          />
        </>
      ) : (
        <p>You were too late.</p>
      )}
    </div>
  )
}
