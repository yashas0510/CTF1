export default function Init() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(
            to bottom,
            #93c5fd 0%,
            #3b82f6 35%,
            #1e3a8a 65%,
            #000000 100%
          )
        `,
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1><p>A multi-vector Capture The Flag</p></h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>There are no submissions.</li>
        <li>Every flag is a path.</li>
        <li>Progress is movement.</li>
        <li>Observation beats automation.</li>
      </ul>

      <pre
        style={{
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.3)",
          padding: "16px",
          maxWidth: "620px"
        }}
      >
{`Some paths are not direct.
Four jumps are enough.`}
      </pre>

      {/* 
        The following div injects a REAL HTML comment.
        This WILL appear in page source and Elements.
      */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
<!--
Four jumps.
Not all forward.
Not all letters.
Begin where text becomes data.

PT1Ec3lXS3EwU0pNejlJTHNBVXFjOTFNMVcyS3U5U3FpNTJLbXkyS21BVXI3cUpMZk0yWQ==
-->
`
        }}
      />
    </div>
  )
}
