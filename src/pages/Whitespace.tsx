export default function Whitespace() {
  // Binary → whitespace encoding
  // 0 = space, 1 = tab
  const hidden =
    "01000110 01001001 01001110 01000001 01001100"
      .replace(/0/g, " ")
      .replace(/1/g, "\t")

  return (
    <div className="center">
      <h2>The Last Illusion</h2>

      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        Inspired by fairytale trolls, King conceived of a shapeshifting entity
        living in the sewers that could embody whatever frightened its target
        most. Pennywise became the central form it used to lure children —
        appearing to be a harmless clown. Scholars and critics have noted the
        effectiveness of this design, as clowns are commonly viewed as uncanny.
      </p>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        Some messages are not meant to be seen.
        <br />
        They are meant to be <em>noticed</em>.
      </p>

      <pre
        style={{
          marginTop: "30px",
          background: "#000",
          padding: "20px",
          border: "1px solid #333",
          whiteSpace: "pre"
        }}
      >
{hidden}
      </pre>

      <p style={{ marginTop: "20px" }}>
        You reached the end.
      </p>
    </div>
  )
}
