export default function Whitespace() {
  /*
    Encoding scheme:
    U+200B (Zero Width Space) = 0
    U+200C (Zero Width Non-Joiner) = 1

    Binary for "ALL_SET":
    A  01000001
    L  01001100
    L  01001100
    _  01011111
    S  01010011
    E  01000101
    T  01010100
  */

  const hidden = (
    "Inspired\u200C\u200B\u200B\u200B\u200B\u200B\u200B\u200C\u200B " +
    "by\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "fairytale\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "trolls,\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "King\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "conceived\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "of\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "a\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "shapeshifting\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "entity\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "living\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "in\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "the\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "sewers\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "that\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "could\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "embody\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "whatever\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "frightened\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "its\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "target\u200B\u200C\u200B\u200B\u200C\u200C\u200B\u200B " +
    "most."
  )

  return (
    <div className="center">
      <h2>The Last Illusion</h2>

      <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
        {hidden}
      </p>

      <p style={{ marginTop: "20px", opacity: 0.75 }}>
        Not everything you copy is visible.
      </p>

      <p>You reached the end.</p>
    </div>
  )
}
