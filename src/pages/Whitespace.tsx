export default function Whitespace() {
  return (
    <div className="center">
      <h2>The Last Illusion</h2>

      <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
        Inspired by fairytale trolls, King conceived of a shapeshifting entity
        living in the sewers that could embody whatever frightened its target
        most.
      </p>

      <a
        href="/clown.txt"   // ← YOU will put the link here later
        download
        style={{
          marginTop: "24px",
          display: "inline-block",
          color: "#93c5fd",
          textDecoration: "underline",
          cursor: "pointer"
        }}
      >
        
      </a>

      <p style={{ marginTop: "20px", opacity: 0.75 }}>
        Not everything you read is meant to be trusted.
      </p>
    </div>
  )
}
