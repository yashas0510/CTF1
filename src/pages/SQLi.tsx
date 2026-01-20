import { useState, useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function SQLi() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [attempted, setAttempted] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    disableDevTools()
  }, [])

  const handleLogin = () => {
    setAttempted(true)

    const query = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`

    if (query.includes("' OR '1'='1")) {
      setAuthenticated(true)
    }
  }

  if (authenticated) {
    return (
      <div className="center">
        <h2>Authenticated</h2>
        <p>flag{"{base64_is_just_rot13_with_more_steps}"}</p>
      </div>
    )
  }

  return (
    <div className="center">
      <h2>Login</h2>

      <input
        placeholder="username"
        value={user}
        onChange={e => setUser(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Log in</button>

      {attempted && <p>Login failed.</p>}
    </div>
  )
}
