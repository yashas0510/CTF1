import { useNavigate } from "react-router-dom"

export default function Landing() {
  const nav = useNavigate()
  return (
    <div className="center">
      <h1>OBSCURA</h1>
      <p>A multi-vector Capture The Flag</p>
      <button onClick={() => nav("/init")}>ENTER</button>
    </div>
  )
}
