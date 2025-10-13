import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'

const HandWash = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [contentRef, contentVisible] = useScrollAnimation(0.2)
  const [imageRef, imageVisible] = useScrollAnimation(0.2)
  const sectionRef = useSectionAnimation()

  const images = [
    {
      src: "/images/handwash/핸드워시 아로마 병.png",
      name: "라벤더 아로마틱",
      subtitle: "Lavender Aromatic"
    },
    {
      src: "/images/handwash/핸드워시 샌달우드 병.png",
      name: "샌달우드 & 로즈",
      subtitle: "Sandalwood & Rose"
    },
    {
      src: "/images/handwash/핸드워시 자스민 병.png",
      name: "자스민",
      subtitle: "Jasmine"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section ref={sectionRef} className="h-screen flex items-center bg-transparent relative overflow-hidden py-20 mb-[100vh]">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-gray-400 rotate-45" style={{
          animation: 'float1 8s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-gray-400 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(156,163,175,0.3) 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border-2 border-gray-400 rotate-45" style={{
          animation: 'float2 6s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10 w-full h-full flex flex-col">

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`mb-8 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl font-light text-stone-100 tracking-wide mb-3">
            <div className="staggered-line">
              <span className="staggered-text">Hand Wash</span>
            </div>
          </h2>
          <div className="w-16 h-px bg-stone-400 staggered-text"></div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto flex-1">

          {/* 이미지 */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 [perspective:1200px] [transform-style:preserve-3d] ${
              imageVisible
                ? 'opacity-100 rotate-x-0'
                : 'opacity-0 rotate-x-[90deg]'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.name}
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    opacity: index === activeImage ? 1 : 0,
                    transition: 'opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animation: index === activeImage ? 'imageFloat 8s ease-in-out infinite' : 'none'
                  }}
                />
              ))}
            </div>

            {/* 이미지 인디케이터 */}
            <div className="flex gap-2 mt-6 justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`transition-all duration-700 ease-out ${
                    activeImage === index
                      ? 'w-8 h-px bg-stone-300'
                      : 'w-4 h-px bg-stone-500 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 내용 */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-400 ${
              contentVisible
                ? 'opacity-100 rotate-x-0'
                : 'opacity-0 rotate-x-[90deg]'
            }`}
          >
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <div className="staggered-line">
                  <p className="font-pretendard text-lg text-stone-100 leading-relaxed staggered-text"><span className="font-bold">사봉 핸드 워시</span>는</p>
                </div>
                <div className="staggered-line">
                  <p className="font-pretendard text-lg text-stone-100 leading-relaxed staggered-text">손에 <span className="font-bold">부드럽게</span> 작용하는</p>
                </div>
                <div className="staggered-line">
                  <p className="font-pretendard text-lg text-stone-100 leading-relaxed staggered-text"><span className="font-bold">천연 성분</span>으로 만들어졌습니다</p>
                </div>
              </div>
              <div className="w-12 h-px bg-stone-400 mx-auto mb-8 staggered-text"></div>
              <div className="text-center">
                <div className="staggered-line">
                  <p className="font-pretendard text-base text-stone-200 leading-relaxed staggered-text"><span className="font-bold">부드러운 거품</span>과 함께 <span className="font-bold">섬세한 향기</span>가</p>
                </div>
                <div className="staggered-line">
                  <p className="font-pretendard text-base text-stone-200 leading-relaxed staggered-text">손을 <span className="font-bold">깨끗하게 세정합니다</span></p>
                </div>
                <div className="mt-4">
                  <div className="staggered-line">
                    <p className="font-pretendard text-base text-stone-200 leading-relaxed staggered-text"><span className="font-bold">천연 유래 성분 98%</span>와</p>
                  </div>
                  <div className="staggered-line">
                    <p className="font-pretendard text-base text-stone-200 leading-relaxed staggered-text"><span className="font-bold">pH 밸런스 포뮬러</span>로</p>
                  </div>
                  <div className="staggered-line">
                    <p className="font-pretendard text-base text-stone-200 leading-relaxed staggered-text"><span className="font-bold">민감한 피부</span>까지 부드럽게 케어합니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HandWash
