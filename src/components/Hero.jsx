import { useSectionAnimation } from '../hooks/useSectionAnimation'

const Hero = () => {
  const sectionRef = useSectionAnimation()

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* 메인 타이틀 */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-8 animate-glow">
            <img
              src="/logo.svg"
              alt="SABONG Logo"
              className="mx-auto w-96 h-48 md:w-[32rem] md:h-64 transform hover:scale-110 transition-all duration-700 animate-fade-in-up"
            />
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-32 right-8 z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-white/70"></div>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="text-xs text-white/90 font-light tracking-wider uppercase animate-pulse drop-shadow-lg">
            Scroll Down
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero