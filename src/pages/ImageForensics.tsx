import { useEffect } from "react"
import { disableDevTools } from "../utils/disableDevTools"

export default function ImageForensics() {
  useEffect(() => {
    disableDevTools()
  }, [])

  return (
    <div className="center">
      <h2>Image Forensics</h2>

      <p>
        Both files are intact.  
        Neither is complete.
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dfoqpwkck/image/upload/v1768903749/img1_mhnyvf.png"
            alt="img 1"
            width={280}
            height={280}
            style={{
              border: "1px solid #3b82f6",
              objectFit: "cover"
            }}
          />
          <p style={{ marginTop: "8px", color: "#93c5fd" }}>
            img1.png
          </p>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dfoqpwkck/image/upload/v1768903749/img2_kl6ewz.jpg"
            alt="img 2"
            width={280}
            height={280}
            style={{
              border: "1px solid #3b82f6",
              objectFit: "cover"
            }}
          />
          <p style={{ marginTop: "8px", color: "#93c5fd" }}>
            img2.png
          </p>
        </div>
      </div>

      <pre style={{ marginTop: "30px" }}>
{`Do not trust what you see.
Trust what survives inspection.`}
      </pre>
    </div>
  )
}
