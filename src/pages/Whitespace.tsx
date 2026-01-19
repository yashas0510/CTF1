export default function Whitespace() {
  const hidden =
    "01000110 01001001 01001110 01000001 01001100"
      .replace(/0/g, " ")
      .replace(/1/g, "\t")

  return (
    <div className="center">
      <pre>{hidden}</pre>
      <p>You reached the end.</p>
    </div>
  )
}
