import { useEffect, useState } from "react"

export default function InspectOnce() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // DevTools are ALLOWED here by design
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="center">
      <p>You know where to look.</p>

      {visible ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `
<!--
flag{dom_whisperer}
-->
`
          }}
        />
      ) : (
        <p style={{ marginTop: "20px" }}>You were too late.</p>
      )}
    </div>
  )
}
