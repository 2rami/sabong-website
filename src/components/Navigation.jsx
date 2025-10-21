import { useState, useEffect } from 'react'

const Navigation = ({ lenis }) => {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'products', name: 'Collection' },
    { id: 'bodywash', name: 'Body Wash' },
    { id: 'bathsalt', name: 'Bath Balm' },
    { id: 'perfume', name: 'Perfume' },
    { id: 'handwash', name: 'Hand Wash' }
  ]

  // 스크롤 위치에 따라 현재 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 섹션으로 스크롤 이동
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section && lenis) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
          >
            {/* 섹션 이름 - 호버 시 보임 */}
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-stone-200 font-pretendard tracking-wider whitespace-nowrap bg-black/50 px-3 py-1 rounded">
              {section.name}
            </span>

            {/* 인디케이터 점 */}
            <div
              className={`transition-all duration-300 ${
                activeSection === section.id
                  ? 'w-3 h-3 bg-stone-100'
                  : 'w-2 h-2 bg-stone-400 hover:bg-stone-200'
              } rounded-full border border-stone-300`}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
