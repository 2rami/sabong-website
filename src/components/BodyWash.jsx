import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'

const BodyWash = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [contentRef, contentVisible] = useScrollAnimation(0.2)
  const [imageRef, imageVisible] = useScrollAnimation(0.2)
  const sectionRef = useSectionAnimation()

  const images = [
    "/images/bodywash/Render_Mockup_1600_1200_2025-06-09.jpg",
    "/images/bodywash/Render_Mockup_1600_1200_2025-06-13.jpg",
    "/images/bodywash/Render_Mockup_1600_1200_2025-06-13 (3).jpg",
    "/images/bodywash/Render_Mockup_1600_1200_2025-06-13 (4).jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 5000) // 5초로 늘림
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`mb-20 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-6xl font-light text-stone-100 tracking-wide mb-6">
            <div className="staggered-line">
              <span className="staggered-text">Body Wash</span>
            </div>
          </h2>
          <div className="w-20 h-px bg-stone-400 staggered-text"></div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* 이미지 */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 [perspective:1200px] [transform-style:preserve-3d] ${
              imageVisible
                ? 'opacity-100 rotate-x-0'
                : 'opacity-0 rotate-x-[90deg]'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl"
                 style={{ clipPath: 'polygon(0 0, 100% 5%, 95% 100%, 0% 95%)' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="바디 워시"
                  className="absolute inset-0 w-full h-full object-cover"
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
                      ? 'w-8 h-px bg-stone-600'
                      : 'w-4 h-px bg-stone-300 hover:bg-stone-400'
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
              <div className="bg-white/80 backdrop-blur-sm px-8 py-12 shadow-lg border border-stone-200">
                <div className="text-center mb-8">
                  <div className="staggered-line">
                    <p className="font-pretendard text-lg text-stone-700 leading-relaxed staggered-text"><span className="font-bold">사봉 바디 워시</span>는</p>
                  </div>
                  <div className="staggered-line">
                    <p className="font-pretendard text-lg text-stone-700 leading-relaxed staggered-text">피부에 <span className="font-bold">부드럽게</span> 작용하는</p>
                  </div>
                  <div className="staggered-line">
                    <p className="font-pretendard text-lg text-stone-700 leading-relaxed staggered-text"><span className="font-bold">천연 성분</span>으로 만들어졌습니다</p>
                  </div>
                </div>
                <div className="w-12 h-px bg-stone-400 mx-auto mb-8 staggered-text"></div>
                <div className="text-center">
                  <div className="staggered-line">
                    <p className="font-pretendard text-base text-stone-600 leading-relaxed staggered-text"><span className="font-bold">풍성한 거품</span>과 함께 <span className="font-bold">은은한 향기</span>가</p>
                  </div>
                  <div className="staggered-line">
                    <p className="font-pretendard text-base text-stone-600 leading-relaxed staggered-text">하루의 <span className="font-bold">피로를 씻어냅니다</span></p>
                  </div>
                  <div className="mt-4">
                    <div className="staggered-line">
                      <p className="font-pretendard text-base text-stone-600 leading-relaxed staggered-text"><span className="font-bold">천연 유래 성분 98%</span>와</p>
                    </div>
                    <div className="staggered-line">
                      <p className="font-pretendard text-base text-stone-600 leading-relaxed staggered-text"><span className="font-bold">pH 밸런스 포뮬러</span>로</p>
                    </div>
                    <div className="staggered-line">
                      <p className="font-pretendard text-base text-stone-600 leading-relaxed staggered-text"><span className="font-bold">민감한 피부</span>까지 부드럽게 케어합니다</p>
                    </div>
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

export default BodyWash