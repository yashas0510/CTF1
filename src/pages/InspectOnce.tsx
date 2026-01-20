import { useEffect, useState } from "react"

export default function InspectOnce() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000) // ⏱ 5 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      <p>You know where to look.</p>

      {/* HTML comment is injected ONCE and NEVER removed */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
<!--
Time fades. Source remains.

ZmxhZ3tkb21fd2hpc3BlcmVyfQ==
-->
`
        }}
      />

      {!visible && <p>You were too late.</p>}
    </div>
  )
}
