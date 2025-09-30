import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSectionAnimation } from '../hooks/useSectionAnimation'

const BathSalt = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [gridRef, gridVisible] = useScrollAnimation(0.2)
  const [textRef, textVisible] = useScrollAnimation(0.2)
  const sectionRef = useSectionAnimation()

  const images = [
    {
      src: "/images/bathsalt/Render_Mockup_1600_1200_2025-06-13 (11).jpg",
      name: "라벤더 릴랙싱",
      subtitle: "Lavender Relaxing"
    },
    {
      src: "/images/bathsalt/Render_Mockup_1600_1200_2025-06-13 (12).jpg",
      name: "로즈 로맨틱",
      subtitle: "Rose Romantic"
    },
    {
      src: "/images/bathsalt/Render_Mockup_1600_1200_2025-06-13 (13).jpg",
      name: "자스민 프레시",
      subtitle: "Jasmine Fresh"
    },
    {
      src: "/images/bathsalt/Render_Mockup_1600_1200_2025-06-13 (14).jpg",
      name: "샌달우드 캄",
      subtitle: "Sandalwood Calm"
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden">
      {/* 도트 패턴 */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({length: 50}).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">

        {/* 제목 */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-6xl font-light text-stone-100 tracking-wide mb-6">
            <div className="staggered-line">
              <span className="staggered-text">Bath Balm</span>
            </div>
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-stone-400 staggered-text"></div>
            <p className="text-sm tracking-[0.4em] text-stone-300 uppercase font-light staggered-text">
              Natural Bath Balm
            </p>
            <div className="w-8 h-px bg-stone-400 staggered-text"></div>
          </div>
        </div>

        {/* 이미지 그리드 */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            gridVisible
              ? 'opacity-100 rotate-x-0'
              : 'opacity-0 rotate-x-[90deg]'
          }`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                   style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}>
                <div className="aspect-[3/4]">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-omni text-lg mb-2">{image.name}</h3>
                    <p className="font-pretendard text-sm font-light opacity-90">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 설명 텍스트 */}
        <div
          ref={textRef}
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            textVisible
              ? 'opacity-100 rotate-x-0'
              : 'opacity-0 rotate-x-[90deg]'
          }`}
        >
          <p className="font-pretendard text-xl text-stone-200 leading-relaxed mb-4">
            <span className="staggered-text">천연 식물성 오일과 에센셜 오일의 완벽한 조화</span>
          </p>
          <p className="font-pretendard text-lg text-stone-300 leading-relaxed">
            <span className="staggered-text">따뜻한 목욕물에 녹여 사용하면 피부에 영양을 공급하며 몸과 마음의 긴장을 풀어줍니다</span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default BathSalt