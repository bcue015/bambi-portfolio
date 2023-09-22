import { useState } from "react"
import "./scss/main.scss"
import Header from "./components/Header"
import LargeHero from "./components/LargeHero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LargeHero />
    </>
  )
}

export default App
