import { useEffect, useRef } from 'react'

export const useSectionAnimation = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentSection = sectionRef.current
    if (!currentSection) return

    // 초기 상태를 바로 정상으로 설정 (SSR/프로덕션 환경 대응)
    currentSection.style.transform = 'translateY(0) scale(1)'
    currentSection.style.opacity = '1'
    currentSection.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out'

    // 스크롤에 따른 자연스러운 애니메이션
    const handleScroll = () => {
      const rect = currentSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // 섹션이 화면에 들어오기 시작할 때부터 애니메이션 시작
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // 스크롤 진행도 계산 (0~1)
        const scrollProgress = Math.max(0, Math.min(1,
          (windowHeight - rect.top) / (windowHeight + sectionHeight * 0.5)
        ))

        // Y축 이동 (아래에서 위로 올라오는 효과)
        const translateY = (1 - scrollProgress) * 50 // 100에서 50으로 줄임

        // 투명도 (점진적으로 나타나는 효과)
        const opacity = Math.min(1, scrollProgress * 2) // 더 빠르게 나타나도록

        // 스케일 (살짝 커지면서 나타나는 효과)
        const scale = 0.98 + (scrollProgress * 0.02) // 더 미묘하게

        currentSection.style.transform = `translateY(${translateY}px) scale(${scale})`
        currentSection.style.opacity = opacity
        currentSection.style.transition = 'none' // 부드러운 스크롤을 위해 transition 제거
      } else if (rect.top >= windowHeight) {
        // 섹션이 아직 화면에 들어오지 않았을 때
        currentSection.style.transform = 'translateY(50px) scale(0.98)'
        currentSection.style.opacity = '0.7' // 완전히 투명하지 않게
      }
    }

    // 초기 상태 설정
    setTimeout(handleScroll, 100) // 약간의 지연 후 실행

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return sectionRef
}