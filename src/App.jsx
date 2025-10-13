import { useEffect } from 'react'
import Lenis from 'lenis'
import GlobalBackground from './components/GlobalBackground'
import Hero from './components/Hero'
import Products from './components/Products'
import BodyWash from './components/BodyWash'
import BathSalt from './components/BathSalt'
import Perfume from './components/Perfume'
import HandWash from './components/HandWash'
import Lanyard from './components/Lanyard'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // 터치에서는 네이티브 스크롤 사용
      syncTouch: true,
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
        <HandWash />

        {/* Discord Lanyard */}
        <div className="container mx-auto px-4 py-20">
          <Lanyard userId="YOUR_DISCORD_USER_ID" theme="dark" />
        </div>
      </div>
    </div>
  )
}

export default App