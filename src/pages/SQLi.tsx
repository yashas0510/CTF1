import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function SQLi() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  useEffect(() => {
    disableDevTools()
  }, [])

  const query = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`

  if (query.includes("' OR '1'='1")) {
    return (
      <div className="center">
        <h2>Authenticated</h2>
        <p>flag{"{base64_is_just_rot13_with_more_steps}"}</p>
      </div>
    )
  }

  return (
    <div className="center">
      <input
        placeholder="username"
        onChange={e => setUser(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={e => setPass(e.target.value)}
      />
      <p>Login failed.</p>
    </div>
  )
}
