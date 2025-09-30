import { useEffect, useState } from 'react'

const GlobalBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 살짝만 페이드아웃 - 로고가 너무 흐려지지 않게
  const fadeOut = Math.min(scrollY / 1200, 0.3) // 1200px에서 최대 30%만 페이드

  return (
    <>
      {/* Light rays 배경 효과 */}
      <div className="light-rays">
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>
      </div>

      <div
        className="fixed inset-0 -z-10 overflow-hidden transition-opacity duration-700"
        style={{
          opacity: 1 - fadeOut
        }}
      >
        {/* 브랜드 이미지 */}
        <img
          src="/images/brand-image.png"
          alt="사봉 브랜드"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  )
}

export default GlobalBackground