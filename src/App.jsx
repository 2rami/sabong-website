import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlobalBackground from './components/GlobalBackground'
import Hero from './components/Hero'
import Products from './components/Products'
import BodyWash from './components/BodyWash'
import BathSalt from './components/BathSalt'
import Perfume from './components/Perfume'
import HandWash from './components/HandWash'
import ScrollToTop from './components/ScrollToTop'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      syncTouch: true,
    })

    // Lenis와 GSAP ScrollTrigger 동기화
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App