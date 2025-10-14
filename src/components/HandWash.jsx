import { useState, useEffect } from 'react'
import { useGsapAnimation } from '../hooks/useGsapAnimation'

const HandWash = () => {
  const [activeImage, setActiveImage] = useState(0)
  const titleRef = useGsapAnimation('fadeUp', 0)
  const imageRef = useGsapAnimation('scaleIn', 0.2)
  const contentRef = useGsapAnimation('fadeUp', 0.4)

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
    <section className="h-screen flex items-start bg-transparent relative overflow-hidden pt-8">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/20 rotate-12"></div>
      </div>

      <div className="container mx-auto pl-16 pr-8 pt-4 relative z-10 w-full flex flex-col">

        {/* 제목 */}
        <div ref={titleRef} className="mb-8">
          <h2 className="font-display text-4xl font-light text-stone-100 tracking-wide mb-3">
            <div className="staggered-line">
              <span className="staggered-text">Hand Wash</span>
            </div>
          </h2>
          <div className="w-16 h-px bg-stone-400 staggered-text"></div>
        </div>

        <div className="grid grid-cols-[3fr_2fr] gap-12 max-w-7xl mt-2">

          {/* 이미지 */}
          <div ref={imageRef} className="self-start mt-[90px] ml-[50px]">
            <div className="relative">
              {/* 화살표 버튼 */}
              <button
                onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-[20px] right-[-90px] top-1/2 -translate-y-1/2 z-10 text-stone-300 hover:text-stone-100 transition-colors"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M25 10 L15 20 L25 30" />
                </svg>
              </button>

              <div className="aspect-[3/4] overflow-hidden w-64">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.name}
                    className="absolute inset-0 w-full h-full object-contain object-center"
                    style={{
                      opacity: index === activeImage ? 1 : 0,
                      transition: 'opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      animation: 'imageFloat 8s ease-in-out infinite'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                className="absolute right-[20px] top-1/2 -translate-y-1/2 z-10 text-stone-300 hover:text-stone-100 transition-colors"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10 L25 20 L15 30" />
                </svg>
              </button>
            </div>

            {/* 이미지 인디케이터 */}
            <div className="flex gap-2 mt-6 justify-center items-center">
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
          <div ref={contentRef} className="self-start mt-[100px]">
            <div className="max-w-lg">
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
