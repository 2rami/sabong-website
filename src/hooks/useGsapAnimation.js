import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGsapAnimation = (animationType = 'fadeUp', delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animations = {
      fadeUp: {
        from: { y: 30, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: delay,
        }
      },
      fadeIn: {
        from: { opacity: 0 },
        to: {
          opacity: 1,
          duration: 0.6,
          ease: 'power1.out',
          delay: delay,
        }
      },
      scaleIn: {
        from: { scale: 0.95, opacity: 0 },
        to: {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: delay,
        }
      },
      slideLeft: {
        from: { x: 50, opacity: 0 },
        to: {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: delay,
        }
      },
      slideRight: {
        from: { x: -50, opacity: 0 },
        to: {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: delay,
        }
      }
    }

    const animation = animations[animationType] || animations.fadeUp

    // 초기 상태를 숨김으로 설정
    gsap.set(element, animation.from)

    ScrollTrigger.create({
      trigger: element,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(element, animation.to)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animationType, delay])

  return ref
}
