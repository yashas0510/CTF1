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
        href="/clown.txt"
        download
        style={{
          marginTop: "24px",
          display: "inline-block",
          padding: "10px 18px",
          border: "1px solid #3b82f6",
          borderRadius: "6px",
          color: "#93c5fd",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        Download 
      </a>

      <p style={{ marginTop: "20px", opacity: 0.75 }}>
        Not everything you read is meant to be trusted.
      </p>
    </div>
  )
}
