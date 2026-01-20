import { Routes, Route, Navigate } from "react-router-dom"

import Init from "./pages/Init"
import SQLi from "./pages/SQLi"
import InspectOnce from "./pages/InspectOnce"
import Base64 from "./pages/Base64"
import ImageForensics from "./pages/ImageForensics"
import XSS from "./pages/XSS"
import LFI from "./pages/LFI"
import Crypto from "./pages/Crypto"
import Whitespace from "./pages/Whitespace"

export default function Router() {
  return (
    <Routes>

      {/* Redirect root to init */}
      <Route path="/" element={<Navigate to="/init" replace />} />

      {/* 1️⃣ Intro only */}
      <Route path="/init" element={<Init />} />

      {/* 2️⃣ SQLi */}
      <Route
        path="/flag{xss_is_not_a_bug_its_a_feature}"
        element={<SQLi />}
      />

      {/* 3️⃣ Inspect-once */}
      <Route
        path="/flag{base64_is_just_rot13_with_more_steps}"
        element={<InspectOnce />}
      />

      {/* 4️⃣ Base64 / DOM */}
      <Route
        path="/flag{dom_whisperer}"
        element={<ImageForensics />}
      />

      {/* 5️⃣ Image forensics */}
      <Route
        path="/flag{pixels_dont_lie}"
        element={<XSS />}
      />

      {/* 6️⃣ XSS */}
      <Route
        path="/flag{xss_gate_opened}"
        element={<LFI />}
      />

      {/* 7️⃣ LFI */}
      <Route
        path="/flag{relative_truths}"
        element={<Crypto />}
      />

      {/* 8️⃣ Cryptography */}
      <Route
        path="/flag{crypto_is_layered}"
        element={<Whitespace />}
      />

      {/* 9️⃣ Whitespace – FINAL */}
      <Route
        path="/flag{spaces_speak}"
        element={<Base64 />}
      />

    </Routes>
  )
}
