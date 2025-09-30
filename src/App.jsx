import { useEffect } from 'react'
import Lenis from 'lenis'
import GlobalBackground from './components/GlobalBackground'
import Hero from './components/Hero'
import Products from './components/Products'
import BodyWash from './components/BodyWash'
import BathSalt from './components/BathSalt'
import Perfume from './components/Perfume'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <GlobalBackground />
      <div className="relative z-0">
        <Hero />
        <Products />
        <BodyWash />
        <BathSalt />
        <Perfume />
      </div>
    </div>
  )
}

export default App