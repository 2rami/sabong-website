import { useEffect, useRef } from 'react'

export const useStaggerAnimation = (selector = '.stagger-child') => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이면 자식 요소들에 stagger-item 클래스 추가
            const children = container.querySelectorAll(selector)
            children.forEach((child) => {
              child.classList.add('stagger-item')
            })

            // 한 번만 실행
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2, // 20%가 보이면 실행
        rootMargin: '0px'
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [selector])

  return containerRef
}
