import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 500px 이상이면 버튼 표시
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-12 z-50 flex flex-col items-center gap-2 text-stone-300 hover:text-stone-100 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="맨 위로 이동"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce-slow"
        style={{
          animation: 'bounce 2s ease-in-out infinite'
        }}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span className="text-xs tracking-widest uppercase font-light">Top</span>
    </button>
  )
}

export default ScrollToTop
